import { describe, it, expect, vi } from 'vitest';
import { readCNAME, getAllMarkdownFiles, generateSitemap } from '../sitemap.js';

// --- readCNAME ---
describe('readCNAME', () => {
  it('returns trimmed contents if file exists', () => {
    const mockFS = { readFileSync: vi.fn(() => 'example.com\n') };
    expect(readCNAME('fakepath', mockFS)).toBe('example.com');
    expect(mockFS.readFileSync).toHaveBeenCalledWith('fakepath', 'utf-8');
  });
  it('returns null if file does not exist', () => {
    const mockFS = {
      readFileSync: vi.fn(() => {
        throw new Error('fail');
      }),
    };
    expect(readCNAME('fakepath', mockFS)).toBeNull();
  });
});

// --- getAllMarkdownFiles ---
describe('getAllMarkdownFiles', () => {
  it('recursively finds .md files', () => {
    const mockFS = {
      readdirSync: vi.fn(dir => (dir === '/root' ? ['a.md', 'b', 'c.md'] : ['d.md'])),
      statSync: vi.fn(file => ({ isDirectory: () => file === '/root/b' })),
    };
    const mockPath = {
      join: (...args) => args.join('/'),
    };
    // /root has a.md, b (dir), c.md; /root/b has d.md
    const files = getAllMarkdownFiles('/root', mockFS, mockPath);
    expect(files).toEqual(['/root/a.md', '/root/b/d.md', '/root/c.md']);
  });
});

// --- generateSitemap ---
describe('generateSitemap', () => {
  it('generates sitemap xml with only static pages if no blog files', () => {
    const mockFS = {
      readFileSync: vi.fn(file => {
        if (file.endsWith('CNAME')) return 'mysite.com';
        throw new Error('no file');
      }),
      readdirSync: vi.fn(() => []),
      statSync: vi.fn(() => ({ isDirectory: () => false, size: 123 })),
      existsSync: vi.fn(() => true),
    };
    const mockPath = {
      join: (...args) => args.join('/'),
      resolve: (...args) => args.join('/'),
      relative: (from, to) => to.replace(from + '/', ''),
    };
    const mockEnv = { SITE_URL: undefined };
    const mockGetMetaData = vi.fn(() => ({}));
    const { sitemap, outputPath } = generateSitemap({
      fsDep: mockFS,
      pathDep: mockPath,
      rootDir: '/root',
      env: mockEnv,
      getMetaDataDep: mockGetMetaData,
    });
    expect(sitemap).toContain('<loc>https://mysite.com/</loc>');
    expect(sitemap).toContain('<loc>https://mysite.com/blog</loc>');
    expect(sitemap).toContain('<loc>https://mysite.com/wcag</loc>');
    expect(sitemap).not.toContain('<loc>https://mysite.com/blog1</loc>');
    expect(outputPath).toBe('/root/public/sitemap.xml');
  });

  it('includes dynamic blog pages from markdown files', () => {
    // Simulate a directory with a blog subdir and two blog posts
    const files = {
      '/root/public/data': ['blog', 'other.md'],
      '/root/public/data/blog': ['post1.md', 'post2.md'],
    };
    const fileContents = {
      '/root/public/data/other.md': '# Other\n',
      '/root/public/data/blog/post1.md': '# Post 1\n',
      '/root/public/data/blog/post2.md': '# Post 2\n',
    };
    const mockFS = {
      readFileSync: vi.fn(file => {
        if (file.endsWith('CNAME')) return 'mysite.com';
        return fileContents[file] || '';
      }),
      readdirSync: vi.fn(dir => files[dir] || []),
      statSync: vi.fn(file => ({ isDirectory: () => files[file] !== undefined, size: 123 })),
      existsSync: vi.fn(() => true),
    };
    const mockPath = {
      join: (...args) => args.join('/'),
      resolve: (...args) => args.join('/'),
      relative: (from, to) => to.replace(from + '/', ''),
    };
    const mockEnv = { SITE_URL: undefined };
    const mockGetMetaData = vi.fn(content => {
      if (content.includes('Post 1'))
        return {
          title: 'Post 1',
          image: 'p1.png',
          imageAlt: 'Alt1',
          date: '2020-01-01',
          status: 'published',
        };
      if (content.includes('Post 2'))
        return {
          title: 'Post 2',
          image: 'p2.png',
          imageAlt: 'Alt2',
          date: '2020-02-02',
          status: 'published',
        };
      return {
        title: 'Other',
        image: 'other.png',
        imageAlt: 'OtherAlt',
        date: '2020-03-03',
        status: 'published',
      };
    });
    // Debug removed: getAllMarkdownFiles('/root/public/data', mockFS, mockPath);
    const { sitemap } = generateSitemap({
      fsDep: mockFS,
      pathDep: mockPath,
      rootDir: '/root',
      env: mockEnv,
      getMetaDataDep: mockGetMetaData,
    });
    expect(sitemap).toContain('<loc>https://mysite.com/blog/post1</loc>');
    expect(sitemap).toContain('<loc>https://mysite.com/blog/post2</loc>');
    expect(sitemap).toContain('<loc>https://mysite.com/other</loc>');
    expect(sitemap).toContain(
      '<image:loc>https://www.accessi.tech/assets/images/p1.png</image:loc>'
    );
    expect(sitemap).toContain(
      '<image:loc>https://www.accessi.tech/assets/images/p2.png</image:loc>'
    );
    expect(sitemap).toContain(
      '<image:loc>https://www.accessi.tech/assets/images/other.png</image:loc>'
    );
  });
  it('uses SITE_URL if CNAME is missing', () => {
    const mockFS = {
      readFileSync: vi.fn(() => {
        throw new Error('no file');
      }),
      readdirSync: vi.fn(() => []),
      statSync: vi.fn(() => ({ isDirectory: () => false, size: 0 })),
      existsSync: vi.fn(() => true),
    };
    const mockPath = {
      join: (...args) => args.join('/'),
      resolve: (...args) => args.join('/'),
      relative: (from, to) => to.replace(from + '/', ''),
    };
    const mockEnv = { SITE_URL: 'envsite.com' };
    const mockGetMetaData = vi.fn(() => ({}));
    const { sitemap } = generateSitemap({
      fsDep: mockFS,
      pathDep: mockPath,
      rootDir: '/root',
      env: mockEnv,
      getMetaDataDep: mockGetMetaData,
    });
    expect(sitemap).toContain('<loc>https://envsite.com/</loc>');
  });
});
