<!--
title: 1.2.3 - Audio Description or Media Alternative (Prerecorded)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.2.3 (Audio Description or Media Alternative, Prerecorded)—what it means, why it matters, and how to make video content…
keywords: wcag 1.2.3, audio description, media alternative, accessibility, video accessibility, web standards, digital inclusion
image: WCAG-Series-1.2.3.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.2.3 Explained, Audio Description or Media Alternative (Prerecorded)"
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

**This guideline ensures blind and low-vision users can access visual information in videos.**

- Prerecorded video content must have an audio description **OR** a full text alternative (media alternative).
- **Audio descriptions** = spoken narration describing important visual information (actions, scene changes, on-screen text, facial expressions).
- **Media alternatives** = complete text transcript including both dialogue AND visual descriptions.

**Who this helps**: People who are **blind or have low vision** and cannot see what's happening on screen.

**Who this does NOT help**: People who are deaf or hard-of-hearing—they need **captions** ([WCAG 1.2.2](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded)), not audio descriptions.

---

### **Quick Comparison**

| User Need                                       | Solution                                    | WCAG Guideline                                                                 |
| ----------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------ |
| **Can't see** the video (blind/low-vision)      | Audio descriptions narrating visual content | **1.2.3** (this guide)                                                         |
| **Can't hear** the video (deaf/hard-of-hearing) | Captions displaying spoken dialogue         | [1.2.2 Captions](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded) |

---

## **Why Does It Matter?**

**Remember**: This guideline is specifically for **blind and low-vision users** who can't see visual content.

- **Inclusivity:** Over [7.6 million people in the US have vision loss](https://www.cdc.gov/visionhealth/data/index.html) severe enough to impact daily activities. Without audio descriptions, blind users miss critical visual information like:
  - Actions and gestures ("speaker points to chart")
  - On-screen text and titles
  - Scene changes and setting details
  - Facial expressions and body language
  - Visual demonstrations in tutorials
- **Accessibility Gap:** Only [15% of online video content includes audio descriptions](https://webaim.org/projects/million/), leaving 85% inaccessible to blind users. Compare this to captions (for deaf users), which are included in ~70% of videos.
- **Universal Benefit:** [Studies show 40% better retention](https://www.ofcom.org.uk/research-and-data/tv-radio-and-on-demand/accessibility-research) when visual information is reinforced verbally—audio descriptions improve comprehension for sighted users too.
- **Legal Compliance:** This is a Level A requirement in WCAG 2.2 and referenced in accessibility laws worldwide.

For more, see [WebAIM's audio description guide](https://webaim.org/techniques/captions/#descriptions).

---

## **What You Can Do Right Now**

Don't wait for a compliance audit. Here's how to start:

- **🔍 Audit**: Run a 3-minute blind user simulation—close your eyes and listen to one video with sound on. Can you picture what's happening **visually**? If critical actions, on-screen text, or scene changes aren't described aloud, blind users are missing that information. _(Note: This is the opposite of a caption test, where you'd mute audio and watch visually.)_
- **🛠️ Implement**: Start with one high-traffic video. Use the implementation examples below to add audio descriptions (for blind users) or full text alternatives.
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

**Remember**: These solutions help **blind and low-vision users** access visual information they can't see. (For deaf users who can't hear, see [WCAG 1.2.2 Captions](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded).)

**Three ways to satisfy WCAG 1.2.3** (choose ONE):

1. ✅ **Separate video with audio descriptions baked in** (most reliable)
2. ✅ **Full text alternative** describing all visual information (easiest to implement)
3. ✅ **HTML5 `<track>` with JavaScript player** (future-ready, requires extra setup)

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

**YouTube users**: Upload a separate video with descriptions baked in. YouTube doesn't support separate description tracks.

```html
<a href="https://www.youtube.com/watch?v=VIDEO_ID_AD">Watch with Audio Descriptions</a>
```

**Production notes**:

- Narrator records description script
- Audio engineer mixes descriptions into natural pauses
- Final video exported with descriptions included
- Works on all platforms and players

---

### Option 2: Full Text Alternative (Media Alternative)

**Why this works**: Provides all audio and visual information in text format. Screen readers can navigate through timestamps, blind users can reference specific moments, and text is searchable.

**Best for**: Short videos, tutorials, instructional content where blind users benefit from reading a complete narrative rather than watching in real-time.

```html
<details>
  <summary>Full Text Alternative (Audio + Visual Description)</summary>
  <p>
    <strong>[00:00-00:15]</strong><br />
    <strong>Narrator:</strong> "Welcome to our tutorial."<br />
    <em
      >Visual: Blue logo fades in on white background. Text appears below reading "Getting Started"
      in bold, dark blue font.</em
    >
  </p>
  <p>
    <strong>[00:16-00:30]</strong><br />
    <strong>Narrator:</strong> "First, click the menu icon."<br />
    <em
      >Visual: Mouse cursor moves from center to top-left corner, hovers over hamburger menu icon
      (three horizontal lines), clicks. Side menu slides in from left showing navigation
      options.</em
    >
  </p>
  <p>
    <strong>[00:31-00:45]</strong><br />
    <strong>Narrator:</strong> "Select 'Settings' from the menu."<br />
    <em
      >Visual: Cursor moves down menu list to "Settings" option (gear icon), clicks. Settings panel
      opens in center of screen.</em
    >
  </p>
</details>
```

**Format requirements**:

- Include timestamps for synchronization
- Describe all significant visual events (actions, text, scene changes)
- Use emphasis tags (`<strong>`, `<em>`) to distinguish narration from visual descriptions
- Place near video player for easy discovery

---

### Option 3: HTML5 Video with Description Track + JavaScript Player

⚠️ **Important - Read Before Implementing**: This approach uses [W3C Technique H96](https://www.w3.org/WAI/WCAG22/Techniques/html/H96), which is an **Advisory technique, not Sufficient**.

**Why it's complex**: While the HTML `<track>` markup is valid and future-ready, **no browser natively supports `kind="descriptions"` playback** as of 2026. Browsers parse the markup but don't play the descriptions automatically.

**What you need**:

- Valid HTML5 `<track>` markup (shown below) **PLUS**
- JavaScript video player library (Video.js, Able Player, or similar)
- Player configuration to read VTT file and synthesize descriptions

**Best for**: Large video libraries where you want centralized description management, plan to use an accessible player, and want blind users to have an equivalent experience to your captioned video setup (same technical approach, different track `kind`).

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

### Advisory vs Sufficient Techniques: What's the Difference?

**WCAG defines two types of techniques**:

- **Sufficient Techniques**: If implemented correctly, you PASS the success criterion. Options 1 and 2 above are Sufficient.
- **Advisory Techniques**: Best practices or future guidance, but **not sufficient on their own**. Option 3 (H96) is Advisory—it requires a JavaScript player to actually work.

**Why include `kind="descriptions"` ([H96](https://www.w3.org/WAI/WCAG22/Techniques/html/H96)) if it doesn't work natively?**

1. It's the **correct semantic markup** for descriptions
2. It **will work** when browsers eventually implement native support
3. It **works today** with accessible players (Video.js, Able Player)
4. It's **future-proof**—your VTT files are reusable across platforms

**The gap**: The `<track kind="descriptions">` spec has existed for 10+ years, but browsers haven't prioritized implementation. Until they do, you need Option 1, Option 2, or Option 3 with a JavaScript player.

For more on WebVTT format, see [MDN's WebVTT specification guide](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format).

---

## **How to Test Your Audio Descriptions**

**Remember**: You're testing for **blind and low-vision users** who can't see the screen.

### Quick 3-Minute Test

1. **Close your eyes** and listen to the video with sound on. Can you understand what's happening **visually**?
   - _(This is the opposite of caption testing, where you'd mute audio and watch the screen.)_
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
- ✅ Include both audio + visual content in media alternatives

### Testing Tools

- **Manual review**: Work with a colleague who is blind or has low vision
- **Screen reader test**: Use VoiceOver (Mac) or NVDA (Windows) to verify AD track loads
- **Training resources**: [Described and Captioned Media Program (DCMP)](https://dcmp.org/learn/captioningkey/639)

---

## **Common Questions**

### Wait, isn't audio description for deaf users?

**No—this is the most common confusion!** Audio descriptions are **for blind and low-vision users** (who can't see the screen). They are **NOT** for deaf and hard-of-hearing users.

Here's the distinction:

- **Audio descriptions** = spoken narration describing **visual** content → for **blind users** who can't see
- **Captions** = text displaying **spoken** dialogue → for **deaf users** who can't hear

If you're looking for deaf/hard-of-hearing accessibility, see [WCAG 1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded).

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
