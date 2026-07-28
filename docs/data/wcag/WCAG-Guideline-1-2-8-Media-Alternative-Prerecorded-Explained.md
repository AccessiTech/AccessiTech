<!--
title: 1.2.8 - Media Alternative (Prerecorded)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.2.8 (Media Alternative, Prerecorded)—what it means, why it matters, and how to provide a full text alternative for…
keywords: wcag 1.2.8, media alternative, video accessibility, web standards, digital inclusion, full text transcript
image: WCAG-Series-1.2.8.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.2.8 Explained, Media Alternative (Prerecorded)"
status: published
date: 2025-07-01
excerpt: Requires a full text alternative for synchronized media, ensuring accessibility for users who cannot access audio or video content.
next: /wcag/WCAG-Guideline-1-2-9-Audio-Only-Live-Explained, Guideline 1.2.9 - Audio-only (Live)
previous: /wcag/WCAG-Guideline-1-2-7-Extended-Audio-Description-Prerecorded-Explained, Guideline 1.2.7 - Extended Audio Description (Prerecorded)
-->

# **WCAG Guideline 1.2.8: Media Alternative (Prerecorded) Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.2: Time-based Media**

Guideline 1.2 focuses on making time-based media—like audio and video—accessible to everyone. This includes providing alternatives such as transcripts, captions, and audio descriptions so users with different abilities can access the content.

## **What Is Guideline 1.2.8 Media Alternative (Prerecorded)?**

> "A full text alternative for synchronized media including any interaction is provided."

Guideline 1.2.8 is a Level AAA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#media-alternative-prerecorded).

**Who this helps**: People who are **deaf-blind** (cannot reliably read captions OR hear audio descriptions) are the primary beneficiaries. This guideline also benefits users with low bandwidth, those who prefer text, and users accessing content offline.

- All prerecorded synchronized media (video with audio) should have a full text alternative that describes all visual and audio content, including interactions.
- Unlike a basic transcript (which covers audio only), a full text alternative includes visual descriptions, on-screen text, actions, speaker identifications, and interactive elements.
- The text alternative should be easy to find and use, and must replace the entire synchronized media experience.

This ensures that users who are deaf-blind can fully understand your media content through a refreshable braille display or screen reader.

---

### ⚠️ **Scope Note: Understanding Media Alternative Guidelines**

WCAG includes three related guidelines for synchronized media alternatives. Here's how they differ:

| Guideline                                                                                                        | Level | Requirement                                                        | When to Use                                       |
| ---------------------------------------------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------ | ------------------------------------------------- |
| **[1.2.1](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html)**              | A     | Transcript for audio-only or video-only content                    | Basic accessibility for single-media files        |
| **[1.2.3](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html)** | A     | Audio description **OR** full text alternative (your choice)       | Basic synchronized media - you can choose format  |
| **[1.2.5](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)**                      | AA    | Audio description **required**                                     | Industry standard - audio descriptions mandatory  |
| **1.2.8** (this guide)                                                                                           | AAA   | **Comprehensive** full text alternative including all interactions | When users need text to replace entire experience |

**Key distinction**: 1.2.8 requires a **comprehensive text alternative that replaces the entire synchronized media experience**, including visual descriptions, interactive elements, and all on-screen text. A basic transcript (1.2.1) or audio description (1.2.5) alone does **not** satisfy 1.2.8.

---

## **Why Does It Matter?**

**Remember**: This guideline is specifically for **deaf-blind users** who cannot reliably read captions (due to vision loss) or hear audio descriptions (due to hearing loss).

- **Inclusivity:** An estimated [10,000 children in the U.S. are deaf-blind](https://www.nationaldb.org/) (National Deaf-Blind Child Count), with thousands more adults affected. The [Helen Keller National Center (HKNC)](https://www.helenkeller.org/hknc/) is the only national program serving working-age deaf-blind adults and reports serving individuals across all 50 states and U.S. territories. Without comprehensive text alternatives, deaf-blind users miss **both** audio content (dialogue, sound effects) **and** visual content (actions, on-screen text, facial expressions).
- **Bandwidth Access:** Full text alternatives benefit users in low-bandwidth environments (rural areas, developing regions, mobile data caps) where video streaming is prohibitively expensive. Text is [99% smaller than video files](https://www.w3.org/WAI/media/av/transcripts/), making content accessible where bandwidth is limited.
- **Comprehension Benefits:** Research shows that [text alternatives improve comprehension and retention](https://dcmp.org/) for all learners, not just those with disabilities. Users can search, reference, and review text at their own pace.
- **Legal Compliance:** This is a Level AAA requirement in WCAG 2.2 and referenced in accessibility laws including the [Americans with Disabilities Act (ADA)](https://www.ada.gov/resources/web-guidance/) and [European Accessibility Act](https://ec.europa.eu/social/main.jsp?catId=1202).
- **Universal Benefit:** Full text alternatives serve as archival documentation, improve SEO, and provide offline access to content.

For more, see the [W3C's comprehensive Understanding document for 1.2.8](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html) and the [DCMP's guide to accessible media](https://dcmp.org/).

---

### ⚠️ **AAA Level Clarification**

Guideline 1.2.8 is **Level AAA**—aspirational, not required for AA conformance. However, it's considered best practice for:

- **Educational institutions** serving deaf-blind students
- **Government agencies** committed to universal access
- **Organizations serving deaf-blind communities** (Helen Keller Services, state deaf-blind projects)
- **Complex interactive media** where the experience cannot be fully conveyed through audio description alone
- **Long-form educational content** (online courses, training programs, tutorials) where users benefit from searchable, referenceable text
- **Content requiring offline access** (downloadable training materials, archival resources)

While not mandatory for AA, many organizations adopt 1.2.8 as a proactive accessibility commitment. See [HKNC's technology resources](https://www.helenkeller.org/hknc/technology-research-and-innovation-center/) for examples of organizations prioritizing deaf-blind access.

---

## **What You Can Do Right Now**

Don't wait for a compliance audit. Here's how to start:

- **🔍 Audit Your Synchronized Media**: List all prerecorded videos with audio on your site. Identify which ones include interactive elements (quizzes, clickable hotspots, branching scenarios). These **require** full text alternatives under 1.2.8 if you're pursuing AAA. Focus first on educational content and videos serving deaf-blind audiences.
- **🛠️ Create Full Text Alternatives**: Start with one high-priority video. Use the implementation examples below to create a comprehensive text alternative that includes dialogue, sound effects, visual descriptions, on-screen text, speaker identifications, and step-by-step documentation of all interactive elements. Test with a refreshable braille display if available.
- **📢 Escalate to Decision-Makers**: Share this checklist with your content team and leadership. If your organization serves deaf-blind users or has AAA accessibility commitments, make full text alternatives a standard part of your media production workflow—not a post-launch fix.
- **📚 Learn More About Media Alternatives**: Bookmark the [W3C's Media Alternative Techniques (G69)](https://www.w3.org/WAI/WCAG22/Techniques/general/G69) and [DCMP's transcription training](https://dcmp.org/learn/captioningkey). Reference the quality checklist before publishing any tutorial, demonstration, or interactive video.

---

## **What Needs a Media Alternative?**

- Prerecorded synchronized media (video with audio)
- Any media with both visual and audio content
- **Interactive media** (quizzes, branching scenarios, clickable hotspots)
- Educational videos with on-screen text or demonstrations
- Training videos with step-by-step visual instructions

All such media should have a comprehensive full text alternative that replaces the entire experience.

---

## **Implementation Examples**

**What a Full Text Alternative Includes** (Beyond a Basic Transcript)

A full text alternative for 1.2.8 goes far beyond a basic transcript. It must include:

1. **All dialogue** (word-for-word, with speaker identification)
2. **Sound effects** ("[door slams]", "[phone rings]", "[background music fades]")
3. **Visual actions** ("Instructor clicks the Settings icon in the top-right corner")
4. **On-screen text** (menu items, error messages, captions, titles)
5. **Speaker identification** ("JANE (gesturing toward chart): ...")
6. **Interactive elements** ("At 3:42, viewers are prompted to click 'Next' to continue. Clicking 'Next' advances to Module 2.")
7. **Visual context** (scene changes, camera angles, facial expressions when relevant to meaning)

**Difference Between 1.2.8 and Basic Transcripts**

| Feature              | Basic Transcript (1.2.1) | Full Text Alternative (1.2.8) |
| -------------------- | ------------------------ | ----------------------------- |
| Dialogue             | ✅ Included              | ✅ Included                   |
| Sound effects        | ❌ Often omitted         | ✅ Required                   |
| Visual descriptions  | ❌ Not included          | ✅ Comprehensive              |
| On-screen text       | ❌ Often omitted         | ✅ All text read aloud        |
| Interactive elements | ❌ Not documented        | ✅ Step-by-step instructions  |
| Scene changes        | ❌ Not described         | ✅ Described                  |
| Usable by            | Deaf users (with video)  | Deaf-blind users (text-only)  |

---

### Format Options for Full Text Alternatives

You can provide the text alternative in multiple formats:

1. **Adjacent HTML page** (most common—link from video page)
2. **Expandable section** below the video (collapsible `<details>` element)
3. **Downloadable PDF or TXT** (for offline access)
4. **Same page with clear heading** ("Full Text Alternative for [Video Title]")

See [W3C Technique G69](https://www.w3.org/WAI/WCAG22/Techniques/general/G69) for implementation guidance.

---

### Template Structure with Example

```markdown
Full Text Alternative for "Getting Started with Our Platform" (5:30 video)

[00:00 - 00:15]  
Visual: Blue logo fades in on white background. Text appears reading "Getting Started."  
Audio: Upbeat music plays.

NARRATOR: Welcome to our platform tutorial.

[00:16 - 00:45]  
Visual: Screen shows the main dashboard. Mouse cursor moves to hamburger icon (three horizontal lines) in top-left corner.  
Audio: [Mouse click]  
Visual: Side menu slides open, revealing options: Home, Projects, Settings, Help.  
NARRATOR: First, click the menu icon to access navigation.

[00:46 - 01:30]  
Interactive Element: At 00:50, video pauses and displays prompt: "Where would you like to go first?" with three buttons: "Projects", "Settings", "Help".  
User Action Required: Click one of the three buttons to continue.  
Result: Clicking "Projects" advances to Module 2 (Project Management). Clicking "Settings" jumps to Module 3 (Account Configuration). Clicking "Help" opens support documentation in a new tab.

[Continue for entire video duration...]

End of Full Text Alternative
```

---

### When to Use 1.2.8 vs. Combining Other Guidelines

**Use 1.2.8 (comprehensive full text alternative) when**:

- Your audience includes deaf-blind users
- Media includes interactive elements (quizzes, branching)
- You're pursuing AAA conformance
- Users need offline or low-bandwidth access

**Combining 1.2.1 + 1.2.5 may be sufficient when**:

- You're targeting AA conformance only
- Media has no interactive elements
- You can provide separate transcript (1.2.1) + audio description (1.2.5)
- Deaf-blind users are not a primary audience

For most organizations, **1.2.1 + 1.2.5 satisfies AA requirements**. Move to 1.2.8 when pursuing AAA or serving deaf-blind communities. See the [Scope Note comparison table](#scope-note-understanding-media-alternative-guidelines) above for full guidance.

---

## **How to Test Your Media Alternatives**

**Remember**: You're testing for **deaf-blind users** who cannot see the screen OR hear audio. The text alternative must replace the entire experience.

### Quick 5-Minute Test

1. **Close your eyes and mute the video**. Read only the text alternative. Can you understand what happens **both** visually **and** auditorily?
2. **Check completeness**: Does the text alternative include dialogue, sound effects, visual actions, on-screen text, and all interactive elements?
3. **Test interactions**: If the video includes quizzes, clickable hotspots, or branching scenarios, does the text alternative explain what happens when each option is selected?
4. **Verify timing**: Are time markers included so users can reference specific moments?

### Quality Checklist

Your full text alternative should:

- ✅ Include all dialogue with speaker identification
- ✅ Describe all significant sound effects (`[door slams]`, `[background music begins]`)
- ✅ Describe all visual actions (`Instructor clicks the Save button`)
- ✅ Read all on-screen text aloud (menu items, error messages, captions)
- ✅ Document all interactive elements with step-by-step instructions
- ✅ Include time markers for key moments (`[00:45]`, `[02:30]`)
- ✅ Describe scene changes and visual context when relevant
- ✅ Be sequenced in the same order as the video
- ✅ Provide a complete stand-alone experience without requiring audio or video access

### Deaf-Blind User Testing

- **Braille display test**: If possible, test with a refreshable braille display to ensure the text alternative is readable and complete.
- **User feedback**: Work with individuals who are deaf-blind or with organizations like [Helen Keller National Center](https://www.helenkeller.org/hknc/) to validate your alternatives.
- **Screen reader review**: Use [VoiceOver (Mac)](https://support.apple.com/guide/voiceover/welcome/mac) or [NVDA (Windows)](https://www.nvaccess.org/) to verify the text alternative is exposed and navigable.

### Testing Tools and Resources

- **Manual review**: The gold standard—read the text alternative without accessing the video
- **Completeness audit**: [W3C's ACT Rules for 1.2.8](https://www.w3.org/WAI/standards-guidelines/act/rules/1a02b0/proposed/)
- **Professional services**: [Descriptive Video Works](https://www.descriptivevideo.com/), [3Play Media](https://www.3playmedia.com/), [Rev](https://www.rev.com/) (request full text alternative, not basic transcript)
- **Training resources**: [DCMP's Captioning Key](https://dcmp.org/learn/captioningkey) and [transcript authoring guide](https://www.w3.org/WAI/media/av/transcripts/)

---

## **Common Questions**

### What's the difference between a full text alternative (1.2.8) and a basic transcript?

**Short answer**: A basic transcript covers **audio only** (dialogue, sound effects). A full text alternative (1.2.8) covers **audio + visual + interactions**.

**When it matters**:

- **Basic transcript (1.2.1)**: "INSTRUCTOR: Click the Settings button to continue." (Audio captured, but where is the button? What happens when you click it?)
- **Full text alternative (1.2.8)**: "INSTRUCTOR: Click the Settings button to continue. [Visual: Instructor points to gear icon in top-right corner of screen, labeled 'Settings'. Clicking this button opens the Settings panel in the center of the screen, displaying three tabs: Account, Privacy, Notifications.]" (Audio + visual + interaction result)

For deaf-blind users, the basic transcript is incomplete—they need the visual and interactive details to understand the full experience.

### How is 1.2.8 different from combining 1.2.1 (transcript) + 1.2.5 (audio description)?

**Short answer**: 1.2.1 + 1.2.5 provides two **separate** formats (text for audio, spoken narration for visuals). 1.2.8 provides **one unified text** covering everything, including interactions.

**Why 1.2.8 is needed**: Deaf-blind users cannot read captions (vision loss) or hear audio descriptions (hearing loss). They need a single text alternative that includes **everything**: dialogue, sounds, visuals, and interactions. 1.2.1 + 1.2.5 doesn't satisfy this because both formats require sensory access (sight for captions, hearing for audio).

### Is 1.2.8 required for AA conformance?

**No—1.2.8 is Level AAA only.** For AA conformance, you need:

- **1.2.2** (captions for all prerecorded video)
- **1.2.5** (audio description for all prerecorded video)

However, many organizations adopt 1.2.8 as a best practice when serving deaf-blind users, educational audiences, or pursuing universal design.

### Who benefits from full text alternatives?

Primary beneficiaries:

1. **Deaf-blind users** (cannot access captions or audio descriptions)
2. **Low-bandwidth users** (text is 99% smaller than video)
3. **Users with cognitive disabilities** (can read at their own pace, review as needed)
4. **Search engines** (text is indexable, video is not)
5. **All users** (searchable, archival, offline access)

See [W3C's Benefits section](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html#benefits) for the full list.

### How detailed should a full text alternative be?

**Detailed enough to replace the entire synchronized media experience.** If a deaf-blind user reads only your text alternative (without accessing the video), they should understand:

- What was said (dialogue)
- What was heard (sound effects, music)
- What was seen (actions, on-screen text, scene changes)
- What interactions were available (buttons, quizzes, branching paths)

The W3C describes it as reading "something like a book"—a complete, linear narrative of the media experience.

### Can I reuse my 1.2.1 transcript for 1.2.8?

**Only if your transcript already includes visual descriptions and interactive elements.** Most 1.2.1 transcripts cover audio only, making them incomplete for 1.2.8.

**Reuse is possible if your transcript**:

- ✅ Describes all visual actions ("Instructor clicks the Save button")
- ✅ Reads all on-screen text aloud
- ✅ Documents all interactive elements step-by-step
- ✅ Describes scene changes and visual context

If your transcript only covers dialogue and sound effects, you'll need to expand it significantly.

### What about AI-generated alternatives?

AI tools are **emerging but unreliable** for 1.2.8. They often:

- Miss context (describe decorative elements, ignore critical visuals)
- Inaccurately transcribe technical terms
- Omit interactive elements entirely
- Lack speaker identification

**Current best practice**: Use AI as a draft, then **manually review and edit** extensively. Professional transcription services like [3Play Media](https://www.3playmedia.com/), [Rev](https://www.rev.com/), and [Descriptive Video Works](https://www.descriptivevideo.com/) provide human-reviewed full text alternatives.

---

## **Authoring Guidance**

### Transcript Structure Template

Use this template when authoring full text alternatives:

```markdown
Full Text Alternative for [Video Title] ([Duration])

[Time Marker - Time Marker]
Visual: [Describe what's visible on screen]
Audio: [Transcribe dialogue, describe sounds]
SPEAKER NAME: [Dialogue]

[Repeat for each segment...]

Interactive Element at [Time]:
Prompt: [What the viewer sees/hears]
User Action: [What the user must do]
Result: [What happens when each option is selected]

[Continue for entire video...]

End of Full Text Alternative
```

### Professional Transcription Services

These services can create full text alternatives (specify that you need 1.2.8-compliant alternatives, not basic transcripts):

- [3Play Media](https://www.3playmedia.com/) — Offers audio description + full text alternatives
- [Rev](https://www.rev.com/) — Transcription with visual description add-ons
- [Descriptive Video Works](https://www.descriptivevideo.com/) — Specializes in accessible media
- [CaptionSync (ai-media)](https://www.ai-media.tv/captionsync/) — Enterprise captioning and description
- [Aberdeen Broadcast Services](https://www.abdn.com/) — Full-service media accessibility

When requesting services, explicitly state: **"We need a full text alternative compliant with WCAG 1.2.8, including visual descriptions and interactive element documentation."**

### When to Combine Other Techniques vs. Create Comprehensive 1.2.8

**Combining 1.2.1 (transcript) + 1.2.5 (audio description) is sufficient for AA** and covers most use cases.

**Create a comprehensive 1.2.8 alternative when**:

- Your organization serves deaf-blind users
- You're pursuing AAA conformance
- Media includes interactive elements (quizzes, branching, clickable hotspots)
- Users need offline access (low-bandwidth environments, downloadable training materials)
- Content is long-form educational (online courses, training programs) where searchable text adds value

**Use 1.2.1 + 1.2.5 for most other scenarios** (marketing videos, social media, news clips).

### Tools for Creating and Validating Full Text Alternatives

- **Authoring**: Use plain text editors or markdown editors for the text alternative, then convert to HTML
- **Validation**: [W3C's ACT Rules for 1.2.8](https://www.w3.org/WAI/standards-guidelines/act/rules/1a02b0/proposed/)
- **Quality check**: [DCMP's Guidelines for Describing Visual Information](https://dcmp.org/learn/captioningkey/639)
- **Braille testing**: [NFB-NEWSLINE®](https://nfb.org/programs-services/nfb-newsline) (test with braille displays)
- **Screen reader testing**: [NVDA (Windows)](https://www.nvaccess.org/), [VoiceOver (Mac)](https://support.apple.com/guide/voiceover/welcome/mac)

For additional resources, see the [W3C's Making Audio and Video Media Accessible guide](https://www.w3.org/WAI/media/av/).

---

## **Common Mistakes to Avoid**

- No full text alternative for synchronized media with audio
- Providing a basic transcript (audio only) when a comprehensive text alternative (audio + visual + interactions) is required
- Transcript that omits visual actions, on-screen text, or interactive elements
- Hiding the transcript from users (not linking from video page)
- Not updating the transcript when media changes
- Using auto-generated transcripts without human review (often missing visual context)
- Treating 1.2.8 and 1.2.1 as equivalent (they're not—1.2.8 is comprehensive)
- Assuming 1.2.1 + 1.2.5 satisfies 1.2.8 (it doesn't for deaf-blind users who need text-only access)

Audit your site regularly and use accessibility checkers to ensure all media has proper full text alternatives. For more, see [University of Washington's guide to transcripts for accessible media](https://www.washington.edu/accessibility/videos/transcripts/), [W3C's Transcripts guide](https://www.w3.org/WAI/media/av/transcripts/), and [uiAccess's transcript services list](http://www.uiaccess.com/transcripts/transcript_services.html).

---

## **Differences Between A, AA, and AAA for Guideline 1.2.8 in WCAG 2.2**

- **Level A:** No requirement for 1.2.8.
- **Level AA:** No requirement for 1.2.8.
- **Level AAA:** Requires a full text alternative for all prerecorded synchronized media. This is the core requirement for 1.2.8 and is mandatory for AAA conformance.

For more, see the [W3C’s official documentation for 1.2.8 Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html).

---

## **Quick Checklist**

- All prerecorded synchronized media has a full text alternative
- Transcript is accurate and complete
- Transcript is easy to find and use
- Transcript is updated if media changes
- Tested with users and assistive technology

---

## **Summary**

Guideline 1.2.8 is essential for making media content accessible to users who require text alternatives. By providing a full text transcript, you support users with disabilities, improve usability, and meet AAA requirements. Make full text alternatives a standard part of your media production process for maximum inclusion.
