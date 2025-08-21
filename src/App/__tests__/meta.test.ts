import { describe, it, expect, vi } from 'vitest';
import { metadata } from '../meta';

// Mock settings/strings
vi.mock('../../settings/strings', () => ({
  ACCESSITECH: 'AccessiTech',
  COMPANY_TITLE: 'AccessiTech',
  DEFAULT_SHARE_IMAGE: '/path/to/image.jpg',
  DEFAULT_SHARE_IMAGE_ALT: 'AccessiTech Logo',
  HOME_CANONICAL: 'https://accessi.tech',
  HOME_DESCRIPTION: 'Making technology accessible for everyone',
  HOME_TITLE: 'Home',
}));

describe('App metadata', () => {
  it('exports the correct metadata object', () => {
    expect(metadata).toEqual({
      title: 'AccessiTech | Home',
      description: 'Making technology accessible for everyone',
      canonical: 'https://accessi.tech',
      image: '/path/to/image.jpg',
      imageAlt: 'AccessiTech Logo',
      siteName: 'AccessiTech',
      twitterCreator: '@accessiT3ch',
    });
  });

  it('includes all required metadata fields', () => {
    const requiredFields = [
      'title',
      'description',
      'canonical',
      'image',
      'imageAlt',
      'siteName',
      'twitterCreator',
    ];

    requiredFields.forEach(field => {
      expect(metadata).toHaveProperty(field);
      expect(metadata[field as keyof typeof metadata]).toBeTruthy();
    });
  });
});
