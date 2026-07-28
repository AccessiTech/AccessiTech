<!--
title: 1.2.2 - Captions (Prerecorded)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.2.2 (Captions, Prerecorded)—what it means, why it matters, and how to make video content accessible with captions.
keywords: wcag 1.2.2, captions, video accessibility, accessibility, web standards, digital inclusion, subtitles
image: WCAG-Series-1.2.2.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.2.2 Explained, Captions (Prerecorded)"
status: published
date: 2025-07-01
excerpt: This guideline ensures prerecorded video content is accessible with captions.
next: /wcag/WCAG-Guideline-1-2-3-Audio-Description-Media-Alternative-Explained, Guideline 1.2.3 - Audio Description or Media Alternative (Prerecorded)
previous: /wcag/WCAG-Guideline-1-2-1-Audio-Video-Prerecorded-Explained, Guideline 1.2.1 - Audio-only and Video-only (Prerecorded)
-->

# **WCAG Guideline 1.2.2: Captions (Prerecorded) Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.2: Time-based Media**

Guideline 1.2 focuses on making time-based media—like audio and video—accessible to everyone. This includes providing alternatives such as transcripts, captions, and audio descriptions so users with different abilities can access the content.

## **What Is Guideline 1.2.2 Captions (Prerecorded)?**

> "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such."

Guideline 1.2.2 is a Level A requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded).

- All prerecorded video content with audio must have captions.
- Captions should accurately reflect spoken dialogue and important sounds.
- Captions help users who are deaf, hard of hearing, or in environments where audio can’t be played.

This ensures everyone can access the information in your videos, regardless of hearing ability or environment.

---

## **Why Does It Matter?**

- **Inclusivity:** Captions make video content accessible to users who are deaf or hard of hearing. Over 40 million people in the US are deaf or hard of hearing ([NIDCD](https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing)).
- **Legal Compliance:** This is a Level A requirement in WCAG 2.2 and referenced in accessibility laws worldwide.
- **Usability:** Captions help all users in noisy or quiet environments, or when audio is muted. 85% of Facebook videos are watched with sound off ([Digiday](https://digiday.com/media/silent-world-facebook-video/)).
- **SEO Benefits:** Captions improve video SEO—search engines can index spoken content, making your videos more discoverable.

For more, see [WebAIM's captions guide](https://webaim.org/techniques/captions/).

---

## **What You Can Do Right Now**

After reading this guide, you can take immediate action:

- **🔍 Audit**: Run a 5-minute check on your site—watch one video with sound off. Can you follow along? If not, captions are missing or incomplete.
- **🛠️ Implement**: Copy the code examples below into your next video project. Start with one video as a pilot.
- **📢 Escalate**: Share this checklist with your content team or developers. Make captions a non-negotiable part of your video workflow.
- **📚 Learn**: Bookmark this guide for your next sprint planning. Reference the testing procedures before publishing any video.

---

## **What Needs Captions?**

- Prerecorded video content with audio (webinars, tutorials, interviews)
- Online courses and training videos
- Marketing and promotional videos

All such media must have accurate, synchronized captions.

---

## **How to Provide Captions**

- Use captioning tools or services to create accurate captions
- Ensure captions are synchronized with the audio
- Include speaker identification and important non-speech sounds
- Make captions easy to enable and access

For more, see the [W3C's captions docs](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html).

---

## **Implementation Examples**

### **HTML5 Video with Captions**

```html
<video controls>
  <source src="tutorial.mp4" type="video/mp4" />
  <track kind="captions" src="tutorial-captions.vtt" srclang="en" label="English" default />
  Your browser does not support the video tag.
</video>
```

**What this does**: The `<track>` element links a WebVTT caption file. The `default` attribute ensures captions are visible when the video loads.

### **YouTube Embed with Captions**

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID?cc_load_policy=1"
  title="Video title"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

**Key parameter**: `cc_load_policy=1` forces captions to display by default.

### **Before/After Comparison**

**❌ Bad:** Video player with no caption option visible

```html
<video src="webinar.mp4" controls></video>
```

**✅ Good:** Video player with captions enabled and clearly labeled

```html
<video controls>
  <source src="webinar.mp4" type="video/mp4" />
  <track kind="captions" src="webinar-en.vtt" srclang="en" label="English" default />
</video>
```

---

## **How to Test Your Captions**

### **Quick 3-Minute Test**

1. **Mute the video** and turn on captions. Can you understand the full message without sound?
2. **Play at 2x speed**. Are captions still readable and synchronized?
3. **Check for non-speech sounds**. Do captions include [applause], [music], or [door slam] when relevant to context?

### **Quality Checklist**

- Captions appear automatically or are easy to enable
- Text is synchronized within 1 second of audio
- Speaker names appear when multiple people talk
- Important sound effects are described in [brackets]
- Captions are accurate (>99% word accuracy)
- Line breaks don't split phrases awkwardly
- Caption text is readable (sufficient contrast, not too fast)

### **Tools to Verify**

- **WebAIM WAVE**: Checks for presence of captions
- **YouTube Studio**: Auto-generates timing report for accuracy review
- **Manual review**: Watch with a colleague who is deaf or hard of hearing

---

## **Common Mistakes to Avoid**

- No captions for video content
- Inaccurate or incomplete captions
- Captions that are out of sync with audio
- Hiding captions or making them hard to enable

Audit your site regularly and use accessibility checkers to ensure all video content has proper captions. For more, see the DCMP's comprehensive [Guidelines and Best Practices for Captioning Educational Video](https://dcmp.org/learn/captioningkey), which covers quality, presentation, and accessibility standards for captions.

---

## **Common Questions**

### **Do auto-generated captions (like Zoom or YouTube auto-captions) count?**

**No**—not without review and correction. Auto-captions average 60-70% accuracy and often miss technical terms, names, and context-dependent words. You must review and correct them before publishing.

### **Do I need captions for background music?**

**It depends**. If the music is purely decorative, no. If the music conveys meaning (e.g., suspenseful music in a training scenario, lyrics that reinforce a point), caption it as [upbeat music] or [anxious violin].

### **What about decorative sounds vs. meaningful sounds?**

- **Decorative** (skip): Background office noise, ambient sounds that don't affect comprehension
- **Meaningful** (caption): [phone rings], [door slams], [laughter]—anything that provides context or changes the meaning

### **Do live webinars need captions?**

**Live content** falls under [WCAG 1.2.4 (Captions - Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html), a Level AA requirement. If you record and publish the webinar later, it becomes prerecorded content under 1.2.2—you must add accurate captions before publishing.

### **Can I use captions instead of transcripts?**

**Not always**. Captions are synchronized with video. Transcripts are separate text documents. WCAG 1.2.1 (for audio-only content) requires transcripts. For video with audio, captions satisfy 1.2.2, but providing both captions AND a transcript is best practice—transcripts are easier to search and reference.

---

## **Differences Between A, AA, and AAA for Guideline 1.2.2 in WCAG 2.2**

- **Level A:** Requires captions for all prerecorded audio content in synchronized media. This is the core requirement for 1.2.2 and is mandatory for basic accessibility.
- **Level AA:** For Guideline 1.2.2, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AA.
- **Level AAA:** For Guideline 1.2.2, there are no additional requirements beyond Level A in WCAG 2.2. Meeting Level A for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html).

---

## **Quick Checklist**

- All prerecorded video content with audio has captions
- Captions are accurate and complete
- Captions are synchronized with audio
- Captions include speaker identification and important sounds
- Captions are easy to enable and access

---

## **Summary**

Guideline 1.2.2 is essential for making video content accessible to everyone. By providing accurate captions, you support users with disabilities, improve usability, and meet legal requirements. Make captioning a standard part of your video production process.
