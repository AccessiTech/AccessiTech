<!--
title: 1.4.4 - Resize Text
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.4.4 (Resize Text)—what it means, why it matters, and how to ensure text remains readable when users zoom or increase font size.
keywords: wcag 1.4.4, resize text, accessibility, web standards, zoom, responsive design
image: WCAG-Series-1.4.4.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 1.4.4 Explained, Resize Text"
status: published
date: 2025-07-01
excerpt: This guideline ensures text remains readable when users zoom or increase font size.
next: /wcag/WCAG-Guideline-1-4-5-Images-of-Text-Explained, Guideline 1.4.5 - Images of Text
previous: /wcag/WCAG-Guideline-1-4-3-Contrast-Minimum-Explained, Guideline 1.4.3 - Contrast (Minimum)
-->

# **WCAG Guideline 1.4.4: Resize Text Explained**

**Estimated read time:** 6–7 minutes

---

## **Guideline 1: Perceivable**

The Perceivable principle ensures that all users can access and understand content, regardless of their sensory abilities. This includes making sure that text remains readable when resized.

## **Guideline 1.4: Distinguishable**

Guideline 1.4 focuses on making content easier to see and hear. Users with low vision often need to increase text size to read comfortably.

## **What Is Guideline 1.4.4 Resize Text?**

> "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality."

Guideline 1.4.4 Resize Text is a requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#resize-text).

- Users must be able to increase text size to 200% without losing content or functionality.
- Applies to all text except captions and images of text.
- Ensures layouts remain usable and readable when zoomed.

For more, see the [W3C's Resize Text Techniques](https://www.w3.org/WAI/WCAG22/Techniques/css/C12).

---

## **Why Does It Matter?**

- **Readability:** Many users need larger text to read comfortably.
- **Inclusivity:** Supports users with low vision or reading difficulties.
- **Legal Compliance:** Resize Text is a Level AA requirement in WCAG 2.2.
- **Usability:** Responsive text improves experience for all users, especially on mobile.

---

## **What Needs to Support Accessible Text Resizing?**

- Body text and headings
- Buttons and links
- Form fields and labels
- Navigation menus

All must remain readable and functional when text is resized.

---

## **How to Meet Guideline 1.4.4**

- Use relative units (em, rem, %) for font sizes and layout
- Avoid fixed pixel heights/widths for containers
- Test your site at 200% zoom in browsers
- Ensure no content is cut off or overlaps
- Avoid images of text where possible

---

## **Common Mistakes to Avoid**

- Using fixed pixel sizes for text or containers
- Content that disappears or overlaps when zoomed
- Images of text that do not scale
- Not testing with browser zoom or user stylesheets

---

## **Differences Between A, AA, and AAA for Guideline 1.4.4 in WCAG 2.2**

- **Level A:** No specific requirement for resizing text.
- **Level AA:** Requires text can be resized up to 200% without loss of content or functionality.
- **Level AAA:** Requires text can be resized up to 200% and all functionality remains (see 1.4.8 for more advanced requirements).

For more, see the [W3C’s official documentation for 1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html).

---

## **Quick Checklist**

- All text can be resized up to 200%
- No loss of content or functionality when zoomed
- No fixed pixel sizes for text or containers
- Tested at 200% zoom in browsers

---

## **Summary**

Guideline 1.4.4 ensures users can read and interact with content at larger text sizes. Use relative units and test your site at 200% zoom to ensure accessibility.

_Accessibility means everyone can read your content—make sure it scales!_
