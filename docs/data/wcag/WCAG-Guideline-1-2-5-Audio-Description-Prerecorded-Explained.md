<!--
title: 1.2.5 - Audio Description (Prerecorded)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.2.5 (Audio Description, Prerecorded)—what it means, why it matters, and how to make prerecorded video content…
keywords: wcag 1.2.5, audio description, accessibility, video accessibility, web standards, digital inclusion
image: WCAG-Series-1.2.5.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.2.5 Explained, Audio Description (Prerecorded)"
status: published
date: 2025-07-01
excerpt: This guideline ensures prerecorded video content is accessible with audio descriptions.
next: /wcag/WCAG-Guideline-1-2-6-Sign-Language-Prerecorded-Explained, Guideline 1.2.6 - Sign Language (Prerecorded)
previous: /wcag/WCAG-Guideline-1-2-4-Captions-Live-Explained, Guideline 1.2.4 - Captions (Live)
-->

# **WCAG Guideline 1.2.5: Audio Description (Prerecorded) Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first WCAG principle is Perceivable. It means content must be available in forms users can perceive. Nothing should be invisible to all senses — sight, hearing, and touch via assistive technology all count.

## **Guideline 1.2: Time-based Media**

Guideline 1.2 makes audio and video content accessible for all. The method is providing alternatives: transcripts, captions, and audio descriptions. Each alternative serves users who cannot access the original format.

## **What Is Guideline 1.2.5 Audio Description (Prerecorded)?**

> "Audio description is provided for all prerecorded video content in synchronized media."

Guideline 1.2.5 is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#audio-description-prerecorded).

**Who this helps**: People who are **blind or have low vision** and cannot see what's happening on screen.

- All prerecorded video content with audio must have an audio description track.
- Audio descriptions narrate important visual information (actions, scene changes, on-screen text, facial expressions).
- Audio descriptions are spoken during natural pauses in dialogue.

This ensures everyone can access the information in your videos, regardless of vision ability.

---

⚠️ **Scope Note: Understanding the Audio Description Guidelines**

WCAG includes three related guidelines for audio descriptions. Here's how they differ:

| Guideline                                                                                                        | Level | Requirement                                                           | When to Use                                                  |
| ---------------------------------------------------------------------------------------------------------------- | ----- | --------------------------------------------------------------------- | ------------------------------------------------------------ |
| **[1.2.3](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html)** | A     | Audio description **OR** full text alternative (your choice)          | Basic accessibility - you can choose which format to provide |
| **1.2.5** (this guide)                                                                                           | AA    | Audio description **required** (no choice)                            | Industry standard - audio descriptions are mandatory         |
| **[1.2.7](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html)**             | AAA   | **Extended** audio description (pauses video for longer descriptions) | When dialogue is too dense for standard descriptions         |

**Key distinction**: 1.2.5 requires actual audio descriptions. A text alternative alone (which satisfies 1.2.3 at Level A) does **not** satisfy 1.2.5.

---

## **Why Does It Matter?**

**Remember**: This guideline is specifically for **blind and low-vision users** who can't see visual content.

- **Inclusivity:** Over [2.2 billion people globally have vision impairment](https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment), with at least 1 billion cases preventable or yet to be addressed. Without audio descriptions, blind users miss critical visual information like:
  - Actions and gestures ("speaker points to chart")
  - On-screen text and titles
  - Scene changes and setting details
  - Facial expressions and body language
  - Visual demonstrations in tutorials
- **Accessibility Gap:** Vision impairment poses an enormous global financial burden, with an [estimated annual cost of US$ 411 billion](https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment) in productivity loss. Audio descriptions reduce barriers to employment and education.
- **Legal Compliance:** This is a Level AA requirement in WCAG 2.2 and referenced in accessibility laws worldwide, including the [Americans with Disabilities Act (ADA)](https://www.ada.gov/resources/web-guidance/) and [European Accessibility Act](https://ec.europa.eu/social/main.jsp?catId=1202).
- **Universal Benefit:** Audio descriptions improve comprehension for sighted users too—reinforcing visual information verbally benefits everyone.

For more, see [WebAIM's audio description guide](https://webaim.org/techniques/captions/#descriptions) and the [W3C's comprehensive Understanding document](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html).

---

## **What You Can Do Right Now**

Don't wait for a compliance audit. Here's how to start:

- **🔍 Audit**: Run a 3-minute blind user simulation—close your eyes and listen to one video with sound on. Can you picture what's happening **visually**? If critical actions, on-screen text, or scene changes aren't described aloud, blind users are missing that information. _(Note: This is different from a caption test, where you'd mute audio and watch visually.)_
- **🛠️ Implement**: Start with one high-traffic video. Use the implementation examples below to add audio descriptions (for blind users) using WebVTT tracks or baked-in narration.
- **📢 Escalate**: Share this checklist with your video production team. Make audio descriptions part of your content workflow, not a post-launch fix.
- **📚 Learn**: Bookmark the [W3C's Description of Visual Information guide](https://www.w3.org/WAI/media/av/description/) and [DCMP's audio description training resources](https://dcmp.org/learn/captioningkey/639). Reference the quality checklist before publishing any tutorial or demonstration video.

---

## **What Needs Audio Description?**

- Prerecorded video content with audio (webinars, tutorials, interviews)
- Online courses and training videos
- Marketing and promotional videos

All such media must have an audio description track.

---

## **How to Provide Audio Description**

**Remember**: These solutions help **blind and low-vision users** access visual information they can't see.

- Add an audio description track to your videos
- Ensure descriptions are accurate and complete
- Make audio descriptions easy to enable and access
- Test with users and assistive technology

For more, see the [W3C's audio description docs](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html).

---

## **Implementation Examples**

**Three ways to satisfy WCAG 1.2.5**:

1. ✅ **Separate video with audio descriptions baked in** (most reliable)
2. ✅ **HTML5 `<track>` with JavaScript player** (requires Video.js or Able Player)
3. ✅ **Extended audio description** (when pauses are too short for standard descriptions)

---

### Option 1: Separate Video with Baked-In Audio Descriptions (Recommended)

**Why this works**: Audio descriptions are permanently embedded in the audio track. Blind users hear visual information narrated alongside dialogue. Works everywhere, no player requirements.

**Best for**: Training videos, marketing content, YouTube uploads where you want blind/low-vision users to access the same video link as sighted users.

```html
<!-- Main video -->
<video controls>
  <source src="tutorial.mp4" type="video/mp4" />
</video>

<!-- Link to described version -->
<p>
  <a href="tutorial-with-descriptions.mp4">Watch version with audio descriptions</a>
</p>
```

**YouTube users**: Upload a separate video with descriptions baked in. [YouTube doesn't support separate description tracks](https://support.google.com/youtube/answer/14122119).

```html
<a href="https://www.youtube.com/watch?v=VIDEO_ID_AD">Watch with Audio Descriptions</a>
```

**Production notes**:

- Narrator records description script
- Audio engineer mixes descriptions into natural pauses
- Final video exported with descriptions included
- Works on all platforms and players

---

### Option 2: HTML5 Video with Description Track + JavaScript Player

⚠️ **Important - Read Before Implementing**: This approach uses [W3C Technique H96](https://www.w3.org/WAI/WCAG22/Techniques/html/H96), which is an **Advisory technique**.

**Why it's complex**: While the HTML `<track>` markup is valid and future-ready, **no browser natively supports `kind="descriptions"` playback** as of 2026. Browsers parse the markup but don't play the descriptions automatically.

**What you need**:

- Valid HTML5 `<track>` markup (shown below) **PLUS**
- JavaScript video player library ([Video.js](https://videojs.com/), [Able Player](https://ableplayer.github.io/ableplayer/), or similar)
- Player configuration to read VTT file and synthesize descriptions

**Best for**: Large video libraries where you want centralized description management and plan to use an accessible player.

#### The HTML Markup

```html
<video id="my-video" controls>
  <source src="tutorial.mp4" type="video/mp4" />
  <track
    kind="descriptions"
    src="tutorial-descriptions.vtt"
    srclang="en"
    label="English Audio Descriptions"
  />
</video>
```

#### The WebVTT File (`tutorial-descriptions.vtt`)

```text
WEBVTT

NOTE Audio descriptions for tutorial video

00:00:00.000 --> 00:00:15.000
Blue logo fades in on white background. Text appears reading "Getting Started."

00:00:16.000 --> 00:00:30.000
Mouse cursor moves to hamburger icon in top-left, clicks to reveal side menu.

00:00:31.000 --> 00:00:45.000
Cursor selects "Settings" option. Settings panel opens in center of screen.
```

**Format notes**:

- Descriptions should be concise (fit in natural pauses)
- Focus on essential visual information only
- Avoid redundancy with existing narration

For more on WebVTT format, see [MDN's WebVTT specification guide](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format).

#### Required: JavaScript Player Setup

**Using Video.js** (most popular):

```html
<!-- 1. Include Video.js CSS and JS -->
<link href="https://vjs.zencdn.net/8.23.9/video-js.min.css" rel="stylesheet" />
<script src="https://vjs.zencdn.net/8.23.9/video.min.js"></script>

<!-- 2. Add Video.js class to video element -->
<video id="my-video" class="video-js" controls>
  <source src="tutorial.mp4" type="video/mp4" />
  <track kind="descriptions" src="tutorial-descriptions.vtt" srclang="en" label="English" />
</video>

<!-- 3. Initialize player -->
<script>
  var player = videojs('my-video');
</script>
```

**Using Able Player** (accessibility-focused):

```html
<!-- Include Able Player -->
<script src="https://cdn.jsdelivr.net/npm/ableplayer@latest/build/ableplayer.min.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/ableplayer@latest/build/ableplayer.min.css"
/>

<!-- Video with data-able-player attribute -->
<video data-able-player>
  <source src="tutorial.mp4" type="video/mp4" />
  <track kind="descriptions" src="tutorial-descriptions.vtt" srclang="en" />
</video>
```

**Player resources**:

- [Video.js documentation](https://videojs.com/)
- [Able Player documentation](https://ableplayer.github.io/ableplayer/)

---

### Option 3: Extended Audio Description

When dialogue is too dense for standard descriptions, use **extended audio description** ([WCAG 1.2.7, Level AAA](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html)). This pauses the video to insert longer descriptions.

**When to use**:

- Fast-paced dialogue with no natural pauses
- Complex visual sequences requiring detailed narration
- Critical visual information can't fit between dialogue

**Tools**:

- SMIL (Synchronized Multimedia Integration Language)
- Custom video players with pause/resume capability
- See [W3C's SMIL techniques](https://www.w3.org/TR/SMIL-access/)

---

## **How to Test Your Audio Descriptions**

**Remember**: You're testing for **blind and low-vision users** who can't see the screen.

### Quick 3-Minute Test

1. **Close your eyes** and listen to the video with sound on. Can you understand what's happening **visually**?
   - _(This is different from caption testing, where you'd mute audio and watch the screen.)_
2. **Identify critical visual moments**: Are actions, on-screen text, facial expressions, or scene changes described aloud?
3. **Check timing**: Do descriptions fit naturally between dialogue, or do they overlap/interrupt speech?

### Quality Checklist

Your audio descriptions should:

- ✅ Narrate important visual information (actions, text, expressions)
- ✅ Not overlap dialogue or critical audio
- ✅ Include speaker/character identifications ("A woman in a blue jacket enters...")
- ✅ Read on-screen text aloud (menu items, error messages, captions)
- ✅ Describe scene changes and transitions
- ✅ Be objective (describe what's seen, not interpretation)
- ✅ Fit within natural pauses in dialogue

### Testing Tools and Resources

- **Manual review**: Work with a colleague who is blind or has low vision
- **Screen reader test**: Use [VoiceOver (Mac)](https://support.apple.com/guide/voiceover/welcome/mac) or [NVDA (Windows)](https://www.nvaccess.org/) to verify descriptions track is exposed and accessible
- **Training resources**: [Described and Captioned Media Program (DCMP)](https://dcmp.org/learn/captioningkey/639)
- **Professional services**: [Descriptive Video Works](https://www.descriptivevideo.com/) and [Audio Description Project](https://www.acb.org/adp)

---

## **Common Questions**

### Wait, isn't audio description for deaf users?

**No—this is the most common confusion!** Audio descriptions are **for blind and low-vision users** (who can't see the screen). They are **NOT** for deaf and hard-of-hearing users.

Here's the distinction:

- **Audio descriptions** = spoken narration describing **visual** content → for **blind users** who can't see
- **Captions** = text displaying **spoken** dialogue → for **deaf users** who can't hear

If you're looking for deaf/hard-of-hearing accessibility, see [WCAG 1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded).

### What's the difference between 1.2.3 and 1.2.5?

**Short answer**: 1.2.3 (Level A) allows **either** audio description **or** a text alternative. 1.2.5 (Level AA) **requires** audio description—a text alternative alone doesn't satisfy it.

**When it matters**:

- **Level A compliance (1.2.3)**: You can provide a full text transcript describing both audio and visual content, and you're compliant.
- **Level AA compliance (1.2.5)**: You **must** provide actual audio descriptions. A text transcript alone is not sufficient.

See the [scope note table](#what-is-guideline-125-audio-description-prerecorded) above for the full comparison of 1.2.3, 1.2.5, and 1.2.7.

### Do auto-generated audio descriptions exist?

AI tools are emerging but unreliable—they often miss context or describe decorative elements. Manual review is required. Services like [Descriptive Video Works](https://www.descriptivevideo.com/) and the [Audio Description Project](https://www.acb.org/adp) provide professional audio description.

### What's the difference between standard and extended audio description?

**Standard audio description** ([WCAG 1.2.5](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)) fits between dialogue. **Extended audio description** ([WCAG 1.2.7, Level AAA](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html)) pauses the video to insert longer descriptions. Extended AD is used when dialogue is too dense for standard AD.

### Can I use YouTube's auto-generated descriptions?

YouTube does **not** support audio descriptions tracks. You must upload a separate video with descriptions baked into the audio track. See [YouTube's accessibility documentation](https://support.google.com/youtube/answer/14122119) for current options.

### Do decorative visuals need description?

No. Describe visuals that convey information or context. Skip purely decorative elements (background patterns, stock footage that doesn't add meaning).

### How do I know if my descriptions are high quality?

Use the [Audio Description Coalition's standards](https://www.acb.org/adp/guidelines.html) and the [DCMP's Guidelines for Describing STEM Content](https://dcmp.org/learn/530). Test with blind users before publishing.

---

## **Common Mistakes to Avoid**

- No audio description for video content
- Incomplete or inaccurate descriptions (missing key visual events)
- Hiding audio descriptions from users (no toggle or separate link)
- Not testing with users who are blind or have low vision
- Using auto-generated descriptions without human review
- Providing text-only alternative for Level AA (doesn't satisfy 1.2.5)
- Overlapping descriptions with critical dialogue

Audit your site regularly and use accessibility checkers to ensure all video content has proper audio descriptions. For more, see the [FCC's Audio Description requirements](https://www.fcc.gov/audio-description) and the [W3C's Description of Visual Information guide](https://www.w3.org/WAI/media/av/description/).

---

## **Differences Between A, AA, and AAA for Guideline 1.2.5 in WCAG 2.2**

- **Level A:** No requirement for 1.2.5.
- **Level AA:** Requires audio description for all prerecorded video content in synchronized media. This is the core requirement for 1.2.5 and is mandatory for AA conformance.
- **Level AAA:** For Guideline 1.2.5, there are no additional requirements beyond Level AA in WCAG 2.2. Meeting Level AA for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html).

---

## **Quick Checklist**

- All prerecorded video content with audio has an audio description track
- Audio descriptions are accurate and complete
- Audio descriptions are easy to enable and access
- Tested with users and assistive technology

---

## **Summary**

Guideline 1.2.5 ensures prerecorded video is accessible to users who are blind or have low vision. Add an audio description track to every video. Make this a standard step in your production process.
