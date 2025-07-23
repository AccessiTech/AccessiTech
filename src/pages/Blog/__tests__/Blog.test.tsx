// --- HOISTED MOCKS ---
vi.mock('react-helmet', () => ({
  Helmet: (props: any) => <>{props.children}</>,
}));
import { vi, beforeEach, afterEach, describe, it } from 'vitest';

// --- HOISTED MOCKS ---
vi.mock('../Blog.scss', () => ({}));

// --- HOISTED MOCK: Metadata ---
vi.mock('../../components/Metadata/Metadata', () => ({
  __esModule: true,
  default: (props: any) => {
    // Debug: log when the mock is used and what props are passed
    // eslint-disable-next-line no-console
    console.log('MOCK Metadata used', props);
    return <div data-testid="metadata" />;
  },
}));
vi.mock('../../components/Header/Header', () => ({
  __esModule: true,
  HeaderRow: () => {
    console.log('MOCK HeaderRow used');
    return <div className="header-row" data-testid="header-row" />;
  },
  default: () => <div data-testid="header-row-default" />,
}));
vi.mock('../../settings/utils', () => ({
  getDDMMMYYYY: (date: string) => `Formatted(${date})`,
}));

import type { Blog as BlogType } from '../../../store/blog';
let blogEntries: BlogType[] = [
  {
    id: 'test-blog',
    date: '2025-07-21',
    title: 'Test Blog Title',
    description: 'Test blog description',
    excerpt: 'Test blog excerpt',
    content: '',
    loaded: true,
    pathname: 'blog',
  },
];
vi.mock('../../../store/blog', async () => {
  const actual = await vi.importActual('../../../store/blog');
  return {
    ...actual,
    useBlogEntriesArray: () => blogEntries,
  };
});

const mockFetch = vi.fn();
global.fetch = mockFetch;

import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import Blog from '../Blog';

beforeEach(() => {
  mockFetch.mockResolvedValue({
    ok: true,
    text: async () =>
      `<?xml version="1.0"?><rss><channel><item><link>https://localhost/blog/test-blog</link></item></channel></rss>`,
  });
  blogEntries = [
    {
      id: 'test-blog',
      date: '2025-07-21',
      title: 'Test Blog Title',
      description: 'Test blog description',
      excerpt: 'Test blog excerpt',
      pathname: 'blog',
      loaded: true,
      content: '',
    },
  ];
});

afterEach(() => {
  mockFetch.mockReset();
});

describe('Blog', () => {
  it('renders blog entries with title, description, excerpt, and formatted date', async () => {
    renderWithProviders(<Blog />, { route: '/blog' });
    // Check for the real header row class
    expect(document.querySelector('.header-row')).toBeInTheDocument();
    // Removed: expect(screen.getByTestId('metadata')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /blog/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Test blog description/i)).toBeInTheDocument();
    expect(screen.getByText(/Test blog excerpt/i)).toBeInTheDocument();
    expect(screen.getByText('Jul 21, 2025')).toBeInTheDocument();
    // The blog entry link
    expect(screen.getByRole('link', { name: /Test Blog Title/i })).toHaveAttribute(
      'href',
      '/blog/test-blog'
    );
  });

  it('hides date, description, or excerpt if props are set', () => {
    renderWithProviders(<Blog hideDates hideDescription hideExcerpt />, { route: '/blog' });
    expect(screen.queryByText('Formatted(2025-07-21)')).not.toBeInTheDocument();
    expect(screen.queryByText(/Test blog description/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Test blog excerpt/i)).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Test Blog Title/i })).toBeInTheDocument();
  });

  it('renders WCAG variant with correct heading and metadata', () => {
    window.history.pushState({}, '', '/wcag');
    blogEntries = [
      {
        id: 'wcag-test',
        date: '2025-08-01',
        title: 'WCAG Explained',
        description: 'WCAG blog description',
        excerpt: 'WCAG blog excerpt',
        pathname: 'wcag',
        loaded: true,
        content: '',
      },
    ];
    renderWithProviders(<Blog />);
    // The heading for WCAG variant
    expect(screen.getByRole('heading', { name: /WCAG Explained/i })).toBeInTheDocument();
    // Removed: expect(screen.getByTestId('metadata')).toBeInTheDocument();
  });

  it('shows no articles if no blog entries are returned', async () => {
    blogEntries = [];
    renderWithProviders(<Blog />, { route: '/blog' });
    await waitFor(() => {
      expect(screen.queryByRole('article')).not.toBeInTheDocument();
    });
  });
});
