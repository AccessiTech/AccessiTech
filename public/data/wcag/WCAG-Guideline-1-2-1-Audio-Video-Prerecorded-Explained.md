<!--
title: 1.2.1 - Audio-only and Video-only (Prerecorded)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.2.1 (Audio-only and Video-only, Prerecorded)—what it means, why it matters, and how to make media content accessible.
keywords: wcag 1.2.1, audio-only, video-only, accessibility, captions, transcripts, web standards, digital inclusion
image: WCAG-Series-1.2.1.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.2.1 Explained, Audio-only and Video-only (Prerecorded)"
status: published
date: 2025-07-01
excerpt: This guideline ensures audio-only and video-only content is accessible with captions or transcripts.
next: /wcag/WCAG-Guideline-1-2-2-Captions-Prerecorded-Explained, Guideline 1.2.2 - Captions (Prerecorded)
previous: /wcag/WCAG-Guideline-1-1-1-Non-text-Content-Explained, Guideline 1.1.1 - Non-text Content
-->

# **WCAG Guideline 1.2.1: Audio-only and Video-only (Prerecorded) Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.2: Time-based Media**

Guideline 1.2 focuses on making time-based media—like audio and video—accessible to everyone. This includes providing alternatives such as transcripts, captions, and audio descriptions so users with different abilities can access the content.

## **What Is Guideline 1.2.1 Audio-only and Video-only (Prerecorded)?**

> "For prerecorded audio-only and prerecorded video-only media, an alternative is provided."

Guideline 1.2.1 is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#audio-only-and-video-only-prerecorded).

**This guideline ensures users who are deaf, hard-of-hearing, blind, or have low vision can access audio-only and video-only content.**

- **Audio-only alternatives help**: Deaf and hard-of-hearing users who cannot hear the content
- **Video-only alternatives help**: Blind and low-vision users who cannot see the visual content

⚠️ **Scope Note**: This guideline (1.2.1) covers **audio-only** (podcasts) and **video-only** (silent animations) content. It does NOT cover regular video with both audio and visuals—those require [captions (1.2.2)](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded) for deaf users and [audio descriptions (1.2.3)](https://www.w3.org/WAI/WCAG22/quickref/#audio-description-or-media-alternative-prerecorded) for blind users.

---

### **Quick Comparison**

| Media Type                 | User Need                    | Required Alternative | Helps                |
| -------------------------- | ---------------------------- | -------------------- | -------------------- |
| **Audio-only** (podcast)   | Can't hear the audio         | Transcript           | Deaf/hard-of-hearing |
| **Video-only** (animation) | Can't see the visual content | Text description     | Blind/low-vision     |

---

## **Why Does It Matter?**

- **Inclusivity:** Over [15% of US adults (37.5 million people) report having trouble hearing](https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing), and [7.6 million people in the US have vision loss](https://www.cdc.gov/visionhealth/data/index.html) severe enough to impact daily activities. Without transcripts and text descriptions, these users cannot access audio-only and video-only content.
- **Accessibility Gap:** Research shows that only [~28% of podcast episodes include transcripts](https://www.3playmedia.com/blog/2023-state-of-captioning-report/), leaving 72% of audio-only content inaccessible to deaf and hard-of-hearing users. Video-only content (silent animations, instructional visuals) fares even worse—most platforms don't even offer a description field.
- **Universal Benefit:** Transcripts improve SEO, enable content searchability, and help users in noisy environments, quiet spaces, or when media playback is restricted.
- **Legal Compliance:** This is a Level A requirement in WCAG 2.2 and referenced in accessibility laws worldwide.

For more, see [WebAIM's media accessibility guide](https://webaim.org/techniques/captions/).

---

## **What You Can Do Right Now**

Don't wait for a compliance audit. Here's how to start:

- **🔍 Audit**: Pick one podcast or audio-only episode—can a deaf user access it via transcript? For video-only content (silent animations), can a blind user understand what's happening from a text description?
- **🛠️ Implement**: Start with your highest-traffic audio or video file. Use the implementation examples below to add a transcript or text description.
- **📢 Escalate**: Share this checklist with your content team. Make alternatives part of your standard publishing workflow, not a post-launch fix.
- **📚 Learn**: Bookmark this guide for your next content release. Reference the quality checklist before publishing any podcast, webinar recording, or video-only demonstration.

---

## **What Needs Alternatives?**

- Prerecorded audio-only content (podcasts, interviews)
- Prerecorded video-only content (silent animations, instructional videos without sound)

All such media must have a text transcript or audio description that conveys the same information.

---

## **How to Provide Alternatives**

- Provide a text transcript for all prerecorded audio-only content
- Provide a text or audio description for all prerecorded video-only content
- Make transcripts and descriptions easy to find and use
- Ensure alternatives are accurate and complete

For more, see the [W3C's media alternatives docs](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html) and [WebAIM's transcript guidance](https://webaim.org/techniques/captions/#transcripts).

---

## **Implementation Examples**

**Remember**: Audio-only alternatives help **deaf and hard-of-hearing users**; video-only alternatives help **blind and low-vision users**.

### Audio-only: Podcast Transcript Example

**Best for**: Podcast episodes, audio interviews, recorded webinars (audio-only)

```html
<audio controls>
  <source src="episode-42.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<details>
  <summary>Full Transcript</summary>
  <p>
    <strong>[00:00-00:15]</strong><br />
    <strong>Host:</strong> Welcome to Episode 42. Today we're talking about accessibility in
    podcasting.
  </p>
  <p>
    <strong>[00:16-00:30]</strong><br />
    <strong>Guest:</strong> Thanks for having me. This is an important topic that often gets
    overlooked.
  </p>
  <p>
    <strong>[00:31-00:45]</strong><br />
    <strong>Host:</strong> Let's start with the basics. Why do transcripts matter?
  </p>
</details>
```

**Format requirements**:

- Include timestamps for reference
- Label speakers clearly
- Place transcript near audio player for easy discovery
- Use `<details>` to allow users to expand/collapse

---

### Video-only: Silent Animation Description Example

**Best for**: Silent animations, visual demonstrations without narration, instructional graphics

```html
<video controls>
  <source src="animation.mp4" type="video/mp4" />
  Your browser does not support the video element.
</video>

<div aria-describedby="video-description">
  <p id="video-description">
    <strong>Visual Description:</strong> A blue circle appears in the center of the screen and
    expands outward. As it expands, it changes color from blue to green. Three smaller yellow
    circles emerge from the edges and orbit the green circle. Text fades in reading "Data flows from
    source to destination." The yellow circles converge at the center, merge into the green circle,
    and the entire graphic fades out.
  </p>
</div>
```

**Format requirements**:

- Describe all significant visual events
- Include timing and sequence information
- Note color changes, movement, and on-screen text
- Use `aria-describedby` to associate description with video

---

### YouTube-specific Guidance

**Audio-only content on YouTube**:

1. Upload your audio file as a video (with static image or waveform visual)
2. Add transcript in the **Description** field (YouTube displays it below the video)
3. **OR** upload a properly formatted `.vtt` caption file via YouTube Studio → Subtitles → Upload file

**Video-only content on YouTube**:

1. Add visual description in the **Description** field
2. **OR** create a pinned comment with the full description
3. Note: YouTube does not support separate audio description tracks—you must either bake descriptions into the audio or provide text

---

### Platform Limitations

| Platform         | Audio Transcript Support          | Video Description Support               |
| ---------------- | --------------------------------- | --------------------------------------- |
| **YouTube**      | Description field, caption upload | Description field only (no AD track)    |
| **Podcast apps** | Show notes field (varies by app)  | N/A                                     |
| **HTML5 video**  | Manual text block (best practice) | Manual text block or `aria-describedby` |
| **Vimeo**        | Description field, caption upload | Description field, no native AD support |
| **SoundCloud**   | Description field (manual)        | N/A                                     |

**Key takeaway**: Most platforms require manual transcript/description text blocks. Native support for `<track kind="descriptions">` exists in HTML5 but requires JavaScript players (see [WCAG 1.2.3 guide](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html) for details).

---

## **How to Test Your Alternatives**

**Remember**: Audio-only alternatives are for **deaf users** (who can't hear); video-only alternatives are for **blind users** (who can't see).

### Quick Tests

**For audio-only content (podcast, interview)**:

1. **Mute the audio** and try to access the content via transcript only. Can you follow the conversation?
2. **Check completeness**: Does the transcript include all spoken content, speaker labels, and sound effects that convey information?
3. **Verify timestamps**: Can you navigate to specific moments using timestamp references?

**For video-only content (silent animation, visual demo)**:

1. **Close your eyes** and try to understand the visual content from the text description alone. Can you picture what's happening?
2. **Check sequence**: Does the description note the order of visual events, timing, and transitions?
3. **Verify completeness**: Are all significant visual elements (color changes, movement, on-screen text) described?

### Quality Checklist

Your alternatives should:

- ✅ Be accurate (no missing or incorrect content)
- ✅ Be complete (include all information conveyed by the media)
- ✅ Be easy to find (placed near the media player, clearly labeled)
- ✅ Include timestamps or sequence markers for reference
- ✅ Be tested with actual users (deaf users for transcripts, blind users for descriptions)

### Testing Tools

- **Manual review**: Work with users who are deaf, hard-of-hearing, blind, or have low vision
- **Screen reader test**: Use VoiceOver (Mac) or NVDA (Windows) to verify transcripts/descriptions are accessible
- **Automated checks**: [WAVE browser extension](https://wave.webaim.org/extension/) flags missing alternative text
- **Transcript accuracy**: [3Play Media's free checker](https://www.3playmedia.com/) validates transcript format

---

## **Common Questions**

### What's the difference between 1.2.1 and 1.2.3?

- **1.2.1** (this guide) = Audio-only and video-only media need alternatives (transcripts for audio-only; descriptions for video-only)
- **1.2.3** = Regular video (audio + visual) needs audio descriptions for blind users

If your video has both audio and visuals, you need **both** captions ([1.2.2](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded)) and audio descriptions ([1.2.3](https://www.w3.org/WAI/WCAG22/quickref/#audio-description-or-media-alternative-prerecorded)).

### Are auto-generated transcripts acceptable?

Not without review. Auto-generated transcripts (YouTube auto-captions, AI transcription services) frequently contain errors—especially with technical terms, accents, and background noise. Manual review and correction are required for WCAG compliance.

### Do decorative video-only animations need descriptions?

No. If the visual content is purely decorative (background animation, stock footage that doesn't convey information), it does not require a description. Only describe visuals that are **informational** or **functional**.

### Does a YouTube auto-transcript satisfy this guideline?

No. YouTube's auto-generated captions are not accurate enough for compliance. You must upload a corrected transcript or caption file, or include a full transcript in the video description.

### What about audio-only content with no speech (instrumental music)?

If the audio-only content is purely ambient or decorative (background music with no informational purpose), it does not require a transcript. If the music conveys information (e.g., a tutorial on chord progressions), describe the musical content in text.

### Can I satisfy 1.2.1 with a link to a separate transcript page?

Yes, as long as the link is clearly labeled and easy to find. Best practice is to include the transcript directly below the media player, but a well-labeled link to a dedicated transcript page is acceptable.

### Do I need both a transcript AND captions?

Not for 1.2.1. Audio-only content requires a transcript **OR** captions. Most platforms make transcripts easier to implement. For regular video (audio + visuals), you need captions ([1.2.2](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded))—not covered by 1.2.1.

---

## **Common Mistakes to Avoid**

- No transcript for audio-only content
- No description for video-only content
- Alternatives that are incomplete or inaccurate
- Hiding transcripts or descriptions from users
- Relying on auto-generated transcripts without manual review
- Providing only a "Download transcript" link without displaying it on the page

Audit your site regularly and use accessibility checkers to ensure all media has proper alternatives. For more, see [WebAIM's guide to captions, transcripts, and audio descriptions](https://webaim.org/techniques/captions/), which covers best practices for making audio and video content accessible, and [NIDCD's hearing statistics](https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing) for demographic context on who benefits from transcripts.

---

## **Differences Between A, AA, and AAA for Guideline 1.2.1 in WCAG 2.2**

- **Level A:** Requires alternatives for prerecorded audio-only and video-only content. This is the core requirement for 1.2.1 and is mandatory for basic accessibility.
- **Level AA:** For Guideline 1.2.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AA.
- **Level AAA:** For Guideline 1.2.1, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html).

---

## **Quick Checklist**

- All prerecorded audio-only content has a transcript
- All prerecorded video-only content has a text or audio description
- Alternatives are accurate and complete
- Transcripts and descriptions are easy to find
- Tested with users and assistive technology

---

## **Summary**

Guideline 1.2.1 is essential for making media content accessible to everyone. By providing transcripts and descriptions, you support users with disabilities, improve usability, and meet legal requirements. Make media alternatives a standard part of your content process.
