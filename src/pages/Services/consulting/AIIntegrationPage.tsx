import ProductPage from '../../../components/ProductPage/ProductPage';
import { AI_INTEGRATION_HEADER, AI_INTEGRATION_DESC } from '../../../components/Services/Services';

export const AI_INTEGRATION_WHY =
  'AI systems without clear accountability make existing inequities worse. The EndogenAI methodology addresses this. It follows the Red Hat model: the governance framework is free and open source. Your team owns it — we help you put it to work. There is no vendor lock-in.';
export const AI_INTEGRATION_INCLUDED = [
  'EndogenAI Workflows methodology deployment (open source, auditable)',
  'Governance frameworks built into daily operations from the start — not added on later',
  'Agent fleet design with clear value constraints and posture guidelines',
  'Bias and access impact reviews for AI systems',
  'Audit-ready documentation your team can extend and maintain',
];
export const AI_INTEGRATION_EXAMPLES = [
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
];
export const AI_INTEGRATION_HOW =
  'AI Integration engagements begin with a readiness assessment (typically 1–2 hours). Full engagements run in 4–8 week phases. Schedule a discovery call to discuss your AI stack, team structure, and goals.';
export const AI_INTEGRATION_RELATED =
  'Deploying accessible AI interfaces? Pair this with ASaaPs for accessibility-first front-end work, or QA to evaluate AI-generated content against WCAG standards.';
export const AI_INTEGRATION_CTA_LABEL = 'Schedule a Discovery Call';
export const AI_INTEGRATION_META_TITLE = 'Agentic Intelligence Integration | AccessiTech';
export const AI_INTEGRATION_META_DESC =
  'AccessiTech deploys the EndogenAI governance methodology for accountable, auditable AI systems — open-source framework, paid implementation, no vendor lock-in.';
export const AI_INTEGRATION_GS_LEFT =
  'Evaluating how AI fits into your workflow? A discovery call is the best way to map out governance needs, risk areas, and where EndogenAI patterns can help your team move faster.';
export const AI_INTEGRATION_GS_RIGHT =
  "Questions about governance patterns, open-source deployment, or how this differs from other AI governance frameworks? We're happy to discuss before you commit to a call.";
export const AI_INTEGRATION_GS_LEFT_BTN = 'Schedule a Discovery Call';
export const AI_INTEGRATION_GS_RIGHT_BTN = 'Send us a message';

const AIIntegrationPage = () => (
  <ProductPage
    title={AI_INTEGRATION_HEADER}
    overview={AI_INTEGRATION_DESC}
    whyItExists={AI_INTEGRATION_WHY}
    included={AI_INTEGRATION_INCLUDED}
    examples={AI_INTEGRATION_EXAMPLES}
    howToUse={AI_INTEGRATION_HOW}
    relatedServices={AI_INTEGRATION_RELATED}
    ctaLabel={AI_INTEGRATION_CTA_LABEL}
    ctaHref="/contact?inquiry=consulting"
    pathname="services/consulting/ai-integration"
    metaTitle={AI_INTEGRATION_META_TITLE}
    metaDescription={AI_INTEGRATION_META_DESC}
    parentCrumb={{ label: 'Consulting', href: '/services/consulting' }}
    getStartedLeftParagraph={AI_INTEGRATION_GS_LEFT}
    getStartedRightParagraph={AI_INTEGRATION_GS_RIGHT}
    getStartedLeftButtonLabel={AI_INTEGRATION_GS_LEFT_BTN}
    getStartedRightButtonLabel={AI_INTEGRATION_GS_RIGHT_BTN}
    getStartedInquiryParam="consulting"
  />
);

export default AIIntegrationPage;
