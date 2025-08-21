---
title: EthicalAds Integration & Open Source Ad Package Workplan
description: Step-by-step plan for integrating EthicalAds and building a transparent, accessible ad package for AccessiTech.
date: 2025-08-21
status: in progress
---

# EthicalAds Integration & Open Source Ad Package Workplan

## Phase 1: EthicalAds Integration

### 1. Register with EthicalAds

- Applied for an EthicalAds publisher account at https://ethicalads.io/publishers/ (onboarding in progress).
- Will complete onboarding and obtain publisher key/ad code when approved.

### 2. Plan Ad Placement

- **Mobile & Tablet:** Banner ads at the top and bottom of pages for high visibility and minimal disruption.
- **Desktop:** Sidebar ads for persistent but unobtrusive presence.
- **Blogs:** Banner ads at the top, bottom, and optionally between sections/paragraphs for natural integration.
- All placements will be accessible, clearly labeled, and will not interfere with navigation or content.

### 3. Implement EthicalAds

- Built and tested a network-agnostic, accessible React ad component system (with unit tests).
- Will add EthicalAds script and ad units to the codebase (React components or static HTML as needed) once publisher code is available.
- All ad containers will be clearly labeled as "Advertisement" per policy and accessible (ARIA labels, keyboard, screen reader tested).

### 4. Accessibility & Privacy Review

- Test ad units with screen readers and keyboard navigation.
- Confirm no tracking cookies or behavioral targeting.
- Validate compliance with WCAG 2.1 AA and AccessiTech's [ads policy](public/disclosures/ads.md).

### 5. Documentation & Disclosure

- Documentation updated to describe ad integration and user empowerment options.
- [Advertisement Disclosure](public/disclosures/ads.md) will be linked from ad units if possible.

### 6. Feedback & Iteration

- Will collect user feedback on ad accessibility and experience after launch.
- Will iterate on placement and implementation as needed.

---

## Phase 2: Open Source Ad Package (AdSense/Microsoft Ads)

### 1. Research & Requirements

- Review Google AdSense and Microsoft Ads integration requirements.
- Identify accessibility and privacy gaps in default implementations.

### 2. Design Package API

- Plan a React component or library API for ad integration.
- Features: clear labeling, ARIA support, consent management, ad-block fallback, privacy controls.

### 3. Build & Test

- Develop the package with accessibility and transparency as core principles.
- Test with real ad code (sandbox/test mode) and accessibility tools.

### 4. Documentation

- Provide clear usage instructions, accessibility notes, and privacy guidance.
- Open source the package (e.g., GitHub, npm).

### 5. Community Feedback

- Invite feedback and contributions from the accessibility and dev community.

---

## Progress Log

- 2025-08-21: Applied for EthicalAds, planned ad placements, built and tested ad component system, created GitHub issues for integration and tracking, posted research/progress update to issue #78.

## Resources

- [EthicalAds Documentation](https://ethicalads.io/docs/)
- [AccessiTech Advertisement Disclosure](public/disclosures/ads.md)
- [WCAG 2.1 AA Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

_Last updated: 2025-08-21_
