import { describe, it, expect, vi } from 'vitest';
import {
  onFontSizeChange,
  onFontFamilyChange,
  debounce,
  getFontSizeClass,
  getFontFamilyClass,
  BODY,
} from '../helpers';

describe('FontOptions helpers', () => {
  it('BODY constant is "body"', () => {
    expect(BODY).toBe('body');
  });

  it('onFontSizeChange returns correct value', () => {
    const e = { target: { value: '1.5' } };
    expect(onFontSizeChange(e)).toBe('1.5');
  });

  it('onFontFamilyChange returns correct class', () => {
    const e = { target: { value: 'sans-serif' } };
    expect(onFontFamilyChange(e)).toBe('font-family-sans-serif');
  });

  it('getFontSizeClass returns correct class', () => {
    expect(getFontSizeClass('1.2')).toBe('font-size-1-2');
    expect(getFontSizeClass('2')).toBe('font-size-2');
  });

  it('getFontFamilyClass returns correct class', () => {
    expect(getFontFamilyClass('serif')).toBe('font-family-serif');
    expect(getFontFamilyClass('monospace')).toBe('font-family-monospace');
  });

  it('debounce calls function after delay', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced('a');
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledWith('a');
    vi.useRealTimers();
  });

  it('debounce resets timer if called again', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced('a');
    vi.advanceTimersByTime(50);
    debounced('b');
    vi.advanceTimersByTime(99);
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(2);
    expect(fn).toHaveBeenCalledWith('b');
    vi.useRealTimers();
  });
});
