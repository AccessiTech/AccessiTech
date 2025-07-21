<!--
title: 5.2.3 - Complete Processes
series: Making the Web Accessible for All
description: An in-depth explanation of WCAG 2.1 Section 5.2.3, Complete Processes—what it means, why it matters, and how to apply it.
keywords: wcag 5.2.3, complete processes, accessibility, web standards, conformance, process accessibility
image: WCAG-Series-5.2.3.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 5.2.3 Explained, Complete Processes"
status: published
date: 2025-07-08
excerpt: This section explains the requirement that all pages in a process must conform to WCAG at the specified level, not just individual pages.
previous: /wcag/WCAG-Guideline-5-2-2-Full-Pages-Explained, Guideline 5.2.2 - Full Pages
next: /wcag/WCAG-Guideline-5-2-4-Only-Accessibility-Supported-Ways-Explained, Guideline 5.2.4 - Only Accessibility-Supported Ways of Using Technologies
-->

# **WCAG 2.1 Section 5.2.3: Complete Processes**

**Estimated read time:** 4–5 minutes

---

## **What Does "Complete Processes" Mean in WCAG?**

Section 5.2.3 of WCAG 2.1 states that when a web page is part of a series of pages presenting a process (a sequence of steps needed to complete an activity), **all pages in the process must conform at the specified level**. If any page in the process does not conform, then none of the pages in the process can be considered conformant at that level.

A "process" is a series of user actions where each action is required to complete an activity. Examples include:

- Online shopping checkout (cart → shipping → payment → confirmation)
- Account registration (form → verification → confirmation)
- Multi-step surveys or applications

---

## **Key Points from the Specification**

- **All-or-nothing:** Conformance is not possible at a particular level if any page in the process does not conform at that level or better.
- **User experience:** Every step in a process must be accessible for the process to be considered accessible.
- **No skipping:** You cannot claim conformance for just the accessible steps in a process.

---

## **Why Is This Important?**

- **Prevents barriers:** Users with disabilities must be able to complete all steps in a process, not just some.
- **Legal and ethical compliance:** Accessibility must be maintained throughout the entire user journey.
- **Consistent experience:** Ensures users are not blocked or excluded at any step.

---

## **Examples**

- **E-commerce:** If a checkout process has four pages and one is not accessible, the entire checkout process fails WCAG conformance.
- **Registration:** If a multi-step sign-up form is accessible except for the CAPTCHA page, the process does not conform.

---

## **References & Further Reading**

- [WCAG 2.1 Section 5.2.3: Complete Processes](https://www.w3.org/TR/WCAG21/#cc3)
- [Understanding Conformance Requirements](https://www.w3.org/WAI/WCAG21/Understanding/conformance#conformance-requirements)

---

_Accessibility is a journey—every step in a process must be accessible for everyone._
