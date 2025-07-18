<!--
title: 1.3.6 - Identify Purpose
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.3.6 (Identify Purpose)—what it means, why it matters, and how to help browsers and assistive tech identify the purpose of user interface components beyond just input fields.
keywords: wcag 1.3.6, identify purpose, accessibility, web standards, autofill, user interface, digital inclusion
image: WCAG-Series-1.3.6.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 1.3.6 Explained, Identify Input Purpose"
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

- **Inclusivity:** Identifying purpose helps users with cognitive disabilities, memory issues, or language barriers.
- **Legal Compliance:** Identify Purpose is a Level AAA requirement in WCAG 2.2.
- **Usability:** Enhanced context and navigation benefit all users.

For more, see [W3C's identify purpose docs](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html).

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

## **Common Mistakes to Avoid**

- Omitting ARIA roles or landmarks on key regions
- Using incorrect or generic roles
- Not testing with assistive technology
- Ignoring the needs of users with cognitive disabilities

Audit your site regularly and use accessibility checkers to ensure all purposes are identified. For more, see the [W3C's ARIA Landmarks documentation](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/).

---

## **Differences Between A, AA, and AAA for Guideline 1.3.6 in WCAG 2.2**

- **Level A:** No requirement for 1.3.6.
- **Level AA:** No requirement for 1.3.6.
- **Level AAA:** Requires the purpose of UI components, icons, and regions to be programmatically determined. This is the core requirement for 1.3.6 and is mandatory for AAA conformance.

For more, see the [W3C’s official documentation for 1.3.6 Identify Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html).

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
