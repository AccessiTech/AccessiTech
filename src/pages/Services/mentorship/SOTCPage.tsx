import ProductPage from '../../../components/ProductPage/ProductPage';
import { SOTC_HEADER, SOTC_DESC } from '../../../components/Services/Services';

export const SOTC_WHY =
  "Collective expertise in accessible systems design doesn't exist in a vacuum — it requires spaces where Disabled Designers and Developers can share knowledge, review each other's work, and set community standards together. SOTC is that space: not a conference, not a course, but an ongoing collaborative practice.";
export const SOTC_INCLUDED = [
  'Open community for Disabled Designers and Developers (DDDs)',
  'Knowledge sharing and peer review of open-source contributions',
  'Focus on accessible systems design best practices',
  'Free to participate — open to all',
  'Coming soon — interest list open now',
];
export const SOTC_HOW =
  "SOTC is in active development. Sign up to be notified when it launches and to share what you'd most want from the community.";
export const SOTC_RELATED =
  'Interested in accessible systems design now? Our ASaaPs consulting service and CCCs course library are both available while SOTC is in development.';
export const SOTC_CTA_LABEL = 'Join the Interest List';
export const SOTC_META_TITLE = 'State of the Code (SOTC) | AccessiTech';
export const SOTC_META_DESC =
  'SOTC: a coming-soon community for Disabled Designers and Developers sharing knowledge and building collective expertise in accessible systems design. Free and open.';

const SOTCPage = () => (
  <ProductPage
    title={SOTC_HEADER}
    overview={SOTC_DESC}
    whyItExists={SOTC_WHY}
    included={SOTC_INCLUDED}
    howToUse={SOTC_HOW}
    relatedServices={SOTC_RELATED}
    ctaLabel={SOTC_CTA_LABEL}
    ctaHref="/contact?inquiry=sotc"
    pathname="services/mentorship/sotc"
    metaTitle={SOTC_META_TITLE}
    metaDescription={SOTC_META_DESC}
    parentCrumb={{ label: 'Mentorship', href: '/services/mentorship' }}
    getStartedInquiryParam="mentorship"
  />
);

export default SOTCPage;
