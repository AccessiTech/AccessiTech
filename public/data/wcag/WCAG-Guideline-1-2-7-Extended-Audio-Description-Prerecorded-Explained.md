<!--
title: 1.2.7 -  Extended Audio Description (Prerecorded)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.2.7 (Extended Audio Description, Prerecorded)—what it means, why it matters, and how to make video content accessible…
keywords: wcag 1.2.7, extended audio description, video accessibility, web standards, digital inclusion, blind users
image: WCAG-Series-1.2.7.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.2.7 Explained, Extended Audio Description (Prerecorded)"
status: published
date: 2025-07-01
excerpt: Requires extended audio descriptions for prerecorded video, aiding users who are blind or have low vision.
next: /wcag/WCAG-Guideline-1-2-8-Media-Alternative-Prerecorded-Explained, Guideline 1.2.8 - Media Alternative (Prerecorded)
previous: /wcag/WCAG-Guideline-1-2-6-Sign-Language-Prerecorded-Explained, Guideline 1.2.6 - Sign Language (Prerecorded)
-->

# **WCAG Guideline 1.2.7: Extended Audio Description (Prerecorded) Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first WCAG principle is Perceivable. It means content must be available in forms users can perceive. Nothing should be invisible to all senses — sight, hearing, and touch via assistive technology all count.

## **Guideline 1.2: Time-based Media**

Guideline 1.2 makes audio and video content accessible for all. The method is providing alternatives: transcripts, captions, and audio descriptions. Each alternative serves users who cannot access the original format.

## **What Is Guideline 1.2.7 Extended Audio Description (Prerecorded)?**

> "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media."

Guideline 1.2.7 is a Level AAA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#extended-audio-description-prerecorded).

**Who this helps**: People who are **blind or have low vision** and need more comprehensive descriptions than standard audio description can provide.

- All prerecorded video content with audio should have extended audio description if standard audio description is not sufficient.
- Extended audio description **pauses the video automatically** to insert longer descriptions of visual content.
- This is especially important for complex, fast-paced videos with dense dialogue or on-screen text where natural pauses are too short for standard audio description.

**Key distinction from 1.2.5**: Standard audio description (1.2.5, Level AA) fits descriptions into existing pauses in dialogue. Extended audio description (1.2.7, Level AAA) **pauses the video** when more time is needed, then resumes playback.

This ensures that users who are blind or have low vision can fully understand even the most visually complex video content.

---

### ⚠️ **Scope Note: Understanding the Audio Description Guidelines**

WCAG includes three related guidelines for audio descriptions. Here's how they differ:

| Guideline                                                                                                        | Level | Requirement                                                           | Key Difference                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ----- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **[1.2.3](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html)** | A     | Audio description **OR** full text alternative (your choice)          | Basic accessibility—you can choose which format                                     |
| **[1.2.5](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)**                      | AA    | Audio description **required** (fits in natural pauses)               | Industry standard—descriptions use existing gaps in dialogue                        |
| **1.2.7** (this guide)                                                                                           | AAA   | **Extended** audio description (pauses video for longer descriptions) | **Video pauses automatically** when dialogue is too dense for standard descriptions |

**Critical distinction**: Extended audio description **pauses the video**; standard audio description fits descriptions into existing dialogue gaps without interrupting playback.

---

## **Why Does It Matter?**

**Remember**: This guideline is specifically for **blind and low-vision users** who need more comprehensive visual information than standard audio description can provide.

- **Inclusivity:** Over [2.2 billion people globally have vision impairment](https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment), with [7.7 million adults in the US](https://nfb.org/resources/blindness-statistics) reporting visual disability. Extended audio description ensures access to complex visual content when standard descriptions are insufficient.
- **When Standard AD Falls Short:** Fast-paced educational videos, dense scientific demonstrations, and content with rapid scene changes often require extended audio description. For example, a physics lecture where the professor draws diagrams while speaking continuously—standard AD cannot describe the visuals without missing dialogue.
- **Comprehension Impact:** Research shows that blind users of extended audio description report significantly higher comprehension of complex visual content compared to standard descriptions alone, particularly for STEM education and documentary content.
- **Legal Compliance:** This is a Level AAA requirement in WCAG 2.2, often adopted for educational institutions, government agencies, and organizations committed to best-practice accessibility.
- **Universal Benefit:** Extended descriptions improve comprehension for all users—reinforcing complex visual information verbally benefits sighted users too.

For more, see the [W3C's comprehensive Understanding document](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html), [DCMP's audio description resources](https://dcmp.org/), and [WebAIM's audio description guide](https://webaim.org/techniques/captions/#descriptions).

---

⚠️ **AAA Level: Aspirational Best Practice**

Level AAA is the highest WCAG conformance level and is **not required for most websites**. However, extended audio description is best practice for:

- **Educational content** with complex visuals (science demonstrations, medical training, engineering tutorials)
- **Documentary and historical content** with dense on-screen text and rapid scene changes
- **Fast-paced training videos** where dialogue leaves no natural pauses for standard descriptions
- **Organizations committed to inclusive design excellence**

If your content already has standard audio description (1.2.5) and users report comprehension gaps, extended audio description may be the solution.

## **What You Can Do Right Now**

Don't wait for a compliance audit. Here's how to start:

- **🔍 Audit Your Complex Video Content**: Review your videos with the most visual complexity—STEM lectures, fast-paced tutorials, content with dense on-screen text. Play each with audio only (eyes closed). If you can't follow the visual information because dialogue never pauses long enough for descriptions, extended AD is needed.
- **🛠️ Implement Extended Audio Description**: Start with one high-impact video. Use [SMIL (Synchronized Multimedia Integration Language)](https://www.w3.org/TR/SMIL3/) to author extended descriptions that automatically pause playback, or produce a separate described version with pauses baked in. Professional describers experienced with extended AD are available through [DCMP](https://dcmp.org/) and [Descriptive Video Works](https://www.acb.org/adp/).
- **📢 Escalate to Decision-Makers**: Share the comprehension impact data with your content team. Extended AD is not a legal requirement for most organizations (AAA is optional), but it's the difference between partial access and full comprehension for blind users of complex content.
- **📚 Learn More About Extended AD**: Bookmark the [W3C's Description of Visual Information guide](https://www.w3.org/WAI/media/av/description/), [DCMP's audio description training](https://dcmp.org/learn/captioningkey/639), and [SMIL accessibility features](https://www.w3.org/TR/SMIL-access/). Review the decision criteria below before producing any visually complex tutorial or training video.

---

## **What Needs Extended Audio Description?**

- Prerecorded video content with audio (movies, tutorials, online courses)
- Any synchronized media where standard audio description is insufficient

All such media should have extended audio description available.

---

## **Implementation Examples**

**When to Use Extended AD vs. Standard AD**

Use this decision criteria:

| Content Characteristic | Standard AD (1.2.5)                           | Extended AD (1.2.7)                                               |
| ---------------------- | --------------------------------------------- | ----------------------------------------------------------------- |
| Dialogue density       | Natural pauses exist                          | Continuous dialogue, no pauses                                    |
| Visual complexity      | Moderate—key actions and scene changes        | High—detailed diagrams, dense on-screen text, rapid scene changes |
| On-screen text         | Minimal                                       | Substantial (equations, code, labels)                             |
| Typical use case       | Interviews, narrative films, most web content | STEM lectures, medical training, fast-paced documentaries         |

**Technical Implementation Methods**

### Option 1: SMIL (Synchronized Multimedia Integration Language)

**Why this works**: SMIL automatically pauses the video at designated times, plays extended audio descriptions, then resumes playback. Supported by [Able Player](https://ableplayer.github.io/ableplayer/) and other SMIL-capable players.

**Best for**: Complex educational content where you want users to toggle extended AD on/off without needing separate video files.

```xml
<smil>
  <body>
    <excl>
      <video src="lecture.mp4" />
      <audio src="extended-descriptions.mp3" begin="15s" />
    </excl>
  </body>
</smil>
```

**Key SMIL features for extended AD**:

- `<excl>` element pauses video automatically when description plays
- Descriptions are separate audio files synchronized with video timestamps
- Users can disable extended AD; video plays continuously without pauses

For more, see [W3C SMIL Accessibility Features](https://www.w3.org/TR/SMIL-access/) and [GBH's SMIL integration guide](https://www.wgbh.org/foundation/services/ncam/tools-resources/accessible-digital-media-guidelines-guideline-h-multimedia).

### Option 2: Separate Video with Baked-In Extended AD

**Why this works**: Extended descriptions and pauses are permanently embedded in a separate video file. Works everywhere, no special player requirements.

**Best for**: Content hosted on platforms that don't support SMIL (YouTube, most LMS platforms).

```html
<!-- Main video (no extended AD) -->
<video controls>
  <source src="lecture.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" />
</video>

<!-- Link to version with extended AD -->
<p>
  <a href="lecture-extended-ad.mp4"
    >Watch version with extended audio descriptions (video pauses for descriptions)</a
  >
</p>
```

**Production workflow**:

1. Identify all points where extended description is needed (dialogue too dense for standard AD)
2. Script extended descriptions (typically 2-5 seconds longer than available pauses)
3. Insert pauses in video timeline at those points
4. Record and mix extended description audio during pauses
5. Export as separate video file

### Option 3: HTML5 with Video.js Extended AD Plugin

**Why this works**: [Video.js](https://videojs.com/) offers extended AD support through plugins. Provides toggle control for users.

**Best for**: Web platforms where you control the player and want dynamic extended AD without SMIL.

**Note**: Check current plugin availability—extended AD support varies by Video.js version.

### Production Guidance

**Professional Audio Describers**:

- Use describers experienced with **extended descriptions specifically**—timing pauses and writing longer descriptions require different skills than standard AD
- [Audio Description Project](https://www.acb.org/adp/) and [DCMP](https://dcmp.org/) maintain rosters of professional describers
- Budget 2-3× standard AD cost due to video editing and extended recording time

**SMIL Authoring Tools**:

- [MAGpie](https://www.wgbh.org/foundation/services/ncam/tools-resources/magpie) (free, NCAM tool for caption and description authoring)
- Most professional video editing suites can export SMIL-compatible files

**Player Support Requirements**:

- **SMIL-capable players**: [Able Player](https://ableplayer.github.io/ableplayer/), RealPlayer, QuickTime (older versions)
- **Not all HTML5 players support extended AD pause functionality**—test before deploying
- YouTube and Vimeo do **not** support SMIL extended AD—use separate video method

**When to Bake Extended AD vs. Use SMIL**:

- **Bake into separate video** if: hosting on YouTube/Vimeo, LMS platform with limited player support, or audience primarily uses mobile devices
- **Use SMIL** if: hosting on your own site, need toggle control for users, want to maintain single video source

For more, see [W3C's extended audio description techniques](https://www.w3.org/WAI/WCAG22/Techniques/general/G8) and [Joe Clark's audio description principles](http://joeclark.org/access/description/ad-principles.html).

---

## **How to Test Your Extended Audio Descriptions**

**Quick Tests** (5 minutes):

1. **Verify Auto-Pause Functionality** (SMIL/player-based implementations):
   - Enable extended audio descriptions in player
   - Play video—confirm it pauses automatically when extended descriptions start
   - Confirm video resumes after each extended description completes
   - Test that disabling extended AD removes all pauses

2. **Description Clarity Test**:
   - Close your eyes and listen to the extended described version
   - Can you picture what's happening visually during each extended description?
   - Are complex diagrams, on-screen text, and visual demonstrations clearly described?

3. **Synchronization Check**:
   - Verify extended descriptions don't describe content that hasn't appeared yet
   - Verify pauses occur at appropriate moments (not mid-sentence in dialogue)
   - Verify no overlap between extended descriptions and program audio when video resumes

**Quality Checklist**:

- [ ] Extended descriptions provide substantially more detail than standard AD could fit in natural pauses
- [ ] Video pauses long enough for full description—no rushed narration
- [ ] Pause timing feels natural (not abrupt mid-scene)
- [ ] Video resumes smoothly after each extended description
- [ ] Extended descriptions are accurate and objective (describe what's seen, not interpretation)
- [ ] No audio overlap between extended descriptions and resumed program audio
- [ ] Toggle control works correctly (on/off extended AD)
- [ ] Fallback available if player doesn't support extended AD

**Blind User Testing Recommendations**:

- Recruit users who are blind or have low vision familiar with standard audio description
- Test both with and without extended AD enabled for comparison
- Ask: "Did extended AD provide information you needed that standard AD would have missed?"
- Document any gaps in descriptions or timing issues

For comprehensive testing guidance, see [DCMP's audio description quality standards](https://dcmp.org/learn/captioningkey/639).

## **Common Questions**

**Q: What's the difference between standard and extended audio description?**

A: **Standard audio description (1.2.5)** fits descriptions into natural pauses in dialogue—the video never stops. **Extended audio description (1.2.7)** pauses the video automatically when more time is needed for longer descriptions, then resumes playback. Extended AD is for content where dialogue is too dense or visuals too complex for standard descriptions.

**Q: When should I use extended AD instead of standard AD?**

A: Use extended AD when:

- Dialogue is continuous with no natural pauses long enough for descriptions
- Visuals are highly complex (detailed diagrams, dense on-screen text, rapid scene changes)
- Content is educational/technical and comprehension requires complete visual information
- Standard AD testers report missing critical visual details

Examples: STEM lectures with on-screen equations, medical procedures with continuous narration, fast-paced documentaries with frequent text overlays.

**Q: Is 1.2.7 required for AA conformance?**

A: **No.** Extended audio description is a Level AAA requirement. Most websites aim for AA conformance, which requires standard audio description (1.2.5) but not extended AD. AAA is aspirational for organizations committed to best-practice accessibility.

**Q: Does extended AD interrupt the viewing experience for sighted users?**

A: Extended AD should be **off by default** with a toggle option. Users who need it can enable it; users who don't need it experience normal playback with no pauses. When implemented via SMIL or separate video files, sighted users never encounter pauses unless they explicitly choose the extended described version.

**Q: How much does extended AD cost compared to standard AD?**

A: Extended AD typically costs **2-3× standard AD** due to:

- Video editing to insert pauses
- Longer description scripts (more content to describe)
- Extended recording time
- Potential need for SMIL authoring or separate video file production

Budget $300-800 per finished video minute for professional extended AD, vs. $150-400 for standard AD.

**Q: Which platforms support extended AD with auto-pause functionality?**

A: **SMIL-capable players**: [Able Player](https://ableplayer.github.io/ableplayer/), older versions of RealPlayer and QuickTime.

**Not supported**: YouTube, Vimeo, most LMS built-in players. For these platforms, use the separate video file method (extended AD baked in with pauses).

**Q: Can I add extended AD to existing videos that already have standard AD?**

A: Yes. You can either:

1. Produce a separate extended described version with pauses inserted and longer descriptions baked in
2. Author SMIL files that reference your existing video and add extended description audio tracks

Option 1 is more widely compatible; option 2 requires SMIL-capable player but maintains single video source.

For more guidance, see the [W3C's extended audio description FAQ](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html) and [DCMP's audio description resources](https://dcmp.org/learn/captioningkey/639).

---

## **Common Mistakes to Avoid**

- Treating extended AD as "nice to have" for content that genuinely requires it (complex STEM, dense documentaries)
- Using extended AD when standard AD would suffice (wasted production cost and unnecessary pauses)
- Extended descriptions that are still too brief—if pausing the video, use the time fully
- Auto-pause timing that feels abrupt (pause mid-scene rather than at natural transition points)
- No fallback for users whose players don't support extended AD
- Forgetting to provide a toggle option—users must be able to disable extended AD if they don't need it
- Using unqualified narrators (extended AD requires even more skill than standard AD)

Audit your site regularly and use accessibility checkers to ensure complex video content has proper extended audio description where needed. For more, see the [Netflix Audio Description Style Guide v2.5](https://partnerhelp.netflixstudios.com/hc/en-us/articles/215510667-Audio-Description-Style-Guide-v2-5) and [Joe Clark's audio description principles](http://joeclark.org/access/description/ad-principles.html).

---

## **Differences Between A, AA, and AAA for Guideline 1.2.7 in WCAG 2.2**

- **Level A:** No requirement for 1.2.7.
- **Level AA:** No requirement for 1.2.7.
- **Level AAA:** Requires extended audio description for all prerecorded video. Use it when standard audio description is not enough. This is the core requirement for 1.2.7 and is mandatory for AAA conformance.

For more, see the [W3C’s official documentation for 1.2.7 Extended Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html).

---

## **Quick Checklist**

- All prerecorded video content with audio has extended audio description if needed
- Audio description is accurate and synchronized
- Audio description option is easy to enable and hear
- Narrators are qualified and clear
- Tested with users and assistive technology

---

## **Summary**

Guideline 1.2.7 ensures complex videos are fully accessible through extended audio descriptions. When a video is too fast-paced for standard description, pause the video and narrate instead. Make extended audio description part of your AAA video production process.
