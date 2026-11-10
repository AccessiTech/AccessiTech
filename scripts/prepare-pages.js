import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

/**
 * Validate built Pages output and preserve legacy uppercase disclosure URLs.
 * rootDir is the repository root, not docs/; fsDep allows isolated filesystem tests.
 * Returns alias filenames copied or already resolved by a case-insensitive filesystem.
 * Throws when required build artifacts are missing.
 *
 * @example
 * // After yarn build:prod, recheck output from the repository root:
 * const { aliases, caseInsensitiveAliases } = preparePages();
 *
 * @example
 * // Validate another checkout's existing docs/ output:
 * preparePages({ rootDir: '/path/to/AccessiTech' });
 */
export function preparePages({ rootDir = process.cwd(), fsDep = fs } = {}) {
  const outputDir = path.join(rootDir, 'docs');
  // Without this marker, branch-based Pages can reprocess Markdown through Jekyll.
  if (!fsDep.existsSync(path.join(outputDir, '.nojekyll'))) {
    throw new Error('Missing docs/.nojekyll; rebuild with public/.nojekyll before publishing.');
  }

  const disclosureDir = path.join(outputDir, 'disclosures');
  const filenames = fsDep.readdirSync(disclosureDir);
  const aliases = [];
  const caseInsensitiveAliases = [];

  for (const id of ['accessibility', 'contributing']) {
    // Keep HTML aliases for old links and Markdown aliases for client-side fetches.
    for (const extension of ['html', 'md']) {
      const sourceName = `${id}.${extension}`;
      const aliasName = `${id.toUpperCase()}.${extension}`;
      // Check directory spelling: existsSync alone also accepts wrong-case names on macOS.
      if (!filenames.includes(sourceName)) {
        throw new Error(`Missing lowercase disclosure artifact: ${sourceName}`);
      }

      const source = path.join(disclosureDir, sourceName);
      const alias = path.join(disclosureDir, aliasName);
      // macOS may resolve both names to the same file; Linux deployment needs explicit aliases.
      if (!filenames.includes(aliasName) && fsDep.existsSync(alias)) {
        caseInsensitiveAliases.push(aliasName);
      } else {
        // Refresh stale aliases too; copying leaves the lowercase canonical metadata intact.
        fsDep.copyFileSync(source, alias);
        aliases.push(aliasName);
      }
    }
  }

  return { aliases, caseInsensitiveAliases };
}

// Imports expose the helper without preparing output or logging CLI status.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { aliases, caseInsensitiveAliases } = preparePages();
  console.log(`GitHub Pages prepared: Jekyll disabled; ${aliases.length} legacy aliases written.`);
  if (caseInsensitiveAliases.length) {
    console.log(
      `${caseInsensitiveAliases.length} aliases resolve on this case-insensitive filesystem; ` +
        'the Linux Pages workflow writes separate uppercase files before publishing.'
    );
  }
}
