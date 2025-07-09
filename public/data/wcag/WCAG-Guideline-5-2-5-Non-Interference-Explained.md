<!---
title: 5.2.5 - Non-Interference
description: An in-depth explanation of WCAG 2.1 Section 5.2.5, which requires that non-accessibility-supported or non-conforming technologies must not block access to the rest of the page, and that certain success criteria always apply.
series: Making the Web Accessible for All
keywords: wcag 5.2.5, non-interference, accessibility, web standards, conformance, user agents
image: WCAG-Series-5.2.5.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 5.2.5 Explained, Non-Interference"
status: published
date: 2025-07-08
excerpt: This section explains the requirement that non-accessibility-supported or non-conforming technologies must not block access to the rest of the page, and that certain success criteria always apply.
--->

# **WCAG 2.1 Section 5.2.5: Non-Interference**

**Estimated read time:** 4–5 minutes

---

## **What Is Non-Interference?**

Section 5.2.5 of WCAG 2.1 requires that if you use web technologies in a way that is not accessibility supported, or in a way that does not conform to WCAG, those technologies must not block users from accessing the rest of the page. The rest of the page must remain accessible, even if some features are not.

**Key points:**
- Non-accessibility-supported or non-conforming technologies must not prevent users from accessing content or functionality on the page.
- The page must still meet all conformance requirements when unsupported technologies are turned on, turned off, or not supported by the user agent (browser or assistive technology).
- Certain critical success criteria always apply to all content, even if that content is not relied upon for conformance.

---

## **Which Success Criteria Always Apply?**

The following WCAG 2.1 success criteria must be met for all content on the page, including content that is not relied upon for conformance:
- **1.4.2 Audio Control** (users must be able to pause, stop, or control audio)
- **2.1.2 No Keyboard Trap** (users must be able to move keyboard focus away from any component)
- **2.2.2 Pause, Stop, Hide** (users must be able to pause, stop, or hide moving, blinking, scrolling, or auto-updating content)
- **2.3.1 Three Flashes or Below Threshold** (content must not flash more than three times in any one second period)

---

## **Why Is This Important?**

- **User access:** Users must not be locked out of content because of unsupported or non-conforming features.
- **Robustness:** The site must work for users regardless of which technologies are enabled or supported.
- **Legal compliance:** Conformance requires that non-interference is maintained.

---

## **Examples**

- **Accessible:** A page uses a video player that is not accessibility supported, but the rest of the page (text, navigation, forms) remains accessible and usable.
- **Not accessible:** A custom widget that, if unsupported, blocks access to the main content or navigation.
- **Good practice:** If a feature is not supported, users can still access all essential information and functions.

---

## **How to Meet This Requirement**

- Ensure that unsupported or non-conforming technologies do not block access to content or functionality.
- Test your site with unsupported technologies turned off or not present.
- Always meet the critical success criteria listed above for all content.
- Provide accessible alternatives for any features that may not be supported.

---

## **Summary**

Non-interference means that your site remains accessible even if some features are not supported or do not conform. Users must always be able to access the main content and functions, and certain critical accessibility requirements must always be met.

---

## **References & Further Reading**
- [WCAG 2.1 Section 5.2.5: Non-Interference](https://www.w3.org/TR/WCAG21/#cc5)
- [Understanding Conformance Requirements](https://www.w3.org/WAI/WCAG21/Understanding/conformance#conformance-requirements)

---

**Up Next:**

[Read Guideline 5.3.1: Required Components of a Conformance Claim →](WCAG-Guideline-5-3-1-Conformance-Claims-Explained)

*Accessibility means no one gets left behind—even if some features don’t work for everyone.*
