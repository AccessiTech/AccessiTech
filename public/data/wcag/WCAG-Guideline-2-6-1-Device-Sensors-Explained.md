<!--
title: WCAG Guideline 2.6.1: Device Sensors Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 2.6.1 (Device Sensors)—what it means, why it matters, and how to ensure device sensors are never the only way to interact with content.
keywords: wcag 2.6.1, device sensors, accessibility, web standards, motion sensors, user input
image: wcag-2-6-1-device-sensors.png
imageAlt: Illustration of a phone with motion and orientation sensors and alternative controls
status: draft
-->

# **WCAG Guideline 2.6.1: Device Sensors Explained**

**Estimated read time:** 6–7 minutes

---

## **Guideline 2: Operable**

The Operable principle ensures that all users can interact with and control web content, regardless of their abilities. This includes making sure device sensors (like motion, orientation, or proximity) are never the only way to interact with content.

## **Guideline 2.6: Input Modalities (Extended)**

Guideline 2.6 focuses on making it easier for users to operate functionality through various input methods, including device sensors.

## **What Is Guideline 2.6.1 Device Sensors?**

[Illustration: Phone with motion/orientation sensors and alternative button controls]

> "Functionality that can be operated by device sensors or user motion can also be operated by user interface components, except where the motion is essential."

Guideline 2.6.1 Device Sensors is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#device-sensors).

- Any feature that uses device sensors (motion, orientation, proximity) must also be operable by a standard UI control (button, link, etc.).
- Exception: motion is essential to the function (e.g., step counter).
- Applies to mobile apps, games, and web content using device sensors.

---

## **Why Does It Matter?**

[Infographic: User with mobility aids, phone, and alternative control icons]

- **Accessibility:** Not all users can perform device motions or may trigger them accidentally.
- **Inclusivity:** Supports users with limited mobility or those using assistive tech.
- **Legal Compliance:** Device Sensors is a Level A requirement in WCAG 2.2.
- **Usability:** Prevents frustration and accidental actions for all users.

For more, see [W3C’s guidance on device sensors](https://www.w3.org/WAI/WCAG22/Understanding/device-sensors.html).

---

## **What Needs to Support Device Sensors?**

[Grid: Shake-to-undo, tilt-to-scroll, and rotate-to-activate, all with alternative controls]

- Shake-to-undo or shake-to-refresh
- Tilt-to-scroll or rotate-to-activate
- Any feature using device sensors

All must have alternative controls for sensor-based actions.

---

## **How to Meet Guideline 2.6.1**

[Side-by-side: Feature with only sensor input vs. feature with button alternative]

- Provide standard UI controls for all sensor-activated features
- Only require sensor input when it is essential to the function
- Test with users who have limited mobility

For more, see the [W3C's Device Sensors Techniques](https://www.w3.org/WAI/WCAG22/Techniques/general/G218).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with button alternative, right side with only sensor input]

- Only supporting device sensors with no alternative
- Not testing with users who have mobility impairments

---

## **Differences Between A, AA, and AAA for Guideline 2.6.1 in WCAG 2.2**

[Infographic: Three columns labeled A, AA, AAA with example requirements for each]

- **Level A:** Requires alternative controls for all sensor-activated features (unless essential).
- **Level AA:** No additional requirements for 2.6.1.
- **Level AAA:** No additional requirements for 2.6.1.

For more, see the [W3C’s official documentation for 2.6.1 Device Sensors](https://www.w3.org/WAI/WCAG22/Understanding/device-sensors.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for device sensors, button, and settings]

- All sensor-activated features have alternative controls
- Only essential features require sensor input
- Tested with users who have limited mobility

---

## **Summary**

[Illustration: User activating a feature with a button instead of shaking the phone]

Guideline 2.6.1 ensures all users can interact with content, regardless of their ability to use device sensors. Always provide alternatives and test for accessibility.

**Next Up:**

We’ll continue with Guideline 3.1.1 and beyond, covering more ways to make your site accessible for everyone.

*Accessibility means options—never require sensors as the only way to interact!*
