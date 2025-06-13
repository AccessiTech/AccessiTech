<!--
title: WCAG Guideline 1.3.1: Info and Relationships Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.3.1 (Info and Relationships)—what it means, why it matters, and how to ensure information and relationships are programmatically determined or available in text.
keywords: wcag 1.3.1, info and relationships, accessibility, web standards, headings, lists, tables, digital inclusion
image: wcag-1-3-1-info-relationships.png
imageAlt: Illustration of a web page with headings, lists, and tables marked up
-->

# **WCAG Guideline 1.3.1: Info and Relationships Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.3: Adaptable**

Guideline 1.3 focuses on creating content that can be presented in different ways (for example, simpler layout) without losing information or structure. This is essential for users who rely on assistive technologies or need content in alternative formats.

## **What Is Guideline 1.3.1 Info and Relationships?**

[Illustration: Web page with headings, lists, and tables marked up for screen readers]

> "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text."

Guideline 1.3.1 is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships).

- Use semantic HTML to mark up headings, lists, tables, and form fields.
- Ensure that relationships between elements (like labels and inputs) are clear to assistive technology.
- Don’t rely on visual cues alone (like color or position) to convey meaning or structure.

This ensures that users of screen readers and other assistive tech can understand the structure and relationships in your content.

---

## **Why Does It Matter?**

[Infographic: Headings, lists, and tables with screen reader icons]

- **Inclusivity:** Semantic structure helps users with disabilities navigate and understand content.
- **Legal Compliance:** Info and Relationships is a Level A requirement in WCAG 2.2 and referenced in accessibility laws worldwide.
- **Usability:** Good structure benefits all users, making content easier to scan and use.

For more, see [WebAIM's semantic structure guide](https://webaim.org/techniques/semanticstructure/).

---

## **What Needs Semantic Structure?**

[Grid: Headings, lists, tables, forms, all with semantic markup icons]

- Headings (h1–h6)
- Lists (ul, ol, dl)
- Tables (with thead, tbody, th, td)
- Form fields and labels
- Landmarks (nav, main, aside, etc.)

All such elements should use semantic HTML to convey structure and relationships.

---

## **How to Provide Info and Relationships**

[Side-by-side code snippets: Semantic vs. non-semantic markup]
[Example: Form with properly associated labels]

- Use correct HTML elements for structure (not just divs and spans)
- Associate labels with form fields using the for and id attributes
- Use table markup for tabular data, not for layout
- Group related form fields with fieldset and legend

For more, see the [MDN semantic HTML docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with semantic markup, right side with only visual cues]

- Using visual formatting (bold, color, position) instead of semantic elements
- Not associating labels with form fields
- Using tables for layout instead of data
- Skipping heading levels or using headings for styling only

Audit your site regularly and use accessibility checkers to ensure all information and relationships are programmatically determined. For more, see [Deque's semantic HTML tips](https://www.deque.com/blog/semantic-html5-accessibility/).

---

## **Differences Between A, AA, and AAA for Guideline 1.3.1 in WCAG 2.2**

[Infographic: Three columns labeled A, AA, AAA with example requirements for each]

- **Level A:** Requires information, structure, and relationships to be programmatically determined or available in text. This is the core requirement for 1.3.1 and is mandatory for basic accessibility.
- **Level AA:** For Guideline 1.3.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AA.
- **Level AAA:** For Guideline 1.3.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for each item (heading, list, table, form, etc.)]

- All headings use semantic HTML (h1–h6)
- Lists use ul, ol, or dl elements
- Tables use proper markup for data, not layout
- Form fields are associated with labels
- Landmarks are used for navigation and structure

---

## **Summary**

[Illustration: User navigating a well-structured web page with a screen reader]

Guideline 1.3.1 is essential for making your site usable and understandable for everyone. By using semantic HTML and ensuring relationships are programmatically determined, you support users with disabilities, improve usability, and meet legal requirements. Make semantic structure a standard part of your development process.

**Next Up:**

[Read Guideline 1.3.2: Meaningful Sequence →](WCAG-Guideline-1-3-2-Meaningful-Sequence-Explained.md)

*Accessibility means everyone gets the full story—make your structure count!*
