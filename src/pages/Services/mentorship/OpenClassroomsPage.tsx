import ProductPage from '../../../components/ProductPage/ProductPage';
import { OPENCLASSROOMS_HEADER, OPENCLASSROOMS_DESC } from '../../../components/Services/Services';

const OpenClassroomsPage = () => (
  <ProductPage
    title={OPENCLASSROOMS_HEADER}
    overview={OPENCLASSROOMS_DESC}
    whyItExists="Real mentorship looks like accountability to real-world standards, not just content delivery. The OpenClassrooms engagement shaped how AccessiTech Mentorship works today — grounding every learning relationship in practical project work, professional community expectations, and genuine career progression."
    included={[
      'Mentorship for career-switchers in web development, UX design, and project management',
      'Real-world project review and feedback cycles',
      'Accountability structure aligned to professional community standards',
      "Foundation for AccessiTech's current mentorship model and philosophy",
    ]}
    howToUse="The OpenClassrooms partnership ran through mid-2025 and is now closed to new students. AccessiTech's current mentorship offerings (CCCs, 1:1 Coaching, SOTC) carry forward the same philosophy — reach out to discuss the best fit for your goals."
    relatedServices="Looking for active mentorship? Our 1:1 Coaching program continues the individual-support model established here. CCCs provide self-paced learning for those working independently."
    ctaLabel="Explore Current Mentorship Offerings"
    ctaHref="/contact?inquiry=mentorship"
    pathname="services/mentorship/openclassrooms"
    metaTitle="OpenClassrooms Partnership | AccessiTech Mentorship"
    metaDescription="AccessiTech's OpenClassrooms mentorship for career-switchers — the operational precedent and values foundation for how we mentor today."
    parentCrumb={{ label: 'Mentorship', href: '/services/mentorship' }}
  />
);

export default OpenClassroomsPage;
