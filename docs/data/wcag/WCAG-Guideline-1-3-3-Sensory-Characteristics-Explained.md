<!--
title: 1.3.3 - Sensory Characteristics
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.3.3 (Sensory Characteristics)—what it means, why it matters, and how to ensure instructions don’t rely on shape…
keywords: wcag 1.3.3, sensory characteristics, accessibility, web standards, instructions, color, shape, digital inclusion
image: WCAG-Series-1.3.3.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.3.3 Explained, Sensory Characteristics"
status: published
date: 2025-07-01
excerpt: This guideline ensures instructions do not rely on shape, color, or sound alone.
next: /wcag/WCAG-Guideline-1-3-4-Orientation-Explained, Guideline 1.3.4 - Orientation
previous: /wcag/WCAG-Guideline-1-3-2-Meaningful-Sequence-Explained, Guideline 1.3.2 - Meaningful Sequence
-->

# **WCAG Guideline 1.3.3: Sensory Characteristics Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.3: Adaptable**

Guideline 1.3 focuses on creating content that can be presented in different ways (for example, simpler layout) without losing information or structure. This is essential for users who rely on assistive technologies or need content in alternative formats.

## **What Is Guideline 1.3.3 Sensory Characteristics?**

> "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound."

Guideline 1.3.3 is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#sensory-characteristics).

- Don’t use instructions like “click the red button” or “see the box on the right” without also providing a text label or description.
- Ensure that users who can’t perceive color, shape, or sound can still follow instructions and operate your site.
- Use text labels, icons, or other cues in addition to sensory characteristics.

This ensures that everyone, including users with visual, auditory, or cognitive disabilities, can understand and use your content.

---

## **Why Does It Matter?**

- **Inclusivity:** An estimated 1 in 12 men (8%) and 1 in 200 women have some form of color vision deficiency, per the [National Eye Institute (NIH)](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness)—for this population, "click the red button" or "the green checkmark means success" carries no usable meaning without a text or shape backup.
- **Legal Compliance:** Sensory Characteristics is a Level A requirement in WCAG 2.2 and referenced in accessibility laws worldwide. The CDC's [Vision Health Data](https://www.cdc.gov/vision-health-data/about/index.html) surveillance system estimates millions of U.S. adults live with low vision or blindness—a population for whom shape, on-screen position, and orientation cues are unavailable regardless of screen magnification.
- **Usability:** Low-contrast text, often a symptom of the same color-only design habits that cause Sensory Characteristics failures, was found on 80.7% of home pages in the [WebAIM Million (2024)](https://webaim.org/projects/million/#contrast)—color-dependent instructions and color-only error states are a pervasive, easy-to-miss pattern across the web, not a rare edge case.

For more, see [WebAIM's instructions and cues guide](https://webaim.org/techniques/forms/instructions).

---

## **What You Can Do Right Now**

🔍 **Audit Your Content**
Read every instruction, label, and error message on your page aloud, mentally deleting any word that names a color, shape, size, position, orientation, or sound ("red," "round," "large," "on the right," "above," "the chime"). If the instruction no longer tells the user what to do or where to go, the sensory word was carrying meaning with no text backup—that's a 1.3.3 failure. Pay special attention to form validation errors and icon-only buttons; they're the two most common places this failure hides.

🛠️ **Add the Missing Text or Icon**
Pair every color-only, shape-only, or position-only cue with a text label, icon, or pattern: form errors get an icon plus a visible or `aria-describedby`-linked message, not just a red border; icon-only buttons get a visible label or an `aria-label`/visually-hidden `<span>` naming the action; chart legends get a pattern or direct label alongside color; instructions get the element's actual label ("click the red Submit button," not "click the red button"). The fix is additive—keep the color, shape, or sound cue, just stop making it the _only_ cue.

📢 **Escalate Smartly**
If your design system or component library ships color-only error states, status badges, or icon-only buttons with no built-in text/icon variant, that's a platform-level gap worth escalating to your design system owner—retrofitting every instance individually doesn't scale and new instances will keep failing until the base component is fixed.

📚 **Learn More**
[W3C Understanding 1.3.3: Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html) · [WebAIM Instructions and Cues Guide](https://webaim.org/techniques/forms/instructions) · [MDN Sensory Characteristics Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#sensory_characteristics)

---

## **What Needs Clear Instructions?**

- Forms and input fields
- Buttons and controls
- Charts and graphs
- Navigation menus
- Any element referenced in instructions

All such elements should be identified by more than just color, shape, or position.

---

## **How to Provide Accessible Instructions**

- Use text labels in addition to color, shape, or sound
- Reference elements by name or label, not just position or appearance
- Provide icons or patterns for color-coded information
- Test instructions with users who have different sensory abilities

For more, see the [MDN instructions docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#sensory_characteristics).

---

## **Implementation Examples**

**Form validation errors — color-only vs. color + icon + text:**

```html
<!-- ❌ Before: red border is the only signal; colorblind/low-vision users
     get no indication anything is wrong, and no screen reader announcement -->
<input type="email" id="email" class="is-invalid" />

<!-- ✅ After: icon + visible text + programmatic association, color is
     additive rather than the sole carrier of meaning -->
<input
  type="email"
  id="email"
  class="is-invalid"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" class="error-text">
  ⚠️ Enter a valid email address (e.g. name@example.com)
</span>
```

**Icon-only buttons — shape-only vs. shape + accessible name:**

```html
<!-- ❌ Before: trash-can icon relies on shape alone; no visible text,
     no accessible name for assistive tech -->
<button><svg data-icon="trash"></svg></button>

<!-- ✅ After: icon retained visually, but a text alternative names the
     action for screen readers and anyone who can't parse the icon shape -->
<button>
  <svg data-icon="trash" aria-hidden="true"></svg>
  <span class="visually-hidden">Delete item</span>
</button>
```

**Instructional text — sensory-only vs. sensory + label/position:**

```markdown
<!-- ❌ Before: "click the red button" — meaningless without color perception -->

Click the red button to submit your order.

<!-- ✅ After: label carries the meaning; color remains as a visual accent -->

Click the red **Submit Order** button.
```

**Platform limitation callout**: Bootstrap's `.is-invalid`/`.is-valid` classes and similar design-system "error state" tokens (Material UI, Tailwind form plugins) apply the red/green border and text color automatically, but **none of them auto-insert an icon or error message**—that markup has to be added explicitly every time the class is used. Audit your component library's default error state before assuming it's accessible out of the box.

**Before/After comparison table:**

| Pattern                          | Before (fails 1.3.3)                              | After (passes 1.3.3)                                                 |
| -------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------- |
| Form validation error            | Red border only, no icon or message               | Red border + icon + visible/`aria-describedby` text message          |
| Icon-only button                 | Icon with no visible text or accessible name      | Icon + visually-hidden `<span>` or `aria-label` naming the action    |
| Instruction referencing color    | "Click the red button"                            | "Click the red **Submit Order** button" (label + color)              |
| Instruction referencing position | "See the box on the right"                        | "See the **Shipping Details** box (right column)" (label + position) |
| Chart/legend                     | Data series distinguished by color only           | Color + pattern/texture or direct data-label per series              |
| Alert/notification               | Sound cue (chime/beep) with no visible equivalent | Sound cue + visible banner/text notification                         |

---

## **Common Mistakes to Avoid**

- Instructions that say “click the green button” without a label
- Relying on color or shape alone to identify elements
- Not providing alternative cues for charts or graphs
- Ignoring users with sensory disabilities

Audit your site regularly and use accessibility checkers to ensure all instructions are clear and accessible. For more, see [Oregon State University: Sensory Characteristics](https://accessibility.oregonstate.edu/digital-accessibility/sensory).

---

## **How to Test Your Instructions for Sensory Independence**

### **Quick Test (3 minutes)**

1. Read every instruction, label, and error message on the page aloud, mentally deleting any word naming a color, shape, size, position, orientation, or sound.
2. If an instruction no longer tells the user what to do or where to go once that word is removed, it fails 1.3.3.
3. Use a grayscale filter or a color-blindness simulator browser extension and re-check every form for validation errors that disappear along with the color.
4. Confirm every icon-only button has a visible label or is announced with a meaningful name by a screen reader (Tab to it and listen).

### **Quality Checklist**

- No instruction relies solely on color ("the red button"), shape ("the round icon"), size ("the large link"), position ("the box on the right"), orientation, or sound to be understood
- Every color-coded status, error, or data point has a paired icon, pattern, or text label
- Form validation errors include a visible or `aria-describedby`-linked text message, not just a color change
- Every icon-only button or control has a visible label or a text alternative (`aria-label`, visually-hidden `<span>`) naming its action
- Charts and legends distinguish data series by more than color alone (pattern, texture, or direct labeling)
- Audio-only alerts or notifications have a visible/text equivalent
- Page still makes sense when viewed with a grayscale filter or color-blindness simulator applied

### **Recommended Tools**

- **Manual (primary)**: Read-aloud/mental-deletion test described above; grayscale display mode or a color-blindness simulator (e.g., browser DevTools' "Emulate vision deficiencies," Chrome/Firefox built-in); screen reader spot-check of icon-only controls
- **Automated (supplementary)**: [axe DevTools](https://www.deque.com/axe/devtools/) and [WAVE](https://wave.webaim.org/) can flag some proxies—missing accessible names on icon-only buttons, insufficient color contrast—but cannot detect whether _instructional text_ relies solely on a sensory characteristic, since that requires understanding the sentence's meaning, not just the markup

---

## **Differences Between A, AA, and AAA for Guideline 1.3.3 in WCAG 2.2**

- **Level A:** Requires instructions not rely solely on sensory characteristics. This is the core requirement for 1.3.3 and is mandatory for basic accessibility.
- **Level AA:** For Guideline 1.3.3, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AA.
- **Level AAA:** For Guideline 1.3.3, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html).

---

## **Common Questions**

### **Does 1.3.3 have different requirements at AA or AAA?**

No. Guideline 1.3.3 is a **Level A** requirement only—WCAG 2.2 does not define additional AA or AAA criteria for Sensory Characteristics. Meeting Level A here also satisfies AA and AAA for this specific criterion. Don't confuse this with other 1.3.x or 1.4.x criteria (e.g., 1.4.1 Use of Color), which are separate requirements with their own pass/fail conditions.

### **Does this mean we can't use color, shape, or position as cues at all?**

No. 1.3.3 doesn't forbid sensory cues—it requires they never be the _only_ cue. "Click the red **Submit Order** button" (label + color) and "the **Cancel** button, located after Submit" (label + position) both pass, because a text label carries the meaning even if the color or position reference is removed. Only "click the red button" or "the button on the right," with no other identifying information, fails.

### **Can an automated accessibility checker catch Sensory Characteristics failures?**

Only partially. Automated tools can flag some proxies—an icon-only button with no accessible name, or insufficient color contrast—but they cannot read instructional text and determine whether its meaning depends solely on a color, shape, or position word. That judgment requires a human to actually read the sentence and ask, "does this still make sense without the sensory word?"

### **Our form field turns red when invalid—do we also need an icon or message?**

Yes. A red border alone is a color-only signal: colorblind and low-vision users, and anyone using a monochrome or high-contrast display mode, get no indication anything is wrong. Pair the color change with a visible or `aria-describedby`-linked text message (and, ideally, an icon) so the error is communicated through more than one sensory channel.

### **How does 1.3.3 relate to 1.4.1 (Use of Color)?**

They're closely related but distinct: 1.3.3 covers _instructions_ that rely on any sensory characteristic—shape, color, size, position, orientation, **or sound**—to be understood (e.g., "click the red button"). 1.4.1 covers the narrower case of using _color alone_ to convey information, distinguish elements, or indicate an action, independent of whether instructions are involved (e.g., a chart that uses only color to separate two data series, with no accompanying instruction text). A page can fail 1.4.1 without failing 1.3.3, or vice versa—test both independently.

---

## **Quick Checklist**

- All instructions use text labels, not just color or shape
- Elements referenced by name or label
- Color-coded info has icons or patterns
- Instructions tested with users of different abilities
- No reliance on sensory cues alone

---

## **Summary**

Guideline 1.3.3 is essential for making your site usable and understandable for everyone. By providing instructions that don’t rely solely on sensory characteristics, you support users with disabilities, improve usability, and meet legal requirements. Make accessible instructions a standard part of your development process.
