import {
  getViewportWidth,
  getViewportHeight,
  getPageFromPath,
  getDDMMMYYYY,
  naturalGuidelineSort,
} from '../utils';

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
  });

  describe('getDDMMMYYYY', () => {
    it('formats date as MMM DD, YYYY (en-US)', () => {
      expect(getDDMMMYYYY('2025-07-21')).toMatch(/Jul\s+21,\s+2025/);
    });
  });

  describe('naturalGuidelineSort', () => {
    it('sorts numbers naturally', () => {
      const arr = ['1.1.1', '1.10.1', '1.2.1'];
      const sorted = arr.sort(naturalGuidelineSort);
      expect(sorted).toEqual(['1.1.1', '1.2.1', '1.10.1']);
    });
  });
});
