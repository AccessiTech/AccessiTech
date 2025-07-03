<!--
title: 2.6.1 - Device Sensors
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 2.6.1 (Device Sensors)—what it means, why it matters, and how to ensure users can operate functionality without relying on device sensors.
keywords: wcag 2.6.1, device sensors, accessibility, web standards, digital inclusion
image: WCAG-Series-2-6-1.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 2.6.1 Explained, Device Sensors"
status: published
date: 2025-07-03
excerpt: This guideline ensures users can operate functionality without relying solely on device sensors.
-->

# **WCAG Guideline 2.6.1: Device Sensors Explained**

**Estimated read time:** 6–7 minutes

---

## **Guideline 2: Operable**

The Operable principle ensures that all users can interact with and control web content, regardless of their abilities. This includes making sure device sensors (like motion, orientation, or proximity) are never the only way to interact with content.

## **Guideline 2.6: Input Modalities (Extended)**

Guideline 2.6 focuses on making it easier for users to operate functionality through various input methods, including device sensors.

## **What Is Guideline 2.6.1 Device Sensors?**

<!-- [Illustration: User operating a feature with a button instead of tilting device] -->

> "Functionality that can be operated by device sensors can also be operated by user interface components, and sensor-activated features can be disabled."

Guideline 2.6.1 Device Sensors is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#device-sensors).

- Any feature that uses device sensors (motion, orientation, proximity) must also be operable by a standard UI control (button, link, etc.).
- Exception: motion is essential to the function (e.g., step counter).
- Applies to mobile apps, games, and web content using device sensors.

---

## **Why Does It Matter?**

<!-- [Infographic: User with limited mobility, button press, and device sensor] -->

- **Inclusivity:** Device sensors can be difficult or impossible for some users.
- **Legal Compliance:** Device Sensors is a Level A requirement in WCAG 2.1 and 2.2.
- **Usability:** Ensures all users can operate features regardless of device sensors.

For more, see [W3C’s guidance on device sensors](https://www.w3.org/WAI/WCAG22/Understanding/device-sensors.html).

---

## **What Needs Device Sensor Alternatives?**

<!-- [Grid: Tilt to scroll, shake to undo, all with button alternatives] -->

- Tilt to scroll
- Shake to undo
- Any feature using device sensors

All must have alternative controls for sensor-based actions.

---

## **How to Make Device Sensors Accessible**

<!-- [Side-by-side code snippets: Button alternative, sensor activation]
[Example: Settings panel for sensor features] -->

- Provide alternatives to device sensors
- Allow users to disable sensor-activated features
- Document sensor feature options
- Test with users with limited mobility

For more, see the [W3C's Device Sensors Techniques](https://www.w3.org/WAI/WCAG22/Techniques/general/G218).

---

## **Common Mistakes to Avoid**

<!-- [Do/Don't graphic: Left side with button alternative, right side with only sensor] -->

- Only supporting device sensors
- No alternative for device sensors
- Not documenting sensor feature options
- Not testing with users with limited mobility

---

## **Differences Between A, AA, and AAA for Guideline 2.6.1 in WCAG 2.2**

<!-- [Infographic: Three columns labeled A, AA, AAA with example requirements for each] -->

- **Level A:** Requires alternatives to device sensors and ability to disable sensor features. This is the core requirement for 2.6.1 and is mandatory for basic accessibility.
- **Level AA:** For Guideline 2.6.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AA.
- **Level AAA:** For Guideline 2.6.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 2.6.1 Device Sensors](https://www.w3.org/WAI/WCAG22/Understanding/device-sensors.html).

---

## **Quick Checklist**

<!-- [Checklist graphic: Icons for each item (sensor, button, disable, etc.)] -->

- Alternatives to device sensors are provided
- Sensor-activated features can be disabled
- Sensor feature options are documented
- Tested with users with limited mobility

---

## **Summary**

<!-- [Illustration: User operating a feature with a button in a web app] -->

Guideline 2.6.1 is essential for ensuring all users can operate your site. By providing alternatives to device sensors, you support users with disabilities, improve usability, and meet legal requirements. Test your site regularly and make sensor accessibility a core part of your development process.

*Accessibility means options—help users operate features their way!*
