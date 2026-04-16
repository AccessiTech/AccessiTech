import ProductPage from '../../components/ProductPage/ProductPage';
import {
  MENTORSHIP_HEADER,
  MENTORSHIP_INTRO,
  CCCS_HEADER,
  COACHING_HEADER,
  OPENCLASSROOMS_HEADER,
  SOTC_HEADER,
  MENTORSHIP_CTA,
} from '../../components/Services/Services';

const MentorshipPage = () => (
  <ProductPage
    title={MENTORSHIP_HEADER}
    overview={MENTORSHIP_INTRO}
    whyItExists="Accessibility education shouldn't require a budget. AccessiTech's tiered mentorship model keeps foundational learning free and open, while paid programs fund the infrastructure that makes that possible."
    included={[CCCS_HEADER, COACHING_HEADER, OPENCLASSROOMS_HEADER, SOTC_HEADER]}
    howToUse="WCAG Series content and SOTC are free with no account required. 1:1 coaching and corporate workshops are paid engagements — contact us to scope a program."
    relatedServices="Need to apply what you've learned? Our Consulting team works directly with engineering and product teams on accessible system design and AI governance."
    ctaLabel={MENTORSHIP_CTA}
    ctaHref="/contact?inquiry=mentorship"
    pathname="services/mentorship"
    metaTitle="Mentorship | AccessiTech"
    metaDescription="AccessiTech Mentorship: courses, 1:1 coaching, and corporate workshops for teams and individuals building accessibility into their practice."
  />
);

export default MentorshipPage;
