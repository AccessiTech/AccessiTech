"""test_qa_html.py — Test suite for scripts/qa_html.py

Tests the AccessiTech HTML QA runner covering:

- Happy path: well-formed pages pass all implemented universal checks
- Page type detection: heuristic correctly classifies file paths
- Known-failure: real docs/blog/*.html files that have the accessitech.org canonical bug
- Synthetic failure: minimal HTML strings triggering each check in isolation
- MD source checks: Layer 1 validation of public/data/blog/*.md files
- Exit code integration: subprocess-level exit code verification (pytest.mark.io)

Run fast (no I/O):
    pytest tests/test_qa_html.py -m "not io"

Run all:
    pytest tests/test_qa_html.py
"""

import subprocess
import sys
from pathlib import Path

import pytest
from bs4 import BeautifulSoup

# ---------------------------------------------------------------------------
# Path setup — allow importing from scripts/ without installing the package
# ---------------------------------------------------------------------------

_REPO_ROOT = Path(__file__).parent.parent
sys.path.insert(0, str(_REPO_ROOT / "scripts"))

from qa_html import (  # noqa: E402
    CheckResult,
    _extract_tsx_prose,
    _find_duplicate_paragraphs,
    _strip_markdown_body,
    check_html_by_type,
    check_html_universal,
    check_md_readability,
    check_md_source,
    check_tsx_readability,
    check_xref,
    detect_page_type,
)

# ---------------------------------------------------------------------------
# Shared HTML fixtures
# ---------------------------------------------------------------------------

#: Minimal HTML that satisfies all *implemented* universal checks (no ERRORs).
MINIMAL_VALID_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>AccessiTech | Test Page</title>
  <meta name="description" content="A short valid description for testing purposes only." />
  <meta property="og:title" content="AccessiTech | Test Page" />
  <meta property="og:description" content="A short valid description." />
  <meta property="og:url" content="https://accessi.tech/test" />
  <meta property="og:image" content="https://accessi.tech/assets/images/test.png" />
  <link rel="canonical" href="https://accessi.tech/test" />
  <link rel="manifest" href="/manifest.json" />
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header aria-label="Header">
    <nav aria-label="Main navigation">
      <ul><li>A</li><li>B</li><li>C</li><li>D</li><li>E</li></ul>
    </nav>
  </header>
  <main id="main" aria-label="Test Page">
    <h1>Test Page</h1>
    <p>Content here.</p>
  </main>
  <footer aria-label="Footer">
    <p>&#169; 2026 AccessiTech LLC. All Rights Reserved.</p>
  </footer>
  <div id="root"><p>App content here.</p></div>
</body>
</html>"""

#: HTML containing the known canonical domain bug — accessitech.org in og:url and canonical.
WRONG_DOMAIN_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Test Post</title>
  <meta property="og:url" content="https://accessitech.org/blog/test-post" />
  <link rel="canonical" href="https://accessitech.org/blog/test-post" />
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <main id="main" aria-label="Blog Entry"><p>Content</p></main>
  <div id="root"><p>content</p></div>
</body>
</html>"""

_SCRIPT_PATH = _REPO_ROOT / "scripts" / "qa_html.py"
_BLOG_DIR = _REPO_ROOT / "docs" / "blog"
_MD_SOURCE_DIR = _REPO_ROOT / "public" / "data" / "blog"


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------


@pytest.fixture
def valid_soup():
    """BeautifulSoup tree of MINIMAL_VALID_HTML."""
    return BeautifulSoup(MINIMAL_VALID_HTML, "lxml")


@pytest.fixture
def wrong_domain_soup():
    """BeautifulSoup tree of WRONG_DOMAIN_HTML (canonical domain bug present)."""
    return BeautifulSoup(WRONG_DOMAIN_HTML, "lxml")


# ---------------------------------------------------------------------------
# Happy path
# ---------------------------------------------------------------------------


def test_valid_html_passes_universal_checks(valid_soup, tmp_path):
    """A well-formed page with correct domain and required elements has zero ERROR results."""
    results = check_html_universal(valid_soup, tmp_path / "index.html")
    errors = [r for r in results if r.severity == "ERROR"]
    assert errors == [], (
        f"Expected no ERRORs on valid HTML, got: {[r.rule_id for r in errors]}"
    )


# ---------------------------------------------------------------------------
# Page type detection
# ---------------------------------------------------------------------------


@pytest.mark.parametrize(
    "path_str,expected_type",
    [
        ("docs/index.html", "home"),
        ("docs/blog.html", "blog-index"),
        ("docs/blog/My-Post.html", "blog-entry"),
        ("docs/services/consulting/asaaps.html", "service-detail"),
        ("docs/404.html", "404"),
    ],
)
def test_detect_page_type(path_str, expected_type):
    """detect_page_type() correctly classifies each path to its expected page type."""
    assert detect_page_type(Path(path_str)) == expected_type


# ---------------------------------------------------------------------------
# Known-failure: real docs/blog/*.html files (require file I/O)
# ---------------------------------------------------------------------------


@pytest.mark.io
def test_accessitech_org_canonical_no_longer_present():
    """Regression: no blog HTML file should produce a canon-002 ERROR (bug fixed in 1c940af).

    The canonical href accessitech.org bug was fixed in src/server.tsx (commit 1c940af).
    This test ensures the fix holds and is not regressed by future SSG rebuilds.
    See testing/qa-page-specs.md § Known Issues for historical context.
    """
    html_files = list(_BLOG_DIR.glob("*.html"))
    assert html_files, f"No blog HTML files found in {_BLOG_DIR}"

    domain_errors = []
    for html_path in html_files:
        content = html_path.read_text(encoding="utf-8", errors="replace")
        soup = BeautifulSoup(content, "lxml")
        results = check_html_universal(soup, html_path)
        domain_errors.extend(
            r for r in results if r.rule_id == "canon-002" and r.severity == "ERROR"
        )

    assert not domain_errors, (
        f"canon-002 domain regression: {len(domain_errors)} files still use accessitech.org "
        f"in canonical href. First: {domain_errors[0].filename if domain_errors else ''}"
    )


@pytest.mark.io
def test_accessitech_org_og_url_no_longer_present():
    """Regression: no blog HTML file should produce an og-004 ERROR (bug fixed in 1c940af).

    The og:url accessitech.org bug was fixed in src/server.tsx (commit 1c940af).
    This test ensures the fix holds and is not regressed by future SSG rebuilds.
    See testing/qa-page-specs.md § Known Issues for historical context.
    """
    html_files = list(_BLOG_DIR.glob("*.html"))
    assert html_files, f"No blog HTML files found in {_BLOG_DIR}"

    domain_errors = []
    for html_path in html_files:
        content = html_path.read_text(encoding="utf-8", errors="replace")
        soup = BeautifulSoup(content, "lxml")
        results = check_html_universal(soup, html_path)
        domain_errors.extend(
            r for r in results if r.rule_id == "og-004" and r.severity == "ERROR"
        )

    assert not domain_errors, (
        f"og-004 domain regression: {len(domain_errors)} files still use accessitech.org "
        f"in og:url. First: {domain_errors[0].filename if domain_errors else ''}"
    )


# ---------------------------------------------------------------------------
# Synthetic failure tests (check each rule in isolation)
# ---------------------------------------------------------------------------


def test_missing_skip_link_is_error(tmp_path):
    """HTML with no skip link triggers a11y-001 ERROR."""
    html = """<!DOCTYPE html>
<html lang="en">
<head>
  <title>Test</title>
  <meta property="og:url" content="https://accessi.tech/test"/>
  <link rel="canonical" href="https://accessi.tech/test"/>
</head>
<body>
  <main id="main" aria-label="Test"><p>Content</p></main>
  <div id="root"><p>content</p></div>
</body>
</html>"""
    soup = BeautifulSoup(html, "lxml")
    results = check_html_universal(soup, tmp_path / "test.html")
    error_ids = [r.rule_id for r in results if r.severity == "ERROR"]
    assert "a11y-001" in error_ids, (
        f"Expected a11y-001 ERROR for missing skip link, got: {error_ids}"
    )


def test_main_missing_id_is_error(tmp_path):
    """HTML with <main> lacking id='main' triggers a11y-005 ERROR."""
    html = """<!DOCTYPE html>
<html lang="en">
<head>
  <title>Test</title>
  <meta property="og:url" content="https://accessi.tech/test"/>
  <link rel="canonical" href="https://accessi.tech/test"/>
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <main aria-label="Test Page"><p>Content — no id attribute here</p></main>
  <div id="root"><p>content</p></div>
</body>
</html>"""
    soup = BeautifulSoup(html, "lxml")
    results = check_html_universal(soup, tmp_path / "test.html")
    error_ids = [r.rule_id for r in results if r.severity == "ERROR"]
    assert "a11y-005" in error_ids, (
        f"Expected a11y-005 ERROR for <main> without id='main', got: {error_ids}"
    )


def test_loading_placeholder_is_error(tmp_path):
    """HTML with 'Loading...' text inside #root triggers render-001 ERROR."""
    html = """<!DOCTYPE html>
<html lang="en">
<head>
  <title>Test</title>
  <meta property="og:url" content="https://accessi.tech/test"/>
  <link rel="canonical" href="https://accessi.tech/test"/>
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <main id="main" aria-label="Test"><p>Content</p></main>
  <div id="root">Loading...</div>
</body>
</html>"""
    soup = BeautifulSoup(html, "lxml")
    results = check_html_universal(soup, tmp_path / "test.html")
    error_ids = [r.rule_id for r in results if r.severity == "ERROR"]
    assert "render-001" in error_ids, (
        f"Expected render-001 ERROR for Loading... in #root, got: {error_ids}"
    )


def test_description_too_long_is_warn(tmp_path):
    """Meta description longer than 160 characters triggers meta-003 WARN."""
    long_desc = "A" * 161  # 161 chars — one over the 160-char limit
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <title>Test</title>
  <meta name="description" content="{long_desc}"/>
  <meta property="og:url" content="https://accessi.tech/test"/>
  <link rel="canonical" href="https://accessi.tech/test"/>
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <main id="main" aria-label="Test"><p>Content</p></main>
  <div id="root"><p>content</p></div>
</body>
</html>"""
    soup = BeautifulSoup(html, "lxml")
    results = check_html_universal(soup, tmp_path / "test.html")
    warn_ids = [r.rule_id for r in results if r.severity == "WARN"]
    assert "meta-003" in warn_ids, (
        f"Expected meta-003 WARN for 161-char description, got WARN rule IDs: {warn_ids}"
    )


# ---------------------------------------------------------------------------
# MD source checks — Layer 1 (require file I/O)
# ---------------------------------------------------------------------------


@pytest.mark.io
def test_md_source_title_present():
    """All MD source files in public/data/blog/ have a non-empty title field (src-001 passes)."""
    md_files = sorted(_MD_SOURCE_DIR.glob("*.md"))
    assert len(md_files) >= 5, (
        f"Expected at least 5 MD source files, found {len(md_files)} in {_MD_SOURCE_DIR}"
    )

    failed = []
    for md_path in md_files:
        results, _ = check_md_source(md_path)
        if any(r.rule_id == "src-001" and r.severity == "ERROR" for r in results):
            failed.append(md_path.name)

    assert failed == [], f"MD files failing src-001 (missing title): {failed}"


@pytest.mark.io
def test_md_source_status_valid():
    """All MD source files in public/data/blog/ have a valid status value (src-006 passes)."""
    md_files = sorted(_MD_SOURCE_DIR.glob("*.md"))
    assert len(md_files) >= 5, (
        f"Expected at least 5 MD source files, found {len(md_files)} in {_MD_SOURCE_DIR}"
    )

    failed = []
    for md_path in md_files:
        results, _ = check_md_source(md_path)
        if any(r.rule_id == "src-006" and r.severity == "ERROR" for r in results):
            failed.append(md_path.name)

    assert failed == [], f"MD files failing src-006 (invalid status): {failed}"


# ---------------------------------------------------------------------------
# Exit code integration tests (require file I/O + subprocess)
# ---------------------------------------------------------------------------


@pytest.mark.io
def test_exit_code_1_on_error(tmp_path):
    """Running qa_html.py against a file with accessitech.org returns exit code 1 (ERROR found)."""
    blog_dir = tmp_path / "docs" / "blog"
    blog_dir.mkdir(parents=True)
    html_file = blog_dir / "test-post.html"
    html_file.write_text(WRONG_DOMAIN_HTML, encoding="utf-8")

    result = subprocess.run(
        [
            sys.executable,
            str(_SCRIPT_PATH),
            "--docs-dir",
            str(tmp_path / "docs"),
            "--dry-run",
        ],
        capture_output=True,
        text=True,
    )
    assert result.returncode == 1, (
        f"Expected exit code 1 (ERROR) but got {result.returncode}.\n"
        f"stdout: {result.stdout}\nstderr: {result.stderr}"
    )


@pytest.mark.io
def test_exit_code_0_on_clean_html(tmp_path):
    """Running qa_html.py against MINIMAL_VALID_HTML returns exit code 0 (no errors or warns)."""
    docs_dir = tmp_path / "docs"
    docs_dir.mkdir(parents=True)
    html_file = docs_dir / "index.html"
    html_file.write_text(MINIMAL_VALID_HTML, encoding="utf-8")

    result = subprocess.run(
        [
            sys.executable,
            str(_SCRIPT_PATH),
            "--docs-dir",
            str(docs_dir),
            "--dry-run",
        ],
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, (
        f"Expected exit code 0 (clean) but got {result.returncode}.\n"
        f"stdout: {result.stdout}\nstderr: {result.stderr}"
    )


# ---------------------------------------------------------------------------
# Text quality and readability checks (qual-*)
# ---------------------------------------------------------------------------


def test_strip_markdown_body_removes_frontmatter():
    """_strip_markdown_body strips the HTML comment front-matter block."""
    content = "<!--\ntitle: Test\ndescription: hello\n-->\n\nBody paragraph here."
    result = _strip_markdown_body(content)
    assert "title: Test" not in result
    assert "Body paragraph here." in result


def test_strip_markdown_body_removes_bold_keeps_text():
    """_strip_markdown_body removes **bold** markers but keeps the inner text."""
    content = "<!--\ntitle: T\n-->\n\n**Important word** in a sentence."
    result = _strip_markdown_body(content)
    assert "**" not in result
    assert "Important word" in result


def test_strip_markdown_body_removes_links_keeps_text():
    """_strip_markdown_body replaces [text](url) with just the link text."""
    content = "<!--\ntitle: T\n-->\n\nSee the [W3C docs](https://www.w3.org) for more."
    result = _strip_markdown_body(content)
    assert "https://www.w3.org" not in result
    assert "W3C docs" in result


def test_strip_markdown_body_removes_code_blocks():
    """_strip_markdown_body removes fenced code blocks entirely."""
    content = "<!--\ntitle: T\n-->\n\n```html\n<img alt=\"test\" />\n```\n\nProse here."
    result = _strip_markdown_body(content)
    assert "<img" not in result
    assert "Prose here." in result


def test_strip_markdown_body_heading_adds_period_boundary():
    """_strip_markdown_body adds a sentence-ending period after heading text.

    This prevents textstat from merging heading text with adjacent prose into an
    artificially long pseudo-sentence, which deflates Flesch Reading Ease scores.
    """
    content = "<!--\ntitle: T\n-->\n\n## **Section Title**\n\nBody text follows here."
    result = _strip_markdown_body(content)
    # Heading text gets a period so it becomes its own short sentence
    assert "Section Title." in result
    assert "Body text follows here." in result


def test_strip_markdown_body_bullet_adds_period_boundary():
    """_strip_markdown_body adds a period after each bullet item without terminal punctuation."""
    content = "<!--\ntitle: T\n-->\n\n- First item here\n- Second item here"
    result = _strip_markdown_body(content)
    assert "First item here." in result
    assert "Second item here." in result


def test_strip_markdown_body_bullet_keeps_existing_punctuation():
    """_strip_markdown_body does not add a period when the bullet already ends with one."""
    content = "<!--\ntitle: T\n-->\n\n- Already a sentence.\n- Ends with question?"
    result = _strip_markdown_body(content)
    # Should not create double punctuation
    assert "Already a sentence." in result
    assert ".." not in result


def test_find_duplicate_paragraphs_detects_repeats():
    """_find_duplicate_paragraphs returns a preview for each repeated paragraph."""
    repeated = "For more, see the W3C accessibility documentation on this topic."
    text = f"First section.\n\n{repeated}\n\nMiddle section.\n\n{repeated}"
    duplicates = _find_duplicate_paragraphs(text)
    assert len(duplicates) == 1
    assert "For more, see" in duplicates[0]


def test_find_duplicate_paragraphs_no_false_positive():
    """_find_duplicate_paragraphs returns empty list when all paragraphs are unique."""
    text = (
        "This is the first paragraph with enough content to be counted.\n\n"
        "This is a second paragraph that is completely different from the first.\n\n"
        "A third paragraph with yet more unique content and no repetition."
    )
    assert _find_duplicate_paragraphs(text) == []


def test_qual_001_thin_content(tmp_path):
    """qual-001 fires as WARN when body word count is below 200."""
    md = tmp_path / "thin.md"
    # Create an MD file with very thin body content (<200 words)
    md.write_text(
        "<!--\ntitle: T\nstatus: published\ndate: 2025-01-01\n-->\n\n"
        "Short body. Only a few words here. Not enough content.",
        encoding="utf-8",
    )
    results = check_md_readability(md, md.read_text())
    rule_ids = [r.rule_id for r in results]
    assert "qual-001" in rule_ids, "Expected qual-001 for thin content"
    qual001 = next(r for r in results if r.rule_id == "qual-001")
    assert qual001.severity == "WARN"


def test_qual_001_adequate_content_passes(tmp_path):
    """qual-001 does NOT fire when body word count is ≥ 200 words."""
    # Build a body with 220+ words
    long_sentence = (
        "This is a sentence with several words to help reach the minimum count. "
    )
    body = long_sentence * 30  # ~210 words
    md = tmp_path / "adequate.md"
    md.write_text(
        f"<!--\ntitle: T\nstatus: published\ndate: 2025-01-01\n-->\n\n{body}",
        encoding="utf-8",
    )
    results = check_md_readability(md, md.read_text())
    assert not any(r.rule_id == "qual-001" for r in results)


def test_qual_005_duplicate_paragraph(tmp_path):
    """qual-005 fires as WARN when the same paragraph appears twice in one file."""
    repeated = (
        "For more information, see the official W3C documentation on this topic."
    )
    md = tmp_path / "dup.md"
    md.write_text(
        "<!--\ntitle: T\nstatus: published\ndate: 2025-01-01\n-->\n\n"
        f"First section prose.\n\n{repeated}\n\n"
        f"Second section prose.\n\n{repeated}",
        encoding="utf-8",
    )
    results = check_md_readability(md, md.read_text())
    rule_ids = [r.rule_id for r in results]
    assert "qual-005" in rule_ids, "Expected qual-005 for duplicate paragraph"
    qual005 = next(r for r in results if r.rule_id == "qual-005")
    assert qual005.severity == "WARN"
    assert "For more information" in qual005.detail


@pytest.mark.io
def test_qual_readability_on_real_wcag_entry():
    """qual-003 fires on synthetic WCAG-style content that scores below 30 Flesch RE.

    All current WCAG source files now pass readability checks (score >= 30). This
    test uses a synthetic dense-jargon document to ensure the check_md_readability
    function still surfaces qual-003 when Flesch RE drops below the threshold.
    """
    # Dense technical prose with high syllable count and long sentences, mimicking
    # the worst-case pattern seen in early WCAG authentication conformance entries.
    dense_text = """<!--
title: Synthetic Dense Entry
description: Test fixture for qual-003 readability regression test.
keywords: test
image: test.png
imageAlt: test
status: published
date: 2025-01-01
-->

# **Synthetic Dense Guideline Entry**

**Estimated read time:** 5–6 minutes

The authentication specification requires implementation of conformance requirements utilizing
accessible authentication methodologies. Organizational requirements stipulate that
authentication infrastructure must accommodate individuals experiencing cognitive,
neurological, communicative, or environmental accessibility disabilities.

The technological implementation necessitates sophisticated interoperability between
authentication subsystems and accessibility-focused assistive technologies, ensuring
comprehensive utilization of accessibility-supported authentication alternatives.

Conformance requirements establish mandatory organizational authentication accessibility
standards encompassing authentication infrastructure, authentication methodologies, and
accessibility-supported authentication alternatives for all organizational authentication
infrastructure components.

## **Summary**

Implementation necessitates comprehensive authentication accessibility infrastructure
ensuring organizational conformance requirements and accessibility-supported authentication
alternatives for authentication infrastructure components.
"""
    from pathlib import Path
    import tempfile

    with tempfile.NamedTemporaryFile(suffix=".md", mode="w", delete=False, encoding="utf-8") as f:
        f.write(dense_text)
        tmp_path = Path(f.name)

    try:
        results = check_md_readability(tmp_path, dense_text)
        rule_ids = [r.rule_id for r in results]
        assert "qual-003" in rule_ids, (
            f"Expected qual-003 for dense synthetic content; got: {rule_ids}"
        )
    finally:
        tmp_path.unlink(missing_ok=True)


# ---------------------------------------------------------------------------
# TSX source readability — _extract_tsx_prose and check_tsx_readability
# ---------------------------------------------------------------------------


def test_extract_tsx_prose_named_prop(tmp_path):
    """_extract_tsx_prose extracts double-quoted named prose props."""
    tsx = tmp_path / "Example.tsx"
    tsx.write_text(
        'const Page = () => (\n'
        '  <ProductPage\n'
        '    whyItExists="This is a clear sentence. It explains the purpose simply."\n'
        '    howToUse="Get started in three steps. First, schedule a call. Then we scope the work."\n'
        '  />\n'
        ');\n'
    )
    prose = _extract_tsx_prose(tsx)
    assert "This is a clear sentence." in prose
    assert "Get started in three steps." in prose


def test_extract_tsx_prose_template_literal(tmp_path):
    """_extract_tsx_prose extracts export const template literals."""
    tsx = tmp_path / "Services.tsx"
    tsx.write_text(
        "export const INTRO = `We help teams build accessible systems.\n"
        "Our work is grounded in lived experience of disability.`;\n"
    )
    prose = _extract_tsx_prose(tsx)
    assert "We help teams build accessible systems." in prose


def test_extract_tsx_prose_included_array_single_quotes(tmp_path):
    """_extract_tsx_prose extracts single-quoted items from included/examples arrays."""
    tsx = tmp_path / "Page.tsx"
    tsx.write_text(
        "const Page = () => (\n"
        "  <ProductPage\n"
        "    included={[\n"
        "      'Manual screen reader testing with NVDA and VoiceOver on real devices',\n"
        "      'Automated accessibility scans using axe-core and WAVE tooling',\n"
        "    ]}\n"
        "  />\n"
        ");\n"
    )
    prose = _extract_tsx_prose(tsx)
    assert "Manual screen reader testing" in prose
    assert "Automated accessibility scans" in prose


def test_extract_tsx_prose_included_array_double_quotes(tmp_path):
    """_extract_tsx_prose extracts double-quoted items from included arrays."""
    tsx = tmp_path / "Page.tsx"
    tsx.write_text(
        'const Page = () => (\n'
        '  <ProductPage\n'
        '    included={[\n'
        '      "Plain-language executive summary for non-technical stakeholders and leadership",\n'
        '      "Remediation roadmap with priority rankings your developers can act on",\n'
        '    ]}\n'
        '  />\n'
        ');\n'
    )
    prose = _extract_tsx_prose(tsx)
    assert "Plain-language executive summary" in prose
    assert "Remediation roadmap" in prose


def test_extract_tsx_prose_skips_paths(tmp_path):
    """_extract_tsx_prose skips strings starting with / (path/URL-like)."""
    tsx = tmp_path / "Page.tsx"
    tsx.write_text(
        'const Page = () => (\n'
        '  <ProductPage\n'
        '    ctaHref="/contact?inquiry=consulting"\n'
        '    whyItExists="This is real content. It should be extracted."\n'
        '  />\n'
        ');\n'
    )
    prose = _extract_tsx_prose(tsx)
    assert "/contact?inquiry=consulting" not in prose
    assert "This is real content." in prose


def test_extract_tsx_prose_skips_jsx_interpolation(tmp_path):
    """_extract_tsx_prose skips strings containing { (JSX expression fragments)."""
    tsx = tmp_path / "Page.tsx"
    tsx.write_text(
        'const Page = () => (\n'
        '  <ProductPage\n'
        '    title={SOME_HEADER}\n'
        '    whyItExists="Plain prose without curly braces. Easy to read."\n'
        '  />\n'
        ');\n'
    )
    prose = _extract_tsx_prose(tsx)
    assert "SOME_HEADER" not in prose
    assert "Plain prose without curly braces." in prose


def test_check_tsx_readability_fires_qual003_on_dense_content(tmp_path):
    """check_tsx_readability raises qual-003 for very dense technical prose."""
    tsx = tmp_path / "Dense.tsx"
    # Dense compound-noun-heavy text guaranteed to score RE < 30 (> 100 words required
    # before RE/FK checks run — ensure text is clearly above that threshold).
    dense = (
        "Programmatic governance methodologies necessitate comprehensive authentication "
        "accessibility infrastructure requirements. Organizational implementation mandates "
        "systematic interoperability between authentication subsystems and assistive "
        "technologies, ensuring accessibility-supported authentication alternatives for "
        "all organizational infrastructure components and authentication methodologies. "
        "Conformance requirements establish mandatory accessibility standards encompassing "
        "authentication infrastructure, authentication methodologies, and accessibility "
        "alternatives for organizational authentication infrastructure. "
        "Implementation necessitates comprehensive authentication accessibility infrastructure "
        "ensuring organizational conformance requirements and accessibility-supported "
        "authentication alternatives for authentication infrastructure components. "
        "Programmatic governance methodologies necessitate comprehensive authentication "
        "accessibility infrastructure requirements for organizational implementation. "
        "Systematic authentication interoperability requirements necessitate comprehensive "
        "organizational accessibility infrastructure and conformance methodologies. "
        "Authentication infrastructure components mandate organizational accessibility "
        "conformance requirements for comprehensive implementation."
    )
    tsx.write_text(f'const D = () => <P whyItExists="{dense}" />;\n')
    results = check_tsx_readability(tsx)
    rule_ids = [r.rule_id for r in results]
    assert "qual-003" in rule_ids, f"Expected qual-003 for dense content; got: {rule_ids}"


def test_check_tsx_readability_passes_on_clean_prose(tmp_path):
    """check_tsx_readability returns no findings for clear, plain-language content."""
    tsx = tmp_path / "Clean.tsx"
    # Simple, readable prose well above 100 words with short sentences
    clean = (
        "We help teams build accessible software. "
        "Our work starts with a discovery call. "
        "Then we scope the engagement together. "
        "Every project ends with documentation your team can maintain. "
        "We test with real screen readers on real devices. "
        "We use NVDA on Windows and VoiceOver on macOS. "
        "Our reports are written for the developers who will act on them. "
        "We keep things simple and direct. "
        "Accessibility should not be hard to understand. "
        "It should be part of how you build from the start. "
        "We make that possible for teams of all sizes. "
        "Reach out to start a conversation. "
        "No jargon, no gatekeeping, just clear practical help. "
    )
    tsx.write_text(f'const C = () => <P whyItExists="{clean}" />;\n')
    results = check_tsx_readability(tsx)
    assert results == [], f"Expected no findings for clean prose; got: {results}"


def test_check_tsx_readability_skips_thin_content(tmp_path):
    """check_tsx_readability returns no findings when no prose strings can be extracted."""
    tsx = tmp_path / "Thin.tsx"
    # "Too short." is only 2 words — below _TSX_MIN_STRING_WORDS — so nothing is extracted.
    tsx.write_text('const T = () => <P whyItExists="Too short." />;\n')
    results = check_tsx_readability(tsx)
    assert results == [], f"Expected no findings for unextractable content; got: {results}"


def test_check_tsx_readability_on_real_service_page():
    """Smoke test: a real cleaned service page TSX file passes all readability checks."""
    from pathlib import Path

    tsx_path = Path("src/pages/Services/consulting/ASaaPsPage.tsx")
    if not tsx_path.exists():
        import pytest

        pytest.skip("ASaaPsPage.tsx not found — skipping real-file smoke test")

    results = check_tsx_readability(tsx_path)
    rule_ids = [r.rule_id for r in results]
    assert rule_ids == [], (
        f"ASaaPsPage.tsx should pass all readability checks after cleanup; got: {rule_ids}"
    )
