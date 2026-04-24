import ProductPage from '../../../components/ProductPage/ProductPage';
import { QA_HEADER, QA_DESC } from '../../../components/Services/Services';

export const QA_WHY =
  'Most accessibility errors reach production because no one tested with real assistive technology. AccessiTech QA closes that gap. We run manual screen reader tests, systematic WCAG audits, and write fix documentation for the developers who need to act on it — not for compliance reports.';
export const QA_INCLUDED = [
  'WCAG 2.2 AA compliance audit across all applicable success criteria',
  'Manual screen reader testing — NVDA (Windows) and VoiceOver (macOS / iOS)',
  'Automated scanning with axe-core and WAVE',
  'A clear remediation roadmap with fix specs and priority rankings your developers can act on',
  'Plain-language executive summary for non-technical stakeholders',
  'Optional re-audit after remediation to confirm resolution',
];
export const QA_EXAMPLES = [
  {
    project: 'Accessi.Tech — WCAG 2.2 AA Compliance Sprint',
    description:
      'We ran a full audit of the AccessiTech platform — navigation, forms, colour contrast, ARIA landmarks, and keyboard use. We found and resolved 23 WCAG 2.2 AA violations. We also integrated axe-core into CI to catch new issues before they ship.',
  },
  {
    project: 'EndogenAI Workflows — Accessibility QA Review',
    description:
      'We reviewed agent documentation templates and web interfaces for screen reader support, keyboard navigation, ARIA patterns, and cognitive load. We delivered a prioritized fix roadmap for the contributor community and the internal engineering team.',
  },
];
export const QA_HOW =
  'QA audit engagements are fixed-scope: we assess your current state, document every violation, and hand off a prioritized roadmap. Pricing is scoped by page-count and test complexity. A re-audit engagement is available separately after remediation is complete.';
export const QA_RELATED =
  'Audit uncovered significant remediation work? An ASaaPs engagement can implement fixes directly. For team training in accessible QA methods — integrating axe in CI, running screen reader tests in sprint cycles — see Mentorship.';
export const QA_CTA_LABEL = 'Schedule an Audit Call';
export const QA_META_TITLE = 'Quality Assurance & WCAG Testing | AccessiTech';
export const QA_META_DESC =
  'AccessiTech QA: WCAG 2.2 AA audits, manual NVDA/VoiceOver testing, and developer-ready remediation roadmaps for accessible digital systems.';
export const QA_GS_LEFT =
  'Ready to audit your platform for accessibility issues? A QA discovery call lets us scope your content, estimate timeline, and confirm what success looks like for your team.';
export const QA_GS_RIGHT =
  "Questions about the audit process, what's included, or how accessibility QA integrates into your workflow? We're happy to discuss before you commit to an engagement.";
export const QA_GS_LEFT_BTN = 'Schedule an Audit Call';
export const QA_GS_RIGHT_BTN = 'Send us a message';

const QAPage = () => (
  <ProductPage
    title={QA_HEADER}
    overview={QA_DESC}
    whyItExists={QA_WHY}
    included={QA_INCLUDED}
    examples={QA_EXAMPLES}
    howToUse={QA_HOW}
    relatedServices={QA_RELATED}
    ctaLabel={QA_CTA_LABEL}
    ctaHref="/contact?inquiry=qa"
    pathname="services/consulting/qa"
    metaTitle={QA_META_TITLE}
    metaDescription={QA_META_DESC}
    parentCrumb={{ label: 'Consulting', href: '/services/consulting' }}
    getStartedLeftParagraph={QA_GS_LEFT}
    getStartedRightParagraph={QA_GS_RIGHT}
    getStartedLeftButtonLabel={QA_GS_LEFT_BTN}
    getStartedRightButtonLabel={QA_GS_RIGHT_BTN}
    getStartedInquiryParam="qa"
  />
);

export default QAPage;
