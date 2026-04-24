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
export const PROBLEM_INTRO = `Recent governance reports expose the same structural risks: AI systems launched without accountability mechanisms, platform dependencies that trap organizations, and decision-making processes that exclude the people most affected. Here's what the research shows:`;

export const PROBLEM_CARD_1_TITLE = `UK CMA: AI Agent Autonomy Failures`;
export const PROBLEM_CARD_1_BODY = `The UK Competition & Markets Authority's 2026 watchdog report documents systematic autonomy failures in AI agent systems: manipulation, unintended escalation, and loss of human control. Organizations deploy agents without genuine oversight mechanisms, then face cascading failures. [See the full analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md#) — these aren't theoretical risks. They're happening now.`;

export const PROBLEM_CARD_2_TITLE = `Platform Lock-In: Vendor Volatility`;
export const PROBLEM_CARD_2_BODY = `Meta's acquisition of Moltbook and subsequent Terms-of-Service changes illustrate a structural risk: organizations building on proprietary AI platforms can lose operational control overnight. When vendor policies shift, governance infrastructure built on that platform breaks. [Platform lock-in research](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-platform-lock-in-risks.md#) shows the pattern is repeating — avoid it by designing for portability.`;

export const PROBLEM_CARD_3_TITLE = `OWASP LLM Top 10: Security Blindness`;
export const PROBLEM_CARD_3_BODY = `Seven of the OWASP Top 10 for LLM Applications apply directly to agentic workflows. Three are High-severity: prompt injection attacks, excessive agency (uncontrolled tool access), and sensitive information leakage. Most organizations don't know their AI systems are exposed. [Full threat model analysis](https://github.com/EndogenAI/dogma/blob/main/docs/research/owasp-llm-threat-model.md#) — governance is how you close these gaps.`;

// §3 What EndogenAI is
export const WHAT_ENDOGENAI_INTRO = `EndogenAI is a methodology for building AI governance into systems from day one — not bolting it on after launch. It's built on three core axioms: **Endogenous-First** (read your system's own encoded knowledge before acting), **Algorithms Before Tokens** (prefer deterministic solutions over interactive generation), and **Local Compute-First** (run enforcement locally, not in the cloud).

The framework encodes governance as:
- **MANIFESTO.md** — your organization's foundational values and operational constraints
- **AGENTS.md** — agent fleet conventions, decision gates, and phase sequences
- **Agent roles (.agent.md files)** — specialized agents with explicit tool restrictions and handoff patterns
- **Reusable skills (SKILL.md files)** — domain-specific procedures any agent can invoke
- **Governance scripts** — deterministic validation, linting, and enforcement

This is the same model Red Hat used to open-source enterprise infrastructure: free methodology, paid implementation support. You own the code, audit every layer, and build organizational capabilities that don't depend on any vendor.

[Read the full Endogenic Development Manifesto](https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#) — it's the constitutional foundation for everything EndogenAI does.`;

export const WHAT_TITLE = `What EndogenAI is`;

export const BRAND_RELATIONSHIP = `AccessiTech built EndogenAI as the governance layer for organizations closing the accountability gap with AI systems. The methodology emerges from three years of accessibility-first consulting work: seeing how systems fail when they're built without genuine consideration for the people who depend on them, and discovering that the same structural blindness appears in AI governance. Disability justice principles — centering the expertise of disabled people in redesign — are directly applicable to AI accountability. The people most excluded from a system are the people best positioned to fix it. That insight is the foundation of EndogenAI. We use it in every consulting engagement, and we're open-sourcing it so organizations can apply the same methodology independently.`;

// Export as WHAT_DESCRIPTION for component compatibility
export const WHAT_DESCRIPTION = WHAT_ENDOGENAI_INTRO;

// §4 How It Works (Encoding Chain)
export const HOW_TITLE = `How It Works`;

export const HOW_IT_WORKS_INTRO = `EndogenAI governance works as an encoding ladder: each layer (principles → operations → agent roles → skills → runtime behavior) re-encodes the layer above it. This makes governance visible at every scale — from top-level MANIFESTO axioms down to individual script invocations — and it makes drift detectable: if a script doesn't follow the operational constraints, pre-commit hooks catch it before merge.

Here's how that ladder builds up:`;

export interface EncodingStep {
  step: number;
  title: string;
  description: string;
  link: string;
}

export const ENCODING_CHAIN_ARRAY: EncodingStep[] = [
  {
    step: 1,
    title: 'Foundational Axioms (MANIFESTO.md)',
    description:
      "Define your organization's core values. EndogenAI uses three: Endogenous-First (read encoded knowledge), Algorithms-Before-Tokens (prefer determinism), Local-Compute-First (enforcement runs locally). These axioms are the constitution — everything else flows from them.",
    link: 'https://github.com/EndogenAI/dogma/blob/main/MANIFESTO.md#guiding-principles-cross-cutting',
  },
  {
    step: 2,
    title: 'Operational Constraints (AGENTS.md)',
    description:
      'Translate axioms into operational rules that the entire agent fleet must follow. Session gates, commit discipline, file-write guardrails, phase sequences, and delegation patterns all live here. This is where principles meet practice.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guiding-constraints',
  },
  {
    step: 3,
    title: 'Agent Roles (.agent.md files)',
    description:
      'Define specialized agents with minimal, role-specific tool sets. Each agent has explicit posture (readonly, creator, full), clear handoff patterns, and endogenous sources it reads before acting. No agent gets a general-purpose tool kit.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/.github/agents/README.md',
  },
  {
    step: 4,
    title: 'Reusable Skills (SKILL.md files)',
    description:
      'Package domain-specific workflows so multiple agents can invoke them. Skills are the "how to" layer — procedures, decision gates, validation checklists. When a procedure is used twice, the third time becomes a skill.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/.github/skills/README.md',
  },
  {
    step: 5,
    title: 'Deterministic Governance Scripts',
    description:
      'Encode validation, enforcement, and automation as scripts that run on every commit (pre-commit hooks), every push (pre-push tests), and in CI. Scripted governance is auditable, repeatable, and detectable—no manual review gate can be as reliable as a script.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/scripts/README.md',
  },
  {
    step: 6,
    title: 'Session State & Handoff (Scratchpad)',
    description:
      "Cross-agent communication happens in `.tmp/<branch>/<date>.md` scratchpad files (gitignored, never committed). Each agent appends findings under its own named section. The executive orchestrator reads the full scratchpad and synthesizes across phases—but agents don't read laterally.",
    link: 'https://github.com/EndogenAI/dogma/blob/main/docs/guides/session-management.md#scratchpad-governance',
  },
  {
    step: 7,
    title: 'Runtime Validation & Monitoring',
    description:
      'At execution time, pre-commit hooks and CI gates enforce all upstream constraints. If a commit violates AGENTS.md rules, pre-commit rejects it before push. If CI finds violations, the PR cannot merge. Governance is checked at every boundary.',
    link: 'https://github.com/EndogenAI/dogma/blob/main/AGENTS.md#guardrails',
  },
];

// Export as ENCODING_STEPS for component compatibility
export const ENCODING_STEPS = ENCODING_CHAIN_ARRAY;

// §5 dogma & DogmaMCP
export const DOGMA_CARD_TITLE = `dogma`;
export const DOGMA_CARD_BODY = `The EndogenAI governance corpus — open-source, fully auditable, no proprietary lock-in. dogma contains the MANIFESTO, AGENTS.md operational guidelines, agent role definitions, reusable skills, governance scripts, and all research synthesis docs. It's the substrate: every organization using EndogenAI reads from dogma and extends it for their own context. Governance doesn't live in vendor dashboards or closed platforms. It lives in your git repository.`;

export const DOGMAMCP_CARD_TITLE = `DogmaMCP`;
export const DOGMAMCP_CARD_BODY = `A Model Context Protocol (MCP) server that exposes dogma governance tools to your AI agents and development workflows — validators for agent files, research syntheses, scratchpad state checks, agent scaffolding templates, and more. DogmaMCP runs locally (no external API calls), integrates with VS Code Copilot and Claude Desktop, and lets your agents programmatically enforce governance policies. It's the bridge between the encoded substrate and your AI workflow.`;

// §6 Research Section
export const RESEARCH_HEADER = `What the Research Says`;

// Export as RESEARCH_TITLE for component compatibility
export const RESEARCH_TITLE = RESEARCH_HEADER;

export const RESEARCH_FINDINGS = `EndogenAI is grounded in peer-reviewed research and industry governance reports:

**[Endogenic Design Patterns for AI Systems](https://github.com/EndogenAI/dogma/blob/main/docs/research/endogenic-design-paper.md)** — Biological scaffolding metaphors (endogenous processes, morphogenesis) applied to AI system design. Organizations that encode knowledge persistently (scripts, governed agents, audit logs) show 40–60% reduction in incident recovery time compared to ad-hoc approaches.

**[Values Encoding Fidelity and Agent Fleet Maturity](https://github.com/EndogenAI/dogma/blob/main/docs/research/values-encoding.md)** — How to measure whether your governance actually works. Cross-layer validation, encoding fidelity tests, and the L0–L3 maturity model (from tacit knowledge to organizational policy). Most organizations get stuck at L1 (individual shortcuts, not shared); the encoding ladder helps you move from L1 → L2 → L3.

**[Bubble Clusters and Substrate Fragmentation](https://github.com/EndogenAI/dogma/blob/main/docs/research/bubble-clusters-substrate.md)** — Why AI workflows built with multiple disconnected agents fail. When agents don't read the same governance constraints (different AGENTS.md versions, inconsistent tool restrictions, fragmented handoff protocols), the system develops "bubbles" that violate governance at boundaries. Unified substrate + version control prevents this.

**[UK CMA AI Autonomy Report](https://github.com/EndogenAI/dogma/blob/main/docs/research/ai-autonomy-governance.md)** — Recent watchdog findings on agent autonomy failures validate EndogenAI's Minimal-Posture principle: limit tool scope, require explicit phase gates, and treat every escalation as a human decision boundary.`;

// Research paper cards (for component compatibility)
export const RESEARCH_PAPER_1_TITLE = `endogenic-design-paper.md`;
export const RESEARCH_PAPER_1_SUMMARY = `Biological scaffolding metaphors applied to AI system design. Organizations that encode knowledge persistently show 40–60% reduction in incident recovery time compared to ad-hoc approaches.`;

export const RESEARCH_PAPER_2_TITLE = `values-encoding.md`;
export const RESEARCH_PAPER_2_SUMMARY = `How to measure whether your governance actually works. Cross-layer validation, encoding fidelity tests, and the L0–L3 maturity model from tacit knowledge to organizational policy.`;

export const RESEARCH_PAPER_3_TITLE = `bubble-clusters-substrate.md`;
export const RESEARCH_PAPER_3_SUMMARY = `Why AI workflows built with multiple disconnected agents fail. When agents don't read the same governance constraints, systems develop boundary violations. Unified substrate + version control prevents this.`;

// §7 CTA
export const CTA_TITLE = `Get Started`;
export const CTA_DESCRIPTION = `EndogenAI is open-source, free to use, and designed for organizations ready to own their governance infrastructure. Start with the documentation, fork the dogma repository, and customize MANIFESTO.md and AGENTS.md for your organization. AccessiTech offers paid implementation support — consulting to embed EndogenAI into your workflows, code reviews to enforce governance, and training for teams adopting the methodology.`;
export const CTA_GITHUB_LABEL = `Explore on GitHub`;
export const CTA_GITHUB_HREF = `https://github.com/EndogenAI/dogma`;
export const CTA_CONSULTING_LABEL = `Schedule a Consulting Call`;
export const CTA_CONSULTING_HREF = `/contact?inquiry=endogenai-implementation`;
