# Styling System Refactor Workplan

**Date**: 2026-04-16  
**Status**: Proposed  
**Closes**: N/A (implementation plan; issues to be created per phase)  
**Research Foundation**: `docs/styleguides/bootstrap-scss-best-practices.md` (commit fae08b1)

---

## Executive Summary

This workplan implements the 5 recommendations from Phase 1 research (fae08b1):
1. Fix SCSS import order (fontOptions before Bootstrap)
2. Reduce 13 SCSS files → 6-8 via utility adoption
3. Use CSS custom properties for runtime switching (font switcher)
4. Deprecate BEM for new code
5. Expand react-bootstrap usage (5 quick wins identified)

**Total Effort**: 11-14 hours across 5 phases  
**Risk**: Medium (visual regression testing required)  
**Rollback Strategy**: Git revert per phase + visual regression baseline restoration

---

## Audit Findings Summary

### Top 3 Consistency Issues

1. **Import Order Violation**:  
   - `src/scss/index.scss` imports `fontOptions.scss` BEFORE `bootstrap/scss/bootstrap.scss`
   - Consequence: Bootstrap variable overrides in `fontOptions.scss` won't work (though none currently exist)
   - Impact: Medium (no current breakage, but future-proofing required)

2. **Variable Usage Inconsistency**:  
   - Most files use Bootstrap variables (`$darkBlue`, `$yellow`, `$pink`, `$white`)
   - Exceptions: `Blog.scss` and `Disclosures.scss` use `darken($pink, 15%)` instead of a named variable
   - 8 files import `bootstrap/scss/bootstrap.scss` directly (Header, Footer, Services, A11Y, SectionHeader, ProductPage, Home, Blog, Disclosures) → unnecessary duplication
   - Impact: Medium (maintenance burden + bundle size bloat)

3. **BEM Naming Inconsistency**:  
   - `BlogFilters.scss` uses full BEM (`blog-filters__section`, `blog-filters__label`, `blog-filters__tag`)
   - All other components use plain class names or no custom classes
   - Per Phase 1 recommendation: BEM should be reserved for custom a11y features only (A11Y, FontOptions)
   - Impact: Low (inconsistency confuses contributors but doesn't break behavior)

### Import Order Verdict

**FAIL** — `index.scss` violates Bootstrap import order convention:

```scss
// Current (incorrect):
@import "./../components/FontOptions/fontOptions.scss";  // ❌ BEFORE Bootstrap
@import "bootstrap/scss/bootstrap.scss";

// Required (correct):
@import "bootstrap/scss/bootstrap.scss";  // ✅ Bootstrap first
@import "./../components/FontOptions/fontOptions.scss";  // Custom styles after
```

### Files to Eliminate

**3 files** can be removed (per Phase 1 Table audit):

| File | Lines | Reason | Replacement Strategy |
|------|-------|--------|----------------------|
| `Header.scss` | 120 | High Bootstrap overlap (spacing, colors, flexbox) | Replace with Bootstrap utilities (`d-flex`, `py-3`, `gap-2`) |
| `Footer.scss` | 90 | High Bootstrap overlap (grid, spacing) | Replace with Bootstrap grid utilities |
| `SplashSocials.scss` | 40 | Minimal custom styles (mostly flexbox + spacing) | Replace with Bootstrap utilities (`d-flex`, `justify-content-evenly`) |

**Total reduction**: 250 lines of custom SCSS (~17% of total)

### Selector Specificity Issues

**Deep nesting violations** (> 3 levels):
- `Header.scss`: `.main-header .header-nav ul li a` (5 levels)
- `Header.scss`: `.main-header .header-nav ul li.nav-dropdown .dropdown-menu li a` (8 levels!)
- `Services.scss`: `#services-row .row.services-row > div .service-section` (5 levels)

**Impact**: Medium (increases specificity wars; harder to override in theme customizations)

### WCAG 2.2 AA Compliance Checklist

**8 criteria** to verify during refactoring:

| # | Criterion | Current Implementation | Verification Method |
|---|-----------|------------------------|---------------------|
| 1 | **Focus states** (SC 2.4.7) | `:focus-visible` with 3px white outline (`$focus-border: 2px solid $white`) | Visual inspection + keyboard navigation test |
| 2 | **Color contrast** (SC 1.4.3) | Normal text 4.5:1, large text 3:1 | axe DevTools automated scan |
| 3 | **Simplified view preservation** | `.simplified-view *` selector forces `color: $darkBlue !important` | Toggle simplified view; verify all content readable |
| 4 | **High-contrast mode** | `@mixin hc-text-shadow` + `$hc-focus-box-shadow` | Manual high-contrast OS mode test |
| 5 | **Font switcher functionality** | SCSS `@font-resize` mixin (50 breakpoints: 0.5rem→5.0rem) | Test all 3 font families + 10 size steps |
| 6 | **Focus indicator minimum size** (SC 2.4.11) | 2px border meets 2px minimum | Measure with browser DevTools |
| 7 | **Non-text contrast** (SC 1.4.11) | Form controls + focus indicators 3:1 | axe DevTools automated scan |
| 8 | **Reflow** (SC 1.4.10) | Grid system responsive at 320px width | Viewport resize test (iPhone SE width) |

**Tools Required**:
- axe DevTools browser extension
- macOS High Contrast Mode (`System Preferences → Accessibility → Display → Increase contrast`)
- Keyboard-only navigation (unplug mouse)
- Browser responsive design mode (320px, 768px, 1024px breakpoints)

---

## Phase A: Import Order Fix + Variable Consolidation

**Effort**: <1 hour (Quick win)  
**Risk**: Low (no visual changes)  
**Files Changed**: 2 files

### Acceptance Criteria

- [ ] `src/scss/index.scss` imports Bootstrap BEFORE `fontOptions.scss`
- [ ] `src/scss/variables.scss` defines `$pink-dark: darken($pink, 15%)` variable
- [ ] `Blog.scss` and `Disclosures.scss` use `$pink-dark` instead of inline `darken()` function
- [ ] All imports verified — no circular dependencies
- [ ] `yarn build` succeeds with no SCSS warnings

### Implementation Steps

1. **Reorder imports** in `src/scss/index.scss`:
   ```scss
   // Move fontOptions import AFTER Bootstrap
   @import "bootstrap/scss/bootstrap.scss";
   @import "./../components/FontOptions/fontOptions.scss";
   ```

2. **Add consolidated variable** to `src/scss/variables.scss`:
   ```scss
   // After $pink definition
   $pink-dark: darken($pink, 15%);
   ```

3. **Replace inline color functions** in `Blog.scss` and `Disclosures.scss`:
   ```scss
   // Replace: color: darken($pink, 15%);
   // With: color: $pink-dark;
   ```

### Rollback Plan

If `yarn build` fails:
1. `git revert HEAD`
2. Inspect SCSS error logs for circular import issues
3. Document error; escalate to team

---

## Phase B: Eliminate Co-Located SCSS Files (Header, Footer, SplashSocials)

**Effort**: 2-3 hours (Medium)  
**Risk**: Medium (visual regression possible)  
**Files Changed**: 6 files (3 `.scss` deleted, 3 `.tsx` modified)

### Acceptance Criteria

- [ ] `Header.scss` deleted; `Header.tsx` uses only Bootstrap utilities
- [ ] `Footer.scss` deleted; `Footer.tsx` uses only Bootstrap utilities
- [ ] `SplashSocials.scss` deleted; `SplashSocials.tsx` uses only Bootstrap utilities
- [ ] Visual regression test passes (screenshots match baseline ±2px)
- [ ] All 280 existing tests pass
- [ ] `yarn build` bundle size reduced by ≥5KB (SCSS removed)

### Implementation Steps: Header.tsx

**Current custom SCSS** (to be removed):
```scss
.main-header {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  // ... 120 lines total
}
```

**Replacement pattern** (Bootstrap utilities in JSX):
```tsx
<header className="sticky-top bg-dark text-white py-2 px-3 d-flex justify-content-between">
  <nav className="d-flex align-items-center">
    <ul className="d-flex list-unstyled m-0 gap-3">
      {/* nav items */}
    </ul>
  </nav>
</header>
```

**Utility mapping**:
| Custom SCSS | Bootstrap Utility | Notes |
|-------------|------------------|-------|
| `position: sticky; top: 0;` | `sticky-top` | Built-in class |
| `background-color: $darkBlue;` | `bg-dark` | Use theme color |
| `padding: 0.5rem 1rem;` | `py-2 px-3` | Spacing scale |
| `display: flex; justify-content: space-between;` | `d-flex justify-content-between` | Flexbox utilities |

### Implementation Steps: Footer.tsx

**Current custom SCSS** (to be removed):
```scss
.footer-section {
  text-align: left;
  padding-top: $alt-section-padding;
  // ... 90 lines total
}
```

**Replacement pattern**:
```tsx
<footer className="bg-dark text-white text-start pt-5">
  <Container>
    <Row className="g-4">  {/* gap-4 between columns */}
      {/* footer content */}
    </Row>
  </Container>
</footer>
```

### Implementation Steps: SplashSocials.tsx

**Current custom SCSS** (to be removed):
```scss
.splash-social-buttons ul {
  display: flex;
  justify-content: space-evenly;
}
```

**Replacement pattern**:
```tsx
<ul className="d-flex justify-content-evenly list-unstyled mt-4">
  {/* social links */}
</ul>
```

### Visual Regression Testing Protocol

**Baseline capture** (before changes):
```bash
# Install Playwright (if not already installed)
yarn add -D @playwright/test

# Capture baseline screenshots
npx playwright test --update-snapshots
```

**Verification** (after changes):
```bash
# Run visual regression tests
npx playwright test

# Expected: ≤2px difference in header/footer positioning
# Any larger diff → manual inspection required
```

### Rollback Plan

If visual regression fails:
1. `git revert HEAD`
2. Re-run `npx playwright test` to confirm baseline restored
3. Document failure mode (screenshot diff location)
4. Create GitHub issue with diff images

---

## Phase C: React-Bootstrap Expansions (5 Quick Wins)

**Effort**: 3-4 hours (Medium)  
**Risk**: Medium (component behavior changes)  
**Files Changed**: 5 files

### Acceptance Criteria

- [ ] `BlogFilters.tsx` uses `<ButtonGroup variant="toggle">` instead of custom `.blog-filters__group`
- [ ] `Services.tsx` uses `<Card>` component for service grid
- [ ] `ProductPage.tsx` wraps CTA section in `<Card>` component
- [ ] `Blog.tsx` uses `<Badge>` for category/tag labels
- [ ] `Disclosures.tsx` uses `<ListGroup>` for disclosure links
- [ ] All 280 tests updated + passing
- [ ] No `eslint` warnings for unused imports

### Quick Win #1: BlogFilters Toggle Group

**Current** (custom BEM classes):
```tsx
<div className="blog-filters__group">
  <button className="blog-filters__tag">Category</button>
</div>
```

**After** (react-bootstrap):
```tsx
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

<ButtonGroup>
  <ToggleButton id="toggle-check" type="checkbox" variant="outline-primary">
    Category
  </ToggleButton>
</ButtonGroup>
```

**WCAG benefit**: Built-in `role="group"` + `aria-pressed` states

### Quick Win #2: Services Card Grid

**Current** (custom flexbox):
```tsx
<div className="service-section">
  <h4>{service.title}</h4>
  <p>{service.description}</p>
</div>
```

**After** (react-bootstrap):
```tsx
import { Card } from 'react-bootstrap';

<Card className="h-100">
  <Card.Body>
    <Card.Title>{service.title}</Card.Title>
    <Card.Text>{service.description}</Card.Text>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Learn More</Button>
  </Card.Footer>
</Card>
```

**WCAG benefit**: Semantic `<article>` wrapper + built-in focus management

### Quick Win #3: Blog Category Badges

**Current** (custom spans):
```tsx
<span className="category-label">{category}</span>
```

**After** (react-bootstrap):
```tsx
import { Badge } from 'react-bootstrap';

<Badge bg="secondary">{category}</Badge>
```

**WCAG benefit**: Semantic `<span role="status">` for screen readers

### Quick Win #4-5: Deferred to Follow-Up Issue

ProductPage Card wrapper and Disclosures ListGroup conversion deferred — both require more extensive layout changes than "quick win" scope allows.

---

## Phase D: Font Switcher Refactor (SCSS vars → CSS Custom Properties)

**Effort**: 1 hour (Small)  
**Risk**: High (runtime font switching must remain functional)  
**Files Changed**: 2 files

### Acceptance Criteria

- [ ] `fontOptions.scss` removed or consolidated into CSS custom properties
- [ ] `index.scss` defines `:root { --font-size-multiplier: 1.0; }`
- [ ] JavaScript updates `--font-size-multiplier` on font size changes
- [ ] All 50 font size steps (0.5rem → 5.0rem) tested
- [ ] Font family switcher (serif/sans-serif/monospace) tested
- [ ] No visual regression (baseline screenshots match)

### Current Implementation (SCSS Mixin)

```scss
// fontOptions.scss (58 lines)
$font-sizes: (
  "0-5": 0.5,
  "1-0": 1.0,
  "5-0": 5.0,
);

@mixin font-resize($size) {
  font-size: $size;
  @each $key, $value in $font-sizes {
    body.font-size-#{$key} & {
      font-size: $value * $size;
    }
  }
}
```

**Problem**: Requires 50 CSS classes generated at compile time → large bundle size.

### Proposed Implementation (CSS Custom Properties)

```scss
// index.scss
:root {
  --font-size-multiplier: 1.0;  // Default
}

body {
  font-size: calc(1rem * var(--font-size-multiplier));
}

h2 {
  font-size: calc(1.75rem * var(--font-size-multiplier));
}
```

**JavaScript runtime update**:
```tsx
// FontOptions.tsx
const handleFontSizeChange = (multiplier: number) => {
  document.documentElement.style.setProperty('--font-size-multiplier', multiplier.toString());
};
```

### Migration Steps

1. **Add CSS custom property** to `index.scss`
2. **Replace all `@include font-resize()` calls** with `calc()` expressions
3. **Update `FontOptions.tsx`** to set `--font-size-multiplier` instead of adding body classes
4. **Remove** `$font-sizes` map from `fontOptions.scss`
5. **Test** all 10 font size steps manually

### Rollback Plan

If font switching breaks:
1. `git revert HEAD`
2. Verify old SCSS mixin approach restored
3. Document failure (which component broke, browser version)
4. Create issue with browser console logs

---

## Phase E: WCAG Compliance Verification + Visual Regression Testing

**Effort**: 2 hours (Medium)  
**Risk**: Low (verification only, no code changes)  
**Files Changed**: 1 file (test documentation)

### Acceptance Criteria

- [ ] All 8 WCAG checklist items verified (see table in Audit Findings)
- [ ] axe DevTools scan passes with 0 critical issues
- [ ] Keyboard navigation test script documented
- [ ] Visual regression baseline screenshots captured (10 pages × 3 viewports = 30 images)
- [ ] Simplified view + high-contrast mode tested
- [ ] Font switcher tested across all variants
- [ ] Test report committed to `testing/STYLING_SYSTEM_WCAG_VERIFICATION.md`

### WCAG Verification Protocol

#### 1. Focus States (SC 2.4.7)

**Test**: Keyboard-only navigation
```
1. Unplug mouse
2. Tab through all interactive elements (links, buttons, form inputs)
3. Verify 2px white outline visible on every element
4. Test in simplified view (should show 2px dark blue outline)
```

**Pass criteria**: All focusable elements show visible focus indicator

#### 2. Color Contrast (SC 1.4.3)

**Test**: axe DevTools automated scan
```
1. Open each page in Chrome DevTools
2. Run axe DevTools extension
3. Filter for "Color contrast" violations
4. Document any failures
```

**Pass criteria**: 0 color contrast violations

#### 3. Simplified View (Custom Feature)

**Test**: Toggle simplified view button
```
1. Navigate to Home page
2. Click A11Y settings → Simplified View toggle
3. Verify all content readable (dark blue text on white background)
4. Verify animations/transitions disabled
5. Verify images removed (except logos with alt text)
```

**Pass criteria**: All content accessible without color/images

#### 4. High-Contrast Mode (Custom Feature)

**Test**: macOS high-contrast mode
```
1. Enable: System Preferences → Accessibility → Display → Increase contrast
2. Reload AccessiTech site
3. Verify text-shadow applied to all text (hc-text-shadow mixin)
4. Verify focus indicators enhanced (white + black inset shadow)
```

**Pass criteria**: All text readable; focus indicators meet 3:1 contrast

#### 5. Font Switcher (Custom Feature)

**Test**: All font family + size combinations
```
1. Test font families:
   - Atkinson Hyperlegible (default)
   - Serif
   - Sans-serif
   - Monospace
2. Test font sizes:
   - 0.5× (smallest)
   - 1.0× (default)
   - 2.0× (2× increase)
   - 5.0× (largest)
3. Verify text reflows without overflow at all sizes
```

**Pass criteria**: No text cutoff; all content readable at extreme sizes

#### 6-8. Focus Indicator Size, Non-Text Contrast, Reflow

**Test**: Combined DevTools + viewport resize
```
1. Measure focus indicator: Should be ≥2px
2. Run axe "Non-text contrast" scan
3. Resize viewport to 320px width (iPhone SE)
4. Verify no horizontal scroll at 320px
```

**Pass criteria**: All three tests pass

### Visual Regression Baseline Capture

**Pages to capture** (10 pages × 3 viewports = 30 images):
- Home, Services, Contact, Blog, Blog Entry, Product Page, Disclosures
- Viewports: 320px (mobile), 768px (tablet), 1920px (desktop)

**Capture script**:
```bash
# Using Playwright
npx playwright test --update-snapshots --grep "visual regression"

# Expected output: 30 .png files in tests/__screenshots__/
```

### Test Report Template

Create `testing/STYLING_SYSTEM_WCAG_VERIFICATION.md`:
```markdown
# Styling System WCAG 2.2 AA Verification Report

**Date**: YYYY-MM-DD  
**Tester**: [Name]  
**Sprint**: Styling System Refactor (Phases A-D)

## Summary

- Total tests: 8  
- Passed: X  
- Failed: Y  
- Deferred: Z

## Detailed Results

### 1. Focus States (SC 2.4.7)
**Status**: ✅ Pass / ❌ Fail  
**Notes**: [details]

### 2. Color Contrast (SC 1.4.3)
**Status**: ✅ Pass / ❌ Fail  
**axe Report**: [link to saved HTML report]

[... repeat for all 8 criteria]

## Recommendations

[Any follow-up issues identified]
```

---

## Dependencies

### Phase Order Requirements

```
Phase A (Import order fix)
  ↓
Phase B (Eliminate SCSS files) — depends on Phase A being committed
  ↓
Phase C (React-Bootstrap expansions) — parallel with Phase D
  ↓
Phase D (Font switcher refactor) — parallel with Phase C
  ↓
Phase E (WCAG verification) — depends on Phases B, C, D all complete
```

**Rationale**: Phase A must complete first (import order affects variable scope). Phases B-D are independent (different file sets). Phase E runs last (verifies cumulative changes).

---

## Success Metrics

### Quantitative Targets

| Metric | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| Custom SCSS lines | 1,490 | ≤900 (40% reduction) | `find src/ -name "*.scss" \| xargs wc -l` |
| Bundle size (CSS) | TBD | -5KB minimum | `yarn build` output |
| axe violations | TBD | 0 critical | axe DevTools scan |
| Test coverage | 95.30% | ≥95% maintained | `yarn test --coverage` |

### Qualitative Goals

- [ ] Onboarding friction reduced (new contributors use Bootstrap utilities, not custom classes)
- [ ] Maintenance velocity improved (fewer merge conflicts in co-located `.scss` files)
- [ ] Accessibility confidence increased (WCAG checklist documented + automated)

---

## Risk Mitigation

### High-Risk Areas

1. **Font switcher refactor** (Phase D)  
   - Risk: Runtime breakage if CSS custom properties not supported in old browsers  
   - Mitigation: Add fallback `font-size` declarations before `calc()` expressions  
   - Rollback: Full `git revert` + restore SCSS mixin approach

2. **Visual regression failures** (Phase B)  
   - Risk: Bootstrap utilities don't match pixel-perfect layout of custom SCSS  
   - Mitigation: Capture baseline screenshots before Phase B starts  
   - Rollback: `git revert` per component if diff >5px

3. **React-Bootstrap component behavior changes** (Phase C)  
   - Risk: Built-in focus management conflicts with custom A11Y settings  
   - Mitigation: Test each component in isolation before integration  
   - Rollback: Revert to custom components; document incompatibility

### Medium-Risk Areas

- Import order fix causing unexpected cascade changes  
  - Mitigation: Full regression test suite after Phase A  
- BEM removal breaking existing tests  
  - Mitigation: Update test selectors before deleting `.scss` files

---

## Post-Refactor Maintenance

### Updated Style Guide (for `CONTRIBUTING.md`)

**New component styling guidelines** (replaces BEM mandate):

1. **Use Bootstrap utilities first** for layout, spacing, colors  
2. **Use react-bootstrap components** for interactive elements (buttons, forms, cards)  
3. **Reserve custom SCSS** for:  
   - Brand-specific theming (custom color palette)  
   - Accessibility features (simplified view, high-contrast mode, font switcher)  
   - Complex animations/transitions  
4. **Never add new BEM classes** (deprecated as of 2026-04-16)  
5. **Co-locate `.scss` files only if** component has brand-specific styles that can't be replaced by utilities

### Monitoring + Follow-Up

**Track these metrics quarterly**:
- Custom SCSS line count (should trend downward)
- Bundle size (CSS portion)
- axe violations (should stay at 0)
- Time-to-onboard new contributors (subjective survey)

**Follow-up issues to create** (after Phase E completes):
- [ ] Issue: Migrate Home.scss (complex page, 200 lines)
- [ ] Issue: Migrate Blog.scss (medium complexity, 100 lines)
- [ ] Issue: Create Bootstrap utility cheatsheet (`docs/BOOTSTRAP_UTILITIES.md`)
- [ ] Issue: Add SCSS linting rules (enforce no new BEM classes)

---

**Workplan Status**: Proposed  
**Next Steps**:  
1. Review with team (estimated 30 min meeting)  
2. Create GitHub issues for Phases A-E  
3. Assign Phase A to sprint; defer Phases B-E to backlog  
4. Schedule kickoff session for visual regression baseline capture
