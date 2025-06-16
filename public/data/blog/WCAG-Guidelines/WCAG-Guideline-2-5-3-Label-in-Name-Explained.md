<!--
title: WCAG Guideline 2.5.3: Label in Name Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 2.5.3 (Label in Name)—what it means, why it matters, and how to make sure labels match what users see and say.
keywords: wcag 2.5.3, label in name, accessibility, web standards, speech input, visible label
image: wcag-2-5-3-label-in-name.png
imageAlt: Illustration of a button with a visible label and a speech bubble
status: draft
-->

# **WCAG Guideline 2.5.3: Label in Name Explained**

**Estimated read time:** 6–7 minutes

---

## **Guideline 2: Operable**

The Operable principle ensures that all users can interact with and control web content, regardless of their abilities. This includes making sure that labels for controls match what users see and say, especially for speech input.

## **Guideline 2.5: Input Modalities**

Guideline 2.5 focuses on making it easier for users to operate functionality through various input methods, including speech, touch, and keyboard.

## **What Is Guideline 2.5.3 Label in Name?**

[Illustration: Button with a visible label and a speech bubble]

> "For user interface components with labels that include text or images of text, the accessible name contains the text that is presented visually."

Guideline 2.5.3 Label in Name is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#label-in-name).

- The accessible name (used by screen readers and speech input) must match the visible label.
- Applies to buttons, links, form fields, and any labeled UI component.
- Supports users who use speech input or screen readers.

---

## **Why Does It Matter?**

[Infographic: User with speech input, button label, and screen reader icon]

- **Accessibility:** Users who speak visible labels expect them to match the accessible name.
- **Inclusivity:** Supports users with speech input, cognitive, or memory challenges.
- **Legal Compliance:** Label in Name is a Level A requirement in WCAG 2.2.
- **Usability:** Prevents confusion and improves efficiency for all users.

For more, see [W3C’s guidance on label in name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).

---

## **What Needs to Support Label in Name?**

[Grid: Buttons, links, form fields, all with matching visible and accessible names]

- Buttons and links
- Form fields and input controls
- Custom widgets and controls

All must have accessible names that match the visible label.

---

## **How to Meet Guideline 2.5.3**

[Side-by-side: Button with matching label and accessible name vs. button with mismatched names]

- Ensure the accessible name includes the visible label text
- Use `aria-label` or `aria-labelledby` carefully to match visible text
- Test with screen readers and speech input

For more, see the [W3C's Label in Name Techniques](https://www.w3.org/WAI/WCAG22/Techniques/general/G208).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with matching label and name, right side with mismatched names]

- Accessible name does not match visible label
- Using icons or images without accessible text
- Not testing with speech input or screen readers

---

## **Differences Between A, AA, and AAA for Guideline 2.5.3 in WCAG 2.2**

[Infographic: Three columns labeled A, AA, AAA with example requirements for each]

- **Level A:** Requires accessible name to include visible label text.
- **Level AA:** No additional requirements for 2.5.3.
- **Level AAA:** No additional requirements for 2.5.3.

For more, see the [W3C’s official documentation for 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for label, speech input, and screen reader]

- Accessible name includes visible label text
- No mismatched labels and names
- Tested with speech input and screen readers

---

## **Summary**

[Illustration: User activating a button by speaking its visible label]

Guideline 2.5.3 ensures users can interact with controls using visible labels, supporting speech input and screen readers. Always match accessible names to visible labels and test for accessibility.

**Next Up:**

We’ll break down Guideline 2.5.4: Motion Actuation—how to make sure device motion is never the only way to interact.

*Accessibility means clarity—make labels match what users see and say!*
