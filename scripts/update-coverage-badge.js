#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function updateCoverageBadge({
  fsDep = fs,
  pathDep = path,
  dirname = null,
  consoleDep = console,
  fileURLToPathDep = fileURLToPath,
} = {}) {
  const __filename = fileURLToPathDep(import.meta.url);
  const __dirname = dirname || pathDep.dirname(__filename);
  const coverageSummary = JSON.parse(
    fsDep.readFileSync(pathDep.join(__dirname, '../coverage/coverage-summary.json'), 'utf8')
  );
  const coverage = Math.floor(coverageSummary.total.lines.pct);
  let color;
  if (coverage >= 90) color = 'brightgreen';
  else if (coverage >= 80) color = 'green';
  else if (coverage >= 70) color = 'yellowgreen';
  else if (coverage >= 60) color = 'yellow';
  else color = 'red';
  const badgeUrl = `https://img.shields.io/badge/coverage-${coverage}%25-${color}`;
  const readmePath = pathDep.join(__dirname, '../README.md');
  let readme = fsDep.readFileSync(readmePath, 'utf8');
  const badgeRegex = /!\[Coverage\]\(https:\/\/img\.shields\.io\/badge\/coverage-.*?\)/;
  const newBadge = `![Coverage](${badgeUrl})`;
  if (badgeRegex.test(readme)) {
    readme = readme.replace(badgeRegex, newBadge);
  } else {
    const badgesSection = readme.match(/([\s\S]*?\n\n)/)[0];
    readme = readme.replace(badgesSection, `${badgesSection.trim()}\n${newBadge}\n\n`);
  }
  fsDep.writeFileSync(readmePath, readme);
  if (consoleDep && typeof consoleDep.log === 'function') {
    consoleDep.log(`Updated coverage badge: ${coverage}%`);
  }
}

// CLI entrypoint
if (import.meta.url === `file://${process.argv[1]}`) {
  updateCoverageBadge();
}
