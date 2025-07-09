<!--
title: 1.4.12 - Text Spacing
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.4.12 (Text Spacing)—what it means, why it matters, and how to ensure your content is readable with custom spacing.
keywords: wcag 1.4.12, text spacing, accessibility, web standards, readability, user styles
image: WCAG-Series-1.4.12.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 1.4.12, Text Spacing"
status: published
date: 2025-07-01
excerpt: This guideline ensures content remains readable when users adjust text spacing for better readability.
-->

# **WCAG Guideline 1.4.12: Text Spacing Explained**

**Estimated read time:** 6–7 minutes

---

## **Guideline 1: Perceivable**

The Perceivable principle ensures that all users can access and understand content, regardless of their sensory abilities. This includes making sure text remains readable when users adjust spacing.

## **Guideline 1.4: Distinguishable**

Guideline 1.4 focuses on making content easier to see and hear. Text Spacing ensures users can apply their preferred spacing without losing content or functionality.

## **What Is Guideline 1.4.12 Text Spacing?**

<!-- [Illustration: Text blocks with different line, letter, and word spacing] -->

> "No loss of content or functionality occurs by setting all of the following and by changing no other style property: line height (line spacing) to at least 1.5 times the font size; spacing following paragraphs to at least 2 times the font size; letter spacing (tracking) to at least 0.12 times the font size; word spacing to at least 0.16 times the font size."

Guideline 1.4.12 Text Spacing is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#text-spacing).

- Users must be able to adjust line, paragraph, letter, and word spacing without breaking the layout.
- No loss of content or functionality when these spacing settings are applied.
- Supports users with dyslexia, low vision, and reading difficulties.

For more, see [Harvard University: Technique – Text spacing](https://accessibility.huit.harvard.edu/technique-text-spacing).

---

## **Why Does It Matter?**

<!-- [Infographic: User with dyslexia icon, text spacing controls, and a warning sign for overlapping text] -->

- **Readability:** Custom spacing helps users with dyslexia and low vision.
- **Inclusivity:** Supports a wide range of reading preferences and needs.
- **Legal Compliance:** Text Spacing is a Level AA requirement in WCAG 2.2.
- **Usability:** Improves comfort and comprehension for all users.

---

## **What Needs to Support Text Spacing?**

<!-- [Grid: Paragraphs, forms, and menus, all shown with custom spacing applied] -->

- Paragraphs and articles
- Forms and instructions
- Navigation menus

All must remain readable and functional with custom spacing.

---

## **How to Meet Guideline 1.4.12**

<!-- [Side-by-side: Text block with default spacing vs. text block with user-customized spacing] -->

- Use relative units (em, rem) for spacing
- Avoid fixed heights and overflow:hidden on containers
- Test with user stylesheets that apply the required spacing
- Ensure no content is cut off, overlaps, or becomes hidden

For more, see the [W3C's Text Spacing Techniques](https://www.w3.org/WAI/WCAG22/Techniques/css/C21).

---

## **Common Mistakes to Avoid**

<!-- [Do/Don't graphic: Left side with readable, spaced text, right side with overlapping or cut-off text] -->

- Fixed container heights that cut off text
- Content that overlaps or disappears with custom spacing
- Not testing with user stylesheets or browser extensions

---

## **Differences Between A, AA, and AAA for Guideline 1.4.12 in WCAG 2.2**

<!-- [Infographic: Three columns labeled A, AA, AAA with example requirements for each] -->

- **Level A:** No specific requirement for text spacing.
- **Level AA:** Requires support for user-applied spacing settings without loss of content or functionality.
- **Level AAA:** No additional requirements for text spacing.

For more, see the [W3C’s official documentation for 1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html).

---

## **Quick Checklist**

<!-- [Checklist graphic: Icons for line height, paragraph spacing, letter spacing, and word spacing] -->

- No loss of content or functionality with custom spacing
- Supports line, paragraph, letter, and word spacing
- No fixed heights or overflow that hides text
- Tested with user stylesheets

---

## **Summary**

<!-- [Illustration: User reading a web page with custom text spacing applied] -->

Guideline 1.4.12 ensures your content remains readable and usable when users adjust spacing. Use flexible CSS and always test with user stylesheets.

**Next Up:**

[Read Guideline 1.4.13: Content on Hover or Focus →](WCAG-Guideline-1-4-13-Content-on-Hover-or-Focus-Explained)

*Accessibility means everyone can read your content—no matter their spacing needs!*
