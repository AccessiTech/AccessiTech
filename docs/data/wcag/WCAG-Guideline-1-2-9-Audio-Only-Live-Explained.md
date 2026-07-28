<!--
title: 1.2.9 - Audio-only (Live)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.2.9 (Audio-only, Live)—what it means, why it matters, and how to make live audio content accessible.
keywords: wcag 1.2.9, audio-only live, accessibility, live captions, web standards, digital inclusion
image: WCAG-Series-1.2.9.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.2.9 Explained, Audio Only (Live)"
status: published
date: 2025-07-01
excerpt: Ensures live audio content is accessible, for example by providing live captions.
next: /wcag/WCAG-Guideline-1-3-1-Info-and-Relationships-Explained, Guideline 1.3.1 - Info and Relationships
previous: /wcag/WCAG-Guideline-1-2-8-Media-Alternative-Prerecorded-Explained, Guideline 1.2.8 - Media Alternative (Prerecorded)
-->

# **WCAG Guideline 1.2.9: Audio-only (Live) Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.2: Time-based Media**

Guideline 1.2 focuses on making time-based media—like audio and video—accessible to everyone. This includes providing alternatives such as transcripts, captions, and audio descriptions so users with different abilities can access the content.

## **What Is Guideline 1.2.9 Audio-only (Live)?**

> "An alternative for time-based media that presents equivalent information for live audio-only content is provided."

Guideline 1.2.9 is a Level AAA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#audio-only-live).

- All live audio-only content (like radio broadcasts or live podcasts) should have a real-time text alternative, such as live captions or a transcript.
- This ensures users who are deaf or hard of hearing can access the information as it happens.
- The alternative should be as accurate and timely as possible.

This ensures that everyone can participate in live audio events, regardless of hearing ability.

---

### **Who This Helps**

**Primary audience: Deaf and hard-of-hearing users** who cannot access spoken audio content.

Live captions also benefit:

- Users in noisy environments (airports, cafes, public spaces)
- People who need audio muted (libraries, open offices, late-night browsing)
- Non-native language speakers who read better than they listen
- Users with auditory processing difficulties

---

### ⚠️ **Scope Note: Understanding Audio-Only Live Captions vs Other Guidelines**

WCAG includes three related guidelines for live and prerecorded media. Here's how they differ:

| Guideline                                                                                           | Level | Requirement                                 | Content Type                                             | When to Use                                     |
| --------------------------------------------------------------------------------------------------- | ----- | ------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------- |
| **[1.2.1](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html)** | A     | Transcript for prerecorded audio/video-only | Prerecorded audio podcasts, radio archives               | Basic accessibility - text alternative required |
| **[1.2.4](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html)**                         | AA    | Live captions for video with audio          | Live webinars, video conferences, broadcasts with video  | Industry standard - required for AA compliance  |
| **1.2.9** (this guide)                                                                              | AAA   | Live captions for audio-only                | Live radio, audio-only webinars, emergency announcements | Aspirational - audio-only events without video  |

**Key distinction**: 1.2.9 is for **audio-only** live events (radio broadcasts, audio webinars, emergency audio announcements). If your live event has video, use [1.2.4](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html) (Level AA) instead.

---

### 💡 **AAA Level: Aspirational, Not Required**

Guideline 1.2.9 is a **Level AAA** requirement, meaning it's not mandatory for WCAG 2.2 AA compliance (which most organizations target).

**When to prioritize 1.2.9:**

- **Government agencies** hosting town halls, emergency broadcasts, or public radio programs
- **Educational institutions** running audio-only webinars or lectures
- **Media organizations** broadcasting live radio or podcast recordings
- **Emergency services** providing audio-only alerts or announcements
- **Organizations committed to best-practice accessibility** beyond AA compliance

While AAA is aspirational, live audio captioning is **essential** for deaf and hard-of-hearing audiences—especially during emergencies or public information broadcasts where timely access to information can be critical.

---

## **Why Does It Matter?**

**Remember**: This guideline specifically helps **deaf and hard-of-hearing users** who cannot hear live audio content.

- **Global Impact:** Over [430 million people worldwide have disabling hearing loss](https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss), and by 2050, nearly 2.5 billion people are projected to have some degree of hearing loss. In the United States alone, approximately [37.5 million adults report some trouble hearing](https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing). Without live captions, deaf users miss critical information during:
  - Live emergency broadcasts and alerts
  - Government town halls and public meetings
  - Educational webinars and audio-only lectures
  - Live radio programs and podcast recordings
  - Audio-only conference calls and virtual events
- **Legal Compliance:** Level AAA requirement in WCAG 2.2. The [FCC requires live captions for television broadcasts](https://www.fcc.gov/consumers/guides/closed-captioning-television) under the Communications and Video Accessibility Act (CVAA), and many government agencies extend this standard to online audio events.
- **Universal Benefit:** Live captions improve comprehension for all users—reinforcing audio information with synchronized text benefits people in noisy environments, non-native speakers, and anyone who processes written information better than audio.

For more, see [W3C's live audio accessibility documentation](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html) and the [WHO World Report on Hearing](https://www.who.int/publications/i/item/9789240020481).

---

## **What You Can Do Right Now**

Don't wait for an accessibility audit. Here's how to start:

- **🔍 Audit Your Live Audio Events**: Review upcoming webinars, radio broadcasts, or audio-only meetings. Which events are accessible to deaf attendees? Run a 3-minute simulation—mute your audio and try to follow a live audio stream. Can you understand what's happening? If not, deaf users are completely excluded.
- **🛠️ Implement Real-Time Captions**: Start with one high-priority event (government meeting, emergency broadcast, or public webinar). Use the implementation examples below to add professional CART, ASR/AI captions, or hybrid solutions. Test accuracy before going live.
- **📢 Escalate to Decision-Makers**: Share this checklist with event planners, IT teams, and content creators. Make live captioning part of your event planning workflow—not a post-launch fix. Include captioning costs in event budgets from day one.
- **📚 Learn More**: Bookmark [W3C's captions guide](https://www.w3.org/WAI/media/av/captions/), [NIDCD hearing statistics](https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing), and [StreamText's live captioning resources](https://streamtext.net/). Reference the quality checklist and platform-specific guidance before launching any live audio event.

---

## **What Needs a Live Audio Alternative?**

- Live radio broadcasts
- Live podcasts
- Any live audio-only event

All such content should have a real-time text alternative available.

---

## **How to Provide a Live Audio Alternative**

- Use professional real-time captioning services (CART) or AI-powered speech recognition (ASR)
- Provide a live transcript or summary as the event happens
- Make the alternative easy to access and read (display URL prominently, embed on event page)
- Ensure captions are as accurate and timely as possible (98%+ for CART, 2-3 second latency max)
- Test with deaf and hard-of-hearing users before going live

For more, see [W3C's live captions guide](https://www.w3.org/WAI/media/av/captions/) and the [W3C Understanding document for 1.2.9](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html).

---

## **Implementation Examples**

### **Live Captioning Options**

Choose the right solution based on accuracy needs, budget, and event importance:

**1. Professional CART (Communication Access Realtime Translation)**

- **What it is:** Human stenographers type live captions in real-time using specialized equipment
- **Accuracy:** 98-99%+ (highest available)
- **Latency:** 2-3 seconds behind live audio
- **Cost:** $150-250/hour per captioner
- **When to use:** Government meetings, emergency broadcasts, legal proceedings, high-stakes webinars
- **Providers:** [StreamText](https://streamtext.net/), [Ai-Media](https://www.ai-media.tv/), [VITAC](https://www.vitac.com/), [Rev](https://www.rev.com/), [3Play Media](https://www.3playmedia.com/)
- **How to book:** Contact provider 1-2 weeks in advance; provide topic/speaker list for terminology prep

**2. ASR/AI Speech Recognition**

- **What it is:** Automatic speech recognition software converts spoken audio to text
- **Accuracy:** 80-90% (depends on audio quality, accents, jargon)
- **Latency:** Near real-time (1-2 seconds)
- **Cost:** $10-30/month subscription or per-minute pricing
- **When to use:** Informal webinars, internal meetings, budget-constrained events
- **Services:** [Otter.ai](https://otter.ai/), [Rev Live Captions](https://www.rev.com/), Zoom/Teams/Meet built-in captions
- **How to use:** Enable in meeting platform settings or integrate via API

**3. Hybrid Approach (CART + ASR)**

- **What it is:** AI provides base captions; human editor corrects in real-time
- **Accuracy:** 95-98%
- **Cost:** $75-150/hour (less than pure CART)
- **When to use:** Balance between accuracy and budget for public webinars

### **Platform-Specific Implementation**

**Zoom:**

1. Enable auto-captions: Settings → In Meeting (Advanced) → Automated captions → Enable
2. Or assign manual captioner: During meeting → Captions → Assign someone to type
3. Or integrate 3rd party: Use [Otter.ai Zoom integration](https://otter.ai/) or book professional CART via [StreamText](https://streamtext.net/)

**Microsoft Teams:**

1. Enable live captions: During meeting → More actions (•••) → Turn on live captions
2. Accuracy: ASR-based, 80-85% typical
3. Upgrade: Contact [Ai-Media](https://www.ai-media.tv/) for professional CART integration

**Google Meet:**

1. Enable captions: During meeting → Turn on captions (CC button)
2. Note: Auto-captions only; no manual assignment
3. Upgrade: Use [Otter.ai Meet integration](https://otter.ai/) or external CART service

**Webex:**

1. Enable closed captions: During meeting → More → Closed Captions → Enable
2. Or assign captioner to type manually
3. Professional option: Integrate [StreamText](https://streamtext.net/) or [Rev](https://www.rev.com/)

**Live Radio/Streaming Platforms:**

- Use dedicated caption encoder: [Ai-Media LEXI Text Encoder](https://www.ai-media.tv/) for broadcast-grade captioning
- Or embed [StreamText](https://streamtext.net/) live caption viewer on your website
- Provide prominent link to caption stream on event page

### **Quality Tiers**

| Tier                    | Accuracy | Latency | Cost        | Best For                                  |
| ----------------------- | -------- | ------- | ----------- | ----------------------------------------- |
| **Professional CART**   | 98-99%+  | 2-3 sec | $150-250/hr | Government, legal, emergency, high-stakes |
| **Hybrid (AI + human)** | 95-98%   | 2-4 sec | $75-150/hr  | Public webinars, educational events       |
| **ASR/AI**              | 80-90%   | 1-2 sec | $10-30/mo   | Internal meetings, informal webinars      |

### **When to Use Human CART vs AI**

**Choose Professional CART when:**

- Event has legal/regulatory requirements (government, legal proceedings)
- Accuracy is critical (emergency broadcasts, medical information)
- Audio contains heavy jargon, technical terms, or multiple accents
- Budget allows ($150-250/hour)

**Choose ASR/AI when:**

- Event is informal or internal
- Budget is limited
- Audio quality is excellent (single speaker, quiet room)
- 80-85% accuracy is acceptable

### **Backup Plans for Technical Failures**

1. **Pre-event test:** Run full tech check 24 hours before event
2. **Backup captioner:** Have second CART provider on standby for critical events
3. **Recording + post-event captions:** If live captions fail, provide corrected transcript within 24 hours
4. **Contact protocol:** Share captioner's direct contact with event host for real-time troubleshooting

---

## **How to Test Your Live Audio Captions**

### **Quick Tests (5 minutes)**

1. **Accuracy check:** Listen to 2-3 minutes of live audio while reading captions. Do they match exactly? Are technical terms spelled correctly?
2. **Latency test:** Speak a unique phrase ("Testing at 3:42 PM") and time how long until it appears as text. Should be ≤3 seconds.
3. **Readability test:** Can you read the text at the speed it appears? Captions should not scroll too fast to read.
4. **Speaker ID test:** Are different speakers identified? (e.g., ">> John:" or ">> Moderator:")

### **Quality Checklist**

Before going live, confirm:

- [ ] **Accuracy:** 98%+ for CART, 80%+ for ASR (test with sample audio)
- [ ] **Latency:** 2-3 seconds maximum delay
- [ ] **Speaker identification:** Multiple speakers clearly labeled
- [ ] **Jargon handling:** Technical terms, acronyms, proper nouns spelled correctly (provide terminology list to CART provider)
- [ ] **Readability:** Line breaks at natural speech pauses, not mid-sentence
- [ ] **Access:** Caption display URL is prominent on event page and in confirmation emails
- [ ] **Backup plan:** Secondary captioner or recording protocol in place

### **Deaf/Hard-of-Hearing User Testing**

- Recruit 2-3 deaf or hard-of-hearing users to test a practice run
- Ask: "Can you follow the full conversation using only captions?"
- Note gaps: missing context, unclear speaker changes, technical term errors
- Iterate: Make corrections before live event

### **Practice Run Recommendations**

- Schedule full tech rehearsal 24-48 hours before event
- Test with actual speakers, not just tech team
- Simulate worst-case scenarios: background noise, overlapping speakers, fast talkers
- Confirm caption provider can handle event duration without breaks

---

## **Common Questions**

### **What's the difference between CART and ASR?**

**CART (Communication Access Realtime Translation)** uses trained human stenographers who type at 200+ words per minute using specialized equipment. Accuracy is 98-99%+, but cost is $150-250/hour. Best for critical events.

**ASR (Automatic Speech Recognition)** uses AI software to convert speech to text automatically. Accuracy is 80-90% depending on audio quality and accents. Cost is $10-30/month or per-minute pricing. Best for informal events.

**Key difference:** Humans understand context, handle jargon, and correct errors in real-time. AI is fast and cheap but struggles with accents, technical terms, and noisy audio.

### **How is 1.2.9 different from 1.2.4?**

**1.2.4 (Captions - Live)** is Level AA and applies to **live video with audio** (webinars, video conferences, broadcasts). Required for AA compliance.

**1.2.9 (Audio-only - Live)** is Level AAA and applies to **audio-only live events** (radio broadcasts, audio webinars, emergency announcements without video). Aspirational, not required for AA.

**If your event has video, use 1.2.4 (AA).** Only use 1.2.9 for pure audio-only streams.

### **Is 1.2.9 required for AA compliance?**

No. Guideline 1.2.9 is **Level AAA**, meaning it's aspirational and not required to meet WCAG 2.2 Level AA (the industry standard).

However, many government agencies, educational institutions, and media organizations adopt AAA standards for live audio as **best practice**—especially for emergency broadcasts, town halls, and public information events where excluding deaf audiences is ethically unacceptable.

### **Which platforms support live captions for audio-only events?**

- **Zoom:** Built-in auto-captions (ASR) or assign manual captioner
- **Microsoft Teams:** Built-in live captions (ASR)
- **Google Meet:** Auto-captions (ASR) only
- **Webex:** Built-in captions or manual assignment
- **Streaming platforms:** Integrate [StreamText](https://streamtext.net/), [Ai-Media](https://www.ai-media.tv/), or [Rev Live](https://www.rev.com/) via embed

For radio broadcasts or standalone audio streams, use professional caption encoders like [Ai-Media LEXI](https://www.ai-media.tv/) or embed [StreamText viewer](https://streamtext.net/) on your event page.

### **How accurate do live captions need to be?**

**Professional CART:** 98-99%+ accuracy (3-5 errors per 500 words)

**ASR/AI:** 80-90% accuracy (50-100 errors per 500 words)

For **critical events** (government, legal, emergency), aim for 98%+ (CART). For informal webinars or internal meetings, 80-85% (ASR) may be acceptable.

Best practice: Test with deaf users. If they report missing critical information, upgrade to higher-accuracy solution.

### **What if captions fail during a live event?**

**Immediate actions:**

1. Announce the technical issue verbally and via event chat
2. Contact backup captioner (if arranged)
3. Record the audio for post-event transcription

**Post-event protocol:**

1. Provide corrected transcript within 24 hours
2. Email all attendees with transcript link
3. Post transcript prominently on event page
4. Apologize and offer future events with guaranteed captions

**Prevention:** Always have a backup plan. For critical events, book two CART providers or have ASR as failover.

### **How much does real-time captioning cost?**

| Service Type                   | Cost                     | Accuracy | When to Use                               |
| ------------------------------ | ------------------------ | -------- | ----------------------------------------- |
| **Professional CART**          | $150-250/hour            | 98-99%+  | Government, legal, emergency, high-stakes |
| **Hybrid (AI + human editor)** | $75-150/hour             | 95-98%   | Public webinars, educational events       |
| **ASR/AI subscriptions**       | $10-30/month             | 80-90%   | Informal events, internal meetings        |
| **Platform built-in**          | Free (Zoom, Teams, Meet) | 80-85%   | Casual webinars, small meetings           |

**Budget tip:** Use free platform captions for informal events, but allocate budget for professional CART on critical events (government town halls, emergency broadcasts, public education).

---

## **Common Mistakes to Avoid**

- No real-time text alternative for live audio-only events
- Relying on ASR/AI for critical events that require 98%+ accuracy (use CART instead)
- Captions delayed by >5 seconds (should be 2-3 seconds max)
- Not testing caption accuracy before going live
- No backup plan for caption service failures
- Caption display link buried in fine print (make it prominent on event page)
- Not providing terminology list to CART provider (results in misspelled jargon)
- Skipping deaf/hard-of-hearing user testing

For more, see [W3C's live captions guide](https://www.w3.org/WAI/media/av/captions/) and [University of Washington's Live Captions accessibility resources](https://www.washington.edu/accessibility/videos/captions-live/).

---

## **Differences Between A, AA, and AAA for Guideline 1.2.9 in WCAG 2.2**

- **Level A:** No requirement for 1.2.9.
- **Level AA:** No requirement for 1.2.9.
- **Level AAA:** Requires a real-time text alternative for all live audio-only content. This is the core requirement for 1.2.9 and is mandatory for AAA conformance.

For more, see the [W3C’s official documentation for 1.2.9 Audio-only (Live)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html).

---

## **Quick Checklist**

- All live audio-only content has a real-time text alternative
- Captions or transcripts are accurate and timely
- Alternative is easy to access and read
- Tested with users and assistive technology
- Service is reliable for the duration of the event

---

## **Summary**

Guideline 1.2.9 is essential for making live audio content accessible to users who require text alternatives. By providing real-time captions or transcripts, you support users with disabilities, improve usability, and meet AAA requirements. Make live accessibility a standard part of your event planning for maximum inclusion.
