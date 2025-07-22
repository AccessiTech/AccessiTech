import { blogInitialState, setBlogEntry, BlogState, blogSliceName } from '../blog';
import { blogSlice } from '../blog';

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

  // Async thunk and hooks would require more setup/mocking, can be added for full coverage
});
