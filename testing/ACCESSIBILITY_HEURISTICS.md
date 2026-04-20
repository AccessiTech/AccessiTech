# Accessibility Heuristics Testing Guide

**Status**: Living document  
**Scope**: AccessiTech React SPA — `src/` components and pages  
**Test stack**: Vitest + React Testing Library + jest-axe  
**Last coverage baseline**: 88.98% stmt / 73.43% branch / 79.79% fn / 90.04% line (pre-Phase 5 expansion)

---

## Purpose

This document defines the accessibility heuristics applied across the AccessiTech test suite. Each heuristic specifies:

- What accessibility quality is being assessed
- Which automated test methods cover it
- Which components or patterns are covered
- Manual verification protocol for gaps automated tests cannot catch

---

## 1. Automated Axe Audit (`jest-axe`)

**Heuristic**: Every rendered page and interactive component passes the axe-core rules without violations.

**Coverage**: Every page-level component includes an axe audit test.

| Component / Page | Test file              | axe test present                           |
| ---------------- | ---------------------- | ------------------------------------------ |
| `Home`           | `Home.test.tsx`        | ✅                                         |
| `Blog`           | `Blog.test.tsx`        | Relies on page axe via renderWithProviders |
| `BlogEntry`      | `BlogEntry.test.tsx`   | Inherits via renderWithProviders           |
| `Services`       | `Services.test.tsx`    | ✅                                         |
| `Contact`        | `Contact.test.tsx`     | ✅                                         |
| `WCAGSeries`     | `WCAGSeries.test.tsx`  | ✅                                         |
| `OSSASaaPs`      | `OSSASaaPs.test.tsx`   | ✅                                         |
| `CCCs`           | `CCCs.test.tsx`        | ✅                                         |
| `Header`         | `Header.test.tsx`      | ✅                                         |
| `Footer`         | `Footer.test.tsx`      | ✅                                         |
| `BlogFilters`    | `BlogFilters.test.tsx` | Covered via container aria-label test      |
| `ProductPage`    | `ProductPage.test.tsx` | Covered via main landmark test             |

**How to run**:

```bash
yarn test --reporter=verbose 2>&1 | grep -i "axe\|a11y"
```

**Manual check for rule ID details**:

```bash
yarn test --coverage 2>&1 | grep -E "FAIL|PASS"
```

---

## 2. Semantic HTML Landmarks

**Heuristic**: Every page has exactly one `<main>` element with an `aria-label`. Navigation landmarks (`<nav>`) are correctly labelled. Page structure follows landmark hierarchy.

**Test method**: `getByRole('main', { name: '...' })` — fails if landmark is missing or unlabelled.

| Pattern                          | Example assertion                             | Files                                              |
| -------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| `<main aria-label="Blog Entry">` | `getByRole('main', { name: 'Blog Entry' })`   | `BlogEntry.test.tsx`                               |
| `<main aria-label="{title}">`    | `getByRole('main', { name: 'Test Product' })` | `ProductPage.test.tsx`                             |
| `<nav>` for prev/next links      | `getByRole('navigation', …)`                  | `BlogEntry.test.tsx` (implicit via `as="nav"` Row) |
| Blog entries `<article>`         | `getByRole('article')`                        | `Blog.test.tsx`                                    |

**Manual protocol**:

1. Open browser DevTools → Accessibility tree
2. Verify landmark count: 1 `banner`, 1 `main`, 1 `contentinfo`
3. Verify no orphan content outside a landmark
4. Use screen reader (VoiceOver / NVDA) and navigate by landmark (VoiceOver: `VO+U`)

---

## 3. Heading Hierarchy

**Heuristic**: Headings follow a logical hierarchy (`h1` → `h2` → `h3`). No heading levels are skipped. Page has exactly one `h1`.

**Test method**: `getByRole('heading', { level: N, name: '...' })`

| Page/Component         | H1                | H2                                                           | H3                                            | Test coverage                                      |
| ---------------------- | ----------------- | ------------------------------------------------------------ | --------------------------------------------- | -------------------------------------------------- |
| `BlogEntry` (markdown) | First `#` heading | `##` → `SectionHeader use="h2"`                              | `###` → `SectionHeader use="h3"`              | `BlogEntry.test.tsx` — h2, h3, h4 renderers tested |
| `ProductPage`          | —                 | `{title}`                                                    | What's Included, Access & Pricing, Next Steps | `ProductPage.test.tsx`                             |
| `Blog`                 | —                 | pagename (Blog / WCAG Explained)                             | Article titles (`h3`)                         | `Blog.test.tsx`                                    |
| `Home`                 | Tagline           | WHO_HEADER, WHY_HEADER, PRODUCTS_HEADER, WORK_WITH_US_HEADER | —                                             | `Home.test.tsx`                                    |

**Manual protocol**:

1. Use headings map tool (e.g., HeadingsMap browser extension)
2. Confirm no level skip anywhere in page hierarchy
3. Confirm single `h1` per page

---

## 4. Keyboard Navigation & Focus Management

**Heuristic**: All interactive elements are reachable and operable by keyboard. Tab order is logical. Focus does not get trapped. After navigation, focus is managed appropriately.

**Test method**: `fireEvent.keyDown(element, { key: 'Enter' })` / `fireEvent.click(element)` / ARIA attribute checks (`aria-pressed`, `aria-expanded`).

| Pattern                                 | Assertion                                        | Test                                                      |
| --------------------------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| Category filter buttons keyboard toggle | `aria-pressed` state changes on click            | `BlogFilters.test.tsx` — category/tag/series toggle tests |
| "Clear filters" keyboard activation     | `fireEvent.click` on Clear button → store resets | `BlogFilters.test.tsx`                                    |
| Product CTA keyboard activation         | CTA button has correct `href` attribute          | `ProductPage.test.tsx`                                    |
| Breadcrumb Home keyboard activation     | `fireEvent.click(homeLink)` does not throw       | `ProductPage.test.tsx`, `BlogEntry.test.tsx`              |
| CalendlyButton keyboard                 | Tests in `Home.test.tsx` verify button presence  | `Home.test.tsx`                                           |

**Gaps (manual verification required)**:

- Tab focus ring visibility: verify `:focus-visible` styles are applied in SCSS
- Skip-to-main-content link: verify `#main` anchor functionality by keyboard
- Modal/dialog focus trapping: no modals currently present; verify if added

**Manual protocol**:

1. Load page in browser
2. Tab through all interactive elements — verify all are reachable
3. Verify active element has visible focus indicator at all times
4. Activate each button/link with Enter and Space where applicable

---

## 5. ARIA Roles, States, and Properties

**Heuristic**: ARIA attributes are used correctly. No ARIA overrides native semantics incorrectly. `aria-pressed`, `aria-expanded`, `aria-label`, and `aria-current` are accurate at all states.

**Test method**: `toHaveAttribute('aria-pressed', 'true/false')`, `screen.getByLabelText(...)`, `screen.getByRole(..., { name: '...' })`

| Element                 | ARIA attribute                    | State tested                          | File                                         |
| ----------------------- | --------------------------------- | ------------------------------------- | -------------------------------------------- |
| Category filter buttons | `aria-pressed`                    | false → true → false (toggle)         | `BlogFilters.test.tsx`                       |
| Tag filter buttons      | `aria-pressed`                    | false → true → false                  | `BlogFilters.test.tsx`                       |
| Series filter buttons   | `aria-pressed`                    | false → true → false                  | `BlogFilters.test.tsx`                       |
| "All" category button   | `aria-pressed`                    | false when no filter; true when 'All' | `BlogFilters.test.tsx`                       |
| BlogFilters container   | `aria-label="Blog filters"`       | Present                               | `BlogFilters.test.tsx`                       |
| Category ButtonGroup    | `aria-label="Filter by category"` | Present                               | `BlogFilters.test.tsx`                       |
| Main landmark           | `aria-label` equals page title    | Present                               | `ProductPage.test.tsx`, `BlogEntry.test.tsx` |
| Breadcrumb active item  | `aria-current="page"`             | React Bootstrap renders automatically | Manual                                       |

**Manual protocol**:

1. Inspect ARIA tree in browser DevTools → Accessibility panel
2. Toggle each filter and verify `aria-pressed` updates in real DOM
3. Navigate breadcrumb with screen reader, verify current page announcement

---

## 6. Images and Alternative Text

**Heuristic**: All meaningful images have descriptive alt text. Decorative images have `alt=""`. No image is rendered without an `alt` attribute.

**Test method**: `toHaveAttribute('alt', '...')` / axe-core `image-alt` rule (auto-enforced via jest-axe)

**Current coverage**: axe `image-alt` rule runs on every page with `checkAccessibility()`.

**Manual protocol**:

1. Run axe DevTools in browser
2. Filter for `image-alt` rule violations
3. Manually verify that alt text is contextually descriptive (not just filename)
4. Check dynamic images (e.g., blog entry `entry.image`) — verify fallback `DEFAULT_SHARE_IMAGE_ALT` is meaningful

---

## 7. Colour Contrast

**Heuristic**: All text meets WCAG 2.2 AA minimum contrast ratio (4.5:1 for normal text, 3:1 for large text and UI components).

**Test method**: Not automatically testable via jest-axe (colour is computed at render time; axe-core contrast checks require computed styles which JSDOM does not support). **Manual + CI tool required.**

**Tools**:

- [axe DevTools Pro](https://www.deque.com/axe/devtools/) — contrast analysis in browser
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) (desktop tool)
- `yarn storybook` (if added): Contrast addon

**Manual protocol**:

1. Open page in Chrome
2. Run axe DevTools → filter "color-contrast"
3. Spot-check: primary text on background, link text, button label on button background
4. Verify focus indicator contrast ratio ≥ 3:1 against both background and adjacent colours (WCAG 2.2 SC 1.4.11)

---

## 8. Form Accessibility

**Heuristic**: Form inputs have associated `<label>` elements (not just placeholder text). Required fields are marked `aria-required`. Error messages are associated with their input via `aria-describedby`.

**Current scope**: Contact page form (`src/pages/Contact/`).

**Test coverage**: Contact form tests in `Contact.test.tsx` verify label presence and form structure.

**Manual protocol**:

1. Tab through contact form — verify each field's label is announced by screen reader when focused
2. Submit with empty required fields — verify error messages are read by screen reader
3. Verify error messages are associated with their inputs via `aria-describedby`

---

## 9. Motion and Animation

**Heuristic**: Animations respect `prefers-reduced-motion` media query. No content flashes more than 3 times per second.

**Current scope**: SCSS transitions, CalendlyButton embed widget.

**Test method**: Cannot be automated via Vitest (JSDOM has no media query engine for `prefers-reduced-motion`).

**Manual protocol**:

1. Enable "Reduce motion" in macOS Accessibility Settings
2. Reload pages — verify transitions are removed or reduced
3. Verify Calendly widget respects motion preference

---

## 10. Screen Reader Compatibility

**Heuristic**: All content and functionality is accessible when using NVDA (Windows) or VoiceOver (macOS/iOS) with common browser pairings.

**Tested pairings**:

- VoiceOver + Safari (macOS)
- VoiceOver + Safari (iOS)
- NVDA + Firefox (Windows) — aspirational

**Manual protocol for each page**:

1. Open page with VoiceOver active (Cmd + F5 on macOS)
2. Navigate with `Tab` key — all interactive elements read out their role + accessible name
3. Navigate by headings (`VO + Cmd + H`) — hierarchy is logical
4. Navigate by landmarks (`VO + U`) — all landmarks present and labelled
5. Navigate by links (`VO + Cmd + L`) — all links have descriptive text (no "click here")
6. Activate each button/link — verify screen reader announces state changes (e.g., filter selected)

---

## Appendix: Running Tests

```bash
# All tests
yarn test

# With coverage
yarn test --coverage

# Verbose output for specific file
yarn test src/components/BlogFilters/__tests__/BlogFilters.test.tsx --reporter=verbose

# Run only axe-related tests
yarn test --reporter=verbose 2>&1 | grep -i "axe\|accessibility\|a11y"
```

**Coverage targets (Phase 5+)**:

| Metric     | Target | Baseline |
| ---------- | ------ | -------- |
| Statements | ≥ 95%  | 88.98%   |
| Branches   | ≥ 90%  | 73.43%   |
| Functions  | ≥ 90%  | 79.79%   |
| Lines      | ≥ 95%  | 90.04%   |
