# SSG Expansion Workplan — Phase 5 Post-Sprint

**Initiative**: Integrate new Services, Products, and Contact pages into vite-ssg static site generation pipeline  
**Branch**: Post-sprint work on `main` (after PR #137 merge)  
**Objective**: Expand vite-ssg config and sitemap generation to cover all 19 new routes added in styling refactor sprint, ensuring complete SEO metadata coverage and static site generation.

---

## Phase Dependency Map

```
Phase 0: Workplan Review (Planner validates plan)
    ↓
Phase 1: Create Metadata Files (Executive Docs)
    ├─ src/pages/Services/meta.ts
    └─ src/pages/Products/meta.ts
    ↓
Phase 2: Update ssg.config.js & scripts/sitemap.js (Executive Scripter)
    ├─ Add meta.ts refs to ssg.config.js staticMetaData
    └─ Add 15 new entries to sitemap.js hardcoded pages array
    ↓
Phase 3: Build & Validation (Test Coordinator)
    ├─ Verify all pages have Metadata components (canonical + OG)
    ├─ Run build: `npm run build:rss && npm run build:sitemap && npm run build`
    ├─ Validate: all 19 routes in docs/, sitemap.xml well-formed
    └─ Verify: 398 tests still passing
    ↓
Phase 4: Review & Merge (Review agent)
    └─ Approve all changes
    ↓
Phase 5: Commit & Close (GitHub agent)
    └─ Merge to main
```

---

## Phase 0 — Workplan Review

**Status**: ⏳ In progress (this document)

**Deliverables**:
- Planner review of dependency sequencing ✅ (completed above)
- Identification of 15 new routes vs. existing 4 hardcoded sitemap entries ✅
- Meta.ts file naming convention established ✅

**Acceptance**: Plan is coherent; no circular dependencies; all stakeholders aligned on 2 new files + 2 config updates.

---

## Phase 1 — Create Metadata Files

**Status**: ⬜ Not started

**Agent**: Executive Docs  
**Depends on**: Phase 0 (review complete)  
**Duration**: ~15 min

**Tasks**:
1. Create `src/pages/Services/meta.ts` with title/description/canonical/image/imageAlt for:
   - /services (Services hub, 0.9 priority, monthly changefreq)
   - /services/consulting (Consulting sub-hub, 0.75 priority)
   - /services/consulting/asaaps (ASaaPs detail page)
   - /services/consulting/ai-integration (AI Integration detail page)
   - /services/consulting/qa (QA detail page)
   - /services/mentorship (Mentorship sub-hub, 0.75 priority)
   - /services/mentorship/cccs (CCCs detail page)
   - /services/mentorship/coaching (Coaching detail page)
   - /services/mentorship/openclassrooms (OpenClassrooms detail page)
   - /services/mentorship/sotc (SOTC detail page)

2. Create `src/pages/Products/meta.ts` with metadata for:
   - /products (Products hub, 0.85 priority, monthly changefreq)
   - /products/wcag-series (WCAG Series detail, 0.7 priority, quarterly)
   - /products/oss-asaaps (OSS ASaaPs detail, 0.7 priority, quarterly)
   - /products/cccs (CCCs detail, 0.7 priority, quarterly)

3. Align metadata with existing Metadata component props (from ProductPage.tsx, Services pages)

4. Export as named exports for use in ssg.config.js

**Acceptance**:
- Both files created and exported
- All 14 page metadata entries complete
- No TypeScript errors
- Format matches Blog/meta.ts pattern

---

## Phase 1 Review — Review Gate

**Status**: ⬜ Not started

**Agent**: Review  
**Depends on**: Phase 1 deliverables committed  
**Gate**: Phase 2 does not begin until APPROVED

**Criteria**:
1. meta.ts files follow Blog/meta.ts naming and export pattern ✅
2. All 14 entries have complete metadata (title, description, canonical, image, imageAlt) ✅
3. Canonical URLs match route structure (e.g., `https://accessi.tech/services/consulting`) ✅
4. Images are accessible (either DEFAULT_SHARE_IMAGE or specific product images) ✅
5. No TypeScript errors in files ✅

**Verdict**: APPROVED or REQUEST CHANGES — [criterion N]

---

## Phase 2 — Update Configuration Files

**Status**: ⬜ Not started

**Agent**: Executive Scripter  
**Depends on**: Phase 1 Review APPROVED  
**Duration**: ~30 min

**Task 2A: Update ssg.config.js**
- Add `'src/pages/Services/meta.ts'` and `'src/pages/Products/meta.ts'` to `staticMetaData` array
- Verify staticPaths array already contains all 19 routes ✅ (confirmed by Planner)

**Task 2B: Update scripts/sitemap.js**
- Add 15 new entries to the static `pages` array (before the dynamic markdown parsing loop)
- Entries (format: url, changefreq, priority, title, description, image, imageAlt, status):
  - /services (monthly, 0.9, "AccessiTech - Services")
  - /services/consulting (quarterly, 0.75, "AccessiTech - Consulting Services")
  - /services/consulting/asaaps (quarterly, 0.75, "AccessiTech - ASaaPs")
  - /services/consulting/ai-integration (quarterly, 0.75, "AccessiTech - AI Integration")
  - /services/consulting/qa (quarterly, 0.75, "AccessiTech - Quality Assurance")
  - /services/mentorship (quarterly, 0.75, "AccessiTech - Mentorship")
  - /services/mentorship/cccs (quarterly, 0.7, "AccessiTech - Courses & Content")
  - /services/mentorship/coaching (quarterly, 0.7, "AccessiTech - Coaching")
  - /services/mentorship/openclassrooms (quarterly, 0.7, "AccessiTech - OpenClassrooms")
  - /services/mentorship/sotc (quarterly, 0.7, "AccessiTech - SOTC")
  - /products (monthly, 0.85, "AccessiTech - Products")
  - /products/wcag-series (quarterly, 0.7, "AccessiTech - WCAG Series")
  - /products/oss-asaaps (quarterly, 0.7, "AccessiTech - OSS ASaaPs")
  - /products/cccs (quarterly, 0.7, "AccessiTech - Curriculum")
  - /contact (yearly, 0.6, "AccessiTech - Contact")
- Add comment documenting hardcoded routes vs. dynamic markdown-derived routes

**Acceptance**:
- ssg.config.js updated with meta.ts references ✅
- sitemap.js updated with 15 new page entries ✅
- No linting/format errors (ruff check passes) ✅
- Sitemap generation logic still parses blog/disclosure markdown correctly ✅

---

## Phase 2 Review — Review Gate

**Status**: ⬜ Not started

**Agent**: Review  
**Depends on**: Phase 2 deliverables committed  
**Gate**: Phase 3 does not begin until APPROVED

**Criteria**:
1. ssg.config.js staticMetaData array includes new meta.ts file paths ✅
2. All 15 sitemap.js entries are valid (property names match expected format) ✅
3. No duplicate entries in pages array ✅
4. sitemap.js comments clarify hardcoded vs. dynamic derivation ✅
5. No TypeScript/JavaScript syntax errors (--check passes for both files) ✅

**Verdict**: APPROVED or REQUEST CHANGES — [criterion N]

---

## Phase 3 — Build & Validation

**Status**: ⬜ Not started

**Agent**: Test Coordinator (or Orchestrator direct)  
**Depends on**: Phase 2 Review APPROVED  
**Duration**: ~10 min

**Pre-Build Checks**:
1. [ ] Verify all Services/Products/Contact TSX files have complete `<Metadata>` components with:
   - canonical URL
   - Open Graph title, description, image
   - Twitter creator
   - Site name
   Command: `grep -r "Metadata" src/pages/Services src/pages/Products src/pages/Contact --include="*.tsx" | grep canonical`
   Expected: All pages referenced

2. [ ] Verify 398 tests still passing: `npm run test`
   Expected: 398/398 passing, 47 test files, no errors

3. [ ] Verify SCSS compiles: `npm run build:scss` (or included in full build)
   Expected: No new SCSS errors (previous refactor errors already fixed)

**Build Steps**:
1. Generate RSS (blog + disclosure markdown): `npm run build:rss`
   - Verify: public/rss.xml created/updated
2. Generate Sitemap (blog + disclosures + hardcoded pages): `npm run build:sitemap`
   - Verify: public/sitemap.xml created with 60+ entries
3. Build static site: `npm run build`
   - Verify: docs/ directory created with full output

**Validation Steps**:
1. [ ] Check docs/ folder structure includes all new routes:
   ```bash
   find docs/ -type d -name "services" -o -name "products" -o -name "contact"
   ```
   Expected: 3 directories present

2. [ ] Count HTML files generated:
   ```bash
   find docs/ -name "index.html" | wc -l
   ```
   Expected: ≥ 47 (19 new + existing blog/disclosure/other pages)

3. [ ] Validate sitemap.xml well-formedness:
   ```bash
   xmllint --noout public/sitemap.xml
   ```
   Expected: No errors, valid XML

4. [ ] Spot-check canonical URLs in generated HTML:
   ```bash
   grep 'canonical' docs/services/index.html
   grep 'canonical' docs/products/index.html
   grep 'canonical' docs/contact/index.html
   ```
   Expected: Each file contains correct canonical URL

5. [ ] Spot-check Open Graph metadata:
   ```bash
   grep 'og:title\|og:description\|og:image' docs/services/consulting/index.html | head -5
   ```
   Expected: OG tags present and populated

**Acceptance**:
- ✅ 398 tests passing
- ✅ RSS and sitemap generated without errors
- ✅ Static build completes cleanly
- ✅ docs/ contains all 19 new routes
- ✅ Manually tested sample routes have correct metadata
- ✅ Sitemap validates as well-formed XML

---

## Phase 3 Review — Review Gate

**Status**: ⬜ Not started

**Agent**: Review  
**Depends on**: Phase 3 validation complete  
**Gate**: Phase 4 does not begin until APPROVED

**Criteria**:
1. All pre-build checks passed (Metadata components verified, tests passing, SCSS clean) ✅
2. RSS feed generated successfully (blog + disclosure items present) ✅
3. Sitemap generated with ≥50 entries (blog + disclosure + static pages) ✅
4. Static build completed without errors to docs/ ✅
5. Spot-check: sample routes (services/, products/, contact/) contain correct canonical + OG metadata ✅
6. Sitemap.xml is valid XML (xmllint passes) ✅

**Verdict**: APPROVED or REQUEST CHANGES — [critical issue]

---

## Phase 4 — Commit & Merge

**Status**: ⬜ Not started

**Agent**: GitHub  
**Depends on**: Phase 3 Review APPROVED  
**Duration**: ~5 min

**Commit:**
```
feat(ssg): expand vite-ssg config for Services, Products, Contact pages

Add metadata files:
- src/pages/Services/meta.ts — 10 Services-related entries (hubs + details)
- src/pages/Products/meta.ts — 4 Products entries

Update configuration:
- ssg.config.js: add new meta.ts files to staticMetaData array
- scripts/sitemap.js: add 15 static page entries (Services + Products + Contact)

Update pipeline:
- Sites now generates: 50+ blog/disclosure entries + 60+ static pages
- All pages include canonical + Open Graph metadata
- Sitemap validates as well-formed XML

Build validation:
- 398/398 tests passing
- All 19 new routes present in docs/ after build
- Spot-checks confirm metadata accuracy

Closes: (none — no corresponding issue; SSG expansion is maintenance)
```

**Push to**: `main` (after PR #137 merges)  
**PR**: (if desired) Could create PR for review, or commit directly to main as maintenance

**Acceptance**:
- ✅ Commit SHA recorded
- ✅ All changes pushed to origin/main
- ✅ Verified: `git log --oneline -1` shows new commit on main

---

## Timeline & Estimates

| Phase | Agent | Est. Duration | Actual | Status |
|-------|-------|----------------|--------|--------|
| 0 — Review | Planner | 5 min | ✅ Complete | ✅ Approved |
| 1 — Meta Files | Executive Docs | 15 min | — | ⬜ Pending |
| 1 Review | Review | 5 min | — | ⬜ Pending |
| 2 — Config | Executive Scripter | 30 min | — | ⬜ Pending |
| 2 Review | Review | 5 min | — | ⬜ Pending |
| 3 — Build & Test | Test Coord | 10 min | — | ⬜ Pending |
| 3 Review | Review | 5 min | — | ⬜ Pending |
| 4 — Commit | GitHub | 5 min | — | ⬜ Pending |
| **Total** | | ~85 min | — | **⏳ Ready to Start** |

---

## Open Questions

1. **Separate PR for SSG expansion?** (Yes recommended: keeps styling refactor PR clean; easier to review sitemap changes separately)
2. **Deploy after merge?** (Depends on AccessiTech DevOps workflow — confirm GitHub Actions deploy-on-merge is active)
3. **Canonical URL verification in CI?** (Consider adding lint check: all pages must include canonical meta tag)

---

**Workplan Status**: Ready for execution. All phases sequenced. No blockers identified.
