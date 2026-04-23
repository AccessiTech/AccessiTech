<!---
title: 5.2.4 - Only Accessibility-Supported Ways of Using Technologies
series: Making the Web Accessible for All
description: An in-depth explanation of WCAG 2.1 Section 5.2.4, which requires that only accessibility-supported ways of using technologies are relied upon to meet…
keywords: wcag 5.2.4, accessibility-supported, web technologies, assistive technology, conformance, accessibility support
image: WCAG-Series-5.2.4.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 5.2.4 Explained, Only Accessibility-Supported Ways"
status: published
date: 2025-07-08
excerpt: This section explains the requirement that only accessibility-supported ways of using technologies can be relied upon to meet WCAG, and what to do if a feature is not accessibility supported.
previous: /wcag/WCAG-Guideline-5-2-3-Complete-Processes-Explained, Guideline 5.2.3 - Complete Processes
next: /wcag/WCAG-Guideline-5-2-5-Non-Interference-Explained, Guideline 5.2.5 - Non-Interference
--->

# **WCAG 2.1 Section 5.2.4: Only Accessibility-Supported Ways of Using Technologies**

**Estimated read time:** 4–5 minutes

---

## **What Does "Accessibility-Supported Ways" Mean?**

WCAG 5.2.4 sets one rule. You can only rely on web technologies that work in both browsers and assistive technologies. If a feature doesn't work with screen readers or keyboards, it cannot count toward WCAG conformance.

In short: use tech that works for all. If it fails AT tests, add a backup. Test early and test often.

**Key points:**

- Use web technologies in ways that work with AT and mainstream browsers.
- If a feature is not accessibility supported, provide a supported alternative.
- "Accessibility supported" means the feature is tested and works with AT in your users' language.

---

## **Why Is This Important?**

- **Real-world access:** Users with disabilities rely on AT. If your site uses features that don't work with AT, those users are excluded.
- **Legal compliance:** Conformance to WCAG requires accessibility-supported use of technologies.
- **Future-proofing:** Ensures your content works as technologies evolve.

---

## **Examples**

- **Accessible:** Using standard HTML form elements, which are supported by browsers and screen readers.
- **Not accessible:** A custom widget that screen readers cannot read or operate, unless you add an accessible option.
- **Alternative provided:** Use an accessible video player if the main one is not. Supply a supported option.

---

## **How to Meet This Requirement**

- Use web technologies (HTML, CSS, JavaScript, etc.) in ways that are known to be accessibility supported.
- Test your implementation with assistive technologies and browsers used by your audience.
- Provide accessible alternatives for any features that are not accessibility supported.
- Consult resources like [W3C’s Accessibility Support documentation](https://www.w3.org/WAI/WCAG21/Understanding/conformance#accessibility-support).

---

## **Summary**

WCAG conformance requires accessibility-supported technology. Any unsupported feature needs a supported alternative. This protects access for all users, including those with disabilities.

---

## **References & Further Reading**

- [WCAG 2.1 Section 5.2.4: Only Accessibility-Supported Ways of Using Technologies](https://www.w3.org/TR/WCAG21/#cc4)
- [Understanding Accessibility Support](https://www.w3.org/WAI/WCAG21/Understanding/conformance#accessibility-support)

---

_Accessibility means using technologies in ways everyone can access._
