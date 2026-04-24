import ProductPage from '../../components/ProductPage/ProductPage';

export const ENDOGENAI_META_TITLE = 'EndogenAI | AccessiTech';
export const ENDOGENAI_META_DESC =
  "EndogenAI is AccessiTech's open-source AI governance methodology — implemented in dogma (governance corpus) and DogmaMCP (MCP server). Free and open source. Paid implementation support via AccessiTech Consulting.";

export const ENDOGENAI_TITLE = 'EndogenAI';

export const ENDOGENAI_OVERVIEW =
  "EndogenAI is AccessiTech's open-source AI governance methodology — an endogenous approach to encoding organizational values directly into the infrastructure that AI agents run on. dogma is the open-source implementation of the EndogenAI AI governance methodology — built and maintained by AccessiTech. It is implemented in two open-source components: dogma (the governance corpus: base-value documents, role files, and enforcement scripts you fork and configure with your organization's own values) and DogmaMCP (the MCP server that gives running agents live access to that corpus at runtime). Both are free and open source under Apache 2.0. The Red Hat model applies to implementation: free methodology, paid expertise.";

export const ENDOGENAI_WHY =
  "Most AI governance tools create vendor dependency: you adopt a platform, your governance lives in their database, and you pay indefinitely to access your own policies. We built dogma to break that cycle. The governance corpus is files you own and version-control. The enforcement scripts run locally. DogmaMCP is self-hosted. None of it phones home. By open-sourcing the entire harness, we prove that AI governance isn't a black box. You can inspect it, fork it, run it, and stand behind it without us. If you need help implementing it for production AI systems, that's where AccessiTech Consulting comes in — but the harness itself is yours to keep.";

export const ENDOGENAI_INCLUDED = [
  "dogma governance corpus — Base-value documents (MANIFESTO, AGENTS.md, role files, SKILL.md) implementing the EndogenAI methodology. Fork and extend with your organization's values. Includes enforcement scripts for CI, pre-commit hooks, and programmatic governance validation.",
  'DogmaMCP — The MCP server component. 13 governance tools running agents can call at runtime: validate agent files, scaffold workplans, check substrate health, query the docs corpus, manage scratchpad session memory, and more. Self-hosted, model-agnostic, Apache 2.0.',
  'AccessiTech Accessibility Contributions — Open-source accessibility tools built for client projects and contributed back to the community: WCAG audit scripts, screen reader testing automation, keyboard navigation validators.',
  'ASaaPs Case Studies — Real-world examples of Accessible Software as a Product/Service implementations (published with client permission). Includes: problem context, design decisions, technical architecture, WCAG conformance outcomes, and lessons learned.',
];

export const ENDOGENAI_HOW =
  'All code is hosted at https://github.com/EndogenAI/dogma. Fork the repo, configure your governance corpus, deploy DogmaMCP, and connect your agent workflow. Everything is documented and open. If your organization wants expert help deploying dogma for production AI systems, schedule a Consulting — Agentic Intelligence Integration discovery call.';

export const ENDOGENAI_RELATED =
  'Consulting — Agentic Intelligence Integration: AI governance framework implementation, MCP server development, and EndogenAI deployment support. Consulting — Design and Development: Accessible Software as a Product/Service (ASaaPs): Custom accessible software development for digital products and services.';

export const ENDOGENAI_CTA_LABEL = 'Explore on GitHub';
export const ENDOGENAI_CTA_HREF = 'https://github.com/EndogenAI/dogma';

const EndogenAI = () => (
  <ProductPage
    title={ENDOGENAI_TITLE}
    overview={ENDOGENAI_OVERVIEW}
    whyItExists={ENDOGENAI_WHY}
    included={ENDOGENAI_INCLUDED}
    howToUse={ENDOGENAI_HOW}
    relatedServices={ENDOGENAI_RELATED}
    ctaLabel={ENDOGENAI_CTA_LABEL}
    ctaHref={ENDOGENAI_CTA_HREF}
    pathname="products/endogenai"
    metaTitle={ENDOGENAI_META_TITLE}
    metaDescription={ENDOGENAI_META_DESC}
    parentCrumb={{ label: 'Products', href: '/products' }}
    getStartedInquiryParam="consulting"
  />
);

export default EndogenAI;
