# Scripts

Utility scripts for the AccessiTech build and test pipeline.

## prepare-pages.js

Runs after SSG in `yarn build:prod` (or directly with `yarn pages:prepare`).
Requires `docs/.nojekyll` and lowercase disclosure HTML/Markdown, then copies the
`ACCESSIBILITY` and `CONTRIBUTING` compatibility aliases on case-sensitive hosts.
On case-insensitive filesystems it reports aliases already resolved by the filesystem
instead of overwriting the same file. The Linux Pages workflow produces the final
case-sensitive deployment artifact.

Missing required artifacts cause a nonzero exit; disclosure Markdown is retained
because client navigation fetches it. Canonical lowercase URLs remain the only
disclosure variants in the sitemap and RSS.

**CLI usage** (from the repository root):

```bash
# Generate docs/ and run Pages preparation as the final build step.
yarn build:prod

# Recheck existing build output and refresh compatibility aliases without rebuilding.
yarn pages:prepare
# Equivalent direct invocation:
node scripts/prepare-pages.js
```

The standalone commands require an existing build; they do not generate missing
artifacts, change Pages settings, or deploy the site.

**Programmatic usage** (ES modules, from the repository root after building):

```js
import { preparePages } from './scripts/prepare-pages.js';

const { aliases, caseInsensitiveAliases } = preparePages();
console.log({ aliases, caseInsensitiveAliases });

// For another checkout, pass its repository root, not its docs/ directory.
preparePages({ rootDir: '/path/to/AccessiTech' });
```

Importing the helper does not run preparation. Both return arrays contain filenames:
on a fresh Linux build, `aliases` contains `ACCESSIBILITY.html`, `ACCESSIBILITY.md`,
`CONTRIBUTING.html`, and `CONTRIBUTING.md`, while `caseInsensitiveAliases` is empty.
On a case-insensitive Mac, those names are normally reported in
`caseInsensitiveAliases` instead and no files are copied onto themselves.
Repeat runs refresh existing distinct aliases from their lowercase sources.
Missing required artifacts throw an error (or exit nonzero through the CLI).

**Regression checks**:

```bash
yarn vitest run scripts/__tests__/prepare-pages.test.js
```

## test_ssg_regression.py

Regression detection for SSG-generated HTML files.

**Purpose**: Scans all HTML files in `docs/` for "Loading..." placeholder text, which indicates incomplete or failed static site generation.

**Usage**:

```bash
python3 scripts/test_ssg_regression.py
```

**Exit Codes**:

- `0` = No regressions detected (clean build)
- `1` = Loading placeholders found (regression detected)

**Output Example**:

```
✓ No Loading... placeholders found. Build is clean.
```

Or (if regression):

```
docs/index.html: line 42, line 87
docs/blog/post.html: line 15
FAILED: 2 files with Loading... placeholders
```

**Integration**: This script is also run as a pytest test via `tests/test_ssg_regression.py`.

---

## qa_html.py

Comprehensive quality assurance (QA) checks for generated HTML and source content.

**Purpose**: Multi-layer QA validation covering structural, metadata, readability, and content consistency checks. Scans all HTML pages in `docs/` for:

- **Layer 2 (Universal checks)**: Structural (doctype, lang, main), metadata (title, og:\*, canonical), accessibility (skip links), and rendering issues
- **Layer 1 (Content checks)**: Text readability metrics (Flesch-Kincaid, Flesch Reading Ease, word count, sentence length) for Markdown source files
- **Layer 3 (Cross-reference checks)**: Validates consistency between Markdown source and compiled HTML output

**Usage**:

```bash
# Run universal checks on all HTML in docs/
python3 scripts/qa_html.py

# Include Markdown readability analysis
python3 scripts/qa_html.py --check-sources

# Include TSX content analysis (service/product pages)
python3 scripts/qa_html.py --check-sources

# Limit to specific page type
python3 scripts/qa_html.py --page-type blog-entry

# Output format (default: table; alternatives: json, sarif)
python3 scripts/qa_html.py --output-format json
```

**Exit Codes**:

- `0` = All checks passed (no findings)
- `1` = Findings detected (ERRORs or WARNings)
- `2` = Configuration/runtime error

**Output Formats**:

- **Table** (default, console): Human-readable summary with findings grouped by severity
- **JSON** (`--output-format json`): Machine-readable findings array
- **SARIF** (`--output-format sarif`): Static Analysis Results Format (CI/tool integration)

**Check Categories**:

| Category          | Codes                        | Applies To                                     |
| ----------------- | ---------------------------- | ---------------------------------------------- |
| Structural        | `struct-001` to `struct-003` | All pages                                      |
| Metadata          | `meta-001` to `meta-005`     | All pages                                      |
| Open Graph        | `og-001` to `og-005`         | All pages                                      |
| Canonical URL     | `canon-001` to `canon-002`   | All pages                                      |
| Accessibility     | `a11y-001` to `a11y-003`     | All pages                                      |
| Readability (MD)  | `qual-001` to `qual-005`     | Blog/WCAG entries (with `--check-sources`)     |
| Readability (TSX) | `qual-001` to `qual-005`     | Service/product pages (with `--check-sources`) |

**Key Findings**:

- **ERROR**: Correctness issue that must be fixed (e.g., missing required metadata, wrong canonical domain)
- **WARN**: Best practice or quality concern (e.g., dense prose, thin content)
- **INFO**: Informational note (e.g., check skipped due to missing dependency)

**Example Output**:

```
qa_html.py: 122 pages scanned, 0 errors, 2 warnings

WARN  qual-003  Flesch Reading Ease < 30  docs/wcag/WCAG-1-1-1.md
  Dense content (RE=28.7). Consider simplifying vocabulary or breaking sentences.

WARN  qual-004  Avg sentence length > 30  docs/wcag/WCAG-2-1-1.md
  Average 34 words/sentence. Aim for < 30 for accessibility.
```

**Dependencies**:

- Python 3.8+
- `textstat>=0.7.3` (for readability metrics; optional; will skip checks if missing)
- `beautifulsoup4>=4.10.0` (for HTML parsing)

**Integration**: Used in CI pipeline (GitHub Actions) to gate builds on HTML quality. Also available as a pytest test suite via `tests/test_qa_html.py`.
