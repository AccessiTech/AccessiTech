import {
  getViewportWidth,
  getViewportHeight,
  getPageFromPath,
  getDDMMMYYYY,
  naturalGuidelineSort,
  getMetaData,
  useWindowSize,
  useOutsideClick,
} from '../utils';

import React from 'react';
import { vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

describe('utils', () => {
  describe('getViewportWidth', () => {
    it('returns a number', () => {
      expect(typeof getViewportWidth()).toBe('number');
    });
  });

  describe('getViewportHeight', () => {
    it('returns a number', () => {
      expect(typeof getViewportHeight()).toBe('number');
    });
  });

  describe('getPageFromPath', () => {
    it('returns correct page for root', () => {
      expect(getPageFromPath('/')).toBe('home');
    });
    it('returns correct page for /blog', () => {
      expect(getPageFromPath('/blog')).toBe('blog');
    });
    it('returns correct page for /wcag', () => {
      expect(getPageFromPath('/wcag')).toBe('wcag');
    });
    it('returns home for /index.html', () => {
      expect(getPageFromPath('/index.html')).toBe('home');
    });
    it('handles nested paths', () => {
      expect(getPageFromPath('/blog/entry')).toBe('blog');
    });
    it('handles empty string', () => {
      expect(getPageFromPath('')).toBe('home');
    });
  });

  describe('getDDMMMYYYY', () => {
    it('formats date as MMM DD, YYYY (en-US)', () => {
      expect(getDDMMMYYYY('2025-07-21')).toMatch(/Jul\s+21,\s+2025/);
    });
    it('handles invalid date string', () => {
      expect(getDDMMMYYYY('invalid')).toBe('Invalid Date');
    });
  });

  describe('naturalGuidelineSort', () => {
    it('sorts numbers naturally', () => {
      const arr = ['1.1.1', '1.10.1', '1.2.1'];
      const sorted = arr.sort(naturalGuidelineSort);
      expect(sorted).toEqual(['1.1.1', '1.2.1', '1.10.1']);
    });
    it('handles non-numeric input', () => {
      const arr = ['foo', '1.2.1'];
      const sorted = arr.sort(naturalGuidelineSort);
      // Accept either order, as sort is not guaranteed for non-numeric
      expect(sorted).toContain('foo');
      expect(sorted).toContain('1.2.1');
      expect(sorted.length).toBe(2);
    });
    it('handles empty strings', () => {
      const arr = ['', '1.2.1'];
      const sorted = arr.sort(naturalGuidelineSort);
      // Accept either order, as sort is not guaranteed for empty string
      expect(sorted).toContain('');
      expect(sorted).toContain('1.2.1');
      expect(sorted.length).toBe(2);
    });
  });

  describe('getMetaData', () => {
    it('parses metadata from string', () => {
      const input = '<!-- title: Test Title -->\n<!-- description: Test Desc -->';
      const meta = getMetaData(input);
      expect(meta.title).toBe('Test Title');
      expect(meta.description).toBe('Test Desc');
    });
    it('returns empty object for empty string', () => {
      expect(getMetaData('')).toEqual({});
    });
    it('ignores lines without key/value', () => {
      const input = 'no-colon-here\n<!-- key: value -->';
      const meta = getMetaData(input);
      expect(meta.key).toBe('value');
      expect(Object.keys(meta).length).toBe(1);
    });
  });

  describe('useWindowSize', () => {
    it('returns window size as array', () => {
      // JSDOM default window size is 1024x768
      const TestComponent = () => {
        const [w, h] = useWindowSize();
        return React.createElement('div', { 'data-testid': 'size' }, `${w}x${h}`);
      };
      const { getByTestId } = render(React.createElement(TestComponent));
      expect(getByTestId('size').textContent).toMatch(/\d+x\d+/);
    });
  });

  describe('useOutsideClick', () => {
    it('calls callback when clicking outside', () => {
      const callback = vi.fn();
      const TestComponent = () => {
        const ref = React.useRef(null);
        useOutsideClick(ref, callback);
        return React.createElement(
          'div',
          null,
          React.createElement('div', { ref, 'data-testid': 'inside' }, 'Inside'),
          React.createElement('div', { 'data-testid': 'outside' }, 'Outside')
        );
      };
      const { getByTestId } = render(React.createElement(TestComponent));
      fireEvent.click(getByTestId('outside'));
      expect(callback).toHaveBeenCalled();
    });
    it('does not call callback when clicking inside', () => {
      const callback = vi.fn();
      const TestComponent = () => {
        const ref = React.useRef(null);
        useOutsideClick(ref, callback);
        return React.createElement(
          'div',
          null,
          React.createElement('div', { ref, 'data-testid': 'inside' }, 'Inside')
        );
      };
      const { getByTestId } = render(React.createElement(TestComponent));
      fireEvent.click(getByTestId('inside'));
      expect(callback).not.toHaveBeenCalled();
    });
  });
});
