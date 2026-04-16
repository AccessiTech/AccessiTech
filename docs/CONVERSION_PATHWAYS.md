# Conversion Pathways

This document enumerates all client conversion touchpoints in the AccessiTech website and describes how they're tested.

## Overview

The AccessiTech website implements two primary conversion mechanisms:

1. **Contact Form Path** — Navigate to `/contact?inquiry={type}` → Pre-populate inquiry dropdown → Submit form via Formspree
2. **Calendly Path** — Click CalendlyButton → Open scheduling modal → Direct booking

## Primary Conversion Touchpoints (16 Programmatic Paths)

### Homepage (`/`)

| CTA | Target | Query Param | Test Location |
|-----|--------|-------------|---------------|
| "Explore all services" button | `/services` | none | `conversion-pathways.test.tsx` line 52 |
| "Explore all products" button | `/products` | none | Line 58 |
| Product card (any) | `/products/{id}` | none | Line 64 |
| "Contact Us" button | `/contact` | none | Line 70 |

### Services Hub (`/services`)

| CTA | Target | Query Param | Test Location |
|-----|--------|-------------|---------------|
| Generic contact link | `/contact` | none | Navigation only |
| Consulting CTA | `/contact` | `?inquiry=consulting` | ConsultingPage hub test |
| Mentorship CTA | `/contact` | `?inquiry=mentorship` | MentorshipPage hub test |

### Consulting Detail Pages

| Page | CTA Label | Target | Query Param | Test Location |
|------|-----------|--------|-------------|---------------|
| **ASaaPs** (`/services/asaaps`) | "Schedule a Discovery Call" | `/contact` | `?inquiry=consulting` | Line 82 |
| **AI Integration** (`/services/ai-integration`) | "Schedule a Discovery Call" | `/contact` | `?inquiry=consulting` | Line 91 (multi-match handling) |
| **QA** (`/services/qa`) | "Schedule an Audit Call" | `/contact` | `?inquiry=qa` | Line 101 |

### Mentorship Detail Pages

| Page | CTA Label | Target | Query Param | Test Location |
|------|-----------|--------|-------------|---------------|
| **Coaching** (`/services/coaching`) | "Schedule a Discovery Call" | `/contact` | `?inquiry=mentorship` | Line 113 |
| **CCCs** (mentorship) (`/services/cccs`) | "Explore Curriculum Options" | `/contact` | `?inquiry=mentorship` | MentorshipPage |
| **Open Classrooms** (`/services/open-classrooms`) | varies | `/contact` | `?inquiry=mentorship` | MentorshipPage |
| **SOTC** (`/services/sotc`) | "Schedule a Discovery Call" | `/contact` | `?inquiry=sotc` | Line 119 |

### Product Detail Pages

| Page | CTA Label | Target | Query Param | Test Location |
|------|-----------|--------|-------------|---------------|
| **CCCs** (product) (`/products/cccs`) | "Start a Project" | `/contact` | none | Line 131 |
| **WCAG Series** (`/products/wcag-series`) | varies | varies | varies | ProductsHub navigation |
| **OSS ASaaPs** (`/products/oss-asaaps`) | varies | varies | varies | ProductsHub navigation |

### Hub Pages Navigation

| Page | Element | Target | Test Location |
|------|---------|--------|---------------|
| **Products Hub** (`/products`) | WCAG button | `/products/wcag-series` | Line 163 (click test) |
| **Products Hub** | OSS button | `/products/oss-asaaps` | Line 168 |
| **Products Hub** | CCCs button | `/products/cccs` | Line 173 |

### Header (Global)

| CTA | Target | Query Param | Test Location |
|-----|--------|-------------|---------------|
| "Contact" nav link | `/contact` | none | Built-in navigation |

## Secondary Conversion Path: Calendly

| Location | Button Count | Test Location |
|----------|--------------|---------------|
| **Contact Page** (`/contact`) | 1 | Line 227 |
| **Consulting Hub** (`/services/consulting`) | 2 | Line 235 (multi-button handling) |

## Query Parameter Pre-Population Logic

The `ContactForm` component implements intelligent inquiry pre-filling:

### URL Query Param Mapping

| Query Param Value | Dropdown Value | Use Case |
|-------------------|----------------|----------|
| `consulting` | "Consulting" | All consulting service CTAs |
| `mentorship` | "Mentorship" | All mentorship service CTAs |
| `qa` | "QA / Audit" | QA service page |
| `sotc` | "Speaking on the Code" | SOTC service page |
| `general` | "General Inquiry" | Default fallback |
| `other` | "Other" | Miscellaneous needs |

### Priority Order

1. **URL query param** (`?inquiry=consulting`) — **Takes precedence**
2. **Component prop** (`inquiryType="Mentorship"`) — Fallback if no URL param
3. **Empty** — User must select from dropdown

**Test Coverage:**
- URL param pre-fill: Lines 185-192
- Prop pre-fill: Lines 198-205
- URL param priority over prop: Lines 210-219

## Form Validation Rules

| Field | Validation | Enforced By |
|-------|-----------|-------------|
| **Name** | Required | ContactForm.tsx |
| **Email** | Required + regex pattern | ContactForm.tsx |
| **Inquiry Type** | Required selection | ContactForm.tsx |
| **Message** | ≥20 characters | ContactForm.tsx |

**Submission:** Form POST to Formspree endpoint configured via `VITE_CONTACT_FORM_ENDPOINT`

## Test Architecture

### Test File
- **Location:** `src/__tests__/conversion-pathways.test.tsx`
- **Test Count:** 22 integration tests
- **Framework:** Vitest + React Testing Library

### Test Organization

1. **Homepage Conversion Touchpoints** (4 tests)
2. **Consulting Detail Page CTAs** (3 tests)
3. **Mentorship Detail Page CTAs** (2 tests)
4. **Product Detail Page CTAs** (1 test)
5. **Hub Page CTAs** (2 tests)
6. **Contact Page Query Param Pre-Population** (5 tests)
7. **ContactForm Component Inquiry Pre-Fill** (3 tests)
8. **Calendly Alternative Conversion Path** (2 tests)

### Mocking Strategy

```typescript
// Mock navigation to avoid router nesting issues
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock Calendly to avoid external script loading
vi.mock('../components/CalendlyButton/CalendlyButton', () => ({
  default: () => <button data-testid="calendly-button">Mocked Calendly</button>,
}));
```

### Test Patterns

#### Navigation Verification (Homepage)
```typescript
const exploreBtn = screen.getByTestId('explore-services-btn');
await user.click(exploreBtn);
expect(mockNavigate).toHaveBeenCalledWith('/services');
```

#### Href Verification (ProductPages)
```typescript
const ctaButton = screen.getByText(/schedule a discovery call/i);
expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=consulting');
```

#### Multi-Element Handling (AI Integration Page)
```typescript
const allMatches = screen.getAllByText(/schedule a discovery call/i);
const ctaButton = allMatches.find(el => el.tagName === 'A');
expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=consulting');
```

#### Query Param Pre-Population
```typescript
renderWithProviders(<Contact />, { route: '/contact?inquiry=consulting' });
const inquirySelect = screen.getByLabelText(/inquiry type/i) as HTMLSelectElement;
expect(inquirySelect.value).toBe('Consulting');
```

## Maintenance Notes

### When Adding New Service Pages
1. Add CTA to service detail page with appropriate `ctaHref` prop
2. Include `?inquiry=` param in href if service has dedicated funnel
3. Add test case to `conversion-pathways.test.tsx`
4. Update this documentation

### When Modifying Query Params
1. Update `INQUIRY_PARAM_MAP` in `ContactForm.tsx`
2. Update all affected `ctaHref` values in service pages
3. Update test expectations in `conversion-pathways.test.tsx`
4. Update this documentation

### Common Test Failures

| Error | Cause | Fix |
|-------|-------|-----|
| "Found multiple elements" | Multiple elements with same text/testid | Use `getAllByText/TestId` and filter |
| Router nesting error | Testing with full `<App />` | Test individual page components instead |
| Href attribute null | Element is `<button onClick>` not `<a href>` | Test navigation call instead of href |
| Query param not pre-filled | Route not passed to `renderWithProviders` | Include `{ route: '/contact?inquiry=...' }` |

## Analytics Considerations

### Recommended Tracking Points

1. **CTA Click Events** — Track which CTAs are most effective
2. **Query Param Flows** — Measure inquiry type distribution
3. **Form Completion Rate** — Track abandonment at each field
4. **Calendly vs Form** — Compare conversion rates of both paths
5. **Service Page → Contact** — Measure conversion by service type

### Suggested Event Schema

```typescript
{
  event: 'cta_click',
  cta_location: 'homepage' | 'service_detail' | 'product_detail' | 'hub',
  cta_target: '/contact?inquiry=consulting',
  inquiry_type: 'consulting' | 'mentorship' | 'qa' | 'sotc' | 'general',
  page_url: window.location.pathname
}
```

## Related Files

- `src/components/ContactForm/ContactForm.tsx` — Form logic & query param handling
- `src/components/CalendlyButton/CalendlyButton.tsx` — Alternative conversion path
- `src/pages/Services/consulting/*.tsx` — Consulting service pages with CTAs
- `src/pages/Services/mentorship/*.tsx` — Mentorship service pages with CTAs
- `src/pages/Products/CCCs.tsx` — Product detail page CTA
- `src/pages/Products/ProductsHub.tsx` — Product navigation hub
- `src/__tests__/conversion-pathways.test.tsx` — All pathway integration tests

---

**Last Updated:** 2025-01-04  
**Test Status:** ✅ All 22 tests passing (380 total suite)  
**Branch:** `feat/homepage-content-sprint`
