# AccessiTech Content Strategy Workplan

## Overview

This workplan synthesizes our competitor analysis, keyword research, and content audit to guide AccessiTech’s SEO and content strategy. It is a living document—future research and references will be incorporated as we progress.

Currently, our content library includes:

- A limited blog series (with plans for expansion)
- A comprehensive breakdown of all WCAG 2.1 guidelines (one page per guideline)

**Immediate Priority:**

- Enhance and optimize existing content, starting with the WCAG 2.1 guideline pages, to ensure they meet or exceed industry benchmarks for depth, structure, accessibility, and SEO.

- Expand the blog series with new, high-priority topics from our keyword research.

---

## 1. Key Insights from Competitor Analysis

See [Competitor Analysis](Competitor%20Analysis.md) for full details.

- **Comprehensive, in-depth content** (2,000–8,000+ words) dominates top search results.
- **Clear structure**: High-performing pages use 10–40+ headings for scannability.
- **Accessibility features** (alt text, ARIA, semantic HTML) are present but inconsistent; leaders stand out by doing this well.
- **Rich internal/external linking** and relevant images/media are common among top pages.
- **Readability**: Content is moderately complex, suitable for a professional/technical audience.

---

## 2. Keyword Research & Prioritization

See [keyword-research.md](keyword-research.md) and [keywords.csv](keywords.csv) for the full list and details.

### High-Priority Topics

- **WCAG 2.1 Guidelines** (full breakdown, one page per guideline)
- WCAG checklist & compliance guide
- Accessible web forms
- Best screen readers (Windows & Mac)
- ARIA roles explained
- Color contrast checker
- Accessible React components
- WCAG 2.1 summary
- Accessibility audit process
- Keyboard navigation best practices
- How to write effective alt text (with examples)
- Accessible navigation & dropdown menus
- Accessibility statement template
- Inclusive design principles
- Web a11y for developers

### Content Ideas & Gaps

- Downloadable checklists, guides, and templates
- How-to/code samples for devs/designers
- Review roundups, comparison tables, and tool demos
- Step-by-step accessibility and compliance walkthroughs
- Plain-language summaries and printable resources

---

## 3. Content Audit & Benchmarks

See [competitor-analysis-report-analyzed.csv](competitor-analysis-report-analyzed.csv) for detailed metrics.

- **Word Count**: Target 2,000–5,000+ words for pillar content.
- **Headings**: Use 10+ headings for clarity and SEO.
- **Images**: Include relevant images with descriptive alt text.
- **Links**: Add internal and authoritative external links.
- **Accessibility**: Ensure all images have alt text, use ARIA roles where appropriate, and follow semantic HTML best practices.
- **Readability**: Aim for clear, concise language; break up complex info with lists and examples.

---

## 4. Action Plan & Next Steps

### Automation & Enhancement Workflow

To efficiently enhance and expand our content, we will implement a modular, script-driven workflow:

1. **Template Research & Definition Phase**
   - **Goal:** Develop a flexible yet consistent template for each page type, starting with the WCAG explanation series.
   - **Activities:**
     - Audit top competitor and authoritative WCAG guideline pages for structure, formatting, and content elements.
     - Identify common sections (e.g., summary, requirements, examples, best practices, resources).
     - Draft and iterate on a template that balances consistency with flexibility for unique guideline needs.
   - **Documentation:**
     - Document the template structure and update criteria in this workplan or a dedicated template reference file.
     - Revisit and refine templates as new research or feedback emerges.

1. **Template Definition**
   - Create a standardized template for each page type (e.g., blog post, WCAG guideline) to ensure consistency in structure and formatting.

1. **Page-Specific Competitor Analysis Script**
   - Input: Page/topic md files from the public/data/wcag directory
   - Output: CSV/JSON of top-ranking competitor URLs, their SEO/structure/accessibility metrics, and extracted content features (using Puppeteer/Cheerio as in our current scripts).

1. **Page-Specific Keyword Research Script**
   - Input: Page/topic md files from the public/data/wcag directory
   - Output: CSV/JSON of relevant keywords, long-tail phrases, questions, and related terms (using APIs or scraping SERPs, optionally integrating with tools like SEMrush, Ahrefs, or Google Suggest).

1. **Gap Analysis Script**
   - Input: Page/topic md files from the public/data/wcag directory, competitor analysis data
   - Output: CSV/JSON of content gaps, opportunities for improvement, and suggested topics (based on competitor analysis and keyword research).

1. **AI Content Enhancement Script**
   - Input: Existing page content (Page/topic md files), keyword/competitor data (output from steps 1 and 2 listed above)
   - Output: Enhanced content draft, suggestions for structure, headings, meta tags, and accessibility improvements (using OpenAI API or similar).

1. **Orchestration Script (optional)**
   - Automates the above steps for each page in our guidelines set, saving results and drafts for review.

---

### Ongoing Content Operations

1. **Enhance Existing Content**
   - Audit and update all WCAG 2.1 guideline pages to align with best practices for depth, structure, accessibility, and SEO.
   - Improve internal linking between guideline pages and related resources.
   - Add/optimize images, headings, and accessibility features (alt text, ARIA, etc.).

2. **Expand Blog Series**
   - Plan and publish new blog posts based on high-priority keywords and content gaps.
   - Incorporate long-tail and question-based keywords naturally.

3. **On-Page Optimization**
   - Use headings, meta tags, and structured data for SEO.
   - Add internal links to related content.
   - Optimize images and media for accessibility and performance.

4. **Accessibility Review**
   - Audit all new and existing content for accessibility (alt text, ARIA, keyboard navigation, color contrast, etc.).
   - Use findings from competitor analysis as benchmarks.

5. **Continuous Improvement**
   - Regularly review analytics and rankings.
   - Update content based on new research, user feedback, and industry changes.
   - Expand this workplan with future research and references.

---

## 5. References & Future Research

- [Competitor Analysis](Competitor%20Analysis.md)
- [Keyword Research](keyword-research.md)
- [Keywords CSV](keywords.csv)
- [Analyzed Competitor Report](competitor-analysis-report-analyzed.csv)

**To add:**

- User personas & journey mapping
- Content performance analytics
- Additional competitor/market research
- Accessibility audit logs
- Editorial calendar & workflow

---

_This workplan is maintained by the AccessiTech content team. Please update as new insights and research become available._
