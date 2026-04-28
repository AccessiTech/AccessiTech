import { vi } from 'vitest';
import {
  blogInitialState,
  setBlogEntry,
  setFilter,
  clearFilters,
  useFilters,
  BlogState,
  blogSliceName,
  blogSlice,
  BlogOrder,
  useBlog,
  useBlogLoading,
  useBlogEntries,
  useBlogEntry,
  useBlogEntriesArray,
} from '../blog';
import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

describe('blog store', () => {
  it('should return the initial state', () => {
    expect(blogSlice.reducer(undefined, { type: undefined })).toEqual(blogInitialState);
  });

  it('should handle setBlogEntry', () => {
    const state: BlogState = { ...blogInitialState, entries: {} };
    const action = setBlogEntry({ id: '1', title: 'Test', content: '', date: '', loaded: true });
    const newState = blogSlice.reducer(state, action);
    expect(newState.entries['1'].title).toBe('Test');
  });

  it('should have correct slice name', () => {
    expect(blogSliceName).toBe('blog');
  });

  it('should handle setFilter with category', () => {
    const state = blogSlice.reducer(undefined, setFilter({ category: 'Accessibility' }));
    expect(state.filters.category).toBe('Accessibility');
  });

  it('should handle setFilter with tags', () => {
    const state = blogSlice.reducer(undefined, setFilter({ tags: ['react', 'a11y'] }));
    expect(state.filters.tags).toEqual(['react', 'a11y']);
  });

  it('should handle setFilter with series', () => {
    const state = blogSlice.reducer(undefined, setFilter({ series: 'WCAG Series' }));
    expect(state.filters.series).toBe('WCAG Series');
  });

  it('should handle setFilter merging partial fields', () => {
    const initial = {
      ...blogInitialState,
      filters: { category: 'existing', tags: ['a'], series: '' },
    };
    const state = blogSlice.reducer(initial, setFilter({ category: 'new' }));
    expect(state.filters.category).toBe('new');
    expect(state.filters.tags).toEqual(['a']); // preserved
  });

  it('should handle clearFilters resetting all filters', () => {
    const initial = {
      ...blogInitialState,
      filters: { category: 'Accessibility', tags: ['react'], series: 'WCAG Series' },
    };
    const state = blogSlice.reducer(initial, clearFilters());
    expect(state.filters).toEqual({ category: '', tags: [], series: '' });
  });
});

describe('blog hooks/selectors', () => {
  function setupStore(preloadedState = {}) {
    return configureStore({
      reducer: { blog: blogSlice.reducer },
      preloadedState,
    });
  }

  const makeWrapper = (store: any): React.FC<{ children: React.ReactNode }> => {
    return function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>;
    };
  };

  it('useBlog returns state', () => {
    const store = setupStore();
    const { result } = renderHook(() => useBlog(), { wrapper: makeWrapper(store) });
    expect(result.current).toEqual(store.getState().blog);
  });

  it('useBlogLoading returns isLoading', () => {
    const store = setupStore({ blog: { ...blogInitialState, isLoading: true } });
    const { result } = renderHook(() => useBlogLoading(), { wrapper: makeWrapper(store) });
    expect(result.current).toBe(true);
  });

  it('useBlogEntries returns entries', () => {
    const store = setupStore({
      blog: {
        ...blogInitialState,
        entries: { foo: { id: 'foo', title: 'Foo', content: '', date: '', loaded: true } },
      },
    });
    const { result } = renderHook(() => useBlogEntries(), { wrapper: makeWrapper(store) });
    expect(result.current.foo.title).toBe('Foo');
  });

  it('useBlogEntry returns entry by id', () => {
    const store = setupStore({
      blog: {
        ...blogInitialState,
        entries: { foo: { id: 'foo', title: 'Foo', content: '', date: '', loaded: true } },
      },
    });
    const { result } = renderHook(() => useBlogEntry('foo'), { wrapper: makeWrapper(store) });
    expect(result.current.title).toBe('Foo');
  });

  it('useBlogEntriesArray returns sorted array', () => {
    const store = setupStore({
      blog: {
        ...blogInitialState,
        entries: {
          a: {
            id: 'a',
            title: 'A',
            content: '',
            date: '2020-01-01',
            loaded: true,
            pathname: 'blog',
          },
          b: {
            id: 'b',
            title: 'B',
            content: '',
            date: '2020-01-02',
            loaded: true,
            pathname: 'blog',
          },
        },
      },
    });
    const { result } = renderHook(
      () => useBlogEntriesArray({ order: BlogOrder.ASC, pathname: 'blog' }),
      { wrapper: makeWrapper(store) }
    );
    expect(result.current[0].title).toBe('A');
    expect(result.current[1].title).toBe('B');
  });

  it('useBlogEntriesArray filters by category', () => {
    const store = setupStore({
      blog: {
        ...blogInitialState,
        entries: {
          a: {
            id: 'a',
            title: 'A',
            content: '',
            date: '2020-01-01',
            loaded: true,
            pathname: 'blog',
            category: 'tech',
            tags: [],
          },
          b: {
            id: 'b',
            title: 'B',
            content: '',
            date: '2020-01-02',
            loaded: true,
            pathname: 'blog',
            category: 'design',
            tags: [],
          },
        },
        filters: { category: 'tech', tags: [], series: '' },
      },
    });
    const { result } = renderHook(() => useBlogEntriesArray({ pathname: 'blog' }), {
      wrapper: makeWrapper(store),
    });
    expect(result.current).toHaveLength(1);
    expect(result.current[0].category).toBe('tech');
  });

  it('useBlogEntriesArray filters by tag', () => {
    const store = setupStore({
      blog: {
        ...blogInitialState,
        entries: {
          a: {
            id: 'a',
            title: 'A',
            content: '',
            date: '2020-01-01',
            loaded: true,
            pathname: 'blog',
            tags: ['react'],
          },
          b: {
            id: 'b',
            title: 'B',
            content: '',
            date: '2020-01-02',
            loaded: true,
            pathname: 'blog',
            tags: ['vue'],
          },
        },
        filters: { category: '', tags: ['react'], series: '' },
      },
    });
    const { result } = renderHook(() => useBlogEntriesArray({ pathname: 'blog' }), {
      wrapper: makeWrapper(store),
    });
    expect(result.current).toHaveLength(1);
    expect(result.current[0].tags).toContain('react');
  });

  it('useBlogEntriesArray filters by series', () => {
    const store = setupStore({
      blog: {
        ...blogInitialState,
        entries: {
          a: {
            id: 'a',
            title: 'A',
            content: '',
            date: '2020-01-01',
            loaded: true,
            pathname: 'blog',
            series: 'WCAG 101',
            tags: [],
          },
          b: {
            id: 'b',
            title: 'B',
            content: '',
            date: '2020-01-02',
            loaded: true,
            pathname: 'blog',
            series: 'Other Series',
            tags: [],
          },
        },
        filters: { category: '', tags: [], series: 'WCAG 101' },
      },
    });
    const { result } = renderHook(() => useBlogEntriesArray({ pathname: 'blog' }), {
      wrapper: makeWrapper(store),
    });
    expect(result.current).toHaveLength(1);
    expect(result.current[0].series).toBe('WCAG 101');
  });

  it('useBlogEntriesArray excludes different pathname entries', () => {
    const store = setupStore({
      blog: {
        ...blogInitialState,
        entries: {
          a: {
            id: 'a',
            title: 'A',
            content: '',
            date: '2020-01-01',
            loaded: true,
            pathname: 'wcag',
            tags: [],
          },
        },
      },
    });
    const { result } = renderHook(() => useBlogEntriesArray({ pathname: 'blog' }), {
      wrapper: makeWrapper(store),
    });
    expect(result.current).toHaveLength(0);
  });

  it('useFilters returns current filters', () => {
    const store = setupStore({
      blog: {
        ...blogInitialState,
        filters: { category: 'tech', tags: ['react'], series: 'S1' },
      },
    });
    const { result } = renderHook(() => useFilters(), { wrapper: makeWrapper(store) });
    expect(result.current.category).toBe('tech');
    expect(result.current.tags).toEqual(['react']);
    expect(result.current.series).toBe('S1');
  });

  it('useBlogEntriesArray sorts by DESC (title descending)', () => {
    const entries = {
      '1': {
        id: '1',
        title: 'Apple',
        content: '',
        date: '2025-01-01',
        loaded: true,
        pathname: 'blog',
      },
      '2': {
        id: '2',
        title: 'Zebra',
        content: '',
        date: '2025-02-01',
        loaded: true,
        pathname: 'blog',
      },
    };
    const store = setupStore({ blog: { ...blogInitialState, entries } });
    const { result } = renderHook(
      () => useBlogEntriesArray({ order: BlogOrder.DESC, pathname: 'blog' }),
      { wrapper: makeWrapper(store) }
    );
    expect(result.current[0].title).toBe('Zebra');
    expect(result.current[1].title).toBe('Apple');
  });

  it('useBlogEntriesArray sorts by DATE_ASC (date ascending)', () => {
    const entries = {
      '1': {
        id: '1',
        title: 'Newer',
        content: '',
        date: '2025-09-01',
        loaded: true,
        pathname: 'blog',
      },
      '2': {
        id: '2',
        title: 'Older',
        content: '',
        date: '2024-01-01',
        loaded: true,
        pathname: 'blog',
      },
    };
    const store = setupStore({ blog: { ...blogInitialState, entries } });
    const { result } = renderHook(
      () => useBlogEntriesArray({ order: BlogOrder.DATE_ASC, pathname: 'blog' }),
      { wrapper: makeWrapper(store) }
    );
    expect(result.current[0].title).toBe('Older');
    expect(result.current[1].title).toBe('Newer');
  });

  it('useBlogEntriesArray sorts by DATE_DESC (date descending)', () => {
    const entries = {
      '1': {
        id: '1',
        title: 'Older',
        content: '',
        date: '2024-01-01',
        loaded: true,
        pathname: 'blog',
      },
      '2': {
        id: '2',
        title: 'Newer',
        content: '',
        date: '2025-09-01',
        loaded: true,
        pathname: 'blog',
      },
    };
    const store = setupStore({ blog: { ...blogInitialState, entries } });
    const { result } = renderHook(
      () => useBlogEntriesArray({ order: BlogOrder.DATE_DESC, pathname: 'blog' }),
      { wrapper: makeWrapper(store) }
    );
    expect(result.current[0].title).toBe('Newer');
    expect(result.current[1].title).toBe('Older');
  });

  it('useBlogEntriesArray sorts by NATURAL (natural guideline sort)', () => {
    const entries = {
      '1': {
        id: '1',
        title: '1.4.10 Reflow',
        content: '',
        date: '2025-01-01',
        loaded: true,
        pathname: 'wcag',
      },
      '2': {
        id: '2',
        title: '1.4.2 Audio Control',
        content: '',
        date: '2025-01-02',
        loaded: true,
        pathname: 'wcag',
      },
    };
    const store = setupStore({ blog: { ...blogInitialState, entries } });
    const { result } = renderHook(
      () => useBlogEntriesArray({ order: BlogOrder.NATURAL, pathname: 'wcag' }),
      { wrapper: makeWrapper(store) }
    );
    expect(result.current[0].title).toBe('1.4.2 Audio Control');
    expect(result.current[1].title).toBe('1.4.10 Reflow');
  });

  it('useBlogEntriesArray returns 0 for unknown order', () => {
    const entries = {
      '1': { id: '1', title: 'A', content: '', date: '2025-01-01', loaded: true, pathname: 'blog' },
      '2': { id: '2', title: 'B', content: '', date: '2025-02-01', loaded: true, pathname: 'blog' },
    };
    const store = setupStore({ blog: { ...blogInitialState, entries } });
    const { result } = renderHook(
      () => useBlogEntriesArray({ order: 'UNKNOWN' as any, pathname: 'blog' }),
      { wrapper: makeWrapper(store) }
    );
    expect(result.current).toHaveLength(2);
  });
});

import { getBlogEntry } from '../blog';

// Correct path for getMetaData mock
import { getMetaData } from '../../settings/utils';

vi.mock('../../settings/utils', async () => {
  const original = await vi.importActual('../../settings/utils');
  return {
    ...original,
    getMetaData: vi.fn(),
  };
});

describe('getBlogEntry asyncThunk', () => {
  const OLD_FETCH = global.fetch;
  const OLD_CONSOLE = global.console;
  let originalLocation: Location;
  beforeAll(() => {
    originalLocation = window.location;
  });
  afterEach(() => {
    global.fetch = OLD_FETCH;
    global.console = OLD_CONSOLE;
    // Only restore pathname and replace, not the whole object
    if (window.location !== originalLocation) {
      Object.defineProperty(window, 'location', { value: originalLocation, configurable: true });
    }
    vi.clearAllMocks();
  });

  function makeStore() {
    return configureStore({ reducer: { blog: blogSlice.reducer } });
  }

  it('returns parsed blog on success', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('---\ntitle: Test\ndate: 2020-01-01\n---\n# Test\nContent'),
    });
    (getMetaData as unknown as { mockReturnValue: (v: any) => void }).mockReturnValue({
      title: 'Test',
      date: '2020-01-01',
    });
    const store = makeStore();
    const result = await store.dispatch(getBlogEntry({ id: 'foo' }) as any).unwrap();
    expect(result.title).toBe('Test');
    expect(result.date).toBe('2020-01-01');
    expect(result.loaded).toBe(true);
  });

  it('throws on fetch failure', async () => {
    global.fetch = vi
      .fn()
      .mockResolvedValue({ ok: false, text: () => Promise.resolve('irrelevant') });
    (getMetaData as unknown as { mockReturnValue: (v: any) => void }).mockReturnValue({});
    const store = makeStore();
    await expect(store.dispatch(getBlogEntry({ id: 'fail' }) as any).unwrap()).rejects.toThrow(
      'Failed to fetch blog'
    );
  });

  it('throws on parse failure', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true, text: () => Promise.resolve('') });
    (getMetaData as unknown as { mockReturnValue: (v: any) => void }).mockReturnValue({});
    const store = makeStore();
    await expect(store.dispatch(getBlogEntry({ id: 'empty' }) as any).unwrap()).rejects.toThrow(
      'Failed to parse blog'
    );
  });

  it('handles fetch error and redirects', async () => {
    const mockNavigate = vi.fn();
    global.fetch = vi.fn().mockRejectedValue('network error');
    global.console = { ...console, error: vi.fn() };
    global.window.location = { pathname: '/wrong', replace: vi.fn() } as any;
    (getMetaData as unknown as { mockReturnValue: (v: any) => void }).mockReturnValue({});
    const store = makeStore();
    await store.dispatch(getBlogEntry({ id: 'foo', navigate: mockNavigate }) as any);
    expect(console.error).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/blog', { replace: true });
  });

  it('og_image and og_image_alt both present → OG values used', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('content'),
    });
    (getMetaData as unknown as { mockReturnValue: (v: any) => void }).mockReturnValue({
      title: 'Test',
      date: '2020-01-01',
      image: 'hero.png',
      image_alt: 'Hero alt',
      og_image: 'og.png',
      og_image_alt: 'OG alt text',
    });
    const store = makeStore();
    const result = await store.dispatch(getBlogEntry({ id: 'og-both' }) as any).unwrap();
    expect(result.og_image).toBe('og.png');
    expect(result.og_image_alt).toBe('OG alt text');
  });

  it('og_image present but og_image_alt missing → falls back to hero image/image_alt', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('content'),
    });
    (getMetaData as unknown as { mockReturnValue: (v: any) => void }).mockReturnValue({
      title: 'Test',
      date: '2020-01-01',
      image: 'hero.png',
      image_alt: 'Hero alt',
      og_image: 'og.png',
      og_image_alt: '',
    });
    const store = makeStore();
    const result = await store.dispatch(getBlogEntry({ id: 'og-no-alt' }) as any).unwrap();
    expect(result.og_image).toBe('hero.png');
    expect(result.og_image_alt).toBe('Hero alt');
  });

  it('neither og_image nor og_image_alt present → falls back to hero image/image_alt', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('content'),
    });
    (getMetaData as unknown as { mockReturnValue: (v: any) => void }).mockReturnValue({
      title: 'Test',
      date: '2020-01-01',
      image: 'hero.png',
      image_alt: 'Hero alt',
    });
    const store = makeStore();
    const result = await store.dispatch(getBlogEntry({ id: 'og-none' }) as any).unwrap();
    expect(result.og_image).toBe('hero.png');
    expect(result.og_image_alt).toBe('Hero alt');
  });
});
