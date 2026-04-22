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
    check_html_by_type,
    check_html_universal,
    check_md_source,
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
def test_accessitech_org_canonical_flagged_as_error():
    """Real blog HTML files with accessitech.org canonical href produce a canon-002 ERROR.

    This test asserts the *known live bug* described in testing/qa-page-specs.md
    is caught: several docs/blog/*.html pages have canonical href pointing to
    https://accessitech.org/ (not owned) instead of https://accessi.tech/.
    """
    html_files = list(_BLOG_DIR.glob("*.html"))
    assert html_files, f"No blog HTML files found in {_BLOG_DIR}"

    found_bug = False
    for html_path in html_files:
        content = html_path.read_text(encoding="utf-8", errors="replace")
        soup = BeautifulSoup(content, "lxml")
        results = check_html_universal(soup, html_path)
        if any(r.rule_id == "canon-002" and r.severity == "ERROR" for r in results):
            found_bug = True
            break

    assert found_bug, (
        "Expected at least one docs/blog/*.html file to produce a canon-002 ERROR "
        "(accessitech.org canonical domain bug) — none found. "
        "The bug may have been fixed in the source; update this test accordingly."
    )


@pytest.mark.io
def test_accessitech_org_og_url_flagged_as_error():
    """Real blog HTML files with accessitech.org og:url produce an og-004 ERROR.

    This test asserts the *known live bug* described in testing/qa-page-specs.md
    is caught: several docs/blog/*.html pages have og:url pointing to
    https://accessitech.org/ (not owned) instead of https://accessi.tech/.
    """
    html_files = list(_BLOG_DIR.glob("*.html"))
    assert html_files, f"No blog HTML files found in {_BLOG_DIR}"

    found_bug = False
    for html_path in html_files:
        content = html_path.read_text(encoding="utf-8", errors="replace")
        soup = BeautifulSoup(content, "lxml")
        results = check_html_universal(soup, html_path)
        if any(r.rule_id == "og-004" and r.severity == "ERROR" for r in results):
            found_bug = True
            break

    assert found_bug, (
        "Expected at least one docs/blog/*.html file to produce an og-004 ERROR "
        "(accessitech.org og:url domain bug) — none found. "
        "The bug may have been fixed in the source; update this test accordingly."
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
