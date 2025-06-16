<!--
title: WCAG Guideline 2.5.4: Motion Actuation Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 2.5.4 (Motion Actuation)—what it means, why it matters, and how to ensure device motion is never the only way to interact.
keywords: wcag 2.5.4, motion actuation, accessibility, web standards, device motion, user input
image: wcag-2-5-4-motion-actuation.png
imageAlt: Illustration of a phone being shaken with an alternative button control
status: draft
-->

# **WCAG Guideline 2.5.4: Motion Actuation Explained**

**Estimated read time:** 6–7 minutes

---

## **Guideline 2: Operable**

The Operable principle ensures that all users can interact with and control web content, regardless of their abilities. This includes making sure device motion (like shaking or tilting) is never the only way to interact with content.

## **Guideline 2.5: Input Modalities**

Guideline 2.5 focuses on making it easier for users to operate functionality through various input methods, including device motion, touch, and keyboard.

## **What Is Guideline 2.5.4 Motion Actuation?**

[Illustration: Phone being shaken with an alternative button control]

> "Functionality that can be operated by device motion or user motion can also be operated by user interface components, and motion-activated functionality can be disabled to prevent accidental actuation, except where the motion is essential."

Guideline 2.5.4 Motion Actuation is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#motion-actuation).

- Any feature that uses device motion (shake, tilt, rotate) must also be operable by a standard UI control (button, link, etc.).
- Users must be able to disable motion actuation to prevent accidental triggers.
- Exception: motion is essential to the function (e.g., pedometer).

---

## **Why Does It Matter?**

[Infographic: User with mobility aids, phone, and alternative control icons]

- **Accessibility:** Not all users can perform device motions or may trigger them accidentally.
- **Inclusivity:** Supports users with limited mobility or those using assistive tech.
- **Legal Compliance:** Motion Actuation is a Level A requirement in WCAG 2.2.
- **Usability:** Prevents frustration and accidental actions for all users.

For more, see [W3C’s guidance on motion actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html).

---

## **What Needs to Support Motion Actuation?**

[Grid: Shake-to-undo, tilt-to-scroll, and rotate-to-activate, all with alternative controls]

- Shake-to-undo or shake-to-refresh
- Tilt-to-scroll or rotate-to-activate
- Any feature using device motion

All must have alternative controls and allow motion actuation to be disabled.

---

## **How to Meet Guideline 2.5.4**

[Side-by-side: Feature with only motion vs. feature with button alternative]

- Provide standard UI controls for all motion-activated features
- Allow users to disable motion actuation in settings
- Only require motion when it is essential to the function
- Test with users who have limited mobility

For more, see the [W3C's Motion Actuation Techniques](https://www.w3.org/WAI/WCAG22/Techniques/general/G219).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with button alternative, right side with only motion]

- Only supporting device motion with no alternative
- No way to disable motion actuation
- Not testing with users who have mobility impairments

---

## **Differences Between A, AA, and AAA for Guideline 2.5.4 in WCAG 2.2**

[Infographic: Three columns labeled A, AA, AAA with example requirements for each]

- **Level A:** Requires alternative controls and ability to disable motion actuation.
- **Level AA:** No additional requirements for 2.5.4.
- **Level AAA:** No additional requirements for 2.5.4.

For more, see the [W3C’s official documentation for 2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for motion, button, and settings]

- All motion-activated features have alternative controls
- Users can disable motion actuation
- Only essential features require motion
- Tested with users who have limited mobility

---

## **Summary**

[Illustration: User activating a feature with a button instead of shaking the phone]

Guideline 2.5.4 ensures all users can interact with content, regardless of their ability to perform device motions. Always provide alternatives and allow motion actuation to be disabled.

**Next Up:**

We’ll break down Guideline 2.5.5: Target Size—how to make sure interactive elements are easy to tap or click.

*Accessibility means options—never require motion as the only way to interact!*
