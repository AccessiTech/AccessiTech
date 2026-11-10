import { render, waitFor } from '@testing-library/react';
afterEach(() => {
  // Clean up head to avoid tag pollution between tests
  document.head.innerHTML = '';
});
import Metadata from '../Metadata';
import { adoptGeneratedMetadata } from '../../../settings/getMetaData';

describe('Metadata', () => {
  const baseProps = {
    title: 'Test Title',
    description: 'Test description.',
    canonical: 'https://accessi.tech/test',
  };

  it('renders title, description, and canonical link', async () => {
    render(<Metadata {...baseProps} />);
    await waitFor(() => {
      const title = document.head.querySelector('title');
      const metaDesc = document.head.querySelector('meta[name="description"]');
      const canonical = document.head.querySelector('link[rel="canonical"]');
      expect(title).toHaveTextContent('Test Title');
      expect(metaDesc).toHaveAttribute('content', 'Test description.');
      expect(canonical).toHaveAttribute('href', 'https://accessi.tech/test');
    });
  });

  it('renders Open Graph and Twitter meta tags with defaults', async () => {
    render(<Metadata {...baseProps} />);
    await waitFor(() => {
      expect(
        document.head.querySelector('meta[property="og:title"]') ||
          document.head.querySelector('meta[name="og:title"]')
      ).toHaveAttribute('content', 'Test Title');
      expect(
        document.head.querySelector('meta[property="og:description"]') ||
          document.head.querySelector('meta[name="og:description"]')
      ).toHaveAttribute('content', 'Test description.');
      expect(
        document.head.querySelector('meta[property="og:url"]') ||
          document.head.querySelector('meta[name="og:url"]')
      ).toHaveAttribute('content', 'https://accessi.tech/test');
      expect(
        document.head.querySelector('meta[property="og:type"]') ||
          document.head.querySelector('meta[name="og:type"]')
      ).toHaveAttribute('content', 'website');
      expect(
        document.head.querySelector('meta[property="og:image"]') ||
          document.head.querySelector('meta[name="og:image"]')
      ).toBeTruthy();
      expect(
        document.head.querySelector('meta[property="og:site_name"]') ||
          document.head.querySelector('meta[name="og:site_name"]')
      ).toBeTruthy();
      expect(document.head.querySelector('meta[name="twitter:title"]')).toHaveAttribute(
        'content',
        'Test Title'
      );
      expect(document.head.querySelector('meta[name="twitter:description"]')).toHaveAttribute(
        'content',
        'Test description.'
      );
      expect(document.head.querySelector('meta[name="twitter:image"]')).toBeTruthy();
      expect(document.head.querySelector('meta[name="twitter:card"]')).toBeTruthy();
    });
  });

  it('renders custom image, imageAlt, and type', async () => {
    render(<Metadata {...baseProps} image="custom.png" imageAlt="Alt text" type="article" />);
    await waitFor(() => {
      expect(
        document.head.querySelector('meta[property="og:type"]') ||
          document.head.querySelector('meta[name="og:type"]')
      ).toHaveAttribute('content', 'article');
      expect(
        document.head.querySelector('meta[property="og:image"]') ||
          document.head.querySelector('meta[name="og:image"]')
      ).toHaveAttribute('content', expect.stringContaining('custom.png'));
      expect(
        document.head.querySelector('meta[property="og:image:alt"]') ||
          document.head.querySelector('meta[name="og:image:alt"]')
      ).toHaveAttribute('content', 'Alt text');
      expect(document.head.querySelector('meta[name="twitter:image:alt"]')).toHaveAttribute(
        'content',
        'Alt text'
      );
    });
  });

  it('renders custom siteName and twitterCreator', async () => {
    render(<Metadata {...baseProps} siteName="CustomSite" twitterCreator="@custom" />);
    await waitFor(() => {
      expect(
        document.head.querySelector('meta[property="og:site_name"]') ||
          document.head.querySelector('meta[name="og:site_name"]')
      ).toHaveAttribute('content', 'CustomSite');
      expect(document.head.querySelector('meta[name="twitter:creator"]')).toHaveAttribute(
        'content',
        '@custom'
      );
    });
  });

  it('uses property attributes for Open Graph and name attributes for Twitter', async () => {
    render(<Metadata {...baseProps} />);
    await waitFor(() => {
      expect(document.head.querySelector('meta[property="og:url"]')).toHaveAttribute(
        'content',
        baseProps.canonical
      );
      expect(document.head.querySelector('meta[name="og:url"]')).toBeNull();
      expect(document.head.querySelector('meta[name="twitter:url"]')).toHaveAttribute(
        'content',
        baseProps.canonical
      );
    });
  });

  it('reconciles an adopted SSG head and updates it without touching unrelated head nodes', async () => {
    document.head.innerHTML = `
      <link rel="canonical" href="https://accessi.tech/wcag/old">
      <meta name="description" content="Static description">
      <meta property="og:url" content="https://accessi.tech/wcag/old">
      <meta name="og:url" content="https://accessi.tech/blog/old">
      <meta name="twitter:url" content="https://accessi.tech/wcag/old">
      <meta name="robots" content="index,follow">
      <meta name="google-site-verification" content="verification-token">
      <meta name="third-party-metadata" content="keep">
      <link rel="stylesheet" href="/styles.css">
      <link rel="icon" href="/favicon.ico">
      <script type="application/ld+json">{"@type":"Organization"}</script>
      <script src="/analytics.js"></script>`;
    const retained = [
      ...document.head.querySelectorAll(
        'meta[name="robots"], meta[name="google-site-verification"], meta[name="third-party-metadata"], link[rel="stylesheet"], link[rel="icon"], script'
      ),
    ];
    adoptGeneratedMetadata(document.head);
    adoptGeneratedMetadata(document.head);
    const { rerender } = render(<Metadata {...baseProps} />);
    const expectHead = async (canonical: string, description: string) => {
      await waitFor(() => {
        expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
        expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
          'href',
          canonical
        );
        expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
        expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
          'content',
          description
        );
        expect(
          document.head.querySelectorAll('meta[property="og:url"], meta[name="og:url"]')
        ).toHaveLength(1);
        expect(document.head.querySelector('meta[property="og:url"]')).toHaveAttribute(
          'content',
          canonical
        );
        expect(document.head.querySelectorAll('meta[name="twitter:url"]')).toHaveLength(1);
        expect(document.head.querySelector('meta[name="twitter:url"]')).toHaveAttribute(
          'content',
          canonical
        );
      });
      retained.forEach(node => {
        expect(node.parentNode).toBe(document.head);
        expect(node).not.toHaveAttribute('data-react-helmet');
      });
    };
    await expectHead(baseProps.canonical, baseProps.description);
    rerender(
      <Metadata
        {...baseProps}
        canonical="https://www.accessi.tech/blog/next"
        description="Next description"
      />
    );
    await expectHead('https://www.accessi.tech/blog/next', 'Next description');
  });
});
