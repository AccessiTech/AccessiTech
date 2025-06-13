<!--
title: WCAG Guideline 1.1.1: Non-text Content Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.1.1 (Non-text Content)—what it means, why it matters, and how to provide accessible alternatives for images, icons, and more.
keywords: wcag 1.1.1, non-text content, alt text, accessibility, web standards, images, icons, screen readers, digital inclusion
image: wcag-1-1-1-non-text-content.png
imageAlt: Illustration of an image with alt text and a screen reader icon
-->

# **WCAG Guideline 1.1.1: Non-text Content Explained**

**Estimated read time:** 5–6 minutes

---

## **What Is Guideline 1.1.1?**

[Illustration: Web page with images and icons, with a speech bubble showing a screen reader reading alt text]

> "All non-text content that is presented to the user has a text alternative that serves the equivalent purpose."

Guideline 1.1.1 (Non-text Content) is the very first requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content).

- Any information conveyed visually—such as images, icons, charts, or other media—must also be available in a text format.
- Text alternatives ensure that everyone, including people using screen readers or those with slow internet connections, can access your content.
- This principle is foundational to digital inclusion and is often the first step in making a website accessible.

This means that if you have a button with a magnifying glass icon, a screen reader user should hear "Search" instead of just "button" or nothing at all. By providing descriptive text alternatives, you make your site more usable for everyone, regardless of how they access the web.

---

## **Why Does It Matter?**

[Venn diagram or infographic: Overlap between accessibility, SEO, and legal compliance]

- **Inclusivity:** People who are blind or have low vision rely on text alternatives to access visual information.
- **SEO & Usability:** Good alt text helps search engines and users when images fail to load.
- **Legal Compliance:** This is a Level A requirement—essential for meeting accessibility laws.

Providing text alternatives for non-text content is about more than just compliance—it's about creating a web that works for everyone. People who are blind or have low vision rely on screen readers to interpret images and icons. Without alt text, they miss out on important information or context. Additionally, text alternatives help when images fail to load due to slow connections or technical issues.

From a business perspective, good alt text can improve your site's SEO, as search engines use it to understand image content. It's also a legal requirement in many regions, as [WCAG Level A](https://www.w3.org/WAI/standards-guidelines/wcag/) is referenced in accessibility laws worldwide. By making your content accessible, you reduce legal risk and expand your audience.

---

## **What Needs a Text Alternative?**

[Grid: Different media types (image, icon, chart, video, CAPTCHA) with checkmarks and alt text labels]

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

[Side-by-side code snippets: Good alt text vs. missing/poor alt text]
[Example: Chart with a callout showing a detailed text description]

- Use the `alt` attribute for images: `<img src="logo.png" alt="Company logo">`
- For decorative images, use `alt=""` so screen readers skip them.
- Describe the function, not just the appearance (e.g., “Search” for a magnifying glass icon).
- For complex images (charts, infographics), provide a detailed description nearby or link to it.

The most common way to provide a text alternative is with the `alt` attribute on images. For example: `<img src="logo.png" alt="Company logo">`. For decorative images, use `alt=""` so screen readers ignore them. For icons, describe their function (e.g., "Search" for a magnifying glass). For complex visuals like charts or infographics, provide a detailed description nearby or link to a longer explanation.

Accessible text alternatives should be concise but meaningful. Avoid phrases like "image of" or "graphic of"—just describe the content or function. For more on writing effective alt text, check out [WebAIM's alt text guide](https://webaim.org/techniques/alttext/).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with correct alt text, right side with common mistakes (e.g., alt="image123.jpg")]

- Missing or empty `alt` on meaningful images
- Using file names or generic text like “image” as alt text
- Over-describing decorative images
- Forgetting about icons, buttons, or background images that convey information

It's easy to overlook some non-text elements or to use unhelpful alt text. Common mistakes include leaving out alt attributes on meaningful images, using file names or generic terms like "image" as alt text, or providing overly detailed descriptions for decorative images. Icons and background images that convey information are also frequently forgotten.

To avoid these pitfalls, audit your site regularly and use accessibility checkers to catch missing or incorrect alt text. Remember, the goal is to make your content clear and usable for everyone, not just to pass a checklist. For more tips, see [Deque's guide to alt text mistakes](https://www.deque.com/blog/great-alt-text-introduction/).

---

## **Quick Checklist**

[Checklist graphic: Icons for each item (image, icon, chart, video, etc.)]

- [ ] Every image has an appropriate `alt` attribute
- [ ] Decorative images use `alt=""`
- [ ] Icons and buttons have accessible names
- [ ] Complex visuals have detailed descriptions
- [ ] Audio/video have transcripts or captions

A quick checklist can help you ensure your site meets the requirements of Guideline 1.1.1. Use it as part of your content creation and review process. For a more comprehensive list, see the [A11Y Project's checklist](https://www.a11yproject.com/checklist/).

---

## **Summary**

[Illustration: Diverse group of users (including a person using a screen reader) happily browsing a website]

Guideline 1.1.1 is the foundation of accessible web content. By providing text alternatives for all non-text content, you make your site usable for everyone. This small step can have a huge impact on digital inclusion, search engine optimization, and legal compliance. Start with your most important images and work your way through your site—every improvement counts.

**Next Up:**

We’ll break down Guideline 1.2.1: Time-based Media—how to make audio and video content accessible.

*Accessibility starts with a single description—make every image count!*
