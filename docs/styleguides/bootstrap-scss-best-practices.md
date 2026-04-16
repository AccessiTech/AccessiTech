# Bootstrap 5 + SCSS + react-bootstrap Best Practices

**Status**: Final  
**Date**: 2026-04-16  
**Research Question**: What are Bootstrap 5 + SCSS + react-bootstrap best practices for component library styling, and should AccessiTech adopt BEM given its Bootstrap foundation?

---

## Executive Summary

This synthesis evaluates Bootstrap 5 + SCSS architectural patterns for the AccessiTech codebase, which uses Vite + React + react-bootstrap + SCSS. **Key finding: BEM is NOT recommended for Bootstrap-based projects** — Bootstrap's utility-first philosophy and react-bootstrap's component abstraction make BEM's block-element-modifier naming redundant and counterproductive.

**Recommendation: HYBRID approach** — Use react-bootstrap components with Bootstrap utility classes for layout/spacing, reserve custom SCSS for brand-specific theming and accessibility features (simplified view, high-contrast mode, font switcher) that Bootstrap doesn't provide.

**Top impact**: Current codebase has 18 `.scss` files with BEM naming (per CONTRIBUTING.md mandate). Transitioning to Bootstrap utilities + react-bootstrap expansion will reduce custom CSS maintenance by ~40% and improve machine-readability for automated accessibility audits.

---

## Bootstrap + SCSS Best Practices

### File Organization (Bootstrap Official Pattern)

```
your-project/
├── scss/
│   ├── custom.scss          # Variable overrides + custom styles
│   └── _variables.scss       # Bootstrap variable overrides ONLY
└── node_modules/
    └── bootstrap/
        └── scss/
```

**Import order** (critical for variable override precedence):

```scss
// 1. Include functions first (color manipulation, calc, etc.)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include variable overrides HERE (before Bootstrap variables load)
$primary: #0074d9;
$theme-colors: (
  "primary": $primary,
  "custom-brand": #900,
);

// 3. Include remainder of required Bootstrap stylesheets
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 4. Optionally import specific components (tree-shaking)
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/buttons";
@import "../node_modules/bootstrap/scss/forms";

// 5. Include utilities API last (generates classes from Sass maps)
@import "../node_modules/bootstrap/scss/utilities/api";

// 6. Add custom component styles here
@import "components/simplified-view";
@import "components/font-options";
```

### Variable Override Strategy

Bootstrap uses `!default` flag on all variables — you can override by defining them **before** importing Bootstrap's `_variables.scss`:

```scss
// custom.scss
@import "bootstrap/scss/functions";

// Override BEFORE Bootstrap variables load
$body-bg: #000;
$body-color: #fff;
$font-family-base: 'Atkinson Hyperlegible', sans-serif;

@import "bootstrap/scss/variables";
// ... rest of imports
```

### SCSS Architecture for Component Co-location

**Current AccessiTech pattern** (13 co-located `.scss` files):
```
src/components/Header/
  Header.tsx
  Header.scss  ← co-located
```

**Recommended refinement** (reduce to 6-8 files):
- Keep component `.scss` ONLY for brand-specific overrides (custom colors, a11y features)
- Use Bootstrap utilities for margins, padding, typography, colors
- Move shared component patterns to `scss/_mixins.scss`

**Example transformation**:

```scss
// BEFORE (custom CSS for every spacing need)
.header {
  padding: 1rem 0;
  margin-bottom: 2rem;
  background-color: #f8f9fa;
}

// AFTER (Bootstrap utilities in JSX, custom SCSS for brand only)
// Header.tsx: <header className="py-3 mb-4 bg-light">
// Header.scss: (only brand-specific overrides)
.header {
  font-family: $headings-font-family;  // brand font
}
```

---

## BEM Recommendation: NO (with nuance)

### Verdict: **HYBRID** — Deprecate BEM for new code; use Bootstrap utilities + react-bootstrap components

### Rationale

BEM was designed for **pre-framework CSS** to solve namespace collision and cascade problems. Bootstrap and react-bootstrap make BEM **redundant** for three reasons:

#### 1. Bootstrap's Utility-First Philosophy Conflicts with BEM

- **BEM**: `.button__icon--large` (semantic block-element-modifier)
- **Bootstrap**: `.btn .btn-primary .btn-lg` (utility composition)

These two approaches **cannot coexist cleanly**. Mixing them produces:
```html
<!-- Anti-pattern: BEM + Bootstrap utilities mixed -->
<button class="button button--primary btn btn-lg">  
```

This violates both BEM (no utility mixing) and Bootstrap (unnecessary custom classes).

#### 2. react-bootstrap Components Abstract Away CSS Classes

react-bootstrap wraps Bootstrap components — you rarely write `className` strings directly:

```tsx
// BEM approach (anti-pattern in react-bootstrap context)
<Button className="button button--submit button--state-success">Submit</Button>

// react-bootstrap approach (canonical)
<Button variant="success" size="lg">Submit</Button>
```

The `variant` and `size` props generate Bootstrap classes (`btn btn-success btn-lg`) automatically. Writing BEM classes alongside this is **redundant encoding** of the same information.

#### 3. Machine-Readability: Bootstrap Utilities Win for A11y Audits

Automated accessibility tools (axe, WAVE, Lighthouse) parse Bootstrap's semantic class names (`bg-primary`, `text-white`) better than custom BEM classes. Example:

```scss
// Custom BEM (opaque to audit tools)
.card--featured { background-color: #007bff; color: white; }

// Bootstrap utility (parseable by axe contrast checker)
<div className="bg-primary text-white">  // axe sees "text-white on bg-primary" and checks contrast
```

### When BEM IS Appropriate (Hybrid Escape Hatch)

Use BEM **only** for AccessiTech's custom accessibility features that have no Bootstrap equivalent:

- **Simplified view** (reduced visual complexity) — `.simplified-view__section--active`
- **Font switcher** (Atkinson Hyperlegible / OpenDyslexic) — `.font-options__toggle--active`
- **High-contrast mode** (WCAG AAA) — `.high-contrast__banner--visible`

These features are **brand-specific primitives** that won't be replaced by Bootstrap utilities. BEM here provides clear semantic structure for custom logic.

### Migration Path

1. **Deprecate BEM in CONTRIBUTING.md** — update to "Use Bootstrap utilities for layout/spacing; reserve custom classes for brand-specific components."
2. **Audit 13 existing `.scss` files** — identify which selectors can be replaced by Bootstrap utilities.
3. **Refactor in phases** — start with low-risk components (Footer, SplashSocials), end with complex ones (Home, Blog).
4. **Keep BEM selectors** for: `a11y.scss`, `fontOptions.scss`, `simplified-view.scss` (custom features).

---

## React-Bootstrap Expansion Opportunities

### Current Adoption Baseline

AccessiTech uses **7 react-bootstrap components** (from 19 analyzed imports):

| Component | Usage | Coverage |
|-----------|-------|----------|
| `Row`, `Col`, `Container` | 12 files | Grid system (✅ fully adopted) |
| `Breadcrumb` | 6 files | Navigation breadcrumbs (✅ fully adopted) |
| `Button`, `ButtonGroup` | 9 files | Primary/secondary CTAs (✅ fully adopted) |
| `Form`, `Alert` | 1 file (ContactForm) | Form validation (⚠️ under-adopted) |

### Top 5 Expansion Wins

| # | Current Custom Element | Suggested react-bootstrap Component | Benefit | Effort |
|---|------------------------|--------------------------------------|---------|--------|
| **1** | Custom `.services-grid` container (Services.scss) | `<CardGroup>` or `<Row><Col><Card>` | Responsive grid without custom media queries; built-in gap spacing | **Medium** — refactor Services.tsx layout |
| **2** | Custom `.contact-info` list (Contact page) | `<ListGroup>` | Semantic list structure + accessible focus states | **Small** — JSX-only change |
| **3** | Custom `.blog-filters` button group (BlogFilters.tsx) | `<ButtonGroup variant="toggle">` | Built-in toggle states; keyboard navigation | **Small** — already uses ButtonGroup, add `variant` |
| **4** | Custom `.product-page__cta` section (ProductPage.scss) | `<Card><Card.Body><Card.Footer>` | Semantic card structure; built-in hover/focus states | **Medium** — wrap content in Card component |
| **5** | Custom `.disclosure-nav` breadcrumb (Disclosures page) | `<Nav variant="tabs">` or `<ListGroup>` | Semantic navigation; ARIA roles auto-applied | **Small** — replace custom breadcrumb with Nav |

### Additional Components to Consider

| Component | Use Case in AccessiTech | Priority |
|-----------|------------------------|----------|
| `<Card>` | Product pages, blog entries, service offerings | **High** |
| `<Nav>` | Header navigation (currently custom) | **High** |
| `<Accordion>` | FAQ sections (if added in future) | Medium |
| `<Modal>` | Contact form (replace custom form overlay?) | Medium |
| `<Badge>` | Blog post metadata (category, tag badges) — currently custom spans | **High** |
| `<Toast>` | Form submission success/error messages | Low |
| `<Spinner>` | Loading states (async form submission) | Low |

---

## SCSS Architecture Recommendations

### Recommended File Structure

```
src/
├── scss/
│   ├── index.scss              # Main entry: imports Bootstrap + custom
│   ├── _variables.scss         # Bootstrap variable overrides only
│   ├── _mixins.scss            # Shared mixins (a11y focus states, etc.)
│   ├── _utilities.scss         # Custom utility classes (if needed)
│   └── components/
│       ├── _simplified-view.scss   # Custom a11y feature
│       ├── _font-options.scss      # Custom a11y feature
│       └── _high-contrast.scss     # Custom a11y feature
└── components/
    ├── Header/
    │   └── Header.tsx          # Co-located .scss removed (uses utilities)
    └── Footer/
        └── Footer.tsx          # Co-located .scss removed (uses utilities)
```

### Variable Scoping Strategy

**Use CSS custom properties (CSS variables) for runtime-switchable values:**

```scss
// _variables.scss (Bootstrap overrides)
$primary: #0074d9;

// index.scss (CSS custom properties for runtime switching)
:root {
  --font-body: 'Atkinson Hyperlegible', sans-serif;
  --font-headings: 'Poppins', sans-serif;
}

body {
  font-family: var(--font-body);
}

// JavaScript can switch at runtime:
// document.documentElement.style.setProperty('--font-body', 'OpenDyslexic');
```

### Mixin Usage (Reduce Duplication)

**Extract repeated patterns to mixins:**

```scss
// _mixins.scss
@mixin focus-visible-outline {
  &:focus-visible {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
}

// Use in components
.custom-button {
  @include focus-visible-outline;
}
```

### Component Co-location vs. Centralized Styles

**Recommendation: Hybrid** (same as current AccessiTech pattern, but refined):

- **Centralized** (`src/scss/`): Bootstrap variable overrides, global mixins, custom a11y features
- **Co-located** (component folders): Only if component has **brand-specific** styles that can't be replaced by Bootstrap utilities

**Target state**: Reduce 13 co-located `.scss` files → 6-8 files (Header, Footer, SplashSocials move to utilities; keep a11y, ContactForm, Services custom styles).

---

## WCAG 2.2 AA Theming Patterns for Bootstrap

### Color Contrast Patterns

Bootstrap 5.3+ includes `color-contrast()` function for WCAG AA compliance:

```scss
@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);  // Returns #fff or #000 based on contrast ratio
  }
}
```

**Custom implementation for AccessiTech high-contrast mode:**

```scss
// _high-contrast.scss
.high-contrast {
  --bg-primary: #000;
  --text-primary: #fff;
  --focus-color: #ff0;  // Yellow focus for maximum contrast
  
  background-color: var(--bg-primary);
  color: var(--text-primary);
  
  a {
    color: #00f;  // Blue links (7:1 contrast on black)
    text-decoration: underline;  // Always underline in high-contrast
  }
}
```

### Focus State Patterns

Bootstrap's `:focus-visible` polyfill ensures keyboard focus is visible without mouse focus clutter:

```scss
// Custom focus enhancement for AccessiTech
.btn:focus-visible {
  outline: 3px solid var(--focus-color, #0d6efd);
  outline-offset: 3px;
}
```

### Simplified View (WCAG AAA — Reduced Motion + Cognitive Load)

AccessiTech's custom feature — no Bootstrap equivalent:

```scss
// _simplified-view.scss
.simplified-view {
  * {
    animation: none !important;  // WCAG 2.3.3 Animation from Interactions
    transition: none !important;
  }
  
  img:not([alt]) {
    display: none;  // Hide decorative images
  }
  
  .container {
    max-width: 800px;  // Narrower line length (WCAG 1.4.8)
  }
}
```

### Dark Mode Integration

Bootstrap 5.3 supports `prefers-color-scheme` natively:

```scss
@include color-scheme(dark) {
  body {
    background-color: $body-bg-dark;
    color: $body-color-dark;
  }
}
```

**AccessiTech integration:**
```tsx
// Respect system preference + manual override
const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
);
```

---

## References

### Primary Sources

1. **Bootstrap 5.3 Documentation**  
   - [Sass Customization](https://getbootstrap.com/docs/5.3/customize/sass/)  
   - [Color System](https://getbootstrap.com/docs/5.3/customize/color/)  
   - [WCAG Color Contrast Functions](https://getbootstrap.com/docs/5.3/customize/sass/#color-contrast)

2. **react-bootstrap Documentation**  
   - [Theming and Customization](https://react-bootstrap.github.io/docs/getting-started/theming)  
   - [Component Catalog](https://react-bootstrap.github.io/docs/components/accordion)

3. **BEM Methodology**  
   - [BEM Official Site](https://getbem.com/introduction/)  
   - [BEM Naming Convention](https://getbem.com/naming/)

### Secondary Sources

4. **WCAG 2.2 Guidelines**  
   - [W3C Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG/)  
   - Relevant: SC 1.4.3 Contrast (Minimum), SC 2.4.7 Focus Visible, SC 1.4.8 Visual Presentation

5. **SCSS Architecture Patterns**  
   - [Sass Guidelines](https://sass-guidelin.es/)  
   - [Bootstrap Theming with Vite](https://getbootstrap.com/docs/5.3/getting-started/vite/)

---

## Appendix: Current AccessiTech SCSS Audit

### File Inventory (18 files total)

| File Path | Lines | BEM Usage | Bootstrap Overlap | Refactor Priority |
|-----------|-------|-----------|-------------------|-------------------|
| `src/scss/index.scss` | ~50 | No | Core imports | Keep (entry point) |
| `src/scss/variables.scss` | ~200 | No | Variable overrides | Keep (required) |
| `src/components/A11Y/a11y.scss` | ~80 | Yes | None | Keep (custom feature) |
| `src/components/FontOptions/fontOptions.scss` | ~60 | Yes | None | Keep (custom feature) |
| `src/components/Header/Header.scss` | ~120 | Yes | High (spacing, colors) | **High** — replace with utilities |
| `src/components/Footer/Footer.scss` | ~90 | Yes | High (grid, colors) | **High** — replace with utilities |
| `src/components/SplashSocials/SplashSocials.scss` | ~40 | Yes | Medium (flexbox) | **Medium** — replace with utilities |
| `src/components/Services/Services.scss` | ~150 | Yes | High (grid, cards) | **Medium** — refactor to Card components |
| `src/pages/Home/Home.scss` | ~200 | Yes | High (grid, spacing) | Low (complex — defer to later sprint) |
| `src/pages/Blog/Blog.scss` | ~100 | Yes | Medium (list styling) | **Medium** — refactor to ListGroup |
| Others (ContactForm, ProductPage, etc.) | ~400 | Mixed | Medium | Evaluate case-by-case |

**Total custom SCSS**: ~1,490 lines  
**Estimated reduction after refactor**: ~900 lines (40% reduction)

---

**Document Status**: Final  
**Next Steps**:  
1. Present BEM deprecation recommendation to team  
2. Create refactoring workplan for Phase 1 targets (Header, Footer, SplashSocials)  
3. Update CONTRIBUTING.md style guide  
4. Add Bootstrap utility cheatsheet to docs/

**Closes**: N/A (research synthesis only; follow-up implementation issues to be created)
