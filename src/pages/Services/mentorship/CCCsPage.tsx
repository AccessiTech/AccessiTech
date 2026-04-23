import ProductPage from '../../../components/ProductPage/ProductPage';
import { CCCS_HEADER, CCCS_DESC } from '../../../components/Services/Services';

export const CCCS_MENTORSHIP_WHY =
  "Accessibility education shouldn't require a budget. AccessiTech's course library keeps WCAG 2.2 content free as a community resource — because the baseline for inclusive design should be universally accessible, not gatekept behind a subscription.";
export const CCCS_MENTORSHIP_INCLUDED = [
  'WCAG 2.2 compliance content — completely free, no account required',
  'Web accessibility best practices — freemium self-paced modules',
  'Visual and video design using free and open-source tools — freemium',
  'Structured cohort options for team learning',
  'All content with closed captions and accessible formatting',
];
export const CCCS_MENTORSHIP_HOW =
  'WCAG Series content is free and publicly available at Accessi.Tech/wcag. Freemium content is available with a free account. Corporate cohort licensing is available — contact us to discuss options.';
export const CCCS_MENTORSHIP_RELATED =
  'Want hands-on support alongside the courses? 1:1 Coaching pairs well with CCCs for individuals navigating career transitions. Corporate teams can combine CCCs with a Workshop engagement for a blended learning program.';
export const CCCS_MENTORSHIP_CTA_LABEL = 'Explore Mentorship Options';
export const CCCS_MENTORSHIP_META_TITLE = 'Courses & Content (CCCs) | AccessiTech Mentorship';
export const CCCS_MENTORSHIP_META_DESC =
  "AccessiTech's course library covers WCAG 2.2 compliance, web accessibility best practices, and accessible design — free and freemium content for individuals and teams.";

const CCCsPage = () => (
  <ProductPage
    title={CCCS_HEADER}
    overview={CCCS_DESC}
    whyItExists={CCCS_MENTORSHIP_WHY}
    included={CCCS_MENTORSHIP_INCLUDED}
    howToUse={CCCS_MENTORSHIP_HOW}
    relatedServices={CCCS_MENTORSHIP_RELATED}
    ctaLabel={CCCS_MENTORSHIP_CTA_LABEL}
    ctaHref="/contact?inquiry=mentorship"
    pathname="services/mentorship/cccs"
    metaTitle={CCCS_MENTORSHIP_META_TITLE}
    metaDescription={CCCS_MENTORSHIP_META_DESC}
    parentCrumb={{ label: 'Mentorship', href: '/services/mentorship' }}
    getStartedInquiryParam="mentorship"
  />
);

export default CCCsPage;
