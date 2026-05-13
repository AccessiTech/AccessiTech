<!--
title: Introducing EndogenAI/DogmaMCP
description: Making AI Accountable to Your Values
keywords: AI governance, values enforcement, accountability, local-first AI, DogmaMCP, EndogenAI
date: 2026-05-14
status: draft
og_image: ./assets/images/introducing-endogenai-dogmamcp-og.png
og_image_alt: Introducing EndogenAI/DogmaMCP
image: ./assets/images/introducing-endogenai-dogmamcp-og.png
imageAlt: Introducing EndogenAI/DogmaMCP
-->

# Introducing EndogenAI/DogmaMCP

Every organization says they have values. Far fewer can prove their AI systems actually follow them. The gap between written principles and deployed behavior isn't just embarrassing—it's structural. This post introduces a governance framework designed to close that gap: where your values become infrastructure, and accountability isn't a promise but an audit trail.

---

<!-- role: hook -->

## Making AI Accountable to Your Values

AI systems are failing accountability tests right now, in production. The UK Competition and Markets Authority [documented cases](https://share.google/6b9E6lj45d4m2dTQD) where AI agents manipulated users and organizations lost meaningful oversight of automated decisions. These aren't hypothetical risks—they're patterns emerging wherever AI touches consequential decisions.

> "People will need to be able to trust that AI agents will act in accordance with their interests and that they are not being steered or manipulated in ways that lead to worse personal outcomes."
> — UK Competition and Markets Authority, 2026

The stakes are getting higher. Regulators in the UK and US are beginning to hold organizations accountable for what their AI systems actually do—not just what their policies say they should do. And decisions made by AI in hiring, lending, and healthcare are increasingly being challenged in court.

But here's the harder question: when we talk about "AI governance," whose values are we actually enforcing? Generic frameworks sound universal until you need them to encode your organization's specific commitments—to accessibility, to transparency, to the communities you serve. That's when the gap becomes visible: the distance between what you believe and what your systems actually do.

Closing that gap requires more than documentation. It requires infrastructure that makes your values operational—where principles become constraints, and constraints become enforcement. This post introduces a system designed to do exactly that: where governance becomes infrastructure, and your values run locally.

---

<!-- role: problem -->

## What Governance Actually Requires

Most organizations approach AI governance from one of two directions. Some write excellent policy documents—values statements, principles, ethical frameworks—and then struggle to operationalize them. Others build guardrails and safety checks after the fact, trying to constrain systems that were never designed with those values in mind. Both approaches miss the same structural requirement: governance needs two surfaces working together.

Most AI governance tools focus on what a single AI model is allowed to say or do—constraining it at the point of output. That's useful, but it misses the bigger picture. When multiple AI agents work together, what matters most is how they coordinate: what information they can access, who has authority to review their decisions, and how their combined behavior gets audited. EndogenAI operates at that coordination layer.

The first surface is substrate: the foundational layer where your values are encoded as operational constraints. Not aspirational language in a PDF, but specific rules about how systems behave, what data they access, and what decisions require human oversight. The second surface is enforcement: the tooling that checks compliance automatically, at development time, before anything ships. Think pre-commit hooks, runtime validators, audit trails—mechanisms that don't require human vigilance every single time.

The gap isn't that organizations lack either surface. It's that they rarely integrate them. Policies live in one system, enforcement happens (or doesn't) in another, and the translation layer is human interpretation under time pressure. That's where drift happens. That's where your stated values and your deployed systems diverge.

Standards bodies recognize this. [NIST's AI Risk Management Framework](https://doi.org/10.6028/NIST.AI.100-1) explicitly requires organizations to track and govern third-party AI dependencies—not just document them, but maintain operational oversight. The challenge is building systems where that oversight is structural, not aspirational.

This requires integrating both surfaces: substrate that encodes your values, and enforcement that makes them automatic.

---

<!-- role: solution -->

## Introducing EndogenAI and DogmaMCP

EndogenAI addresses this by treating governance as a two-layer architecture. The first layer is the [dogma repository](https://github.com/EndogenAI/dogma)—a template where your organization encodes its values in two key files. [MANIFESTO.md](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md) captures foundational axioms (what you believe), while [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md) translates those axioms into operational constraints (what your AI systems must do). These aren't natural-language aspirations; they're structured instructions that agents read and follow.

The second layer is [DogmaMCP](https://github.com/EndogenAI/dogma/blob/main/mcp_server/README.md), a local Model Context Protocol server that enforces those constraints through tooling. Pre-commit hooks check that every code change respects your documented rules. Runtime validators ensure agents don't fetch external data without explicit permission. Session scratchpads create audit trails showing exactly what each agent did and why. The Model Context Protocol integration means any MCP-compatible AI tool—VS Code Copilot, Claude Desktop, Cursor—can access these governance tools as native capabilities.

What makes this architecture work is how the layers connect. Principles flow into tooling without requiring human re-interpretation each session. When an agent needs to fetch a source, it checks your caching rules first. When it's about to commit code, your enforcement gates run automatically. The system doesn't trust that agents will remember your values—it makes compliance the path of least resistance.

---

<!-- role: mechanism -->

## How Values Become Infrastructure

Think of governance as a construction project. You start with blueprints (your values), translate them into building codes (operational constraints), hire specialized crews (agent roles), give them standard procedures (workflow skills), and run inspections at key milestones (enforcement scripts). Each layer is a translation, but none of them are optional—and they have to stay synchronized.

In EndogenAI, this becomes a five-layer encoding chain:

1. **MANIFESTO.md** — foundational axioms like "Endogenous-First" (prefer internal knowledge over external sources) and "Algorithms Before Tokens" (encode solutions as scripts, not interactive prompts)
2. **AGENTS.md** — fleet-wide operational constraints (every agent must check cached sources before fetching URLs, must use deterministic tools instead of regenerating answers each session)
3. **.agent.md role files** — individual agent posture (which tools it can access, which other agents it hands off to, what its decision authority is)
4. **SKILL.md files** — reusable procedures that multiple agents can invoke (how to run a research sprint, how to validate a pull request, how to triage review comments)
5. **scripts/** — deterministic enforcement (validators that block commits violating your rules, watchers that annotate files automatically, health checks that audit substrate integrity)

The mental model is a continuous integration/continuous deployment (CI/CD) pipeline, but for governance. Every change flows through gates that check alignment with your stated values. Every agent action generates audit trails you can inspect later. And because it all runs locally—on your development machine, in your repository—you maintain complete visibility and control. The system is as inspectable as the code it governs.

---

<!-- role: evidence -->

## Why Sovereignty and Accountability Matter

When enforcement lives in the cloud, it has the same failure modes as any other cloud dependency: network outages, service degradation, policy changes you didn't ask for. EndogenAI runs locally because local enforcement is structurally more reliable. Your governance gates execute on your machine, using your electricity, reading files you control. If your network connection drops, your enforcement layer keeps working. That's not just convenience—it's a different risk profile.

Vendor lock-in in AI isn't just about pricing or contract terms. The [EU Agency for Cybersecurity identifies eight dimensions of lock-in risk](https://www.enisa.europa.eu/publications/cloud-computing-risk-assessment), including memory lock-in (systems that can't migrate context between providers) and policy lock-in (governance rules baked into proprietary platforms you don't control). When your values are encoded in a vendor's system, you're trusting them to interpret and enforce those values forever—or until they change their terms of service.

Accountability in AI governance isn't abstract. It means affected people—the users of your software, the communities your decisions impact—have a mechanism to audit what happened and why. That requires audit trails, not just assurances. It requires systems where you can trace a decision from the governance rule that shaped it, through the agent role that executed it, to the specific commit that encoded it. [NIST's AI RMF](https://doi.org/10.6028/NIST.AI.100-1) mandates that organizations maintain this kind of operational oversight for third-party AI components, not as documentation theater but as ongoing structural capacity.

The Endogenous-First axiom captures this practically: your organization's values, encoded in files you control, take precedence over external defaults or vendor-supplied templates. You're not customizing someone else's governance framework—you're defining your own and using tooling to enforce it consistently. That's the difference between compliance as a checklist and governance as infrastructure.

---

<!-- role: close -->

## Where We Go From Here

The [dogma repository](https://github.com/EndogenAI/dogma) is open source today on GitHub. Organizations can fork it, customize [MANIFESTO.md](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md) and [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md) to encode their own values, and start using the agent fleet and enforcement tooling immediately. Getting started is straightforward: copy the template, write your first values document, and connect it to your team's workflow. Most organizations start with a single AI process before expanding across their systems. [DogmaMCP](https://github.com/EndogenAI/dogma/blob/main/mcp_server/README.md)—the Model Context Protocol server that exposes governance tools to any MCP-compatible AI client—will follow in a staged public release.

We're following a Red Hat-style model: the methodology and tooling are free and open, but enterprises needing implementation support, custom agent development, or integration with existing governance frameworks can engage AccessiTech for paid services. The goal is to make values-aligned AI infrastructure accessible to organizations of any size while sustaining the engineering work that keeps it robust.

If you're interested in contributing, the repository welcomes issues, pull requests, and discussions. We're particularly interested in hearing from organizations experimenting with agent governance patterns, compliance teams mapping regulatory requirements to operational constraints, and anyone working on local-first AI infrastructure. Follow-up posts in this series will dive deeper into specific governance patterns—agent fleet maturity models, substrate health checks, and how to migrate existing AI workflows into this framework. The conversation is just beginning.

---
