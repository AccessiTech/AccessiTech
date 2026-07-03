<!--
title: 1.2.3 - Audio Description or Media Alternative (Prerecorded)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.2.3 (Audio Description or Media Alternative, Prerecorded)—what it means, why it matters, and how to make video content…
keywords: wcag 1.2.3, audio description, media alternative, accessibility, video accessibility, web standards, digital inclusion
image: WCAG-Series-1.2.3.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibiilty Guiedlines (WCAG) 1.2.3 Explained, Audio Description or Media Alternative (Prerecorded)"
status: published
date: 2025-07-01
excerpt: This guideline ensures video content is accessible for users who are blind or have low vision with audio descriptions or media alternatives.
next: /wcag/WCAG-Guideline-1-2-4-Captions-Live-Explained, Guideline 1.2.4 - Captions (Live)
previous: /wcag/WCAG-Guideline-1-2-2-Captions-Prerecorded-Explained, Guideline 1.2.2 - Captions (Prerecorded)
-->

# **WCAG Guideline 1.2.3: Audio Description or Media Alternative (Prerecorded) Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first WCAG principle is Perceivable. It means content must be available in forms users can perceive. Nothing should be invisible to all senses — sight, hearing, and touch via assistive technology all count.

## **Guideline 1.2: Time-based Media**

Guideline 1.2 makes audio and video content accessible for all. The method is providing alternatives: transcripts, captions, and audio descriptions. Each alternative serves users who cannot access the original format.

## **What Is Guideline 1.2.3 Audio Description or Media Alternative (Prerecorded)?**

> "An audio description or a media alternative is provided for all prerecorded video content."

Guideline 1.2.3 is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#audio-description-or-media-alternative-prerecorded).

- Prerecorded video content must have an audio description or a full text alternative (media alternative).
- Audio descriptions narrate important visual information for users who are blind or have low vision.
- Media alternatives provide a complete text version of the video content.

This ensures everyone can access the information in your videos, regardless of vision ability.

---

## **Why Does It Matter?**

- **Inclusivity:** Over [7.6 million people in the US have vision loss](https://www.cdc.gov/visionhealth/data/index.html) severe enough to impact daily activities—audio descriptions make video content accessible to users who are blind or have low vision.
- **Accessibility Gap:** Only [15% of online video content includes audio descriptions](https://webaim.org/projects/million/), leaving 85% inaccessible to blind users.
- **Universal Benefit:** [Studies show 40% better retention](https://www.ofcom.org.uk/research-and-data/tv-radio-and-on-demand/accessibility-research) when visual information is reinforced verbally—audio descriptions improve comprehension for sighted users too.
- **Legal Compliance:** This is a Level A requirement in WCAG 2.2 and referenced in accessibility laws worldwide.

For more, see [WebAIM's audio description guide](https://webaim.org/techniques/captions/#descriptions).

---

## **What You Can Do Right Now**

Don't wait for a compliance audit. Here's how to start:

- **🔍 Audit**: Run a 3-minute check—close your eyes and listen to one video. Can you picture what's happening? If critical visual info is missing, audio descriptions are needed.
- **🛠️ Implement**: Start with one high-traffic video. Use the implementation examples below to add an audio description track or full text alternative.
- **📢 Escalate**: Share this checklist with your video production team. Make audio descriptions part of your content workflow, not a post-launch fix.
- **📚 Learn**: Bookmark this guide for your next video release. Reference the quality checklist before publishing any tutorial or demonstration video.

---

## **What Needs Audio Description or Media Alternative?**

- Prerecorded video content (webinars, tutorials, interviews)
- Online courses and training videos
- Marketing and promotional videos

All such media must have an audio description or a full text alternative.

---

## **How to Provide Audio Description or Media Alternative**

- Add an audio description track to your videos
- Provide a full text transcript describing all important visual information
- Make audio descriptions and transcripts easy to find and use
- Ensure alternatives are accurate and complete

For more, see the [W3C's audio description docs](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html).

---

## **Implementation Examples**

Here's how to add audio descriptions to your videos:

### HTML5 Video with Audio Description Track

```html
<video controls>
  <source src="tutorial.mp4" type="video/mp4" />
  <track
    kind="descriptions"
    src="tutorial-descriptions.vtt"
    srclang="en"
    label="English Audio Descriptions"
  />
</video>
```

**Note**: Use `kind="descriptions"` for audio descriptions (not `kind="captions"`).

### YouTube: Separate Audio Description Version

⚠️ **Platform Limitation**: YouTube doesn't support separate AD tracks like it does for captions. You must upload a separate video with audio descriptions baked in.

```html
<!-- Link to version with baked-in audio descriptions -->
<a href="https://www.youtube.com/watch?v=VIDEO_ID_AD">Watch with Audio Descriptions</a>
```

### Media Alternative (Full Text Transcript)

```html
<details>
  <summary>Full Text Alternative (Audio + Visual Description)</summary>
  <p>
    <strong>[00:00-00:15]</strong> Narrator: "Welcome to our tutorial."
    <em>Visual: Blue logo fades in, white text appears reading "Getting Started."</em>
  </p>
  <p>
    <strong>[00:16-00:30]</strong> Narrator: "First, click the menu icon."
    <em>Visual: Mouse cursor moves to hamburger icon in top-left, clicks to reveal menu.</em>
  </p>
</details>
```

### Before/After Comparison

| Status      | What It Looks Like                                                                           |
| ----------- | -------------------------------------------------------------------------------------------- |
| ❌ **Bad**  | Video with no audio description or transcript—blind users miss visual demonstrations         |
| ✅ **Good** | Video with audio description track or linked media alternative—all visual info is accessible |

---

## **How to Test Your Audio Descriptions**

### Quick 3-Minute Test

1. **Close your eyes** and listen to the video. Can you understand what's happening visually?
2. **Identify critical moments**: Are actions, on-screen text, facial expressions, or scene changes described?
3. **Check timing**: Do descriptions fit naturally between dialogue, or do they overlap/interrupt speech?

### Quality Checklist

Your audio descriptions should:

- ✅ Narrate important visual information (actions, text, expressions)
- ✅ Not overlap dialogue or critical audio
- ✅ Include speaker/character identifications ("A woman in a blue jacket enters...")
- ✅ Read on-screen text aloud (menu items, error messages, captions)
- ✅ Describe scene changes and transitions
- ✅ Be objective (describe what's seen, not interpretation)
- ✅ Include both audio + visual content in media alternatives

### Testing Tools

- **Manual review**: Work with a colleague who is blind or has low vision
- **Screen reader test**: Use VoiceOver (Mac) or NVDA (Windows) to verify AD track loads
- **Training resources**: [Described and Captioned Media Program (DCMP)](https://dcmp.org/learn/captioningkey/639)

---

## **Common Questions**

### Do auto-generated audio descriptions exist?

AI tools are emerging but unreliable—they often miss context or describe decorative elements. Manual review is required. Services like [Descriptive Video Works](https://www.descriptivevideo.com/) provide professional audio description.

### When is audio description required vs. optional?

Level A (1.2.3) requires AD _or_ media alternative. Level AA (1.2.5) requires AD specifically for all prerecorded video. If visual info is critical to understanding, AD is required at Level A.

### What's the difference between audio description and extended audio description (1.2.7)?

Standard AD fits between dialogue. Extended AD pauses the video to insert longer descriptions. Extended AD is Level AAA (1.2.7) and used when dialogue is too dense for standard AD.

### Can I provide a transcript instead of audio descriptions?

Yes—at Level A (1.2.3), a full media alternative (text transcript of both audio + visual) satisfies the requirement. At Level AA (1.2.5), audio description is specifically required.

### Do decorative visuals need description?

No. Describe visuals that convey information or context. Skip purely decorative elements (background patterns, stock footage that doesn't add meaning).

---

## **Common Mistakes to Avoid**

- No audio description or media alternative for video content
- Incomplete or inaccurate descriptions
- Hiding audio descriptions or transcripts from users
- Not testing with users who are blind or have low vision

Audit your site regularly and use accessibility checkers to ensure all video content has proper alternatives. For more, see the DCMP's comprehensive [Guidelines and Best Practices for Captioning Educational Video](https://dcmp.org/learn/captioningkey), which also covers audio description and media alternatives for accessibility.

---

## **Differences Between A, AA, and AAA for Guideline 1.2.3 in WCAG 2.2**

- **Level A:** Requires audio description or media alternative for all prerecorded video content. This is the core requirement for 1.2.3 and is mandatory for basic accessibility.
- **Level AA:** Guideline 1.2.3 is Level A only. For Level AA, see [WCAG 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html), which _requires_ audio description specifically (media alternative alone does not satisfy 1.2.5).
- **Level AAA:** For Level AAA, see [WCAG 1.2.7 Extended Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html), which requires extended audio description when pauses are needed.

For more, see the [W3C’s official documentation for 1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html).

---

## **Quick Checklist**

- All prerecorded video content has an audio description or media alternative
- Audio descriptions and transcripts are accurate and complete
- Alternatives are easy to find and use
- Tested with users and assistive technology

---

## **Summary**

Guideline 1.2.3 ensures prerecorded video is accessible to users who are blind or have low vision. Provide an audio description track or a full text transcript for every video. Build this into your production workflow from the start.
