# QA Page Specs — AccessiTech SSG Site

**Purpose**: Source-of-truth specification defining what each page type must contain for the
AccessiTech statically-generated site. This document is used by `scripts/qa_html.py` to validate
every HTML file in `docs/` against structural, SEO, and accessibility requirements.

This file is an internal development artifact — it is not a public document and is not shipped in
`docs/`. Update this spec whenever a new page type is added, a structural pattern changes, or a
new check is added to `scripts/qa_html.py`.

---

## How This File Is Used by `scripts/qa_html.py`

The QA script parses each HTML file in `docs/`, determines its page type from the file path, then
runs the universal checks (below) followed by the page-type-specific checks for the matched type.
Results are emitted as structured output with check ID, severity, page path, and message.

**Check ID format**: `<category>-<sequence>` — e.g. `head-001`, `a11y-003`, `seo-002`.

---

## Severity Tiers

| Tier    | Symbol | Meaning                                                                         | CI Behavior                                |
| ------- | ------ | ------------------------------------------------------------------------------- | ------------------------------------------ |
| `ERROR` | `❌`   | Structural failure, a11y violation, or canonical domain error. Blocks build/CI. | Exits non-zero; fix required before merge. |
| `WARN`  | `⚠️`   | SEO heuristic, content length, or optional enhancement. Reports only.           | Exits zero; logged to report.              |
| `INFO`  | `ℹ️`   | Informational signal; no action required.                                       | Exits zero; logged to report only.         |

---

## Page Type → File Path Mapping

| Page type           | Route(s)               | Output file(s)                                                       |
| ------------------- | ---------------------- | -------------------------------------------------------------------- |
| `home`              | `/`                    | `docs/index.html`                                                    |
| `blog-index`        | `/blog`                | `docs/blog.html`                                                     |
| `wcag-index`        | `/wcag`                | `docs/wcag.html`                                                     |
| `blog-entry`        | `/blog/:slug`          | `docs/blog/*.html`                                                   |
| `services-index`    | `/services`            | `docs/services.html`                                                 |
| `services-category` | `/services/:cat`       | `docs/services/consulting.html`, `docs/services/mentorship.html`     |
| `service-detail`    | `/services/:cat/:slug` | `docs/services/consulting/*.html`, `docs/services/mentorship/*.html` |
| `products-index`    | `/products`            | `docs/products.html`                                                 |
| `product-detail`    | `/products/:slug`      | `docs/products/*.html`                                               |
| `contact`           | `/contact`             | `docs/contact.html`                                                  |
| `disclosures-index` | `/disclosures`         | `docs/disclosures.html`                                              |
| `disclosure-detail` | `/disclosures/:slug`   | `docs/disclosures/*.html`                                            |
| `404`               | `/404`                 | `docs/404.html`                                                      |

**Type detection heuristic** (for `qa_html.py`):

```
path == "docs/index.html"                  → home
path == "docs/blog.html"                   → blog-index
path == "docs/wcag.html"                   → wcag-index
path starts "docs/blog/"                   → blog-entry
path == "docs/services.html"               → services-index
path in ["docs/services/consulting.html",
         "docs/services/mentorship.html"]  → services-category
path starts "docs/services/"              → service-detail
path == "docs/products.html"              → products-index
path starts "docs/products/"             → product-detail
path == "docs/contact.html"              → contact
path == "docs/disclosures.html"          → disclosures-index
path starts "docs/disclosures/"         → disclosure-detail
path == "docs/404.html"                  → 404
```

---

## Universal Checks

These checks apply to **every** HTML file in `docs/`, regardless of page type.

### Document Structure

| Check ID     | Selector / Test                                            | Severity | Pass                                            | Fail                        |
| ------------ | ---------------------------------------------------------- | -------- | ----------------------------------------------- | --------------------------- |
| `struct-001` | `html[lang="en"]` exists                                   | ERROR    | `<html lang="en">`                              | Missing or wrong lang value |
| `struct-002` | `head > meta[charset="utf-8"]` exists                      | ERROR    | `<meta charset="utf-8" />`                      | Absent or wrong charset     |
| `struct-003` | `title` element exists and is non-empty                    | ERROR    | `<title>AccessiTech \| Home</title>`            | Absent or empty `<title>`   |
| `struct-004` | `title` text length ≤ 70 chars                             | WARN     | `"AccessiTech \| Home"` (18 chars)              | Title truncated in SERPs    |
| `struct-005` | `link[rel="manifest"]` with `href="/manifest.json"` exists | ERROR    | `<link rel="manifest" href="/manifest.json" />` | Absent manifest link        |

### Meta Description

| Check ID   | Selector / Test                                        | Severity | Pass                 | Fail                           |
| ---------- | ------------------------------------------------------ | -------- | -------------------- | ------------------------------ |
| `meta-001` | `meta[name="description"]` exists                      | WARN     | Present              | Absent                         |
| `meta-002` | `meta[name="description"][content]` length ≥ 50 chars  | WARN     | 120-char description | Description too short          |
| `meta-003` | `meta[name="description"][content]` length ≤ 160 chars | WARN     | 120-char description | Description truncated in SERPs |

### Open Graph

| Check ID | Selector / Test                                                        | Severity | Pass                                                                          | Fail                                                        |
| -------- | ---------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `og-001` | `meta[property="og:title"]` exists and non-empty                       | ERROR    | `<meta property="og:title" content="...">`                                    | Absent                                                      |
| `og-002` | `meta[property="og:description"]` exists and non-empty                 | ERROR    | `<meta property="og:description" content="...">`                              | Absent                                                      |
| `og-003` | `meta[property="og:url"]` exists and non-empty                         | ERROR    | `<meta property="og:url" content="https://accessi.tech/...">`                 | Absent                                                      |
| `og-004` | `meta[property="og:url"][content]` starts with `https://accessi.tech/` | ERROR    | `https://accessi.tech/blog`                                                   | `https://accessitech.org/...` — **wrong domain, not owned** |
| `og-005` | `meta[property="og:image"]` exists and non-empty                       | ERROR    | `<meta property="og:image" content="https://accessi.tech/assets/images/...">` | Absent                                                      |

### Twitter / X Card

| Check ID | Selector / Test                                     | Severity | Pass                                                       | Fail   |
| -------- | --------------------------------------------------- | -------- | ---------------------------------------------------------- | ------ |
| `tw-001` | `meta[name="twitter:title"]` exists and non-empty   | WARN     | `<meta name="twitter:title" content="...">`                | Absent |
| `tw-002` | `meta[name="twitter:creator"]` exists and non-empty | WARN     | `<meta name="twitter:creator" content="@accessiT3ch">`     | Absent |
| `tw-003` | `meta[name="twitter:card"]` exists and non-empty    | WARN     | `<meta name="twitter:card" content="summary_large_image">` | Absent |

### Canonical URL

| Check ID    | Selector / Test                                                   | Severity | Pass                                                     | Fail                                                        |
| ----------- | ----------------------------------------------------------------- | -------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| `canon-001` | `link[rel="canonical"]` exists                                    | ERROR    | `<link rel="canonical" href="https://accessi.tech/...">` | Absent                                                      |
| `canon-002` | `link[rel="canonical"][href]` starts with `https://accessi.tech/` | ERROR    | `https://accessi.tech/services/consulting`               | `https://accessitech.org/...` — **wrong domain, not owned** |

> **⚠️ Known bug**: Several blog entry pages have `og:url` and `canonical` set to
> `https://accessitech.org/` (not owned). This is an ERROR. The correct canonical domain is
> `https://accessi.tech/`. See Content Source Matrix for which source controls these values.

### Accessibility Landmarks

| Check ID   | Selector / Test                                                      | Severity | Pass                                                                    | Fail                                 |
| ---------- | -------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | ------------------------------------ |
| `a11y-001` | `a.skip-link[href="#main"]` exists                                   | ERROR    | `<a class="skip-link" href="#main">Skip to main content</a>`            | Absent skip link                     |
| `a11y-002` | `header[aria-label="Header"]` exists                                 | ERROR    | `<header aria-label="Header">`                                          | Absent or wrong label                |
| `a11y-003` | `nav[aria-label="Main navigation"]` exists inside `header`           | ERROR    | `<nav aria-label="Main navigation">`                                    | Absent or wrong label                |
| `a11y-004` | `nav[aria-label="Main navigation"] > ul > li` count equals exactly 5 | ERROR    | 5 top-level `<li>` items (Services, Products, Resources, Blog, Contact) | Fewer or more than 5 items           |
| `a11y-005` | `main#main` with non-empty `aria-label` exists                       | ERROR    | `<main id="main" aria-label="About AccessiTech">`                       | Absent, missing `id`, or empty label |
| `a11y-006` | `footer[aria-label="Footer"]` exists                                 | ERROR    | `<footer aria-label="Footer">`                                          | Absent or wrong label                |

### Render State

| Check ID     | Selector / Test                                  | Severity | Pass                           | Fail                                                                            |
| ------------ | ------------------------------------------------ | -------- | ------------------------------ | ------------------------------------------------------------------------------- |
| `render-001` | Text `Loading...` does NOT appear inside `#root` | ERROR    | No loading placeholder present | SSG rendered a loading state — page was not fully hydrated before static export |

### Footer Content

| Check ID     | Selector / Test                                                             | Severity | Pass                                            | Fail                               |
| ------------ | --------------------------------------------------------------------------- | -------- | ----------------------------------------------- | ---------------------------------- |
| `footer-001` | Footer contains text `AccessiTech LLC` (copyright)                          | WARN     | `© 2026 AccessiTech LLC. All Rights Reserved.` | Copyright text absent or malformed |
| `footer-002` | Footer has 3 column sections: logo col, "Reach Out!" col, "Disclosures" col | WARN     | Three `<div>` children inside footer grid row   | Missing column                     |

---

## Per-Type Spec Sections

### 1. `home`

**Routes**: `/`  
**Output**: `docs/index.html`  
**Meta source**: `src/App/meta.ts`

**Title pattern**: `AccessiTech | Home`

**`main` aria-label**: `"About AccessiTech"`

#### Additional checks

| Check ID   | Selector / Test                                                                   | Severity | Pass                                 | Fail                   |
| ---------- | --------------------------------------------------------------------------------- | -------- | ------------------------------------ | ---------------------- |
| `home-001` | `main[aria-label="About AccessiTech"]`                                            | ERROR    | Exact label match                    | Wrong or missing label |
| `home-002` | `section#cta-section` or equivalent CTA section present                           | WARN     | CTA section with discovery call link | Absent                 |
| `home-003` | `section[data-testid="services"]` or equivalent services overview section present | WARN     | Services overview section present    | Absent                 |
| `home-004` | Calendly link `href="https://calendly.com/accessit3ch/30min"` present in CTA      | WARN     | Link present with correct href       | Absent or wrong URL    |

---

### 2. `blog-index`

**Routes**: `/blog`  
**Output**: `docs/blog.html`  
**Meta source**: `src/pages/Blog/meta.ts`

**Title pattern**: `Blog | AccessiTech`

**`main` aria-label**: `"Blog"`

#### Additional checks

| Check ID       | Selector / Test                                                        | Severity | Pass                            | Fail                              |
| -------------- | ---------------------------------------------------------------------- | -------- | ------------------------------- | --------------------------------- |
| `blog-idx-001` | `main[aria-label="Blog"]`                                              | ERROR    | Exact label match               | Wrong or missing label            |
| `blog-idx-002` | `nav[aria-label="breadcrumb"]` present                                 | ERROR    | Breadcrumb nav with Home > Blog | Absent                            |
| `blog-idx-003` | At least 1 `article.blog-entry` present                                | WARN     | Entry articles listed           | No entries rendered               |
| `blog-idx-004` | Each `article.blog-entry` contains `<a>` with `href` starting `/blog/` | WARN     | Entry links to blog detail      | Entry link absent or wrong prefix |
| `blog-idx-005` | Each `article.blog-entry` contains a `<span>` (date)                   | WARN     | `<span>Jun 12, 2025</span>`     | Date span absent                  |

---

### 3. `wcag-index`

**Routes**: `/wcag`  
**Output**: `docs/wcag.html`  
**Meta source**: `src/pages/Blog/wcag-meta.ts`

**Title pattern**: `WCAG Resources | AccessiTech` _(verify against actual meta.ts)_

**`main` aria-label**: verify against rendered HTML; expected `"WCAG"` or `"WCAG Resources"`

**Notes**: The `/wcag` route uses the same blog-index component/template but with WCAG-specific
meta. All `blog-index` checks apply. The breadcrumb on this page should reflect Home > Resources
(not Home > Blog).

#### Additional checks

| Check ID   | Selector / Test                                                 | Severity | Pass                                 | Fail                 |
| ---------- | --------------------------------------------------------------- | -------- | ------------------------------------ | -------------------- |
| `wcag-001` | `nav[aria-label="breadcrumb"]` present                          | ERROR    | Breadcrumb nav with Home > Resources | Absent               |
| `wcag-002` | `link[rel="canonical"]` href equals `https://accessi.tech/wcag` | ERROR    | Correct canonical URL                | Missing or wrong URL |

---

### 4. `blog-entry`

**Routes**: `/blog/:slug`  
**Output**: `docs/blog/*.html`  
**Meta source**: Markdown front-matter in `public/data/blog/*.md` (HTML comment format — see Content
Source Matrix)

**Title pattern**: Full post title only (no ` | AccessiTech` suffix)  
**Example**: `AI for Coding Accessibility: How Tools Like Copilot Help Me Ship Code Despite Chronic Pain`

**`main` aria-label**: `"Blog Entry"` (static — same for all blog entries)

> **⚠️ Known bug**: Several blog entry pages have `og:url` and `canonical` set to
> `https://accessitech.org/blog/:slug`. This is an ERROR — `accessitech.org` is not the owned
> domain. Canonical URLs must use `https://accessi.tech/`.

#### Additional checks

| Check ID   | Selector / Test                                                                      | Severity | Pass                                   | Fail                             |
| ---------- | ------------------------------------------------------------------------------------ | -------- | -------------------------------------- | -------------------------------- |
| `blog-001` | `main[aria-label="Blog Entry"]`                                                      | ERROR    | Exact label match                      | Wrong or missing label           |
| `blog-002` | `nav[aria-label="breadcrumb"]` present                                               | ERROR    | Breadcrumb: Home > Blog > [Post Title] | Absent                           |
| `blog-003` | Breadcrumb has exactly 3 items (Home, Blog, post title)                              | WARN     | 3-item breadcrumb                      | Fewer or more items              |
| `blog-004` | `meta[property="og:type"][content="article"]` present                                | WARN     | `og:type=article`                      | Absent or wrong value            |
| `blog-005` | `h1` element present with post title text                                            | WARN     | `<h1>…post title…</h1>`                | Absent `<h1>`                    |
| `blog-006` | Post date `<span>` present inside content                                            | WARN     | `<span>Apr 8, 2025</span>`             | Date span absent                 |
| `blog-007` | `canon-002`: canonical href starts with `https://accessi.tech/` (also an ERROR here) | ERROR    | `https://accessi.tech/blog/…`          | `https://accessitech.org/blog/…` |

---

### 5. `services-index`

**Routes**: `/services`  
**Output**: `docs/services.html`  
**Meta source**: `src/pages/Services/meta.ts`

**Title pattern**: `Services | AccessiTech` _(verify against meta.ts)_

**`main` aria-label**: `"Services"` _(verify against rendered HTML)_

#### Additional checks

| Check ID      | Selector / Test                                                       | Severity | Pass                          | Fail                   |
| ------------- | --------------------------------------------------------------------- | -------- | ----------------------------- | ---------------------- |
| `svc-idx-001` | `main` with aria-label containing "Services"                          | ERROR    | `main[aria-label="Services"]` | Wrong or missing label |
| `svc-idx-002` | At least 2 service category sections present (Consulting, Mentorship) | WARN     | Two service category sections | Missing a category     |

---

### 6. `services-category`

**Routes**: `/services/consulting`, `/services/mentorship`  
**Output**: `docs/services/consulting.html`, `docs/services/mentorship.html`  
**Meta source**: `src/pages/Services/consulting-meta.ts`, `src/pages/Services/mentorship-meta.ts`

**Title pattern**: `[Category Name] | AccessiTech`  
**Examples**: `Consulting | AccessiTech`, `Mentorship | AccessiTech`

**`main` aria-label**: matches category name (e.g. `"Consulting"`, `"Mentorship"`)

#### Additional checks

| Check ID      | Selector / Test                                               | Severity | Pass                          | Fail                 |
| ------------- | ------------------------------------------------------------- | -------- | ----------------------------- | -------------------- |
| `svc-cat-001` | `nav[aria-label="breadcrumb"]` present                        | ERROR    | Breadcrumb: Home > [Category] | Absent               |
| `svc-cat-002` | At least 1 service sub-section linked from this category page | WARN     | Links to service detail pages | No sub-service links |
| `svc-cat-003` | CTA link or button with href containing `/contact`            | WARN     | Discovery call CTA            | Absent               |

---

### 7. `service-detail`

**Routes**: `/services/:cat/:slug`  
**Output**: `docs/services/consulting/*.html`, `docs/services/mentorship/*.html`  
**Meta source**: per-service `*-meta.ts` files (e.g. `src/pages/Services/consulting/asaaps-meta.ts`)

**Known service detail pages** (7 total):

- `/services/consulting/asaaps` → `asaaps-meta.ts`
- `/services/consulting/ai-integration` → `ai-integration-meta.ts`
- `/services/consulting/qa` → `qa-meta.ts`
- `/services/mentorship/cccs` → `cccs-meta.ts`
- `/services/mentorship/coaching` → `coaching-meta.ts`
- `/services/mentorship/openclassrooms` → `openclassrooms-meta.ts`
- `/services/mentorship/sotc` → `sotc-meta.ts`

**Title pattern**: `[Service Name] | AccessiTech`  
**Example**: `Accessible Software Design & Development | AccessiTech`

**`main` aria-label**: full service name matching the page `<h2>`  
**Example**: `<main aria-label="Accessible Software as a Product/Service (ASaaPs)">`

#### Additional checks

| Check ID      | Selector / Test                                                               | Severity | Pass                                                             | Fail                                           |
| ------------- | ----------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- | ---------------------------------------------- |
| `svc-det-001` | `nav[aria-label="breadcrumb"]` present                                        | ERROR    | Breadcrumb: Home > [Category] > [Service]                        | Absent                                         |
| `svc-det-002` | Breadcrumb has exactly 3 items                                                | WARN     | 3-item breadcrumb                                                | Fewer or more items                            |
| `svc-det-003` | `h2` element present with service name text (matches `main[aria-label]`)      | ERROR    | `<h2>Accessible Software as a Product/Service (ASaaPs)</h2>`     | Absent or mismatched                           |
| `svc-det-004` | `main[aria-label]` matches the page's primary `h2` text                       | ERROR    | Label and h2 text match                                          | Mismatch — a11y anti-pattern                   |
| `svc-det-005` | CTA link/button with `href` containing `/contact` present                     | WARN     | `<a href="/contact?inquiry=consulting" class="btn btn-primary">` | Absent — no discovery call CTA                 |
| `svc-det-006` | CTA does NOT link to external Calendly URL (prefer internal `/contact` route) | WARN     | Internal `/contact` href                                         | `https://calendly.com/…` in service detail CTA |

---

### 8. `products-index`

**Routes**: `/products`  
**Output**: `docs/products.html`  
**Meta source**: `src/pages/Products/meta.ts`

**Title pattern**: `Products | AccessiTech` _(verify against meta.ts)_

**`main` aria-label**: `"Products"` _(verify against rendered HTML)_

#### Additional checks

| Check ID       | Selector / Test                                                        | Severity | Pass                                            | Fail                  |
| -------------- | ---------------------------------------------------------------------- | -------- | ----------------------------------------------- | --------------------- |
| `prod-idx-001` | `main` with aria-label containing "Products"                           | ERROR    | `main[aria-label="Products"]`                   | Wrong or missing      |
| `prod-idx-002` | At least 3 product cards present (`data-testid` pattern or equivalent) | WARN     | 3 product cards (WCAG Series, OSS ASaaPs, CCCs) | Missing product cards |

---

### 9. `product-detail`

**Routes**: `/products/:slug`  
**Output**: `docs/products/*.html`  
**Meta source**: per-product `*-meta.ts` files

**Known product detail pages** (3 total):

- `/products/wcag-series` → `wcag-series-meta.ts`
- `/products/oss-asaaps` → `oss-asaaps-meta.ts`
- `/products/cccs` → `cccs-meta.ts`

**Title pattern**: `[Product Name] | AccessiTech`

**`main` aria-label**: full product name matching the page `<h2>`

#### Additional checks

| Check ID       | Selector / Test                                           | Severity | Pass                                    | Fail     |
| -------------- | --------------------------------------------------------- | -------- | --------------------------------------- | -------- |
| `prod-det-001` | `nav[aria-label="breadcrumb"]` present                    | ERROR    | Breadcrumb: Home > Products > [Product] | Absent   |
| `prod-det-002` | `h2` element present with product name text               | ERROR    | Primary product heading                 | Absent   |
| `prod-det-003` | `main[aria-label]` matches the page's primary `h2` text   | ERROR    | Label and h2 match                      | Mismatch |
| `prod-det-004` | CTA link/button with `href` containing `/contact` present | WARN     | Contact/discovery call CTA              | Absent   |

---

### 10. `contact`

**Routes**: `/contact`  
**Output**: `docs/contact.html`  
**Meta source**: `src/App/meta.ts` (shared with home and 404 — index 19 in `staticMetaData`)

**Title pattern**: verify against rendered HTML (likely `"Contact | AccessiTech"` or `"AccessiTech | Contact"`)

**`main` aria-label**: `"Contact"` _(verify against rendered HTML)_

#### Additional checks

| Check ID      | Selector / Test                                                    | Severity | Pass                           | Fail                 |
| ------------- | ------------------------------------------------------------------ | -------- | ------------------------------ | -------------------- |
| `contact-001` | `main` with aria-label containing "Contact"                        | ERROR    | `main[aria-label="Contact"]`   | Wrong or missing     |
| `contact-002` | Contact form or Calendly embed present                             | WARN     | Form `<form>` element or embed | No contact mechanism |
| `contact-003` | `link[rel="canonical"]` href equals `https://accessi.tech/contact` | ERROR    | Correct canonical URL          | Wrong canonical      |

---

### 11. `disclosures-index`

**Routes**: `/disclosures`  
**Output**: `docs/disclosures.html`  
**Meta source**: `src/pages/Disclosures/meta.ts`

**Title pattern**: `Disclosures | AccessiTech` _(verify against meta.ts)_

**`main` aria-label**: `"Disclosures"` _(verify against rendered HTML)_

**Known disclosures** (6 links in footer): accessibility, ads, affiliate-links, code-of-conduct,
contributing, sponsored-content.

#### Additional checks

| Check ID       | Selector / Test                                                       | Severity | Pass                             | Fail             |
| -------------- | --------------------------------------------------------------------- | -------- | -------------------------------- | ---------------- |
| `disc-idx-001` | `main` with aria-label containing "Disclosures"                       | ERROR    | `main[aria-label="Disclosures"]` | Wrong or missing |
| `disc-idx-002` | At least 6 disclosure links present (matching footer disclosure list) | WARN     | 6 disclosure links               | Fewer links      |

---

### 12. `disclosure-detail`

**Routes**: `/disclosures/:slug`  
**Output**: `docs/disclosures/*.html`

**Title pattern**: `[Disclosure Name] | AccessiTech`

**`main` aria-label**: disclosure name (e.g. `"Accessibility Statement"`)

#### Additional checks

| Check ID       | Selector / Test                                         | Severity | Pass                                    | Fail     |
| -------------- | ------------------------------------------------------- | -------- | --------------------------------------- | -------- |
| `disc-det-001` | `nav[aria-label="breadcrumb"]` present                  | ERROR    | Breadcrumb: Home > Disclosures > [Name] | Absent   |
| `disc-det-002` | `h2` element with disclosure title present              | ERROR    | Disclosure heading                      | Absent   |
| `disc-det-003` | `main[aria-label]` matches the page's primary `h2` text | ERROR    | Label and h2 match                      | Mismatch |

---

### 13. `404`

**Routes**: `/404`  
**Output**: `docs/404.html`  
**Meta source**: `src/App/meta.ts` (shared with home and contact — index 2 in `staticMetaData`)

**Title pattern**: verify against rendered HTML (likely `"404 | AccessiTech"` or `"Page Not Found | AccessiTech"`)

**`main` aria-label**: `"404"` or `"Page Not Found"` _(verify against rendered HTML)_

#### Additional checks

| Check ID  | Selector / Test                                                         | Severity | Pass                           | Fail                                   |
| --------- | ----------------------------------------------------------------------- | -------- | ------------------------------ | -------------------------------------- |
| `404-001` | `main` with aria-label containing "404" or "Not Found"                  | ERROR    | `main[aria-label="404"]`       | Wrong or missing                       |
| `404-002` | A link back to `/` (Home) is present in `main` content                  | WARN     | `<a href="/">` in main content | No home link — dead end for lost users |
| `404-003` | `og:url` and `link[rel="canonical"]` start with `https://accessi.tech/` | ERROR    | `https://accessi.tech/404`     | Wrong domain                           |

---

## Content Source Matrix

This table documents the **canonical source** for each data field per page type. When the HTML
output diverges from its canonical source, the canonical source wins.

| Field                   | `home`            | `blog-index`             | `wcag-index`                  | `blog-entry`           | `services-*`                   | `service-detail`                  | `products-*`                   | `product-detail`               | `contact`         | `disclosures-*`                 | `404`             |
| ----------------------- | ----------------- | ------------------------ | ----------------------------- | ---------------------- | ------------------------------ | --------------------------------- | ------------------------------ | ------------------------------ | ----------------- | ------------------------------- | ----------------- |
| `<title>`               | `src/App/meta.ts` | `src/pages/Blog/meta.ts` | `src/pages/Blog/wcag-meta.ts` | MD front-matter        | `src/pages/Services/*-meta.ts` | `src/pages/Services/**/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/App/meta.ts` | `src/pages/Disclosures/meta.ts` | `src/App/meta.ts` |
| `og:title`              | `src/App/meta.ts` | `src/pages/Blog/meta.ts` | `src/pages/Blog/wcag-meta.ts` | MD front-matter        | `src/pages/Services/*-meta.ts` | `src/pages/Services/**/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/App/meta.ts` | `src/pages/Disclosures/meta.ts` | `src/App/meta.ts` |
| `og:description`        | `src/App/meta.ts` | `src/pages/Blog/meta.ts` | `src/pages/Blog/wcag-meta.ts` | MD front-matter        | `src/pages/Services/*-meta.ts` | `src/pages/Services/**/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/App/meta.ts` | `src/pages/Disclosures/meta.ts` | `src/App/meta.ts` |
| `og:url`                | `src/App/meta.ts` | `src/pages/Blog/meta.ts` | `src/pages/Blog/wcag-meta.ts` | **MD front-matter** ⚠️ | `src/pages/Services/*-meta.ts` | `src/pages/Services/**/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/App/meta.ts` | `src/pages/Disclosures/meta.ts` | `src/App/meta.ts` |
| `link[rel="canonical"]` | `src/App/meta.ts` | `src/pages/Blog/meta.ts` | `src/pages/Blog/wcag-meta.ts` | **MD front-matter** ⚠️ | `src/pages/Services/*-meta.ts` | `src/pages/Services/**/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/App/meta.ts` | `src/pages/Disclosures/meta.ts` | `src/App/meta.ts` |
| `og:image`              | `src/App/meta.ts` | `src/pages/Blog/meta.ts` | `src/pages/Blog/wcag-meta.ts` | MD front-matter        | `src/pages/Services/*-meta.ts` | `src/pages/Services/**/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/pages/Products/*-meta.ts` | `src/App/meta.ts` | `src/pages/Disclosures/meta.ts` | `src/App/meta.ts` |
| `main[aria-label]`      | SSG render        | SSG render               | SSG render                    | SSG render             | SSG render                     | SSG render                        | SSG render                     | SSG render                     | SSG render        | SSG render                      | SSG render        |

**⚠️ Blog entry canonical/og:url**: The blog entry MD files at `public/data/blog/*.md` use HTML
comment front-matter (`<!-- key: value -->`) to provide per-entry metadata. The `og:url` and
`canonical` values in the compiled output come from this front-matter. Several existing MD files
incorrectly specify `https://accessitech.org/` as the base domain. **Canonical source for blog
entry URL fields is MD front-matter, and those MD files must be corrected to use
`https://accessi.tech/`.**

---

## Front-Matter Standardization Note

### Current Format: HTML Comment Blocks

Blog/WCAG entry Markdown files in `public/data/blog/*.md` use an HTML comment-based front-matter
format:

```html
<!-- title: AI for Coding Accessibility -->
<!-- description: How developers with disabilities... -->
<!-- og:url: https://accessitech.org/blog/AI-for-Coding-Accessibility -->
<!-- og:image: https://accessi.tech/assets/images/AI-for-Coding-Accessibility.png -->
```

This is a non-standard format specific to this SSG implementation. It is parsed by the FE app's
Markdown processing pipeline.

### Recommended Format: YAML Front-Matter

The de-facto standard for Markdown-based CMS systems (Jekyll, Hugo, Gatsby, Contentlayer,
Astro, and the broader SSG ecosystem) is YAML front-matter delimited by `---`:

```yaml
---
title: 'AI for Coding Accessibility: How Tools Like Copilot Help Me Ship Code Despite Chronic Pain'
description: 'How developers with disabilities use AI like Copilot...'
og_url: 'https://accessi.tech/blog/AI-for-Coding-Accessibility'
og_image: 'https://accessi.tech/assets/images/AI-for-Coding-Accessibility.png'
date: '2025-04-08'
---
```

### Migration Recommendation

Migrate `public/data/blog/*.md` from HTML comment front-matter to YAML front-matter. This:

- Aligns with ecosystem standards (tooling support, syntax highlighting, linting)
- Makes front-matter values parseable by standard Markdown processors without custom regex
- Eliminates the risk of HTML comment delimiters being stripped or corrupted by Markdown renderers
- Enables future use of tools like `gray-matter`, `remark-frontmatter`, or Contentlayer

**This migration is a separate refactor** — it requires updating both the Markdown files and the
FE parsing logic. This spec anticipates the migration: `qa_html.py` checks should validate
compiled HTML output values, not the MD source format. However, the QA script should log a
`WARN` if it detects `<!-- title:` patterns in source MD files (indicating pre-migration state).

**Bug to fix before migration**: Correct `og:url` and `canonical` values in existing MD files to
use `https://accessi.tech/` instead of `https://accessitech.org/`. This fix can be applied
independently of the YAML migration.

---

## MD Source Validation (`--check-sources` flag)

When `qa_html.py` is invoked with `--check-sources`, it runs three validation layers:

- **Layer 1** — Source file checks on `public/data/blog/*.md` before or independent of the build.
  Catches bugs at the source so they don't reach the HTML output.
- **Layer 2** — HTML output checks (the standard checks defined above — always run).
- **Layer 3** — Cross-reference checks: compare MD source values against compiled HTML output
  to detect divergence between the two sources of truth.

**A11y note**: Pa11y CI is already configured in this repo and covers WCAG/axe checks.
`qa_html.py` does NOT duplicate a11y rules Pa11y owns. Scope: structural, SEO, canonical domain,
and content consistency only.

---

### MD Front-Matter Field Inventory

All blog/WCAG entries in `public/data/blog/*.md` use **HTML comment front-matter** format:

```html
<!--
title: <post title>
description: <meta description>
keywords: <comma-separated tags>
date: YYYY-MM-DD
image: <filename.png>       ← no path prefix; build resolves to /assets/images/<filename>
imageAlt: <alt text>
status: published | draft | unpublished
next: /blog/<Slug>, <Link Text>      ← optional
previous: /blog/<Slug>, <Link Text>  ← optional
series: <Series Name>                ← optional
-->
```

> **Note**: MD files do NOT contain `og:url` or `canonical` fields. These are generated at
> build time from `ssg.config.js productionUrlBase` + the route path. The `accessitech.org`
> canonical domain bug originates in the SSG build logic, not the MD source files.

---

### Layer 1 — MD Source Checks

Apply to every `.md` file in `public/data/blog/`. Check IDs prefixed `src-`.

| Check ID  | Test                                                          | Severity                    | Pass                                   | Fail                                                                              |
| --------- | ------------------------------------------------------------- | --------------------------- | -------------------------------------- | --------------------------------------------------------------------------------- |
| `src-001` | `title` field present and non-empty                           | ERROR                       | `title: AI for Coding Accessibility…`  | Missing or empty                                                                  |
| `src-002` | `description` field present and non-empty                     | ERROR                       | Description text present               | Missing                                                                           |
| `src-003` | `date` field present and matches `YYYY-MM-DD` format          | ERROR                       | `2025-04-08`                           | Absent or wrong format                                                            |
| `src-004` | `image` field present and non-empty                           | WARN                        | `AI-for-Coding-Accessibility.png`      | Missing — og:image will be absent in output                                       |
| `src-005` | `imageAlt` field present and non-empty                        | WARN                        | `Yellow text on dark blue background…` | Missing — no alt text for social image                                            |
| `src-006` | `status` field is one of: `published`, `draft`, `unpublished` | ERROR                       | `published`                            | Unknown value                                                                     |
| `src-007` | `title` length ≤ 70 chars                                     | WARN                        | Short title                            | Truncated in SERPs / social previews                                              |
| `src-008` | `description` length 50–160 chars                             | WARN                        | 120-char description                   | Too short or truncated                                                            |
| `src-009` | `keywords` field present                                      | WARN                        | Comma-separated keywords               | Missing — SEO signal absent                                                       |
| `src-010` | Front-matter uses HTML comment block (`<!--`) format          | WARN (pre-migration signal) | `<!--\ntitle: …\n-->`                  | Log: "pre-YAML-migration format detected" — see Front-Matter Standardization Note |
| `src-011` | `next` field (if present) href starts with `/blog/`           | WARN                        | `/blog/Introduction-to-WCAG…, Title`   | External or malformed href                                                        |
| `src-012` | `previous` field (if present) href starts with `/blog/`       | WARN                        | `/blog/AI-for-Coding…, Title`          | External or malformed href                                                        |

---

### Layer 3 — Cross-Reference Checks (MD source vs HTML output)

Apply to `blog-entry` page type only — these compare values in `public/data/blog/<Slug>.md`
against the compiled `docs/blog/<Slug>.html`.

**Slug mapping**: the MD filename stem (e.g. `AI-for-Coding-Accessibility`) must match the HTML
filename stem (e.g. `docs/blog/AI-for-Coding-Accessibility.html`).

| Check ID   | Test                                                                                   | Severity | Pass                                                                             | Fail                                                    |
| ---------- | -------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `xref-001` | HTML `<title>` text matches MD `title` field (normalize whitespace)                    | ERROR    | Both: `AI for Coding Accessibility: …`                                           | Diverged — source and output out of sync                |
| `xref-002` | HTML `og:description` matches MD `description` field                                   | WARN     | Both: same description text                                                      | Diverged — content updated in one source only           |
| `xref-003` | HTML `og:image` URL contains MD `image` filename                                       | WARN     | HTML: `…/AI-for-Coding-Accessibility.png`; MD: `AI-for-Coding-Accessibility.png` | Image filename mismatch                                 |
| `xref-004` | HTML `link[rel="canonical"]` href uses `https://accessi.tech/` (not `accessitech.org`) | ERROR    | `https://accessi.tech/blog/AI-for-Coding-Accessibility`                          | `https://accessitech.org/blog/…` — canonical domain bug |
| `xref-005` | HTML `og:url` uses `https://accessi.tech/` (not `accessitech.org`)                     | ERROR    | `https://accessi.tech/blog/…`                                                    | `https://accessitech.org/blog/…` — canonical domain bug |
| `xref-006` | MD `status` is `published` for every file that has a corresponding HTML output         | WARN     | MD `status: published`, HTML file exists                                         | MD `status: draft` but HTML exists — draft page is live |

---

### Layer 1 Extended — Text Quality Checks

These checks apply when `--check-sources` is enabled. They analyse the **body prose** of
`public/data/blog/*.md` and `public/data/wcag/*.md` using the `textstat` library (pure Python,
no ML dependencies). Front-matter is stripped before scoring; headings, bold markers, links, and
code fences are also stripped so only prose prose is analysed.

Scores are diagnostic signals, not hard pass/fail gates. All findings are **WARN** severity.
Target audience: developers and accessibility practitioners — content should be clear but may
contain technical vocabulary; a grade 8–12 target (FK Grade) is appropriate.

| Check ID   | Metric / Test                                                         | Severity | Target / Pass                         | Fail condition                                  |
| ---------- | --------------------------------------------------------------------- | -------- | ------------------------------------- | ----------------------------------------------- |
| `qual-001` | Body word count                                                       | WARN     | ≥ 200 words of prose                  | < 200 words — thin content                      |
| `qual-002` | Flesch-Kincaid Grade Level (`textstat.flesch_kincaid_grade`)          | WARN     | ≤ 14 (roughly postgraduate threshold) | > 14 — overly complex for web audience          |
| `qual-003` | Flesch Reading Ease (`textstat.flesch_reading_ease`)                  | WARN     | ≥ 30 (fairly difficult or better)     | < 30 — "very difficult" band                    |
| `qual-004` | Average sentence length (`textstat.avg_sentence_length`)              | WARN     | ≤ 30 words / sentence                 | > 30 words avg — overly long sentences          |
| `qual-005` | Duplicate paragraph detection (same paragraph appears > once in file) | WARN     | No verbatim duplicates (> 80 chars)   | One or more paragraphs appear twice in the file |

**Flesch Reading Ease interpretation** (for reference):

| Score  | Description       |
| ------ | ----------------- |
| 90–100 | Very easy         |
| 70–90  | Easy              |
| 60–70  | Standard          |
| 50–60  | Fairly difficult  |
| 30–50  | Difficult         |
| 0–30   | Very difficult ⚠️ |

**Implementation notes**:

- `textstat` must be installed (`pip install textstat>=0.7.3`) for these checks to run. If
  `textstat` is not importable, `check_md_readability()` returns an empty list silently.
- Scores are only computed when `word_count >= 100` to avoid noise from very short files.
- `qual-005` duplicate detection ignores paragraphs ≤ 80 characters (prevents false positives
  on short repeated phrases like summary bullets).

---

### `--check-sources` Behavior Summary

| Run mode                                              | Layers active                                  | Scope                                                                               |
| ----------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| `python scripts/qa_html.py` (default)                 | Layer 2 only                                   | All `docs/*.html` files                                                             |
| `python scripts/qa_html.py --check-sources`           | Layer 1 + Layer 1 Extended + Layer 2 + Layer 3 | `docs/*.html` + `public/data/blog/*.md` + `public/data/wcag/*.md` + cross-reference |
| `python scripts/qa_html.py --check-sources --dry-run` | Layer 1 + Layer 1 Extended + Layer 2 + Layer 3 | As above; no file writes                                                            |

**Exit codes** (consistent with ruff convention):

- `0` — all checks pass (or only INFO findings)
- `1` — one or more ERROR findings
- `2` — one or more WARN findings, zero ERROR findings

---

## Known Issues (as of spec creation — 2026-04-22)

| Issue                                                      | Affected Pages                       | Severity | Check ID                                                       |
| ---------------------------------------------------------- | ------------------------------------ | -------- | -------------------------------------------------------------- |
| `og:url` and `canonical` use `accessitech.org` (not owned) | Several `docs/blog/*.html` entries   | ERROR    | `og-004`, `canon-002`, `blog-007`                              |
| Blog entry MD front-matter uses HTML comment format        | `public/data/blog/*.md`              | WARN     | N/A — source format, not output                                |
| 404 and contact pages share `src/App/meta.ts` with home    | `docs/404.html`, `docs/contact.html` | WARN     | `struct-003`, `og-001` — verify titles are overridden per page |

---

_This spec is the authoritative reference for `scripts/qa_html.py`. Update this file when checks
are added, page types change, or new bugs are discovered. Do not update the QA script without
a corresponding update to this spec._

---

## TypeScript Page Component Annotation Pattern (`@qa-spec`)

**Purpose**: Provide developers with a lightweight way to link a page component to its QA spec
entry, so that `testing/qa-page-specs.md` checks are visible in the IDE without leaving the source.

This is a documentation convention — it is NOT enforced programmatically. Future tooling can parse
these annotations to generate per-component check summaries.

### Format

Add a JSDoc `@qa-spec` comment block near the top of `src/pages/<Page>/index.tsx`:

```tsx
/**
 * @qa-spec home
 * @qa-checks home-001, home-002, home-003, home-004
 * @qa-source testing/qa-page-specs.md § home
 *
 * Known issues: none
 * Last QA run: see public/data/blog/*.md qa_status front-matter for blog entries.
 */
```

### Field Definitions

| Field           | Value                                                                 | Required    |
| --------------- | --------------------------------------------------------------------- | ----------- |
| `@qa-spec`      | Page type from `testing/qa-page-specs.md` (e.g. `home`, `blog-entry`) | Yes         |
| `@qa-checks`    | Comma-separated check IDs for this page type                          | Yes         |
| `@qa-source`    | Relative path + section heading to the spec entry                     | Yes         |
| `Known issues:` | Free text, or `none`                                                  | Recommended |
| `Last QA run:`  | ISO date, or pointer to MD front-matter for dynamic pages             | Optional    |

### Example — Blog Entry Page

```tsx
/**
 * @qa-spec blog-entry
 * @qa-checks blog-001, blog-002, blog-003, blog-004, blog-005, blog-006, blog-007
 * @qa-source testing/qa-page-specs.md § blog-entry
 *
 * Known issues: og:url and canonical use accessitech.org (check xref-004, xref-005) — fix in SSG config.
 * Last QA run: see public/data/blog/<slug>.md qa_status comment for per-entry status.
 */
```

### Scope

This annotation pattern applies to pages that have a defined `page_type` in the spec:
`home`, `blog-index`, `wcag-index`, `blog-entry`, `services-index`, `services-category`,
`service-detail`, `products-index`, `product-detail`, `contact`, `disclosures-index`,
`disclosure-detail`, `404`.

This is **documentation only** — no automated enforcement in the current sprint. The
`qa_html.py` script validates compiled HTML output, not TypeScript source files.
