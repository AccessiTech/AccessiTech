import { vi } from 'vitest';
import {
  blogInitialState,
  setBlogEntry,
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
});

import { getBlogEntry } from '../blog';

// Correct path for getMetaData mock
import { getMetaData } from '../../settings/utils';

vi.mock('../../settings/utils', () => {
  const original = vi.importActual('../../settings/utils');
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
});
