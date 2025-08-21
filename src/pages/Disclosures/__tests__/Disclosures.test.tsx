import { vi, beforeEach, afterEach, describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import { Disclosures } from '../Disclosures';

// Helper: mock fetch for error/edge cases
const mockFetch = (response: Partial<Response> & { text?: () => Promise<string> }) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: response.ok ?? true,
      status: response.status ?? 200,
      text: response.text ?? (() => Promise.resolve('')),
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

const rssXML = `<?xml version="1.0"?>
<rss><channel>
  <item>
    <link>https://localhost/disclosures/test-disclosure</link>
    <title>Test Disclosure Title</title>
    <description>Test disclosure description</description>
    <date>2025-08-20</date>
  </item>
</channel></rss>`;

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    text: async () => rssXML,
  } as Response);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Disclosures Page', () => {
  it('renders disclosures with title, description, and formatted date', async () => {
    renderWithProviders(
      <Routes>
        <Route path="/disclosures" element={<Disclosures />} />
      </Routes>,
      { route: '/disclosures' }
    );
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /disclosures/i, level: 2 })).toBeInTheDocument();
      expect(screen.getByText('Test Disclosure Title')).toBeInTheDocument();
      expect(screen.getByText('Test disclosure description')).toBeInTheDocument();
      expect(screen.getByText('Aug 20, 2025')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Test Disclosure Title/i })).toHaveAttribute(
        'href',
        '/disclosures/test-disclosure'
      );
    });
  });

  it('hides date, description, or excerpt if props are set', async () => {
    renderWithProviders(
      <Routes>
        <Route
          path="/disclosures"
          element={<Disclosures hideDates hideDescription hideExcerpt />}
        />
      </Routes>,
      { route: '/disclosures' }
    );
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /disclosures/i, level: 2 })).toBeInTheDocument();
    });
    expect(screen.queryByText('Aug 20, 2025')).not.toBeInTheDocument();
    expect(screen.queryByText('Test disclosure description')).not.toBeInTheDocument();
    // No excerpt in this mock, but check that title link is present
    expect(screen.getByRole('link', { name: /Test Disclosure Title/i })).toBeInTheDocument();
  });

  it('shows no articles if no disclosures are returned', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => `<?xml version="1.0"?><rss><channel></channel></rss>`,
    } as Response);
    renderWithProviders(
      <Routes>
        <Route path="/disclosures" element={<Disclosures />} />
      </Routes>,
      { route: '/disclosures' }
    );
    await waitFor(() => {
      // No article should be present
      expect(screen.queryByRole('article')).not.toBeInTheDocument();
    });
  });

  it('handles fetch failure gracefully', async () => {
    mockFetch({ ok: false, status: 404, text: () => Promise.resolve('Not found') });
    renderWithProviders(
      <Routes>
        <Route path="/disclosures" element={<Disclosures />} />
      </Routes>,
      { route: '/disclosures' }
    );
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    // Optionally check for error/fallback text if your component renders it
    // expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });

  it('renders breadcrumb navigation', async () => {
    renderWithProviders(
      <Routes>
        <Route path="/disclosures" element={<Disclosures />} />
      </Routes>,
      { route: '/disclosures' }
    );
    await waitFor(() => {
      const breadcrumb = screen.getByRole('navigation', { name: /breadcrumb/i });
      const activeItem = breadcrumb.querySelector('li.breadcrumb-item.active');
      expect(activeItem).toBeTruthy();
      expect(activeItem?.textContent).toBe('Disclosures');
    });
  });

  it('renders skip link for keyboard accessibility', async () => {
    renderWithProviders(
      <Routes>
        <Route path="/disclosures" element={<Disclosures />} />
      </Routes>,
      { route: '/disclosures' }
    );
    // Wait for skip link
    await waitFor(() => {
      expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
    });
    expect(screen.getByRole('link', { name: /skip to main content/i })).toHaveAttribute(
      'href',
      '#main'
    );
  });
});
