---
title: "EndogenAI Bespoke Page Sprint"
date: 2026-04-24
branch: feat/endogenai-oss-product-page
pr: "https://github.com/AccessiTech/AccessiTech/pull/147"
status: active
sprint: "EndogenAI Bespoke Page"
---

# EndogenAI Bespoke Page Sprint

## Objective

Replace the existing ProductPage-template-based `EndogenAI.tsx` with a fully bespoke page type — homepage-feel, highly scannable, link-heavy, with external research validation woven inline and in a dedicated section. The page must represent the full EndogenAI brand hierarchy (AccessiTech practice → EndogenAI methodology → dogma corpus → DogmaMCP runtime) and serve as the primary public-facing introduction to the EndogenAI OSS governance stack.

**Governing axiom**: Endogenous-First  
**Primary endogenous sources**: Active scratchpad `.tmp/feat-endogenai-oss-product-page/2026-04-24.md`; `consulting/docs/brand/accessitech-website-copy-complete.md`; dogma corpus at `docs/research/`

## Architecture Locked (from prior session + P3 triage)

| Decision | Value |
|---|---|
| Page architecture | Option A — Problem-first narrative arc |
| External validation | BOTH inline (woven, including own research synthesis papers) AND dedicated callout blocks in §6 |
| Markdown copy strategy | Comms agent drafts as Markdown string constants; FE renders via `ReactMarkdown` (same as BlogEntry.tsx) |
| Encoding chain visual | **(P3 LOCKED)** Stepped numbered list — note: steps/substrates are variable; present as "current baseline" |
| File strategy | **(P3 LOCKED)** Replace `EndogenAI.tsx` in-place; no route changes |
| Card components | **(P3 LOCKED)** react-bootstrap `Card` component (not raw HTML/Bootstrap classnames) |
| Bottom CTA hierarchy | **(P3 LOCKED)** Primary: GitHub button → Secondary: GetStartedSection → Tertiary: CalendlyButton |
| Test assertions | **(P3 LOCKED)** String constant matching (import exported constants in tests) |
| SCSS approach | **(P3 LOCKED)** Mix: react-bootstrap component APIs + Bootstrap classnames + custom `EndogenAI.scss` for layout |
| External doc links | **(P3 LOCKED)** mkdocs URLs where live (`https://endogenai.github.io/dogma/`); GitHub file view for gaps. Note: mkdocs 404 as of 2026-04-24 — use GitHub file view for all links now; follow-up: deploy dogma mkdocs |
| §2 structure | **(P3 LOCKED)** Hybrid — 1–2 sentence intro + 3 callout blocks |
| §6 structure | **(P3 LOCKED)** Both callout blocks + inline citations; own dogma research synthesis papers cited inline |

## Brand / Product Hierarchy (LOCKED)

| Name | Layer | What it is | Cost |
|---|---|---|---|
| AccessiTech | Practice | Founder-led consulting firm | Paid |
| EndogenAI | Methodology | OSS AI governance theory — NOT a product/tool | Free |
| dogma | Corpus | OSS governance corpus | Free/OSS |
| DogmaMCP | Runtime | MCP server — 13 governance tools | Free/OSS |

**Attribution (canonical)**: *"dogma is the open-source implementation of the EndogenAI AI governance methodology — built and maintained by AccessiTech."*

## Proposed Section Structure

| # | Section | Purpose | External validation |
|---|---|---|---|
| 1 | Hero / tagline | Bold 1–2 line governance gap statement | — |
| 2 | The problem | Why ungoverned agents fail — 3 callout blocks | UK CMA, Meta/Moltbook, OWASP LLM Top 10 |
| 3 | What EndogenAI is | Methodology overview, link-heavy | MANIFESTO.md, AGENTS.md, GitHub |
| 4 | How it works | Encoding chain visual | Each layer's GitHub file |
| 5 | dogma & DogmaMCP | Two OSS implementations — cards | github.com/EndogenAI/dogma, DogmaMCP docs |
| 6 | What the research says | Dedicated external validation block | CMA, Meta/Moltbook, competitor landscape, civic AI |
| 7 | CTA | "Explore on GitHub" + consulting | GitHub + GetStartedSection |

## Research Corpus Available (dogma/docs/research/)

| Doc | Key finding | Page section |
|---|---|---|
| `ai-autonomy-governance.md` | UK CMA March 2026: unrestricted agents → consumer harm | §2 Problem, §6 Research |
| `ai-platform-lock-in-risks.md` | Meta/Moltbook: ToS shifted liability in 48h | §2 Problem, §6 Research |
| `competitor-landscape-agentic-frameworks.md` | dogma uncontested in values-governance niche | §5 dogma/DogmaMCP, §6 Research |
| `dogmamcp-open-harness-validation.md` | DogmaMCP: 5/6 open harness criteria | §5 dogma/DogmaMCP, §6 Research |
| `civic-ai-governance.md` | Values specification precedes tool selection | §3 What EndogenAI is |
| `owasp-llm-threat-model.md` | OWASP LLM Top 10: excessive agency | §2 Problem, §6 Research |

**Unread queue for P1 scouting**: `values-encoding.md`, `ai-cognitive-load.md`, `ramp-l0l3-framework.md`, `agent-taxonomy.md`, `harness-memory-governance.md`, `scratchpad-architecture-decision.md`, `orchestrator-autopilot-failure.md`, `async-process-handling.md`

## P3 Decisions (LOCKED 2026-04-24)

| Q | Decision | Notes |
|---|---|---|
| Q1: External validation links | mkdocs URLs (`https://endogenai.github.io/dogma/`) | mkdocs 404 as of 2026-04-24 — use GitHub file view for all links now; follow-up: deploy dogma mkdocs |
| Q2: Encoding chain visual | Stepped numbered list | Steps are variable — present as "current baseline" |
| Q3: Cards | react-bootstrap `Card` component | For consistency with rest of site |
| Q4: Bottom CTA | All three with hierarchy | Primary: GitHub → Secondary: GetStartedSection → Tertiary: CalendlyButton |
| Q5: File strategy | Replace in-place | Edit `src/pages/Products/EndogenAI.tsx`; no route changes |
| Q6: Test assertions | String constant matching | Import exported constants directly |
| Q7: SCSS | Mix | react-bootstrap APIs + Bootstrap classnames + custom `EndogenAI.scss` |
| Q8: dogma doc links | GitHub file view for now | Migrate to mkdocs URLs once deployed |
| Q9: §6 framing | Both callout blocks + inline citations | Own dogma research synthesis papers are valid citation sources (inline only) |
| Q10: §2 structure | Hybrid | 1–2 sentence intro + 3 callout blocks |

---

## Phase Structure

### Phase P0 — Sprint Planning + Questions

**Agent**: Executive Orchestrator (direct — coordination)
**Deliverables**: This workplan committed; 8 open questions surfaced to user
**Depends on**: `087371b` (ProductPage CTA styling) confirmed committed
**Gate**: P1 does not start until user confirms questions are understood
**Status**: ✅ Complete

---

### Phase P0 Review — Review Gate

**Agent**: Review
**Deliverables**: APPROVED verdict in scratchpad under `## P0 Review Output`
**Gate**: P1 does not begin until APPROVED
**Status**: ⬜ Not started

---

### Phase P1 — Internal Research Scouting (dogma corpus)

**Agent**: Research Scout (dogma-scoped)
**Scope**: `docs/research/` in `/Users/conor/Sites/dogma/` — 8 unread docs
**Deliverables**: Pivot table / JSONL mapping each doc → relevant page section + proposed inline link text; ≤2000 tokens to `## P1 Output`
**Gate**: P2 does not start until P1 Output written
**Status**: ⬜ Not started

---

### Phase P1 Review — Review Gate

**Agent**: Review
**Gate**: P2 does not begin until APPROVED
**Status**: ⬜ Not started

---

### Phase P2 — External Research Scouting (FE / product design)

**Agent**: Research Scout (external web)
**Topic**: Landing page patterns for OSS developer tools / governance products — scannability, link density, ReactMarkdown usage, comparable pages (linear.app, posthog.com, descript.com)
**Deliverables**: ≤2000 token summary to `## P2 Output`
**Gate**: P3 does not start until P2 Output written
**Status**: ⬜ Not started

---

### Phase P2 Review — Review Gate

**Agent**: Review
**Gate**: P3 does not begin until APPROVED
**Status**: ⬜ Not started

---

### Phase P3 — Triage Open Questions + Decisions with User

**Agent**: Orchestrator (direct — surface; wait for user)
**Deliverables**: All 10 open questions answered by user; decisions locked
**Gate**: P4 does not start until user confirms all decisions
**Status**: ✅ Complete — all 10 decisions locked (see P3 Decisions table above)

---

### Phase P4 — Update Workplan

**Agent**: Executive Planner
**Deliverables**: This workplan updated with P3 decisions; committed
**Gate**: P5 does not start until committed
**Status**: ⬜ Not started

---

### Phase P5 — Scaffold FE Page

**Agent**: AT - Frontend Developer
**Depends on**: P4 Update Workplan committed (which itself depends on P3 user decisions locked)
**Deliverables**:
- `src/pages/Products/EndogenAI.tsx` — bespoke scaffold, correct section structure, placeholder copy, no ProductPage template
- `EndogenAI.scss` created (if P3 decides SCSS; else Bootstrap-only)
- All display strings as exported named constants
- Builds clean, TypeScript 0 errors

**Gate**: P5 Review does not start until build clean
**Status**: ⬜ Not started

---

### Phase P5 Review — Review Gate

**Agent**: Review
**Depends on**: P5 scaffold build clean
**Gate**: P6 does not begin until APPROVED
**Status**: ⬜ Not started

---

### Phase P6 — Biz Dev Review → FE Iteration

**Agent**: Business Lead (review); AT - Frontend Developer (apply changes)
**Depends on**: P5 Review APPROVED
**Deliverables**: Structured feedback applied; committed
**Gate**: P7 does not start until Biz Dev returns APPROVED
**Status**: ⬜ Not started

---

### Phase P7 — User Manual Review

**Agent**: Orchestrator (surface; wait)
**Depends on**: P6 Biz Dev APPROVED
**Gate**: P8 does not start until user green-lights
**Status**: ⬜ Not started

---

### Phase P8 — Tests Pass → Commit to Branch

**Agent**: AT - Frontend Developer + AT - QA Tester
**Depends on**: P7 user green-light
**Deliverables**: All tests pass (444+); committed to branch
**Gate**: P9 does not start until commit SHA confirmed
**Status**: ⬜ Not started

---

### Phase P9 — Comms: Draft Copy as Markdown String Constants

**Agent**: Comms Strategist
**Depends on**: P8 commit SHA confirmed
**Deliverables**: All copy as named Markdown string constants — inline-linked, external validation woven in (both inline + dedicated section), brand-voice aligned
**Gate**: P10 does not start until draft committed
**Status**: ⬜ Not started

---

### Phase P10 — FE: Markdown Rendering Integration

**Agent**: AT - Frontend Developer
**Depends on**: P9 Comms draft committed
**Approach**: `ReactMarkdown` + `remarkGfm` (installed; same pattern as BlogEntry.tsx)
**Deliverables**: Page renders all Markdown; TypeScript 0 errors; tests updated
**Gate**: P11 does not start until build clean
**Status**: ⬜ Not started

---

### Phase P11 — User Personal Review

**Depends on**: P10 build clean
**Gate**: Repeat P9–P11 as needed until user green-lights
**Status**: ⬜ Not started

---

### Phase P12 — Cross Review: Comms + Biz Dev (content quality)

**Agent**: Comms Strategist + Business Lead
**Depends on**: P11 user green-light
**Deliverables**: Both return APPROVED or structured REQUEST CHANGES
**Gate**: P13 does not start until both APPROVED
**Status**: ⬜ Not started

---

### Phase P13 — Cross Review: FE + QA + a11y

**Agent**: AT - Frontend Developer + AT - QA Tester
**Depends on**: P12 both APPROVED
**Deliverables**: WCAG 2.1 AA audit; responsive check; 0 lint errors; all tests green
**Gate**: P14 does not start until all three APPROVED
**Status**: ⬜ Not started

---

### Phase P14 — Documentation + Test Suite

**Agent**: AT - Frontend Developer + AT - QA Tester
**Depends on**: P13 all three APPROVED
**Deliverables**:
- Vitest unit tests: section rendering, string constants, links, a11y attributes
- Integration tests: route-level (`/products/endogenai` returns expected content)
- Conversion route tests: CTAs present and correctly linked
- All tests committed and passing

**Gate**: P15 does not start until all pass
**Status**: ⬜ Not started

---

### Phase P15 — Final Pre-Commit Review → Push to PR

**Agent**: Review (final); GitHub Agent (push)
**Depends on**: P14 all tests committed and passing
**Deliverables**: Review APPROVED; PR #147 updated
**Gate**: Session closes when PR URL confirmed
**Status**: ⬜ Not started

---

## Commit History Reference

| Commit | Description |
|---|---|
| `88799fb` | feat(products): add EndogenAI product page at /products/endogenai |
| `9e16396` | fix(products/endogenai): QA fixes — inquiry param, URL format, add tests |
| `275b6e8` | fix(ProductPage): render ctaLabel/ctaHref/relatedServices props |
| `087371b` | chore: Use react-bootstrap Button for ProductPage CTA |
