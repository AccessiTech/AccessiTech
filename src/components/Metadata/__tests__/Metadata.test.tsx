import { render, waitFor } from '@testing-library/react';
afterEach(() => {
  // Clean up head to avoid tag pollution between tests
  document.head.innerHTML = '';
});
import Metadata from '../Metadata';

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
});
