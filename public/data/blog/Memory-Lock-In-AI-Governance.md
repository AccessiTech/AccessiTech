<!--
title: Memory Lock-In: How Proprietary Harnesses Are Capturing Your AI Governance
description: Vendor lock-in has a new form. When your AI governance lives inside a proprietary harness you don't control, a single acquisition can shift the liability — retroactively. Here's how to see it coming.
keywords: AI governance, memory lock-in, AI harness, vendor lock-in, AI agent orchestration, governance substrate, open source AI
date: 2026-04-28
status: draft
series: AI Governance Architecture
part: 2 of 3
prev: /blog/AI-Governance-Is-an-Architecture-Problem-Not-a-Compliance-Checkbox, AI Governance Is an Architecture Problem
next: /blog/introducing-dogmamcp
og_image: /images/blog/og/Memory-Lock-In-AI-Governance.png
og_image_alt: Memory Lock-In: How Proprietary Harnesses Are Capturing Your AI Governance
visual_notes: hero=proprietary lock/chain structural visual 1200×630 px WCAG-AA; og=dedicated title-on-dark 1200×630 px; inline=harness-control diagram as image
-->

# **Memory Lock-In: How Proprietary Harnesses Are Capturing Your AI Governance**

You've heard of vendor lock-in. You know it from databases, from cloud infrastructure, from SaaS contract cycles. Memory lock-in in AI governance is the same mechanism — but most procurement teams haven't caught up to it yet, and the window where the choice is still reversible is closing.

## **What a Harness Is**

The model is the engine. The harness is everything else — memory retrieval, tool dispatch, state routing, retry logic, identity management, and context window assembly. When you ask an AI agent what it remembers about your last conversation, the answer comes from the harness. When you ask it not to surface confidential information in its responses, the enforcement mechanism — if it exists — lives in the harness.

Sarah Wooders, co-founder of [Letta](https://x.com/sarahwooders/status/2040121230473457921), put it precisely: _"Asking to plug memory into an agent harness is like asking to plug driving into a car."_ Memory is not a feature you add to an agent. It's constitutive of what the agent is. Without memory, there is no continuity, no context, no behavioral pattern to govern.

Most enterprise conversations about AI adoption center on model selection — GPT-4 versus Claude versus Gemini. The harness architecture question rarely appears in procurement reviews or vendor due diligence checklists. That's the gap where lock-in enters — quietly, before anyone has named it as a risk.

## **Why Governance Lives in the Harness**

Governance is behavior under constraints. It isn't a document — it's the set of mechanisms that determine what an agent does, and doesn't do, at runtime. If the harness controls what the agent remembers, what context it retrieves, which tools it can invoke, and how it routes between states, then the harness is where governance either lives or doesn't.

You can write a policy that says "agents must not surface personally identifiable information in customer-facing responses." That policy is meaningful only if it's encoded in the harness: as a retrieval filter, a context-assembly rule, or an output constraint. If the harness has no enforcement mechanism for that requirement, the model will surface PII whenever it appears in retrieved context. Policy documents do not enforce themselves.

This is not a theoretical concern. It's the reason data processing agreements require technical controls, not just contractual ones. AI governance requires the same standard: controls at the layer that actually shapes behavior, not documentation that describes the behavior you'd like to see.

## **The Proprietary Harness Problem**

LangGraph, LangChain, and similar orchestration stacks are extraordinary tools — and they are vendor relationships, not owned infrastructure. This is not a criticism. It's a structural description that most organizations have not explicitly processed as a governance decision.

When your governance substrate lives in a vendor's managed memory store and routing layer, you've made a bet: that their governance model and yours will stay aligned, that their pricing model will remain viable, and that their ownership structure will remain stable. Most enterprise software relationships carry that bet implicitly. What's different with AI harnesses is the governance surface. The harness doesn't just store data — it shapes behavior. That makes the alignment bet higher-stakes than an equivalent bet on a database vendor.

[Harrison Chase, CEO of LangChain](https://www.langchain.com/blog/your-harness-your-memory), titled his April 2026 post plainly: "Your harness, your memory." The core claim — "if you don't own your harness, you don't own your memory" — is an acknowledgment from inside the vendor ecosystem that this architecture is intentional, not accidental. The question isn't whether proprietary harnesses exist. The question is whether you've evaluated yours as a governance decision.

## **The Acquisition Scenario**

In early March 2026, Meta acquired Moltbook, an AI agent orchestration platform. Within days, the Terms of Service changed. The change was not subtle. In the updated Terms, the following clause appeared in bold, all-caps:

> _"AI AGENTS ARE NOT GRANTED ANY LEGAL ELIGIBILITY… YOU AGREE THAT YOU ARE SOLELY RESPONSIBLE FOR YOUR AI AGENTS."_

The clause was [reported by Times of India on March 18, 2026](https://timesofindia.indiatimes.com/technology/tech-news/days-after-acquisition-by-mark-zuckerbergs-meta-ai-agents-platform-moltbook-changes-it-terms-of-service-moltbook-wants-users-to-know-in-bold-all-caps-that-/articleshow/129622941.cms). The liability that had been at least partially shared was now, retroactively and unilaterally, entirely yours.

The point is not that Meta acted illegally — they probably didn't. Platforms update Terms of Service. The point is that this clause existed to be enforced, and its insertion was unilateral and retroactive. Any proprietary harness vendor can insert equivalent language. The risk isn't that they will. The risk is that you have no structural defense if they do — because your governance substrate, your memory store, your behavioral rules, live in infrastructure you don't control.

## **The AGENTS.md Open Standard**

The structural response to proprietary lock-in is an open governance substrate — where the instructions, constraints, and behavioral rules that govern your agents exist as plain-text files you version-control, not as configuration that lives inside a vendor's platform.

[Harrison Chase's April 2026 post](https://www.langchain.com/blog/your-harness-your-memory) validates this framing from inside the orchestration ecosystem. The argument isn't that proprietary harnesses are wrong. It's that the choice of harness architecture is a governance decision — and that organizations need to make it deliberately, not by default.

An open-format governance file means no vendor can unilaterally modify the rules. It means you can port your governance constraints — not just your model, but your behavioral rules, your memory architecture, your access controls — to a different orchestration stack without rebuilding from scratch. This is not a new idea. It's the same approach taken with open-source databases and open container formats. AGENTS.md is a pattern, not a product. Any team can implement it without adoption of any particular platform or commercial relationship.

## **How to Audit Your Current Exposure**

Five questions to apply to your current harness vendor before an acquisition announcement makes them urgent:

1. **Where does your agent's memory live** — in a vendor's hosted memory store, or in infrastructure you control?
2. **If your harness vendor updated their ToS tomorrow**, would you know within 24 hours — and would you understand the governance implications?
3. **Can you port your governance constraints** — not just your model, but your rules and memory — to a different orchestration stack without rebuilding from scratch?
4. **Does your current AI governance documentation describe harness-layer behavior**, or only model-layer behavior?
5. **Who in your organization is accountable** for harness vendor due diligence the same way they're accountable for data processor agreements?

These aren't trick questions. They're the same questions a responsible infrastructure team asks about any vendor with access to sensitive data. Most organizations haven't applied that level of rigor to AI harnesses yet — not because the risk is theoretical, but because the framing hasn't caught up to the technology.

---

_This is the second piece in a three-part series on AI governance as infrastructure. [Part 1](/blog/AI-Governance-Is-an-Architecture-Problem-Not-a-Compliance-Checkbox) established why governance is an architecture problem, not a compliance checkbox. Part 3 explores what substrate-level sovereignty looks like in practice — and the open-source implementation that emerged from field conditions where ungoverned behavior wasn't an option._

_[Follow conor on LinkedIn](https://www.linkedin.com/in/ckellydesign) for the live thread._

---

**About the author**: conor is the founder of [AccessiTech](https://accessi.tech) and a practitioner in AI governance methodology, with prior humanitarian deployments including Gisida, UNICEF, and OCHA.
