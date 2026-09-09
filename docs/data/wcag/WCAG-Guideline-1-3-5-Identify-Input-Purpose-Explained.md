<!--
title: 1.3.5 - Identify Input Purpose
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.3.5 (Identify Input Purpose)—what it means, why it matters, and how to help browsers and assistive tech identify the…
keywords: wcag 1.3.5, identify input purpose, accessibility, web standards, autofill, input fields, digital inclusion
image: WCAG-Series-1.3.5.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.3.5 Explained, Identify Input Purpose"
status: published
date: 2025-07-01
excerpt: Helps browsers and assistive technologies identify the purpose of input fields, improving usability and accessibility.
next: /wcag/WCAG-Guideline-1-3-6-Identify-Purpose-Explained, Guideline 1.3.6 - Identify Purpose
previous: /wcag/WCAG-Guideline-1-3-4-Orientation-Explained, Guideline 1.3.4 - Orientation
-->

# **WCAG Guideline 1.3.5: Identify Input Purpose Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.3: Adaptable**

Guideline 1.3 focuses on creating content that can be presented in different ways (for example, simpler layout) without losing information or structure. This is essential for users who rely on assistive technologies or need content in alternative formats.

## **What Is Guideline 1.3.5 Identify Input Purpose?**

> "The purpose of each input field collecting information about the user can be programmatically determined when: The input field serves a purpose identified in the Input Purposes for User Interface Components section; and the content is implemented using technologies with support for identifying the expected meaning for form fields."

Guideline 1.3.5 is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose).

- Use HTML autocomplete attributes to identify the purpose of input fields (e.g., name, email, address).
- This helps browsers and assistive technologies provide autofill, suggestions, and context for users.
- Especially helpful for users with cognitive disabilities or those using password managers and screen readers.

This ensures that users can complete forms more easily and accurately, improving accessibility and usability.

---

## **Why Does It Matter?**

- **Inclusivity:** Cognition is the most commonly reported disability type among U.S. adults, affecting an estimated 1 in 6 adults (13.9%) — autofill and correctly identified input purposes reduce the memory and re-entry burden that makes forms a barrier for this population. ([CDC — Adults Living with Disabilities](https://www.cdc.gov/disabilityandhealth/features/adults-living-with-disabilities.html))
- **Legal Compliance:** Identify Input Purpose is a Level AA requirement in WCAG 2.2 and referenced in accessibility laws worldwide, including the European Accessibility Act and Section 508.
- **Usability & Conversion:** "Too long or complicated checkout process" remains a top-cited reason shoppers abandon a purchase ([Baymard Institute — Cart Abandonment Rate Statistics](https://baymard.com/lists/cart-abandonment-rate)), and Baymard's checkout benchmark research has found a majority of top e-commerce sites have moderate-to-severe autofill implementation issues ([Baymard Institute — Checkout Usability Research](https://baymard.com/research)) — fixing missing or incorrect `autocomplete` attributes is a low-cost, high-leverage fix for both accessibility and conversion.

For more, see [WebAIM's form accessibility guide](https://webaim.org/techniques/forms/).

---

## **What You Can Do Right Now**

🔍 **Audit Your Content**
Click into each field on your form and watch for your browser's native autofill dropdown (Chrome, Safari, and Edge all show a preview of saved profile data — name, address, email, phone — when a field's purpose is correctly identified). If the dropdown doesn't appear, or suggests the wrong category of data, that field is missing or has an incorrect `autocomplete` attribute. Follow up by inspecting the rendered HTML (not just the component's source) to confirm the attribute survived any component-library wrapper.

🛠️ **Implement Autocomplete Attributes**
Map every collected field to the matching token from [W3C's Input Purposes list](https://www.w3.org/TR/WCAG22/#input-purposes) (`name`, `email`, `tel`, `street-address`, `postal-code`, `new-password`, etc.), and pair each with the correct semantic `type` (`type="email"`, `type="tel"`) rather than a generic `type="text"`. For signup vs. login flows, be precise about `autocomplete="new-password"` vs. `"current-password"` — password managers rely on this distinction.

📢 **Escalate Smartly**
If your design system's custom `<TextField>`/`<Input>` component doesn't forward `autocomplete`, `type`, or `name` props down to the native `<input>` element, that's a platform/component-library limitation worth escalating to your frontend team — content editors and form authors can't fix a wrapper that silently drops attributes.

📚 **Learn More**
[W3C Understanding 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html) · [MDN autocomplete attribute docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) · [WHATWG HTML Autofill spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill)

---

## **What Needs Input Purpose Identified?**

- Name fields (first, last, full)
- Email address
- Street address, city, postal code
- Phone number
- Username, new-password, current-password

All such fields should use the appropriate autocomplete attribute.

---

## **How to Identify Input Purpose**

- Add the autocomplete attribute to input fields (e.g., autocomplete="email")
- Use correct field types (e.g., type="email", type="tel")
- Test with browsers and assistive tech for autofill support
- Document field purposes for developers and designers

For more, see the [MDN autocomplete docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).

---

## **Implementation Examples**

**Name and email fields — missing vs. correct autocomplete:**

```html
<!-- ❌ Before: no autocomplete attribute, generic type, invisible to autofill -->
<label for="fname">First Name</label>
<input type="text" id="fname" name="fname" />

<label for="email">Email</label>
<input type="text" id="email" name="email" />

<!-- ✅ After: autocomplete token + matching semantic type -->
<label for="fname">First Name</label>
<input type="text" id="fname" name="fname" autocomplete="given-name" />

<label for="email">Email</label>
<input type="email" id="email" name="email" autocomplete="email" />
```

**Signup vs. login — password autocomplete tokens:**

```html
<!-- ❌ Before: both fields use the same token; password managers can't distinguish "save new" from "fill existing" -->
<input type="password" id="pwd" name="pwd" autocomplete="off" />

<!-- ✅ After: signup form -->
<input type="password" id="new-pwd" name="new-pwd" autocomplete="new-password" />

<!-- ✅ After: login form -->
<input type="password" id="current-pwd" name="current-pwd" autocomplete="current-password" />
```

**Platform limitation callout**: Design-system component wrappers (common in React/Vue projects using an internal `<TextField>` component) sometimes accept an `autoComplete` prop in their API but fail to forward it to the rendered native `<input>` — the field renders correctly and looks accessible in the component's Storybook docs, but produces `<input>` with no `autocomplete` attribute in the actual DOM. Always verify in browser dev tools, not just the component's prop documentation.

**Before/After comparison table:**

| Field                      | Before (fails 1.3.5)                              | After (passes 1.3.5)                                                               |
| -------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------- |
| First name                 | `<input type="text" name="fname">`                | `<input type="text" name="fname" autocomplete="given-name">`                       |
| Email                      | `<input type="text" name="email">`                | `<input type="email" name="email" autocomplete="email">`                           |
| Phone                      | `<input type="text" name="phone">`                | `<input type="tel" name="phone" autocomplete="tel">`                               |
| Street address             | `<input type="text" name="addr1">`                | `<input type="text" name="addr1" autocomplete="address-line1">`                    |
| Signup password            | `<input type="password" autocomplete="off">`      | `<input type="password" autocomplete="new-password">`                              |
| Custom design-system field | `<TextField label="Email" />` (no attr forwarded) | `<TextField label="Email" autoComplete="email" type="email" />` (forwarded to DOM) |

---

## **Common Mistakes to Avoid**

- Omitting autocomplete attributes on supported fields
- Using incorrect or generic autocomplete values
- Not testing autofill with real browsers and assistive tech
- Ignoring the needs of users with cognitive disabilities

Audit your site regularly and use accessibility checkers to ensure all input purposes are identified. For more, see the [W3C's HTML Autofill Field Names documentation](https://www.w3.org/WAI/WCAG21/Techniques/html/H98).

---

## **How to Test Your Input Purpose Identification**

### **Quick Test (3 minutes)**

1. Open your form in a browser with a saved autofill profile (Chrome/Edge: Settings → Autofill; Safari: Preferences → AutoFill).
2. Click into each field one at a time and confirm the browser's autofill dropdown appears and offers the _correct category_ of saved data (name fields offer names, not addresses or emails).
3. Inspect the rendered HTML (dev tools → Elements) for each field and confirm an `autocomplete` attribute is present with the correct token from the W3C list — not just a plausible-looking `name` or `id`.
4. For password fields, confirm signup fields use `autocomplete="new-password"` and login fields use `autocomplete="current-password"`, and that your password manager offers to generate/save vs. fill accordingly.

### **Quality Checklist**

- Every supported field (per the W3C Input Purposes list) has a matching `autocomplete` attribute
- Field `type` matches the expected input (`email`, `tel`, `url`) — not a generic `type="text"`
- Browser autofill dropdown offers the correct category of saved data for each field
- Signup and login password fields use distinct `new-password` / `current-password` tokens
- Custom design-system input components forward `autocomplete`, `type`, and `name` to the rendered native `<input>`
- Autofill behavior has been spot-checked in at least two browsers (autofill implementation varies by browser)
- Screen reader announces field purpose consistently with the visible label

### **Recommended Tools**

- **Manual (primary)**: Browser-native autofill preview test (Chrome/Safari/Edge saved profile); dev tools Elements panel inspection of rendered `autocomplete`/`type` attributes
- **Automated (supplementary)**: [axe DevTools](https://www.deque.com/axe/devtools/) and [WAVE](https://wave.webaim.org/) can flag missing `autocomplete` attributes on common field types, but cannot confirm the _correct_ token was used or that a design-system wrapper forwards it to the DOM — pair with the manual browser autofill test above

---

## **Differences Between A, AA, and AAA for Guideline 1.3.5 in WCAG 2.2**

- **Level A:** No requirement for 1.3.5.
- **Level AA:** Requires input purposes to be programmatically determined for supported fields. This is the core requirement for 1.3.5 and is mandatory for AA conformance.
- **Level AAA:** For Guideline 1.3.5, there are no additional requirements beyond Level AA in WCAG 2.2. Meeting Level AA for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

---

## **Common Questions**

### **Does 1.3.5 have different requirements at A or AAA?**

No. 1.3.5 is a **Level AA** requirement only — there is no Level A version, and WCAG 2.2 does not define additional AAA criteria beyond AA for this guideline. Meeting Level AA here also satisfies AAA for this specific criterion.

### **How does 1.3.5 (Identify Input Purpose) relate to 1.3.6 (Identify Purpose)?**

1.3.5 is scoped narrowly to _form input fields_ and the finite W3C Input Purposes list (name, email, address, etc.) at Level AA. 1.3.6 is broader — a Level AAA requirement covering the purpose of UI components, icons, and regions generally (not just form fields), using a separate, less-finalized vocabulary. Don't conflate the two: a form can fully satisfy 1.3.5 while 1.3.6 (being AAA) remains out of scope for most compliance targets.

### **Can an automated accessibility checker catch all input-purpose problems?**

Automated tools reliably flag a field with **no** `autocomplete` attribute at all. They generally cannot confirm you used the _correct_ token (e.g., `email` vs. a made-up value), nor can they detect a design-system wrapper that silently drops the attribute before it reaches the DOM. Manual browser autofill testing, described above, is required to catch both.

### **Our design system doesn't expose an `autocomplete` prop on its input component — is that a blocker?**

Yes, for any fields on the W3C Input Purposes list. This is a platform/component-library limitation, not something content editors can fix — escalate it to your frontend or design-systems team as a blocker for Level AA conformance, per the "Escalate Smartly" CTA above.

### **Does adding `autocomplete` attributes affect password manager behavior?**

Yes, directly. `autocomplete="new-password"` signals to the password manager that this is a signup/change-password field (offer to generate + save a new credential); `autocomplete="current-password"` signals a login field (offer to fill an existing saved credential). Using the wrong token, or `autocomplete="off"`, can cause password managers to behave unpredictably — this is a security/usability issue as well as an accessibility one.

---

## **Quick Checklist**

- All supported input fields use autocomplete attributes
- Field types match the expected input (email, tel, etc.)
- Autofill and suggestions work in browsers
- Tested with assistive technology
- Field purposes are documented for devs/designers

---

## **Summary**

Guideline 1.3.5 is essential for making forms easier and more accessible for everyone. By identifying input purposes, you support users with disabilities, improve usability, and meet legal requirements. Make input purpose identification a standard part of your form development process.
