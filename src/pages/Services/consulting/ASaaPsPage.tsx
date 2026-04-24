import ProductPage from '../../../components/ProductPage/ProductPage';
import { ASAAPS_HEADER, ASAAPS_DESC } from '../../../components/Services/Services';

export const ASAAPS_WHY =
  "Digital accessibility is not a legal checkbox — it's the difference between a product that works for everyone and one that excludes by design. AccessiTech builds systems where inclusive design is the starting constraint, not the final retrofit. Every engagement is founder-led and scoped to what your team can maintain after handoff.";
export const ASAAPS_INCLUDED = [
  'WCAG 2.2 AA compliance as a structural requirement from day one',
  'Screen-reader-tested components (NVDA, VoiceOver)',
  'Keyboard-navigable interfaces throughout',
  'Accessible design patterns and component documentation',
  'Plain-language remediation guidance for non-technical stakeholders',
];
export const ASAAPS_EXAMPLES = [
  {
    project: 'Accessi.Tech',
    description:
      'End-to-end accessible React application built from scratch — WCAG 2.2 AA compliant, screen-reader tested, keyboard navigable throughout. axe-core integrated into CI to prevent accessibility regressions before they reach production.',
  },
  {
    project: 'EndogenAI Workflows Platform',
    description:
      'Iterative ASaaP engagement embedding accessibility governance into an AI tooling platform — restructuring navigation, landmark regions, and form patterns to meet AA standards across both the web interface and agent-authored documentation templates.',
  },
];
export const ASAAPS_HOW =
  'ASaaPs engagements are scoped per-project: new builds, legacy retrofits, or embedded feature work. Initial scope calls are free. Engagements are typically structured as fixed-scope phases — no open-ended retainer required to start.';
export const ASAAPS_RELATED =
  'Need to pair implementation with ongoing verification? Our Quality Assurance service provides manual screen reader testing and WCAG audit cycles alongside or after an ASaaP engagement. For team upskilling, see Mentorship.';
export const ASAAPS_CTA_LABEL = 'Schedule a Discovery Call';
export const ASAAPS_META_TITLE = 'ASaaPs: Accessible Software Design & Development | AccessiTech';
export const ASAAPS_META_DESC =
  'AccessiTech ASaaP engagements build WCAG 2.2 AA compliant software from day one — screen-reader tested, keyboard navigable, and built for your team to maintain.';
export const ASAAPS_GS_LEFT =
  'Ready to bring accessibility into your next build or retrofit? A discovery call is the fastest way to clarify scope, timeline, and whether ASaaPs is the right engagement model for your team.';
export const ASAAPS_GS_RIGHT =
  "Have questions about what's included or how the engagement process works? We're happy to answer any questions before you commit to a call.";
export const ASAAPS_GS_LEFT_BTN = 'Schedule a Discovery Call';
export const ASAAPS_GS_RIGHT_BTN = 'Send us a message';

const ASaaPsPage = () => (
  <ProductPage
    title={ASAAPS_HEADER}
    overview={ASAAPS_DESC}
    whyItExists={ASAAPS_WHY}
    included={ASAAPS_INCLUDED}
    examples={ASAAPS_EXAMPLES}
    howToUse={ASAAPS_HOW}
    relatedServices={ASAAPS_RELATED}
    ctaLabel={ASAAPS_CTA_LABEL}
    ctaHref="/contact?inquiry=consulting"
    pathname="services/consulting/asaaps"
    metaTitle={ASAAPS_META_TITLE}
    metaDescription={ASAAPS_META_DESC}
    parentCrumb={{ label: 'Consulting', href: '/services/consulting' }}
    getStartedLeftParagraph={ASAAPS_GS_LEFT}
    getStartedRightParagraph={ASAAPS_GS_RIGHT}
    getStartedLeftButtonLabel={ASAAPS_GS_LEFT_BTN}
    getStartedRightButtonLabel={ASAAPS_GS_RIGHT_BTN}
    getStartedInquiryParam="consulting"
  />
);

export default ASaaPsPage;
