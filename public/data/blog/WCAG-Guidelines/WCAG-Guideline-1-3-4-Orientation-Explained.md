<!--
title: WCAG Guideline 1.3.4: Orientation Explained
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.3.4 (Orientation)—what it means, why it matters, and how to ensure content is not restricted to a single display orientation.
keywords: wcag 1.3.4, orientation, accessibility, web standards, mobile, landscape, portrait, digital inclusion
image: wcag-1-3-4-orientation.png
imageAlt: Illustration of a mobile device switching between portrait and landscape
status: draft
-->

# **WCAG Guideline 1.3.4: Orientation Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.3: Adaptable**

Guideline 1.3 focuses on creating content that can be presented in different ways (for example, simpler layout) without losing information or structure. This is essential for users who rely on assistive technologies or need content in alternative formats.

## **What Is Guideline 1.3.4 Orientation?**

[Illustration: Mobile device switching between portrait and landscape]

> "Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential."

Guideline 1.3.4 is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#orientation).

- Users must be able to view and operate content in both portrait and landscape orientations.
- Don’t lock your site or app to a single orientation unless it’s essential (e.g., a piano app).
- Ensure all functionality and information is available in both orientations.

This ensures that users who use assistive technology, have their device mounted, or prefer a certain orientation can still access your content.

---

## **Why Does It Matter?**

[Infographic: Device orientation icons, user with mounted tablet]

- **Inclusivity:** Some users can’t rotate their devices or use assistive tech that requires a specific orientation.
- **Legal Compliance:** Orientation is a Level AA requirement in WCAG 2.2 and referenced in accessibility laws worldwide.
- **Usability:** Supporting both orientations improves the experience for all users, especially on mobile.

For more, see [WebAIM's orientation guide](https://webaim.org/blog/mobile-accessibility/).

---

## **What Needs Orientation Support?**

[Grid: Mobile app, web page, form, all with orientation icons]

- Mobile apps and web pages
- Forms and interactive content
- Media players and games
- Any content that could be used in different orientations

All such content should be usable in both portrait and landscape unless a specific orientation is essential.

---

## **How to Support Multiple Orientations**

[Side-by-side: App in portrait and landscape]
[Example: Responsive design with flexible layouts]

- Use responsive design techniques to support both orientations
- Avoid CSS or JavaScript that locks orientation
- Test all features in both portrait and landscape
- Only restrict orientation if absolutely necessary

For more, see the [MDN orientation docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation).

---

## **Common Mistakes to Avoid**

[Do/Don't graphic: Left side with flexible orientation, right side with locked orientation]

- Locking content to portrait or landscape without a valid reason
- Features that break or disappear in one orientation
- Not testing with assistive technology or mounted devices
- Ignoring user preferences for orientation

Audit your site regularly and use accessibility checkers to ensure all content supports multiple orientations. For more, see [Deque's mobile accessibility tips](https://www.deque.com/blog/mobile-accessibility-tips/).

---

## **Differences Between A, AA, and AAA for Guideline 1.3.4 in WCAG 2.2**

[Infographic: Three columns labeled A, AA, AAA with example requirements for each]

- **Level A:** No requirement for 1.3.4.
- **Level AA:** Requires content to support both portrait and landscape orientations unless essential. This is the core requirement for 1.3.4 and is mandatory for AA conformance.
- **Level AAA:** For Guideline 1.3.4, there are no additional requirements beyond Level AA in WCAG 2.2. Meeting Level AA for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html).

---

## **Quick Checklist**

[Checklist graphic: Icons for each item (mobile, orientation, responsive, etc.)]

- Content works in both portrait and landscape
- No features break in either orientation
- No orientation is locked unless essential
- Tested with assistive technology and mounted devices
- User preferences for orientation are respected

---

## **Summary**

[Illustration: User switching device orientation and accessing all content]

Guideline 1.3.4 is essential for making your site usable and accessible for everyone. By supporting both orientations, you support users with disabilities, improve usability, and meet legal requirements. Make orientation flexibility a standard part of your development process.

**Next Up:**

[Read Guideline 1.3.5: Identify Input Purpose →](WCAG-Guideline-1-3-5-Identify-Input-Purpose-Explained.md)

*Accessibility means everyone gets the full story—make your content flexible!*
