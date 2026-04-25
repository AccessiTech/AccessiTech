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
| Q11: §4 encoding chain | Data-driven array | `{step, title, description, link}` objects (Comms fills P9) — embodies programmatic-first axiom |
| Q12: §6 core papers | 3 core papers featured | `endogenic-design-paper.md`, `values-encoding.md`, `bubble-clusters-substrate.md` — need tracking artifact for full research corpus mapping |

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
**Status**: ✅ Complete — APPROVED (after dependency annotation fix at commit `8ccf1bb`)

---

### Phase P1 — Internal Research Scouting (dogma corpus)

**Agent**: Research Scout (dogma-scoped)
**Scope**: `docs/research/` in `/Users/conor/Sites/dogma/` — 8 unread docs
**Deliverables**: Pivot table / JSONL mapping each doc → relevant page section + proposed inline link text; ≤2000 tokens to `## P1 Output`
**Gate**: P2 does not start until P1 Output written
**Status**: ✅ Complete — pivot table with 8 dogma docs mapped to page sections in scratchpad

---

### Phase P1 Review — Review Gate

**Agent**: Review
**Gate**: P2 does not begin until APPROVED
**Status**: ✅ Complete — APPROVED (after one mapping correction: scratchpad-architecture-decision moved from §6 to §4)

---

### Phase P2 — External Research Scouting (FE / product design)

**Agent**: Research Scout (external web)
**Topic**: Landing page patterns for OSS developer tools / governance products — scannability, link density, ReactMarkdown usage, comparable pages (linear.app, posthog.com, descript.com)
**Deliverables**: ≤2000 token summary to `## P2 Output`
**Gate**: P3 does not start until P2 Output written
**Status**: ✅ Complete — 9 external sources scouted; 3 patterns + Markdown findings in scratchpad

---

### Phase P2 Review — Review Gate

**Agent**: Review
**Gate**: P3 does not begin until APPROVED
**Status**: ✅ Complete — APPROVED

---

### Phase P3 — Triage Open Questions + Decisions with User

**Agent**: Orchestrator (direct — surface; wait for user)
**Deliverables**: All 10 open questions answered by user; decisions locked
**Gate**: P4 does not start until user confirms all decisions
**Status**: ✅ Complete — all 10 decisions locked (see P3 Decisions table above)

---

### Phase P4 — Update Workplan

**Agent**: Executive Orchestrator (direct — coordination)
**Deliverables**: This workplan updated with P3 decisions + Q11/Q12 follow-ups; committed
**Gate**: P5 does not start until committed
**Status**: ✅ Complete — committed at `3221d8d` (P3 decisions) and latest commit (Q11/Q12 follow-ups)

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
**Status**: ✅ Complete — committed at `f684085`

---

### Phase P5 Review — Review Gate

**Agent**: Review
**Depends on**: P5 scaffold build clean
**Gate**: P6 does not begin until APPROVED
**Status**: ✅ Complete — APPROVED (all 8 validation criteria passed)

---

### Phase P6 — Biz Dev Review → FE Iteration

**Agent**: Business Lead (review); AT - Frontend Developer (apply changes)
**Depends on**: P5 Review APPROVED
**Deliverables**: Structured feedback applied; committed
**Gate**: P7 does not start until Biz Dev returns APPROVED
**Status**: ✅ Complete — Business Lead REQUEST CHANGES (2 issues: brand hierarchy prose, CTA visual hierarchy) → changes applied at `907500f`

---

### Phase P6 Review — Review Gate

**Agent**: Review
**Depends on**: P6 changes committed
**Gate**: P7 does not begin until APPROVED
**Status**: ✅ Complete — APPROVED (all 6 validation criteria passed)

---

### Phase P7 — User Manual Review

**Agent**: Orchestrator (surface; wait)
**Depends on**: P6 Biz Dev APPROVED
**Gate**: P8 does not start until user green-lights
**Status**: ✅ Complete — user green-lit scaffold structure

---

### Phase P8 — Tests Pass → Commit to Branch

**Agent**: AT - Frontend Developer + AT - QA Tester
**Depends on**: P7 user green-light
**Deliverables**: All tests pass (444+); committed to branch
**Gate**: P9 does not start until commit SHA confirmed
**Status**: ✅ Complete — commit `e5bddef` (all 446/446 tests passing)

---

### Phase P9 — Comms: Draft Copy as Markdown String Constants

**Agent**: Comms Strategist
**Depends on**: P8 commit SHA confirmed
**Deliverables**: All copy as named Markdown string constants — inline-linked, external validation woven in (both inline + dedicated section), brand-voice aligned
**Gate**: P10 does not start until draft committed
**Status**: ✅ Complete — commit `4c380c1` (15 named constants, 7-step encoding chain array, GitHub links, brand voice)

---

### Phase P10 — FE: Markdown Rendering Integration

**Agent**: AT - Frontend Developer
**Depends on**: P9 Comms draft committed
**Approach**: `ReactMarkdown` + `remarkGfm` (installed; same pattern as BlogEntry.tsx)
**Deliverables**: Page renders all Markdown; TypeScript 0 errors; tests updated
**Gate**: P11 does not start until build clean
**Status**: ✅ Complete — commit `ff5b2e7` (ReactMarkdown integration complete, 448/448 tests pass)

---

### Phase P11 — User Personal Review

**Depends on**: P10 build clean
**Gate**: Repeat P9–P11 as needed until user green-lights
**Status**: ✅ Complete — user provided 4 change requests, decisions locked

#### P11 User Feedback Summary
1. Text alignment: make all content below Hero left-aligned
2. Harness framing: introduce absence of AI harnesses as part of problem; reference issue #550, ADR-011, LangChain article
3. New section: "Why your AI needs a Harness"
4. Split Research: "What the Research Says" → Internal (our papers) + External (closed issues + manifest.json)

#### P11A — Document Decisions + Update Workplan
**Status**: ✅ Complete — decisions documented in scratchpad + workplan

#### P11B — Research Scout: Harness Corpus
**Agent**: Research Scout  
**Status**: ✅ Complete — scouted harness-memory-governance.md, ADR-011, dogmamcp-open-harness-validation.md, competitor-landscape, ai-platform-lock-in-risks, cached LangChain article

#### P11C — Comms: Draft New/Revised Copy
**Agent**: Comms Strategist  
**Status**: ✅ Complete — placement decision (B: after §3), revised PROBLEM_INTRO, 7 new HARNESS_* constants, split research constants (Internal/External)

#### P11C Review — Review Gate
**Status**: ✅ Complete — APPROVED (inline)

#### P11D — FE: Implement Structural Changes
**Agent**: AT - Frontend Developer  
**Status**: ✅ Complete — commit `bea3b18` (text left-alignment, new §3.5 harness section, split §6 research, 450/450 tests pass)

#### P11D Review — Review Gate
**Agent**: Review  
**Status**: ✅ Complete — APPROVED (all 10 validation criteria passed)

#### P11E — Document Second-Round Decisions + Update Workplan
**Status**: ✅ Complete — all 7 user feedback items documented with implementation strategies; P11E-K phases defined

#### User Feedback Round 2 Summary (7 items)
1. Harness issue more prominent in problem statement
2. Problem cards: 2-across layout, wrap to second row, 4 total (+ harness cards → subsections)
3. Split "Why your AI needs a Harness": problem → §2, solution subsections → §3
4. Section reorder: How It Works after dogma & DogmaMCP
5. Research sections: full-bleed dark blue bg, white text, yellow links
6. CTA section: add `.getstartedsection` class
7. Replace custom CTA with GetStartedSection component

#### P11F — Comms: Review Harness Content Split
**Agent**: Comms Strategist  
**Depends on**: P11E decisions documented  
**Deliverables**: Recommendation on harness content split (§2 problem framing vs §3 solution subsections); draft any new constants (PROBLEM_CARD_4 if needed)  
**Gate**: P11G does not start until Comms returns recommendation  
**Status**: ⬜ Not started

#### P11F Review — Review Gate
**Status**: ⬜ Not started

#### P11G — FE: Section Restructuring
**Agent**: AT - Frontend Developer  
**Depends on**: P11F Comms recommendation  
**Deliverables**:
- §2 Problem: 4 Cards in 2-across layout (UK CMA, Meta/Moltbook, OWASP, Harness Lock-In)
- §3 What EndogenAI: Add 2 h3 subsections (Open Harness Solution + DogmaMCP Governance-First)
- Remove §3.5 entirely (content redistributed to §2 and §3)
- Reorder sections: §4 dogma/DogmaMCP, §5 How It Works (moved), §6 Research, §7 CTA
- Update tests for section numbering, harness content location  
**Gate**: P11H does not start until build clean + tests pass  
**Status**: ⬜ Not started

#### P11G Review — Review Gate
**Status**: ⬜ Not started

#### P11F — Comms: Review Harness Content Split
**Agent**: Comms Strategist  
**Depends on**: P11E decisions documented  
**Deliverables**: Recommendation on harness content split (§2 problem framing vs §3 solution subsections); draft any new constants (PROBLEM_CARD_4 if needed)  
**Gate**: P11G does not start until Comms returns recommendation  
**Status**: ✅ Complete — PROBLEM_CARD_4 drafted, subsection headings provided

#### P11F Review — Review Gate
**Status**: ✅ Complete — APPROVED

#### P11G — FE: Section Restructuring
**Agent**: AT - Frontend Developer  
**Depends on**: P11F Comms recommendation  
**Deliverables**:
- §2 Problem: 4 Cards in 2-across layout (UK CMA, Meta/Moltbook, OWASP, Harness Lock-In)
- §3 What EndogenAI: Add 2 h3 subsections (Open Harness Solution + DogmaMCP Governance-First)
- Remove §3.5 entirely (content redistributed to §2 and §3)
- Reorder sections: §4 dogma/DogmaMCP, §5 How It Works (moved), §6 Research, §7 CTA
- Update tests for section numbering, harness content location  
**Gate**: P11H does not start until build clean + tests pass  
**Status**: ✅ Complete — Commit 466a74c, 9/9 tests passing, TypeScript clean

#### P11G Review — Review Gate
**Status**: ✅ Complete — APPROVED

#### P11H — FE: CSS Visual Styling
**Agent**: AT - Frontend Developer  
**Depends on**: P11G build clean  
**Deliverables**:
- Research sections: `.research-section` class with full-bleed dark blue bg (#061a32), white text, yellow links
- CTA section: Apply `.getstartedsection` class (lookup existing usage in other ProductPage files)
- Validate WCAG 2.1 AA contrast ratios  
**Gate**: P11I does not start until styling committed  
**Status**: ✅ Complete — Commit 78073c4, WCAG AAA validated (21:1 text, 12.3:1 links)

#### P11H Review — Review Gate
**Status**: ✅ Complete — APPROVED

#### P11I — FE: GetStartedSection Component Integration
**Agent**: AT - Frontend Developer  
**Depends on**: P11H styling committed  
**Deliverables**:
- Lookup GetStartedSection component API (src/components/GetStartedSection/)
- Replace custom endogenai-cta with `<GetStartedSection />` component
- Pass EndogenAI-specific props (title, description, primaryCta, secondaryCta)  
**Gate**: P11J does not start until component integrated + tests pass  
**Status**: ✅ Complete — Commit f20a22d, component integrated with EndogenAI-specific props

#### P11I Review — Review Gate
**Status**: ✅ Complete — APPROVED

#### P11J — QA: Validate All Second-Round Changes
**Agent**: AT - QA Tester  
**Depends on**: P11I component integration complete  
**Deliverables**: Validate 7 feedback items:
1. 4 problem cards render 2-across (responsive wrap on mobile)
2. Harness content correctly split (§2 problem, §3 solution subsections)
3. Section order correct (§5 How It Works after §4 dogma)
4. Research sections: dark blue bg + sufficient contrast
5. GetStartedSection renders with correct props
6. All links functional
7. Responsive check (mobile/tablet/desktop)  
**Gate**: P11K does not start until QA returns validation  
**Status**: ✅ Complete — All 7 items validated ✅, 0 issues found, overall verdict PASS

#### P11J Review — Review Gate
**Status**: ✅ Complete — APPROVED

#### P11K — Final Review Gate for P11E-J
**Agent**: Review  
**Depends on**: P11J QA validation complete  
**Deliverables**: APPROVED or REQUEST CHANGES against validation criteria (section restructuring, card layouts, visual styling, GetStartedSection integration, tests pass, TypeScript clean)  
**Gate**: P12 does not start until APPROVED  
**Status**: ✅ Complete — APPROVED (all 10 validation criteria passed)

#### P11L — Document Third-Round Decisions + Update Workplan
**Agent**: Orchestrator (direct — coordination)
**Depends on**: P11K Final Review APPROVED
**Deliverables**: 7 new feedback items documented with implementation strategy; P11L-R phases defined; workplan committed
**Gate**: P11M does not start until committed
**Status**: ✅ Complete — documented below (commit TBD)

#### User Feedback Round 3 Summary (7 items)
1. **Scannability overhaul**: Entire page needs to be LOT more scannable — review styleguides, scannability research, scout web resources; add subheaders, visual chunking throughout
2. **Problem cards**: Shorten card content; embed more links in text; add react-bootstrap Modal for "drill into card content" (one per card)
3. **§3 What EndogenAI**: Needs subheaders for scannability; double-column layout for chunking
4. **Encoding chain items**: "The framework encodes governance as:" list → each item becomes a "little card" (Card component)
5. **Section flow/duplication**: §3 mentions "DogmaMCP: Governance-First Harness Implementation" BEFORE §4 introduces dogma & DogmaMCP cards → resolve duplication by removing §3 harness subsections; let §4 be the authoritative product introduction
6. **Research section inner alignment**: Full-bleed background is correct; inner content needs 8-span 2-offset alignment matching rest of page; give each research item its own Card
7. **Duplicate CTA**: Remove duplicate "Get Started" — currently `h2 "Get Started" + CTA_DESCRIPTION + GitHub Button` above `GetStartedSection` (which has its own `h3 "Get Started"`). Remove the outer wrapper; keep GetStartedSection as sole CTA.

#### P11L Decisions Locked
| Item | Decision |
|---|---|
| §3 harness subsections | REMOVE h3 "Open Harness Architecture" + h3 "DogmaMCP: Governance-First" from §3; §4 becomes authoritative product introduction |
| §3 subheader structure | Split WHAT_ENDOGENAI_INTRO into 3 subheaded chunks: "Three Core Axioms", "The Governance Stack" (with cards), "The Open-Source Model" |
| §3 double-column | Use Bootstrap Row/Col md={6} for the 3-subheader blocks within §3 |
| Encoding chain | Convert ENCODING_STEPS from border-div layout to Bootstrap Cards in 2-col grid (md={6}) |
| Problem card modals | Add react-bootstrap Modal — 4 modals (one per card); short teaser in card; full content in modal |
| Problem card short copy | Comms drafts SHORT_BODY (1-2 sentences + link) per card; existing body moves to MODAL_BODY |
| Research inner alignment | Wrap `<section>` content in `<Col xs={12} sm={{span: 8, offset: 2}}>` inside `.research-section` full-bleed wrapper |
| Research items as cards | Convert RESEARCH_INTERNAL_FINDINGS + RESEARCH_EXTERNAL_FINDINGS from markdown blocks to Card arrays |
| Duplicate CTA | Remove outer h2/CTA_DESCRIPTION/GitHub button; keep ONLY GetStartedSection; add GitHub as tertiary link below GetStartedSection |

#### P11M — Comms: Draft Shortened Copy + Structure
**Agent**: Comms Strategist
**Depends on**: P11L decisions documented
**Deliverables**:
- SHORT_BODY for all 4 problem cards (1-2 sentences + link, ≤50 words each)
- 3 subheader copy blocks for §3 (axioms text, governance stack intro, open-source model text)
- Research item arrays (internal: 4 items; external: 4 items) as `{title, body, link}` objects
- Recommendation on GitHub CTA tertiary text
**Gate**: P11N Review does not start until Comms returns
**Status**: ⬜ Not started

#### P11M Review — Review Gate
**Agent**: Review
**Status**: ⬜ Not started

#### P11N — FE: Implement All 7 Feedback Items
**Agent**: AT - Frontend Developer
**Depends on**: P11M Comms draft committed
**Deliverables**:
1. Problem cards: short teaser content + "Learn more" modal trigger; 4 Modal components with full content
2. §3 What EndogenAI: 3 subheader sections (h3) in 2-col layout; remove harness h3 subsections
3. §3 Governance stack: GOVERNANCE_STACK_ITEMS array rendered as Cards (mini-cards in Row/Col)
4. §4 Encoding chain: ENCODING_STEPS rendered as Bootstrap Cards in 2-col grid (md=6)
5. §5 dogma & DogmaMCP: no change (already cards)
6. §6 Research: full-bleed wrapper maintained; inner content wrapped in Col xs=12 sm={span:8, offset:2}; each item as Card
7. §7 CTA: remove h2/description/GitHub button; keep GetStartedSection + tertiary GitHub link below
8. All TypeScript 0 errors; tests updated
**Gate**: P11O Review does not start until build clean + tests pass
**Status**: ⬜ Not started

#### P11N Review — Review Gate
**Agent**: Review
**Status**: ⬜ Not started

#### P11O — QA: Validate All Third-Round Changes
**Agent**: AT - QA Tester
**Depends on**: P11N FE implementation committed
**Deliverables**: Validate all 7 feedback items:
1. Page scannability: subheaders present throughout; visual chunking clear
2. Problem cards: short content; modals open/close; full content in modal
3. §3 subheaders: 3 h3 sections; double-column layout renders at md breakpoint
4. Governance stack: mini-cards render for each item
5. Encoding chain: Cards in 2-col grid
6. Research inner alignment: 8-span 2-offset; items as Cards; full-bleed background maintained
7. Single CTA: no duplicate "Get Started" heading
**Gate**: P11P does not start until QA returns validation
**Status**: ⬜ Not started

#### P11P — Final Review Gate for P11L-O
**Agent**: Review
**Depends on**: P11O QA complete
**Deliverables**: APPROVED or REQUEST CHANGES
**Gate**: P12 does not start until APPROVED
**Status**: ✅ Complete — APPROVED with 1 accessibility fix applied (aria-label on "Learn more" buttons), committed at cdb7613

---

#### P11Q — Document Fourth-Round Decisions + Update Workplan
**Agent**: Orchestrator (direct — coordination)
**Depends on**: P11P Final Review APPROVED
**Deliverables**: 5 new feedback items documented with implementation strategy; P11Q-V phases defined; workplan committed
**Gate**: P11R does not start until committed
**Status**: ✅ Complete — documented in scratchpad (commit TBD)

#### User Feedback Round 4 Summary (5 items)
1. **"Our Research" links 404**: Internal research links point to non-existent URLs; scout proper links in dogma repo
2. **"How It Works" cards**: undo 2-col grid → full-width single-column stack; undo step number color styling
3. **"How It Works" links**: GitHub links should point to specific doc sections (e.g., `#manifesto`, `#agents-md`) not just repo root
4. **"What the Research Says" alignment**: Full-bleed bg correct; remove inner 8-span 2-offset wrapper → match full-width alignment of other sections
5. **Extend modal pattern**: Apply "Learn more" modal pattern to: §4 dogma/DogmaMCP (2 cards), §5 Encoding (7 cards), §6 Research (8 cards)

#### P11Q Decisions Locked
| Item | Decision |
|---|---|
| Research links 404 | Scout dogma repo for proper URLs to each internal research doc (4 items); update RESEARCH_INTERNAL_ITEMS links |
| §5 Encoding full-width | Remove `Col md={6}` grid; render cards as single-column full-width stack |
| §5 Step number styling | Remove `.step-number` color styling (blue); use default text color |
| §5 GitHub link targets | Update each ENCODING_STEPS link to target specific README sections (`#foundational-axioms`, `#operational-constraints`, etc.) |
| §6 Research alignment | Remove `Col xs={12} sm={{span:8, offset:2}}` wrapper; use full-width container matching other sections |
| Modal pattern extension | Add SHORT_BODY/MODAL_BODY pairs to: dogma/DogmaMCP cards (2), Encoding cards (7), Research cards (8) = 17 new SHORT_BODY constants |

#### P11R — Comms: Scout Research Links + Draft SHORT_BODY for All Remaining Cards
**Agent**: Comms Strategist + Research Scout
**Depends on**: P11Q decisions documented
**Deliverables**:
- Scout dogma repo for proper URLs (4 internal research items): verify each doc exists at `https://github.com/EndogenAI/dogma/blob/main/docs/research/[filename].md`
- Draft SHORT_BODY (1-2 sentences, ≤55 words) for: dogma card, DogmaMCP card, 7 Encoding cards, 8 Research cards (17 new SHORT_BODY constants)
- Identify proper GitHub section anchors for 7 Encoding step links
**Gate**: P11S does not start until Comms returns verified links + SHORT_BODY drafts
**Status**: ⬜ Not started

#### P11R Review — Review Gate
**Agent**: Review
**Status**: ⬜ Not started

#### P11S — FE: Implement All 5 Feedback Fixes
**Agent**: AT - Frontend Developer
**Depends on**: P11R Comms draft committed
**Deliverables**:
1. Research links: Update RESEARCH_INTERNAL_ITEMS with correct URLs
2. §5 Encoding: Remove Col md={6} grid → single-column full-width; remove `.step-number` color styling
3. §5 Encoding links: Update to specific section anchors (e.g., `https://github.com/EndogenAI/dogma#manifesto-md`)
4. §6 Research: Remove inner Col xs=12 sm={span:8,offset:2} wrapper → full-width like other sections
5. Modals for all cards: Add Modal + SHORT_BODY/MODAL_BODY pattern to §4 (2 cards), §5 (7 cards), §6 (8 cards)
6. TypeScript 0 errors; tests updated
**Gate**: P11T Review does not start until build clean + tests pass
**Status**: ✅ Complete — committed at 54a3bf3 (452/452 tests passing)

#### P11S Review — Review Gate
**Agent**: Review
**Status**: ✅ Complete — APPROVED (all 5 criteria met)

#### P11T — QA: Validate All Fourth-Round Changes
**Agent**: AT - QA Tester
**Depends on**: P11S FE implementation committed
**Deliverables**: Validate all 5 feedback items:
1. Internal research links: all 4 links resolve (no 404s)
2. §5 Encoding: cards render full-width single-column; step numbers use default text color
3. §5 Encoding links: all 7 links point to specific README sections
4. §6 Research: content full-width, not offset/narrowed
5. Modals: all 17 cards (§4: 2, §5: 7, §6: 8) have "Learn more" button → Modal; SHORT_BODY in card, MODAL_BODY in modal
**Gate**: P11U does not start until QA returns validation
**Status**: ✅ Complete — PARTIAL PASS (4/5 items ✅; anchor fix for Steps 3+5 applied in same commit)

#### P11U — Final Review Gate for P11Q-T
**Agent**: Review
**Depends on**: P11T QA complete + Step 3/5 anchor fix applied
**Deliverables**: APPROVED or REQUEST CHANGES
**Gate**: P12 does not start until APPROVED
**Status**: ✅ Complete — APPROVED (b699f9c — all 10 criteria pass)

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
| `3e8cc5c` | docs(plans): scaffold EndogenAI bespoke page workplan |
| `8ccf1bb` | docs(plans): add dependency annotations to P5-P15 phases |
| `3221d8d` | docs(plans): record P3 architecture decisions (Q1-Q10) |
| `dd8da25` | docs(plans): add Q11/Q12 follow-up decisions to workplan |
| `54b2458` | docs(plans): update workplan with P0-P4 progress |
| `f684085` | feat(endogenai): scaffold bespoke 7-section product page |
| `907500f` | feat(endogenai): apply Biz Dev feedback — brand prose + CTA hierarchy |
| `2497ab0` | docs(plans): update workplan with P5-P6 completion + commit history |
| `e5bddef` | test(endogenai): verify all tests pass (446/446) |
| `4c380c1` | feat(endogenai): add all Markdown copy constants (P9 Comms) |
| `ff5b2e7` | feat(endogenai): integrate ReactMarkdown rendering (P10) |
| `bea3b18` | feat(endogenai): P11D structural changes — harness section, split research, text alignment |
