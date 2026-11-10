import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export function preparePages({ rootDir = process.cwd(), fsDep = fs } = {}) {
  const outputDir = path.join(rootDir, 'docs');
  if (!fsDep.existsSync(path.join(outputDir, '.nojekyll'))) {
    throw new Error('Missing docs/.nojekyll; rebuild with public/.nojekyll before publishing.');
  }

  const disclosureDir = path.join(outputDir, 'disclosures');
  const filenames = fsDep.readdirSync(disclosureDir);
  const aliases = [];
  const caseInsensitiveAliases = [];

  for (const id of ['accessibility', 'contributing']) {
    for (const extension of ['html', 'md']) {
      const sourceName = `${id}.${extension}`;
      const aliasName = `${id.toUpperCase()}.${extension}`;
      if (!filenames.includes(sourceName)) {
        throw new Error(`Missing lowercase disclosure artifact: ${sourceName}`);
      }

      const source = path.join(disclosureDir, sourceName);
      const alias = path.join(disclosureDir, aliasName);
      // macOS may resolve both names to the same file; Linux deployment needs explicit aliases.
      if (!filenames.includes(aliasName) && fsDep.existsSync(alias)) {
        caseInsensitiveAliases.push(aliasName);
      } else {
        fsDep.copyFileSync(source, alias);
        aliases.push(aliasName);
      }
    }
  }

  return { aliases, caseInsensitiveAliases };
}

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
