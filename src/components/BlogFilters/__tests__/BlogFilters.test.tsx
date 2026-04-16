import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { blogSlice, blogInitialState, blogSliceName } from '../../../store/blog';
import BlogFilters from '../BlogFilters';

// No need to mock SCSS files - handled by Vitest configuration

const makeMockStore = (overrides = {}) =>
  configureStore({
    reducer: { [blogSliceName]: blogSlice.reducer },
    preloadedState: {
      [blogSliceName]: { ...blogInitialState, ...overrides },
    },
  });

const renderWithStore = (ui: React.ReactNode, store = makeMockStore()) =>
  render(<Provider store={store}>{ui}</Provider>);

describe('BlogFilters Component', () => {
  it('renders nothing when no entries have categories/tags', () => {
    const { container } = renderWithStore(<BlogFilters pathname="blog" />);
    expect(container.firstChild).toBeNull();
  });

  it('renders category buttons when entries have categories', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          category: 'Accessibility',
          tags: ['a11y', 'react'],
        },
      },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    expect(screen.getByLabelText('Filter by category: Accessibility')).toBeInTheDocument();
    expect(screen.getByLabelText('Show all categories')).toBeInTheDocument();
  });

  it('renders tag buttons when entries have tags', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          tags: ['typescript', 'react'],
        },
      },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    expect(screen.getByLabelText('Filter by tag: typescript')).toBeInTheDocument();
    expect(screen.getByLabelText('Filter by tag: react')).toBeInTheDocument();
  });

  it('renders with correct aria-label on the container', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          category: 'Design',
          tags: [],
        },
      },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    expect(screen.getByLabelText('Blog filters')).toBeInTheDocument();
  });

  it('does not show entries from a different pathname', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'wcag',
          category: 'WCAG',
          tags: ['wcag'],
        },
      },
    });
    const { container } = renderWithStore(<BlogFilters pathname="blog" />, store);
    expect(container.firstChild).toBeNull();
  });

  it('renders series buttons when entries have series', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          series: 'WCAG Series',
          tags: [],
        },
      },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    expect(screen.getByLabelText('Filter by series: WCAG Series')).toBeInTheDocument();
  });

  it('toggles category filter on click', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          category: 'Accessibility',
          tags: [],
        },
      },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    const catBtn = screen.getByLabelText('Filter by category: Accessibility');
    expect(catBtn).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(catBtn);
    expect(catBtn).toHaveAttribute('aria-pressed', 'true');
    // Click again to deselect
    fireEvent.click(catBtn);
    expect(catBtn).toHaveAttribute('aria-pressed', 'false');
  });

  it('toggles tag filter on click (select and deselect)', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          tags: ['react'],
        },
      },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    const tagBtn = screen.getByLabelText('Filter by tag: react');
    expect(tagBtn).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(tagBtn);
    expect(tagBtn).toHaveAttribute('aria-pressed', 'true');
    // Click again to deselect
    fireEvent.click(tagBtn);
    expect(tagBtn).toHaveAttribute('aria-pressed', 'false');
  });

  it('toggles series filter on click', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          series: 'WCAG Series',
          tags: [],
        },
      },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    const seriesBtn = screen.getByLabelText('Filter by series: WCAG Series');
    expect(seriesBtn).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(seriesBtn);
    expect(seriesBtn).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(seriesBtn);
    expect(seriesBtn).toHaveAttribute('aria-pressed', 'false');
  });

  it('clicking All button dispatches clearFilters and resets category', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          category: 'Accessibility',
          tags: [],
        },
      },
      filters: { category: 'Accessibility', tags: [], series: '' },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    const allBtn = screen.getByLabelText('Show all categories');
    fireEvent.click(allBtn);
    expect(store.getState()[blogSliceName].filters.category).toBe('');
  });

  it('shows Clear filters button when a category is active', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          category: 'Accessibility',
          tags: [],
        },
      },
      filters: { category: 'Accessibility', tags: [], series: '' },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    expect(screen.getByLabelText('Clear all filters')).toBeInTheDocument();
  });

  it('does not show Clear filters button when no filter is active', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          category: 'Accessibility',
          tags: [],
        },
      },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    expect(screen.queryByLabelText('Clear all filters')).not.toBeInTheDocument();
  });

  it('clicking Clear filters button resets all filters', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          category: 'Accessibility',
          tags: ['react'],
        },
      },
      filters: { category: 'Accessibility', tags: ['react'], series: '' },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    const clearBtn = screen.getByLabelText('Clear all filters');
    fireEvent.click(clearBtn);
    const state = store.getState()[blogSliceName].filters;
    expect(state.category).toBe('');
    expect(state.tags).toHaveLength(0);
    expect(state.series).toBe('');
  });

  it('shows Clear filters button when a tag filter is active', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          tags: ['typescript'],
        },
      },
      filters: { category: '', tags: ['typescript'], series: '' },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    expect(screen.getByLabelText('Clear all filters')).toBeInTheDocument();
  });

  it('shows Clear filters button when a series filter is active', () => {
    const store = makeMockStore({
      entries: {
        'post-1': {
          loaded: true,
          id: 'post-1',
          title: 'Post 1',
          content: '',
          date: '2026-01-01',
          pathname: 'blog',
          series: 'WCAG Series',
          tags: [],
        },
      },
      filters: { category: '', tags: [], series: 'WCAG Series' },
    });
    renderWithStore(<BlogFilters pathname="blog" />, store);
    expect(screen.getByLabelText('Clear all filters')).toBeInTheDocument();
  });
});
