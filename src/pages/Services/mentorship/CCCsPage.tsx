import ProductPage from '../../../components/ProductPage/ProductPage';
import { CCCS_HEADER, CCCS_DESC } from '../../../components/Services/Services';

const CCCsPage = () => (
  <ProductPage
    title={CCCS_HEADER}
    overview={CCCS_DESC}
    whyItExists="Accessibility education shouldn't require a budget. AccessiTech's course library keeps WCAG 2.2 content free as a community resource — because the baseline for inclusive design should be universally accessible, not gatekept behind a subscription."
    included={[
      'WCAG 2.2 compliance content — completely free, no account required',
      'Web accessibility best practices — freemium self-paced modules',
      'Visual and video design using free and open-source tools — freemium',
      'Structured cohort options for team learning',
      'All content with closed captions and accessible formatting',
    ]}
    howToUse="WCAG Series content is free and publicly available at Accessi.Tech/wcag. Freemium content is available with a free account. Corporate cohort licensing is available — contact us to discuss options."
    relatedServices="Want hands-on support alongside the courses? 1:1 Coaching pairs well with CCCs for individuals navigating career transitions. Corporate teams can combine CCCs with a Workshop engagement for a blended learning program."
    ctaLabel="Explore Mentorship Options"
    ctaHref="/contact?inquiry=mentorship"
    pathname="services/mentorship/cccs"
    metaTitle="Courses & Content (CCCs) | AccessiTech Mentorship"
    metaDescription="AccessiTech's course library covers WCAG 2.2 compliance, web accessibility best practices, and accessible design — free and freemium content for individuals and teams."
    parentCrumb={{ label: 'Mentorship', href: '/services/mentorship' }}
    getStartedInquiryParam="mentorship"
  />
);

export default CCCsPage;
