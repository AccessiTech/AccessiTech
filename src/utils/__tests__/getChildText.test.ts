import { describe, it, expect } from 'vitest';
import { getChildText } from '../getChildText';

describe('getChildText', () => {
  it('returns empty string for null', () => {
    expect(getChildText(null)).toBe('');
  });

  it('returns empty string for undefined', () => {
    expect(getChildText(undefined)).toBe('');
  });

  it('returns empty string for node with empty children array', () => {
    expect(getChildText({ children: [] })).toBe('');
  });

  it('returns empty string for node with no children property', () => {
    expect(getChildText({})).toBe('');
  });

  it('returns string child directly', () => {
    expect(getChildText({ children: ['hello world'] })).toBe('hello world');
  });

  it('returns value of value-type child object', () => {
    expect(getChildText({ children: [{ value: 'text node' }] })).toBe('text node');
  });

  it('returns text from nested children recursively', () => {
    expect(getChildText({ children: [{ children: [{ value: 'deep text' }] }] })).toBe('deep text');
  });

  it('returns text from deeply nested children', () => {
    expect(
      getChildText({ children: [{ children: [{ children: [{ value: 'very deep' }] }] }] })
    ).toBe('very deep');
  });

  it('returns empty string for child with no recognized type', () => {
    expect(getChildText({ children: [{ someOtherProp: 'x' }] })).toBe('');
  });

  it('only processes the first child', () => {
    expect(getChildText({ children: ['first', 'second'] })).toBe('first');
  });
});
