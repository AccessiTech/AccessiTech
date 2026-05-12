---
title: 'What DogmaMCP Does (And Why It Took Four Posts to Get Here)'
date: '2026-05-14'
author: conor
tags:
  - ai-governance
  - methodology
  - oss
  - endogenai
  - agent-workflows
  - dogma
  - mcp
status: draft
image: assets/images/dogmamcp-og.png
imageAlt: 'DogmaMCP — experimental governance framework for endogenous AI workflows'
description: 'Four posts about what goes wrong when AI systems lack governance. This is what we built in response.'
---

# What DogmaMCP Does (And Why It Took Four Posts to Get Here)

Four weeks ago, we started publishing a series about what happens when AI systems operate without governance architecture.

Not hypotheticals. Not risk frameworks. Specific systems, specific failures, specific costs.

We started with [the architecture argument](/blog/AI-Governance-Is-an-Architecture-Problem-Not-a-Compliance-Checkbox): governance embedded in policy documents does nothing when the AI operates faster than any human can read them. Then [memory lock-in](/blog/Memory-Lock-In-AI-Governance): the rules governing your AI system live in vendor infrastructure, and when the vendor changes, those rules change with it — silently, without your knowledge or consent. Then [the accountability gap](/blog/When-The-AI-Did-It-Is-No-Longer-a-Defense): when an AI makes a decision no one explicitly authorized, the legal exposure lands on whoever deployed it — regardless of whether they controlled the system. And [most recently](/blog/When-AI-Kills-Data-Sovereignty-High-Stakes): a school in Minab, southern Iran. A Pentagon targeting system called Maven. A database that hadn't been updated in a decade. 180 people dead — most of them girls between seven and twelve years old.

That is the arc. This is what we built in response.

---

## The Pattern Underneath All Four

Let me be precise about what the arc actually demonstrated.

The Maven strike was not primarily a data quality failure. The Kenya healthcare AI cost escalation — where a vendor-configured system increased costs for the most vulnerable populations, the opposite of its stated policy goal — was not primarily a procurement failure. The Meta/Moltbook acquisition that moved liability exposure to every organization using the platform, 48 hours after the deal closed and without any notification, was not primarily a legal oversight.

Each of those is the surface layer.

The underlying pattern is this: **the rules governing how the AI system behaves — what data it uses, how it interprets instructions, what actions are valid, how fast it operates — live somewhere other than the organization deploying it and accountable for it.**

In every case, a governance substrate exists. It has to — an AI system cannot operate without one. The question is who wrote it, who controls it, and whether the organization using the system has any say in how it evolves.

In most enterprise AI deployments today: the vendor wrote it, the vendor controls it, and the deploying organization is accountable for outcomes they did not design and cannot modify.

That's the pattern. It shows up in defense targeting. It shows up in healthcare insurance platforms. It shows up in developer tooling. The PocketOS incident — where user data was deleted because a platform update changed what the AI agent was permitted to do — is the same pattern at smaller scale. The stakes vary. The architecture doesn't.

---

## What DogmaMCP Is

DogmaMCP is our attempt at an answer to that architecture problem.

It's an experimental governance framework for endogenous AI workflows. The short version: a way to encode the values, constraints, and decision-making logic of an AI-assisted development workflow into the substrate itself — not into prompts that get forgotten, not into a vendor's proprietary infrastructure, not into a PDF policy document that no AI agent will ever read.

The longer version requires understanding what "endogenous" means here.

Endogenous means originating from within. An endogenous governance framework is one where the rules governing system behavior are authored, owned, version-controlled, and auditable by the organization using it — not imported from an external platform, not embedded in opaque infrastructure, not contingent on a third party maintaining a configuration you don't have access to.

DogmaMCP is not the only answer to this problem. It is one answer, built for a specific context: agentic development workflows using the Model Context Protocol. We built it because we needed it, and because the existing approaches — system prompts, harness-level instructions, external policy documents — didn't hold under the conditions we were working in.

"Values ingrained, sovereignty sustained" is the tagline. That is the design goal, not a marketing claim. It means: the governance rules live in the repository, not in the harness. They're versioned with the code. They travel with the project. They can be audited, forked, and changed by the people who own the work.

---

## How It Works

The implementation is straightforward enough to describe without a deep dive.

DogmaMCP's core is an inheritance chain:

**MANIFESTO.md** — foundational axioms. This is where values live: endogenous-first (scaffold from existing system knowledge before reaching outward), algorithms before tokens (prefer deterministic encoded solutions over interactive token burn), local compute first (minimize token usage, run locally whenever possible). These are not aspirational statements. They are load-bearing constraints that every other layer inherits.

**AGENTS.md** — operational constraints. Fleet-wide behavioral rules derived from the axioms. What all agents must do. What all agents must never do. The guardrails that make the fleet's behavior predictable and auditable across sessions.

**Role files (`.agent.md`)** — who does a task. Each agent role has a defined scope, a defined toolset, and explicit handoff paths. A role file cannot override a constraint in AGENTS.md. The toolset ceiling is bounded — no agent carries more tools than it can reliably exercise.

**SKILL.md files** — how a task is done. Reusable procedures that any agent in the fleet can load, encoding the knowledge needed to execute a workflow correctly without burning tokens re-deriving it each session.

**Session behavior** — what actually gets enacted. The observable layer where all the encoding above becomes visible as decisions and actions.

Every layer is a re-encoding of the layer above it. Values flow downward. Constraints accumulate. No session starts from scratch.

That last part matters. Every interaction with a language model costs tokens. Every session that re-explains governance rules from scratch is burning resources to re-derive constraints that have already been encoded. The inheritance chain means governance is pre-computed — it lives in files the agent reads before acting, not in prompts the human types every session.

The MCP server exposes tooling that connects this substrate to the live development environment: governance validation, substrate health checks, session scaffolding, research caching. Nothing in that stack requires an external API call you don't control.

---

## What "Experimental" Means Here

DogmaMCP is not production-ready. That is not a hedge — it is a design stance.

We're publishing it as an experiment because the governance problem we're trying to solve is not yet well-understood at the industry level, and we don't think pretending otherwise serves anyone. The patterns we've encoded work for our workflows. We don't know yet how they generalize, what the failure modes are at scale, or whether the inheritance chain holds up under conditions we haven't encountered.

"Experimental" here means three specific things.

**Community-first**: We want practitioners who've hit the same wall to look at what we built, tell us what's wrong with it, and build on it if they find it useful. The architecture is documented. The reasoning is documented. The failure modes we've already encountered are documented.

**Practitioner-first**: We're not targeting enterprise procurement conversations. We're not looking for deployment partnerships. We're looking for people who think about governance at the architecture level and have opinions about what the right approach looks like.

**OSS throughout**: The methodology is open. The framework is open. The roadmap is informed by what practitioners actually need, not by what makes for a cleaner narrative.

"Experimental" does not mean "incomplete." The governance substrate we use internally is committed, tested, and applied in every session. We're honest about the boundary between what we know works and what we're still figuring out. That's the distinction that matters.

---

## Who This Is For

The people we built this for are developers and technical teams who've already hit the governance gap in their own agentic workflows.

You've noticed that your AI agents behave inconsistently across sessions — the same role exhibits different behavior depending on how the session started. Or the rules you explained in one prompt get forgotten by the next one. Or you don't actually know what your agent is authorized to do because there's no canonical place where that's written down and version-controlled. Or your governance is embedded in a platform you don't control, and you're not confident about what happens when that platform changes.

If none of that resonates, DogmaMCP is probably not for you yet. The governance gap only becomes painful at a level of agentic complexity where inconsistency has real consequences.

If it does resonate: we've been building in the open. The substrate is there to read, fork, and critique. We're early enough that practitioner feedback will actually shape where this goes.

We're not looking for enterprise procurement conversations. We're looking for the people who've run into this problem for real, have thought hard about what good architecture looks like, and want to think through it with us.

---

## Start Here

The repository: [https://github.com/EndogenAI/dogma](https://github.com/EndogenAI/dogma)

If you want the context that got here, the four-post arc:

- [AI governance is an architecture problem, not a compliance checkbox](/blog/AI-Governance-Is-an-Architecture-Problem-Not-a-Compliance-Checkbox)
- [Memory lock-in is the real risk in LLM-based systems](/blog/Memory-Lock-In-AI-Governance)
- [When 'The AI Did It' is no longer a legal defense](/blog/When-The-AI-Did-It-Is-No-Longer-a-Defense)
- [When AI kills: data sovereignty in high-stakes systems](/blog/When-AI-Kills-Data-Sovereignty-High-Stakes)

DMs are open. If you're building agentic workflows and you've hit the governance gap — inconsistent behavior, unauditable rules, constraints that live in a platform you don't control — I want to hear what you ran into.

---

conor is the founder of [AccessiTech](https://accessi.tech) — an accessible software consultancy building AI governance tooling and accessible digital products. [EndogenAI](https://github.com/EndogenAI) is the open-source methodology arm.
