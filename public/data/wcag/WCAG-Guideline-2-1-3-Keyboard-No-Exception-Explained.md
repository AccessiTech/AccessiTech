<!--
title: 2.1.3 Keyboard (No Exception)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 2.1.3 (Keyboard, No Exception)—what it means, why it matters, and how to ensure all functionality is accessible via keyboard, with no exceptions.
keywords: wcag 2.1.3, keyboard accessibility, no exception, web standards, digital inclusion, screen readers, accessible navigation
image: WCAG-Series-2-1-3.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 2.1.3 Explained, Keyboard No Exception"
status: published
date: 2025-07-03
-->

# **WCAG Guideline 2.1.3: Keyboard (No Exception) Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 2: Operable**

The second principle of WCAG, Operable, ensures that user interface components and navigation must be usable by everyone. This means users should be able to interact with all controls and content, regardless of their input method—such as a keyboard, mouse, or assistive technology.

## **Guideline 2.1: Keyboard Accessible**

Guideline 2.1 focuses on making all functionality available from a keyboard. This is crucial for users who cannot use a mouse due to mobility impairments, temporary injuries, or personal preference. Ensuring keyboard accessibility is a foundational step in creating inclusive digital experiences.

## **What Is Guideline 2.1.3 Keyboard (No Exception)?**

[Illustration: Web page with a keyboard focus indicator showing all controls accessible]

> "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes. There are no exceptions."

Guideline 2.1.3 Keyboard (No Exception) is a Level AAA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#keyboard-no-exception).

- Every feature and function must be operable via keyboard, with no exceptions for any content or control.
- This goes beyond Level A, which allows some exceptions for certain types of input or controls.
- Users should never encounter a part of your site or app that cannot be accessed with a keyboard alone.

This ensures the highest level of accessibility for users who rely on keyboard navigation, including those using assistive technologies.

---

## **Why Does It Matter?**

<!-- [Infographic: Keyboard icon, all controls highlighted, and a user navigating a web page] -->

- **Inclusivity:** Some users rely exclusively on keyboard navigation for all interactions.
- **Legal Compliance:** Keyboard (No Exception) is a Level AAA requirement in WCAG 2.2.
- **Usability:** Guarantees that no part of your site is off-limits to keyboard users.

Keyboard accessibility with no exceptions is about providing the most robust and inclusive experience possible. For more, see [WebAIM's keyboard accessibility guide](https://webaim.org/techniques/keyboard/).

---

## **What Needs to Be Keyboard Accessible (No Exception)?**

[Grid: All interactive elements—links, buttons, forms, widgets—with focus indicators]

- All links and navigation menus
- All buttons and controls
- All form fields and submit buttons
- All dialogs, modals, and popups
- All custom widgets and interactive content

Every single interactive element must be fully operable with a keyboard, with no exceptions for any type of content or control.

---

## **How to Ensure Keyboard Accessibility (No Exception)**

[Side-by-side code snippets: All controls accessible vs. inaccessible control]
[Example: Custom widget with full keyboard event support]

- Use semantic HTML for all interactive elements
- Ensure all custom widgets and controls support keyboard events
- Provide visible focus indicators for every interactive element
- Test every feature for keyboard accessibility, including edge cases

For more, see the [MDN keyboard accessibility docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with all controls accessible, right side with some controls inaccessible]

- Leaving out keyboard support for custom widgets or controls
- Relying on mouse-only events for any feature
- Not testing all features for keyboard accessibility
- Assuming some controls are "okay" to be mouse-only

Audit your site regularly and use accessibility checkers to ensure there are no exceptions. For more, see [Deque's keyboard accessibility tips](https://www.deque.com/blog/keyboard-accessibility-tips/).

---

## **Differences Between A, AA, and AAA for Guideline 2.1.3 in WCAG 2.2**

<!-- [Infographic: Three columns labeled A, AA, AAA with example requirements for each] -->

- **Level A:** Requires most functionality to be operable through a keyboard interface, but allows some exceptions for certain types of input or controls (see 2.1.1).
- **Level AA:** For Guideline 2.1.3, there are no additional requirements beyond Level A in WCAG 2.2.
- **Level AAA:** Requires all functionality to be operable through a keyboard interface, with no exceptions. This is the core requirement for 2.1.3 and is mandatory for AAA conformance.

For more, see the [W3C’s official documentation for 2.1.3 Keyboard (No Exception)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for each item (link, button, form, widget, etc.)]

- All functionality is operable via keyboard, with no exceptions
- All custom widgets support keyboard events
- Focus indicators are visible for every control
- No mouse-only interactions anywhere
- All features tested for keyboard accessibility

---

## **Summary**

<!-- [Illustration: User navigating a web page using only a keyboard, with all controls accessible] -->

Guideline 2.1.3 is about achieving the highest standard of keyboard accessibility. By ensuring there are no exceptions, you provide a truly inclusive experience for all users. Test your site thoroughly and make keyboard accessibility a non-negotiable part of your development process.

**Next Up:**

[Read Guideline 2.1.4: Character Key Shortcuts →](WCAG-Guideline-2-1-4-Character-Key-Shortcuts-Explained)

*Accessibility means no barriers—make sure every feature works for every user!*
