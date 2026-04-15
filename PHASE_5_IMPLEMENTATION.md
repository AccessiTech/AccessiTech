# Phase 5 Implementation Plan — AccessiTech Website

**Timeline**: April 15–19 (Pre-Flight Unblocks) → April 21–25 (Build Sprint)  
**Scope**: Product pages + Blog infrastructure + CTA/conversion flows  
**Team**: Full fleet orchestration (Conor orchestrating; devrel, docs, qa, devops specialists)  
**Branch**: `phase-5/full-implementation`  
**Status**: 🟢 Pre-Flight Phase (Apr 15–19) → Build Phase (Apr 21–25)

---

## Executive Summary

Phase 5 implements the **complete AccessiTech website** using locked Sprint B copy and decisions. This is the final implementation phase before launch.

**Deliverables**:
- 3 Product page templates (WCAG Series, OSS/ASaaPs, AccessiTech CCCs) — 5-section consistent template per Decision #7  
- Blog infrastructure (categories, tags, series, collections, featured images per Decision #6)
- CTA & conversion flows (Calendly integration, smart contact form routing per Decision #5)
- RSS/sitemap generation (existing)
- Deployment validation (GitHub Pages static build)

**Critical Context**: Copy is PARTIAL — some locked (tagline, founder bio, service messaging), some TBD (product page details, specific blog articles, CTA copy). Gap analysis required before build.

---

## Content Status & Gap Analysis

### ✅ LOCKED Content (Ready to implement)

| Category | Source | Status |
|----------|--------|--------|
| **Tagline** | docs/brand/ | ✅ LOCKED: "Built disabled, not despite it — accessible consulting and development, from websites to AI systems" |
| **Founder Bio** | docs/brand/ | ✅ LOCKED: 356-word 3-para arc (18-year pattern, disability justice reframe, service breadth) |
| **Service Lines** | docs/plans/accessitech-site-decisions.md #4 | ✅ LOCKED: 3 lines (Consulting, Mentorship, Products) with scope descriptions |
| **Home Page WHY Section** | docs/plans/accessitech-site-decisions.md #9 | ✅ LOCKED: 3-para systemic problem framing + solution intro |
| **Home Page WHO Section** | docs/brand/ + decision notes | ✅ LOCKED: Founder bio section |
| **CTA Primary Button** | docs/plans/accessitech-site-decisions.md #5 | ✅ LOCKED: "Schedule a Discovery Call" + Calendly + auto-inquiry-routing |
| **Footer Links** | docs/plans/accessitech-site-decisions.md #6 | ✅ LOCKED: Minimal footer (Option A); no social links |
| **Blog Metadata Schema** | docs/plans/accessitech-site-decisions.md #6 | ✅ LOCKED: Title, Author, Date, Excerpt, Category, Tags, Series, Collections, Featured Image + Alt |
| **Blog Template** | docs/plans/accessitech-site-decisions.md #7 | ✅ LOCKED: 5-section template (Overview, Core Services, Use Cases, Pricing/Access, Next Steps) |

### 🟠 TBD Content (Need before implementation)

| Category | Needed for | Priority | Notes |
|----------|-----------|----------|-------|
| **WCAG Series page copy** | Product page implementation | CRITICAL | Scope: Overview, Core Services (CCC framework), Use Cases, Pricing (freemium: free WCAG 2.2 CCCs), Next Steps (free → paid coaching) |
| **OSS/ASaaPs page copy** | Product page implementation | CRITICAL | Scope: Overview (accessibility-first digital products), Core Services (ASaaPs, Agentic AI governance), Use Cases, Pricing, Next Steps |
| **AccessiTech CCCs page copy** | Product page implementation | CRITICAL | Scope: Overview (mentorship + coaching), Core Services (peer learning), Use Cases, Pricing, Next Steps |
| **Blog launch article(s)** | Blog page validation | IMPORTANT | Recommended: 1–2 launch articles (e.g., "How we built this" or sample governance article) before Friday release |
| **CTA copy refinement** | Contact form / Calendly flow | IMPORTANT | Inquiry type field labels + auto-routing logic (e.g., "?inquiry=consulting" query params) |
| **Disclosures/Accessibility Statement** | Legal / trust | MEDIUM | Reuse from consulting repo if available; update for site specifics |

### Gaps to Resolve (Before Phase 5 Build)

**Decision Required**:
1. **WCAG Series pricing model** — "Freemium: free WCAG 2.2 CCCs entirely free (public good + pipeline)" per Decision #8, but what does this mean in practice?
   - Free to view? Download? Enroll in?
   - Paid tier for what? (coaching? certifications?)
   - **Recommend**: Keep it simple for Phase 5 (free → opt-in for coaching), document in product page "Pricing/Access" section

2. **Blog initial content** — Do we have launch articles ready?
   - If no, ship Phase 5 with blog infrastructure ready but no articles
   - If yes, include 1–2 seed articles in initial release
   - **Recommend**: Audit what exists in docs/consultations/ for candidate articles

3. **CTA routing logic** — How should inquiry types map to Calendly vs. contact form?
   - Calendly: "Schedule a Discovery Call" (all inquiry types initially?)
   - Contact form backup: for complex inquiries Calendly can't route?
   - **Recommend**: Start simple (all inquiries → Calendly); add contact form as Phase 5.5 or Phase 6

---

## Phase 5 Implementation Phases

### Pre-Flight (Before execution)

**Phase 0 — Gap Closure**: 4 hours (April 15, afternoon)

**Execution Plan**:
1. **Document Review** (30 min) — Executive Docs reviews LOCKED vs. TBD content; flags missing copy
2. **Copy Drafting** (2 hours) — Comms Strategist + Executive Docs draft:
   - 3 product page outlines (WCAG Series, OSS/ASaaPs, CCCs)
   - CTA copy details (inquiry routing labels)
   - Blog launch article selector (1–2 recommendations from existing docs)
3. **Architecture Review** (1.5 hours) — Tech lead (Explore agent) audits:
   - Current component structure
   - What needs to be built vs. repurposed
   - Build time estimates per deliverable

**Deliverables**: Gap closure document + refined scope + build timeline

**Gate**: All TBD → decision before Phase 1 Build starts (Tuesday morning)

---

## Phase 0 RESULTS — Delivered by Fleet

### Task 1: Content Audit ✅ COMPLETE

**Executive Docs Findings**:
- ✅ WCAG Series copy: 100% complete, locked, ready for implementation
- ✅ OSS/ASaaPs copy: 100% complete, locked, ready for implementation
- ✅ AccessiTech CCCs copy: 100% complete, locked, ready for implementation
- ℹ️ Blog launch article: 1 draft exists ("Your AI Agent Just Ate Your Governance Policy"), needs approval for seed article
- ℹ️ CTA routing labels: LOCKED in copy (`inquiry=consulting`, `inquiry=mentorship`, `inquiry=discovery`, etc.)
- ℹ️ Accessibility statement: Not found; low priority for Phase 1 (can defer to Phase 6)

**Verdict**: **READY FOR BUILD** — No Comms drafting needed. All product copy locked and complete.

---

### Task 2: Copy Extraction & Formatting ✅ COMPLETE

**Comms Strategist Deliverable**: Extracted and formatted all 3 product pages in engineering-ready markdown:

| Product | Sections | Status | Ready for Dev? |
|---------|----------|--------|---|
| WCAG Series | Overview, Core Services, Use Cases, Pricing/Access, Next Steps | ✅ Complete | YES |
| OSS/ASaaPs | Overview, Core Services, Use Cases, Pricing/Access, Next Steps | ✅ Complete | YES |
| AccessiTech CCCs | Overview, Core Services, Use Cases, Pricing/Access, Next Steps | ✅ Complete | YES |

**Copy includes**:
- Full product positioning + disability justice / accessibility-first framing
- Services list with specific offerings
- Use case narratives (why free, why accessible, why trust)
- Pricing tiers (free / freemium / paid coaching)
- Next steps CTAs with inquiry routing (`?inquiry=consulting-qa`, etc.)

---

### Task 3: Architecture Audit & Build Estimate ✅ COMPLETE

**Explore (Tech Lead) Findings**:

**Existing Components (Reusable for Phase 5)**:
- Header, Footer, Services card pattern, SectionHeader, Button (React Bootstrap), BlogEntry, markdown tooling
- **Verdict**: Strong component library; phase 5 can repurpose 70% of existing UI patterns

**New Components Needed**:
- Blog filter UI (tags/categories dropdown): 4 hours
- Product page template (from Services pattern): 6 hours (2 hrs template + 1.5 hrs per page ×3)
- Contact form (client + backend): 10 hours (5 component + 2 backend + 3 integration)
- Calendly integration: 5 hours
- Blog filtering logic (Redux): 3 hours

**Total Build Estimate**: **60 hours** (7.5 days full scope) for Phase 1–5 complete

**Feasibility for 3-Day Sprint (Tue–Fri)**:
- 3-day sprint = ~24 productive hours
- **Full Phase 1–5 (60 hrs) = NOT FEASIBLE in 3 days**
- **Compressed Scope (18 hrs) = FEASIBLE**:
  - ✅ Product pages (6 hrs)
  - ✅ Blog filtering UI (7 hrs) 
  - ✅ Contact form skeleton (5 hrs)
  - ❌ Calendly polish, e2e tests, comprehensive QA → Defer to Sprint 2

**Pre-Flight Unblocks Needed**:
- Set up contact form email service (Formspree / SendGrid) before Tuesday
- Calendly domain allowlist verification
- Confirm blog seed article approval

---

## REVISED Phase 5 Scope — After Phase 0 Audit

### Scope for Tue–Fri (3-day sprint) — FEASIBLE ✅

**Phase 1 — Product Pages (Tue–Wed)**: 6 hours
- 3 product page templates with all copy inserted
- Consistent 5-section layout per Decision #7
- Component implementation + styling

**Phase 2 — Blog Filtering Infrastructure (Tue–Wed)**: 7 hours
- Blog category + tag filter UI
- Redux state management for filters
- Blog listing page updated to show filtering

**Phase 3 — Contact Form Skeleton (Wed–Thu)**: 5 hours
- Form component (Name, Email, Inquiry Type, Message)
- Client-side validation
- Email service backend handler (Formspree/SendGrid)
- Success/error messaging

**Phase 4 — Content, Styling, Accessibility (Thu–Fri)**: 4 hours
- Copy insertion into all pages
- Responsive design validation (mobile/tablet/desktop)
- WCAG 2.2 AA compliance audit
- Blog seed article integration (if approved)

**Phase 5 — Testing & Deployment (Fri)**: 2 hours
- Unit tests (target ≥80% coverage on new code)
- Static site generation (`yarn static`)
- GitHub Pages deployment

**TOTAL**: 24 hours over 3 days = **FEASIBLE** ✅

---

## DEFERRED to Sprint 2 (April 22–26)

- Calendly modal integration + UX polish (5 hrs)
- E2E test framework (Playwright) + comprehensive tests (4 hrs)
- Full QA / accessibility audit (8 hrs)
- Blog series / collections advanced features
- Analytics setup

---

## Go/No-Go Decision Gate (Phase 0 → Phase 1)

✅ **Content**: Ready  
✅ **Architecture**: Feasible with compressed scope  
✅ **Timeline**: 24 hours over 3 days is aggressive but achievable  
⚠️ **Risk**: Contact form backend needs pre-sprint unblock (email service config)  

**VERDICT**: **GO for Phase 1–5 (Compressed Scope)** on Monday, April 21 (pending pre-flight unblock resolution by Friday, April 19)

---

### Phase 1 — Product Page Infrastructure (18 hours, Mon–Tue Apr 21–22)

**Build focus**: 3 product page templates + routing

**Parallel workstreams**:

#### WS1A: WCAG Series Product Page (6 hours, Mon–Tue)
- Template: 5-section (Overview, Core Services, Use Cases, Pricing/Access, Next Steps)
- Components: Pricing table, free/paid toggle, feature list, enroll CTA
- Routing: `/wcag-series` (or `/products/wcag-series`)
- **Owner**: Tech lead (React component dev)

#### WS1B: OSS/ASaaPs Product Page (6 hours, Mon–Tue)
- Template: 5-section (Overview, Core Services, Use Cases, Pricing/Access, Next Steps)
- Components: Governance framework diagram? Feature matrix? Links to dogma repo?
- Routing: `/oss-asaaps` (or `/products/oss`)
- **Owner**: Tech lead (React component dev)

#### WS1C: AccessiTech CCCs Product Page (6 hours, Tue–Wed)
- Template: 5-section (Overview, Core Services, Use Cases, Pricing/Access, Next Steps)
- Components: Coaching pathway, cohort model, enroll CTA
- Routing: `/accessitech-cccs` (or `/products/cccs`)
- **Owner**: Tech lead (React component dev)

#### WS1D: Product Page Routing & Navigation (2 hours, Mon)
- Update App routing to include `/products/*` or equivalent
- Update nav/header to link to product pages
- Update Home WHY section CTAs to link to product pages
- **Owner**: Tech lead (routing/nav)

**Gate**: All 3 pages component-complete, routing validated (Mon night); styling/content-refinement in Phase 2

---

### Phase 2 — Blog Infrastructure (12 hours, Mon–Wed Apr 21–23)

**Build focus**: Blog metadata schema, filtering, layout updates

**Parallel workstreams**:

#### WS2A: Blog Schema & Metadata Implementation (4 hours, Mon)
- Update blog entry component to support: Category, Tags, Series, Collections, Featured Image + Alt
- Implement Redux store schema for blog metadata
- Create mock data layer (will populate from markdown frontmatter in Phase 3)
- **Owner**: Tech lead (data layer + components)

#### WS2B: Blog Category & Tag Filtering (4 hours, Tue)
- Implement category filter UI (dropdown or pill buttons)
- Implement tag filter UI
- Update blog listing to filter by category/tags
- Update blog routing to support `/blog?category=X&tags=Y,Z`
- **Owner**: Tech lead (routing + filtering logic)

#### WS2C: Blog Series & Collections Support (2 hours, Tue)
- Implement "series" metadata rendering on blog entry pages
- Implement "collection" breadcrumb on listing
- Create related-posts logic (same series or collection)
- **Owner**: Tech lead (component logic)

#### WS2D: Blog SEO & Metadata (2 hours, Wed)
- Ensure each blog entry has `<meta>` tags (title, description, keywords, image)
- Update react-helmet to pull from blog frontmatter
- Validate RSS generation includes all new metadata
- **Owner**: Tech lead (SEO)

**Gate**: Blog schema implemented, filtering UI functional, RSS generation validated (Tue night)

---

### Phase 3 — CTA & Conversion Flows (8 hours, Tue–Thu Apr 22–24)

**Build focus**: Calendly integration, contact form, inquiry routing

**Parallel workstreams**:

#### WS3A: Calendly Integration (4 hours, Tue)
- Embed Calendly widget on/near CTA buttons
- Implement "Schedule a Discovery Call" button flow
- Test: button click → Calendly opens in lightbox/modal
- Update Home WHY section final CTA to trigger Calendly
- **Owner**: Tech lead (Calendly API + UI)

#### WS3B: Contact Form (2 hours, Wed–Thu)
- Build contact form component (Name, Email, Subject, Inquiry Type, Message)
- Implement inquiry type auto-routing labels (e.g., Consulting, Mentorship, Products)
- Validate form (client-side)
- **Owner**: Tech lead (form UX + validation)

#### WS3C: Form Submission & Backend Routing (2 hours, Thu)
- Choose backend: (a) Netlify Forms, (b) Formspree, (c) custom handler?
- Implement form submission handler
- Test: submission → email routing (email to info@accessi.tech + relevant owner)
- Implement success/error messaging
- **Owner**: Tech lead + DevOps

**Gate**: Calendly flow tested end-to-end, contact form validation working (Thu morning)

---

### Phase 4 — Content & Styling (8 hours, Thu–Fri Apr 18–19)

**Build focus**: Copy insertion, visual polish, responsive design

**Parallel workstreams**:

#### WS4A: Product Page Copy & Assets (4 hours, Thu)
- Insert: WCAG Series page copy (from Gap Closure)
- Insert: OSS/ASaaPs page copy
- Insert: AccessiTech CCCs page copy
- Add: Featured images, icons, pricing tables
- Apply: Consistent 5-section template styling
- **Owner**: Devrel (content) + Frontend (styling)

#### WS4B: Blog Launch Content (2 hours, Thu–Fri)
- Identify & format 1–2 launch blog articles (from docs/consultations/ audit)
- Create markdown files with proper frontmatter (title, author, date, category, tags, featured image)
- Test: articles render correctly in blog listing + detail pages
- **Owner**: Devrel (content) + Frontend (rendering)

#### WS4C: Responsive Design & Accessibility (2 hours, Fri)
- Test all product pages on mobile, tablet, desktop
- Validate WCAG 2.2 AA compliance (contrast, focus, semantic HTML)
- Fix: any layout issues, accessibility violations
- Test: keyboard navigation on all interactive elements
- **Owner**: QA + Accessibility lead

**Gate**: All copy inserted, styling responsive, accessibility validated (Fri morning)

---

### Phase 5 — Testing & Deployment (6 hours, Fri Apr 18)

#### WS5A: Unit & Integration Tests (2 hours, Thu–Fri)
- Add: unit tests for product page components
- Add: integration tests for blog filtering
- Add: tests for Calendly/contact form submission
- Target: ≥80% coverage on new code
- **Owner**: QA + Test lead

#### WS5B: Static Site Generation & Preview (2 hours, Fri)
- Run: `yarn static` (vite-ssg generate)
- Verify: all product pages → static HTML in docs/
- Verify: blog pages render correctly
- Test: RSS generation includes new blog metadata
- Test: sitemap includes all new pages
- **Owner**: DevOps + QA

#### WS5C: Deployment (1 hour, Fri)
- Build: `yarn build:prod` (full production build)
- Deploy: push docs/ → GitHub Pages
- Smoke tests: verify site live at accessi.tech
- Monitor: check for 404s, broken links, deployment errors
- **Owner**: DevOps + Tech lead

#### WS5D: Comms & Launch (1 hour, Fri)
- Post: launch announcement (product pages live)
- Update: GitHub repo description if needed
- Document: Phase 5 completion in CHANGELOG
- **Owner**: Devrel + Comms

**Gate**: All tests passing, deployment successful, site live (Fri evening)

---

## Success Criteria

- ✅ 3 product pages live at `/wcag-series`, `/oss-asaaps`, `/accessitech-cccs` (or equivalent routing)
- ✅ Blog infrastructure supports: categories, tags, series, collections, featured images
- ✅ Blog filtering UI functional (category + tag filters working)
- ✅ Calendly "Schedule a Discovery Call" CTA functional on Home page
- ✅ Contact form present and submitting (to configured email)
- ✅ All new code ≥80% test coverage
- ✅ Static site generation (`yarn static`) produces correct HTML
- ✅ RSS/sitemap updated with new pages
- ✅ Site deployed to GitHub Pages and live
- ✅ WCAG 2.2 AA compliance validated on new pages
- ✅ All mobile/tablet/desktop viewports tested

---

## Risk & Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Copy gaps delay Phase 1 Start (Tue morning) | HIGH | BLOCKING | **Mitigation**: Phase 0 Gap Closure (Mon afternoon) confirms all copy before build starts |
| Calendly integration blocked by API limits / config | MEDIUM | MODERATE | **Mitigation**: Test Calendly integration early (Tue); have contact form as fallback |
| Blog metadata schema requires Redux refactor | MEDIUM | MODERATE | **Mitigation**: Start with mock data layer (Phase 2A); minimal Redux changes required |
| Deployment to GitHub Pages fails (docs/ sync issue) | LOW | MODERATE | **Mitigation**: Test vite-ssg locally before deploying; verify CNAME setup |
| WCAG 2.2 AA compliance issues discovered late | LOW | LOW | **Mitigation**: Accessibility testing runs in parallel (Phase 4C); early validation prevents late blockers |

---

## Parallel Work & Team Coordination

**Key Principle**: Maximize parallel work to fit aggressive 3-day timeline.

**Daily Standup** (async, each morning):
- Summary: what was completed yesterday
- Blockers: what needs unblocking
- Today: specific deliverables + owner
- Dependencies: handoff points between workstreams

**Slack/GitHub Issues**: All blockers logged as issue comments or GitHub Discussion thread

**Review Gates**: Each phase has a specific set of pass/fail criteria (see Phase descriptions above)

---

## File Structure & Conventions

### New Product Pages Directory
```
src/pages/Products/
  ├── WCAGSeries/
  │   ├── WCAGSeries.tsx
  │   ├── WCAGSeries.scss
  │   └── __tests__/
  ├── OSS/
  │   ├── OSS.tsx
  │   ├── OSS.scss
  │   └── __tests__/
  └── CCCs/
      ├── CCCs.tsx
      ├── CCCs.scss
      └── __tests__/
```

### Blog Metadata Schema
```typescript
interface BlogEntry {
  id: string;
  title: string;
  author: string;
  date: Date;
  excerpt: string;
  category: string;
  tags: string[];
  series?: string;
  collections: string[];
  featuredImage?: {
    src: string;
    alt: string;
  };
  content: string;
}
```

### Routing
```
/                           — Home (with WHY → product page CTAs)
/blog                       — Blog listing (with category/tag filters)
/blog/:id                   — Blog entry
/products/wcag-series       — WCAG Series product page
/products/oss-asaaps        — OSS/ASaaPs product page
/products/accessitech-cccs  — AccessiTech CCCs product page
/contact                    — Contact form (if separate page)
/disclosures                — Existing; update if needed
```

---

## Decision Tracker

**Decisions Made** (from Phase 0 Gap Closure):
- [ ] WCAG Series pricing model (free vs. paid tiers)
- [ ] Blog launch content (0, 1, or 2+ seed articles)
- [ ] CTA routing (Calendly only vs. Calendly + contact form)
- [ ] Product page routing (`/products/*` vs. `/**` vs. other)

**Decisions Pending** (from user feedback):
- Other clarifications as they arise

---

## Next Steps

1. **Phase 0 — Gap Closure** (Monday afternoon, Apr 15)
   - Executive Docs reviews content gaps
   - Comms Strategist drafts product page copy
   - Tech lead audits component architecture
   - Refine Phase 1–5 timeline + deliverables

2. **Phase 1–5 Execution** (Tuesday–Friday, Apr 16–18)
   - See phase breakdown above

3. **Post-Launch** (Friday evening, Apr 18)
   - Document: lessons learned, metrics (build time, test coverage, deployment issues)
   - Plan: Phase 5.5 or Phase 6 (secondary improvements, analytics setup, etc.)

---

**Document Status**: Draft  
**Last Updated**: 2026-04-15  
**Owner**: Conor (Orchestrator) + Fleet Specialists

---
