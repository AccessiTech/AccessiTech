import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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
});
