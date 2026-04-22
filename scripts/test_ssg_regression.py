#!/usr/bin/env python3
"""
Regression detection script for SSG-generated HTML files.

Scans all HTML files in the docs/ directory for "Loading..." placeholder text,
which indicates incomplete or failed static site generation. This is a common
regression pattern when client-side loaders aren't properly compiled out.

Usage:
    python scripts/test_ssg_regression.py

Exit codes:
    0 = No regressions detected (clean build)
    1 = Loading placeholders found (regression detected)

Example output:
    docs/index.html: line 42, line 87
    docs/blog/post.html: line 15
    FAILED: 2 files with Loading... placeholders
"""

import re
import sys
from pathlib import Path


def scan_html_files(docs_dir: str = "docs") -> dict:
    """
    Recursively scan HTML files for "Loading..." placeholder text.
    
    Args:
        docs_dir: Root directory to scan (default: "docs")
    
    Returns:
        Dictionary mapping file paths to list of line numbers with matches
    """
    docs_path = Path(docs_dir)
    if not docs_path.exists():
        print(f"Error: {docs_dir} directory not found", file=sys.stderr)
        sys.exit(1)
    
    findings = {}
    pattern = re.compile(r"loading\s*\.\.\.", re.IGNORECASE)
    
    for html_file in sorted(docs_path.rglob("*.html")):
        try:
            with open(html_file, "r", encoding="utf-8", errors="ignore") as f:
                lines = f.readlines()
            
            matches = []
            for line_num, line_content in enumerate(lines, start=1):
                if pattern.search(line_content):
                    matches.append(line_num)
            
            if matches:
                findings[str(html_file)] = matches
        
        except (IOError, OSError) as e:
            print(f"Warning: Could not read {html_file}: {e}", file=sys.stderr)
    
    return findings


def main():
    """Scan for regressions and report findings."""
    findings = scan_html_files()
    
    if not findings:
        print("✓ No Loading... placeholders found. Build is clean.")
        return 0
    
    # Report findings
    for filepath in sorted(findings.keys()):
        line_numbers = ", ".join(str(n) for n in findings[filepath])
        print(f"{filepath}: line {line_numbers}")
    
    print(f"\nFAILED: {len(findings)} file(s) with Loading... placeholders")
    return 1


if __name__ == "__main__":
    sys.exit(main())
