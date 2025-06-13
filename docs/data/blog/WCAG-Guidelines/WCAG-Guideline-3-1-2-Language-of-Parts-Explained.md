<!--
title: WCAG Guideline 3.1.2: Language of Parts Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 3.1.2 (Language of Parts)—what it means, why it matters, and how to ensure language changes within your content are accessible.
keywords: wcag 3.1.2, language of parts, accessibility, web standards, html lang, screen readers, multilingual content
image: wcag-3-1-2-language-of-parts.png
imageAlt: Illustration of a web page with highlighted text in different languages and accessibility icons
-->

# **WCAG Guideline 3.1.2: Language of Parts Explained**

**Estimated read time:** 6–7 minutes

---

## **Guideline 3: Understandable**

The Understandable principle ensures that web content is clear and predictable for all users, including those who use assistive technologies.

## **Guideline 3.1: Readable**

Guideline 3.1 focuses on making text content readable and understandable by identifying the language of the page and any changes in language.

## **What Is Guideline 3.1.2 Language of Parts?**

[Illustration: Web page with highlighted phrases in different languages]

> "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text."

Guideline 3.1.2 requires that any content in a different language from the main page is marked up with the correct language code.

- Helps screen readers switch pronunciation and voice
- Essential for multilingual websites and content
- Applies to all passages, phrases, or words in a different language

---

## **Why Does It Matter?**

[Infographic: Screen reader icon, translation icon, and highlighted multilingual text]

- **Screen Readers:** Use language markup to pronounce words correctly.
- **Translation Tools:** Identify and translate only the relevant parts.
- **User Experience:** Multilingual users get accurate pronunciation and meaning.

For more, see [W3C’s guidance on language of parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html).

---

## **What Needs to Declare a Language Change?**

[Grid: HTML code with span lang attribute, multilingual text, assistive tech icons]

- Any phrase, sentence, or passage in a different language from the page’s default
- Use the `lang` attribute on elements like `<span lang="fr">Bonjour</span>`
- Exclude proper names, technical terms, and words that are part of the local vernacular

---

## **How to Meet Guideline 3.1.2**

[Side-by-side: HTML with correct lang attribute on a span vs. missing lang attribute]

- Identify all content in a different language from the page’s default
- Add the correct `lang` attribute to those elements
- Use standard language codes (e.g., `fr` for French, `es` for Spanish)
- Test with screen readers and accessibility tools

For more, see the [W3C's Language of Parts Techniques](https://www.w3.org/WAI/WCAG22/Techniques/html/H58).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with correct lang attribute on foreign phrase, right side missing or incorrect]

- Failing to mark up foreign words or phrases
- Using incorrect or non-standard language codes
- Over-marking (e.g., marking up proper names or technical terms unnecessarily)

---

## **Differences Between A, AA, and AAA for Guideline 3.1.2 in WCAG 2.2**

[Infographic: Three columns labeled A, AA, AAA with example requirements for each]

- **Level AA:** Requires the language of each passage or phrase in a different language to be programmatically determined.
- **Level AAA:** No additional requirements for 3.1.2.
- **Level A:** Not applicable (3.1.2 is a Level AA requirement).

For more, see the [W3C’s official documentation for 3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for code, globe, and highlighted text]

- All passages in a different language are marked with the correct `lang` attribute
- Proper names and technical terms are not unnecessarily marked
- Standard language codes are used
- Tested with screen readers and accessibility tools

---

## **Summary**

[Illustration: User with a screen reader and highlighted multilingual text]

Guideline 3.1.2 ensures that users and assistive technologies can identify and interpret language changes within your content. Mark up all foreign phrases and passages for a more accessible, inclusive web.

**Next Up:**

We’ll explore Guideline 3.2.1: On Focus—how to ensure that user focus doesn’t trigger unexpected changes.

*Accessibility means everyone can understand—make your content speak every language it needs to!*
