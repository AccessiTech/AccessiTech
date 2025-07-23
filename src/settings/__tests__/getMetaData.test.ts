import { getMetaData } from '../getMetaData';

describe('getMetaData', () => {
  it('returns correct metadata with all fields', () => {
    const meta = getMetaData({
      title: 'Test Title',
      description: 'Test Description',
      canonical: 'https://example.com',
      type: 'article',
      image: 'test.png',
      imageAlt: 'Test Image',
      siteName: 'Test Site',
      twitterCreator: '@test',
    });
    expect(meta).toMatchObject({
      title: 'Test Title',
      description: 'Test Description',
      canonical: 'https://example.com',
      'og:type': 'article',
      'og:image': expect.stringContaining('test.png'),
      'og:image:alt': 'Test Image',
      'og:site_name': 'Test Site',
      'og:title': 'Test Title',
      'og:description': 'Test Description',
      'og:url': 'https://example.com',
      'twitter:card': 'summary_large_image',
      'twitter:site': expect.any(String),
      'twitter:creator': '@test',
      'twitter:title': 'Test Title',
      'twitter:description': 'Test Description',
      'twitter:image': expect.stringContaining('test.png'),
      'twitter:image:alt': 'Test Image',
    });
  });

  it('uses defaults for missing optional fields', () => {
    const meta = getMetaData({
      title: 'Default Title',
      description: 'Default Desc',
      canonical: 'https://default.com',
    });
    expect(meta.title).toBe('Default Title');
    expect(meta['og:type']).toBe('website');
    expect(meta['og:image']).toContain('default.png');
    expect(meta['twitter:card']).toBe('summary_large_image');
    expect(meta['twitter:image']).toContain('default.png');
  });
});
