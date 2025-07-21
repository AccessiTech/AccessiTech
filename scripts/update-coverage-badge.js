#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the coverage summary
const coverageSummary = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../coverage/coverage-summary.json'), 'utf8')
);

// Get the total line coverage
const coverage = Math.floor(coverageSummary.total.lines.pct);

// Determine the color based on coverage
let color;
if (coverage >= 90) color = 'brightgreen';
else if (coverage >= 80) color = 'green';
else if (coverage >= 70) color = 'yellowgreen';
else if (coverage >= 60) color = 'yellow';
else color = 'red';

// Create the badge URL
const badgeUrl = `https://img.shields.io/badge/coverage-${coverage}%25-${color}`;

// Update README.md with the new badge
const readmePath = path.join(__dirname, '../README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

// Replace existing coverage badge or add new one
const badgeRegex = /!\[Coverage\]\(https:\/\/img\.shields\.io\/badge\/coverage-.*?\)/;
const newBadge = `![Coverage](${badgeUrl})`;

if (badgeRegex.test(readme)) {
  readme = readme.replace(badgeRegex, newBadge);
} else {
  // Add after other badges
  const badgesSection = readme.match(/([\s\S]*?\n\n)/)[0];
  readme = readme.replace(badgesSection, `${badgesSection.trim()}\n${newBadge}\n\n`);
}

fs.writeFileSync(readmePath, readme);
console.log(`Updated coverage badge: ${coverage}%`);
