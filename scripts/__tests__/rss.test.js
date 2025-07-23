import { describe, it, expect } from 'vitest';
import { generateRssFeed } from '../rss';
import path from 'path';

describe('rss.js script', () => {
  function makeMockFs(files, fileContents) {
    return {
      readdirSync: dir => files[dir] || [],
      statSync: filePath => {
        if (!filePath) return { isFile: () => false, isDirectory: () => false };
        if (filePath.endsWith('.md')) return { isFile: () => true, isDirectory: () => false };
        if (Object.prototype.hasOwnProperty.call(files, filePath))
          return { isFile: () => false, isDirectory: () => true };
        const isDir = Object.entries(files).some(
          ([parent, arr]) =>
            Array.isArray(arr) &&
            arr.some(entry => import('path').then(path => path.join(parent, entry)) === filePath)
        );
        if (isDir) return { isFile: () => false, isDirectory: () => true };
        return { isFile: () => false, isDirectory: () => false };
      },
      readFileSync: filePath => fileContents[filePath] || '',
      writeFileSync: () => {},
    };
  }
  const mockPath = path;

  it('should generate RSS feed with blog entries', () => {
    const rootDir = '/mock/root';
    const blogDir = mockPath.join(rootDir, 'public/data/blog');
    const wcagDir = mockPath.join(rootDir, 'public/data/wcag');
    const files = {
      [mockPath.join(rootDir, 'public')]: ['data', 'rss.xml'],
      [mockPath.join(rootDir, 'public/data')]: ['blog', 'wcag'],
      [blogDir]: ['post1.md', 'post2.md'],
      [wcagDir]: [],
    };
    const fileContents = {
      [mockPath.join(blogDir, 'post1.md')]:
        'title: Post 1\ndate: 2023-01-01\ndescription: Desc 1\nstatus: published',
      [mockPath.join(blogDir, 'post2.md')]:
        'title: Post 2\ndate: 2023-01-02\ndescription: Desc 2\nstatus: published',
    };
    const mockFs = makeMockFs(files, fileContents);
    const { rss, outputPath } = generateRssFeed({ fsDep: mockFs, pathDep: mockPath, rootDir });
    expect(typeof outputPath).toBe('string');
    expect(outputPath).toMatch(/rss\.xml/);
    expect(rss).toContain('<rss');
    expect(rss).toContain('Post 1');
    expect(rss).toContain('Post 2');
  });

  it('should handle empty blog directory gracefully', () => {
    const rootDir = '/mock/root';
    const blogDir = mockPath.join(rootDir, 'public/data/blog');
    const wcagDir = mockPath.join(rootDir, 'public/data/wcag');
    const files = {
      [mockPath.join(rootDir, 'public')]: ['data', 'rss.xml'],
      [mockPath.join(rootDir, 'public/data')]: ['blog', 'wcag'],
      [blogDir]: [],
      [wcagDir]: [],
    };
    const fileContents = {};
    const mockFs = makeMockFs(files, fileContents);
    const { rss } = generateRssFeed({ fsDep: mockFs, pathDep: mockPath, rootDir });
    expect(rss).toContain('<rss');
  });

  it('should not include non-file entries', () => {
    const rootDir = '/mock/root';
    const blogDir = mockPath.join(rootDir, 'public/data/blog');
    const wcagDir = mockPath.join(rootDir, 'public/data/wcag');
    const files = {
      [mockPath.join(rootDir, 'public')]: ['data', 'rss.xml'],
      [mockPath.join(rootDir, 'public/data')]: ['blog', 'wcag'],
      [blogDir]: ['dir1', 'post.md'],
      [mockPath.join(blogDir, 'dir1')]: [],
      [wcagDir]: [],
    };
    const fileContents = {
      [mockPath.join(blogDir, 'post.md')]:
        'title: Post\ndate: 2023-01-01\ndescription: Desc\nstatus: published',
    };
    const mockFs = makeMockFs(files, fileContents);
    const { rss } = generateRssFeed({ fsDep: mockFs, pathDep: mockPath, rootDir });
    expect(typeof rss).toBe('string');
    expect(rss).toContain('Post');
    // Should not throw or include 'dir1' as a post
  });
});
