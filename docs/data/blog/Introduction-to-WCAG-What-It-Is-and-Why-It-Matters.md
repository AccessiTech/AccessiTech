
<!--
title: Introduction to WCAG - What It Is and Why It Matters
description: Learn what WCAG is, why web accessibility matters, and how it impacts users, laws, and inclusive design practices. Start building accessible websites today.
keywords: what is wcag, web accessibility introduction, wcag 2.2 explained, accessibility guidelines website, digital inclusion, wcag vs ada, accessible design principles, website accessibility laws
date: 2025-05-29
series: Making the Web Accessible for All
image: intorduction-to-wcag.png
imageAlt:Dark blue text on yellow background saying, Introduction to WCAG, What it is and Why it Matters
--->

# **Introduction to WCAG: What It Is and Why It Matters**

**Estimated read time:** 5–6 minutes

---

## **Why Accessibility Should Be Everyone’s Priority**

Every time someone visits your website, they bring their own set of abilities, devices, and challenges. For some, navigating a site without a mouse is essential. For others, screen readers are their main tool for browsing. That’s where **WCAG**—the **Web Content Accessibility Guidelines**—comes in.

WCAG isn’t just a technical checklist. It’s a framework for building websites and applications that **everyone** can use—regardless of physical, sensory, or cognitive ability.

---

## **What Is WCAG?**

WCAG (pronounced "Wuh-KAG") is a set of internationally recognized guidelines for web accessibility, developed by the **World Wide Web Consortium (W3C)**. It has evolved through:

| Version  | Released   | Key Focus                                         |
| -------- | ---------- | ------------------------------------------------- |
| WCAG 2.0 | 2008       | Core accessibility principles                     |
| WCAG 2.1 | 2018       | Mobile, low vision, and cognitive needs           |
| WCAG 2.2 | 2023       | More inclusive navigation and interaction support |
| WCAG 3.0 | (Upcoming) | Broader, more flexible model in development       |

---

## **Who Benefits from WCAG?**

> **Accessibility is not just for “them”—it’s for all of us.**

![A Venn diagram with three overlapping circles labeled: "Disability", "Situational", "Environmental". At the intersection: "Need for Accessibility."](/assets/images/venn-diagram-accessibility.png)
> *This shows how accessibility supports everyone—from permanent disabilities to temporary or situational limitations.*

**WCAG helps:**

* People with permanent disabilities (blindness, deafness, mobility impairments)
* People using devices with limited functionality (e.g., phones in bright light)
* Older adults with cognitive or motor challenges
* Users on slow or unstable internet connections

---

## **Why It’s More Than a Nice-to-Have**

Depending on your region, **web accessibility might be required by law**:

| Region | Law              | WCAG Requirement                     |
| ------ | ---------------- | ------------------------------------ |
| USA    | ADA, Section 508 | WCAG 2.0 or higher (often AA)        |
| EU     | EN 301 549       | WCAG 2.1 AA                          |
| Canada | AODA             | WCAG 2.0 AA (growing toward 2.1/2.2) |

![A gavel beside a computer screen with an alert: “Non-compliant website – Accessibility lawsuit filed”](/assets/images/gavel-warning.jpg)
> *Increasingly, organizations face legal risk when accessibility is ignored.*

---

## **What You’ll Learn in This Series**

We’ll break down WCAG into practical, digestible posts, including:

✅ The Four Principles of Accessibility (POUR)

✅ What Levels A, AA, and AAA mean

✅ Accessibility tools and checkers

✅ Tips for accessible HTML, JS frameworks, and design

✅ Legal risks and ethical insights

✅ What’s coming in WCAG 3.0

---

## **WCAG References and Checklists**

* [W3C’s How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)
* [a11yproject’s WCAG Checklist](https://www.a11yproject.com/checklist/)
* [WebAim’s 10 page WCAG Checklist](https://webaim.org/standards/wcag/WCAG2Checklist.pdf)
* [Full WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)

Includes:

* Key terms and definitions
* Links to free tools for testing accessibility
* Comprehensive guides to meeting accessibility standards

---

## **Top 10 Accessibility Issues & Fixes:**

1. Missing alt text -> Add descriptive alt attributes to all meaningful images.
2. Low color contrast -> Ensure a contrast ratio of at least 4.5:1 for normal text.
3. No keyboard navigation -> Make sure all content is reachable using a keyboard.
4. No focus indicator -> Ensure visible focus styles on interactive elements.
5. Improper heading structure -> Use heading tags (H1-H6) in a logical order.
6. Links without context -> Use meaningful link text (avoid 'click here').
7. Form elements not labeled -> Use elements properly associated with inputs.
8. Video without captions -> Provide accurate closed captions for all videos.
9. Missing page language -> Set the page's lang attribute (e.g., `<html lang="en">` ).
10. ARIA misuse -> Only use ARIA roles when necessary and correctly.

---

## **Next Up: The Four Principles of Accessibility (POUR)**

*We’ll explore what it means for content to be Perceivable, Operable, Understandable, and Robust.*
