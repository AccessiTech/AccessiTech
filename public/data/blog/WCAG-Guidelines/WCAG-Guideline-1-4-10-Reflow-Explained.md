<!--
title: WCAG Guideline 1.4.10: Reflow Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.4.10 (Reflow)—what it means, why it matters, and how to ensure your content works on any screen size.
keywords: wcag 1.4.10, reflow, accessibility, web standards, responsive design, mobile accessibility
image: wcag-1-4-10-reflow.png
imageAlt: Illustration of a web page reflowing from desktop to mobile
status: draft
-->

# **WCAG Guideline 1.4.10: Reflow Explained**

**Estimated read time:** 7–8 minutes

---

## **Guideline 1: Perceivable**

The Perceivable principle ensures that all users can access and understand content, regardless of their sensory abilities. This includes making sure content is usable on any screen size or orientation.

## **Guideline 1.4: Distinguishable**

Guideline 1.4 focuses on making content easier to see and hear. Reflow ensures content adapts to different devices and zoom levels.

## **What Is Guideline 1.4.10 Reflow?**

[Illustration: Web page reflowing from desktop to mobile layout]

> "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: vertical scrolling content at a width equivalent to 320 CSS pixels; horizontal scrolling content at a height equivalent to 256 CSS pixels."

Guideline 1.4.10 Reflow is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#reflow).

- Content must adapt to small screens and zoom without horizontal scrolling.
- No loss of information or functionality at 320px width (mobile portrait) or 400% zoom.
- Applies to all content, including navigation, forms, and images.

---

## **Why Does It Matter?**

[Infographic: Mobile phone, tablet, and desktop icons, with arrows showing reflow]

- **Mobile Accessibility:** Many users access the web on small screens.
- **Zoom Support:** Users with low vision often zoom to 400%.
- **Inclusivity:** Ensures everyone can use your site, regardless of device.
- **Legal Compliance:** Reflow is a Level AA requirement in WCAG 2.2.

---

## **What Needs to Support Reflow?**

[Grid: Navigation, forms, images, and tables, all shown reflowing to fit small screens]

- Navigation menus
- Forms and input fields
- Images and media
- Tables and data grids

All must adapt to small screens and zoom without requiring two-dimensional scrolling.

---

## **How to Meet Guideline 1.4.10**

[Side-by-side: Web page at desktop width vs. at 320px width, both fully functional]

- **Use responsive design** with flexible layouts (CSS Grid, Flexbox)
- **Avoid fixed-width containers**
- **Test at 320px width and 400% zoom**
- **Ensure all content and functionality remain accessible**
- **Avoid horizontal scrolling** except for parts that require it (e.g., data tables)

For more, see the [W3C’s Reflow Techniques](https://www.w3.org/WAI/WCAG22/Techniques/css/C28).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with content reflowing, right side with horizontal scrollbars]

- Fixed-width layouts that don’t adapt
- Content or navigation that disappears or overlaps at small sizes
- Requiring horizontal scrolling for main content
- Not testing at 320px width or 400% zoom

---

## **Differences Between A, AA, and AAA for Guideline 1.4.10 in WCAG 2.2**

[Infographic: Three columns labeled A, AA, AAA with example requirements for each]

- **Level A:** No specific requirement for reflow.
- **Level AA:** Requires reflow at 320px width/400% zoom without loss of content or functionality.
- **Level AAA:** No additional requirements for reflow.

For more, see the [W3C’s official documentation for 1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for mobile, zoom, and responsive design]

- Content adapts to 320px width and 400% zoom
- No horizontal scrolling for main content
- All functionality remains at small sizes
- Tested on multiple devices and zoom levels

---

## **Summary**

[Illustration: User viewing a web page on desktop and mobile, both fully functional]

Guideline 1.4.10 ensures your content works for everyone, on any device or zoom level. Use responsive design and always test at small sizes.

**Next Up:**

[Read Guideline 1.4.11: Non-text Contrast →](WCAG-Guideline-1-4-11-Non-text-Contrast-Explained.md)

*Accessibility means your site works everywhere—make it flexible!*
