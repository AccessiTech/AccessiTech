import ProductPage from '../../../components/ProductPage/ProductPage';
import { SOTC_HEADER, SOTC_DESC } from '../../../components/Services/Services';

const SOTCPage = () => (
  <ProductPage
    title={SOTC_HEADER}
    overview={SOTC_DESC}
    whyItExists="Collective expertise in accessible systems design doesn't exist in a vacuum — it requires spaces where Disabled Designers and Developers can share knowledge, review each other's work, and set community standards together. SOTC is that space: not a conference, not a course, but an ongoing collaborative practice."
    included={[
      'Open community for Disabled Designers and Developers (DDDs)',
      'Knowledge sharing and peer review of open-source contributions',
      'Focus on accessible systems design best practices',
      'Free to participate — open to all',
      'Coming soon — interest list open now',
    ]}
    howToUse="SOTC is in active development. Sign up to be notified when it launches and to share what you'd most want from the community."
    relatedServices="Interested in accessible systems design now? Our ASaaPs consulting service and CCCs course library are both available while SOTC is in development."
    ctaLabel="Join the Interest List"
    ctaHref="/contact?inquiry=sotc"
    pathname="services/mentorship/sotc"
    metaTitle="State of the Code (SOTC) | AccessiTech"
    metaDescription="SOTC: a coming-soon community for Disabled Designers and Developers sharing knowledge and building collective expertise in accessible systems design. Free and open."
    parentCrumb={{ label: 'Mentorship', href: '/services/mentorship' }}
    getStartedInquiryParam="mentorship"
  />
);

export default SOTCPage;
