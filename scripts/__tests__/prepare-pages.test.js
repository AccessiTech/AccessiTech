import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { preparePages } from '../prepare-pages.js';
import { generateRssFeed } from '../rss.js';
import { generateSitemap } from '../sitemap.js';

function artifactFs({ caseInsensitive = false } = {}) {
  const files = new Map([
    ['/site/docs/.nojekyll', ''],
    ['/site/docs/disclosures/accessibility.html', '<title>Accessibility Statement</title>'],
    ['/site/docs/disclosures/accessibility.md', '# Accessibility Statement'],
    ['/site/docs/disclosures/contributing.html', '<title>Contributing Guidelines</title>'],
    ['/site/docs/disclosures/contributing.md', '# Contributing'],
  ]);
  const keyFor = name => (caseInsensitive ? name.toLowerCase() : name);
  return {
    files,
    fsDep: {
      existsSync: name => files.has(keyFor(name)),
      readdirSync: () =>
        [...files.keys()]
          .filter(name => name.includes('/disclosures/'))
          .map(name => path.basename(name)),
      copyFileSync: (source, target) => {
        files.set(keyFor(target), files.get(keyFor(source)));
      },
    },
  };
}

describe('GitHub Pages preparation', () => {
  it('creates legacy aliases on case-sensitive hosts without altering canonical HTML', () => {
    const { files, fsDep } = artifactFs();
    const result = preparePages({ rootDir: '/site', fsDep });
    expect(result.aliases).toEqual([
      'ACCESSIBILITY.html',
      'ACCESSIBILITY.md',
      'CONTRIBUTING.html',
      'CONTRIBUTING.md',
    ]);
    expect(result.caseInsensitiveAliases).toEqual([]);
    for (const alias of result.aliases) {
      expect(files.get(`/site/docs/disclosures/${alias}`)).toBe(
        files.get(`/site/docs/disclosures/${alias.toLowerCase()}`)
      );
    }
  });

  it('refreshes existing aliases on repeat builds', () => {
    const { files, fsDep } = artifactFs();
    files.set('/site/docs/disclosures/ACCESSIBILITY.html', 'stale metadata');
    preparePages({ rootDir: '/site', fsDep });
    expect(files.get('/site/docs/disclosures/ACCESSIBILITY.html')).toContain(
      'Accessibility Statement'
    );
  });

  it('reports aliases resolved by a case-insensitive filesystem without copying onto itself', () => {
    const { files, fsDep } = artifactFs({ caseInsensitive: true });
    const result = preparePages({ rootDir: '/site', fsDep });
    expect(result.aliases).toEqual([]);
    expect(result.caseInsensitiveAliases).toHaveLength(4);
    expect(files.size).toBe(5);
  });

  it('fails if the Jekyll opt-out marker is missing', () => {
    const { files, fsDep } = artifactFs();
    files.delete('/site/docs/.nojekyll');
    expect(() => preparePages({ rootDir: '/site', fsDep })).toThrow('Missing docs/.nojekyll');
  });

  it('requires exact lowercase artifact names even on case-insensitive hosts', () => {
    const { files, fsDep } = artifactFs({ caseInsensitive: true });
    files.set('/site/docs/disclosures/ACCESSIBILITY.html', 'wrong case');
    files.delete('/site/docs/disclosures/accessibility.html');
    expect(() => preparePages({ rootDir: '/site', fsDep })).toThrow(
      'Missing lowercase disclosure artifact: accessibility.html'
    );
  });

  it('fails rather than pruning missing runtime Markdown', () => {
    const { files, fsDep } = artifactFs();
    files.delete('/site/docs/disclosures/contributing.md');
    expect(() => preparePages({ rootDir: '/site', fsDep })).toThrow(
      'Missing lowercase disclosure artifact: contributing.md'
    );
  });
});

describe('disclosure publishing sources', () => {
  it('keeps lowercase Markdown available and opts out of Jekyll', () => {
    expect(fs.existsSync('public/.nojekyll')).toBe(true);
    const names = fs.readdirSync('public/disclosures');
    for (const id of ['accessibility', 'contributing']) {
      expect(names).toContain(`${id}.md`);
      expect(names).not.toContain(`${id.toUpperCase()}.md`);
    }
  });

  it('uses only lowercase extensionless disclosure URLs in RSS and sitemap', () => {
    const { rss } = generateRssFeed();
    const { sitemap } = generateSitemap();
    for (const id of ['accessibility', 'contributing']) {
      const url = `https://www.accessi.tech/disclosures/${id}`;
      expect(rss).toContain(`<link>${url}</link>`);
      expect(sitemap).toContain(`<loc>${url}</loc>`);
      expect(rss).not.toContain(`/disclosures/${id.toUpperCase()}`);
      expect(sitemap).not.toContain(`/disclosures/${id.toUpperCase()}`);
    }
  });
});
