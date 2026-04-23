import ProductPage from '../../../components/ProductPage/ProductPage';
import { COACHING_HEADER, COACHING_DESC } from '../../../components/Services/Services';

export const COACHING_WHY =
  "Most accessibility training is generic — a one-day compliance workshop that doesn't survive contact with a real sprint cycle. AccessiTech's coaching and workshops are practice-based: we work with how your team actually builds, and embed accessibility into the process rather than bolting it on at the end.";
export const COACHING_INCLUDED = [
  'Personalised 1:1 mentorship for career-switchers entering accessible tech',
  'Half-day and multi-day corporate workshops (recorded, captioned)',
  'Workshop: Embedding accessibility into Agile sprints',
  'Workshop: Screen reader testing for QA teams',
  'Workshop: Disability justice principles for design leads',
  'Workshop: AI governance for product managers',
  'Follow-up resources and Q&A access after each session',
];
export const COACHING_HOW =
  '1:1 coaching is available on a rolling basis — contact us to discuss goals and scheduling. Corporate workshops are booked in advance and scoped to your team size and context. All sessions are recorded with closed captions included.';
export const COACHING_RELATED =
  'Looking to supplement coaching with structured learning? CCCs provide self-paced accessibility content that pairs well with coaching engagements. For enterprise-scale accessibility embedding, see our Consulting services.';
export const COACHING_CTA_LABEL = 'Schedule a Coaching Conversation';
export const COACHING_META_TITLE = '1:1 Coaching & Corporate Workshops | AccessiTech Mentorship';
export const COACHING_META_DESC =
  'Personalised accessibility coaching for career-switchers and corporate workshops for teams embedding inclusive design into their practice — recorded, captioned, practice-based.';

const CoachingPage = () => (
  <ProductPage
    title={COACHING_HEADER}
    overview={COACHING_DESC}
    whyItExists={COACHING_WHY}
    included={COACHING_INCLUDED}
    howToUse={COACHING_HOW}
    relatedServices={COACHING_RELATED}
    ctaLabel={COACHING_CTA_LABEL}
    ctaHref="/contact?inquiry=mentorship"
    pathname="services/mentorship/coaching"
    metaTitle={COACHING_META_TITLE}
    metaDescription={COACHING_META_DESC}
    parentCrumb={{ label: 'Mentorship', href: '/services/mentorship' }}
    getStartedInquiryParam="mentorship"
  />
);

export default CoachingPage;
