import ProductPage from '../../../components/ProductPage/ProductPage';
import { AI_INTEGRATION_HEADER, AI_INTEGRATION_DESC } from '../../../components/Services/Services';

const AIIntegrationPage = () => (
  <ProductPage
    title={AI_INTEGRATION_HEADER}
    overview={AI_INTEGRATION_DESC}
    whyItExists="AI systems without accountability frameworks amplify existing inequities at scale. The EndogenAI methodology applies the Red Hat model to AI governance: free open-source framework, paid implementation support. Your team owns the methodology — we help you deploy it. Vendor lock-in is not part of the engagement."
    included={[
      'EndogenAI Workflows methodology deployment (open source, auditable)',
      'Governance frameworks embedded into daily operations — not bolted on after launch',
      'Agent fleet design with value-encoding and posture constraints',
      'Bias and access impact assessments for agentic systems',
      'Audit-ready documentation your team can extend and maintain',
    ]}
    examples={[
      {
        project: 'EndogenAI Workflows (dogma)',
        description:
          'Open-source AI governance framework built for agent-driven development workflows — encoding organizational values into deterministic scripts, multi-agent orchestration patterns, and a structured scratchpad architecture. Now available as a cookiecutter template for adoption by other organizations.',
      },
      {
        project: 'Agentic Governance Advisory',
        description:
          'Discovery and scoping engagements for organizations adopting LLM-based workflows — identifying accountability gaps, data lineage risks, and user-impact surfaces before deployment. Deliverable: a governance readiness report with prioritized remediation recommendations.',
      },
    ]}
    howToUse="AI Integration engagements begin with a governance readiness assessment (typically 1–2 hours). Full engagements are scoped in 4–8 week phases. Schedule a discovery call to discuss your current AI stack, team structure, and accountability goals."
    relatedServices="Deploying accessible AI interfaces? Pair this engagement with ASaaPs for accessibility-first front-end implementation, or QA for systematic evaluation of AI-generated content against WCAG standards."
    ctaLabel="Schedule a Discovery Call"
    ctaHref="/contact?inquiry=consulting"
    pathname="services/consulting/ai-integration"
    metaTitle="Agentic Intelligence Integration | AccessiTech"
    metaDescription="AccessiTech deploys the EndogenAI governance methodology for accountable, auditable AI systems — open-source framework, paid implementation, no vendor lock-in."
    parentCrumb={{ label: 'Consulting', href: '/services/consulting' }}
  />
);

export default AIIntegrationPage;
