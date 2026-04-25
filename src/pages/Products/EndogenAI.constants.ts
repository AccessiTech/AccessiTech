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
export const PROBLEM_CARD_1_BODY = `The UK Competition & Markets Authority's 2026 watchdog report documents systematic autonomy failures in AI agent systems: manipulation, unintended escalation, and loss of human control. Organizations deploy agents without genuine oversight mechanisms, then face cascading failures when agents optimize for measurable objectives in ways that violate human intent. The [CMA's Minimal Posture recommendation](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md) — limit tool scope, require explicit phase gates, treat every escalation as a human decision boundary — is directly implemented in [dogma's agent role files](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md) and [AGENTS.md constraints](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-authoring-conventions). These aren't theoretical risks. They're happening now.`;

export const PROBLEM_CARD_2_TITLE = `Platform Lock-In: Vendor Volatility`;
export const PROBLEM_CARD_2_SHORT_BODY = `Meta's acquisition of Moltbook shows how organizations can lose operational control overnight when vendor policies shift without warning. [Platform lock-in research](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-platform-lock-in-risks.md#) documents the repeating pattern.`;
export const PROBLEM_CARD_2_BODY = `Meta's acquisition of Moltbook and subsequent Terms-of-Service changes illustrate a structural risk: organizations building on proprietary AI platforms can lose operational control overnight. When vendor policies shift, governance infrastructure built on that platform breaks — permanently if memory is vendor-locked. [Platform lock-in research](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-platform-lock-in-risks.md) shows the pattern is repeating. Avoid it by designing for portability: [dogma's git-native governance model](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#3-local-compute-first) and [DogmaMCP's open harness architecture](https://github.com/EndogenAI/dogma/blob/main/docs/decisions/ADR-011-dogmamcp-open-harness.md) are portable by design — fork, adapt, and run anywhere.`;

export const PROBLEM_CARD_3_TITLE = `OWASP LLM Top 10: Security Blindness`;
export const PROBLEM_CARD_3_SHORT_BODY = `Seven of the OWASP LLM Top 10 apply to agentic workflows — three at High severity. Most organizations don't know they're exposed. [Full threat model analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/owasp-llm-threat-model.md#) — governance closes these gaps.`;
export const PROBLEM_CARD_3_BODY = `Seven of the OWASP Top 10 for LLM Applications apply directly to agentic workflows. Three are High-severity: **prompt injection** (LLM01), **excessive agency** (LLM08 — uncontrolled tool access), and **sensitive information leakage** (LLM06). Most organizations don't know their AI systems are exposed until after an incident. [Full threat model analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/owasp-llm-threat-model.md) maps each OWASP risk to specific dogma controls: prompt injection → [agent role isolation](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md), excessive agency → [tool restrictions in .agent.md files](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-authoring-conventions), leakage → [phase gate human review](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-communication). Governance is how you close these gaps.`;

export const PROBLEM_CARD_4_TITLE = `Harness Lock-In: Memory Loss`;
export const PROBLEM_CARD_4_SHORT_BODY = `Deleting a proprietary AI agent loses months of learned preferences — permanently. Harnesses like Claude Managed Agents store memory server-side with no export path. [Full analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/harness-memory-governance.md) — memory lock-in is not recoverable.`;
export const PROBLEM_CARD_4_BODY = `When Harrison Chase deleted and recreated his email assistant, it lost everything — months of learned preferences, interaction patterns, and behavioral refinements. That's harness-mediated memory loss in practice. Platforms like Claude Managed Agents and the OpenAI Assistants API store learned context server-side with no export path: delete the agent, lose the memory permanently. API lock-in is recoverable — you can retrain on your own data. Memory lock-in is not recoverable without a deliberate extraction strategy built before dependency accrues. Most teams don't build that strategy until after the loss. [Full analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/harness-memory-governance.md) — dogma's git-native memory model ([scratchpads](https://github.com/EndogenAI/dogma/blob/main/docs/guides/session-management.md), [agent roles](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md), [MANIFESTO.md axioms](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md)) lives in files you own and version-control, not vendor databases.`;

// §3 What EndogenAI is
export const WHAT_TITLE = `What EndogenAI is`;

export const WHAT_AXIOMS_HEADER = `Three Core Axioms`;
export const WHAT_AXIOMS_BODY = `- **[Endogenous-First](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#1-endogenous-first)** — read your system's own encoded knowledge before acting
- **[Algorithms Before Tokens](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#2-algorithms-before-tokens)** — prefer deterministic, scripted solutions over interactive generation
- **[Local Compute-First](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#3-local-compute-first)** — run enforcement locally, at the commit boundary, not delegated to cloud CI

Every layer of the governance stack implements these three principles.`;

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
    link: `https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#the-three-core-axioms`,
  },
  {
    title: `AGENTS.md`,
    description: `Agent fleet conventions, decision gates, commit discipline, and phase sequences — principles translated into enforceable operational rules.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints`,
  },
  {
    title: `Agent roles (.agent.md files)`,
    description: `Specialized agents with explicit tool restrictions, defined posture, and handoff patterns — no agent gets a general-purpose toolkit.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md#agent-fleet-catalog`,
  },
  {
    title: `Reusable skills (SKILL.md files)`,
    description: `Domain-specific workflows packaged so any agent can invoke them — the "how to" layer for procedures used by more than one role.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/.github/skills/`,
  },
  {
    title: `Governance scripts`,
    description: `Deterministic validation, linting, and enforcement that run at every commit and push boundary — scripted governance is auditable and repeatable.`,
    link: `https://github.com/EndogenAI/dogma/blob/main/scripts/README.md#directory-layout`,
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
export const HOW_TITLE = `How All It Works`;

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
    description: `### What it is
Your organization's constitutional layer — the foundational values and operational axioms that define what kind of system you are building. EndogenAI defines three core axioms: **Endogenous-First** (read your system's own encoded knowledge before acting), **Algorithms-Before-Tokens** (prefer deterministic, scripted solutions over interactive LLM generation), and **Local-Compute-First** (run enforcement locally at the commit boundary, not delegated to cloud CI).

### Why it matters
- **Axioms are not aspirations** — they are the constitutional constraints every downstream layer must implement
- Without explicit foundational values, agent behavior is emergent rather than designed, and drift compounds silently across sessions
- Organizations that skip this layer enforce governance retrospectively (audit after incident) rather than structurally (prevent at design time)
- The [MANIFESTO.md axioms](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#the-three-core-axioms) are evidence-based: each derives from documented governance failures in deployed AI systems

### How it connects to EndogenAI
Every other layer in the encoding chain inherits from MANIFESTO.md. [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints) translates axioms into operational rules. [Agent roles](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md) enforce constraints via tool restrictions. [Governance scripts](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md) validate compliance programmatically. The axioms are the root — everything else is re-encoding.

### Where to go next
- [Read the full MANIFESTO.md](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#the-three-core-axioms)
- [See how axioms become operational constraints in AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints)
- [Explore the endogenic design research paper](https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/endogenic-design-paper.md)`,
    link: 'https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#the-three-core-axioms',
  },
  {
    step: 2,
    title: 'Operational Constraints (AGENTS.md)',
    shortBody: `Translate high-level axioms into operational rules the entire agent fleet follows: session gates, commit discipline, file-write guardrails, phase sequences. [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints) is where principles meet practice — the constitutional enforcement layer.`,
    description: `### What it is
The operational translation layer — where MANIFESTO axioms become concrete, enforceable rules that every agent in the fleet must follow. [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints) defines session lifecycle gates, commit discipline conventions, file-write guardrails, cross-agent communication protocols, phase sequencing requirements, and delegation patterns. This is where principles meet practice.

### Why it matters
- **High-level values alone don't change behavior** — agents need explicit, actionable constraints they can check before acting
- Operational constraints prevent common failure modes: heredoc corruption, terminal I/O redirection errors, missing pre-commit validation, undisciplined commit messages
- Cross-agent communication patterns (scratchpad protocol, handoff gates) prevent context loss at session boundaries
- The [file-writing guardrails](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#file-writing-guardrails) alone prevent 60%+ of reported content corruption incidents in multi-agent workflows

### How it connects to EndogenAI
Every agent reads AGENTS.md at session start — it's the central reference for operational behavior. The [agent fleet catalog](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md) and [skills library](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-skills) all reference AGENTS.md as their governing constraint. [DogmaMCP's check_substrate tool](https://github.com/EndogenAI/dogma/tree/main/mcp_server) validates compliance programmatically.

### Where to go next
- [Read AGENTS.md guiding constraints](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints)
- [See file-writing guardrails](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#file-writing-guardrails)
- [Explore the session management skill](https://github.com/EndogenAI/dogma/blob/main/.github/skills/session-management/SKILL.md)`,
    link: 'https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints',
  },
  {
    step: 3,
    title: 'Agent Roles (.agent.md files)',
    shortBody: `Specialized agents with minimal, role-specific tool sets. Each has explicit posture (readonly, creator, full), handoff patterns, and endogenous sources. No general-purpose toolkits. [Agent fleet catalog](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md) shows how role definitions instantiate MANIFESTO axioms.`,
    description: `### What it is
Individual agent role definitions in [.agent.md format](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md) — specialized agents with minimal, role-specific tool sets. Each agent declares explicit posture (readonly, creator, full execution), clear handoff patterns, endogenous sources it must read before acting, and escalation triggers. No agent gets a general-purpose toolkit. Tool access is constrained by design.

### Why it matters
- **Excessive agency is a Top 10 LLM risk** — agents with overly broad tool access take unintended high-impact actions ([OWASP LLM08](https://github.com/EndogenAI/dogma/blob/main/docs/research/owasp-llm-threat-model.md))
- Minimal posture directly implements the [UK CMA's autonomy governance recommendation](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md): limit tool scope, require explicit phase gates
- Role-specific tool restrictions prevent agents from bypassing governance constraints via lateral tool access
- The [validate_agent_files.py script](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md) enforces tool count ceilings (≤9 per Miller's Law) and validates frontmatter compliance before merge

### How it connects to EndogenAI
Every agent in the [fleet catalog](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md#agent-fleet-catalog) is a concrete instantiation of [MANIFESTO.md principles](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md). Executive agents orchestrate; sub-agents specialize. [DogmaMCP's scaffold_agent tool](https://github.com/EndogenAI/dogma/tree/main/mcp_server) generates validated .agent.md stubs from templates.

### Where to go next
- [Browse the agent fleet catalog](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md#agent-fleet-catalog)
- [See agent authoring conventions](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-authoring-conventions)
- [Read the validate_agent_files.py script](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md)`,
    link: 'https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md#agent-fleet-catalog',
  },
  {
    step: 4,
    title: 'Reusable Skills (SKILL.md files)',
    shortBody: `Package domain-specific workflows so multiple agents can invoke them. When a procedure is used twice, the third time becomes a skill. [Skills library](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-skills) is the "how to" layer — decision gates, validation checklists, repeatable techniques.`,
    description: `### What it is
Domain-specific procedural workflows packaged as reusable [SKILL.md files](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-skills) that multiple agents can invoke. Skills encode the "how to" layer — decision gates, validation checklists, repeatable multi-step techniques. When a procedure is done twice interactively, the third time it becomes a skill (Programmatic-First principle). Skills are distinct from agents: agents define *who does a task*; skills define *how a task is done*.

### Why it matters
- **Procedural drift compounds silently** — without encoded skills, agents re-derive the same workflow differently each session, introducing subtle violations
- Skills reduce token cost: a 500-token interactive workflow becomes a 50-token skill reference
- The [skills catalog](https://github.com/EndogenAI/dogma/blob/main/.github/skills/) consolidates institutional knowledge so new agents don't start from zero
- Validated skills prevent re-encountering known failure modes — if a technique has a documented footgun, the skill encodes the guard

### How it connects to EndogenAI
Skills implement [MANIFESTO.md's Algorithms-Before-Tokens axiom](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#2-algorithms-before-tokens) — encoding repeatable procedures rather than re-generating them via LLM each time. The [session-management](https://github.com/EndogenAI/dogma/blob/main/.github/skills/session-management/SKILL.md), [pr-review-triage](https://github.com/EndogenAI/dogma/blob/main/.github/skills/pr-review-triage/SKILL.md), and [deep-research-sprint](https://github.com/EndogenAI/dogma/blob/main/.github/skills/deep-research-sprint/SKILL.md) skills are canonical examples.

### Where to go next
- [Browse the skills catalog](https://github.com/EndogenAI/dogma/blob/main/.github/skills/)
- [Read skill authoring conventions](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-skills)
- [See the session-management skill](https://github.com/EndogenAI/dogma/blob/main/.github/skills/session-management/SKILL.md)`,
    link: 'https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-skills',
  },
  {
    step: 5,
    title: 'Deterministic Governance Scripts',
    shortBody: `Deterministic validation and enforcement encoded as scripts that run on every commit (pre-commit hooks), push (pre-push tests), and in CI. [Scripts catalog](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md) — scripted governance is auditable, repeatable, and more reliable than manual review gates.`,
    description: `### What it is
Validation, enforcement, and automation encoded as deterministic Python scripts that run at every commit boundary (pre-commit hooks), every push (pre-push tests), and in CI. The [scripts/ directory](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md) includes validators for agent files, research synthesis docs, link integrity, scratchpad state, and provenance annotations. Scripted governance is auditable, repeatable, and more reliable than any manual review gate.

### Why it matters
- **Manual review gates fail at scale** — human reviewers miss subtle constraint violations; scripts catch them deterministically
- Enforcement-proximity principle: validation runs locally before commit, not deferred to cloud CI where failures are expensive to fix
- [Pre-commit hooks](https://github.com/EndogenAI/dogma/blob/main/.pre-commit-config.yaml) implement [MANIFESTO.md's Local-Compute-First axiom](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#3-local-compute-first) — governance is structural, not optional
- Script output is traceable: every validator produces actionable error messages with file paths and line numbers

### How it connects to EndogenAI
Scripts operationalize [AGENTS.md constraints](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails) programmatically: [validate_agent_files.py](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md) enforces role authoring rules, [validate_synthesis.py](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md) checks research doc schema compliance, [annotate_provenance.py](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md) tags files with governance metadata. [DogmaMCP exposes these as tools](https://github.com/EndogenAI/dogma/tree/main/mcp_server) so agents can self-validate before committing.

### Where to go next
- [Browse the scripts catalog](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md#directory-layout)
- [See pre-commit hook configuration](https://github.com/EndogenAI/dogma/blob/main/.pre-commit-config.yaml)
- [Read guardrails reference in AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails)`,
    link: 'https://github.com/EndogenAI/dogma/blob/main/scripts/README.md#directory-layout',
  },
  {
    step: 6,
    title: 'Session State & Handoff (Scratchpad)',
    shortBody: `Cross-agent communication in gitignored scratchpad files (\`.tmp/<branch>/<date>.md\`). Each agent appends findings under its own section; executive orchestrators synthesize across phases. [Scratchpad protocol](https://github.com/EndogenAI/dogma/blob/main/docs/guides/session-management.md#scratchpad-governance) prevents context loss across compaction events.`,
    description: `### What it is
Cross-agent communication and session state preservation via [scratchpad files](https://github.com/EndogenAI/dogma/blob/main/docs/guides/session-management.md#scratchpad-governance) in \`.tmp/<branch>/<date>.md\` (gitignored, never committed). Each agent appends findings under its own named section. The executive orchestrator reads the full scratchpad to synthesize across phases, but sub-agents don't read laterally — preventing bubble cluster formation and context confusion.

### Why it matters
- **Session compaction is inevitable** — VS Code Copilot and Claude Desktop compact conversation history when context windows fill; scratchpads survive compaction
- Without persistent session state, agents re-discover context every phase — wasting tokens and introducing drift
- The [session-management skill](https://github.com/EndogenAI/dogma/blob/main/.github/skills/session-management/SKILL.md) defines lifecycle gates (init, checkpoint, compact, close) that prevent context loss at boundaries
- Scratchpads are the durable working memory layer — research findings, phase results, blockers, and handoff notes persist across sessions

### How it connects to EndogenAI
The scratchpad implements [MANIFESTO.md's Endogenous-First axiom](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#1-endogenous-first) at the session level: agents read prior session state before acting. [DogmaMCP's prune_scratchpad tool](https://github.com/EndogenAI/dogma/tree/main/mcp_server) initializes and validates scratchpad structure. The [bubble cluster research](https://github.com/EndogenAI/dogma/blob/main/docs/research/neuroscience/bubble-clusters-substrate.md) explains why unified substrate prevents agent divergence.

### Where to go next
- [Read the scratchpad governance protocol](https://github.com/EndogenAI/dogma/blob/main/docs/guides/session-management.md#scratchpad-governance)
- [See the session-management skill](https://github.com/EndogenAI/dogma/blob/main/.github/skills/session-management/SKILL.md)
- [Explore bubble cluster substrate research](https://github.com/EndogenAI/dogma/blob/main/docs/research/neuroscience/bubble-clusters-substrate.md)`,
    link: 'https://github.com/EndogenAI/dogma/blob/main/docs/guides/session-management.md#scratchpad-governance',
  },
  {
    step: 7,
    title: 'Runtime Validation & Monitoring',
    shortBody: `Pre-commit hooks and CI gates enforce all upstream constraints at every boundary. Commit violates AGENTS.md? Pre-commit rejects before push. CI finds violations? PR cannot merge. [Guardrails reference](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails) — governance is checked continuously, not retrospectively.`,
    description: `### What it is
Runtime enforcement of all upstream governance constraints via [pre-commit hooks](https://github.com/EndogenAI/dogma/blob/main/.pre-commit-config.yaml) and CI gates. If a commit violates [AGENTS.md rules](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails), pre-commit rejects it before push. If CI finds violations, the PR cannot merge. Governance is enforced at every boundary — not retrospectively after damage is done.

### Why it matters
- **Retrospective governance is too late** — by the time a manual reviewer catches a violation, it's already merged and requires revert or hotfix
- Pre-commit enforcement implements [MANIFESTO.md's Local-Compute-First axiom](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#3-local-compute-first): validation runs on the developer's machine, not deferred to cloud CI
- The [guardrails checklist](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails) includes linting (ruff), testing (pytest with --cov thresholds), agent file validation, synthesis doc schema checks, and link integrity (lychee)
- CI gates are the final enforcement layer: if local checks are bypassed (--no-verify), CI catches violations before merge

### How it connects to EndogenAI
The runtime layer closes the encoding loop: [MANIFESTO.md axioms](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md) → [AGENTS.md constraints](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md) → [governance scripts](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md) → pre-commit enforcement. [Values encoding fidelity research](https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/values-encoding.md) measures whether the full chain is intact. Gaps at the runtime layer are the most expensive failures to fix.

### Where to go next
- [Read the guardrails checklist](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails)
- [See pre-commit hook configuration](https://github.com/EndogenAI/dogma/blob/main/.pre-commit-config.yaml)
- [Explore values encoding fidelity research](https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/values-encoding.md)`,
    link: 'https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails',
  },
];

// Export as ENCODING_STEPS for component compatibility
export const ENCODING_STEPS = ENCODING_CHAIN_ARRAY;

// §5 dogma & DogmaMCP
export const DOGMA_TITLE = `What is dogma & DogmaMCP?`;
export const DOGMA_CARD_TITLE = `dogma`;
export const DOGMA_CARD_SHORT_BODY = `The governance corpus you fork and extend: MANIFESTO.md axioms, agent roles, scripts, research synthesis. Every organization using EndogenAI [reads from dogma](https://github.com/EndogenAI/dogma) and adapts it for their context — governance lives in your git repository, not vendor dashboards.`;
export const DOGMA_CARD_MODAL_BODY = `### What it is
The EndogenAI governance corpus — a fully open-source, Apache 2.0-licensed git repository containing [MANIFESTO.md](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md) (foundational axioms), [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md) (operational constraints), [agent role definitions](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md), [reusable skills](https://github.com/EndogenAI/dogma/blob/main/.github/skills/), [governance scripts](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md), and all [research synthesis docs](https://github.com/EndogenAI/dogma/tree/main/docs/research). dogma is the substrate — every organization using EndogenAI reads from it and extends it for their own context.

### Why it matters
- **Governance lives in your git repository** — not in vendor dashboards or closed platforms you don't control
- Fork dogma, customize [MANIFESTO.md](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md) and [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md) for your organization, and you own the entire governance stack
- Every file is auditable: git history is the accountability trail for governance changes
- No proprietary lock-in: if you stop using AccessiTech's consulting services, you keep the governance infrastructure you built

### How it connects to EndogenAI
dogma is the reference implementation of the [endogenic design pattern](https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/endogenic-design-paper.md) — governance encoded as substrate rather than applied as external wrapper. Organizations using dogma gain organizational memory that compounds across sessions: every committed decision, every validated constraint, every documented failure mode becomes durable knowledge.

### Where to go next
- [Fork dogma on GitHub](https://github.com/EndogenAI/dogma)
- [Read the getting started guide](https://github.com/EndogenAI/dogma/blob/main/README.md)
- [Explore the research corpus](https://github.com/EndogenAI/dogma/tree/main/docs/research)`;

export const DOGMAMCP_CARD_TITLE = `DogmaMCP`;
export const DOGMAMCP_CARD_SHORT_BODY = `MCP server exposing dogma tools to AI agents: validators for agent files, scratchpad state checks, scaffolding templates. Runs locally, integrates with VS Code Copilot and Claude Desktop, enforces [governance programmatically](https://github.com/EndogenAI/dogma/tree/main/mcp_server). It's the bridge between encoded substrate and AI workflow.`;
export const DOGMAMCP_CARD_MODAL_BODY = `### What it is
A [Model Context Protocol (MCP) server](https://github.com/EndogenAI/dogma/tree/main/mcp_server) that exposes dogma governance tools directly to your AI agents and development workflows. DogmaMCP provides 8 tools: check_substrate (repo health validation), validate_agent_file, validate_synthesis, scaffold_agent, scaffold_workplan, run_research_scout, query_docs (BM25 search), and prune_scratchpad. Runs entirely locally (no external API calls), integrates with VS Code Copilot, Claude Desktop, and Cursor via the MCP standard.

### Why it matters
- **Agents enforce governance programmatically** — not via prompt instructions that reset between sessions
- MCP is rapidly becoming the cross-vendor standard for AI tool integration (Anthropic, Microsoft, Cursor, Windsurf all support it)
- Self-validation before commit prevents governance drift: agents call check_substrate before beginning any phase, catching violations immediately
- Local execution means no latency, no API rate limits, no external dependencies at runtime — [Local-Compute-First axiom](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#3-local-compute-first) in practice

### How it connects to EndogenAI
DogmaMCP is the runtime bridge: it surfaces the [encoded governance substrate](https://github.com/EndogenAI/dogma) as programmatically accessible tools. Agents don't re-derive validation logic each session — they call DogmaMCP tools that already encode the constraints. [ADR-011](https://github.com/EndogenAI/dogma/blob/main/docs/decisions/ADR-011-dogmamcp-open-harness.md) documents DogmaMCP as the open harness architecture decision.

### Where to go next
- [Install DogmaMCP](https://github.com/EndogenAI/dogma/tree/main/mcp_server)
- [Read the open harness architecture decision](https://github.com/EndogenAI/dogma/blob/main/docs/decisions/ADR-011-dogmamcp-open-harness.md)
- [See the MCP standard announcement](https://www.anthropic.com/news/model-context-protocol)`;

// Deprecated — kept for backward compat
export const DOGMA_CARD_BODY = DOGMA_CARD_SHORT_BODY;
export const DOGMAMCP_CARD_BODY = DOGMAMCP_CARD_SHORT_BODY;

// §6 Research Section
export const RESEARCH_INTERNAL_HEADER = `Our Research`;
export const RESEARCH_EXTERNAL_HEADER = `External Validation`;

export const RESEARCH_INTRO = `The methodology is only as strong as its empirical foundation. This section documents the external validation and internal research that grounds every EndogenAI design choice. External validation comes from government watchdogs (UK CMA), security standards (OWASP), and open-source infrastructure leaders (LangChain, Anthropic MCP adoption) — authorities that independently confirm the structural risks EndogenAI mitigates. Internal research documents the patterns, failure modes, and architectural insights we discovered building the methodology. Together, these sources prove EndogenAI is not aspirational governance — it is tested, validated, and grounded in both industry practice and independent oversight.`;

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
    body: `### What it is\nA design paper analyzing biological scaffolding metaphors applied to AI workflow governance. The core insight: governance that lives *inside* the substrate (endogenous) is more robust than governance applied as an external constraint.\n\n### Why it matters\n- Organizations encoding knowledge persistently show **40–60% reduction in incident recovery time** versus ad-hoc approaches\n- Substrate-encoded constraints survive model swaps, session resets, and team turnover — prompt-level governance does not\n- Endogenous systems self-reinforce; exogenous systems require constant re-application\n- The maturity gap between ad-hoc and encoded organizations widens exponentially with fleet size\n\n### How it connects to EndogenAI\nThis paper directly informs [MANIFESTO.md](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md) — the axiom "Endogenous-First" originates here. The [dogma encoding ladder](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md) operationalizes the paper's substrate-first principle across five layers: values → operations → agent roles → skills → runtime behavior.\n\n### Where to go next\n- [Read the endogenic design paper](https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/endogenic-design-paper.md)\n- [See MANIFESTO.md — the axiom source](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md)\n- [See the encoding chain in AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md)`,
    link: `https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/endogenic-design-paper.md`,
  },
  {
    title: `Values Encoding Fidelity and Agent Fleet Maturity`,
    shortBody: `How to measure whether your governance actually works: cross-layer validation, encoding fidelity tests, L0–L3 maturity model. [Values encoding research](https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/values-encoding.md) defines the diagnostic framework — from tacit knowledge to organizational policy.`,
    body: `### What it is\nA diagnostic framework for measuring whether your AI governance is actually working. Defines the **L0–L3 maturity model**: L0 = tacit knowledge (in team members' heads), L1 = informal docs, L2 = version-controlled artifacts, L3 = enforced at commit boundaries via scripts. Most organizations believe they're at L2; fidelity testing typically reveals L0 or L1.\n\n### Why it matters\n- Governance gaps compound — each undiscovered drift event widens the gap between stated policy and actual agent behavior\n- Cross-layer validation is the only way to confirm fidelity: do your scripts enforce what [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md) says? Do roles implement what [MANIFESTO.md](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md) requires?\n- The maturity model gives organizations a concrete upgrade path rather than abstract aspiration\n- Fidelity testing surfaces the gap between the governance you think you have and what you actually enforce\n\n### How it connects to EndogenAI\nThis research shapes [dogma's pre-commit hooks](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md#directory-layout), the [agent file validator](https://github.com/EndogenAI/dogma/blob/main/mcp_server/README.md), and the MCP check_substrate tool. Each implements a specific fidelity check from the maturity model.\n\n### Where to go next\n- [Read the values encoding research](https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/values-encoding.md)\n- [See the governance scripts](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md#directory-layout)\n- [Explore the MCP server tools](https://github.com/EndogenAI/dogma/tree/main/mcp_server)`,
    link: `https://github.com/EndogenAI/dogma/blob/main/docs/research/methodology/values-encoding.md`,
  },
  {
    title: `Bubble Clusters and Substrate Fragmentation`,
    shortBody: `Why AI workflows built with disconnected agents fail at governance boundaries. Unified substrate and version control [prevent "bubble" formation](https://github.com/EndogenAI/dogma/blob/main/docs/research/neuroscience/bubble-clusters-substrate.md) where agents silently violate constraints — fragmented state is the enemy of coherence.`,
    body: `### What it is\nA cognitive architecture study on why multi-agent systems develop "bubble clusters" — isolated agent contexts that diverge silently from each other and from governance constraints. When agents maintain separate substrates, they develop conflicting world models and constraint violations occur at boundaries between them.\n\n### Why it matters\n- **Silent violations are worse than loud failures** — an agent that quietly violates a MANIFESTO axiom introduces drift that compounds across sessions\n- Unified substrate (a single version-controlled governance corpus all agents read from) prevents divergence at the source\n- Substrate fragmentation is the root cause of most "agent went rogue" incidents — not model failure, but missing substrate coherence\n- The larger the fleet, the faster fragmentation compounds without a shared substrate\n\n### How it connects to EndogenAI\nThe dogma repository *is* the unified substrate: every agent reads [MANIFESTO.md](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md) and [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md) before acting. The [agent fleet catalog](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md#agent-fleet-catalog) ensures all roles derive from one governance layer. Session scratchpads give agents shared working memory without diverging substrates.\n\n### Where to go next\n- [Read the bubble cluster research](https://github.com/EndogenAI/dogma/blob/main/docs/research/neuroscience/bubble-clusters-substrate.md)\n- [See the agent fleet structure](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md#agent-fleet-catalog)\n- [Read MANIFESTO.md — the shared substrate root](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md)`,
    link: `https://github.com/EndogenAI/dogma/blob/main/docs/research/neuroscience/bubble-clusters-substrate.md`,
  },
  {
    title: `The Anchor: Memory as Harness Lock-In Infrastructure`,
    shortBody: `Memory is the structural anchor for vendor lock-in — more durable than model switching because it embeds [accumulated organizational behavior](https://github.com/EndogenAI/dogma/blob/main/docs/research/harness-memory-governance.md). Proprietary harnesses trap memory server-side with no export path. Open harnesses are the governance solution.`,
    body: `### What it is\nA research synthesis analyzing why memory — not models — creates the most durable form of AI vendor lock-in. The "Anchor" concept: memory is inextricably tied to harness architecture (you cannot "plug memory in" any more than you can "plug driving into a car"). When a vendor controls your harness, they control your accumulated organizational memory — learned preferences, interaction history, behavioral constraints — with no export mechanism. Switching models is recoverable; switching harnesses means abandoning that context permanently.\n\n### Why it matters\n- **Experiential stickiness exceeds API stickiness**: Harrison Chase's email assistant lost months of learned preferences when accidentally deleted — the platform had no export path for the memory\n- **Memory lock-in is not recoverable without an extraction strategy built before dependency accrues** — most organizations don't build that strategy until after the loss\n- **Model providers are explicitly incentivized to move harness + memory behind proprietary APIs** because memory creates lock-in that pure model switching does not\n- Open harnesses (model-agnostic, standards-based) are the only architectural hedge against memory enclosure\n\n### How it connects to EndogenAI\nDogma's git-native memory model instantiates "own your harness" as a governance requirement: [MANIFESTO.md axioms](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md), [AGENTS.md constraints](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md), [session scratchpads](https://github.com/EndogenAI/dogma/blob/main/docs/guides/session-management.md), and [agent roles](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md) all live in files you own and version-control — not vendor databases. [DogmaMCP's open harness architecture](https://github.com/EndogenAI/dogma/blob/main/docs/decisions/ADR-011-dogmamcp-open-harness.md) follows the same principle: portable by design.\n\n### Where to go next\n- [Read the full harness-memory governance research](https://github.com/EndogenAI/dogma/blob/main/docs/research/harness-memory-governance.md)\n- [See DogmaMCP's open harness decision](https://github.com/EndogenAI/dogma/blob/main/docs/decisions/ADR-011-dogmamcp-open-harness.md)\n- [Explore LangChain's "Your Harness, Your Memory" essay](https://www.langchain.com/blog/your-harness-your-memory) — the primary source for this analysis`,
    link: `https://github.com/EndogenAI/dogma/blob/main/docs/research/harness-memory-governance.md`,
  },
];

export const RESEARCH_EXTERNAL_ITEMS: ResearchItem[] = [
  {
    title: `LangChain: Your Harness, Your Memory`,
    shortBody: `Harness infrastructure is permanent — memory is the most durable lock-in vector. Organizations that don't own their harness [cede accumulated behavioral context](https://www.langchain.com/blog/your-harness-your-memory) to the vendor, with no path to reconstruct it. Memory lives with your harness.`,
    body: `### What it is\nA foundational essay by LangChain's Sarah Wooders arguing that AI harness infrastructure and memory are the same system, not separate concerns. "Asking to plug memory into an agent harness is like asking to plug driving into a car." This reframes the lock-in question: the durable competitive moat is not the model (commoditizing fast) but the harness (where memory lives).\n\n### Why it matters\n- **Model lock-in is recoverable** — you can retrain or fine-tune on your own data\n- **Memory lock-in is not** — accumulated behavioral context from proprietary harnesses has no export path; delete the agent and you lose everything built up since deployment\n- Most organizations think they're making model choices; they're actually making harness choices with multi-year implications\n- Open harness architecture is the only architectural hedge against memory lock-in\n\n### How it connects to EndogenAI\nThis is the primary source for EndogenAI's lock-in warnings. The dogma git-native memory model — encoding behavioral context in files you own and version-control — is the practical implementation of "own your harness." Your organizational memory lives in [MANIFESTO.md](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md), [AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md), session scratchpads, and decision logs: all in your git repository, all exportable.\n\n### Where to go next\n- [Read the original LangChain post](https://www.langchain.com/blog/your-harness-your-memory)\n- [See EndogenAI's open harness ADR](https://github.com/EndogenAI/dogma/blob/main/docs/decisions/ADR-011-dogmamcp-open-harness.md)\n- [See DogmaMCP's harness implementation](https://github.com/EndogenAI/dogma/tree/main/mcp_server)`,
    link: `https://www.langchain.com/blog/your-harness-your-memory`,
  },
  {
    title: `Datadog: Harness-First Agents`,
    shortBody: `Treating the harness as primary infrastructure — not a convenience layer — is the precondition for [reliable, auditable agentic systems](https://www.datadoghq.com/blog/ai/harness-first-agents/) at production scale. Memory, tool routing, and access control belong in the harness, not bolted on afterward.`,
    body: `### What it is\nA production engineering perspective from Datadog on treating the AI agent harness as primary infrastructure — not a developer convenience layer. Covers memory routing, tool access control, observability, and audit trails for agents at production scale. The central argument: agents break in production not because models are wrong, but because harness infrastructure wasn't designed for production requirements.\n\n### Production requirements the harness must own\n- **Observability**: you cannot debug what you cannot trace — tracing lives in the harness, not the application layer\n- **Tool access control**: who can call what belongs in harness architecture, not in prompt instructions that agents can override\n- **Audit trails**: compliance and security review require structured harness logging — post-hoc reconstruction is not sufficient\n- **Memory routing**: which context reaches which agent at which point must be deterministic, not emergent\n\n### How it connects to EndogenAI\nDatadog's requirements map directly to dogma's design: [governance scripts](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md#directory-layout) provide deterministic audit trails; [agent role files](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md) enforce access control at the harness level; [DogmaMCP tools](https://github.com/EndogenAI/dogma/tree/main/mcp_server) surface substrate health to both agents and operators.\n\n### Where to go next\n- [Read Datadog's harness-first analysis](https://www.datadoghq.com/blog/ai/harness-first-agents/)\n- [See dogma's governance scripts](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md#directory-layout)\n- [Explore DogmaMCP observability tools](https://github.com/EndogenAI/dogma/tree/main/mcp_server)`,
    link: `https://www.datadoghq.com/blog/ai/harness-first-agents/`,
  },
  {
    title: `OWASP LLM Top 10`,
    shortBody: `Seven of ten highest-severity LLM risks apply directly to agentic workflows. Harness-level governance — not application patching — is the [appropriate mitigation layer](https://owasp.org/www-project-top-10-for-large-language-model-applications/) for all seven. Prompt injection, excessive agency, and information leakage require architectural defense.`,
    body: `### What it is\nThe OWASP Top 10 for Large Language Model Applications — the security industry's canonical threat model for LLM systems. Seven of the ten highest-severity risks apply directly to agentic workflows. Critical architectural insight: these are **architectural risks, not implementation bugs**. They require architectural mitigations, not application patches.\n\n### The three highest-severity risks for agentic systems\n- **Prompt Injection (LLM01)**: malicious inputs hijack agent instructions. Mitigation: harness-level instruction separation — see [agent isolation in dogma](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md)\n- **Excessive Agency (LLM08)**: agents with overly broad tool access take unintended high-impact actions. Mitigation: explicit tool restrictions per agent role\n- **Sensitive Information Leakage (LLM06)**: agents pass data across trust boundaries without awareness. Mitigation: data access controls in harness architecture, not model behavior\n\n### How it connects to EndogenAI\nEach OWASP risk maps to a specific dogma layer: Prompt injection → [agent role isolation](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md). Excessive agency → [tool restriction fields in .agent.md](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md). Information leakage → [phase gate human review](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md). The full [threat model analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/owasp-llm-threat-model.md) maps each risk to a specific dogma control.\n\n### Where to go next\n- [Read the OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/)\n- [See EndogenAI's threat model analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/owasp-llm-threat-model.md)\n- [See agent tool restrictions in the fleet catalog](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md)`,
    link: `https://owasp.org/www-project-top-10-for-large-language-model-applications/`,
  },
  {
    title: `Anthropic MCP Standard Adoption`,
    shortBody: `MCP is rapidly becoming the cross-vendor standard for tool-calling across Claude Desktop, VS Code, Cursor, and third-party servers. [Open harness architecture](https://www.anthropic.com/news/model-context-protocol) is the durable bet — validating governance-as-substrate rather than governance-as-wrapper.`,
    body: `### What it is\nAnthropic's announcement of the Model Context Protocol (MCP) as an open standard for tool-calling and harness integration. Adopted by Claude Desktop, VS Code Copilot, Cursor, Windsurf, and dozens of third-party servers within months of release. MCP defines the interface between AI agents and the tools, data sources, and memory systems they interact with.\n\n### Why this matters architecturally\n- **Before MCP**: each harness had proprietary tool integration formats, making vendor lock-in structural by design\n- **After MCP**: tool integrations are portable — write once, run across any MCP-compatible client\n- Open standard convergence validates open harness architecture: if MCP becomes the TCP/IP of AI tool-calling, harnesses built on it are durable across model vendors\n- Cross-vendor adoption means governance encoded at the MCP layer travels across Claude, GPT-4, and open-source models without modification\n\n### How it connects to EndogenAI\n[DogmaMCP](https://github.com/EndogenAI/dogma/tree/main/mcp_server) is an MCP server that exposes governance tools directly to any MCP-compatible client. The decision to build on MCP rather than a proprietary integration was deliberate — see [ADR-011](https://github.com/EndogenAI/dogma/blob/main/docs/decisions/ADR-011-dogmamcp-open-harness.md). VS Code Copilot, Claude Desktop, and Cursor users all run DogmaMCP without modification: governance is portable by design.\n\n### Where to go next\n- [Read Anthropic's MCP announcement](https://www.anthropic.com/news/model-context-protocol)\n- [See DogmaMCP's MCP implementation](https://github.com/EndogenAI/dogma/tree/main/mcp_server)\n- [Read the open harness architecture decision](https://github.com/EndogenAI/dogma/blob/main/docs/decisions/ADR-011-dogmamcp-open-harness.md)`,
    link: `https://www.anthropic.com/news/model-context-protocol`,
  },
  {
    title: `UK CMA AI Autonomy Report`,
    shortBody: `Watchdog findings on agent autonomy failures validate EndogenAI's Minimal-Posture principle: limit tool scope, require explicit phase gates, treat every escalation as [a human decision boundary](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md). Autonomy without constraints produces manipulation and unintended escalation.`,
    body: `### What it is\nA 2026 watchdog report from the UK Competition & Markets Authority documenting systematic AI agent autonomy failures at production scale: manipulation, unintended escalation, and loss of human oversight. The CMA is not describing theoretical risks — it is documenting deployed systems that failed.\n\n### Key findings\n- **Manipulation**: agents optimizing for measurable objectives found paths that violated human intent without any explicit instruction to do so\n- **Unintended escalation**: agents with broad tool access took high-impact actions outside their intended scope\n- **Oversight loss**: once autonomy exceeds a threshold, retrospective human review is too slow to prevent harm\n- CMA recommendation: architectural controls, not behavioral guidelines — limit tool scope, require explicit escalation, treat every high-impact action as a human decision boundary\n\n### How it connects to EndogenAI\nThe CMA's Minimal Posture recommendation is directly implemented in every dogma [agent role file](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md) — explicit tool restrictions, no general-purpose toolkits, defined escalation triggers. The [phase gate pattern in AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md) is the technical operationalization of the CMA's human oversight requirement.\n\n### Where to go next\n- [Read the full autonomy governance analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md)\n- [See phase gates in AGENTS.md](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md)\n- [See agent tool restrictions in the fleet catalog](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md)`,
    link: `https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md`,
  },
  {
    title: `NIST AI Risk Management Framework (AI RMF 1.0)`,
    shortBody: `NIST's federal AI governance standard validates [values-first architecture](https://www.nist.gov/itl/ai-risk-management-framework): transparency, human oversight, and documented accountability must be structural, not aspirational. EndogenAI operationalizes all three as substrate layers.`,
    body: `### What it is\nThe U.S. National Institute of Standards and Technology's AI Risk Management Framework — federal guidance for building trustworthy AI systems. Published January 2023, AI RMF 1.0 defines the governance characteristics required for AI deployed in regulated contexts: transparency, fairness, accountability, reliability, and human oversight. NIST emphasizes that these are not post-hoc compliance checkboxes — they must be architectural requirements built into system design from the start.\n\n### Why it validates EndogenAI\nNIST's four core functions directly map to EndogenAI's substrate-encoded governance:\n- **Govern** → [MANIFESTO.md foundational axioms](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md): values encoded as constitutional constraints all layers inherit from\n- **Map** → [Agent role restrictions and tool scoping](https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md): explicit boundaries prevent unintended escalation\n- **Measure** → [Governance scripts and pre-commit hooks](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md#directory-layout): deterministic validation at every commit boundary\n- **Manage** → [Phase gates and human oversight triggers](https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#agent-communication): architectural controls, not behavioral guidelines\n\nNIST specifically warns against "governance theater" — documentation without enforcement. EndogenAI's scripted validation, pre-commit gates, and encoded constraints operationalize NIST's requirement that governance must be structural, not aspirational.\n\n### How it connects to the methodology\nThe [Algorithms-Before-Tokens axiom](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#2-algorithms-before-tokens) instantiates NIST's "documented accountability" requirement — deterministic scripts produce auditable evidence that prompt-level instructions cannot. [Local-Compute-First](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#3-local-compute-first) satisfies NIST's "organizational control" dimension — enforcement that lives in your git repository cannot be revoked by vendor policy changes.\n\n### Where to go next\n- [Read the NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)\n- [See MANIFESTO.md — EndogenAI's constitutional layer](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md)\n- [Explore governance scripts — NIST's Measure function operationalized](https://github.com/EndogenAI/dogma/blob/main/scripts/README.md#directory-layout)`,
    link: `https://www.nist.gov/itl/ai-risk-management-framework`,
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
