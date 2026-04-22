"""
Pytest integration tests for SSG regression detection.

Tests verify that the build output does not contain "Loading..." placeholder text,
which would indicate incomplete or failed static site generation.
"""

import subprocess
import sys
from pathlib import Path

import pytest


@pytest.mark.io
def test_ssg_no_loading_placeholders():
    """
    Verify no Loading... placeholders in generated HTML files.
    
    This is a critical regression test: if the build contains "Loading..."
    strings in generated HTML, it means client-side loaders weren't properly
    compiled out or the static generation failed.
    """
    result = subprocess.run(
        [sys.executable, "scripts/test_ssg_regression.py"],
        cwd=Path(__file__).parent.parent,
        capture_output=True,
        text=True,
    )
    
    assert result.returncode == 0, (
        f"SSG regression detected.\n"
        f"stdout:\n{result.stdout}\n"
        f"stderr:\n{result.stderr}"
    )


@pytest.mark.io
def test_ssg_regression_exit_codes():
    """
    Verify exit codes: 0 = clean, 1 = regression detected.
    """
    # Run the script
    result = subprocess.run(
        [sys.executable, "scripts/test_ssg_regression.py"],
        cwd=Path(__file__).parent.parent,
        capture_output=True,
        text=True,
    )
    
    # Should exit with 0 (clean) or 1 (regression), not any other code
    assert result.returncode in (0, 1), (
        f"Unexpected exit code {result.returncode}. "
        f"Expected 0 (clean) or 1 (regression)."
    )
