# Scripts

Utility scripts for the AccessiTech build and test pipeline.

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
