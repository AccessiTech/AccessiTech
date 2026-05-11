<!--
title: When AI Kills: Data Sovereignty in High-Stakes Systems
description: The Maven school strike killed 180 children because nobody controlled the rules the AI followed. Data sovereignty isn't about compliance — it's about who owns your AI's decision-making.
keywords: AI governance, data sovereignty, AI accountability, digital sovereignty, AI ethics, AI targeting systems, governance substrate
date: 2026-05-06
status: published
series: AI Governance
previous: /blog/When-The-AI-Did-It-Is-No-Longer-a-Defense, When 'The AI Did It' Is No Longer a Defense
og_image: assets/images/be-3-og.png
og_image_alt: When AI Kills: Data Sovereignty in High-Stakes Systems
image: assets/images/be-3-og.png
imageAlt: When AI Kills: Data Sovereignty in High-Stakes Systems
visual_notes: |
  Hero (1200×630 px): Stark, heavy visual — silhouette or abstract representation of human cost. Dark, high-contrast. WCAG-AA compliant (≥14px text, 4.5:1 contrast).
  OG (1200×630 px): Blog title in bold type, dark background, brand mark bottom-right.
-->

# **When AI Kills: Data Sovereignty in High-Stakes Systems**

<!-- VISUAL: Hero image (1200×630 px) — Dark, stark visual representing human cost and sovereignty. See frontmatter visual_notes. File: images/blog/blog-sovereignty-hero-1200x630.png -->
<!-- ALT: "Abstract representation of human cost in high-stakes AI systems, emphasizing sovereignty and control questions" -->

On February 28, 2026, the first day of Operation Epic Fury, a Pentagon AI targeting system called Maven struck Shajareh Tayyebeh primary school in Minab, southern Iran.

**Between 156 and 180 people were killed. Most of them were girls between seven and twelve years old.**

The school had stood beside an Iranian Revolutionary Guard naval compound — a compound that had been **decommissioned and demolished between 2013 and 2016**.

The Defense Intelligence Agency database that Maven relied on **still classified those coordinates as an active military facility**. The database hadn't been updated in ten years.

**Maven processed approximately 1,000 targeting decisions in the first 24 hours of the campaign.** One every ninety seconds.

No human in that pipeline had the time to cross-reference the underlying data, much less question whether a decade-old record still described reality.

When the incident report was filed, nobody said the system malfunctioned. **The system had operated within its documented parameters.** It had used the authorized data source. The decision architecture had been reviewed and approved.

**The children died because nobody controlled the rules the AI was following.**

That is not a technology failure. **It is a sovereignty failure.** And it is not unique to defense.

**This article is for policymakers, activists, and anyone demanding accountability for high-stakes AI systems in their jurisdiction or community.**

---

## **The Pattern: Throughput Replaces Judgment**

The Maven strike happened because **the AI moved faster than oversight could function.**

Maven processed approximately 1,000 targeting decisions in the first 24 hours of Operation Epic Fury — roughly **one every 90 seconds**.

No human in that pipeline had the time to:

- Cross-reference the underlying database record
- Question whether a decade-old record still described reality
- Exercise genuine judgment rather than procedural compliance

**This is not unique to defense.** When AI systems generate decisions faster than humans can meaningfully review them, **oversight becomes a ritual** — the appearance of accountability without the substance of it.

**It appears in:**

- ⚕️ **Healthcare systems** — AI flags thousands of patient risk alerts; clinicians have seconds to review each one, clearing them by default because volume makes genuine review impossible
- 💰 **Financial fraud detection** — compliance teams process alerts faster than they can investigate them
- 📱 **Content moderation pipelines** — human reviewers see seconds of context per decision

In every case, the question is the same: **who decided the AI could operate at a speed that makes human oversight structurally impossible?**

Not "did the AI work correctly?" **Who decided that working correctly meant moving too fast for humans to question it?**

---

## **Sovereignty Is Not About Accuracy. It's About Control.**

<!-- TODO: Karen Hao direct quote re: data imperialism + colonial extraction — verify permission with Alix/Zoe -->

[Watch Karen Hao explain how 'data-rich countries' perpetuates imperial extraction](https://www.youtube.com/playlist?list=PLUe4RjfOLVwUv5d-wS60mT9m3ntM2Sr8q) — essential context for understanding who controls AI systems and who bears the cost.

The Maven database was outdated. Those are implementation details.

**The deeper problem is this: the organizations deploying the AI did not control the rules the AI followed.**

The Pentagon didn't write the governance logic that decided:

- How often Maven's database would be updated
- What counted as a valid target
- How fast decisions could be processed

That logic was embedded in the vendor's system — in the software layer that connects the AI model to the data, interprets instructions, and executes actions.

**That layer is called the governance substrate.** And in most enterprise AI deployments, **it is owned and controlled by the vendor, not the organization using it.**

This is the **sovereignty gap**:

- Your organization **deploys** the AI
- Your organization is **accountable** for what it does
- But the **rules governing its behavior** are written, versioned, and updated by a third party you don't control

**When that third party changes, your governance can shift without your knowledge:**

- **Vendor acquisition** — governance rules change overnight
- **Infrastructure updates** — your governance framework shifts without notification
- **System harm** — you're accountable for decisions you never made

**Data sovereignty in AI governance is not about where your data is stored.**

It is about **who controls the logic that interprets your data and decides what actions are valid.**

If that logic lives inside a proprietary vendor platform you cannot audit, **you do not have sovereignty. You have a dependency.**

---

## **What Happens When Sovereignty Is Transferred**

The cost of losing sovereignty over AI governance rules is not theoretical. It is visible in every system where vendor-controlled infrastructure determines organizational risk.

### **Case: Kenya's AI Healthcare Cost Escalation**

In 2026, Kenya implemented [AI-driven healthcare insurance reforms](https://www.theguardian.com/global-development/2026/may/04/kenya-ai-healthcare-reforms-driving-up-costs-for-poor) designed to reduce costs for the poorest citizens.

**The system had the opposite effect:** costs increased for the most vulnerable populations, contrary to the stated policy goals.

The AI was operating correctly — applying its rules, processing claims, reaching conclusions. But **the rules it was following had been configured by a vendor** optimizing for financial efficiency metrics that did not align with the government's equity objectives.

**The sovereignty gap:**

- The government was **accountable** for the outcomes
- But it did **not control** the governance logic producing those outcomes
- The rules were embedded in vendor infrastructure that could not be inspected, audited, or modified without breaking the contract and rebuilding the system from scratch

**The sovereignty question**: Who decided that efficiency would take precedence over equity?

Not the policymakers. Not the citizens affected. **The vendor** — whose system translated policy intent into executable rules without visibility into that translation process.

### **Case: UK Facial Recognition Oversight Gap**

Since 2020, UK police forces have deployed [facial recognition technology](https://bigbrotherwatch.org.uk/campaigns/stop-facial-recognition/) in public spaces.

By 2026, independent assessments revealed:

- **Systems were not as accurate as vendors had claimed**
- **Oversight frameworks lagged deployment by more than six years**

The systems were procured based on vendor accuracy claims. **Those claims were never independently verified before deployment.** The legal framework that would require verification did not exist.

**The governance gap remained open for six years while the systems operated in public:**

- Who verifies vendor claims?
- Who audits ongoing performance?
- Who is accountable when the system fails?

**The sovereignty question**: Who controls the criteria that determine whether this system is fit for use?

Not the public. Not the oversight bodies. **The vendors** — whose incentive is to sell systems, not to verify that they work as advertised.

---

## **Three Questions Your Organization Must Be Able to Answer**

If your organization is deploying AI systems that make high-stakes decisions — about people's **health, financial access, legal status, physical safety** — you need to be able to answer three questions:

**For procurement and tech leadership**, these are due diligence checkpoints.

**For policymakers and activists**, they're accountability audit criteria to demand from organizations deploying AI in your jurisdiction or community.

**1. 🔑 Who owns the rules your AI follows?**

<!-- TODO: Mara Soriano direct quote re: surveillance → weapons export pipeline + Palestinian surveillance — verify permission with Alix/Zoe -->

[Hear Mara Soriano on how surveillance systems are incubated on populations without protections, then exported as 'combat-proven' technology](https://www.youtube.com/playlist?list=PLUe4RjfOLVwUv5d-wS60mT9m3ntM2Sr8q) — a direct link between governance control and human cost.

Not who owns the model. Not who owns the data. **Who owns the governance logic** — the software layer that decides:

- What the AI is allowed to do
- How it responds to ambiguous situations
- What data sources it trusts

If the answer is "the vendor," the follow-up question is: **can your organization inspect, version, and independently verify those rules?**

If not, **you do not have sovereignty. You have a black box.**

**2. 📋 When were those rules last reviewed, and what triggers an unscheduled review?**

Governance rules that were appropriate at deployment may not remain appropriate:

- Data sources that were current when the system launched may fall out of date
- Risk thresholds that made sense in one operating context may not make sense in another

If your organization cannot answer:

- When the governance rules were last reviewed
- Who is responsible for reviewing them
- What conditions would trigger an immediate review

**Those rules are not governed. They are drifting.**

**3. ⚠️ What happens to those rules if the vendor is acquired?**

In 2024, Meta acquired Moltbook — an AI agents platform — and **updated its terms of service within 48 hours**.

Organizations running governance infrastructure on Moltbook's platform had their operating rules **changed by a third party, without notice**, at the speed of a legal document update.

**If your governance logic is embedded in vendor infrastructure:**

- The acquiring company sets the rules going forward
- Your contract may not require notification
- Your ability to audit what changed may not survive the acquisition

**If your organization cannot answer these three questions**, you do not control your AI governance. Someone else does.

And when something goes wrong, **that someone else will point to the contract and say: you signed it.**

---

## **What Data Sovereignty Actually Requires**

**Sovereignty is not a compliance checkbox. It is not a policy document.**

It is **operational control over the infrastructure that governs your AI's behavior.**

That requires three things:

**1. 🔑 The governance substrate must be yours**

Not hosted in a vendor's proprietary platform. Not embedded in software you cannot audit.

**The rules that govern your AI's behavior must be:**

- **Owned** by your organization
- **Versioned** with full history
- **Controllable** independent of vendor relationships

**This does not mean building everything in-house.** It means ensuring that the infrastructure layer connecting your AI to its data and decision-making logic is **portable, auditable, and independent** of any single vendor relationship.

**2. 📋 Governance rules must be inspectable and versioned**

You need to be able to answer: **what rules was this AI following on the day this decision was made, and when were those rules last changed?**

That requires governance rules to exist as **reviewable, timestamped records** — not as embedded logic you cannot see.

**3. 👁️ Oversight must be structurally possible**

Not present in name. **Possible in practice.**

**If your AI processes decisions faster than humans can meaningfully review them, oversight has been designed out.**

If your governance framework assumes humans will catch errors but doesn't give them the time, information, or authority to act on what they catch, **you have ritual compliance — not accountability.**

---

## **The Question That Determines Accountability**

When scrutiny arrives — and it will arrive — the question will not be **"did your AI work as documented?"**

The question will be: **"who controlled the rules it was following, and could you verify what those rules were?"**

If the answer is "the vendor controlled them, and we couldn't audit them," **accountability has already been transferred.**

- Your organization is **responsible** for the outcomes
- But the **decisions** that produced those outcomes were made by someone else

**Can you answer the three questions above for every AI system your organization is deploying right now?**

Not in theory. Not based on what the contract says. **In practice** — can you:

- Pull up the governance rules your AI is running on today?
- See when they were last updated?
- Verify that they still reflect your organization's risk tolerance and policy intent?

**If not, you don't have an AI governance problem. You have a sovereignty problem.**

And the first step to solving it is recognizing that **governance you cannot inspect is governance you do not control.**

---

## **What AccessiTech Can Do**

([Watch Abeba Birhane on why 'AI for good' rhetoric masks who actually gets harmed](https://www.youtube.com/playlist?list=PLUe4RjfOLVwUv5d-wS60mT9m3ntM2Sr8q) — essential framing for why corporate governance claims need external accountability, not just internal audit.)

<!-- TODO: Abeba Birhane direct quote re: corporate complicity + harm framing + "AI for good" as structural evasion — verify permission with Alix/Zoe -->

AccessiTech conducts **sovereignty audits** for organizations deploying high-stakes AI systems.

**These are 6-8 week engagements that trace your AI's governance substrate:**

- Who owns the rules?
- When were they last reviewed?
- What happens if your vendor is acquired?

We produce an **actionable roadmap for reclaiming operational control.**

📞 **If you're a tech leader or procurement officer** needing to audit governance substrate control, [book a discovery call](https://accessi.tech/#consultation).

🏛️ **If you're a policymaker or activist** seeking accountability frameworks for AI systems in your jurisdiction, let's discuss how to adapt these questions for oversight — [DM me on LinkedIn](https://www.linkedin.com/in/conorkelly87/) or comment below.

⚖️ **For organizations wrestling with the procurement side of this question** — who is liable when an AI causes harm, and what contract terms create accountability gaps — start with the [legal accountability framework](/blog/When-The-AI-Did-It-Is-No-Longer-a-Defense).

---

**About the author**: conor is the founder of [AccessiTech](https://accessi.tech) and a practitioner in AI governance methodology, with prior humanitarian deployments including Gisida, UNICEF, and OCHA.
