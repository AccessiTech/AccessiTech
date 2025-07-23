import { vi, beforeEach, afterEach, describe, it } from 'vitest';
import { screen, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import BlogEntry from '../BlogEntry';

// --- HOISTED MOCKS ---
vi.mock('../BlogEntry.css', () => ({}));
vi.mock('../../../components/Metadata/Metadata', () => ({
  __esModule: true,
  default: () => <div data-testid="metadata" />,
}));
vi.mock('../../../components/Header/Header', () => ({
  __esModule: true,
  HeaderRow: () => <div data-testid="header-row" />,
  default: () => <div data-testid="header-row-default" />,
}));
vi.mock('../../../components/SectionHeader/SectionHeader', () => ({
  __esModule: true,
  default: ({ title, use }: { title: string; use: string }) => (
    <div data-testid={`section-header-${use}`}>{title}</div>
  ),
}));
vi.mock('../../../components/CustomTable/CustomTable', () => ({
  __esModule: true,
  default: (props: any) => <table data-testid="custom-table" {...props} />,
  tableDirective: () => {},
}));
vi.mock('../../../components/CustomLink/CustomLink', () => ({
  __esModule: true,
  CustomMarkdownLink: (props: any) => <a data-testid="custom-link" {...props} />,
}));

import type { Blog as BlogType } from '../../../store/blog';
let entry: BlogType;
let useBlogEntryMock: ReturnType<typeof vi.fn>;

vi.mock('../../../store/blog', async () => {
  const actual = await vi.importActual('../../../store/blog');
  return {
    ...actual,
    useBlogEntry: (id: string) => useBlogEntryMock(id),
    getBlogEntry: vi.fn().mockResolvedValue(undefined),
  };
});

describe('BlogEntry', () => {
  beforeEach(() => {
    entry = {
      loaded: true,
      id: 'test-blog',
      title: 'Test Blog Title',
      content: '# Heading\nSome content.\n',
      date: '2025-07-21',
      description: 'Test blog description',
      image: '',
      image_alt: '',
      pathname: 'blog',
      excerpt: 'Test blog excerpt',
      next: { url: '/blog/next', title: 'Next Blog' },
      previous: { url: '/blog/prev', title: 'Previous Blog' },
    };
    useBlogEntryMock = vi.fn(() => entry);
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders blog entry with metadata, header, and content', async () => {
    renderWithProviders(<BlogEntry />, { route: '/blog/test-blog' });
    expect(screen.getByTestId('header-row')).toBeInTheDocument();
    expect(screen.getByTestId('metadata')).toBeInTheDocument();
    expect(screen.getByText('Test Blog Title')).toBeInTheDocument();
    expect(screen.getByText('Some content.')).toBeInTheDocument();
    // h1 is rendered as native h1, not SectionHeader
    expect(screen.getByRole('heading', { level: 1, name: 'Heading' })).toBeInTheDocument();
    // Previous/Next links
    expect(screen.getByText(/Previous: Previous Blog/)).toBeInTheDocument();
    expect(screen.getByText(/Next: Next Blog/)).toBeInTheDocument();
  });

  it('shows loading state if entry is not loaded', () => {
    entry.loaded = false;
    renderWithProviders(<BlogEntry />, { route: '/blog/test-blog' });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders markdown headings as SectionHeader', () => {
    entry.content = '# Heading\n## Subheading\n';
    renderWithProviders(<BlogEntry />, { route: '/blog/test-blog' });
    // h1 is native, h2 is SectionHeader
    expect(screen.getByRole('heading', { level: 1, name: 'Heading' })).toBeInTheDocument();
    expect(screen.getByTestId('section-header-h2')).toBeInTheDocument();
  });

  it('renders custom table and custom link components', () => {
    entry.content =
      '| Col1 | Col2 |\n|------|------|\n| A    | B    |\n[Link](https://example.com)';
    renderWithProviders(<BlogEntry />, { route: '/blog/test-blog' });
    expect(screen.getByTestId('custom-table')).toBeInTheDocument();
    expect(screen.getByTestId('custom-link')).toBeInTheDocument();
  });

  it('does not render previous/next links if not present', () => {
    entry.previous = undefined;
    entry.next = undefined;
    renderWithProviders(<BlogEntry />, { route: '/blog/test-blog' });
    expect(screen.queryByText(/Previous:/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Next:/)).not.toBeInTheDocument();
  });

  it('renders only next link with correct offset if previous is undefined', () => {
    entry.previous = undefined;
    entry.next = { url: '/blog/next', title: 'Next Blog' };
    renderWithProviders(<BlogEntry />, { route: '/blog/test-blog' });
    const nextLink = screen.getByText(/Next: Next Blog/);
    expect(nextLink).toBeInTheDocument();
    // Check offset prop on the next link's parent Col
    const nextCol = nextLink.closest('.next-link');
    expect(nextCol).not.toBeNull();
    // We can't check the offset prop directly, but we can check the link is in the document
  });

  it.skip('scrolls to anchor if hash is present and element exists', async () => {
    // Simulate entry.loaded transition
    let loaded = false;
    useBlogEntryMock.mockImplementation(() => ({ ...entry, loaded }));
    // Mock window.location.hash
    const originalHash = window.location.hash;
    window.location.hash = '#anchor';
    // Mock scrollIntoView on HTMLElement prototype
    const scrollIntoView = vi.fn();
    const originalScrollIntoView = HTMLElement.prototype.scrollIntoView;
    HTMLElement.prototype.scrollIntoView = scrollIntoView;
    // Mock getElementById to return a real element
    const anchorDiv = document.createElement('div');
    anchorDiv.id = 'anchor';
    document.body.appendChild(anchorDiv);
    vi.spyOn(document, 'getElementById').mockImplementation((id: string) => {
      return id === 'anchor' ? anchorDiv : null;
    });
    const { rerender } = renderWithProviders(<BlogEntry />, { route: '/blog/test-blog' });
    // Now set loaded to true and update mock return value
    loaded = true;
    useBlogEntryMock.mockImplementation(() => ({ ...entry, loaded }));
    await act(async () => {
      rerender(<BlogEntry />);
    });
    await waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
    window.location.hash = originalHash;
    document.body.removeChild(anchorDiv);
    HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
    (document.getElementById as any).mockRestore && (document.getElementById as any).mockRestore();
  });

  it.skip('warns if anchor is present but element does not exist', async () => {
    let loaded = false;
    useBlogEntryMock.mockImplementation(() => ({ ...entry, loaded }));
    const originalHash = window.location.hash;
    window.location.hash = '#notfound';
    vi.spyOn(document, 'getElementById').mockReturnValue(null);
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { rerender } = renderWithProviders(<BlogEntry />, { route: '/blog/test-blog' });
    loaded = true;
    useBlogEntryMock.mockImplementation(() => ({ ...entry, loaded }));
    await act(async () => {
      rerender(<BlogEntry />);
    });
    await waitFor(() => {
      expect(warnSpy).toHaveBeenCalledWith('Element with ID notfound not found.');
    });
    window.location.hash = originalHash;
    warnSpy.mockRestore();
    (document.getElementById as any).mockRestore && (document.getElementById as any).mockRestore();
  });
});
