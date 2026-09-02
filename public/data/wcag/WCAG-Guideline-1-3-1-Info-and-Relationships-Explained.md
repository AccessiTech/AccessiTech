<!--
title: 1.3.1 - Info and Relationships
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.3.1 (Info and Relationships)—what it means, why it matters, and how to ensure information and relationships are…
keywords: wcag 1.3.1, info and relationships, accessibility, web standards, headings, lists, tables, digital inclusion
image: WCAG-Series-1.3.1.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.3.1 Explained,  Info and Relationships"
status: published
date: 2025-07-01
excerpt: This guideline ensures information and relationships are programmatically determined or available in text.
next: /wcag/WCAG-Guideline-1-3-2-Meaningful-Sequence-Explained, Guideline 1.3.2 - Meaningful Sequence
previous: /wcag/WCAG-Guideline-1-2-9-Audio-Only-Live-Explained, Guideline 1.2.9 - Audio-only (Live)
-->

# **WCAG Guideline 1.3.1: Info and Relationships Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.3: Adaptable**

Guideline 1.3 focuses on creating content that can be presented in different ways (for example, simpler layout) without losing information or structure. This is essential for users who rely on assistive technologies or need content in alternative formats.

## **What Is Guideline 1.3.1 Info and Relationships?**

> "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text."

Guideline 1.3.1 is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships).

- Use semantic HTML to mark up headings, lists, tables, and form fields.
- Ensure that relationships between elements (like labels and inputs) are clear to assistive technology.
- Don’t rely on visual cues alone (like color or position) to convey meaning or structure.

This ensures that users of screen readers and other assistive tech can understand the structure and relationships in your content.

---

## **Why Does It Matter?**

- **Inclusivity:** Semantic structure helps users with disabilities navigate and understand content. 71% of screen reader users say navigating by headings is the primary way they find content on a page ([WebAIM Screen Reader User Survey #10, 2024](https://webaim.org/projects/screenreadersurvey10/#finding)).
- **Legal Compliance:** Info and Relationships is a Level A requirement in WCAG 2.2 and referenced in accessibility laws worldwide. 86.1% of home pages had detectable WCAG failures related to missing or non-descriptive form labels, low-contrast text, or missing alt text, per the [WebAIM Million (2024)](https://webaim.org/projects/million/) accessibility evaluation of the top 1,000,000 home pages.
- **Usability:** Good structure benefits all users, making content easier to scan and use. Landmark regions (`nav`, `main`, `aside`) were present on only ~50–60% of home pages evaluated, per the [WebAIM Million report](https://webaim.org/projects/million/#landmarks)—pages without them force screen reader users into linear, unstructured navigation.

For more, see [WebAIM's semantic structure guide](https://webaim.org/techniques/semanticstructure/).

---

## **What You Can Do Right Now**

🔍 **Audit Your Content**
Turn off your site's CSS (browser dev tools → Disable Styles) and read the page top to bottom. If it doesn't make sense as a plain, unstyled document—headings blur into body text, tables scramble, form labels float away from their fields—assistive technology can't make sense of it either. Follow up with a screen reader heading-list check (NVDA: `Insert+F7`; VoiceOver: `VO+U`; JAWS: `Insert+F6`) to confirm your heading outline is complete and in order.

🛠️ **Implement Semantic Structure**
Replace styled `<div>`s with real HTML elements: `<h1>`–`<h6>` for headings (in outline order, no skipped levels), `<ul>`/`<ol>`/`<dl>` for lists, `<table>` with `<th scope="col|row">` for tabular data only, and `<label for="id">` tied to every form `<input>`. In page builders (WordPress, Squarespace, Elementor), explicitly select the heading level from the block's dropdown—don't rely on font-size styling to "look like" a heading.

📢 **Escalate Smartly**
If your CMS or page-builder can't produce real semantic markup (e.g., a widget hard-codes `<div>` regardless of settings), that's a platform limitation worth escalating to your dev team or theme vendor—not something content editors can fix alone. Flag it as a blocker for Level A compliance.

📚 **Learn More**
[W3C Understanding 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) · [WebAIM Semantic Structure Guide](https://webaim.org/techniques/semanticstructure/) · [MDN Semantic HTML Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)

---

## **What Needs Semantic Structure?**

- Headings (h1–h6)
- Lists (ul, ol, dl)
- Tables (with thead, tbody, th, td)
- Form fields and labels
- Landmarks (nav, main, aside, etc.)

All such elements should use semantic HTML to convey structure and relationships.

---

## **How to Provide Info and Relationships**

- Use correct HTML elements for structure (not just divs and spans)
- Associate labels with form fields using the for and id attributes
- Use table markup for tabular data, not for layout
- Group related form fields with fieldset and legend

For more, see the [MDN semantic HTML docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html).

---

## **Implementation Examples**

**Headings — semantic vs. cosmetic:**

```html
<!-- ❌ Before: styled div, invisible to heading navigation -->
<div class="section-title-large">Our Services</div>

<!-- ✅ After: real heading, appears in screen reader Elements List -->
<h2>Our Services</h2>
```

**Form labels — placeholder vs. persistent label:**

```html
<!-- ❌ Before: placeholder disappears on focus, unreliable as a label -->
<input type="email" placeholder="Email Address" />

<!-- ✅ After: label persists and is programmatically tied to the field -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" />
```

**Tables — layout vs. data:**

```html
<!-- ❌ Before: layout table, no header cells, screen reader announces meaningless "table with 3 columns" -->
<table>
  <tr>
    <td>Name</td>
    <td>Role</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>Ana</td>
    <td>Designer</td>
    <td>Remote</td>
  </tr>
</table>

<!-- ✅ After: real data table with header association -->
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ana</td>
      <td>Designer</td>
      <td>Remote</td>
    </tr>
  </tbody>
</table>
```

**Platform limitation callout**: In WordPress's Gutenberg editor, a "Paragraph" block styled with a custom CSS class to look like a heading (a common pattern in older themes) will **not** appear in the screen reader heading list—only blocks explicitly set to "Heading" (H2–H6) via the block toolbar do. Audit any theme that lets editors apply "heading-like" styles to paragraph blocks.

**Before/After comparison table:**

| Element        | Before (fails 1.3.1)                    | After (passes 1.3.1)                                 |
| -------------- | --------------------------------------- | ---------------------------------------------------- |
| Section title  | `<div class="title">Our Services</div>` | `<h2>Our Services</h2>`                              |
| Form field     | `<input placeholder="Email">`           | `<label for="email">Email</label><input id="email">` |
| Tabular data   | `<table>` with no `<th>`/`scope`        | `<table>` with `<thead>`, `<th scope="col">`         |
| Grouped fields | Bare inputs with visual grouping only   | `<fieldset><legend>Shipping Address</legend>...`     |
| Page regions   | `<div id="nav">`, `<div id="main">`     | `<nav>`, `<main>`, `<aside>` landmark elements       |

---

## **Common Mistakes to Avoid**

- Using visual formatting (bold, color, position) instead of semantic elements
- Not associating labels with form fields
- Using tables for layout instead of data
- Skipping heading levels or using headings for styling only

Audit your site regularly and use accessibility checkers to ensure all information and relationships are programmatically determined. For more, see the [W3C's HTML Techniques for WCAG](https://www.w3.org/WAI/WCAG21/Techniques/html/).

---

## **How to Test Your Semantic Structure**

### **Quick Test (3 minutes)**

1. Disable CSS (dev tools → Rendering → "Disable local/all styles," or a browser extension like "Web Developer").
2. Read the unstyled page top to bottom—does it still make sense as a document outline?
3. Open your screen reader's heading list (NVDA `Insert+F7`, VoiceOver `VO+U`, JAWS `Insert+F6`) and confirm headings are present, in logical order, and describe the section that follows.
4. Tab to each form field and confirm a label is announced before the field type.

### **Quality Checklist**

- Every heading level increases by one at a time (no jump from `<h2>` to `<h5>`)
- Exactly one `<h1>` per page, describing the page's main content
- Lists use `<ul>`, `<ol>`, or `<dl>`—not styled `<div>`/`<p>` sequences
- Data tables use `<th scope="col">` or `<th scope="row">` for every header cell
- No tables are used purely for visual layout
- Every form input has a programmatically associated `<label for>`
- Related form fields are grouped with `<fieldset>`/`<legend>` where appropriate
- Page regions use landmark elements (`<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>`)
- Structure survives with CSS fully disabled

### **Recommended Tools**

- **Manual (primary)**: Screen reader Elements List / heading-list navigation (NVDA, VoiceOver, JAWS); "Disable Styles" browser test
- **Automated (supplementary)**: [axe DevTools](https://www.deque.com/axe/devtools/), [WAVE](https://wave.webaim.org/), Chrome Lighthouse accessibility audit—these catch missing labels/empty headings but not outline logic or landmark misuse, so pair with the manual check above

---

## **Differences Between A, AA, and AAA for Guideline 1.3.1 in WCAG 2.2**

- **Level A:** Requires information, structure, and relationships to be programmatically determined or available in text. This is the core requirement for 1.3.1 and is mandatory for basic accessibility.
- **Level AA:** For Guideline 1.3.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AA.
- **Level AAA:** For Guideline 1.3.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

---

## **Common Questions**

### **Does 1.3.1 have different requirements at AA or AAA?**

No. As the entry notes, 1.3.1 is a **Level A** requirement only—WCAG 2.2 does not define additional AA or AAA criteria for Info and Relationships. Meeting Level A here also satisfies AA and AAA for this specific criterion; don't confuse this with _other_ 1.3.x criteria (like 1.3.4 Orientation or 1.3.5 Identify Input Purpose), which are separate Level AA requirements.

### **Can an automated accessibility checker catch all semantic structure problems?**

Automated tools (axe, WAVE, Lighthouse) reliably flag _missing_ elements—an input with no label, an empty heading, a table with no header cells. They generally **cannot** detect whether your heading levels form a logical outline, or whether a `<nav>` landmark actually wraps navigational content. Manual review—CSS-off + screen reader heading-list test—is required to catch these.

### **Our page builder only lets us style text to "look like" a heading—does that count?**

No. Visual styling (font size, bold, color) that isn't backed by a real `<h1>`–`<h6>` element is invisible to screen reader heading navigation and fails 1.3.1. If your CMS/page-builder can't apply a true heading tag, that's a platform limitation to escalate to your dev team or theme vendor—see the "Escalate Smartly" CTA above.

### **We use placeholder text in our form fields instead of visible labels—is that enough?**

No. Placeholder text disappears once a user starts typing and is not reliably announced as a persistent label by all assistive technology. Use a real `<label for="id">` element tied to the input; you can visually hide it with CSS if the design calls for placeholder-only visuals, but it must exist in the markup.

### **How does 1.3.1 relate to other WCAG criteria, like 4.1.2 (Name, Role, Value) or 2.4.6 (Headings and Labels)?**

1.3.1 focuses on whether structure and relationships are _programmatically determinable_ at all (the markup exists and is correct). 4.1.2 focuses on whether custom UI components (e.g., custom widgets built with `<div>` + ARIA) expose the correct name/role/value to assistive tech. 2.4.6 focuses on whether headings and labels are _descriptive_, not just present. A page can pass 1.3.1 (real `<h2>` elements exist) but still fail 2.4.6 if those headings are vague (e.g., "Section 2"). Treat these as complementary, not overlapping, checks.

---

## **Quick Checklist**

- All headings use semantic HTML (h1–h6)
- Lists use ul, ol, or dl elements
- Tables use proper markup for data, not layout
- Form fields are associated with labels
- Landmarks are used for navigation and structure

---

## **Summary**

Guideline 1.3.1 is essential for making your site usable and understandable for everyone. By using semantic HTML and ensuring relationships are programmatically determined, you support users with disabilities, improve usability, and meet legal requirements. Make semantic structure a standard part of your development process.
