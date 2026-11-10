import fs from 'node:fs';
import path from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { preload } from '../server';
import { store } from '../store/store';

vi.mock('../App/App', () => ({ default: () => null }));
vi.mock('../components/Metadata/Metadata', () => ({ default: () => null }));
// The test CSS plugin preserves the server's import string as a virtual module ID.
vi.mock('./scss/index.scss', () => ({}));

afterEach(() => {
  vi.restoreAllMocks();
});

describe('SSR RSS preloading', () => {
  it.each(['https://accessi.tech', 'https://www.accessi.tech'])(
    'loads source paths independently of the RSS hostname %s',
    async host => {
      const blog = 'AI-for-Coding-Accessibility';
      const wcag = 'WCAG-Guideline-2-5-4-Motion-Actuation-Explained';
      const read = vi.spyOn(fs, 'readFileSync').mockReturnValueOnce(
        `<rss><channel><item><link>${host}/blog/${blog}</link></item></channel>
        <channel><item><link>${host}/wcag/${wcag}</link></item></channel></rss>`
      );
      const dispatch = vi.spyOn(store, 'dispatch');

      await preload('/', ['/']);

      for (const [family, id] of [
        ['blog', blog],
        ['wcag', wcag],
      ]) {
        expect(read).toHaveBeenCalledWith(
          path.resolve('public', 'data', family, `${id}.md`),
          'utf-8'
        );
        expect(dispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            payload: expect.objectContaining({ id, pathname: family, loaded: true }),
          })
        );
      }
      expect(read.mock.calls.some(([filename]) => String(filename).includes('www.blog'))).toBe(
        false
      );
    }
  );

  it('rejects missing RSS source files rather than leaving an unhandled preload rejection', async () => {
    vi.spyOn(fs, 'readFileSync').mockReturnValueOnce(
      '<rss><channel><item><link>https://www.accessi.tech/blog/nonexistent-preload-regression</link></item></channel></rss>'
    );
    await expect(preload('/', ['/'])).rejects.toThrow('ENOENT');
  });
});
