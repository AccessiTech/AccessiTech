<!--
title: 1.2.4 - Captions (Live)
series: Making the Web Accessible for All
description: A practical guide to WCAG Guideline 1.2.4 (Captions, Live)—what it means, why it matters, and how to make live video content accessible with captions.
keywords: wcag 1.2.4, captions, live video, accessibility, web standards, digital inclusion, subtitles
image: WCAG-Series-1.2.4.png
imageAlt: Blue text on yellow background saying, "Web Content Accessibility Guidelines (WCAG) 1.2.4 Explained, Captions (Live)"
status: published
date: 2025-07-01
excerpt: This guideline ensures live video content is accessible with captions.
next: /wcag/WCAG-Guideline-1-2-5-Audio-Description-Prerecorded-Explained, Guideline 1.2.5 - Audio Description (Prerecorded)
previous: /wcag/WCAG-Guideline-1-2-3-Audio-Description-Media-Alternative-Explained, Guideline 1.2.3 - Audio Description or Media Alternative (Prerecorded)
-->

# **WCAG Guideline 1.2.4: Captions (Live) Explained**

**Estimated read time:** 8–10 minutes

---

## **Guideline 1: Perceivable**

The first principle of WCAG, Perceivable, ensures that information and user interface components must be presented to users in ways they can perceive. This means content can’t be invisible to all of a user’s senses—whether they are seeing, hearing, or feeling the content through assistive technology.

## **Guideline 1.2: Time-based Media**

Guideline 1.2 focuses on making time-based media—like audio and video—accessible to everyone. This includes providing alternatives such as transcripts, captions, and audio descriptions so users with different abilities can access the content.

## **What Is Guideline 1.2.4 Captions (Live)?**

> "Captions are provided for all live audio content in synchronized media."

Guideline 1.2.4 is a Level AA requirement in the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG22/quickref/#captions-live).

**Who this helps**: People who are **deaf or hard of hearing** and cannot access audio information in real time. This also benefits anyone in noisy environments, quiet spaces where audio can't be played, or non-native speakers following along.

- All live video content with audio must have captions.
- Captions should accurately reflect spoken dialogue and important sounds in real time.
- Captions help users who are deaf, hard of hearing, or in environments where audio can't be played.

This ensures everyone can access the information in your live videos, regardless of hearing ability or environment.

---

⚠️ **Scope Note — Live vs. Prerecorded**

**This guideline (1.2.4) applies ONLY to live content** — webinars, live streams, virtual events, and real-time broadcasts.

For **prerecorded** video content (uploaded videos, on-demand courses, recorded webinars), use [WCAG 1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded) instead.

**Key difference**: Live captions are generated in real time and may have minor delays or errors. Prerecorded captions can be edited for 100% accuracy before publishing.

---

## **Why Does It Matter?**

**The numbers are staggering:**

- **430 million people worldwide** (5% of the global population) require hearing loss rehabilitation, according to the [World Health Organization (WHO)](https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss). By 2050, that number is projected to reach **700 million people**.
- In the United States alone, **37.5 million adults** (15% of American adults) report some trouble hearing, per the [National Institute on Deafness and Other Communication Disorders (NIDCD)](https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing).
- **28.8 million U.S. adults** could benefit from using hearing aids, yet most live events and webinars still lack adequate captioning.

**Why live captions matter:**

- **Inclusivity:** Captions make live video content accessible to users who are **deaf or hard of hearing**.
- **Legal Compliance:** This is a Level AA requirement in WCAG 2.2 and referenced in accessibility laws worldwide, including the [Americans with Disabilities Act (ADA)](https://www.ada.gov/) and [Section 508](https://www.section508.gov/).
- **Usability:** Captions help all users in noisy or quiet environments, or when audio is muted.
- **SEO and Engagement:** Captions improve content discoverability and keep viewers engaged longer.

For more, see [WebAIM's captions guide](https://webaim.org/techniques/captions/) and [University of Washington's Captions Accessibility Checklist](https://www.washington.edu/accesstech/checklist/captions/).

---

## **What You Can Do Right Now**

You don't need to wait for a major redesign to start improving live caption accessibility. Here are four actions you can take today:

### 🔍 **Audit Your Live Content**

- Review your upcoming webinars, virtual events, and live streams.
- Identify which platforms you're using (Zoom, Microsoft Teams, YouTube Live, etc.).
- Check whether live captioning is enabled by default or needs to be turned on manually.
- Test the caption quality during a practice session before going live.

### 🛠️ **Implement Live Captioning**

- **For built-in options**: Enable automatic captions in Zoom, Microsoft Teams, or Google Meet (see [Implementation Examples](#implementation-examples) below).
- **For professional events**: Hire a CART (Communication Access Realtime Translation) provider for 98%+ accuracy.
- **For hybrid events**: Provide both automatic captions AND a CART backup for critical sessions.
- Always include a caption toggle button that's easy to find and use.

### 📢 **Escalate to Decision-Makers**

- Share this guide with your events team, IT department, or leadership.
- Highlight the legal risk: failure to provide live captions can violate ADA and Section 508 requirements.
- Present the business case: **700 million people** will need hearing support by 2050 — that's a massive audience you're excluding without captions.
- Request budget for professional CART services for high-stakes events.

### 📚 **Learn More**

- Read the [W3C's Understanding 1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html) documentation.
- Review the [FCC's Closed Captioning Quality Standards](https://www.fcc.gov/consumers/guides/closed-captioning-television) (accurate, synchronous, complete, properly placed).
- Explore [3Play Media's Live Captioning Guide](https://www.3playmedia.com/solutions/features/live-captioning/) for vendor comparisons.
- Join accessibility communities: [WebAIM Discussion List](https://webaim.org/discussion/), [A11y Slack](https://web-a11y.slack.com/).

---

## **What Needs Captions?**

- Live video content with audio (webinars, conferences, events)
- Online courses and live training sessions
- Live news and broadcasts

All such media must have accurate, real-time captions.

---

## **How to Provide Captions**

- Use live captioning services or software to create real-time captions
- Ensure captions are as accurate and timely as possible
- Include speaker identification and important non-speech sounds
- Make captions easy to enable and access

For more, see the [W3C's captions docs](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html).

---

## **Implementation Examples**

Here's how to enable live captions on popular platforms, with code examples and configuration guidance:

### **Option 1: Zoom Automatic Captions**

**Best for**: Internal meetings, small webinars, and events where 85–90% accuracy is acceptable.

**How to enable** (as host):

1. Start or join your Zoom meeting.
2. Click **More** (three dots) in the meeting toolbar.
3. Select **Language and Speech > Show live captions**.
4. Captions will appear at the bottom of the screen for all participants.

**Accuracy note**: Zoom's automatic captions are powered by AI speech recognition and work best with:

- Clear audio (minimal background noise)
- Standard accents and speaking pace
- Proper microphone setup

For critical events, consider pairing Zoom with a professional CART service (see Option 3).

**Learn more**: [Zoom's Closed Captioning Guide](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060673)

---

### **Option 2: Microsoft Teams Live Captions**

**Best for**: Enterprise meetings, training sessions, and events where attendees need customization options.

**How to enable** (as participant or organizer):

1. Join your Teams meeting.
2. Click **More actions** (•••) in the meeting controls.
3. Select **Language and speech** > **Show live captions**.
4. To customize, click **Caption settings** next to the captions:
   - Change font size (small, medium, large)
   - Change caption position (top, bottom)
   - Change color scheme (white on black, black on white, high contrast)

**CART integration** (professional live captioning):

Teams supports [CART captioners](https://support.microsoft.com/en-us/office/use-cart-captions-in-a-microsoft-teams-meeting-human-generated-captions-2dd889e8-32a8-4582-98b8-6c96cf14eb47) who join as participants and provide real-time captions via the caption stream. This delivers 98–99% accuracy for critical events.

**Best practices from Microsoft**:

- Speak clearly and directly into the microphone
- Avoid background noise
- Use high-quality audio equipment
- Allow only one person to speak at a time

**Learn more**: [Microsoft Teams Live Captions Documentation](https://support.microsoft.com/en-us/office/use-live-captions-in-microsoft-teams-meetings-4be2d304-f675-4b57-8347-cbd000a21260)

---

### **Option 3: Professional CART Services**

**Best for**: High-stakes events (conferences, legal proceedings, medical presentations), where 98–99% accuracy is required.

**What is CART?** Communication Access Realtime Translation is a human-powered live transcription service. A trained stenographer listens to your event and types captions in real time using specialized equipment.

**Popular CART providers**:

- [StreamText](https://www.streamtext.net/) — cloud-based CART for virtual events
- [White Coat Captioning](https://whitecoatcaptioning.com/) — specializes in medical and technical events
- [VITAC](https://www.vitac.com/) — broadcast-quality captioning for large-scale events

**How it works**:

1. Book a CART provider 2–4 weeks before your event (they need prep time).
2. Provide event materials in advance (agenda, speaker names, technical terms).
3. The captioner joins your event via Zoom/Teams/WebEx as a participant.
4. Captions appear via the platform's caption stream OR via a separate URL (e.g., StreamText link).
5. The final transcript is delivered after the event.

**Example StreamText integration** (HTML embed for your event page):

```html
<iframe
  src="https://www.streamtext.net/player?event=YourEventCode"
  width="100%"
  height="300"
  frameborder="0"
  title="Live Captions"
></iframe>
```

**Cost**: Typically $150–$250/hour depending on complexity and notice period.

**Learn more**: [National Association of the Deaf — CART FAQs](https://www.nad.org/resources/technology/captioning-for-access/communication-access-realtime-translation/)

---

### **Option 4: YouTube Live with Automatic Captions**

**Best for**: Public-facing live streams, product launches, and community events.

**How to enable**:

1. Start your YouTube Live stream.
2. YouTube automatically generates captions for all live streams (no setup required).
3. Viewers can toggle captions on/off using the **CC** button in the video player.

**Accuracy note**: YouTube's automatic captions improve over time as the AI learns your voice, but initial accuracy may be 80–85%. For critical events, add a professional CART service via third-party integration.

**Customization** (for channel owners):

- Set default caption language in YouTube Studio > Settings > Upload defaults
- Provide a live transcript to improve accuracy

**Learn more**: [YouTube Live Closed Captions Help](https://support.google.com/youtube/answer/2734796)

---

## **How to Test Your Live Captions**

Testing live captions before your event is critical. Here's a practical testing workflow:

### **Quick Tests** (5 minutes)

Run these checks during a practice session with a colleague:

1. **Toggle test**: Can participants easily find and enable captions?
2. **Sync test**: Do captions appear within 2–3 seconds of spoken words?
3. **Speaker ID test**: Are different speakers identified (e.g., "John:", "Sarah:")?
4. **Sound effect test**: Do captions include non-speech sounds like \[applause\], \[laughter\], \[music\]?
5. **Visibility test**: Can captions be read against your video background? (Try different backgrounds — white slides, dark slides, video overlays.)

### **Quality Checklist** (FCC Standards)

The [FCC's closed captioning rules](https://www.fcc.gov/consumers/guides/closed-captioning-television) define four quality standards for live captions. Use this checklist to evaluate your setup:

| **Standard**        | **What to Check**                                                                    | **Pass/Fail** |
| ------------------- | ------------------------------------------------------------------------------------ | ------------- |
| **Accurate**        | Do captions match the spoken words? Are technical terms spelled correctly?           | ☐ Pass ☐ Fail |
| **Synchronous**     | Do captions appear within 2–3 seconds of speech? Are they readable at a normal pace? | ☐ Pass ☐ Fail |
| **Complete**        | Do captions run from the beginning to the end of the event? No missing sections?     | ☐ Pass ☐ Fail |
| **Properly Placed** | Do captions avoid blocking important visual content (speaker's face, slides, demos)? | ☐ Pass ☐ Fail |

**Acceptable accuracy for live captions**: 85–90% for automatic captions (Zoom, Teams), 98–99% for CART services.

### **Tools for Testing**

- **Manual review**: Record a test session and watch it back with captions on. Count errors per 100 words.
- **User testing**: Invite a colleague who is deaf or hard of hearing to join a test session and provide feedback.
- **Accessibility validators**: Use [WAVE](https://wave.webaim.org/) or [axe DevTools](https://www.deque.com/axe/devtools/) to check that your caption toggle button is keyboard-accessible and has proper ARIA labels.

### **Common Caption Failures**

- ❌ Captions lag by 5+ seconds (viewers can't follow along)
- ❌ Technical terms or names are spelled wrong (confusing context)
- ❌ Captions cover the speaker's face or important slides (bad placement)
- ❌ Captions toggle is hidden in a sub-menu (not discoverable)

Fix these issues before your live event — they'll alienate your deaf and hard-of-hearing audience.

---

## **Common Mistakes to Avoid**

- No captions for live video content
- Inaccurate or delayed captions
- Captions that are out of sync with audio
- Hiding captions or making them hard to enable

Audit your site regularly and use accessibility checkers to ensure all live video content has proper captions. For more, see the [FCC's guide to Closed Captioning on Television](https://www.fcc.gov/consumers/guides/closed-captioning-television).

---

## **Common Questions**

### **Q: Do automatic captions (Zoom, Teams, Google Meet) meet WCAG 2.2 requirements?**

**A:** Yes, as long as they're accurate, synchronous, and complete. However, automatic captions typically achieve 85–90% accuracy, which may not be sufficient for high-stakes events (legal proceedings, medical presentations, policy announcements). For those scenarios, use professional CART services (98–99% accuracy).

**Remember**: People who are **deaf or hard of hearing** rely on captions to access your content. Errors compound quickly — 10% error rate = 1 mistake every 10 words, which disrupts comprehension.

---

### **Q: What's the difference between captions and subtitles?**

**A:**

- **Captions** = text representation of spoken dialogue AND important sounds (e.g., \[applause\], \[door slams\]). Designed for people who are deaf or hard of hearing.
- **Subtitles** = text translation of spoken dialogue only (no sound effects). Designed for language learners or non-native speakers.

For WCAG 1.2.4, you need **captions**, not just subtitles.

---

### **Q: How do I caption a multi-language event?**

**A:** You have two options:

1. **Real-time translation**: Use Microsoft Teams' [live translated captions](https://support.microsoft.com/en-us/office/use-live-captions-in-microsoft-teams-meetings-4be2d304-f675-4b57-8347-cbd000a21260) (supports 50+ languages). Captions appear in the viewer's chosen language.
2. **Separate CART providers**: Hire one CART captioner per language. Each captioner provides captions in their assigned language via a separate StreamText URL or caption stream.

Both approaches meet WCAG 1.2.4 as long as captions are accurate and synchronous.

---

### **Q: What if my live event includes pre-recorded video clips?**

**A:** If you're embedding pre-recorded videos during a live event:

- The pre-recorded clips must have captions that meet [WCAG 1.2.2 (Captions - Prerecorded)](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded) (higher accuracy standard).
- The live portions of your event must have captions that meet WCAG 1.2.4 (this guideline).

Your live captioning service (Zoom, Teams, CART) will not automatically caption embedded pre-recorded videos — you must provide those captions separately.

---

### **Q: Can I use AI-generated captions from Otter.ai, Rev, or Descript?**

**A:** Services like [Otter.ai](https://otter.ai/), [Rev](https://www.rev.com/services/live-captions), and [Descript](https://www.descript.com/) offer AI-powered live captions. These can meet WCAG 1.2.4 IF:

- Captions are displayed in real time (not post-event)
- Accuracy is 85%+ (test before your event)
- Captions are accessible to all participants (not locked behind a login wall)

Some of these services integrate directly with Zoom or Teams. Check their documentation for setup instructions.

---

### **Q: What's the cost of adding live captions to my event?**

**A:**

- **Automatic captions** (Zoom, Teams, Google Meet): **Free** (included in paid plans)
- **AI-powered captions** (Otter.ai, Rev): **$0.25–$1.25/minute**
- **Professional CART services**: **$150–$250/hour**

For most organizations, the cost of automatic captions is $0 — you're already paying for Zoom or Teams. Use your existing tools before investing in paid services.

---

### **Q: What if a participant can't read captions fast enough?**

**A:** Provide alternatives:

- **Slower caption speed**: Some platforms (Microsoft Teams) let users adjust caption speed.
- **Post-event transcript**: Deliver a cleaned-up transcript within 24–48 hours.
- **Recorded session with captions**: Publish a recording with edited captions (meets WCAG 1.2.2) so viewers can pause and review.

**Remember**: People who are **deaf or hard of hearing** may have different reading speeds. Some prefer real-time captions, others prefer transcripts — offer both.

---

## **Differences Between A, AA, and AAA for Guideline 1.2.4 in WCAG 2.2**

- **Level A:** No requirement for 1.2.4.
- **Level AA:** Requires captions for all live audio content in synchronized media. This is the core requirement for 1.2.4 and is mandatory for AA conformance.
- **Level AAA:** For Guideline 1.2.4, there are no additional requirements beyond Level AA in WCAG 2.2. Meeting Level AA for this guideline also satisfies Level AAA.

For more, see the [W3C’s official documentation for 1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html).

---

## **Quick Checklist**

- All live video content with audio has captions
- Captions are accurate and timely
- Captions include speaker identification and important sounds
- Captions are easy to enable and access
- Tested with users and assistive technology

---

## **Summary**

Guideline 1.2.4 is essential for making live video content accessible to everyone. By providing accurate, real-time captions, you support users with disabilities, improve usability, and meet legal requirements. Make live captioning a standard part of your event planning process.
