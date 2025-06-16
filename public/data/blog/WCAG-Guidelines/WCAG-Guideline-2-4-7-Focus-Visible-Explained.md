<!--
title: WCAG Guideline 2.4.7: Focus Visible Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 2.4.7 (Focus Visible)—what it means, why it matters, and how to ensure users can always see where they are on the page.
keywords: wcag 2.4.7, focus visible, accessibility, web standards, keyboard navigation, focus indicator
image: wcag-2-4-7-focus-visible.png
imageAlt: Illustration of a keyboard user with a visible focus ring on a button
status: draft
-->

# **WCAG Guideline 2.4.7: Focus Visible Explained**

**Estimated read time:** 6–7 minutes

---

## **Guideline 2: Operable**

The Operable principle ensures that all users can interact with and control web content, regardless of their abilities. This includes making sure users can always see which element is focused when navigating with a keyboard.

## **Guideline 2.4: Navigable**

Guideline 2.4 focuses on making it easier for users to navigate, find content, and determine where they are. Focus Visible is about ensuring a visible indicator is present when elements receive keyboard focus.

## **What Is Guideline 2.4.7 Focus Visible?**

[Illustration: Keyboard user with a visible focus ring on a button]

> "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible."

Guideline 2.4.7 Focus Visible is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#focus-visible).

- All interactive elements must show a visible focus indicator when navigated to by keyboard.
- Applies to links, buttons, form fields, menus, and any focusable content.
- The focus indicator must be clearly visible and not removed by custom styles.

---

## **Why Does It Matter?**

[Infographic: Keyboard navigation, focus ring, and user with assistive tech]

- **Accessibility:** Keyboard users rely on visible focus to know where they are.
- **Inclusivity:** Supports users who cannot use a mouse.
- **Legal Compliance:** Focus Visible is a Level AA requirement in WCAG 2.2.
- **Usability:** Prevents confusion and improves navigation for all users.

For more, see [W3C’s guidance on focus visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html).

---

## **What Needs to Support Focus Visibility?**

[Grid: Buttons, links, form fields, and menus, all with visible focus indicators]

- Buttons and links
- Form fields and input controls
- Navigation menus
- All interactive elements

All must have a visible focus indicator when navigated to by keyboard.

---

## **How to Meet Guideline 2.4.7**

[Side-by-side: Button with visible focus ring vs. button with no focus indicator]

- Use default browser focus styles or enhance them for visibility
- Never remove focus outlines with CSS (e.g., avoid `outline: none`)
- Test with keyboard navigation (Tab, Shift+Tab)
- Ensure custom components also show visible focus

For more, see the [W3C's Focus Visible Techniques](https://www.w3.org/WAI/WCAG22/Techniques/css/C15).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with visible focus, right side with no focus indicator]

- Removing focus outlines with CSS
- Custom components with no visible focus
- Not testing with keyboard navigation

---

## **Differences Between A, AA, and AAA for Guideline 2.4.7 in WCAG 2.2**

[Infographic: Three columns labeled A, AA, AAA with example requirements for each]

- **Level A:** No requirement for visible focus indicator.
- **Level AA:** Requires visible focus indicator for all keyboard operable elements.
- **Level AAA:** No additional requirements for 2.4.7.

For more, see the [W3C’s official documentation for 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for focus ring, keyboard, and interactive elements]

- All interactive elements have a visible focus indicator
- No focus outlines are removed with CSS
- Tested with keyboard navigation

---

## **Summary**

[Illustration: User navigating a web page with visible focus indicators]

Guideline 2.4.7 ensures users can always see where they are on the page when using the keyboard. Always provide visible focus indicators and test for accessibility.

**Next Up:**

We’ll continue with Guideline 2.5.1 and beyond, covering more ways to make your site accessible for everyone.

*Accessibility means visibility—help users see where they are at all times!*
