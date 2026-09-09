<!--
title: 1.3.4 - Orientation
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.3.4 (Orientation)—what it means, why it matters, and how to ensure content is not restricted to a single display…
keywords: wcag 1.3.4, orientation, accessibility, web standards, mobile, landscape, portrait, digital inclusion
image: WCAG-Series-1.3.4.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.3.4 Explained, Orientation"
status: published
date: 2025-07-01
excerpt: This guideline ensures content is not restricted to a single display orientation.
next: /wcag/WCAG-Guideline-1-3-5-Identify-Input-Purpose-Explained, Guideline 1.3.5 - Identify Input Purpose
previous: /wcag/WCAG-Guideline-1-3-3-Sensory-Characteristics-Explained, Guideline 1.3.3 - Sensory Characteristics
-->

# **WCAG Guideline 1.3.4: Orientation Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first WCAG principle is Perceivable. It means content must be available in forms users can perceive. Nothing should be invisible to all senses — sight, hearing, and touch via assistive technology all count.

## **Guideline 1.3: Adaptable**

Guideline 1.3 focuses on creating content that can be presented in different ways (for example, simpler layout) without losing information or structure. This is essential for users who rely on assistive technologies or need content in alternative formats.

## **What Is Guideline 1.3.4 Orientation?**

> "Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential."

Guideline 1.3.4 is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#orientation).

- Users must be able to view and operate content in both portrait and landscape orientations.
- Don’t lock your site or app to a single orientation unless it’s essential (e.g., a piano app).
- Ensure all functionality and information is available in both orientations.

This ensures that users who use assistive technology, have their device mounted, or prefer a certain orientation can still access your content.

---

## **Why Does It Matter?**

- **Inclusivity:** 13.7% of US adults — roughly 1 in 7 — have a mobility disability, per the [CDC Disability and Health Data System](https://www.cdc.gov/disability-and-health/features/disability-inclusion.html). Many mount their phone or tablet on a wheelchair arm, bed rail, or fixed stand rather than holding and rotating it freely — an orientation lock doesn't inconvenience these users, it strands them with content they cannot access at all.
- **Legal Compliance:** Orientation is a **Level AA** requirement in WCAG 2.2 and referenced in accessibility laws worldwide. The [W3C Understanding 1.3.4 document](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html) narrows the "essential" exception to cases where the task itself is tied to a physical orientation (e.g., a piano app, a check-deposit scanner) — not to design preference.
- **Usability:** Mobile devices account for roughly 59% of global web traffic, per [StatCounter Global Stats](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet). At that scale, an orientation lock built for one "expected" holding position fails a huge, heterogeneous share of real-world device angles — mounted, propped, tripod-held, or simply held however is comfortable.

For more, see [WebAIM's orientation guide](https://webaim.org/blog/mobile-accessibility/).

---

## **What You Can Do Right Now**

🔍 **Audit Your Content**
Rotate your device (or resize your browser viewport, or use dev tools' device toolbar rotate button) 90 degrees on every page and screen in your site or app. Confirm every piece of content is still visible and every control — form fields, buttons, menus, checkout steps — is still operable. Anything that disappears, clips, or becomes unreachable in the new orientation is a 1.3.4 failure. Also test with a device fixed at an angle (simulating a wheelchair mount or bed stand), not just a free-hand rotation.

🛠️ **Remove Unjustified Orientation Locks**
Search your codebase for `@media (orientation: portrait)` / `(orientation: landscape)` rules that hide content or disable functionality, and for `screen.orientation.lock()` calls (or native `UISupportedInterfaceOrientations` / `android:screenOrientation` settings) applied by default. Remove locks unless the feature meets the narrow essential-use bar — a piano/keyboard simulator, a check-deposit scanner, a barcode scanner tied to a physical label's orientation. "Designed for landscape" or "looks better this way" does not qualify.

📢 **Escalate Smartly**
If a third-party embed, native SDK, or game engine forces an orientation lock you can't override from your own codebase, that's a platform/vendor limitation worth escalating to your dev team or the vendor directly — content editors can't patch a hard-coded native manifest setting. Flag it as a blocker for Level AA compliance rather than shipping around it.

📚 **Learn More**
[W3C Understanding 1.3.4: Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html) · [MDN Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API) · [MDN CSS `orientation` media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation)

---

## **What Needs Orientation Support?**

- Mobile apps and web pages
- Forms and interactive content
- Media players and games
- Any content that could be used in different orientations

All such content should be usable in both portrait and landscape unless a specific orientation is essential.

---

## **How to Support Multiple Orientations**

- Use responsive design techniques to support both orientations
- Avoid CSS or JavaScript that locks orientation
- Test all features in both portrait and landscape
- Only restrict orientation if absolutely necessary

For more, see the [MDN orientation docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation).

---

## **Implementation Examples**

**CSS orientation lock via `@media` — hiding content instead of adapting it:**

```css
/* ❌ Before: blocks all content in landscape with a hard "rotate your
   device" overlay that cannot be dismissed — a common but unjustified
   pattern for content that has no essential orientation requirement */
@media (orientation: landscape) {
  .app-content {
    display: none;
  }
  .rotate-overlay {
    display: flex;
  } /* "Please rotate to portrait" */
}
```

```css
/* ✅ After: layout adapts to both orientations instead of blocking one;
   use orientation media queries to *adjust* layout, not to *hide* content */
.app-content {
  display: flex;
  flex-direction: column;
}

@media (orientation: landscape) {
  .app-content {
    flex-direction: row;
  } /* re-flow layout, don't hide it */
}
```

**JavaScript Screen Orientation API misuse:**

```javascript
// ❌ Before: locks every user into portrait on page load, regardless of
// how their device is mounted or held — no essential-use justification
window.addEventListener('load', () => {
  screen.orientation.lock('portrait').catch(() => {});
});
```

```javascript
// ✅ After: only lock orientation for content that meets the essential-use
// bar (e.g., a check-deposit camera scan step aligned to a physical check),
// and only for the duration of that specific task
function startCheckScanStep() {
  screen.orientation.lock('landscape').catch(() => {
    // Gracefully degrade — do not block the task if lock is unsupported
  });
}
function endCheckScanStep() {
  screen.orientation.unlock();
}
```

**Platform limitation callout**: Native app orientation locks are set at the OS/manifest level — iOS via `UISupportedInterfaceOrientations` in `Info.plist`, Android via `android:screenOrientation` in `AndroidManifest.xml` — and apply app-wide unless overridden per-screen. On the responsive web, there is no equivalent platform-level restriction; any orientation lock on a website is the site's own CSS or JavaScript choice, so the essential-use exception must be justified per-feature, not assumed from a native-app mental model.

**Before/After comparison table:**

| Pattern               | Before (fails 1.3.4)                                                  | After (passes 1.3.4)                                                                                                      |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Full-page layout      | `@media (orientation: landscape) { display: none; }` blocks content   | Layout re-flows (column ↔ row) for both orientations                                                                     |
| Orientation API usage | `screen.orientation.lock('portrait')` called unconditionally on load  | Lock called only for a genuinely essential task step, then unlocked                                                       |
| Native app manifest   | `android:screenOrientation="portrait"` set app-wide with no exception | Orientation left unlocked, or locked only on the specific essential screen                                                |
| Game/media player     | Forces landscape with no portrait layout, no exception justification  | Portrait layout provided, or landscape lock documented as essential (e.g., full-screen video playback toggle, not forced) |
| Checkout/form flow    | Fields overlap and submit button is pushed off-screen in landscape    | Form re-flows and all fields/controls remain visible and operable in both orientations                                    |

---

## **Common Mistakes to Avoid**

- Locking content to portrait or landscape without a valid reason
- Features that break or disappear in one orientation
- Not testing with assistive technology or mounted devices
- Ignoring user preferences for orientation

Audit your site regularly and use accessibility checkers to ensure all content supports multiple orientations. For more, see the [BBC's Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/).

---

## **How to Test Your Orientation Support**

### **Quick Test (3 minutes)**

1. Rotate your physical device 90 degrees on every key page/screen (or resize your browser viewport, or use dev tools' device toolbar rotate button if testing on desktop).
2. Confirm all content is visible — nothing is clipped, hidden, or requires the "other" orientation to read.
3. Confirm every control (form fields, buttons, menus, multi-step flows) is still reachable and operable in the new orientation.
4. Repeat the test with the device held at a **fixed angle** (e.g., propped on a stand or simulating a wheelchair-mount angle) rather than only a quick handheld rotation — this surfaces orientation-lock failures that a fast rotate-back might mask.

### **Quality Checklist**

- Content is fully visible and readable in both portrait and landscape
- No functionality (forms, menus, checkout steps, media controls) is lost or hidden in either orientation
- No `@media (orientation: ...)` rule hides content or blocks interaction — orientation queries are used only to _adjust_ layout
- No `screen.orientation.lock()` call runs unconditionally on page/app load
- Any orientation lock present is scoped to a single essential-use screen or task step, with a documented justification (e.g., check-scan camera alignment)
- Native app manifest settings (`UISupportedInterfaceOrientations`, `android:screenOrientation`) are not locked app-wide without an essential-use justification
- Tested with the device fixed at an angle (mount/stand-simulated), not only free-hand rotated

### **Recommended Tools**

- **Manual (primary)**: Physical device rotation test; browser dev tools device toolbar rotate button; fixed-angle/mount-simulated test (prop the device or resize viewport and leave it, rather than rotating back immediately)
- **Automated (supplementary)**: [axe DevTools](https://www.deque.com/axe/devtools/) and [WAVE](https://wave.webaim.org/) do not reliably detect orientation-lock failures, since a locked orientation renders "correctly" within the one orientation it allows — the defect only appears when tested in the _other_ orientation. There is no substitute for manually testing both.

---

## **Differences Between A, AA, and AAA for Guideline 1.3.4 in WCAG 2.2**

- **Level A:** No requirement for 1.3.4.
- **Level AA:** Requires content to support both portrait and landscape orientations unless essential. This is the core requirement for 1.3.4 and is mandatory for AA conformance.
- **Level AAA:** For Guideline 1.3.4, there are no additional requirements beyond Level AA in WCAG 2.2. Meeting Level AA for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html).

---

## **Common Questions**

### **Does 1.3.4 have different requirements at AA or AAA?**

No — 1.3.4 is a **Level AA** requirement (unlike 1.3.1 and 1.3.2, which are Level A only). WCAG 2.2 does not define additional AAA criteria for Orientation; meeting Level AA here also satisfies AAA for this specific criterion. Don't confuse this with other 1.3.x criteria — 1.3.1 (Info and Relationships) and 1.3.2 (Meaningful Sequence) are separate Level A requirements, while 1.3.5 (Identify Input Purpose) is a separate Level AA requirement with its own distinct pass/fail conditions.

### **What actually counts as "essential" orientation, versus just a design choice?**

The essential-use bar is narrow and tied to the task itself, not to design preference. The W3C's own examples are things like a piano/keyboard simulator (needs landscape width to render enough keys), a bank check-deposit scanner (must match the physical check's orientation), or a barcode/QR scanner aligned to a label. "We designed this for landscape," "it looks better this way," or "we didn't build a portrait layout" are **not** essential-use justifications — they describe a missing responsive layout, which is exactly what 1.3.4 requires you to fix.

### **Can an automated accessibility checker catch orientation-lock failures?**

Not reliably. A page or screen that locks orientation renders "correctly" and passes most automated checks within the one orientation it allows — the failure only becomes visible when you actually test in the _other_ orientation. Automated tools like axe, WAVE, and Lighthouse have no way to detect "this content is unreachable in landscape" without being run in that orientation specifically, and even then they can't judge _why_ a lock exists or whether it's justified. Manual rotation testing (including at a fixed, mount-simulated angle) is required.

### **Our native mobile app locks orientation in the App Store manifest — does WCAG 1.3.4 even apply?**

Yes, if the app's content and functionality fall within your accessibility conformance scope (which most organizational accessibility commitments, and many legal requirements, extend to native apps as well as web). A manifest-level lock (`UISupportedInterfaceOrientations` on iOS, `android:screenOrientation` on Android) is a developer choice, not a platform requirement — the same essential-use bar applies: is there a genuine task-based reason for the lock, or is it a design default that excludes users who can't rotate their mounted device?

### **How does 1.3.4 relate to 1.3.5 (Identify Input Purpose) or 1.4.10 (Reflow)?**

They're complementary but distinct. 1.3.4 concerns whether content and functionality are available in _both_ portrait and landscape at all — a binary "does it lock or not" check. 1.4.10 (Reflow) concerns whether content adapts to _narrow viewports_ (down to 320 CSS px) without loss of information or two-dimensional scrolling — a related but separate responsive-design requirement that applies regardless of orientation. 1.3.5 (Identify Input Purpose) is unrelated to orientation entirely — it concerns whether form fields expose their semantic purpose (e.g., `autocomplete="email"`) for autofill and personalization. A page can pass 1.3.4 (works in both orientations) while still failing 1.4.10 (breaks at narrow widths) or 1.3.5 (form fields lack purpose attributes) — test each independently.

---

## **Quick Checklist**

- Content works in both portrait and landscape
- No features break in either orientation
- No orientation is locked unless essential
- Tested with assistive technology and mounted devices
- User preferences for orientation are respected

---

## **Summary**

Guideline 1.3.4 ensures your site works in both portrait and landscape mode. This is vital for users who cannot rotate their device. Build orientation flexibility into your CSS from day one.
