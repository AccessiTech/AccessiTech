<!--
title: 3.1.2 - Language of Parts
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 3.1.2 (Language of Parts)—what it means, why it matters, and how to ensure the language of each part of a page is programmatically determined.
keywords: wcag 3.1.2, language of parts, accessibility, web standards, digital inclusion
image: WCAG-Series-3.1.2.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 3.1.2 Explained, Language of Parts"
status: published
date: 2025-07-03
excerpt: This guideline ensures the language of each part of a page is programmatically determined.
next: /wcag/WCAG-Guideline-3-1-3-Unusual-Words-Explained, Guideline 3.1.3 - Unusual Words
previous: /wcag/WCAG-Guideline-3-1-1-Language-of-Page-Explained, Guideline 3.1.1 - Language of Page
-->

# **WCAG Guideline 3.1.2: Language of Parts Explained**

**Estimated read time:** 6–7 minutes

---

## **Guideline 3: Understandable**

The Understandable principle ensures that web content is clear and predictable for all users, including those who use assistive technologies.

## **Guideline 3.1: Readable**

Guideline 3.1 focuses on making text content readable and understandable by identifying the language of the page and any changes in language.

## **What Is Guideline 3.1.2 Language of Parts?**

> "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular."

Guideline 3.1.2 requires that any content in a different language from the main page is marked up with the correct language code.

- Helps screen readers switch pronunciation and voice
- Essential for multilingual websites and content
- Applies to all passages, phrases, or words in a different language

For more, see [BOIA: WCAG Success Criteria 3.1.1 and 3.1.2 – Language of Page and Parts](https://www.boia.org/blog/wcag-success-criteria-3.1.1-and-3.1.2-language-of-page-and-parts).

---

## **Why Does It Matter?**

- **Inclusivity:** Correct language settings help screen readers and translation tools.
- **Legal Compliance:** Language of Parts is a Level AA requirement in WCAG 2.1 and 2.2.
- **Usability:** Improves comprehension and accessibility for all users.

For more, see [W3C’s guidance on language of parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html).

---

## **What Needs a Language Attribute?**

- Multilingual content
- Quotes and technical terms
- Any content with a different language

---

## **How to Make Language of Parts Accessible**

- Use the correct lang attribute for each part
- Document language conventions
- Test with screen readers and translation tools

For more, see the [W3C's Language of Parts Techniques](https://www.w3.org/WAI/WCAG22/Techniques/html/H58).

---

## **Common Mistakes to Avoid**

- Missing or incorrect lang attribute
- Not documenting language conventions
- Not testing with screen readers or translation tools

---

## **Differences Between A, AA, and AAA for Guideline 3.1.2 in WCAG 2.2**

- **Level A:** Not applicable for this guideline.
- **Level AA:** Requires the language of each part can be programmatically determined. This is the core requirement for 3.1.2 and is mandatory for AA accessibility.
- **Level AAA:** For Guideline 3.1.2, there are no additional requirements beyond Level AA in WCAG 2.2. Meeting Level AA for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html).

---

## **Quick Checklist**

- The lang attribute is set correctly for each part
- Language conventions are documented
- Tested with screen readers and translation tools

---

## **Summary**

Guideline 3.1.2 is essential for helping users understand your site. By setting the correct language for each part, you support users with disabilities, improve usability, and meet legal requirements. Test your site regularly and make language accessibility a core part of your development process.

