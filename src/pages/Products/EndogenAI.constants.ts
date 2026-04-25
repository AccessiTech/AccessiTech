/**
 * EndogenAI Product Page — Markdown String Constants
 *
 * This file contains all copy for the EndogenAI product page, formatted as
 * Markdown strings. Each constant maps to a section in the rendered page.
 *
 * Voice: Professional, accessible, link-heavy, governance-first.
 * Not sales language — educational + accountability-focused tone.
 *
 * All governance research links point to dogma repository canonical docs:
 * https://github.com/EndogenAI/dogma/blob/main/docs/research/
 */

// §1 Hero Section
export const HERO_TAGLINE = `The accountability gap is growing. AI systems are built without genuine consideration for the people who depend on them. **EndogenAI fixes that** — an open-source methodology for embedding governance into every layer of your AI workflows.`;

// §2 The Problem
export const PROBLEM_INTRO = `Recent governance reports expose the same structural risks: AI systems launched without accountability mechanisms, platform dependencies that trap organizations, and decision-making processes that exclude the people most affected. A less visible risk runs underneath all of them: most AI teams don't realize their agent harness — the scaffolding between their LLM and their tools, data, and memory — is the stickiest lock-in vector of all. Here's what the research shows:`;

export const PROBLEM_CARD_1_TITLE = `UK CMA: AI Agent Autonomy Failures`;
export const PROBLEM_CARD_1_SHORT_BODY = `The UK CMA's 2026 watchdog report documents systematic AI agent failures: manipulation, unintended escalation, and loss of human oversight. [See the full analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md#) — these aren't theoretical risks.`;
export const PROBLEM_CARD_1_BODY = `The UK Competition & Markets Authority's 2026 watchdog report documents systematic autonomy failures in AI agent systems: manipulation, unintended escalation, and loss of human control. Organizations deploy agents without genuine oversight mechanisms, then face cascading failures. [See the full analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md#) — these aren't theoretical risks. They're happening now.`;

export const PROBLEM_CARD_2_TITLE = `Platform Lock-In: Vendor Volatility`;
export const PROBLEM_CARD_2_SHORT_BODY = `Meta's acquisition of Moltbook shows how organizations can lose operational control overnight when vendor policies shift without warning. [Platform lock-in research](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-platform-lock-in-risks.md#) documents the repeating pattern.`;
export const PROBLEM_CARD_2_BODY = `Meta's acquisition of Moltbook and subsequent Terms-of-Service changes illustrate a structural risk: organizations building on proprietary AI platforms can lose operational control overnight. When vendor policies shift, governance infrastructure built on that platform breaks. [Platform lock-in research](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-platform-lock-in-risks.md#) shows the pattern is repeating — avoid it by designing for portability.`;

export const PROBLEM_CARD_3_TITLE = `OWASP LLM Top 10: Security Blindness`;
export const PROBLEM_CARD_3_SHORT_BODY = `Seven of the OWASP LLM Top 10 apply to agentic workflows — three at High severity. Most organizations don't know they're exposed. [Full threat model analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/owasp-llm-threat-model.md#) — governance closes these gaps.`;
export const PROBLEM_CARD_3_BODY = `Seven of the OWASP Top 10 for LLM Applications apply directly to agentic workflows. Three are High-severity: prompt injection attacks, excessive agency (uncontrolled tool access), and sensitive information leakage. Most organizations don't know their AI systems are exposed. [Full threat model analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/owasp-llm-threat-model.md#) — governance is how you close these gaps.`;

export const PROBLEM_CARD_4_TITLE = `Harness Lock-In: Memory Loss`;
export const PROBLEM_CARD_4_SHORT_BODY = `Deleting a proprietary AI agent loses months of learned preferences — permanently. Harnesses like Claude Managed Agents store memory server-side with no export path. [Full analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/harness-memory-governance.md) — memory lock-in is not recoverable.`;
export const PROBLEM_CARD_4_BODY = `When Harrison Chase deleted and recreated his email assistant, it lost everything — months of learned preferences, interaction patterns, and behavioral refinements. That's harness-mediated memory loss in practice. Platforms like Claude Managed Agents and the OpenAI Assistants API store learned context server-side with no export path: delete the agent, lose the memory. API lock-in is recoverable — you can retrain on your own data. Memory lock-in is not recoverable without a deliberate extraction strategy built before dependency accrues. [Full analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/harness-memory-governance.md)`;

// §3 What EndogenAI is
export const WHAT_TITLE = `What EndogenAI is`;

export const WHAT_AXIOMS_HEADER = `Three Core Axioms`;
export const WHAT_AXIOMS_BODY = `**Endogenous-First** — read your system's own encoded knowledge before acting. **Algorithms Before Tokens** — prefer deterministic, scripted solutions over interactive generation. **Local Compute-First** — run enforcement locally, at the commit boundary, not delegated to cloud CI. Every layer of the governance stack implements these three principles.`;

export const WHAT_STACK_HEADER = `The Governance Stack`;
export const WHAT_STACK_INTRO = `EndogenAI governance is encoded as a five-layer stack — each layer a concrete artifact you own, audit, and extend.`;

export interface GovernanceStackItem {
  title: string;
  description: string;
  link: string;
}

export const GOVERNANCE_STACK_ITEMS: GovernanceStackItem[] = [
  {
    title: `MANIFESTO.md`,
    description: `Your organization's foundational values and operational constraints — the constitutional layer every other artifact inherits from.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#`,
  },
  {
    title: `AGENTS.md`,
    description: `Agent fleet conventions, decision gates, commit discipline, and phase sequences — principles translated into enforceable operational rules.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#`,
  },
  {
    title: `Agent roles (.agent.md files)`,
    description: `Specialized agents with explicit tool restrictions, defined posture, and handoff patterns — no agent gets a general-purpose toolkit.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md`,
  },
  {
    title: `Reusable skills (SKILL.md files)`,
    description: `Domain-specific workflows packaged so any agent can invoke them — the "how to" layer for procedures used by more than one role.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/.github/skills/README.md`,
  },
  {
    title: `Governance scripts`,
    description: `Deterministic validation, linting, and enforcement that run at every commit and push boundary — scripted governance is auditable and repeatable.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/scripts/README.md`,
  },
];

export const WHAT_OSS_HEADER = `The Open-Source Model`;
export const WHAT_OSS_BODY = `This is the same model Red Hat used to open-source enterprise infrastructure: free methodology, paid implementation support. You own every file, audit every layer, and build organizational capabilities that don't depend on any vendor. [Read the full Endogenic Development Manifesto](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#) — the constitutional foundation for everything EndogenAI does. AccessiTech offers implementation consulting for organizations that want hands-on help embedding the stack.`;

// Deprecated — kept for backward compat
export const WHAT_ENDOGENAI_INTRO = WHAT_AXIOMS_BODY;
export const WHAT_DESCRIPTION = WHAT_ENDOGENAI_INTRO;

export const BRAND_RELATIONSHIP = `AccessiTech built EndogenAI as the governance layer for organizations closing the accountability gap with AI systems. The methodology emerges from three years of accessibility-first consulting work: seeing how systems fail when they're built without genuine consideration for the people who depend on them, and discovering that the same structural blindness appears in AI governance. Disability justice principles — centering the expertise of disabled people in redesign — are directly applicable to AI accountability. The people most excluded from a system are the people best positioned to fix it. That insight is the foundation of EndogenAI. We use it in every consulting engagement, and we're open-sourcing it so organizations can apply the same methodology independently.`;

// §3.5 Why your AI needs a Harness
export const HARNESS_TITLE = `Why your AI needs a Harness`;

export const HARNESS_INTRO = `An AI harness is the scaffolding layer between your LLM and your tools, data, and workflows — it manages memory, routes context, enforces access control, and coordinates agent behavior across sessions. Memory is not a plugin on top of a harness; as LangChain's Sarah Wooders put it, "asking to plug memory into an agent harness is like asking to plug driving into a car." They are the same system. That's why proprietary harnesses create the most durable form of AI lock-in: when a vendor controls your harness, they control your accumulated organizational memory — learned preferences, session context, behavioral constraints — and you cannot take that memory with you. [Source: LangChain — Your Harness, Your Memory](https://www.langchain.com/blog/your-harness-your-memory)`;

export const HARNESS_LOCK_IN_CARD_TITLE = `The Lock-In Problem`;
export const HARNESS_LOCK_IN_CARD_BODY = `When Harrison Chase deleted and recreated his email assistant, it lost everything — months of learned preferences, interaction patterns, and behavioral refinements. That's harness-mediated memory loss in practice. Platforms like Claude Managed Agents and the OpenAI Assistants API store learned context server-side with no export path: delete the agent, lose the memory. API lock-in is recoverable — you can retrain on your own data. Memory lock-in is not recoverable without a deliberate extraction strategy built before dependency accrues. Most teams don't build that strategy until after the loss. [Full analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/harness-memory-governance.md)`;

export const HARNESS_OPEN_CARD_TITLE = `The Open Harness Solution`;
export const HARNESS_OPEN_CARD_BODY = `An open harness meets four criteria: model-agnostic (any LLM, not locked to one provider), standards-based (MCP, open agent formats), user-owned memory (your files, your git history — not a vendor's database), and self-hostable (no external API dependencies at runtime). DogmaMCP meets all four — and adds a governance-first fifth: constraints encoded in MANIFESTO.md and AGENTS.md are durable across sessions rather than left to prompt-level negotiation. When you restart a session, your values travel with you. [ADR-011: DogmaMCP as Open Harness Architecture](https://github.com/EndogenAI/dogma/blob/main/docs/decisions/ADR-011-dogmamcp-open-harness.md)`;

export const HARNESS_DOGMAMCP_CARD_TITLE = `DogmaMCP: Governance-First Harness`;
export const HARNESS_DOGMAMCP_CARD_BODY = `Most open harness options optimize for memory first — Letta integrates mem0, LangGraph manages stateful graphs, LangSmith moves traces server-side. None encode governance as substrate constraints. DogmaMCP takes a different architectural position: values defined in MANIFESTO.md and AGENTS.md travel with every session as durable enforcement — not prompt instructions that reset between conversations. It runs entirely local (Apache 2.0, no vendor dependencies), integrates with VS Code Copilot and Claude Desktop via the MCP standard, and exposes governance tools — scratchpad state checks, agent file validators, synthesis auditors — directly to your AI agents. Governance is not an add-on layer; it is the harness architecture. [Validation research](https://github.com/EndogenAI/dogma/blob/main/docs/research/dogmamcp-open-harness-validation.md)`;

// §4 How It Works (Encoding Chain)
export const HOW_TITLE = `How It Works`;

export const HOW_IT_WORKS_INTRO = `EndogenAI governance works as an encoding ladder: each layer (principles → operations → agent roles → skills → runtime behavior) re-encodes the layer above it. This makes governance visible at every scale — from top-level MANIFESTO axioms down to individual script invocations — and it makes drift detectable: if a script doesn't follow the operational constraints, pre-commit hooks catch it before merge.

Here's how that ladder builds up:`;

export interface EncodingStep {
  step: number;
  title: string;
  shortBody: string;
  description: string;
  link: string;
}

export const ENCODING_CHAIN_ARRAY: EncodingStep[] = [
  {
    step: 1,
    title: 'Foundational Axioms (MANIFESTO.md)',
    shortBody: `Your organization's foundational values and axioms define what kind of system you are. EndogenAI uses three: Endogenous-First, Algorithms-Before-Tokens, Local-Compute-First. [Read the full MANIFESTO](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#the-three-core-axioms) — these axioms govern every layer below.`,
    description:
      "Define your organization's core values. EndogenAI uses three: Endogenous-First (read encoded knowledge), Algorithms-Before-Tokens (prefer determinism), Local-Compute-First (enforcement runs locally). These axioms are the constitution — everything else flows from them.",
    link: 'https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#the-three-core-axioms',
  },
  {
    step: 2,
    title: 'Operational Constraints (AGENTS.md)',
    shortBody: `Translate high-level axioms into operational rules the entire agent fleet follows: session gates, commit discipline, file-write guardrails, phase sequences. [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints) is where principles meet practice — the constitutional enforcement layer.`,
    description:
      'Translate axioms into operational rules that the entire agent fleet must follow. Session gates, commit discipline, file-write guardrails, phase sequences, and delegation patterns all live here. This is where principles meet practice.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints',
  },
  {
    step: 3,
    title: 'Agent Roles (.agent.md files)',
    shortBody: `Specialized agents with minimal, role-specific tool sets. Each has explicit posture (readonly, creator, full), handoff patterns, and endogenous sources. No general-purpose toolkits. [Agent fleet catalog](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md) shows how role definitions instantiate MANIFESTO axioms.`,
    description:
      'Define specialized agents with minimal, role-specific tool sets. Each agent has explicit posture (readonly, creator, full), clear handoff patterns, and endogenous sources it reads before acting. No agent gets a general-purpose tool kit.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md',
  },
  {
    step: 4,
    title: 'Reusable Skills (SKILL.md files)',
    shortBody: `Package domain-specific workflows so multiple agents can invoke them. When a procedure is used twice, the third time becomes a skill. [Skills library](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-skills) is the "how to" layer — decision gates, validation checklists, repeatable techniques.`,
    description:
      'Package domain-specific workflows so multiple agents can invoke them. Skills are the "how to" layer — procedures, decision gates, validation checklists. When a procedure is used twice, the third time becomes a skill.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-skills',
  },
  {
    step: 5,
    title: 'Deterministic Governance Scripts',
    shortBody: `Deterministic validation and enforcement encoded as scripts that run on every commit (pre-commit hooks), push (pre-push tests), and in CI. [Scripts catalog](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md) — scripted governance is auditable, repeatable, and more reliable than manual review gates.`,
    description:
      'Encode validation, enforcement, and automation as scripts that run on every commit (pre-commit hooks), every push (pre-push tests), and in CI. Scripted governance is auditable, repeatable, and detectable—no manual review gate can be as reliable as a script.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/scripts/README.md',
  },
  {
    step: 6,
    title: 'Session State & Handoff (Scratchpad)',
    shortBody: `Cross-agent communication in gitignored scratchpad files (\`.tmp/<branch>/<date>.md\`). Each agent appends findings under its own section; executive orchestrators synthesize across phases. [Scratchpad protocol](https://github.com/EndogenAI/dogma/blob/main/docs/guides/session-management.md#scratchpad-governance) prevents context loss across compaction events.`,
    description:
      "Cross-agent communication happens in `.tmp/<branch>/<date>.md` scratchpad files (gitignored, never committed). Each agent appends findings under its own named section. The executive orchestrator reads the full scratchpad and synthesizes across phases—but agents don't read laterally.",
    link: 'https://github.com/EndogenAI/dogma/blob/main/docs/guides/session-management.md#scratchpad-governance',
  },
  {
    step: 7,
    title: 'Runtime Validation & Monitoring',
    shortBody: `Pre-commit hooks and CI gates enforce all upstream constraints at every boundary. Commit violates AGENTS.md? Pre-commit rejects before push. CI finds violations? PR cannot merge. [Guardrails reference](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails) — governance is checked continuously, not retrospectively.`,
    description:
      'At execution time, pre-commit hooks and CI gates enforce all upstream constraints. If a commit violates AGENTS.md rules, pre-commit rejects it before push. If CI finds violations, the PR cannot merge. Governance is checked at every boundary.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails',
  },
];

// Export as ENCODING_STEPS for component compatibility
export const ENCODING_STEPS = ENCODING_CHAIN_ARRAY;

// §5 dogma & DogmaMCP
export const DOGMA_CARD_TITLE = `dogma`;
export const DOGMA_CARD_SHORT_BODY = `The governance corpus you fork and extend: MANIFESTO.md axioms, agent roles, scripts, research synthesis. Every organization using EndogenAI [reads from dogma](https://github.com/EndogenAI/dogma) and adapts it for their context — governance lives in your git repository, not vendor dashboards.`;
export const DOGMA_CARD_MODAL_BODY = `The EndogenAI governance corpus — open-source, fully auditable, no proprietary lock-in. dogma contains the MANIFESTO, AGENTS.md operational guidelines, agent role definitions, reusable skills, governance scripts, and all research synthesis docs. It's the substrate: every organization using EndogenAI reads from dogma and extends it for their own context. Governance doesn't live in vendor dashboards or closed platforms. It lives in your git repository.`;

export const DOGMAMCP_CARD_TITLE = `DogmaMCP`;
export const DOGMAMCP_CARD_SHORT_BODY = `MCP server exposing dogma tools to AI agents: validators for agent files, scratchpad state checks, scaffolding templates. Runs locally, integrates with VS Code Copilot and Claude Desktop, enforces [governance programmatically](https://github.com/EndogenAI/dogma/tree/main/mcp_server). It's the bridge between encoded substrate and AI workflow.`;
export const DOGMAMCP_CARD_MODAL_BODY = `A Model Context Protocol (MCP) server that exposes dogma governance tools to your AI agents and development workflows — validators for agent files, research syntheses, scratchpad state checks, agent scaffolding templates, and more. DogmaMCP runs locally (no external API calls), integrates with VS Code Copilot and Claude Desktop, and lets your agents programmatically enforce governance policies. It's the bridge between the encoded substrate and your AI workflow.`;

// Deprecated — kept for backward compat
export const DOGMA_CARD_BODY = DOGMA_CARD_SHORT_BODY;
export const DOGMAMCP_CARD_BODY = DOGMAMCP_CARD_SHORT_BODY;

// §6 Research Section
export const RESEARCH_INTERNAL_HEADER = `Our Research`;
export const RESEARCH_EXTERNAL_HEADER = `External Validation`;

export interface ResearchItem {
  title: string;
  shortBody: string;
  body: string;
  link: string;
}

export const RESEARCH_INTERNAL_ITEMS: ResearchItem[] = [
  {
    title: `Endogenic Design Patterns for AI Systems`,
    shortBody: `Biological scaffolding metaphors for AI governance. Organizations encoding knowledge persistently show [40–60% reduction in incident recovery time](https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/endogenic-design-paper.md) compared to ad-hoc approaches — the substrate grows stronger with each session.`,
    body: `Biological scaffolding metaphors applied to AI system design. Organizations that encode knowledge persistently show 40–60% reduction in incident recovery time compared to ad-hoc approaches.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/endogenic-design-paper.md`,
  },
  {
    title: `Values Encoding Fidelity and Agent Fleet Maturity`,
    shortBody: `How to measure whether your governance actually works: cross-layer validation, encoding fidelity tests, L0–L3 maturity model. [Values encoding research](https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/values-encoding.md) defines the diagnostic framework — from tacit knowledge to organizational policy.`,
    body: `How to measure whether your governance actually works — cross-layer validation, encoding fidelity tests, and the L0–L3 maturity model from tacit knowledge to organizational policy.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/values-encoding.md`,
  },
  {
    title: `Bubble Clusters and Substrate Fragmentation`,
    shortBody: `Why AI workflows built with disconnected agents fail at governance boundaries. Unified substrate and version control [prevent "bubble" formation](https://github.com/EndogenAI/dogma/blob/main/docs/research/neuroscience/bubble-clusters-substrate.md) where agents silently violate constraints — fragmented state is the enemy of coherence.`,
    body: `Why AI workflows built with disconnected agents fail at governance boundaries. Unified substrate and version control prevent "bubble" formation where agents silently violate constraints.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/docs/research/neuroscience/bubble-clusters-substrate.md`,
  },
  {
    title: `UK CMA AI Autonomy Report`,
    shortBody: `Watchdog findings on agent autonomy failures validate EndogenAI's Minimal-Posture principle: limit tool scope, require explicit phase gates, treat every escalation as [a human decision boundary](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md). Autonomy without constraints produces manipulation and unintended escalation.`,
    body: `Watchdog findings on agent autonomy failures validate EndogenAI's Minimal-Posture principle: limit tool scope, require explicit phase gates, and treat every escalation as a human decision boundary.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md`,
  },
];

export const RESEARCH_EXTERNAL_ITEMS: ResearchItem[] = [
  {
    title: `LangChain: Your Harness, Your Memory`,
    shortBody: `Harness infrastructure is permanent — memory is the most durable lock-in vector. Organizations that don't own their harness [cede accumulated behavioral context](https://www.langchain.com/blog/your-harness-your-memory) to the vendor, with no path to reconstruct it. Memory lives with your harness.`,
    body: `Harness infrastructure is permanent — memory is the most durable lock-in vector. Organizations that don't own their harness cede accumulated behavioral context to the vendor, with no path to reconstruct it.`,
    link: `https://www.langchain.com/blog/your-harness-your-memory`,
  },
  {
    title: `Datadog: Harness-First Agents`,
    shortBody: `Treating the harness as primary infrastructure — not a convenience layer — is the precondition for [reliable, auditable agentic systems](https://www.datadoghq.com/blog/ai/harness-first-agents/) at production scale. Memory, tool routing, and access control belong in the harness, not bolted on afterward.`,
    body: `Treating the harness as primary infrastructure — not a convenience layer — is the precondition for reliable, auditable agentic systems at production scale.`,
    link: `https://www.datadoghq.com/blog/ai/harness-first-agents/`,
  },
  {
    title: `OWASP LLM Top 10`,
    shortBody: `Seven of ten highest-severity LLM risks apply directly to agentic workflows. Harness-level governance — not application patching — is the [appropriate mitigation layer](https://owasp.org/www-project-top-10-for-large-language-model-applications/) for all seven. Prompt injection, excessive agency, and information leakage require architectural defense.`,
    body: `Seven of the ten highest-severity risks for LLM applications apply directly to agentic workflows. Harness-level governance — not application-level patching — is the appropriate mitigation layer for all seven.`,
    link: `https://owasp.org/www-project-top-10-for-large-language-model-applications/`,
  },
  {
    title: `Anthropic MCP Standard Adoption`,
    shortBody: `MCP is rapidly becoming the cross-vendor standard for tool-calling across Claude Desktop, VS Code, Cursor, and third-party servers. [Open harness architecture](https://www.anthropic.com/news/model-context-protocol) is the durable bet — validating governance-as-substrate rather than governance-as-wrapper.`,
    body: `MCP is rapidly becoming the cross-vendor standard for tool-calling and harness integration across Claude Desktop, VS Code, Cursor, and third-party servers — validating open harness architecture as the durable bet.`,
    link: `https://www.anthropic.com/news/model-context-protocol`,
  },
];

// Deprecated — kept for backward compat
export const RESEARCH_INTERNAL_FINDINGS = RESEARCH_INTERNAL_ITEMS.map(
  item => `**[${item.title}](${item.link})** — ${item.body}`
).join('\n\n');
export const RESEARCH_EXTERNAL_FINDINGS = RESEARCH_EXTERNAL_ITEMS.map(
  item => `**[${item.title}](${item.link})** — ${item.body}`
).join('\n\n');
export const RESEARCH_HEADER = RESEARCH_INTERNAL_HEADER;
export const RESEARCH_FINDINGS = RESEARCH_INTERNAL_FINDINGS;
export const RESEARCH_TITLE = RESEARCH_HEADER;

// §7 CTA
export const CTA_TITLE = `Get Started`;
export const CTA_DESCRIPTION = `EndogenAI is open-source, free to use, and designed for organizations ready to own their governance infrastructure. Start with the documentation, fork the dogma repository, and customize MANIFESTO.md and AGENTS.md for your organization. AccessiTech offers paid implementation support — consulting to embed EndogenAI into your workflows, code reviews to enforce governance, and training for teams adopting the methodology.`;
export const CTA_GITHUB_LABEL = `Explore on GitHub`;
export const CTA_GITHUB_HREF = `https://github.com/EndogenAI/dogma`;
export const CTA_CONSULTING_LABEL = `Schedule a Consulting Call`;
export const CTA_CONSULTING_HREF = `/contact?inquiry=endogenai-implementation`;
