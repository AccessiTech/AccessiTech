# Research ETL Documentation

## Overview

This document describes the current ETL (Extract, Transform, Load) process used for research in this project.

## Table of Contents

- [Overview](#overview)
- [Step-by-Step ETL Process](#step-by-step-etl-process)
- [ETL Pipeline Stages](#etl-pipeline-stages)
  - [Extract](#extract)
  - [Transform](#transform)
  - [Load](#load)
- [Data Sources](#data-sources)
- [Scripts and Tools](#scripts-and-tools)
- [Known Issues & Improvements](#known-issues--improvements)
- [References](#references)

## Step-by-Step ETL Process

1. **Curate Keyword List**

- Document and prioritize keywords in [`keyword-research.md`](keyword-research.md) and export to [`keywords-global.csv`](keywords-global.csv).

2. **Extract WCAG Metadata**

- Run [`extract-wcag-metadata-to-csv.js`](../scripts/extract-wcag-metadata-to-csv.js) to pull metadata (including keywords) from all `public/data/wcag/*.md` files into [`wcag-metadata-keywords.csv`](wcag-metadata-keywords.csv).
- Script notes:
  - Scans all Markdown files in `public/data/wcag/` for an HTML comment block at the top containing metadata fields (e.g., title, description, keywords, date, status, excerpt, previous, next).
  - Extracts these fields using a regex and outputs a CSV with a fixed header: File, Title, Description, Keywords, Date, Status, Excerpt, Previous, Next.
  - Handles missing metadata fields gracefully (empty string if not present).
  - Output file: `research/wcag-metadata-keywords.csv`.
  - Usage: `node extract-wcag-metadata-to-csv.js > research/wcag-metadata-keywords.csv`.

3. **Explode Keywords**

- Run [`explode-wcag-keywords-csv.js`](../scripts/explode-wcag-keywords-csv.js) to flatten grouped keywords into a one-keyword-per-row CSV: [`wcag-keywords-exploded.csv`](wcag-keywords-exploded.csv).
- Script notes:
  - Reads the output of `wcag-metadata-keywords.csv` and parses each row's `Keywords` field (comma-separated list).
  - For each keyword, creates a new row with: Keyword / Topic, Guideline Title, Description, Source File.
  - Outputs a flat CSV where each row is a single keyword with its associated context, suitable for further enhancement or analysis.
  - Handles quoted fields and CSV escaping.
  - Output file: `research/wcag-keywords-exploded.csv`.
  - Usage: `node explode-wcag-keywords-csv.js > research/wcag-keywords-exploded.csv`.

4. **Keyword Enhancement**

- Run [`enhance-keywords-csv.js`](../scripts/enhance-keywords-csv.js) to generate long-tail, question-based, and related keyword suggestions for each keyword in the CSV files.
- Outputs enhanced CSV reports: [`competitor-analysis-report-general-enhanced.csv`](competitor-analysis-report-general-enhanced.csv) and [`wcag-competitor-analysis-report-enhanced.csv`](wcag-competitor-analysis-report-enhanced.csv) for further review and analysis.
- Script notes:
  - Reads a CSV of keywords (e.g., `keywords.csv`) and, for each keyword, generates three types of suggestions: long-tail keywords, question-based keywords, and related keywords.
  - Appends these suggestions as new columns to each row in the output CSV.
  - Uses simple string templates to generate suggestions for each keyword.
  - Handles the header row and quoted fields.
  - Output file: `keywords-enhanced.csv` (or similar, depending on input).
  - Usage: `node scripts/enhance-keywords-csv.js` (input/output filenames can be edited in the script or by modifying the code).

5. **Competitor Content Scraping**

- Use [`competitor-analysis.js`](../scripts/competitor-analysis.js) to search each keyword from both [`keywords-global.csv`](keywords-global.csv) and [`wcag-keywords-exploded.csv`](wcag-keywords-exploded.csv) on DuckDuckGo.
- The script saves the top 10 result HTML and PDFs to `research/competitor-html` and `research/competitor-pdf` directories.
- Script notes:
  - Automates DuckDuckGo searches for each keyword using Puppeteer (headless browser).
  - For each keyword, collects the top 10 organic results (excluding ads), extracting title, URL, meta description, and headings.
  - Saves HTML content and PDFs of result pages to `research/competitor-html` and `research/competitor-pdf` directories, with safe filenames.
  - Handles errors and resumes from a specific keyword if needed (via CLI flag).
  - Outputs a CSV with fields: Keyword, Result Rank, Ranking Score, Domain, Result Type, Page Title, URL, Meta Description, H1/H2 Headings, Manual Notes.
  - Usage: `node competitor-analysis.js research/keywords.csv > competitor-analysis-report.csv` (input/output files can be specified as arguments).

6. **Analyze Competitor HTML**

- Run [`analyze-competitor-html.js`](../scripts/analyze-competitor-html.js) to extract SEO metadata and HTML content metrics from the saved HTML files.
- Inputs: `research/*-enhanced.csv` files (e.g., `competitor-analysis-report-general-enhanced.csv`, `wcag-competitor-analysis-report-enhanced.csv`).
- Outputs: `research/*-analyzed.csv` files (e.g., `competitor-analysis-report-general-analyzed.csv`, `wcag-competitor-analysis-report-analyzed.csv`).
- Script notes:
  - Reads an enhanced CSV of competitor results and, for each row, loads the corresponding HTML file from `research/competitor-html`.
  - Uses Cheerio to parse HTML and extract content and accessibility metrics: word count, heading count, image count, link count, images with alt, ARIA attributes, form elements, and Flesch-Kincaid readability.
  - Appends these metrics as new columns to each row in the output CSV.
  - Handles missing or unreadable HTML files gracefully (fills with empty values).
  - Output file: `research/*-analyzed.csv` (matches input filename pattern).
  - Usage: `node analyze-competitor-html.js research/competitor-analysis-report-enhanced.csv > research/competitor-analysis-report-analyzed.csv` (input/output files can be specified as arguments).

7. **Clean CSVs**

- Run [`clean-csv.js`](clean-csv.js) on the `research/*-analyzed.csv` files to ensure each row is on a single line and remove malformed rows.
- Outputs: `research/*-analyzed-clean.csv` files.
- Script notes:
  - Reads an analyzed CSV file and parses it robustly, handling quoted fields and newlines within fields.
  - Flattens each row so that all fields are on a single line, replacing newlines in quoted fields with spaces.
  - Dynamically detects key columns (e.g., Domain, Page Title) and filters out rows missing essential data (except the header).
  - Outputs a cleaned CSV file with the same columns, ready for downstream processing.
  - Output file: `research/*-analyzed-clean.csv` (matches input filename pattern).
  - Usage: `node clean-csv.js` (input/output filenames can be edited in the script or by modifying the code).

8. **Semantic Ranking**

- Run [`rank-wcag-keywords-by-serp-semantic.js`](../scripts/rank-wcag-keywords-by-serp-semantic.js) on the cleaned analyzed CSVs.
- This script uses a local LLM to semantically compare each keyword and result to your website's context, scoring relevance and other metrics.
- Inputs: `research/*-analyzed-clean.csv` files.
- Outputs: `research/*-ranked-semantic.csv` files for review and hybrid workflow.
- Script notes:
  - Reads a cleaned/analyzed CSV of SERP/competitor results and loads context for each keyword from `wcag-keywords-exploded.csv`.
  - Uses a local LLM (Ollama/Open WebUI) to:
    - Score the SEO difficulty and accessibility relevance of each keyword (optional, can be mocked).
    - Generate embedding vectors for keywords and competitor content (title, description, headings, keywords) and compute cosine similarity for semantic relevance.
  - Flags results as on-topic/off-topic based on a similarity threshold (default 0.7).
  - Calculates additional rule-based scores (authority, diversity, content depth, accessibility, etc.) and flags rows for manual review if needed.
  - Supports robust CLI flags for resuming, limiting, dry-run, and verbose/debug output.
  - Output file: `research/*-ranked-semantic.csv` (matches input filename pattern).
  - Usage: `node scripts/rank-wcag-keywords-by-serp-semantic.js [input.csv] [output.csv] [--resume <keyword|row>] [--verbose] [--llm-delay <seconds>] [--dry-run] [--limit <N>]`.

9. **Add Overview and Final Scores**

- Run [`add-overview-scores-to-csv.js`](../scripts/add-overview-scores-to-csv.js) to compute and append overview and final scores to a ranked semantic CSV.
- Script notes:
  - Reads a ranked semantic CSV (e.g., `*-ranked-semantic.csv`) and computes several aggregate scores for each row:
    - **Semantic Relevance Score:** Average of title, description, headings, and keywords similarity columns.
    - **On-Topic Score:** Average of title, description, headings, and keywords on-topic columns.
    - **Content Depth Score:** Percentile-normalized average of word count, heading count, image count, and link count.
    - **Accessibility Feature Score:** Percentile-normalized average of alt image count, ARIA count, and form count.
    - **Authority Score:** Taken from the 'Authority Hits' column.
    - **Diversity Score:** Taken from the 'Diversity' column.
    - **Final Overall Score:** Weighted sum of the above metrics (0.3 semantic relevance, 0.2 on-topic, 0.15 content depth, 0.15 accessibility, 0.1 authority, 0.1 diversity).
  - Uses 5th and 95th percentiles for normalization to reduce outlier impact.
  - Outputs a new CSV with additional columns for each score and a final overall score (default output: `*-scored.csv`).
  - Usage: `node add-overview-scores-to-csv.js input.csv output.csv`

10. **Convert CSV to JSON**

- Run [`csv-to-json.js`](../scripts/csv-to-json.js) to convert a CSV file to a JSON array for downstream analysis or visualization.
- Script notes:
  - Reads a CSV file (expects header row) and parses it into an array of objects.
  - Outputs a formatted JSON file (pretty-printed, 2-space indent) with one object per row.
  - Handles missing input argument and prints usage instructions if not provided.
  - Prints the resolved output path and the number of rows converted.
  - Handles errors gracefully and prints error messages if conversion fails.
  - Usage: `node csv-to-json.js input.csv [output.json]` (defaults to replacing `.csv` with `.json` if output not specified).

## ETL Pipeline Stages

### Extract

1. **Keyword List Creation**

- Curate and prioritize keywords in [`keyword-research.md`](keyword-research.md) and export to [`keywords-global.csv`](keywords-global.csv).

2. **WCAG Metadata Extraction**

- Run [`extract-wcag-metadata-to-csv.js`](../scripts/extract-wcag-metadata-to-csv.js) to extract metadata (including keywords) from all `public/data/wcag/*.md` files into [`wcag-metadata-keywords.csv`](wcag-metadata-keywords.csv).

3. **Keyword Explosion**

- Run [`explode-wcag-keywords-csv.js`](../scripts/explode-wcag-keywords-csv.js) to flatten grouped keywords into a one-keyword-per-row CSV: [`wcag-keywords-exploded.csv`](wcag-keywords-exploded.csv).

### Transform

4. **Keyword Enhancement**

- Run [`enhance-keywords-csv.js`](../scripts/enhance-keywords-csv.js) to generate long-tail, question-based, and related keyword suggestions for each keyword in the CSV files.
- Outputs enhanced CSVs: [`competitor-analysis-report-general-enhanced.csv`](competitor-analysis-report-general-enhanced.csv), [`wcag-competitor-analysis-report-enhanced.csv`](wcag-competitor-analysis-report-enhanced.csv).

5. **Analyze Competitor HTML**

- Run [`analyze-competitor-html.js`](../scripts/analyze-competitor-html.js) to extract SEO metadata and HTML content metrics from the saved HTML files.
- Inputs: `research/*-enhanced.csv` files.
- Outputs: `research/*-analyzed.csv` files.

6. **Clean CSVs**

- Run [`clean-csv.js`](clean-csv.js) on the `research/*-analyzed.csv` files to ensure each row is on a single line and remove malformed rows.
- Outputs: `research/*-analyzed-clean.csv` files.

### Load

7. **Competitor Content Scraping**

- Use [`competitor-analysis.js`](../scripts/competitor-analysis.js) to search each keyword from both [`keywords-global.csv`](keywords-global.csv) and [`wcag-keywords-exploded.csv`](wcag-keywords-exploded.csv) on DuckDuckGo.
- Saves the top 10 result HTML and PDFs to `research/competitor-html` and `research/competitor-pdf` directories.
- Outputs CSV reports: [`competitor-analysis-report-general-enhanced.csv`](competitor-analysis-report-general-enhanced.csv), [`wcag-competitor-analysis-report-enhanced.csv`](wcag-competitor-analysis-report-enhanced.csv).

8. **Semantic Ranking**

- Run [`rank-wcag-keywords-by-serp-semantic.js`](../scripts/rank-wcag-keywords-by-serp-semantic.js) on the cleaned analyzed CSVs.
- Uses a local LLM to semantically compare each keyword and result to your website's context, scoring relevance and other metrics.
- Inputs: `research/*-analyzed-clean.csv` files.
- Outputs: `research/*-ranked-semantic.csv` files for review and hybrid workflow.

## Data Sources

### Data Sources

- **Manual Keyword Research:**
  - [`keyword-research.md`](keyword-research.md): Initial research and prioritization notes.
  - [`keywords-global.csv`](keywords-global.csv): Master list of global keywords for accessibility and WCAG topics.

- **WCAG Markdown Metadata:**
  - `public/data/wcag/*.md`: Markdown files with embedded metadata blocks containing titles, descriptions, and keyword lists for each guideline.

- **Extracted Metadata CSV:**
  - [`wcag-metadata-keywords.csv`](wcag-metadata-keywords.csv): Extracted metadata from WCAG markdown files (title, description, keywords, etc.).

- **Exploded Keyword List:**
  - [`wcag-keywords-exploded.csv`](wcag-keywords-exploded.csv): Flat, one-keyword-per-row CSV for analysis and enhancement.

- **Enhanced Keyword Reports:**
  - [`competitor-analysis-report-general-enhanced.csv`](competitor-analysis-report-general-enhanced.csv): Enhanced keyword suggestions for general keywords.
  - [`wcag-competitor-analysis-report-enhanced.csv`](wcag-competitor-analysis-report-enhanced.csv): Enhanced keyword suggestions for WCAG keywords.

- **Competitor Content (SERP) Data:**
  - `research/competitor-html/`: Directory of HTML files for top competitor results per keyword.
  - `research/competitor-pdf/`: Directory of PDF snapshots for top competitor results per keyword.

- **Analyzed Competitor Reports:**
  - `research/*-analyzed.csv`: CSVs with SEO and accessibility metrics extracted from competitor HTML.

- **Cleaned CSVs:**
  - `research/*-analyzed-clean.csv`: Cleaned, one-row-per-line CSVs ready for semantic ranking.

- **Semantic Ranking Outputs:**
  - `research/*-ranked-semantic.csv`: CSVs with semantic relevance scores and hybrid workflow flags.

## Scripts and Tools

### Scripts and Tools

- [`extract-wcag-metadata-to-csv.js`](../scripts/extract-wcag-metadata-to-csv.js): Extracts metadata (title, description, keywords, etc.) from WCAG markdown files to CSV.
- [`explode-wcag-keywords-csv.js`](../scripts/explode-wcag-keywords-csv.js): Flattens grouped keyword fields into a one-keyword-per-row CSV for analysis.
- [`enhance-keywords-csv.js`](../scripts/enhance-keywords-csv.js): Generates long-tail, question-based, and related keyword suggestions for each keyword in a CSV.
- [`competitor-analysis.js`](../scripts/competitor-analysis.js): Automates DuckDuckGo SERP analysis for each keyword, saving HTML/PDFs and generating a competitor report.
- [`analyze-competitor-html.js`](../scripts/analyze-competitor-html.js): Extracts SEO and accessibility metrics from saved competitor HTML files and appends them to CSVs.
- [`clean-csv.js`](clean-csv.js): Cleans analyzed CSVs, ensuring one row per line and removing malformed rows.
- [`rank-wcag-keywords-by-serp-semantic.js`](../scripts/rank-wcag-keywords-by-serp-semantic.js): Uses a local LLM to semantically rank keywords and competitor results, scoring relevance and other metrics.

## Known Issues & Improvements

_Document any known issues or areas for improvement._

## References

_Include any relevant references or links._
