<!---
title: 5.2.4 - Only Accessibility-Supported Ways of Using Technologies
series: Making the Web Accessible for All
description: An in-depth explanation of WCAG 2.1 Section 5.2.4, which requires that only accessibility-supported ways of using technologies are relied upon to meet accessibility requirements.
keywords: wcag 5.2.4, accessibility-supported, web technologies, assistive technology, conformance, accessibility support
image: WCAG-Series-5.2.4.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 5.2.4 Explained, Only Accessibility-Supported Ways"
status: published
date: 2025-07-08
excerpt: This section explains the requirement that only accessibility-supported ways of using technologies can be relied upon to meet WCAG, and what to do if a feature is not accessibility supported.
--->

# **WCAG 2.1 Section 5.2.4: Only Accessibility-Supported Ways of Using Technologies**

**Estimated read time:** 4–5 minutes

---

## **What Does "Accessibility-Supported Ways" Mean?**

Section 5.2.4 of WCAG 2.1 requires that you can only rely on ways of using web technologies that are supported by both user agents (like browsers) and assistive technologies (like screen readers) to meet accessibility requirements. If a feature or method is not accessibility supported, you cannot rely on it to satisfy WCAG success criteria.

**Key points:**
- You must use technologies in ways that work with assistive technologies and mainstream browsers.
- If you use a feature that is not accessibility supported, you must provide an alternative that is accessibility supported.
- "Accessibility supported" means the feature has been tested and works with assistive technologies in the human language(s) of your content.

---

## **Why Is This Important?**

- **Real-world access:** Users with disabilities rely on assistive technologies. If your site uses features that don't work with these tools, those users are excluded.
- **Legal compliance:** Conformance to WCAG requires accessibility-supported use of technologies.
- **Future-proofing:** Ensures your content works as technologies evolve.

---

## **Examples**

- **Accessible:** Using standard HTML form elements, which are supported by browsers and screen readers.
- **Not accessible:** Using a custom widget that cannot be read or operated by a screen reader, unless you provide an accessible alternative.
- **Alternative provided:** If you use a video player that is not accessible, you must also provide a player or method that is accessibility supported.

---

## **How to Meet This Requirement**

- Use web technologies (HTML, CSS, JavaScript, etc.) in ways that are known to be accessibility supported.
- Test your implementation with assistive technologies and browsers used by your audience.
- Provide accessible alternatives for any features that are not accessibility supported.
- Consult resources like [W3C’s Accessibility Support documentation](https://www.w3.org/WAI/WCAG21/Understanding/conformance#accessibility-support).

---

## **Summary**

You can only claim WCAG conformance if you use technologies in ways that are accessibility supported. If you use a feature that is not accessibility supported, you must provide an accessible alternative. This ensures all users, including those with disabilities, can access your content.

---

## **References & Further Reading**
- [WCAG 2.1 Section 5.2.4: Only Accessibility-Supported Ways of Using Technologies](https://www.w3.org/TR/WCAG21/#cc4)
- [Understanding Accessibility Support](https://www.w3.org/WAI/WCAG21/Understanding/conformance#accessibility-support)

---

## **Next Up:**

[Read Guideline 5.2.5: Non-Interference →](WCAG-Guideline-5-2-5-Non-Interference-Explained)

*Accessibility means using technologies in ways everyone can access.*
