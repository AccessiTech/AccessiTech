import ProductPage from '../../../components/ProductPage/ProductPage';
import { QA_HEADER, QA_DESC } from '../../../components/Services/Services';

const QAPage = () => (
  <ProductPage
    title={QA_HEADER}
    overview={QA_DESC}
    whyItExists="Most accessibility errors reach production because they are never tested against real assistive technology. AccessiTech QA closes that gap — manual screen reader testing, systematic WCAG audits, and remediation documentation written for the developers who will actually fix the issues, not for compliance archives."
    included={[
      'WCAG 2.2 AA compliance audit across all applicable success criteria',
      'Manual screen reader testing — NVDA (Windows) and VoiceOver (macOS / iOS)',
      'Automated scanning with axe-core and WAVE',
      'Remediation roadmap with developer-ready fix specifications and priority rankings',
      'Plain-language executive summary for non-technical stakeholders',
      'Optional re-audit after remediation to confirm resolution',
    ]}
    examples={[
      {
        project: 'AccessiTech.io — WCAG 2.2 AA Compliance Sprint',
        description:
          'Full manual and automated audit of the AccessiTech platform across navigation, forms, colour contrast, ARIA landmark structure, and keyboard interactivity. 23 WCAG 2.2 AA violations identified and resolved. axe-core integrated into CI to prevent regressions in subsequent development.',
      },
      {
        project: 'EndogenAI Workflows — Accessibility QA Review',
        description:
          'Systematic review of agent documentation templates and web interfaces for screen reader compatibility, keyboard navigation, ARIA pattern correctness, and cognitive load. Delivered a prioritized remediation roadmap for the open-source contributor community and internal engineering team.',
      },
    ]}
    howToUse="QA audit engagements are fixed-scope: we assess your current state, document every violation, and hand off a prioritized roadmap. Pricing is scoped by page-count and test complexity. A re-audit engagement is available separately after remediation is complete."
    relatedServices="Audit uncovered significant remediation work? An ASaaPs engagement can implement fixes directly. For team training in accessible QA methods — integrating axe in CI, running screen reader tests in sprint cycles — see Mentorship."
    ctaLabel="Schedule an Audit Call"
    ctaHref="/contact?inquiry=qa"
    pathname="services/consulting/qa"
    metaTitle="Quality Assurance & WCAG Testing | AccessiTech"
    metaDescription="AccessiTech QA: WCAG 2.2 AA audits, manual NVDA/VoiceOver testing, and developer-ready remediation roadmaps for accessible digital systems."
    parentCrumb={{ label: 'Consulting', href: '/services/consulting' }}
  />
);

export default QAPage;
