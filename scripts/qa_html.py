"""
qa_html.py — AccessiTech SSG HTML Quality Assurance Runner

Validates all statically-generated HTML pages in docs/ against structural,
SEO, and canonical domain requirements. Optionally validates Markdown source
files (--check-sources) and cross-references source vs compiled output.

Spec: testing/qa-page-specs.md (authoritative source of truth for all check IDs,
selectors, severities, and page type heuristics).

Usage:
  python scripts/qa_html.py                             # Layer 2: HTML checks only
  python scripts/qa_html.py --check-sources             # Layer 1+2+3: + MD source + cross-ref
  python scripts/qa_html.py --check-sources --annotate  # Layer 1+2+3: + write QA status back to MD files
  python scripts/qa_html.py --dry-run                   # Print results, no file writes
  python scripts/qa_html.py --output-format sarif       # SARIF v2.1.0 output

Output:
  qa-reports/results.jsonl    One record per file×check
  qa-reports/summary.csv      One row per file, aggregated counts
  (--output-format sarif: qa-reports/results.sarif)

Exit codes:
  0  All checks pass (or INFO only)
  1  One or more ERROR findings
  2  One or more WARN findings, zero ERRORs

In scope: structural, SEO, canonical domain, content consistency.
Out of scope: a11y (Pa11y CI handles that).
"""

import argparse
import csv
import json
import re
import sys
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from bs4 import BeautifulSoup

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

CORRECT_DOMAIN_PREFIX = "https://accessi.tech/"
WRONG_DOMAIN = "accessitech.org"
VALID_STATUSES = {"published", "draft", "unpublished"}
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")


# ---------------------------------------------------------------------------
# CheckResult dataclass
# ---------------------------------------------------------------------------


@dataclass
class CheckResult:
    """A single QA finding for one rule on one file.

    Fields:
        filename:   File path (relative to repo root where possible).
        rule_id:    Check ID from the spec (e.g. "og-004", "canon-002").
        severity:   "ERROR", "WARN", or "INFO".
        message:    Short human-readable summary of the finding.
        detail:     Extended context (values found, expected values, etc.).
        checked_at: ISO 8601 UTC timestamp of when the check ran.
    """

    filename: str
    rule_id: str
    severity: str
    message: str
    detail: str
    checked_at: str


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def _result(
    filename: str,
    rule_id: str,
    severity: str,
    message: str,
    detail: str = "",
) -> CheckResult:
    return CheckResult(
        filename=str(filename),
        rule_id=rule_id,
        severity=severity,
        message=message,
        detail=detail,
        checked_at=_now(),
    )


# ---------------------------------------------------------------------------
# Page type detection
# ---------------------------------------------------------------------------


def detect_page_type(path: Path) -> str:
    """Determine the page type from the file path.

    Uses the heuristic from testing/qa-page-specs.md § Page Type → File Path Mapping.
    The path should be relative to the repository root (e.g. Path("docs/index.html")).
    Absolute paths are compared against their as_posix() representation; callers
    running from the repo root will naturally produce matching strings.

    Returns one of:
        home, blog-index, wcag-index, blog-entry, services-index,
        services-category, service-detail, products-index, product-detail,
        contact, disclosures-index, disclosure-detail, 404, unknown
    """
    p = path.as_posix()

    if p == "docs/index.html":
        return "home"
    if p == "docs/blog.html":
        return "blog-index"
    if p == "docs/wcag.html":
        return "wcag-index"
    if p.startswith("docs/blog/"):
        return "blog-entry"
    if p == "docs/services.html":
        return "services-index"
    if p in ("docs/services/consulting.html", "docs/services/mentorship.html"):
        return "services-category"
    if p.startswith("docs/services/"):
        return "service-detail"
    if p == "docs/products.html":
        return "products-index"
    if p.startswith("docs/products/"):
        return "product-detail"
    if p == "docs/contact.html":
        return "contact"
    if p == "docs/disclosures.html":
        return "disclosures-index"
    if p.startswith("docs/disclosures/"):
        return "disclosure-detail"
    if p == "docs/404.html":
        return "404"
    return "unknown"


# ---------------------------------------------------------------------------
# Universal checks (Layer 2 — all pages)
# ---------------------------------------------------------------------------


def check_html_universal(soup: BeautifulSoup, filepath: Path) -> list:
    """Run universal checks on an HTML page.

    Covers: struct-*, meta-*, og-*, tw-*, canon-*, a11y-*, render-*, footer-*
    These checks apply to every HTML file in docs/, regardless of page type.

    Spec: testing/qa-page-specs.md § Universal Checks

    Args:
        soup:     Parsed BeautifulSoup tree of the HTML file.
        filepath: Path to the HTML file (used for result.filename only).

    Returns:
        List of CheckResult objects for any failing checks.
    """
    results = []
    fname = str(filepath)

    # -------------------------------------------------------------------------
    # Document Structure
    # -------------------------------------------------------------------------

    # struct-001: html[lang="en"] exists
    html_tag = soup.find("html")
    lang = html_tag.get("lang", "").lower() if html_tag else ""
    if lang != "en":
        results.append(
            _result(
                fname,
                "struct-001",
                "ERROR",
                "Missing or wrong lang attribute on <html>",
                f'Expected lang="en", got: {html_tag.get("lang") if html_tag else "no <html> tag"}',
            )
        )

    # struct-002: head > meta[charset="utf-8"] exists
    # TODO: implement struct-002

    # struct-003: title element exists and is non-empty
    title_tag = soup.find("title")
    if not title_tag or not title_tag.get_text(strip=True):
        results.append(
            _result(
                fname,
                "struct-003",
                "ERROR",
                "Missing or empty <title> element",
                "Every page must have a non-empty <title>",
            )
        )

    # struct-004: title length <= 70 chars
    # TODO: implement struct-004

    # struct-005: link[rel="manifest"] with href="/manifest.json" exists
    # TODO: implement struct-005

    # -------------------------------------------------------------------------
    # Meta Description
    # -------------------------------------------------------------------------

    # meta-001: meta[name="description"] exists
    # TODO: implement meta-001

    # meta-002: description length >= 50 chars
    # TODO: implement meta-002

    # meta-003: description length <= 160 chars
    desc_tag = soup.find("meta", attrs={"name": "description"})
    if desc_tag:
        desc_content = desc_tag.get("content", "")
        if len(desc_content) > 160:
            results.append(
                _result(
                    fname,
                    "meta-003",
                    "WARN",
                    "Meta description exceeds 160 characters",
                    f"Length: {len(desc_content)} chars — will be truncated in SERPs",
                )
            )

    # -------------------------------------------------------------------------
    # Open Graph
    # -------------------------------------------------------------------------

    # og-001: og:title exists and non-empty
    # TODO: implement og-001

    # og-002: og:description exists and non-empty
    # TODO: implement og-002

    # og-003: og:url exists and non-empty — prerequisite for og-004
    og_url_tag = soup.find("meta", attrs={"property": "og:url"})
    if not og_url_tag or not og_url_tag.get("content", "").strip():
        results.append(
            _result(
                fname,
                "og-003",
                "ERROR",
                "Missing or empty og:url meta tag",
                "Every page must declare og:url",
            )
        )
    else:
        # og-004: og:url must NOT use accessitech.org (wrong domain, not owned)
        og_url = og_url_tag.get("content", "")
        if WRONG_DOMAIN in og_url:
            results.append(
                _result(
                    fname,
                    "og-004",
                    "ERROR",
                    f"og:url uses wrong domain '{WRONG_DOMAIN}' (not owned by AccessiTech)",
                    f'og:url="{og_url}" — must start with "{CORRECT_DOMAIN_PREFIX}"',
                )
            )

    # og-005: og:image exists and non-empty
    # TODO: implement og-005

    # -------------------------------------------------------------------------
    # Twitter / X Card
    # -------------------------------------------------------------------------

    # tw-001: twitter:title exists and non-empty
    # TODO: implement tw-001

    # tw-002: twitter:creator exists and non-empty
    # TODO: implement tw-002

    # tw-003: twitter:card exists and non-empty
    # TODO: implement tw-003

    # -------------------------------------------------------------------------
    # Canonical URL
    # -------------------------------------------------------------------------

    # canon-001: link[rel="canonical"] exists — prerequisite for canon-002
    canonical_tag = soup.find("link", attrs={"rel": "canonical"})
    if not canonical_tag:
        results.append(
            _result(
                fname,
                "canon-001",
                "ERROR",
                'Missing link[rel="canonical"]',
                "Every page must declare a canonical URL",
            )
        )
    else:
        # canon-002: canonical href must NOT use accessitech.org (wrong domain, not owned)
        canonical_href = canonical_tag.get("href", "")
        if WRONG_DOMAIN in canonical_href:
            results.append(
                _result(
                    fname,
                    "canon-002",
                    "ERROR",
                    f"Canonical href uses wrong domain '{WRONG_DOMAIN}' (not owned by AccessiTech)",
                    f'canonical href="{canonical_href}" — must start with "{CORRECT_DOMAIN_PREFIX}"',
                )
            )

    # -------------------------------------------------------------------------
    # Accessibility Landmarks
    # -------------------------------------------------------------------------

    # a11y-001: a.skip-link[href="#main"] exists
    candidates = soup.find_all("a", href="#main")
    skip_link = next(
        (a for a in candidates if "skip-link" in a.get("class", [])), None
    )
    if not skip_link:
        results.append(
            _result(
                fname,
                "a11y-001",
                "ERROR",
                'Missing skip link: <a class="skip-link" href="#main">',
                "A skip link is required for keyboard accessibility",
            )
        )

    # a11y-002: header[aria-label="Header"] exists
    # TODO: implement a11y-002

    # a11y-003: nav[aria-label="Main navigation"] exists inside header
    # TODO: implement a11y-003

    # a11y-004: nav main navigation has exactly 5 top-level li items
    # TODO: implement a11y-004

    # a11y-005: main#main with non-empty aria-label exists
    main_tag = soup.find("main", id="main")
    if not main_tag:
        results.append(
            _result(
                fname,
                "a11y-005",
                "ERROR",
                'Missing <main id="main"> element',
                'Every page must have a <main> with id="main"',
            )
        )
    else:
        aria_label = main_tag.get("aria-label", "").strip()
        if not aria_label:
            results.append(
                _result(
                    fname,
                    "a11y-005",
                    "ERROR",
                    '<main id="main"> is missing aria-label attribute',
                    "The main landmark must have a descriptive aria-label",
                )
            )

    # a11y-006: footer[aria-label="Footer"] exists
    # TODO: implement a11y-006

    # -------------------------------------------------------------------------
    # Render State
    # -------------------------------------------------------------------------

    # render-001: text "Loading..." must NOT appear inside #root
    root_div = soup.find(id="root")
    if root_div and "Loading..." in root_div.get_text():
        results.append(
            _result(
                fname,
                "render-001",
                "ERROR",
                'Loading placeholder text found in #root',
                '"Loading..." indicates a page that was not fully hydrated before static export',
            )
        )

    # -------------------------------------------------------------------------
    # Footer Content
    # -------------------------------------------------------------------------

    # footer-001: footer contains copyright text "AccessiTech LLC"
    # TODO: implement footer-001

    # footer-002: footer has 3 column sections
    # TODO: implement footer-002

    return results


# ---------------------------------------------------------------------------
# Per-type check functions
# ---------------------------------------------------------------------------


def _check_home(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `home` page type. Spec: testing/qa-page-specs.md § home."""
    results = []
    # home-001: main[aria-label="About AccessiTech"]
    # TODO: implement home-001
    # home-002: CTA section present
    # TODO: implement home-002
    # home-003: services overview section present
    # TODO: implement home-003
    # home-004: Calendly link href present in CTA
    # TODO: implement home-004
    return results


def _check_blog_index(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `blog-index` page type. Spec: testing/qa-page-specs.md § blog-index."""
    results = []
    # blog-idx-001: main[aria-label="Blog"]
    # TODO: implement blog-idx-001
    # blog-idx-002: breadcrumb nav present
    # TODO: implement blog-idx-002
    # blog-idx-003: at least 1 article.blog-entry present
    # TODO: implement blog-idx-003
    # blog-idx-004: entry links start with /blog/
    # TODO: implement blog-idx-004
    # blog-idx-005: each entry has a date span
    # TODO: implement blog-idx-005
    return results


def _check_wcag_index(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `wcag-index` page type. Spec: testing/qa-page-specs.md § wcag-index."""
    results = []
    # wcag-001: breadcrumb nav with Home > Resources present
    # TODO: implement wcag-001
    # wcag-002: canonical href equals https://accessi.tech/wcag
    # TODO: implement wcag-002
    return results


def _check_blog_entry(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `blog-entry` page type. Spec: testing/qa-page-specs.md § blog-entry.

    Note: blog-007 (canonical domain) is an alias for the universal canon-002 check and
    is intentionally not duplicated here — it fires automatically via check_html_universal.
    """
    results = []
    # blog-001: main[aria-label="Blog Entry"]
    # TODO: implement blog-001
    # blog-002: breadcrumb nav present
    # TODO: implement blog-002
    # blog-003: breadcrumb has exactly 3 items
    # TODO: implement blog-003
    # blog-004: og:type=article present
    # TODO: implement blog-004
    # blog-005: h1 element present
    # TODO: implement blog-005
    # blog-006: post date span present inside content
    # TODO: implement blog-006
    return results


def _check_services_index(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `services-index` page type. Spec: testing/qa-page-specs.md § services-index."""
    results = []
    # svc-idx-001: main aria-label contains "Services"
    # TODO: implement svc-idx-001
    # svc-idx-002: at least 2 service category sections present
    # TODO: implement svc-idx-002
    return results


def _check_services_category(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `services-category` page type."""
    results = []
    # svc-cat-001: breadcrumb nav present
    # TODO: implement svc-cat-001
    # svc-cat-002: at least 1 service sub-section linked
    # TODO: implement svc-cat-002
    # svc-cat-003: CTA link/button with href containing /contact present
    # TODO: implement svc-cat-003
    return results


def _check_service_detail(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `service-detail` page type."""
    results = []
    # svc-det-001: breadcrumb nav present
    # TODO: implement svc-det-001
    # svc-det-002: breadcrumb has exactly 3 items
    # TODO: implement svc-det-002
    # svc-det-003: h2 with service name text present
    # TODO: implement svc-det-003
    # svc-det-004: main[aria-label] matches primary h2 text
    # TODO: implement svc-det-004
    # svc-det-005: CTA link/button with /contact in href present
    # TODO: implement svc-det-005
    # svc-det-006: CTA does NOT link to external Calendly URL
    # TODO: implement svc-det-006
    return results


def _check_products_index(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `products-index` page type."""
    results = []
    # prod-idx-001: main aria-label contains "Products"
    # TODO: implement prod-idx-001
    # prod-idx-002: at least 3 product cards present
    # TODO: implement prod-idx-002
    return results


def _check_product_detail(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `product-detail` page type."""
    results = []
    # prod-det-001: breadcrumb nav present
    # TODO: implement prod-det-001
    # prod-det-002: h2 with product name present
    # TODO: implement prod-det-002
    # prod-det-003: main[aria-label] matches primary h2 text
    # TODO: implement prod-det-003
    # prod-det-004: CTA link/button with /contact in href present
    # TODO: implement prod-det-004
    return results


def _check_contact(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `contact` page type."""
    results = []
    # contact-001: main aria-label contains "Contact"
    # TODO: implement contact-001
    # contact-002: contact form or Calendly embed present
    # TODO: implement contact-002
    # contact-003: canonical href equals https://accessi.tech/contact
    # TODO: implement contact-003
    return results


def _check_disclosures_index(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `disclosures-index` page type."""
    results = []
    # disc-idx-001: main aria-label contains "Disclosures"
    # TODO: implement disc-idx-001
    # disc-idx-002: at least 6 disclosure links present
    # TODO: implement disc-idx-002
    return results


def _check_disclosure_detail(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `disclosure-detail` page type."""
    results = []
    # disc-det-001: breadcrumb nav present
    # TODO: implement disc-det-001
    # disc-det-002: h2 with disclosure title present
    # TODO: implement disc-det-002
    # disc-det-003: main[aria-label] matches primary h2 text
    # TODO: implement disc-det-003
    return results


def _check_404(soup: BeautifulSoup, filepath: Path) -> list:
    """Checks for the `404` page type.

    Note: 404-003 (canonical/og:url domain check) is covered by the universal
    canon-002 and og-004 checks — not duplicated here.
    """
    results = []
    # 404-001: main aria-label contains "404" or "Not Found"
    # TODO: implement 404-001
    # 404-002: home link present in main content
    # TODO: implement 404-002
    return results


_PAGE_TYPE_CHECKERS = {
    "home": _check_home,
    "blog-index": _check_blog_index,
    "wcag-index": _check_wcag_index,
    "blog-entry": _check_blog_entry,
    "services-index": _check_services_index,
    "services-category": _check_services_category,
    "service-detail": _check_service_detail,
    "products-index": _check_products_index,
    "product-detail": _check_product_detail,
    "contact": _check_contact,
    "disclosures-index": _check_disclosures_index,
    "disclosure-detail": _check_disclosure_detail,
    "404": _check_404,
}


def check_html_by_type(
    soup: BeautifulSoup, filepath: Path, page_type: str
) -> list:
    """Dispatch to the per-type check function for the given page type.

    Args:
        soup:      Parsed BeautifulSoup tree.
        filepath:  Path to the HTML file (for result.filename).
        page_type: String page type returned by detect_page_type().

    Returns:
        List of CheckResult objects, or [] if page_type is unknown.
    """
    checker = _PAGE_TYPE_CHECKERS.get(page_type)
    if checker is None:
        return []
    return checker(soup, filepath)


# ---------------------------------------------------------------------------
# MD source front-matter parser
# ---------------------------------------------------------------------------


def _parse_html_comment_frontmatter(content: str) -> Optional[dict]:
    """Parse the HTML comment front-matter block used by AccessiTech MD files.

    Expected format (single block, key: value per line):

        <!--
        title: Post Title
        description: Description text
        date: YYYY-MM-DD
        status: published
        -->

    See testing/qa-page-specs.md § MD Front-Matter Field Inventory for the
    full field list. This format is pre-migration; YAML front-matter will be
    adopted in a future refactor (see spec § Front-Matter Standardization Note).

    Returns:
        dict of key→value, or None if no front-matter comment block is found.
    """
    match = re.search(r"<!--(.*?)-->", content, re.DOTALL)
    if not match:
        return None
    block = match.group(1)
    data: dict = {}
    for line in block.splitlines():
        line = line.strip()
        if not line:
            continue
        # Use partition on ': ' so values containing ':' are preserved intact
        if ": " in line:
            key, _, value = line.partition(": ")
            data[key.strip()] = value.strip()
        elif ":" in line:
            key, _, value = line.partition(":")
            data[key.strip()] = value.strip()
    return data


# ---------------------------------------------------------------------------
# Layer 1 — MD source checks
# ---------------------------------------------------------------------------


def check_md_source(md_path: Path) -> tuple:
    """Layer 1: Validate a Markdown source file in public/data/blog/.

    Parses the HTML comment front-matter and runs src-001 through src-012.

    Spec: testing/qa-page-specs.md § Layer 1 — MD Source Checks

    Args:
        md_path: Path to a .md file in public/data/blog/.

    Returns:
        Tuple of (list[CheckResult], dict) where the dict is the parsed
        front-matter (needed by check_xref for Layer 3 cross-references).
    """
    results = []
    fname = str(md_path)

    content = md_path.read_text(encoding="utf-8")
    md_data = _parse_html_comment_frontmatter(content) or {}

    # src-001: title field present and non-empty
    title = md_data.get("title", "").strip()
    if not title:
        results.append(
            _result(
                fname,
                "src-001",
                "ERROR",
                "MD front-matter missing required 'title' field",
                "title is required for og:title and <title> generation",
            )
        )

    # src-002: description field present and non-empty
    # TODO: implement src-002

    # src-003: date field present and matches YYYY-MM-DD format
    date_val = md_data.get("date", "").strip()
    if not date_val:
        results.append(
            _result(
                fname,
                "src-003",
                "ERROR",
                "MD front-matter missing required 'date' field",
                "date is required; expected format: YYYY-MM-DD",
            )
        )
    elif not DATE_RE.match(date_val):
        results.append(
            _result(
                fname,
                "src-003",
                "ERROR",
                f"MD 'date' field has invalid format: {date_val!r}",
                "Expected format: YYYY-MM-DD (e.g. 2025-04-08)",
            )
        )

    # src-004: image field present and non-empty
    # TODO: implement src-004

    # src-005: imageAlt field present and non-empty
    # TODO: implement src-005

    # src-006: status is one of: published, draft, unpublished
    status = md_data.get("status", "").strip()
    if not status:
        results.append(
            _result(
                fname,
                "src-006",
                "ERROR",
                "MD front-matter missing required 'status' field",
                f"status must be one of: {sorted(VALID_STATUSES)}",
            )
        )
    elif status not in VALID_STATUSES:
        results.append(
            _result(
                fname,
                "src-006",
                "ERROR",
                f"MD 'status' field has invalid value: {status!r}",
                f"status must be one of: {sorted(VALID_STATUSES)}",
            )
        )

    # src-007: title length <= 70 chars
    # TODO: implement src-007

    # src-008: description length 50–160 chars
    # TODO: implement src-008

    # src-009: keywords field present
    # TODO: implement src-009

    # src-010: front-matter uses HTML comment block format (pre-migration signal)
    # TODO: implement src-010

    # src-011: next field href (if present) starts with /blog/
    # TODO: implement src-011

    # src-012: previous field href (if present) starts with /blog/
    # TODO: implement src-012

    return results, md_data


# ---------------------------------------------------------------------------
# Layer 3 — Cross-reference checks (MD source vs HTML output)
# ---------------------------------------------------------------------------


def check_xref(
    md_path: Path,
    html_path: Path,
    md_data: dict,
    soup: BeautifulSoup,
) -> list:
    """Layer 3: Cross-reference MD source values against compiled HTML output.

    Applies only to blog-entry pages where a matching MD source file exists.
    Slug mapping: public/data/blog/<Slug>.md ↔ docs/blog/<Slug>.html

    Spec: testing/qa-page-specs.md § Layer 3 — Cross-Reference Checks

    Args:
        md_path:   Path to the .md source file.
        html_path: Path to the compiled .html output file.
        md_data:   Parsed front-matter dict from check_md_source().
        soup:      Parsed BeautifulSoup tree of the HTML output.

    Returns:
        List of CheckResult objects for any cross-reference failures.
    """
    results = []
    fname = str(html_path)

    # xref-001: HTML <title> text matches MD title field (normalize whitespace)
    md_title = " ".join(md_data.get("title", "").split())
    html_title_tag = soup.find("title")
    html_title = (
        " ".join(html_title_tag.get_text().split()) if html_title_tag else ""
    )
    if md_title and html_title and md_title != html_title:
        results.append(
            _result(
                fname,
                "xref-001",
                "ERROR",
                "HTML <title> does not match MD title field",
                f'MD title: "{md_title}" | HTML title: "{html_title}"',
            )
        )
    elif md_title and not html_title:
        results.append(
            _result(
                fname,
                "xref-001",
                "ERROR",
                "HTML <title> is empty; cannot cross-reference with MD title",
                "",
            )
        )

    # xref-002: HTML og:description matches MD description field
    # TODO: implement xref-002

    # xref-003: HTML og:image URL contains MD image filename
    # TODO: implement xref-003

    # xref-004: HTML canonical href uses https://accessi.tech/ (not accessitech.org)
    canonical_tag = soup.find("link", attrs={"rel": "canonical"})
    if canonical_tag:
        href = canonical_tag.get("href", "")
        if WRONG_DOMAIN in href:
            results.append(
                _result(
                    fname,
                    "xref-004",
                    "ERROR",
                    f"Canonical href uses wrong domain '{WRONG_DOMAIN}' (not owned by AccessiTech)",
                    f'canonical href="{href}" — must start with "{CORRECT_DOMAIN_PREFIX}"',
                )
            )

    # xref-005: HTML og:url uses https://accessi.tech/ (not accessitech.org)
    og_url_tag = soup.find("meta", attrs={"property": "og:url"})
    if og_url_tag:
        og_url = og_url_tag.get("content", "")
        if WRONG_DOMAIN in og_url:
            results.append(
                _result(
                    fname,
                    "xref-005",
                    "ERROR",
                    f"og:url uses wrong domain '{WRONG_DOMAIN}' (not owned by AccessiTech)",
                    f'og:url="{og_url}" — must start with "{CORRECT_DOMAIN_PREFIX}"',
                )
            )

    # xref-006: MD status is 'published' for every file that has HTML output
    # TODO: implement xref-006

    return results


# ---------------------------------------------------------------------------
# QA annotation writeback
# ---------------------------------------------------------------------------


def annotate_md_source(md_path: Path, results: list) -> None:
    """Write QA status back to a Markdown source file as an HTML comment block.

    Appends or replaces a <!-- qa_status: ... --> comment block in the MD file.
    Does not modify existing front-matter keys. Only call this function when
    args.annotate and args.check_sources are both True.

    Strategy:
        - If a <!-- qa_status: block already exists, REPLACE it.
        - Otherwise APPEND after the closing --> of the existing front-matter
          block (before the first blank line / heading).

    Args:
        md_path: Path to the .md file to annotate.
        results: List of CheckResult objects from Layer 1 checks on this file.
    """
    qa_status = "PASS" if not any(r.severity == "ERROR" for r in results) else "FAIL"
    qa_issues = [r.rule_id for r in results if r.severity == "ERROR"]
    qa_checked_at = datetime.now(timezone.utc).date().isoformat()

    issues_str = ", ".join(qa_issues) if qa_issues else ""
    new_block = (
        f"<!-- qa_status: {qa_status}\n"
        f"qa_issues: {issues_str}\n"
        f"qa_checked_at: {qa_checked_at} -->"
    )

    content = md_path.read_text(encoding="utf-8")

    # Replace existing qa_status block if present
    existing_qa = re.search(r"<!-- qa_status:.*?-->", content, re.DOTALL)
    if existing_qa:
        content = content[: existing_qa.start()] + new_block + content[existing_qa.end() :]
    else:
        # Append after the closing --> of the existing front-matter block
        fm_end = re.search(r"-->", content)
        if fm_end:
            insert_pos = fm_end.end()
            content = content[:insert_pos] + "\n" + new_block + content[insert_pos:]
        else:
            # No front-matter found; append at end of file
            content = content.rstrip("\n") + "\n" + new_block + "\n"

    md_path.write_text(content, encoding="utf-8")


# ---------------------------------------------------------------------------
# Output emitters
# ---------------------------------------------------------------------------


def _emit_jsonl(results: list, output_path: Path) -> None:
    """Write results to JSONL format — one JSON object per line."""
    with output_path.open("w", encoding="utf-8") as f:
        for r in results:
            f.write(json.dumps(asdict(r)) + "\n")


def _emit_csv(results: list, output_path: Path) -> None:
    """Write a summary CSV with one row per file and aggregated severity counts."""
    by_file: dict = {}
    for r in results:
        if r.filename not in by_file:
            by_file[r.filename] = {
                "filename": r.filename,
                "ERROR": 0,
                "WARN": 0,
                "INFO": 0,
                "total": 0,
            }
        row = by_file[r.filename]
        row[r.severity] = row.get(r.severity, 0) + 1
        row["total"] += 1

    with output_path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(
            f, fieldnames=["filename", "ERROR", "WARN", "INFO", "total"]
        )
        writer.writeheader()
        for row in sorted(by_file.values(), key=lambda x: x["filename"]):
            writer.writerow(row)


def _emit_sarif(results: list, output_path: Path) -> None:
    """Write results in SARIF v2.1.0 format.

    Severity mapping: ERROR→"error", WARN→"warning", INFO→"note"
    """
    _severity_map = {"ERROR": "error", "WARN": "warning", "INFO": "note"}
    sarif_results = []
    for r in results:
        sarif_results.append(
            {
                "ruleId": r.rule_id,
                "level": _severity_map.get(r.severity, "note"),
                "message": {"text": r.message},
                "locations": [
                    {
                        "physicalLocation": {
                            "artifactLocation": {"uri": r.filename},
                            "region": {"startLine": 1},
                        }
                    }
                ],
            }
        )

    sarif = {
        "version": "2.1.0",
        "$schema": (
            "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master"
            "/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json"
        ),
        "runs": [
            {
                "tool": {"driver": {"name": "qa_html", "version": "1.0.0"}},
                "results": sarif_results,
            }
        ],
    }
    with output_path.open("w", encoding="utf-8") as f:
        json.dump(sarif, f, indent=2)


# ---------------------------------------------------------------------------
# Main runner
# ---------------------------------------------------------------------------


def main() -> int:
    """Entry point for the QA runner.

    Returns an integer exit code:
        0 — all checks pass (or INFO only)
        1 — one or more ERROR findings
        2 — one or more WARN findings, zero ERRORs
    """
    parser = argparse.ArgumentParser(
        description="AccessiTech SSG HTML Quality Assurance Runner",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument(
        "--check-sources",
        action="store_true",
        help="Also run Layer 1 (MD source checks) and Layer 3 (cross-reference checks)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print results to stdout without writing output files",
    )
    parser.add_argument(
        "--output-format",
        choices=["jsonl", "sarif"],
        default="jsonl",
        help="Output format for the results file (default: jsonl)",
    )
    parser.add_argument(
        "--docs-dir",
        default="docs",
        help="Path to the docs directory to scan (default: docs/)",
    )
    parser.add_argument(
        "--sources-dir",
        default="public/data/blog",
        help="Path to the MD sources directory (default: public/data/blog/)",
    )
    parser.add_argument(
        "--annotate",
        action="store_true",
        help=(
            "Write QA status back to source MD files as a new HTML comment block. "
            "Does not modify existing front-matter keys. Gated behind --check-sources."
        ),
    )
    args = parser.parse_args()

    if args.annotate and not args.check_sources:
        print(
            "WARNING: --annotate has no effect without --check-sources; annotation skipped.",
            file=sys.stderr,
        )

    docs_dir = Path(args.docs_dir)
    sources_dir = Path(args.sources_dir)
    all_results: list = []

    # --- Layer 2: HTML checks ---
    html_files = sorted(docs_dir.rglob("*.html"))
    for html_path in html_files:
        content = html_path.read_text(encoding="utf-8", errors="replace")
        soup = BeautifulSoup(content, "lxml")
        page_type = detect_page_type(html_path)

        all_results.extend(check_html_universal(soup, html_path))
        all_results.extend(check_html_by_type(soup, html_path, page_type))

    # --- Layer 1 + Layer 3: MD source and cross-reference checks ---
    if args.check_sources and sources_dir.exists():
        for md_path in sorted(sources_dir.glob("*.md")):
            src_results, md_data = check_md_source(md_path)
            all_results.extend(src_results)

            # Annotate MD source with QA status writeback (--annotate)
            if args.annotate:
                if args.dry_run:
                    print(f"DRY RUN — would annotate: {md_path}")
                else:
                    annotate_md_source(md_path, src_results)

            # Layer 3: cross-reference if corresponding HTML file exists
            html_counterpart = docs_dir / "blog" / (md_path.stem + ".html")
            if html_counterpart.exists():
                xref_content = html_counterpart.read_text(
                    encoding="utf-8", errors="replace"
                )
                xref_soup = BeautifulSoup(xref_content, "lxml")
                all_results.extend(
                    check_xref(md_path, html_counterpart, md_data, xref_soup)
                )

    # --- Aggregate counts ---
    error_count = sum(1 for r in all_results if r.severity == "ERROR")
    warn_count = sum(1 for r in all_results if r.severity == "WARN")
    info_count = sum(1 for r in all_results if r.severity == "INFO")
    total = len(all_results)

    # --- Print summary table ---
    print(f"\n{'=' * 60}")
    print("  QA Results — AccessiTech SSG")
    print(f"{'=' * 60}")
    print(f"  Files scanned : {len(html_files)}")
    print(f"  Total findings: {total}")
    print(f"  ERROR         : {error_count}")
    print(f"  WARN          : {warn_count}")
    print(f"  INFO          : {info_count}")
    print(f"{'=' * 60}")

    # --- Write output files (unless --dry-run) ---
    if not args.dry_run and all_results:
        reports_dir = Path("qa-reports")
        reports_dir.mkdir(exist_ok=True)

        if args.output_format == "sarif":
            sarif_path = reports_dir / "results.sarif"
            _emit_sarif(all_results, sarif_path)
            print(f"  SARIF report  : {sarif_path}")
        else:
            jsonl_path = reports_dir / "results.jsonl"
            csv_path = reports_dir / "summary.csv"
            _emit_jsonl(all_results, jsonl_path)
            _emit_csv(all_results, csv_path)
            print(f"  JSONL report  : {jsonl_path}")
            print(f"  CSV summary   : {csv_path}")

    print()

    # --- Exit codes (ruff convention) ---
    if error_count > 0:
        return 1
    if warn_count > 0:
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
