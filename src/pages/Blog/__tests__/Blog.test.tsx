// --- HOISTED MOCKS ---
vi.mock('react-helmet', () => ({
  Helmet: (props: any) => <>{props.children}</>,
}));
import { vi, beforeEach, afterEach, describe, it } from 'vitest';

// Only mock Header if needed for test isolation
vi.mock('../../components/Header/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="header-row-default" />,
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

import { screen, waitFor, fireEvent } from '@testing-library/react';
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
  });

  it('shows no articles if no blog entries are returned', async () => {
    blogEntries = [];
    renderWithProviders(<Blog />, { route: '/blog' });
    await waitFor(() => {
      expect(screen.queryByRole('article')).not.toBeInTheDocument();
    });
  });

  it('shows "No blog entries found." when entries array is empty', () => {
    blogEntries = [];
    renderWithProviders(<Blog />, { route: '/blog' });
    expect(screen.getByText('No blog entries found.')).toBeInTheDocument();
  });

  it('renders category badge for entries with a category', () => {
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
        category: 'Accessibility',
      },
    ];
    renderWithProviders(<Blog />, { route: '/blog' });
    const badge = document.querySelector('.blog-category');
    expect(badge).toBeInTheDocument();
    expect(badge!.textContent).toBe('Accessibility');
  });

  it('does not render category badge when entry has no category', () => {
    blogEntries = [
      {
        id: 'test-blog',
        date: '2025-07-21',
        title: 'Test Blog Title',
        description: 'desc',
        excerpt: 'excerpt',
        pathname: 'blog',
        loaded: true,
        content: '',
      },
    ];
    renderWithProviders(<Blog />, { route: '/blog' });
    expect(document.querySelector('.blog-category')).toBeNull();
  });

  it('renders tag badges for entries with tags', () => {
    blogEntries = [
      {
        id: 'test-blog',
        date: '2025-07-21',
        title: 'Test Blog Title',
        description: 'desc',
        excerpt: 'excerpt',
        pathname: 'blog',
        loaded: true,
        content: '',
        tags: ['a11y', 'react'],
      },
    ];
    renderWithProviders(<Blog />, { route: '/blog' });
    const tagBadges = document.querySelectorAll('.blog-tag');
    expect(tagBadges.length).toBe(2);
    expect(tagBadges[0].textContent).toBe('a11y');
    expect(tagBadges[1].textContent).toBe('react');
  });

  it('renders BlogFilters on /blog route when entries have categories', () => {
    blogEntries = [
      {
        id: 'test-blog',
        date: '2025-07-21',
        title: 'Test Blog Title',
        description: 'desc',
        excerpt: 'excerpt',
        pathname: 'blog',
        loaded: true,
        content: '',
        category: 'Accessibility',
        tags: [],
      },
    ];
    renderWithProviders(<Blog />, { route: '/blog' });
    expect(screen.getByLabelText('Blog filters')).toBeInTheDocument();
  });

  it('navigates home when Home breadcrumb is clicked', () => {
    renderWithProviders(<Blog />, { route: '/blog' });
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(() => fireEvent.click(homeLink)).not.toThrow();
  });

  it('does not render BlogFilters on /wcag route', () => {
    blogEntries = [
      {
        id: 'wcag-test',
        date: '2025-08-01',
        title: 'WCAG Entry',
        description: 'desc',
        excerpt: 'excerpt',
        pathname: 'wcag',
        loaded: true,
        content: '',
        category: 'WCAG',
        tags: [],
      },
    ];
    renderWithProviders(<Blog />, { route: '/wcag' });
    expect(screen.queryByLabelText('Blog filters')).not.toBeInTheDocument();
  });
});
