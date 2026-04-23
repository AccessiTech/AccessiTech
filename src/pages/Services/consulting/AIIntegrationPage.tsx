import ProductPage from '../../../components/ProductPage/ProductPage';
import { AI_INTEGRATION_HEADER, AI_INTEGRATION_DESC } from '../../../components/Services/Services';

const AIIntegrationPage = () => (
  <ProductPage
    title={AI_INTEGRATION_HEADER}
    overview={AI_INTEGRATION_DESC}
    whyItExists="AI systems without clear accountability make existing inequities worse. The EndogenAI methodology addresses this. It follows the Red Hat model: the governance framework is free and open source. Your team owns it — we help you put it to work. There is no vendor lock-in."
    included={[
      'EndogenAI Workflows methodology deployment (open source, auditable)',
      'Governance frameworks built into daily operations from the start — not added on later',
      'Agent fleet design with clear value constraints and posture guidelines',
      'Bias and access impact reviews for AI systems',
      'Audit-ready documentation your team can extend and maintain',
    ]}
    examples={[
      {
        project: 'EndogenAI Workflows (dogma)',
        description:
          'An open-source AI governance framework for agent-driven development workflows. It encodes your organizational values into auditable scripts and multi-agent patterns. Now available as a cookiecutter template for other organizations to adopt.',
      },
      {
        project: 'Agentic Governance Advisory',
        description:
          'Advisory engagements for organizations adopting LLM-based workflows. We identify accountability gaps, data lineage risks, and user-impact concerns before deployment. You receive a governance readiness report with prioritized recommendations.',
      },
    ]}
    howToUse="AI Integration engagements begin with a readiness assessment (typically 1–2 hours). Full engagements run in 4–8 week phases. Schedule a discovery call to discuss your AI stack, team structure, and goals."
    relatedServices="Deploying accessible AI interfaces? Pair this with ASaaPs for accessibility-first front-end work, or QA to evaluate AI-generated content against WCAG standards."
    ctaLabel="Schedule a Discovery Call"
    ctaHref="/contact?inquiry=consulting"
    pathname="services/consulting/ai-integration"
    metaTitle="Agentic Intelligence Integration | AccessiTech"
    metaDescription="AccessiTech deploys the EndogenAI governance methodology for accountable, auditable AI systems — open-source framework, paid implementation, no vendor lock-in."
    parentCrumb={{ label: 'Consulting', href: '/services/consulting' }}
  />
);

export default AIIntegrationPage;
