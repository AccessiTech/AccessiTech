import ProductPage from '../../../components/ProductPage/ProductPage';
import { ASAAPS_HEADER, ASAAPS_DESC } from '../../../components/Services/Services';

const ASaaPsPage = () => (
  <ProductPage
    title={ASAAPS_HEADER}
    overview={ASAAPS_DESC}
    whyItExists="Digital accessibility is not a legal checkbox — it's the difference between a product that works for everyone and one that excludes by design. AccessiTech builds systems where inclusive design is the starting constraint, not the final retrofit. Every engagement is founder-led and scoped to what your team can maintain after handoff."
    included={[
      'WCAG 2.2 AA compliance as a structural requirement from day one',
      'Screen-reader-tested components (NVDA, VoiceOver)',
      'Keyboard-navigable interfaces throughout',
      'Accessible design patterns and component documentation',
      'Plain-language remediation guidance for non-technical stakeholders',
    ]}
    examples={[
      {
        project: 'AccessiTech.io',
        description:
          'End-to-end accessible React application built from scratch — WCAG 2.2 AA compliant, screen-reader tested, keyboard navigable throughout. axe-core integrated into CI to prevent accessibility regressions before they reach production.',
      },
      {
        project: 'EndogenAI Workflows Platform',
        description:
          'Iterative ASaaP engagement embedding accessibility governance into an AI tooling platform — restructuring navigation, landmark regions, and form patterns to meet AA standards across both the web interface and agent-authored documentation templates.',
      },
    ]}
    howToUse="ASaaPs engagements are scoped per-project: new builds, legacy retrofits, or embedded feature work. Initial scope calls are free. Engagements are typically structured as fixed-scope phases — no open-ended retainer required to start."
    relatedServices="Need to pair implementation with ongoing verification? Our Quality Assurance service provides manual screen reader testing and WCAG audit cycles alongside or after an ASaaP engagement. For team upskilling, see Mentorship."
    ctaLabel="Schedule a Discovery Call"
    ctaHref="/contact?inquiry=consulting"
    pathname="services/consulting/asaaps"
    metaTitle="ASaaPs: Accessible Software Design & Development | AccessiTech"
    metaDescription="AccessiTech ASaaP engagements build WCAG 2.2 AA compliant software from day one — screen-reader tested, keyboard navigable, and built for your team to maintain."
    parentCrumb={{ label: 'Consulting', href: '/services/consulting' }}
  />
);

export default ASaaPsPage;
