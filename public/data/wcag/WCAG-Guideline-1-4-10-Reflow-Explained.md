<!--
title: 1.4.10 - Reflow
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.4.10 (Reflow)—what it means, why it matters, and how to ensure your content works on any screen size.
keywords: wcag 1.4.10, reflow, accessibility, web standards, responsive design, mobile accessibility
image: WCAG-Series-1.4.10.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 1.4.10 Explained, Reflow"
status: published
date: 2025-07-01
excerpt: This guideline ensures content works on any screen size or orientation.
next: /wcag/WCAG-Guideline-1-4-11-Non-text-Contrast-Explained, Guideline 1.4.11 - Non-text Contrast
previous: /wcag/WCAG-Guideline-1-4-9-Images-of-Text-No-Exception-Explained, Guideline 1.4.9 - Images of Text (No Exception)
-->

# **WCAG Guideline 1.4.10: Reflow Explained**

**Estimated read time:** 7–8 minutes

---

## **Guideline 1: Perceivable**

The Perceivable principle ensures that all users can access and understand content, regardless of their sensory abilities. This includes making sure content is usable on any screen size or orientation.

## **Guideline 1.4: Distinguishable**

Guideline 1.4 focuses on making content easier to see and hear. Reflow ensures content adapts to different devices and zoom levels.

## **What Is Guideline 1.4.10 Reflow?**

> "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: vertical scrolling content at a width equivalent to 320 CSS pixels; horizontal scrolling content at a height equivalent to 256 CSS pixels."

Guideline 1.4.10 Reflow is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#reflow).

- Content must adapt to small screens and zoom without horizontal scrolling.
- No loss of information or functionality at 320px width (mobile portrait) or 400% zoom.
- Applies to all content, including navigation, forms, and images.

For more, see [Responsive Web Design: What It Is And How To Use It (Smashing Magazine)](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/).

---

## **Why Does It Matter?**

- **Mobile Accessibility:** Many users access the web on small screens.
- **Zoom Support:** Users with low vision often zoom to 400%.
- **Inclusivity:** Ensures everyone can use your site, regardless of device.
- **Legal Compliance:** Reflow is a Level AA requirement in WCAG 2.2.

---

## **What Needs to Support Reflow?**

- Navigation menus
- Forms and input fields
- Images and media
- Tables and data grids

All must adapt to small screens and zoom without requiring two-dimensional scrolling.

---

## **How to Meet Guideline 1.4.10**

- **Use responsive design** with flexible layouts (CSS Grid, Flexbox)
- **Avoid fixed-width containers**
- **Test at 320px width and 400% zoom**
- **Ensure all content and functionality remain accessible**
- **Avoid horizontal scrolling** except for parts that require it (e.g., data tables)

For more, see the [W3C’s Reflow Techniques](https://www.w3.org/WAI/WCAG22/Techniques/css/C28).

---

## **Common Mistakes to Avoid**

- Fixed-width layouts that don’t adapt
- Content or navigation that disappears or overlaps at small sizes
- Requiring horizontal scrolling for main content
- Not testing at 320px width or 400% zoom

---

## **Differences Between A, AA, and AAA for Guideline 1.4.10 in WCAG 2.2**

- **Level A:** No specific requirement for reflow.
- **Level AA:** Requires reflow at 320px width/400% zoom without loss of content or functionality.
- **Level AAA:** No additional requirements for reflow.

For more, see the [W3C’s official documentation for 1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).

---

## **Quick Checklist**

- Content adapts to 320px width and 400% zoom
- No horizontal scrolling for main content
- All functionality remains at small sizes
- Tested on multiple devices and zoom levels

---

## **Summary**

Guideline 1.4.10 ensures your content works for everyone, on any device or zoom level. Use responsive design and always test at small sizes.

_Accessibility means your site works everywhere—make it flexible!_
