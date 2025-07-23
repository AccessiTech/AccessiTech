import { describe, it, expect, vi } from 'vitest';
import { updateCoverageBadge } from '../update-coverage-badge.js';

function makeMockFS({ coverage = 85, readme = 'README\n\n' } = {}) {
  const files = {
    '/cov/coverage-summary.json': JSON.stringify({ total: { lines: { pct: coverage } } }),
    '/README.md': readme,
  };
  return {
    readFileSync: vi.fn(file => {
      if (file.endsWith('coverage-summary.json')) return files['/cov/coverage-summary.json'];
      if (file.endsWith('README.md')) return files['/README.md'];
      throw new Error('File not found: ' + file);
    }),
    writeFileSync: vi.fn((file, content) => {
      files['/README.md'] = content;
    }),
  };
}

describe('update-coverage-badge.js', () => {
  it('sets badge color based on coverage', () => {
    const badgeColors = [
      { pct: 95, color: 'brightgreen' },
      { pct: 85, color: 'green' },
      { pct: 75, color: 'yellowgreen' },
      { pct: 65, color: 'yellow' },
      { pct: 50, color: 'red' },
    ];
    badgeColors.forEach(({ pct }) => {
      const fs = makeMockFS({ coverage: pct });
      const path = {
        join: (...args) => args.join('/'),
        dirname: () => '/',
      };
      let logged = '';
      const consoleDep = {
        log: msg => {
          logged = msg;
        },
      };
      updateCoverageBadge({
        fsDep: fs,
        pathDep: path,
        dirname: '/',
        consoleDep,
        fileURLToPathDep: () => '/script.js',
      });
      expect(logged).toContain(`${pct}`);
      if (pct >= 90) expect(fs.readFileSync('/README.md', 'utf8')).toContain('brightgreen');
      else if (pct >= 80) expect(fs.readFileSync('/README.md', 'utf8')).toContain('green');
      else if (pct >= 70) expect(fs.readFileSync('/README.md', 'utf8')).toContain('yellowgreen');
      else if (pct >= 60) expect(fs.readFileSync('/README.md', 'utf8')).toContain('yellow');
      else expect(fs.readFileSync('/README.md', 'utf8')).toContain('red');
    });
  });

  it('replaces existing badge in README', () => {
    const fs = makeMockFS({
      coverage: 88,
      readme: 'foo\n![Coverage](https://img.shields.io/badge/coverage-10%25-red)\nbar\n',
    });
    const path = {
      join: (...args) => args.join('/'),
      dirname: () => '/',
    };
    let logged = '';
    const consoleDep = {
      log: msg => {
        logged = msg;
      },
    };
    updateCoverageBadge({
      fsDep: fs,
      pathDep: path,
      dirname: '/',
      consoleDep,
      fileURLToPathDep: () => '/script.js',
    });
    expect(fs.readFileSync('/README.md', 'utf8')).toContain(
      'https://img.shields.io/badge/coverage-88%25-green'
    );
    expect(logged).toContain('88');
  });

  it('inserts badge if not present', () => {
    const fs = makeMockFS({
      coverage: 77,
      readme: 'foo\n\nbar\n',
    });
    const path = {
      join: (...args) => args.join('/'),
      dirname: () => '/',
    };
    let logged = '';
    const consoleDep = {
      log: msg => {
        logged = msg;
      },
    };
    updateCoverageBadge({
      fsDep: fs,
      pathDep: path,
      dirname: '/',
      consoleDep,
      fileURLToPathDep: () => '/script.js',
    });
    expect(fs.readFileSync('/README.md', 'utf8')).toContain(
      'https://img.shields.io/badge/coverage-77%25-yellowgreen'
    );
    expect(logged).toContain('77');
  });
});
