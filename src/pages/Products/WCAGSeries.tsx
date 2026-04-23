import ProductPage from '../../components/ProductPage/ProductPage';

export const WCAG_SERIES_OVERVIEW =
  'Free, accessible educational guides to the Web Content Accessibility Guidelines — one principle at a time. These guides are written in plain language so developers, designers, and product teams can understand WCAG without a legal background.';
export const WCAG_SERIES_WHY =
  "Operationalizing 'nothing about us without us' through accessible education. Accessibility standards should not be locked behind paywalls or dense legal text. WCAG Series makes compliance understandable and approachable for everyone building digital products. All content is written and reviewed by people with direct experience of disability.";
export const WCAG_SERIES_INCLUDED = [
  'WCAG 2.2 AA compliance checklists',
  'Accessible design pattern guides',
  'Screen reader testing guides',
  'Free — hosted on Accessi.Tech and GitHub',
];
export const WCAG_SERIES_HOW =
  'All WCAG Series content is free. Read it online, download as PDFs, or fork on GitHub. No account is required. Each guide covers one WCAG principle or success criterion. You can learn at your own pace or jump to what you need.';
export const WCAG_SERIES_RELATED =
  'Working through WCAG for a specific project? Our Consulting team offers accessibility audits, QA testing, and ASaaP implementation.';
export const WCAG_SERIES_CTA_LABEL = 'Browse the WCAG Series';
export const WCAG_SERIES_META_TITLE = 'WCAG Series | AccessiTech';
export const WCAG_SERIES_META_DESC =
  'Free WCAG 2.2 AA compliance checklists and accessible design pattern guides from AccessiTech.';

const WCAGSeries = () => (
  <ProductPage
    title="WCAG Series"
    overview={WCAG_SERIES_OVERVIEW}
    whyItExists={WCAG_SERIES_WHY}
    included={WCAG_SERIES_INCLUDED}
    howToUse={WCAG_SERIES_HOW}
    relatedServices={WCAG_SERIES_RELATED}
    ctaLabel={WCAG_SERIES_CTA_LABEL}
    ctaHref="/wcag"
    pathname="products/wcag-series"
    metaTitle={WCAG_SERIES_META_TITLE}
    metaDescription={WCAG_SERIES_META_DESC}
    parentCrumb={{ label: 'Products', href: '/products' }}
    getStartedInquiryParam="general"
  />
);

export default WCAGSeries;
