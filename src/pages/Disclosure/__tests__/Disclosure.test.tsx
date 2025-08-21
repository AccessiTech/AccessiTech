//
// Helper: mock fetch for error/edge cases
const mockFetch = (response: Partial<Response> & { text?: () => Promise<string> }) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: response.ok ?? true,
      status: response.status ?? 200,
      text: response.text ?? (() => Promise.resolve('')),
      // Add required Response properties as needed
      headers: new Headers(),
      redirected: false,
      statusText: '',
      type: 'basic',
      url: '',
      clone: () => ({}) as Response,
      body: null,
      bodyUsed: false,
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      blob: () => Promise.resolve(new Blob()),
      formData: () => Promise.resolve(new FormData()),
      json: () => Promise.resolve({}),
      ...response,
    } as Response)
  );
};
import { vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import { Disclosure } from '../Disclosure';

// Vite/ Vitest: use vi instead of jest
beforeEach(() => {
  global.fetch = vi.fn((input: RequestInfo | URL) => {
    let url = '';
    if (typeof input === 'string') {
      url = input;
    } else if (input instanceof URL) {
      url = input.toString();
    } else if (typeof input === 'object' && 'url' in input) {
      url = (input as Request).url;
    }
    if (/\/disclosures\/.*\.md$/.test(url)) {
      return Promise.resolve({
        ok: true,
        status: 200,
        text: () =>
          Promise.resolve(`<!--
title: Accessibility Statement
description: AccessiTech's commitment to digital accessibility for all users.
date: 2023-08-20
status: published
-->

# Accessibility Statement

AccessiTech is committed to ensuring digital accessibility for people of all abilities. We continuously work to improve the user experience for everyone and apply the relevant accessibility standards.

## Conformance Status

AccessiTech aims to conform to WCAG 2.1 Level AA standards. We regularly test and audit our components and pages to maintain compliance.

## Accessibility Features

Our website includes the following accessibility features:

### Semantic HTML

- Proper heading hierarchy (h1-h6)
- ARIA landmarks for major page sections
- Semantic HTML5 elements (nav, main, article, etc.)

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Visible focus indicators
- Skip-to-main content links
- Logical tab order

### Visual Design

- High contrast color schemes
- Resizable text without loss of functionality
- No content that relies solely on color to convey meaning
- Responsive design that adapts to different zoom levels

### Media

- Alt text for all meaningful images
- Captions for video content
- Transcripts for audio content
- No auto-playing media

### Forms and Interactive Elements

- Clear labels and instructions
- Error identification and suggestions
- Multiple ways to interact with components
- Sufficient time to complete actions

## Testing and Development

Our accessibility testing process includes:

1. Automated testing using accessibility tools
2. Manual keyboard navigation testing
3. Screen reader testing
4. User testing with people who have different abilities

## Feedback

We welcome feedback on the accessibility of AccessiTech. If you experience any accessibility barriers or have suggestions for improvement, please:

1. Open an issue on our [GitHub repository](https://github.com/AccessiTech/AccessiTech)
2. Email us at [accessit3ch@gmail.com](mailto:accessit3ch@gmail.com)

## Resources

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [AccessiTech Blog on WCAG](/blog/wcag)
- [Why Web Accessibility Matters](/blog/Introduction-to-WCAG-What-It-Is-and-Why-It-Matters)

Last updated: July 2023
`),
      } as Response);
    }
    // fallback for other fetches
    return Promise.resolve({
      ok: false,
      status: 404,
      text: () => Promise.resolve('Not found'),
    } as Response);
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Disclosure Page', () => {
  it('handles fetch failure gracefully', async () => {
    mockFetch({ ok: false, status: 404, text: () => Promise.resolve('Not found') });
    renderWithProviders(
      <Routes>
        <Route path="/disclosures/:id" element={<Disclosure />} />
      </Routes>,
      { route: '/disclosures/missing' }
    );
    await waitFor(() => {
      // Should not crash, can check for fallback UI or just that loading disappears
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    // Optionally check for error/fallback text if your component renders it
    // expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });

  it('renders frontmatter metadata (title, description) in breadcrumb', async () => {
    renderWithProviders(
      <Routes>
        <Route path="/disclosures/:id" element={<Disclosure />} />
      </Routes>,
      { route: '/disclosures/accessibility' }
    );
    // Wait for the breadcrumb to appear
    await waitFor(() => {
      const breadcrumb = screen.getByRole('navigation', { name: /breadcrumb/i });
      // Find the last breadcrumb item (active)
      const activeItem = breadcrumb.querySelector('li.breadcrumb-item.active');
      expect(activeItem).toBeTruthy();
      expect(activeItem?.textContent).toBe('Accessibility Statement');
    });
  });

  it('renders markdown headings as SectionHeader components', async () => {
    renderWithProviders(
      <Routes>
        <Route path="/disclosures/:id" element={<Disclosure />} />
      </Routes>,
      { route: '/disclosures/accessibility' }
    );
    // Wait for a known h2/h3 heading
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'Conformance Status', level: 2 })
      ).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Semantic HTML', level: 3 })).toBeInTheDocument();
    });
  });

  it('handles missing or malformed markdown gracefully', async () => {
    mockFetch({ ok: true, status: 200, text: () => Promise.resolve('') });
    renderWithProviders(
      <Routes>
        <Route path="/disclosures/:id" element={<Disclosure />} />
      </Routes>,
      { route: '/disclosures/empty' }
    );
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    // Should not crash, and content area should be empty
    // Optionally: expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });

  it('scrolls to anchor if hash is present in URL', async () => {
    // Mock scrollIntoView
    const scrollIntoView = vi.fn();
    // Add anchor element to document
    const anchor = document.createElement('div');
    anchor.id = 'conformance-status';
    anchor.scrollIntoView = scrollIntoView;
    document.body.appendChild(anchor);

    renderWithProviders(
      <Routes>
        <Route path="/disclosures/:id" element={<Disclosure />} />
      </Routes>,
      { route: '/disclosures/accessibility#conformance-status' }
    );
    await waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalled();
    });
    document.body.removeChild(anchor);
  });

  it('renders skip link for keyboard accessibility', async () => {
    renderWithProviders(
      <Routes>
        <Route path="/disclosures/:id" element={<Disclosure />} />
      </Routes>,
      { route: '/disclosures/accessibility' }
    );
    // Wait for skip link
    await waitFor(() => {
      expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
    });
    // Check href
    expect(screen.getByRole('link', { name: /skip to main content/i })).toHaveAttribute(
      'href',
      '#main'
    );
  });
  it('renders loading state initially', async () => {
    renderWithProviders(<Disclosure />, { route: '/disclosures/accessibility' });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  it('renders markdown content after load', async () => {
    renderWithProviders(
      <Routes>
        <Route path="/disclosures/:id" element={<Disclosure />} />
      </Routes>,
      { route: '/disclosures/accessibility' }
    );

    // Assert fetch was called and log arguments
    expect(global.fetch).toHaveBeenCalled();
    // Log all fetch calls for debugging

    // Wait for the markdown content to appear
    await waitFor(
      () => {
        expect(
          screen.getByText(content =>
            content.includes(
              'AccessiTech is committed to ensuring digital accessibility for people of all abilities.'
            )
          )
        ).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  it('renders breadcrumb navigation', async () => {
    renderWithProviders(<Disclosure />, { route: '/disclosures/accessibility' });
    await waitFor(() => expect(screen.getByText('Home')).toBeInTheDocument());
    expect(screen.getByText('Disclosures')).toBeInTheDocument();
  });
});
