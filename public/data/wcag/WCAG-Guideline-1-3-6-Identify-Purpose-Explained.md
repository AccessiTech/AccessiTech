<!--
title: 1.3.6 - Identify Purpose
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.3.6 (Identify Purpose)—what it means, why it matters, and how to help browsers and assistive tech identify the purpose…
keywords: wcag 1.3.6, identify purpose, accessibility, web standards, autofill, user interface, digital inclusion
image: WCAG-Series-1.3.6.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.3.6 Explained, Identify Input Purpose"
status: published
date: 2025-07-01
excerpt: Helps browsers and assistive technologies identify the purpose of user interface components, enhancing accessibility.
next: /wcag/WCAG-Guideline-1-4-1-Use-of-Color-Explained, Guideline 1.4.1 - Use of Color
previous: /wcag/WCAG-Guideline-1-3-5-Identify-Input-Purpose-Explained, Guideline 1.3.5 - Identify Input Purpose
-->

# **WCAG Guideline 1.3.6: Identify Purpose Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.3: Adaptable**

Guideline 1.3 focuses on creating content that can be presented in different ways (for example, simpler layout) without losing information or structure. This is essential for users who rely on assistive technologies or need content in alternative formats.

## **What Is Guideline 1.3.6 Identify Purpose?**

> "In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined."

Guideline 1.3.6 is a Level AAA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#identify-purpose).

- Use ARIA landmarks, roles, and attributes to identify the purpose of UI components, icons, and regions.
- This helps browsers and assistive technologies provide context, navigation, and customization for users.
- Especially helpful for users with cognitive disabilities or those using screen readers and custom interfaces.

This ensures that users can understand and interact with all parts of your site, not just input fields.

---

## **Why Does It Matter?**

- **Inclusivity:** Purpose identification is the technical foundation for personalization — symbol sets, simplified icons, and AAC substitutions that support users with cognitive disabilities. When landmarks and icons don't expose a programmatic purpose, no personalization tool has anything to attach to. Landmark/region navigation also consistently ranks below headings as a _reliable_ screen reader navigation method, largely because implementation is inconsistent across sites ([WebAIM Screen Reader User Survey #10, 2024](https://webaim.org/projects/screenreadersurvey10/)).
- **Aspirational, not mandated:** Identify Purpose is a **Level AAA** requirement in WCAG 2.2 — not required for AA conformance, and rarely referenced in legal accessibility mandates. Meeting it is a genuine quality signal, not a compliance checkbox.
- **Usability:** Clear purpose identification benefits everyone, not just assistive technology users. WebAIM's Million report has found that home pages average well into the double digits of ARIA landmarks — a sign that many sites add landmarks without a clear, distinct purpose for each one, which confuses navigation rather than aiding it ([WebAIM Million — Landmarks](https://webaim.org/projects/million/#landmarks)).

For more, see [W3C's identify purpose docs](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html) and [W3C COGA — Making Content Usable](https://www.w3.org/TR/coga-usable/).

---

## **What You Can Do Right Now**

🔍 **Audit Your Content**
Run your screen reader's landmarks/regions list (NVDA: `Insert+F7` → Landmarks tab; VoiceOver: `VO+U` → Landmarks rotor; JAWS: `Insert+F6` filtered to regions, or `R` to jump region-to-region). Confirm every meaningful region — banner, navigation, main, search, complementary, footer — appears exactly once with a name describing its purpose. Then tab through icon-only buttons (menu, search, cart) and confirm each announces its function, not just "button."

🛠️ **Implement Purpose Identification**
Give every icon-only control an accessible name (`aria-label`, visually-hidden text, or `<title>` inside inline SVG). Use one instance of each landmark role per page where possible; when you need more than one of the same role (e.g., two `<nav>` elements), distinguish them with `aria-label` (e.g., `aria-label="Primary"` / `aria-label="Footer"`). Replace generic `<div>` regions with a real ARIA `role` (or semantic HTML5 element) that names what the region actually is.

📢 **Escalate Smartly**
If a component library or theme renders icon buttons and custom regions without any way to inject `aria-label` or `role` attributes, that's a platform limitation to flag to your dev team or vendor — not something a content editor can patch. Since this is a Level AAA criterion, frame the ask as a quality investment (better cognitive-disability and AAC support), not a compliance blocker.

📚 **Learn More**
[W3C Understanding 1.3.6: Identify Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html) · [MDN ARIA Landmark Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Landmark_roles) · [W3C COGA — Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/)

---

## **What Needs Purpose Identified?**

- Navigation regions (nav)
- Main content (main)
- Search regions (search)
- Banners, footers, sidebars (banner, contentinfo, complementary)
- Icons and UI components with specific purposes

All such elements should use ARIA roles, landmarks, or attributes to identify their purpose.

---

## **How to Identify Purpose**

- Add ARIA landmarks and roles to UI components and regions
- Use semantic HTML5 elements (nav, main, aside, etc.)
- Test with browsers and assistive tech for context and navigation
- Document component purposes for developers and designers

For more, see the [MDN ARIA landmarks docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Landmark_roles).

---

## **Implementation Examples**

**Icon-only buttons — no accessible name vs. labeled:**

```html
<!-- ❌ Before: purpose is only visual; announces as "button" -->
<button>
  <svg aria-hidden="true"><!-- hamburger icon --></svg>
</button>

<!-- ✅ After: purpose is programmatically determinable -->
<button aria-label="Open main menu">
  <svg aria-hidden="true"><!-- hamburger icon --></svg>
</button>
```

**Duplicate landmarks — indistinguishable vs. labeled:**

```html
<!-- ❌ Before: two <nav> regions both announce simply as "navigation" -->
<nav>...</nav>
<footer>
  <nav>...</nav>
</footer>

<!-- ✅ After: each nav has a distinct, purpose-describing name -->
<nav aria-label="Primary">...</nav>
<footer>
  <nav aria-label="Footer">...</nav>
</footer>
```

**Generic region — unstyled div vs. named landmark:**

```html
<!-- ❌ Before: visually a filter panel, invisible as a region to assistive tech -->
<div class="filters">...</div>

<!-- ✅ After: purpose is identified via role + accessible name -->
<div role="region" aria-label="Filter results">...</div>
```

**Platform limitation callout**: Many component libraries (e.g., icon-button primitives in older Bootstrap/Material themes, or hand-rolled React icon buttons) render an icon with no text alternative by default, requiring the implementing team to explicitly pass a `label`/`aria-label` prop every time the component is used. Because 1.3.6 is Level AAA, some teams deprioritize this fix — flag it as a low-effort, high-impact enhancement rather than a blocking defect.

**Before/After comparison table:**

| Element                 | Before (fails 1.3.6)                      | After (passes 1.3.6)                                                                 |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------ |
| Icon-only button        | `<button><svg>...</svg></button>`         | `<button aria-label="Open main menu"><svg aria-hidden="true">...</svg></button>`     |
| Duplicate nav regions   | `<nav>...</nav>` ×2, both unnamed         | `<nav aria-label="Primary">`, `<nav aria-label="Footer">`                            |
| Generic content region  | `<div class="filters">...</div>`          | `<div role="region" aria-label="Filter results">...</div>`                           |
| Search field/control    | Unlabeled `<div>` wrapping a search input | `<div role="search"><label for="q">Search</label><input id="q" type="search"></div>` |
| Sidebar/related content | `<div id="sidebar">...</div>`             | `<aside aria-label="Related articles">...</aside>`                                   |

---

## **Common Mistakes to Avoid**

- Omitting ARIA roles or landmarks on key regions
- Using incorrect or generic roles
- Not testing with assistive technology
- Ignoring the needs of users with cognitive disabilities

Audit your site regularly and use accessibility checkers to ensure all purposes are identified. For more, see the [W3C's ARIA Landmarks documentation](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/).

---

## **How to Test Your Purpose Identification**

### **Quick Test (3 minutes)**

1. Open your screen reader's landmarks/regions list (NVDA `Insert+F7` → Landmarks tab; VoiceOver `VO+U` → Landmarks rotor; JAWS `Insert+F6` filtered to regions).
2. Confirm every meaningful page region appears exactly once, with a name that describes its purpose (not "region," "div," or a duplicate of another entry).
3. Tab through every icon-only control (menu, search, cart, close) and confirm the screen reader announces its function, not just "button" or "link."
4. If two landmarks share the same role (e.g., two `<nav>` elements), confirm each has a distinguishing `aria-label`.

### **Quality Checklist**

- Every icon-only button/link has an accessible name describing its function
- No landmark role is used more than once without a distinguishing `aria-label`
- Every meaningful page region (header, nav, main, search, complementary, footer) has a landmark or ARIA `role`
- No generic `<div>` stands in for a region that has an identifiable purpose
- Region names describe purpose, not implementation ("Filter results," not "Sidebar div 2")
- Custom widgets (accordions, tabs, dialogs) expose their role via ARIA, not just visual styling
- Structure survives a screen reader landmarks-list pass with zero unnamed or duplicate regions

### **Recommended Tools**

- **Manual (primary)**: Screen reader landmarks/regions list (NVDA, VoiceOver, JAWS); tabbing through icon-only controls with a screen reader active
- **Automated (supplementary)**: [axe DevTools](https://www.deque.com/axe/devtools/), [WAVE](https://wave.webaim.org/) — these reliably flag missing landmark roles and unlabeled buttons, but **cannot** judge whether a landmark's purpose is actually correct or distinct from a sibling landmark; pair with the manual landmarks-list check above

---

## **Differences Between A, AA, and AAA for Guideline 1.3.6 in WCAG 2.2**

- **Level A:** No requirement for 1.3.6.
- **Level AA:** No requirement for 1.3.6.
- **Level AAA:** Requires the purpose of UI components, icons, and regions to be programmatically determined. This is the core requirement for 1.3.6 and is mandatory for AAA conformance.

For more, see the [W3C’s official documentation for 1.3.6 Identify Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html).

---

## **Common Questions**

### **Is 1.3.6 required for WCAG AA conformance?**

No. Identify Purpose is a **Level AAA** success criterion — WCAG 2.2 does not require it for A or AA conformance, and it is rarely referenced in legal accessibility mandates (most laws, including ADA Title II and Section 508, cite Level AA as the baseline). Treat 1.3.6 as an aspirational quality target that materially improves the experience for cognitive-disability and AAC users, not a compliance blocker.

### **How is 1.3.6 different from 1.3.1 (Info and Relationships)? Don't they both cover landmarks?**

They overlap but aren't the same requirement. **1.3.1 (Level A)** only requires that structure and relationships be programmatically determinable at all — correct `<nav>`, `<main>`, `<h2>` elements exist and are used properly. **1.3.6 (Level AAA)** requires that the _purpose_ of components, icons, and regions be identifiable — not just their structural role — specifically so personalization tools (symbol sets, icon-to-text substitution) can act on it. A page can fully pass 1.3.1 while still failing 1.3.6 if icons lack accessible names or duplicate landmarks aren't distinguished.

### **We use icons everywhere in our UI — do all of them need this?**

Any icon or UI component that conveys meaning or triggers an action needs a programmatically determinable purpose (an accessible name, at minimum). Purely decorative icons (with no function and no meaning of their own) should instead be hidden from assistive technology entirely (`aria-hidden="true"`) so they don't add noise. The test is: does this icon do something or mean something on its own? If yes, it needs a name; if no, hide it.

### **Can an automated accessibility checker catch all purpose-identification problems?**

No. Automated tools (axe, WAVE) reliably catch _missing_ accessible names on buttons and _missing_ landmark roles. They cannot judge whether a landmark's purpose is actually correct (e.g., whether a `<nav>` genuinely contains primary navigation) or whether two landmarks with the same role are meaningfully distinguished. Manual review — a screen reader landmarks-list pass — is the only reliable way to verify purpose, not just presence.

### **What's the connection between 1.3.6 and personalization for AAC/symbol-set users?**

1.3.6 is the technical basis that makes personalization possible: once a component's purpose is programmatically identified (not just its visual appearance), assistive technology and browser extensions can substitute personalized icon sets, symbol systems, or simplified language for users with cognitive disabilities or who rely on Augmentative and Alternative Communication (AAC). This is the specific use case the W3C's Cognitive and Learning Disabilities Accessibility Task Force (COGA) and Personalization Semantics work were designed to support — see [W3C COGA — Making Content Usable](https://www.w3.org/TR/coga-usable/).

---

## **Quick Checklist**

- All UI components and regions use ARIA roles or landmarks
- Semantic HTML5 elements are used where possible
- Tested with assistive technology
- Component purposes are documented for devs/designers
- No key region is left unmarked

---

## **Summary**

Guideline 1.3.6 is essential for making your site understandable and navigable for everyone. By identifying the purpose of all UI components and regions, you support users with disabilities, improve usability, and meet AAA requirements. Make purpose identification a standard part of your development process.
