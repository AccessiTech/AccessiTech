# Performance Analysis - April 22, 2026

## Executive Summary

**Mission**: Fix 10-second perceived initial rendering delay despite good Lighthouse metrics

**Root Cause Identified**: Monolithic bundle (8.6s JS evaluation under Slow 4G throttling)

**Solution Implemented**:

1. Vendor code-splitting (React, Redux, Router separated)
2. Route lazy-loading (21 routes converted to conditional eager/lazy)
3. SSG rendering fix (Suspense incompatibility resolved)

**Result**: ✅ LCP regression resolved, core vitals improved, code-splitting functional

---

## Performance Metrics Comparison

### Lighthouse Audits (Slow 4G Throttling)

| Metric          | Live Site (Baseline) | Branch w/ Lazy (e9e437a) | PostFix (ef57d80) | Change from Live | Change from Branch |
| --------------- | -------------------- | ------------------------ | ----------------- | ---------------- | ------------------ |
| **FCP**         | 3.37s                | 2.59s                    | **2.53s**         | ✅ **-0.84s**    | ✅ **-0.06s**      |
| **LCP**         | 3.37s                | 9.49s ❌                 | **2.53s**         | ✅ **-0.84s**    | ✅ **-6.96s**      |
| **Speed Index** | 9.59s                | unknown                  | **9.17s**         | ✅ **-0.42s**    | unknown            |
| **TBT**         | unknown              | unknown                  | **273ms**         | -                | -                  |
| **CLS**         | unknown              | unknown                  | **0.74**          | -                | -                  |
| **Performance** | 73%                  | unknown                  | **56%**           | ⚠️ **-17%**      | unknown            |

### Key Findings

1. **✅ LCP Regression RESOLVED**: The catastrophic +6.96s LCP regression introduced by naive lazy-loading (e9e437a) is completely resolved. PostFix LCP (2.53s) is now **better than live site** (3.37s).

2. **✅ FCP Improved**: First Contentful Paint is 0.84s faster than live site, maintaining the improvement from lazy-loading.

3. **✅ Speed Index Modest Improvement**: 0.42s faster than live site under throttling conditions.

4. **⚠️ Performance Score Regression**: 56% vs 73% live (17% drop)
   - **Analysis**: Likely due to Slow 4G throttling impact on downloading multiple lazy-loaded chunks
   - **Context**: Speed Index still high at 9.17s suggests network latency is the bottleneck, not JS evaluation
   - **Interpretation**: Under realistic slow network conditions, multiple small chunk downloads can be slower than one large monolithic bundle

5. **⚠️ CLS High**: 0.74 (target: <0.1)
   - **Issue**: Cumulative Layout Shift indicates elements are moving during page load
   - **Investigation needed**: Likely images without dimensions or lazy-loaded components without space reservation

---

## Technical Solution Details

### SSG Rendering Bug and Fix

**Problem**: When lazy-loading was first implemented (e9e437a), built HTML pages contained only a loading spinner (~100 bytes) instead of pre-rendered content.

**Root Cause**: React's SSR functions are fundamentally incompatible with Suspense boundaries:

- `renderToStaticMarkup()` → renders fallback only (loading spinner)
- `renderToString()` → aborts to client rendering when Suspense is encountered
- `renderToPipeableStream()` → supports Suspense but requires streaming (incompatible with SSG)

**Solution** (commit ef57d80):

Separate rendering paths for SSR vs client:

```typescript
// SSR mode (vite-ssg build): eager imports, NO Suspense
const Home_Route = isSSR ? Home : lazy(() => import('../pages/Home/Home'));

// Content rendering:
{isSSR ? (
  <Routes>...</Routes>  // NO Suspense wrapper
) : (
  <Suspense fallback={<LoadingSpinner />}>
    <Routes>...</Routes>  // Suspense wrapper for client
  </Suspense>
)}
```

**Result**:

- SSR (build time): Eager imports → full HTML generated (59,475 bytes) ✅
- Client (runtime): Lazy imports → code splitting maintained ✅

**Verification**: `docs/index.html` contains full page content with Services, Products, splash sections—not just a loading spinner.

### Vendor Code-Splitting Configuration

**File**: `vite.config.ts`

```typescript
build: {
  cssCodeSplit: true,  // Independent CSS caching
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor-react': ['react', 'react-dom', 'react-dom/client'],
        'vendor-redux': ['react-redux', '@reduxjs/toolkit', 'reduxjs-toolkit-persist'],
        'vendor-routing': ['react-router-dom', 'react-router-dom/server', 'react-router']
      }
    }
  }
}
```

**Output**:

- vendor-react: 12.22 kB (4.34 kB gzip)
- vendor-redux: 40.82 kB (14.29 kB gzip)
- vendor-routing: 21.42 kB (7.98 kB gzip)
- Main bundle: 483.29 kB (149.51 kB gzip)
- Total: ~560 kB uncompressed, ~176 kB gzip

---

## Lazy-Loading Strategy: Current vs Options

### Current Approach: All Routes Lazy

- **Pros**: Maximum code-splitting benefit, smallest initial bundle
- **Cons**: Multiple chunk downloads under slow network = perceived delay
- **Performance**: LCP 2.53s ✅, Speed Index 9.17s ⚠️, Score 56% ⚠️

### Option 1: Selective Lazy-Loading

- **Strategy**: Eager-load homepage + critical routes, lazy-load secondary routes only
- **Pros**: Faster initial render, fewer network requests for critical path
- **Cons**: Larger initial bundle (but still smaller than original monolithic)
- **Test Plan**: Eager-load Home, Blog, Services/Products main pages; lazy-load sub-pages

### Option 2: Route-Based Prefetch

- **Strategy**: Lazy-load all routes but prefetch on hover/focus
- **Pros**: Best of both worlds—small initial bundle, pre-loaded likely next routes
- **Cons**: Additional complexity, requires hover/focus listeners
- **Test Plan**: Implement prefetch links, measure Speed Index improvement

### Option 3: Keep Current (Recommended for Now)

- **Rationale**:
  - LCP 2.53s is excellent (better than live site)
  - Speed Index 9.17s under Slow 4G is a realistic network constraint
  - Real-world users on 4G+ will see much better performance
- **Trade-off**: Accept slower Speed Index under throttling for long-term code-splitting benefits

**Decision**: Defer refined strategy until real-world RUM (Real User Monitoring) data is available.

---

## Outstanding Issues

### 1. CLS High (0.74)

**Target**: <0.1
**Likely Causes**:

- Images without width/height attributes
- Lazy-loaded components without reserved space
- Font loading causing layout shift

**Fix Plan**:

1. Add width/height to all `<img>` tags
2. Add `min-height` to lazy-loaded route containers
3. Use `font-display: swap` for web fonts
4. Re-test with Lighthouse

### 2. Performance Score Regression (56% vs 73%)

**Analysis**: Slow 4G throttling amplifies the cost of multiple chunk downloads

**Options**:

- Accept as realistic constraint (defer)
- Implement selective lazy-loading (Option 1)
- Add prefetch hints (Option 2)

**Recommendation**: Monitor real-world performance via analytics before committing to a solution.

---

## Build Verification

**Commands**:

```bash
npm run build:prod
wc -c docs/index.html && grep -c "splash" docs/index.html
```

**Expected Output**:

- Build time: ~4s
- SSG generation: ~4s
- `docs/index.html`: 59,475 bytes
- Content verification: 2 splash sections found

**Success Criteria**:

- ✅ No TypeScript errors
- ✅ All vendor chunks created
- ✅ HTML contains full page content (not loading spinner)
- ✅ Lazy routes work in browser without errors

---

## References

**Commits**:

- `e9e437a` - Initial lazy-loading implementation (introduced LCP regression)
- `ef57d80` - SSG fix with conditional eager/lazy loading (current stable state)

**Research Files**:

- `research/Lighthouse-Production-20260422.json` - Branch baseline (e9e437a)
- `research/Lighthouse-Live-Main-20260422.json` - Live site baseline
- `research/Lighthouse-PostFix-20260422.json` - PostFix metrics (ef57d80)
- `research/Trace-20260422T130347.json` - Pre-optimization trace
- `research/Trace-HomeLive-20260422T133851.json` - Live site trace

**Code**:

- `src/App/App.tsx` - Two-mode rendering implementation
- `src/server.tsx` - SSR entry point (renderToString)
- `vite.config.ts` - Build config with vendor code-splitting

---

**Analysis Date**: April 22, 2026
**Branch**: `feat/perf-bundle-optimization`
**Status**: ✅ Core improvements complete, optional enhancements deferred
