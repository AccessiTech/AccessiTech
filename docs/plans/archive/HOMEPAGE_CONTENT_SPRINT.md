# Homepage Content Sprint — IA Implementation Workplan

**Date**: 2026-04-16  
**Branch**: `feat/homepage-content-sprint` (cut from `phase-5/full-implementation`)  
**Status**: 🟡 Planning  
**Relates to**: Phase 5 (#134) — companion sprint for homepage IA alignment  
**Source of truth for copy**: `consulting/docs/brand/accessitech-website-copy-complete.md` (v1.0, 2026-04-15)

---

## Objective

The AccessiTech homepage currently contains stub content and stale structure that does not reflect the locked website copy (v1.0, authored by Comms Strategist, 2026-04-15). This sprint implements all homepage sections defined in the website copy doc — content, section ordering, and component structure — so the live homepage matches the IA as designed.

This is **not** a redesign sprint. The information architecture and copy are locked. The work is implementation-only: extract locked copy into string constants, reorder and add sections, rewrite the Services component, update test coverage.

---

## Gap Analysis

### Section Order (IA Restructure Required)

| #   | Current Order          | Target Order (Website Copy)         | Status                      |
| --- | ---------------------- | ----------------------------------- | --------------------------- |
| 1   | Header                 | Header                              | ✅ No change                |
| 2   | Tagline/Splash         | Tagline/Splash                      | ✅ No change                |
| 3   | WHO (1 sentence)       | WHY (3 paragraphs)                  | ❌ Reorder + expand         |
| 4   | WHY (1 sentence)       | CTA — "Ready to close the gap?"     | ❌ New section (missing)    |
| 5   | Services (stale 4-col) | Services — Consulting (3 sub-items) | ❌ Full component rewrite   |
| 6   | Products (3 cards)     | Services — Mentorship (4 sub-items) | ❌ Full component rewrite   |
| 7   | Work With Us / CTA     | WHO (3 paragraphs)                  | ❌ Reorder + expand         |
| —   | —                      | Products Overview + 4 cards         | ❌ Add overview + Blog card |
| —   | —                      | Contact section reference           | ❌ New section (missing)    |

### Content Gaps

| Section               | Current                                                           | Target                                              | Words     | Action                  |
| --------------------- | ----------------------------------------------------------------- | --------------------------------------------------- | --------- | ----------------------- |
| WHY                   | 1-sentence stub: "We close the accessibility accountability gap…" | 3 paragraphs (256 words)                            | +250      | Expand string constants |
| WHO                   | 1-sentence stub: "AccessiTech LLC is a social enterprise…"        | 3 paragraphs (356 words)                            | +350      | Expand string constants |
| CTA                   | Missing                                                           | "Ready to close the gap?" + Calendly + contact link | 85 words  | New section             |
| Services — Consulting | Missing (stale component)                                         | 3 sub-items (ASaaPs, AI Integration, QA)            | 248 words | Component rewrite       |
| Services — Mentorship | Missing (stale component)                                         | 4 sub-items (CCCs, Coaching, OpenClassrooms, SOTC)  | 243 words | Component rewrite       |
| Products Overview     | Missing                                                           | Intro paragraph before cards (142 words)            | +142      | New row above cards     |
| Blog product card     | Missing                                                           | 4th card: Blog                                      | —         | New card                |
| Contact section       | Missing from homepage                                             | Section referencing contact form / link             | 78 words  | New section             |
| Work-with-us row      | Generic: "Consulting, mentorship, and product services…"          | Replaced by CTA section                             | —         | Remove / merge into CTA |

### Components Requiring Changes

| File                                                  | Change Type               | Scope                                                                                                  |
| ----------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| `src/pages/Home/Home.tsx`                             | String constants + layout | Expand WHY/WHO exports, new CTA/Products-overview/Contact exports, reorder JSX sections, add Blog card |
| `src/components/Services/Services.tsx`                | Full rewrite              | New Consulting + Mentorship structure with sub-items and CTAs                                          |
| `src/components/Services/Services.scss`               | Layout update             | Styles for new two-column (Consulting / Mentorship) structure                                          |
| `src/pages/Home/Home.scss`                            | Additive                  | New section class names (`.cta-row`, `.products-overview-row`, `.contact-row`)                         |
| `src/pages/Home/__tests__/Home.test.tsx`              | Update                    | New exports, new sections, Blog card, Contact section, revised CTA tests                               |
| `src/components/Services/__tests__/Services.test.tsx` | Full rewrite              | Tests for Consulting/Mentorship structure; remove old 4-category tests                                 |

---

## Workplan

### Phase 0 — Workplan Review Gate

**Agent**: Review  
**Deliverables**: Review verdict logged; APPROVED before Phase 1 begins  
**Depends on**: This document  
**Status**: ⬜ Not started

---

### Phase 1 — Home.tsx: String Constants + Section Expansion

**Agent**: Implementation  
**Files changed**: `src/pages/Home/Home.tsx`, `src/pages/Home/Home.scss`  
**Depends on**: Phase 0 APPROVED  
**Status**: ⬜ Not started

**Tasks**:

- [ ] Export new multi-paragraph WHY string constants: `WHY_P1`, `WHY_P2`, `WHY_P3` (from website copy WHY section)
- [ ] Export new multi-paragraph WHO string constants: `WHO_P1`, `WHO_P2`, `WHO_P3` (from website copy WHO section)
- [ ] Export new CTA section string constants: `CTA_HEADER`, `CTA_P1`, `CTA_P2`
- [ ] Export new Products section string constants: `PRODUCTS_OVERVIEW_P1`, `PRODUCTS_OVERVIEW_P2`, `PRODUCTS_OVERVIEW_P3`
- [ ] Export new Contact section string constants: `CONTACT_HEADER`, `CONTACT_P1`, `CONTACT_P2`
- [ ] Export new Blog product card constants: `BLOG_TITLE`, `BLOG_DESC`
- [ ] Reorder JSX sections in `Home.tsx` to match IA target order (see Gap Analysis table above)
- [ ] Replace 1-sentence WHY `<p>` with 3-paragraph block using `WHY_P1/2/3`
- [ ] Replace 1-sentence WHO `<p>` with 3-paragraph block using `WHO_P1/2/3`
- [ ] Add new CTA row (`className="cta-row"`) after WHY, before Services — with `CTA_HEADER` h3, `CTA_P1` paragraph, `CalendlyButton`, and contact link
- [ ] Add Products Overview text block above product cards (before existing 3 cards)
- [ ] Add Blog 4th product card with `data-testid="product-card-btn-blog"` and `navigate('/blog')` handler
- [ ] Add new Contact row (`className="contact-row"`) at bottom — linking to `/contact` with `CONTACT_P1/2` text
- [ ] Remove or absorb `work-with-us-row` (the CTA row replaces this)
- [ ] Add new SCSS classes: `.cta-row`, `.products-overview-row`, `.contact-row` to `Home.scss`

**Acceptance criteria**:

- All new string constants are exported (importable in tests)
- Section order in rendered DOM matches: Splash → WHY → CTA → Services → WHO → Products Overview → Product Cards → Contact
- WHY section renders 3 paragraphs
- WHO section renders 3 paragraphs
- Blog product card renders with correct `data-testid`
- No regressions on `yarn test` for non-Home tests

---

### Phase 1 Review — Review Gate

**Agent**: Review  
**Deliverables**: `## Phase 1 Review Output` in scratchpad, verdict: APPROVED  
**Depends on**: Phase 1 committed  
**Status**: ⬜ Not started

---

### Phase 2 — Services Component Rewrite

**Agent**: Implementation  
**Files changed**: `src/components/Services/Services.tsx`, `src/components/Services/Services.scss`  
**Depends on**: Phase 1 Review APPROVED  
**Status**: ⬜ Not started

**Tasks**:

- [ ] Remove all stale constants: `CONSULTATION_*`, `QA_*`, `MENTORSHIP_*`, `PRODUCTION_*`, `SERVICES_P2`, `PURPOSE_PIC_*` (or deprecate if referenced elsewhere — check first)
- [ ] Add new exported constants for Consulting section: `CONSULTING_HEADER`, `CONSULTING_INTRO`, `ASAAPS_HEADER`, `ASAAPS_DESC`, `AI_INTEGRATION_HEADER`, `AI_INTEGRATION_DESC`, `QA_HEADER_NEW`, `QA_DESC`, `CONSULTING_CTA`
- [ ] Add new exported constants for Mentorship section: `MENTORSHIP_HEADER`, `MENTORSHIP_INTRO`, `CCCS_HEADER`, `CCCS_DESC`, `COACHING_HEADER`, `COACHING_DESC`, `OPENCLASSROOMS_HEADER`, `OPENCLASSROOMS_DESC`, `SOTC_HEADER`, `SOTC_DESC`, `MENTORSHIP_CTA`
- [ ] Rewrite Services JSX with two sub-sections (Consulting + Mentorship), each with header, intro paragraph, 3–4 sub-item cards/articles, and a Calendly/contact CTA
- [ ] Update `Services.scss` for new two-category layout (preserve responsive behaviour)
- [ ] Confirm `PURPOSE_PIC` is not used elsewhere before removing; if used, leave in place

**Acceptance criteria**:

- Services renders two main sections: Consulting and Mentorship
- Each sub-item (ASaaPs, AI Integration, QA; CCCs, Coaching, OpenClassrooms, SOTC) renders as distinct article or card
- Each sub-item heading is an h4
- Both CTAs render (Calendly + /contact links)
- No `console.error` from PropTypes or missing keys

---

### Phase 2 Review — Review Gate

**Agent**: Review  
**Deliverables**: `## Phase 2 Review Output` in scratchpad, verdict: APPROVED  
**Depends on**: Phase 2 committed  
**Status**: ⬜ Not started

---

### Phase 3 — Test Suite Updates

**Agent**: Implementation  
**Files changed**: `src/pages/Home/__tests__/Home.test.tsx`, `src/components/Services/__tests__/Services.test.tsx`  
**Depends on**: Phase 2 Review APPROVED  
**Status**: ⬜ Not started

**Tasks — Home.test.tsx**:

- [ ] Update `beforeEach` imports for new exports: `WHY_P1/2/3`, `WHO_P1/2/3`, `CTA_HEADER`, `CTA_P1`, `PRODUCTS_OVERVIEW_P1`, `BLOG_TITLE`, `CONTACT_HEADER`
- [ ] Update `renders WHO and WHY sections` test: verify all 3 WHY paragraphs + all 3 WHO paragraphs render
- [ ] Add test: `renders CTA section with header and Calendly button`
- [ ] Update `renders Products section` test: add `data-testid="product-card-btn-blog"` assertion (4 cards)
- [ ] Add test: `navigates to /blog from Blog product button`
- [ ] Add test: `renders Products overview text`
- [ ] Add test: `renders Contact section`
- [ ] Remove or update `renders Work With Us section` test (if the row is removed or renamed to CTA)
- [ ] Confirm `axe` test still passes with structural changes (screen reader landmarks)
- [ ] Target: maintain or improve current coverage (≥95% line, ≥80% branch)

**Tasks — Services.test.tsx**:

- [ ] Rewrite all tests to use new exported constants (Consulting/Mentorship)
- [ ] Test: `renders Consulting section with header and intro`
- [ ] Test: `renders all 3 Consulting sub-items (ASaaPs, AI Integration, QA)` as h4 headings
- [ ] Test: `renders Mentorship section with header and intro`
- [ ] Test: `renders all 4 Mentorship sub-items (CCCs, Coaching, OpenClassrooms, SOTC)` as h4 headings
- [ ] Test: `renders Consulting CTA`
- [ ] Test: `renders Mentorship CTA`
- [ ] Test: `has no basic accessibility violations` (axe)
- [ ] Remove all stale tests for `consultation`, `quality assurance`, `web mentorship`, `software production`

**Acceptance criteria**:

- `yarn test` passes with 0 failures
- Coverage does not regress below Phase 5 baseline (Stmt ≥94.65%, Branch ≥80.87%, Fn ≥92.22%, Line ≥95.30%)
- All new sections are represented in tests
- `axe` assertions pass for both Home and Services

---

### Phase 3 Review — Review Gate

**Agent**: Review  
**Deliverables**: `## Phase 3 Review Output` in scratchpad, verdict: APPROVED  
**Depends on**: Phase 3 committed  
**Status**: ⬜ Not started

---

### Phase 4 — Accessibility + Visual QA

**Agent**: Implementation / Manual  
**Files changed**: None (validation only)  
**Depends on**: Phase 3 Review APPROVED  
**Status**: ⬜ Not started

**Tasks**:

- [ ] Run `yarn test` — all pass, coverage ≥ baseline
- [ ] Run `yarn build` — no TypeScript errors, no console errors
- [ ] Verify keyboard navigation order matches visual section order (Tab order: Splash → WHY → CTA → Services → WHO → Products → Contact)
- [ ] Verify all heading levels are correct (h2 for tagline, h3 for section headers, h4 for sub-items)
- [ ] Verify no orphaned `aria-label` or broken landmark regions from removed Work-With-Us row
- [ ] Screen reader smoke check (VoiceOver): intro → services → products flow is coherent
- [ ] Verify Calendly button renders correctly in CTA + Work-with-us replacement locations

**Acceptance criteria**:

- Build passes
- All tests pass
- No axe violations (automated)
- Heading hierarchy is correct across all new sections

---

### Phase 4 Review — Review Gate

**Agent**: Review  
**Deliverables**: `## Phase 4 Review Output` in scratchpad, verdict: APPROVED  
**Depends on**: Phase 4 validated  
**Status**: ⬜ Not started

---

### Phase 5 — PR + Merge

**Agent**: GitHub  
**Deliverables**: PR opened targeting `phase-5/full-implementation` (or `main` if Phase 5 PR has merged), all CI passes  
**Depends on**: Phase 4 Review APPROVED  
**Status**: ⬜ Not started

**Tasks**:

- [ ] Confirm target branch (check if PR #134 has merged; if yes, target `main`)
- [ ] Open PR: `feat(home): implement full homepage IA from website copy v1.0`
- [ ] PR body: reference this workplan, link to website copy doc, list all changed files
- [ ] Wait for CI to pass before requesting review
- [ ] Address any Copilot review feedback before merge

---

## Copy Source Reference

All copy implemented in this sprint is taken verbatim from:

> `consulting/docs/brand/accessitech-website-copy-complete.md` — v1.0, 2026-04-15, Comms Strategist

Section → constant mapping:

| Copy section                          | Component    | String constant(s)                             |
| ------------------------------------- | ------------ | ---------------------------------------------- |
| WHY Section (para 1)                  | Home.tsx     | `WHY_P1`                                       |
| WHY Section (para 2)                  | Home.tsx     | `WHY_P2`                                       |
| WHY Section (para 3)                  | Home.tsx     | `WHY_P3`                                       |
| CTA Section header                    | Home.tsx     | `CTA_HEADER`                                   |
| CTA Section body                      | Home.tsx     | `CTA_P1`, `CTA_P2`                             |
| Services — Consulting intro           | Services.tsx | `CONSULTING_INTRO`                             |
| Services — Consulting: ASaaPs         | Services.tsx | `ASAAPS_HEADER`, `ASAAPS_DESC`                 |
| Services — Consulting: AI Integration | Services.tsx | `AI_INTEGRATION_HEADER`, `AI_INTEGRATION_DESC` |
| Services — Consulting: QA             | Services.tsx | `QA_HEADER_NEW`, `QA_DESC`                     |
| Services — Mentorship intro           | Services.tsx | `MENTORSHIP_INTRO`                             |
| Services — Mentorship: CCCs           | Services.tsx | `CCCS_HEADER`, `CCCS_DESC`                     |
| Services — Mentorship: Coaching       | Services.tsx | `COACHING_HEADER`, `COACHING_DESC`             |
| Services — Mentorship: OpenClassrooms | Services.tsx | `OPENCLASSROOMS_HEADER`, `OPENCLASSROOMS_DESC` |
| Services — Mentorship: SOTC           | Services.tsx | `SOTC_HEADER`, `SOTC_DESC`                     |
| WHO Section (para 1)                  | Home.tsx     | `WHO_P1` (update existing)                     |
| WHO Section (para 2)                  | Home.tsx     | `WHO_P2`                                       |
| WHO Section (para 3)                  | Home.tsx     | `WHO_P3`                                       |
| Products Overview (para 1)            | Home.tsx     | `PRODUCTS_OVERVIEW_P1`                         |
| Products Overview (para 2)            | Home.tsx     | `PRODUCTS_OVERVIEW_P2`                         |
| Products Overview (para 3)            | Home.tsx     | `PRODUCTS_OVERVIEW_P3`                         |
| Contact section                       | Home.tsx     | `CONTACT_HEADER`, `CONTACT_P1`, `CONTACT_P2`   |

---

## Dependencies + Constraints

- **Copy is locked**: do not modify the website copy doc or draft new copy — use what is in v1.0 verbatim
- **VISION_P3 backwards-compat export**: `Home.tsx` currently exports `VISION_P3` for test compatibility — evaluate if this still makes sense after WHO expansion; may be removed if no tests reference it (check before removing)
- **Calendly integration**: `CalendlyButton` is already imported in Home.tsx — reuse in CTA section, do not duplicate the component
- **Services.SCSS image**: `PURPOSE_PIC` / purpose image may be removed from Services since the new layout is text-based — confirm visual design before removing
- **Branch target**: If PR #134 (`phase-5/full-implementation`) merges before this sprint begins, retarget this sprint's PR to `main`
- **Test coverage floor**: Do not merge if any coverage metric regresses below the Phase 5 baseline
- **Work-with-us-row removal**: The `work-with-us-row` section in Home.tsx is effectively replaced by the new CTA row — remove it to avoid duplicate CTAs; confirm no SCSS rules break

---

## Progress Tracker

| Phase | Description                  | Status         | Commit SHA |
| ----- | ---------------------------- | -------------- | ---------- |
| 0     | Workplan Review              | ⬜ Not started | —          |
| 1     | Home.tsx content + structure | ⬜ Not started | —          |
| 1R    | Phase 1 Review Gate          | ⬜ Not started | —          |
| 2     | Services component rewrite   | ⬜ Not started | —          |
| 2R    | Phase 2 Review Gate          | ⬜ Not started | —          |
| 3     | Test suite updates           | ⬜ Not started | —          |
| 3R    | Phase 3 Review Gate          | ⬜ Not started | —          |
| 4     | Accessibility + visual QA    | ⬜ Not started | —          |
| 4R    | Phase 4 Review Gate          | ⬜ Not started | —          |
| 5     | PR + Merge                   | ⬜ Not started | —          |
