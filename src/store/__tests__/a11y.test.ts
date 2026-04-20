import { describe, it, expect } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import { a11ySlice, toggleA11y, toggleSimplified } from '../a11y';

const makeStore = () => configureStore({ reducer: { a11y: a11ySlice.reducer } });

describe('a11y store', () => {
  it('has correct initial state', () => {
    const store = makeStore();
    const state = store.getState().a11y;
    expect(state.isOpen).toBe(false);
    expect(state.isSimplified).toBe(false);
  });

  it('toggles isOpen when toggleA11y is dispatched', () => {
    const store = makeStore();
    store.dispatch(toggleA11y());
    expect(store.getState().a11y.isOpen).toBe(true);
    store.dispatch(toggleA11y());
    expect(store.getState().a11y.isOpen).toBe(false);
  });

  it('toggles isSimplified when toggleSimplified is dispatched', () => {
    const store = makeStore();
    store.dispatch(toggleSimplified());
    expect(store.getState().a11y.isSimplified).toBe(true);
    store.dispatch(toggleSimplified());
    expect(store.getState().a11y.isSimplified).toBe(false);
  });
});
