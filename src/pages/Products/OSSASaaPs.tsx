import ProductPage from '../../components/ProductPage/ProductPage';

export const OSS_OVERVIEW =
  'Open-source tools and accessibility frameworks with accessibility built in from day one. Our methodology treats accessibility as an ongoing part of software development — not a one-time audit, and not a compliance checklist. The methodology is free. Implementation support is a paid Consulting engagement. (Note: we use ASaaP for our open-source practice framework and ASaaPs for our paid Consulting service offering Accessible Software as a Product/Service.)';
export const OSS_WHY =
  'We follow the Red Hat model: the methodology is free, paid support sustains the mission. ASaaP reframes accessibility. Instead of a one-time compliance event, it becomes a continuous, embedded practice. It was built by disabled technologists for teams that want to build accessibility in from day one.';
export const OSS_INCLUDED = [
  'EndogenAI Workflows methodology (open source, GitHub)',
  'AccessiTech plugin contributions',
  'ASaaP implementation frameworks',
  'AI governance patterns for accessible agentic systems',
];
export const OSS_HOW =
  'All OSS/ASaaP methodology is free on GitHub. Implementation support — integrating these frameworks into your product or org — is a Consulting engagement.';
export const OSS_RELATED =
  'Need help implementing an ASaaP framework? Our Consulting team works with engineering teams on accessibility governance, QA, and agentic AI systems.';
export const OSS_CTA_LABEL = 'Explore on GitHub';
export const OSS_META_TITLE = 'OSS & ASaaPs | AccessiTech';
export const OSS_META_DESC =
  'Open-source accessibility tools and ASaaP (Accessibility Software as a Practice) frameworks from AccessiTech. Free methodology, paid implementation support.';

const OSSASaaPs = () => (
  <ProductPage
    title="Open Source Software & ASaaPs"
    overview={OSS_OVERVIEW}
    whyItExists={OSS_WHY}
    included={OSS_INCLUDED}
    howToUse={OSS_HOW}
    relatedServices={OSS_RELATED}
    ctaLabel={OSS_CTA_LABEL}
    ctaHref="https://github.com/AccessiTech"
    pathname="products/oss-asaaps"
    metaTitle={OSS_META_TITLE}
    metaDescription={OSS_META_DESC}
    parentCrumb={{ label: 'Products', href: '/products' }}
    getStartedInquiryParam="general"
  />
);

export default OSSASaaPs;
