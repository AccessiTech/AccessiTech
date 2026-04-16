# WCAG 2.2 AA Compliance Reference

**Status**: Living document  
**Scope**: AccessiTech React SPA (`src/` components and pages)  
**Standard**: [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/)  
**Test stack**: Vitest + React Testing Library + jest-axe + manual verification

---

## Purpose

This document maps each WCAG 2.2 Level A and AA Success Criterion (SC) to:

- The AccessiTech components that implement or must implement it
- The automated test that covers it (where possible)
- The manual verification method for criteria that cannot be automated

A criterion marked **No automated test** requires manual verification per the protocol in the final column.

---

## Principle 1: Perceivable

Information and UI components must be presentable to users in ways they can perceive.

### 1.1 Text Alternatives

| SC    | Level | Name             | Component(s)                                                   | Automated test                                    | Manual verification                                                       |
| ----- | ----- | ---------------- | -------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------- |
| 1.1.1 | A     | Non-text Content | All `<img>` elements; `Blog` entry images; Metadata `og:image` | axe `image-alt` rule (jest-axe on all page tests) | Inspect `alt` attribute values; verify descriptive text not just filename |

### 1.2 Time-Based Media

| SC    | Level | Name                                   | Component(s)          | Automated test | Manual verification                         |
| ----- | ----- | -------------------------------------- | --------------------- | -------------- | ------------------------------------------- |
| 1.2.1 | A     | Audio-only / Video-only (prerecorded)  | Not currently present | N/A            | Verify if embedded media added in future    |
| 1.2.2 | A     | Captions (prerecorded)                 | Not currently present | N/A            | Verify captions on any future video content |
| 1.2.3 | A     | Audio Description or Media Alternative | Not currently present | N/A            | —                                           |
| 1.2.4 | AA    | Captions (live)                        | Not currently present | N/A            | —                                           |
| 1.2.5 | AA    | Audio Description (prerecorded)        | Not currently present | N/A            | —                                           |

### 1.3 Adaptable

| SC    | Level | Name                    | Component(s)                                              | Automated test                                         | Manual verification                                                                      |
| ----- | ----- | ----------------------- | --------------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 1.3.1 | A     | Info and Relationships  | All landmark, heading, list structures                    | axe `region`, `heading-order`, `list` rules (jest-axe) | Verify ARIA roles match visual hierarchy; no ARIA overrides native semantics incorrectly |
| 1.3.2 | A     | Meaningful Sequence     | Page content order                                        | axe auto; DOM order check                              | Tab through page — verify reading order matches visual order                             |
| 1.3.3 | A     | Sensory Characteristics | No instructions that rely solely on shape/colour/position | Code review                                            | Verify filter labels use text, not icon-only signals                                     |
| 1.3.4 | AA    | Orientation             | App renders in both portrait and landscape                | Not automated                                          | Rotate device or resize window; verify no content is locked to one orientation           |
| 1.3.5 | AA    | Identify Input Purpose  | Contact form inputs                                       | `autocomplete` attributes on form inputs               | Verify `autocomplete="email"`, `autocomplete="name"` present on contact form             |

### 1.4 Distinguishable

| SC     | Level | Name                      | Component(s)                                         | Automated test              | Manual verification                                                                                                         |
| ------ | ----- | ------------------------- | ---------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1.4.1  | A     | Use of Colour             | Filter badges, category/tag badges, Nav active state | axe colour rules (jest-axe) | Verify category/tag selection state is communicated via text or shape, not colour alone — `aria-pressed` provides state: ✅ |
| 1.4.2  | A     | Audio Control             | No auto-playing audio currently                      | N/A                         | Verify if audio is added in future                                                                                          |
| 1.4.3  | AA    | Contrast (Minimum)        | All text elements                                    | No automated test (JSDOM)   | axe DevTools in browser; verify ≥ 4.5:1 normal text, ≥ 3:1 large text                                                       |
| 1.4.4  | AA    | Resize Text               | All text                                             | No automated test           | Zoom browser to 200% — verify no text is clipped or overlapping                                                             |
| 1.4.5  | AA    | Images of Text            | No images of text in current design                  | N/A                         | Verify any decorative image of text is not the only way to convey information                                               |
| 1.4.10 | AA    | Reflow                    | All pages                                            | No automated test           | At 320px viewport width — verify no horizontal scrollbar (except data tables)                                               |
| 1.4.11 | AA    | Non-text Contrast         | Filter buttons, CTA buttons, focus indicators        | No automated test (JSDOM)   | axe DevTools → verify ≥ 3:1 contrast for button borders, focus indicators                                                   |
| 1.4.12 | AA    | Text Spacing              | All text                                             | No automated test           | Apply: `letter-spacing: 0.12em; word-spacing: 0.16em; line-height: 1.5` — verify no content loss                            |
| 1.4.13 | AA    | Content on Hover or Focus | Tooltips, hover states                               | No automated test           | Hover over elements with hover styles — verify content is dismissible, hoverable, persistent                                |

---

## Principle 2: Operable

UI components and navigation must be operable.

### 2.1 Keyboard Accessible

| SC    | Level | Name                    | Component(s)                                            | Automated test                                                              | Manual verification                                                    |
| ----- | ----- | ----------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 2.1.1 | A     | Keyboard                | All interactive elements                                | `fireEvent.click` tests on all interactive elements cover basic operability | Tab through every page; verify all functionality reachable by keyboard |
| 2.1.2 | A     | No Keyboard Trap        | All modals, dropdowns, custom widgets                   | axe `scrollable-region-focusable` rule                                      | Verify Tab can exit all focusable regions                              |
| 2.1.4 | AA    | Character Key Shortcuts | No single-character shortcuts in current implementation | N/A                                                                         | Verify if shortcuts are added they can be remapped or toggled          |

### 2.2 Enough Time

| SC    | Level | Name              | Component(s)                          | Automated test    | Manual verification                                                                                                                        |
| ----- | ----- | ----------------- | ------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.2.1 | A     | Timing Adjustable | Blog RSS fetch timeout                | No automated test | Verify RSS fetch failure shows user-facing fallback message ("No blog entries found.") — `Blog.test.tsx` covers the empty-state message ✅ |
| 2.2.2 | A     | Pause, Stop, Hide | No moving/scrolling content currently | N/A               | Verify if animations or carousels are added in future                                                                                      |

### 2.3 Seizures and Physical Reactions

| SC    | Level | Name                             | Component(s)        | Automated test | Manual verification                                                            |
| ----- | ----- | -------------------------------- | ------------------- | -------------- | ------------------------------------------------------------------------------ |
| 2.3.1 | A     | Three Flashes or Below Threshold | No flashing content | N/A            | Verify with Photosensitive Epilepsy Analysis Tool (PEAT) if animation is added |

### 2.4 Navigable

| SC     | Level | Name                          | Component(s)                            | Automated test                                                  | Manual verification                                                                         |
| ------ | ----- | ----------------------------- | --------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 2.4.1  | A     | Bypass Blocks                 | `#main` skip link anchor                | `id="main"` present on `<main>` in Blog, BlogEntry, ProductPage | Verify skip link is first focusable element on each page; verify it is visible on focus     |
| 2.4.2  | A     | Page Titled                   | All pages via `<Helmet>` / `<Metadata>` | Metadata component tests (every page) verify `<title>` tag      | —                                                                                           |
| 2.4.3  | A     | Focus Order                   | Tab order matches visual/reading order  | `fireEvent.click` tests verify logical structure                | Tab through page; verify focus order is logical and predictable                             |
| 2.4.4  | A     | Link Purpose (in context)     | All `<Link>` and `<a>` elements         | `getByRole('link', { name: '...' })` in all test files          | Verify no "click here" or "read more" link text; all links have descriptive text in context |
| 2.4.5  | AA    | Multiple Ways                 | Site nav + blog breadcrumb              | Nav tests in `Header.test.tsx`                                  | Verify users can reach any page via ≥2 methods (nav + breadcrumb / sitemap)                 |
| 2.4.6  | AA    | Headings and Labels           | All headings                            | `getByRole('heading', { level, name })` tests                   | Verify all headings describe their section; no placeholder headings                         |
| 2.4.7  | AA    | Focus Visible                 | All focusable elements                  | No automated test (JSDOM)                                       | Tab through page; verify each focused element has a visible focus ring                      |
| 2.4.11 | AA    | Focus Not Obscured (Minimum)  | All sticky/fixed elements               | No automated test                                               | Verify fixed header does not obscure focused elements below the fold                        |
| 2.4.12 | AA    | Focus Not Obscured (Enhanced) | As above (AAA, informational)           | N/A                                                             | —                                                                                           |

### 2.5 Input Modalities

| SC    | Level | Name                  | Component(s)                      | Automated test                              | Manual verification                                                                              |
| ----- | ----- | --------------------- | --------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 2.5.1 | A     | Pointer Gestures      | No multi-point gestures           | N/A                                         | —                                                                                                |
| 2.5.2 | A     | Pointer Cancellation  | All button click handlers         | `e.preventDefault()` on breadcrumb links ✅ | Verify no "mousedown" only activations — all use "click" or "mouseup"                            |
| 2.5.3 | A     | Label in Name         | All filter buttons                | `aria-label` matches visible text           | `BlogFilters.test.tsx` — verify `aria-label="Filter by category: {cat}"` contains category name  |
| 2.5.4 | A     | Motion Actuation      | No motion-activated functionality | N/A                                         | —                                                                                                |
| 2.5.7 | AA    | Dragging Movements    | No drag functionality             | N/A                                         | —                                                                                                |
| 2.5.8 | AA    | Target Size (Minimum) | All buttons ≥ 24×24 CSS px        | No automated test                           | Inspect element dimensions in DevTools; Bootstrap `size="sm"` buttons — verify they meet minimum |

---

## Principle 3: Understandable

Information and UI components must be understandable.

### 3.1 Readable

| SC    | Level | Name              | Component(s)                          | Automated test    | Manual verification                               |
| ----- | ----- | ----------------- | ------------------------------------- | ----------------- | ------------------------------------------------- |
| 3.1.1 | A     | Language of Page  | `<html lang="en">` in `index.html`    | No automated test | Inspect HTML source; verify `lang="en"` is set    |
| 3.1.2 | AA    | Language of Parts | No foreign language content currently | N/A               | Verify if multilingual content is added in future |

### 3.2 Predictable

| SC    | Level | Name                      | Component(s)                                    | Automated test                                                                      | Manual verification                                                             |
| ----- | ----- | ------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 3.2.1 | A     | On Focus                  | No focus-triggered context changes              | No automated test                                                                   | Tab through interactive elements; verify no page reloads or navigation on focus |
| 3.2.2 | A     | On Input                  | Filter buttons change state but do not navigate | `BlogFilters.test.tsx` — clicking filter updates aria-pressed, does not navigate ✅ | Verify no unexpected navigation from form input                                 |
| 3.2.3 | AA    | Consistent Navigation     | `<Header>` consistent across all pages          | `Header.test.tsx`                                                                   | Verify header nav order identical on all pages                                  |
| 3.2.4 | AA    | Consistent Identification | Filter buttons, CTAs labelled consistently      | Label match in test assertions                                                      | Verify same component has same accessible name across pages                     |
| 3.2.6 | AA    | Consistent Help           | Contact link in footer/nav                      | `Footer.test.tsx` / `Header.test.tsx`                                               | Verify contact mechanism is consistently present                                |

### 3.3 Input Assistance

| SC    | Level | Name                                | Component(s)                   | Automated test                               | Manual verification                                                               |
| ----- | ----- | ----------------------------------- | ------------------------------ | -------------------------------------------- | --------------------------------------------------------------------------------- |
| 3.3.1 | A     | Error Identification                | Contact form                   | `Contact.test.tsx` — error state tests       | Verify error messages identify which field failed                                 |
| 3.3.2 | A     | Labels or Instructions              | Contact form                   | `Contact.test.tsx` — label association tests | Verify all form inputs have visible labels                                        |
| 3.3.7 | A     | Redundant Entry                     | Contact form (new in WCAG 2.2) | N/A currently                                | Verify if multi-step form is added — previously entered data is pre-filled        |
| 3.3.8 | AA    | Accessible Authentication (Minimum) | Contact form (new in WCAG 2.2) | N/A currently                                | Verify no cognitive function test required (CAPTCHA) unless alternatives provided |

---

## Principle 4: Robust

Content must be robust enough to be interpreted by a wide variety of user agents.

### 4.1 Compatible

| SC    | Level | Name              | Component(s)                     | Automated test                                                         | Manual verification                                                                        |
| ----- | ----- | ----------------- | -------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 4.1.2 | A     | Name, Role, Value | All interactive elements         | axe `button-name`, `link-name`, `aria-*` rules (jest-axe on all pages) | Inspect ARIA tree; verify all interactive elements have accessible names and correct roles |
| 4.1.3 | AA    | Status Messages   | "No blog entries found." message | `Blog.test.tsx` — empty state text is present ✅                       | Verify status messages use `role="status"` or `aria-live` to be announced without focus    |

---

## WCAG 2.2 New Criteria Summary

WCAG 2.2 added these criteria vs WCAG 2.1:

| SC     | Level | Name                                | Current status                                            |
| ------ | ----- | ----------------------------------- | --------------------------------------------------------- |
| 2.4.11 | AA    | Focus Not Obscured (Minimum)        | Manual verification needed — fixed header may overlap     |
| 2.4.12 | AA    | Focus Not Obscured (Enhanced)       | AAA — informational only                                  |
| 2.5.7  | AA    | Dragging Movements                  | Not applicable — no drag interactions                     |
| 2.5.8  | AA    | Target Size (Minimum)               | Manual check — Bootstrap `sm` buttons should meet 24×24px |
| 3.2.6  | AA    | Consistent Help                     | Contact accessible in both Header nav and Footer          |
| 3.3.7  | A     | Redundant Entry                     | Not applicable — single-step form                         |
| 3.3.8  | AA    | Accessible Authentication (Minimum) | No CAPTCHA currently — compliant                          |

---

## Automated Test Coverage Matrix

| WCAG SC                      | Automated (jest-axe)              | Automated (RTL assertions)                       | Manual only                |
| ---------------------------- | --------------------------------- | ------------------------------------------------ | -------------------------- |
| 1.1.1 Non-text Content       | ✅ axe image-alt                  | —                                                | Descriptive alt quality    |
| 1.3.1 Info and Relationships | ✅ axe region/list/heading        | `getByRole` assertions                           | Structure edge cases       |
| 1.4.3 Contrast (Min.)        | ❌ (JSDOM limitation)             | —                                                | ✅ Browser axe DevTools    |
| 1.4.11 Non-text Contrast     | ❌                                | —                                                | ✅ Manual                  |
| 2.1.1 Keyboard               | Partial (axe keyboard-accessible) | ✅ `fireEvent.click` on all interactive elements | Tab traversal              |
| 2.4.1 Bypass Blocks          | —                                 | ✅ `id="main"` present                           | Skip link visibility       |
| 2.4.2 Page Titled            | —                                 | ✅ Metadata component tests                      | —                          |
| 2.4.4 Link Purpose           | —                                 | ✅ `getByRole('link', { name })`                 | —                          |
| 2.4.7 Focus Visible          | ❌                                | —                                                | ✅ Manual tab test         |
| 2.5.3 Label in Name          | —                                 | ✅ aria-label contains visible text              | —                          |
| 3.3.1 Error Identification   | —                                 | ✅ Contact form tests                            | —                          |
| 4.1.2 Name, Role, Value      | ✅ axe button-name/link-name      | ✅ `getByRole`/`getByLabelText`                  | —                          |
| 4.1.3 Status Messages        | —                                 | ✅ "No blog entries found."                      | `aria-live` presence check |

---

## Running Automated Compliance Checks

```bash
# Full test suite with coverage — catches axe violations inline
yarn test --coverage

# Run only tests that include axe audit assertions
grep -rl "checkAccessibility\|toHaveNoViolations\|axe" src/ --include="*.test.*"

# Per-component axe audit (verbose)
yarn test src/pages/Home/__tests__/Home.test.tsx --reporter=verbose
```

**For browser-level axe audit** (catches colour contrast, which JSDOM cannot):

1. Install [axe DevTools](https://www.deque.com/axe/devtools/) Chrome extension
2. Open each page in development: `yarn dev`
3. Run axe scan on each route: `/`, `/blog`, `/wcag`, `/contact`, `/products/wcag-series`, `/products/oss-asaaps`, `/products/cccs`
4. Export results to CSV for issue tracking

---

## Known Gaps and Remediation Backlog

| Issue                                                                 | SC            | Priority | Status             |
| --------------------------------------------------------------------- | ------------- | -------- | ------------------ |
| `aria-live` region missing on "No blog entries found." status message | 4.1.3         | Medium   | Open               |
| Skip-to-main-content link visibility on focus not verified end-to-end | 2.4.1         | High     | Open               |
| Colour contrast not verified in CI (JSDOM limitation)                 | 1.4.3, 1.4.11 | High     | Open (manual only) |
| Contact form `autocomplete` attributes not audited                    | 1.3.5         | Medium   | Open               |
| Fixed header overlap of focused elements not tested                   | 2.4.11        | Medium   | Open               |
| Bootstrap `sm` button target size verification                        | 2.5.8         | Low      | Open               |
