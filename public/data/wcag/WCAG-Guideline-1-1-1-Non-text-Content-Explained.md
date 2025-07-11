<!--
title: 1.1.1 - Non-text Content
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.1.1 (Non-text Content)—what it means, why it matters, and how to provide accessible alternatives for images, icons, and more.
keywords: wcag 1.1.1, non-text content, alt text, accessibility, web standards, images, icons, screen readers, digital inclusion
image: WCAG-Series-1.1.1.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 1.1.1 Explained, Non-text Content"
status: published
date: 2025-07-01
excerpt: This guideline ensures accessible alternatives for images, icons, and other non-text content.
previous: /blog/The-Four-Principles-of-Accessibility-POUR, The Four Principles of Accessibility (POUR)
next: /wcag/WCAG-Guideline-1-2-1-Audio-Video-Prerecorded-Explained, Guideline 1.2.1 - Audio-only and Video-only (Prerecorded)
-->

# **WCAG Guideline 1.1.1: Non-text Content Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.1: Text Alternatives**

Guideline 1.1 focuses on providing text alternatives for any non-text content. This allows information conveyed by images, icons, or other media to be accessible to users who may not be able to see or interpret visual content. Text alternatives are the foundation for making web content accessible to everyone, including people using screen readers or other assistive technologies.

## **What Is Guideline 1.1.1 Non-text Content?**

> "All non-text content that is presented to the user has a text alternative that serves the equivalent purpose."

Guideline 1.1.1 Non-text Content is the very first requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content).

- Any information conveyed visually—such as images, icons, charts, or other media—must also be available in a text format.
- Text alternatives ensure that everyone, including people using screen readers or those with slow internet connections, can access your content.
- This principle is foundational to digital inclusion and is often the first step in making a website accessible.

This means that if you have a button with a magnifying glass icon, a screen reader user should hear "Search" instead of just "button" or nothing at all. By providing descriptive text alternatives, you make your site more usable for everyone, regardless of how they access the web.

---

## **Why Does It Matter?**

- **Inclusivity:** People who are blind or have low vision rely on text alternatives to access visual information.
- **SEO & Usability:** Good alt text helps search engines and users when images fail to load.
- **Legal Compliance:** This is a Level A requirement—essential for meeting accessibility laws.

Providing text alternatives for non-text content is about more than just compliance—it's about creating a web that works for everyone. People who are blind or have low vision rely on screen readers to interpret images and icons. Without alt text, they miss out on important information or context. Additionally, text alternatives help when images fail to load due to slow connections or technical issues.

From a business perspective, good alt text can improve your site's SEO, as search engines use it to understand image content. It's also a legal requirement in many regions, as [WCAG Level A](https://www.w3.org/WAI/standards-guidelines/wcag/) is referenced in accessibility laws worldwide. By making your content accessible, you reduce legal risk and expand your audience.

---

## **What Needs a Text Alternative?**

- Images (photos, illustrations, infographics)
- Icons and buttons
- Image maps
- Charts and graphs
- Audio and video (provide transcripts or captions)
- CAPTCHAs (offer an accessible alternative)

Virtually any non-text element that conveys information or functionality should have a text alternative. This includes images, icons, infographics, charts, and even audio or video content (which should have transcripts or captions). If a user can't see or hear your content, a text alternative ensures they still get the message.

Some elements, like decorative images, don't need a description—these should use an empty alt attribute (`alt=""`) so screen readers skip them. But for anything that adds meaning or function, a clear, concise text alternative is essential. For more details, see the [W3C's guidance on non-text content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html).

---

## **How to Provide Text Alternatives**

- Use the `alt` attribute for images: `<img src="logo.png" alt="Company logo">`
- For decorative images, use `alt=""` so screen readers skip them.
- Describe the function, not just the appearance (e.g., “Search” for a magnifying glass icon).
- For complex images (charts, infographics), provide a detailed description nearby or link to it.

The most common way to provide a text alternative is with the `alt` attribute on images. For example: `<img src="logo.png" alt="Company logo">`. For decorative images, use `alt=""` so screen readers ignore them. For icons, describe their function (e.g., "Search" for a magnifying glass). For complex visuals like charts or infographics, provide a detailed description nearby or link to a longer explanation.

Accessible text alternatives should be concise but meaningful. Avoid phrases like "image of" or "graphic of"—just describe the content or function. For more on writing effective alt text, check out [WebAIM's alt text guide](https://webaim.org/techniques/alttext/).

---

## **Common Mistakes to Avoid**

- Missing or empty `alt` on meaningful images
- Using file names or generic text like “image” as alt text
- Over-describing decorative images
- Forgetting about icons, buttons, or background images that convey information

It's easy to overlook some non-text elements or to use unhelpful alt text. Common mistakes include leaving out alt attributes on meaningful images, using file names or generic terms like "image" as alt text, or providing overly detailed descriptions for decorative images. Icons and background images that convey information are also frequently forgotten.

To avoid these pitfalls, audit your site regularly and use accessibility checkers to catch missing or incorrect alt text. Remember, the goal is to make your content clear and usable for everyone, not just to pass a checklist.

---

## **Differences Between A, AA, and AAA for Guideline 1.1.1 in WCAG 2.2**

- **Level A:** Requires that all non-text content has a text alternative that serves the equivalent purpose (e.g., alt text for images, accessible names for icons and buttons). This is the core requirement for 1.1.1 and is mandatory for basic accessibility.
- **Level AA:** For Guideline 1.1.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AA.
- **Level AAA:** For Guideline 1.1.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html).

---

## **Quick Checklist**

- Every image has an appropriate `alt` attribute
- Decorative images use `alt=""`
- Icons and buttons have accessible names
- Complex visuals have detailed descriptions
- Audio/video have transcripts or captions

---

## **Summary**

Guideline 1.1.1 is the foundation of accessible web content. By providing text alternatives for all non-text content, you make your site usable for everyone. This small step can have a huge impact on digital inclusion, search engine optimization, and legal compliance. Start with your most important images and work your way through your site—every improvement counts.

[Read Guideline 1.2.1: Audio-only and Video-only (Prerecorded) →](WCAG-Guideline-1-2-1-Audio-Video-Prerecorded-Explained)
