import { describe, it, expect } from 'vitest';
import { createSlug } from '../createSlug';

describe('createSlug', () => {
  describe('emoji removal', () => {
    it('removes basic emoji characters', () => {
      expect(createSlug('Hello World 🎉')).toBe('hello-world');
      expect(createSlug('Test 🚀 Launch')).toBe('test-launch');
    });

    it('removes emojis with variation selector-16 (U+FE0F)', () => {
      expect(createSlug('Text ❤️ with VS')).toBe('text-with-vs');
      expect(createSlug('Check ✅ Mark')).toBe('check-mark');
    });

    it('removes ZWJ (Zero Width Joiner) emoji sequences', () => {
      // Family emoji (uses ZWJ): 👨‍👩‍👧‍👦
      expect(createSlug('Family 👨‍👩‍👧‍👦 Time')).toBe('family-time');
      // Skin tone variants
      expect(createSlug('Wave 👋🏽 Hello')).toBe('wave-hello');
    });

    it('removes multiple consecutive emojis', () => {
      expect(createSlug('Multiple 🎉🎊🎈 Emojis')).toBe('multiple-emojis');
    });
  });

  describe('punctuation normalization', () => {
    it('removes various quote characters', () => {
      expect(createSlug("It's a Test")).toBe('its-a-test');
      expect(createSlug("Test 'Single' Quotes")).toBe('test-single-quotes');
      expect(createSlug('Test "Double" Quotes')).toBe('test-double-quotes');
      expect(createSlug('Test "Curly" Quotes')).toBe('test-curly-quotes');
    });

    it('removes sentence-ending punctuation', () => {
      expect(createSlug('Question? Answer.')).toBe('question-answer');
      expect(createSlug('Wow! Amazing.')).toBe('wow-amazing');
      expect(createSlug('Items: one; two, three')).toBe('items-one-two-three');
    });

    it('normalizes various dash types to single hyphen', () => {
      expect(createSlug('Em—Dash')).toBe('em-dash');
      expect(createSlug('En–Dash')).toBe('en-dash');
      expect(createSlug('Multiple---Hyphens')).toBe('multiple-hyphens');
    });

    it('collapses multiple consecutive hyphens', () => {
      expect(createSlug('Test----Multiple----Hyphens')).toBe('test-multiple-hyphens');
    });
  });

  describe('whitespace handling', () => {
    it('replaces regular spaces with hyphens', () => {
      expect(createSlug('Hello World Test')).toBe('hello-world-test');
    });

    it('replaces non-breaking spaces with hyphens', () => {
      expect(createSlug('Test\u00A0Non-Breaking\u00A0Space')).toBe('test-non-breaking-space');
    });

    it('collapses multiple spaces to single hyphen', () => {
      expect(createSlug('Multiple     Spaces')).toBe('multiple-spaces');
    });

    it('trims leading and trailing spaces', () => {
      expect(createSlug('  Padded Text  ')).toBe('padded-text');
    });
  });

  describe('URL safety', () => {
    it('converts to lowercase', () => {
      expect(createSlug('UPPERCASE TEXT')).toBe('uppercase-text');
      expect(createSlug('MixedCase Text')).toBe('mixedcase-text');
    });

    it('removes leading and trailing hyphens', () => {
      expect(createSlug('---Surrounded---')).toBe('surrounded');
      expect(createSlug('- List Item -')).toBe('list-item');
    });

    it('preserves alphanumeric characters and underscores', () => {
      expect(createSlug('test_123_abc')).toBe('test_123_abc');
      expect(createSlug('Version 2.0')).toBe('version-20');
    });

    it('removes unsafe special characters', () => {
      expect(createSlug('Test@#$%Special')).toBe('testspecial');
      expect(createSlug('Path/To/Resource')).toBe('pathtoresource');
    });
  });

  describe('real-world blog heading examples', () => {
    it('handles heading with emoji and punctuation', () => {
      expect(createSlug("🚀 Vendor Lock-In? It's Real.")).toBe('vendor-lock-in-its-real');
    });

    it('handles heading with em dash', () => {
      expect(createSlug("AI's Impact—The Reality")).toBe('ais-impact-the-reality');
    });

    it('handles complex heading with multiple punctuation types', () => {
      expect(createSlug('"The AI Did It" Is No Longer a Defense')).toBe(
        'the-ai-did-it-is-no-longer-a-defense'
      );
    });

    it('handles heading with colon and complex punctuation', () => {
      expect(createSlug('Governance Architecture: The Real Challenge')).toBe(
        'governance-architecture-the-real-challenge'
      );
    });
  });

  describe('edge cases', () => {
    it('handles empty string', () => {
      expect(createSlug('')).toBe('');
    });

    it('handles string with only emojis', () => {
      expect(createSlug('🎉🎊🎈')).toBe('');
    });

    it('handles string with only punctuation', () => {
      expect(createSlug('...,,,!!!')).toBe('');
    });

    it('handles string with only spaces', () => {
      expect(createSlug('     ')).toBe('');
    });

    it('handles very long heading text', () => {
      const longText =
        'This Is A Very Long Heading With Many Words To Test How The Function Handles Excessive Length';
      const result = createSlug(longText);
      expect(result).toBe(
        'this-is-a-very-long-heading-with-many-words-to-test-how-the-function-handles-excessive-length'
      );
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
