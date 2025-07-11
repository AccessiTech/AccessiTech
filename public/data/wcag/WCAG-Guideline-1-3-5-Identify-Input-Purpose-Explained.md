<!--
title: 1.3.5 - Identify Input Purpose
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.3.5 (Identify Input Purpose)—what it means, why it matters, and how to help browsers and assistive tech identify the purpose of input fields.
keywords: wcag 1.3.5, identify input purpose, accessibility, web standards, autofill, input fields, digital inclusion
image: WCAG-Series-1.3.5.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 1.3.5 Explained, Identify Input Purpose"
status: published
date: 2025-07-01
excerpt: Helps browsers and assistive technologies identify the purpose of input fields, improving usability and accessibility.
next: /wcag/WCAG-Guideline-1-3-6-Identify-Purpose-Explained, Guideline 1.3.6 - Identify Purpose
previous: /wcag/WCAG-Guideline-1-3-4-Orientation-Explained, Guideline 1.3.4 - Orientation
-->

# **WCAG Guideline 1.3.5: Identify Input Purpose Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.3: Adaptable**

Guideline 1.3 focuses on creating content that can be presented in different ways (for example, simpler layout) without losing information or structure. This is essential for users who rely on assistive technologies or need content in alternative formats.

## **What Is Guideline 1.3.5 Identify Input Purpose?**

> "The purpose of each input field collecting information about the user can be programmatically determined when: The input field serves a purpose identified in the Input Purposes for User Interface Components section; and the content is implemented using technologies with support for identifying the expected meaning for form fields."

Guideline 1.3.5 is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose).

- Use HTML autocomplete attributes to identify the purpose of input fields (e.g., name, email, address).
- This helps browsers and assistive technologies provide autofill, suggestions, and context for users.
- Especially helpful for users with cognitive disabilities or those using password managers and screen readers.

This ensures that users can complete forms more easily and accurately, improving accessibility and usability.

---

## **Why Does It Matter?**

- **Inclusivity:** Identifying input purpose helps users with cognitive disabilities, memory issues, or language barriers.
- **Legal Compliance:** Identify Input Purpose is a Level AA requirement in WCAG 2.2 and referenced in accessibility laws worldwide.
- **Usability:** Autofill and suggestions speed up form completion for everyone.

For more, see [WebAIM's form accessibility guide](https://webaim.org/techniques/forms/).

---

## **What Needs Input Purpose Identified?**

- Name fields (first, last, full)
- Email address
- Street address, city, postal code
- Phone number
- Username, new-password, current-password

All such fields should use the appropriate autocomplete attribute.

---

## **How to Identify Input Purpose**

- Add the autocomplete attribute to input fields (e.g., autocomplete="email")
- Use correct field types (e.g., type="email", type="tel")
- Test with browsers and assistive tech for autofill support
- Document field purposes for developers and designers

For more, see the [MDN autocomplete docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).

---

## **Common Mistakes to Avoid**

- Omitting autocomplete attributes on supported fields
- Using incorrect or generic autocomplete values
- Not testing autofill with real browsers and assistive tech
- Ignoring the needs of users with cognitive disabilities

Audit your site regularly and use accessibility checkers to ensure all input purposes are identified. For more, see the [W3C's HTML Autofill Field Names documentation](https://www.w3.org/WAI/WCAG21/Techniques/html/H98).

---

## **Differences Between A, AA, and AAA for Guideline 1.3.5 in WCAG 2.2**

- **Level A:** No requirement for 1.3.5.
- **Level AA:** Requires input purposes to be programmatically determined for supported fields. This is the core requirement for 1.3.5 and is mandatory for AA conformance.
- **Level AAA:** For Guideline 1.3.5, there are no additional requirements beyond Level AA in WCAG 2.2. Meeting Level AA for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

---

## **Quick Checklist**

- All supported input fields use autocomplete attributes
- Field types match the expected input (email, tel, etc.)
- Autofill and suggestions work in browsers
- Tested with assistive technology
- Field purposes are documented for devs/designers

---

## **Summary**

Guideline 1.3.5 is essential for making forms easier and more accessible for everyone. By identifying input purposes, you support users with disabilities, improve usability, and meet legal requirements. Make input purpose identification a standard part of your form development process.
