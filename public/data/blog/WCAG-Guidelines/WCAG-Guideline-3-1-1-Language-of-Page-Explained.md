<!--
title: WCAG Guideline 3.1.1: Language of Page Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 3.1.1 (Language of Page)—what it means, why it matters, and how to ensure your web pages declare their language for accessibility.
keywords: wcag 3.1.1, language of page, accessibility, web standards, html lang, screen readers
image: wcag-3-1-1-language-of-page.png
imageAlt: Illustration of a web page with a language globe and accessibility icons
status: draft
-->

# **WCAG Guideline 3.1.1: Language of Page Explained**

**Estimated read time:** 5–6 minutes

---

## **Guideline 3: Understandable**

The Understandable principle ensures that web content is clear and predictable for all users. This includes making sure that language is properly identified so assistive technologies can present content accurately.

## **Guideline 3.1: Readable**

Guideline 3.1 focuses on making text content readable and understandable by identifying the language of the page and any changes in language.

## **What Is Guideline 3.1.1 Language of Page?**

[Illustration: Web page with a globe icon and language dropdown]

> "The default human language of each Web page can be programmatically determined."

Guideline 3.1.1 requires that the main language of a web page is specified in the code, usually with the `lang` attribute in HTML.

- Helps screen readers and translation tools present content correctly
- Essential for users who rely on assistive technology
- Applies to every web page, regardless of content

---

## **Why Does It Matter?**

[Infographic: Screen reader icon, translation icon, and globe]

- **Screen Readers:** Use the language attribute to select correct pronunciation and voice.
- **Translation Tools:** Rely on language information to offer accurate translations.
- **Cognitive Accessibility:** Users with cognitive disabilities benefit from content presented in their preferred language.

For more, see [W3C’s guidance on language of page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html).

---

## **What Needs to Declare a Language?**

[Grid: HTML code with lang attribute, browser language settings, assistive tech icons]

- Every HTML page (use `<html lang="en">` or appropriate code)
- Single-page applications must update the language dynamically if content changes
- All web documents, including PDFs and e-books

---

## **How to Meet Guideline 3.1.1**

[Side-by-side: HTML with correct lang attribute vs. missing lang attribute]

- Add the `lang` attribute to the `<html>` element (e.g., `<html lang="en">`)
- Use the correct language code (e.g., `en`, `fr`, `es`)
- For dynamic content, update the language attribute as needed
- Validate your pages with accessibility checkers

For more, see the [W3C's Language of Page Techniques](https://www.w3.org/WAI/WCAG22/Techniques/html/H57).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with correct lang attribute, right side missing or incorrect]

- Omitting the `lang` attribute on the `<html>` element
- Using an incorrect or non-standard language code
- Failing to update the language for dynamically loaded content

---

## **Differences Between A, AA, and AAA for Guideline 3.1.1 in WCAG 2.2**

[Infographic: Three columns labeled A, AA, AAA with example requirements for each]

- **Level A:** Requires the default language of the page to be programmatically determined.
- **Level AA:** No additional requirements for 3.1.1.
- **Level AAA:** No additional requirements for 3.1.1.

For more, see the [W3C’s official documentation for 3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for globe, code, and screen reader]

- `lang` attribute is present on every `<html>` element
- Correct language code is used
- Dynamic content updates language as needed
- Validated with accessibility tools

---

## **Summary**

[Illustration: User with a screen reader and a globe icon]

Guideline 3.1.1 ensures that the main language of every web page is identified, helping assistive technologies and users alike. Always declare the language in your HTML and keep it up to date.

**Next Up:**

We’ll break down Guideline 3.1.2: Language of Parts—how to identify changes in language within your content.

*Accessibility starts with understanding—make sure your pages speak the right language!*
