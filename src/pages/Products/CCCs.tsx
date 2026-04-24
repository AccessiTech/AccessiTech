import ProductPage from '../../components/ProductPage/ProductPage';

export const CCCS_PRODUCTS_OVERVIEW =
  'A curriculum design and content creation service that builds accessible learning materials for organizations, teams, and educators — from scratch or as a retrofit. CCCs delivers structured, disability-forward content that meets your learners where they are.';
export const CCCS_PRODUCTS_WHY =
  'Most educational content is built without disabled learners in mind. CCCs exist to fix that at the source — designing accessible curriculum and materials from the ground up so organizations and teams can teach and train without leaving people out.';
export const CCCS_PRODUCTS_INCLUDED = [
  'Accessible curriculum design for organizations, teams, and educators',
  'Content creation for courses, workshops, and training programs',
  'Accessibility audits of existing educational materials',
  'Implementation guidance and delivery support',
];
export const CCCS_PRODUCTS_HOW =
  'CCCs is a project-based service. Bring us a learning goal — we design the accessible content to meet it. Contact us to scope your project and get a quote.';
export const CCCS_PRODUCTS_RELATED =
  'Want to train your team on accessibility itself? Our WCAG Series offers free foundational content. Consulting offers structured accessibility training and audit engagements.';
export const CCCS_PRODUCTS_CTA_LABEL = 'Start a Project';
export const CCCS_PRODUCTS_META_TITLE = 'Curriculum & Content Creation (CCCs) | AccessiTech';
export const CCCS_PRODUCTS_META_DESC =
  'Accessible curriculum design and content creation services for organizations, teams, and educators — from AccessiTech.';

const CCCs = () => (
  <ProductPage
    title="Curriculum & Content Creation (CCCs)"
    overview={CCCS_PRODUCTS_OVERVIEW}
    whyItExists={CCCS_PRODUCTS_WHY}
    included={CCCS_PRODUCTS_INCLUDED}
    howToUse={CCCS_PRODUCTS_HOW}
    relatedServices={CCCS_PRODUCTS_RELATED}
    ctaLabel={CCCS_PRODUCTS_CTA_LABEL}
    ctaHref="/contact"
    pathname="products/cccs"
    metaTitle={CCCS_PRODUCTS_META_TITLE}
    metaDescription={CCCS_PRODUCTS_META_DESC}
    parentCrumb={{ label: 'Products', href: '/products' }}
    getStartedInquiryParam="general"
  />
);

export default CCCs;
