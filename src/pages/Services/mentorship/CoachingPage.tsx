import ProductPage from '../../../components/ProductPage/ProductPage';
import { COACHING_HEADER, COACHING_DESC } from '../../../components/Services/Services';

const CoachingPage = () => (
  <ProductPage
    title={COACHING_HEADER}
    overview={COACHING_DESC}
    whyItExists="Most accessibility training is generic — a one-day compliance workshop that doesn't survive contact with a real sprint cycle. AccessiTech's coaching and workshops are practice-based: we work with how your team actually builds, and embed accessibility into the process rather than bolting it on at the end."
    included={[
      'Personalised 1:1 mentorship for career-switchers entering accessible tech',
      'Half-day and multi-day corporate workshops (recorded, captioned)',
      'Workshop: Embedding accessibility into Agile sprints',
      'Workshop: Screen reader testing for QA teams',
      'Workshop: Disability justice principles for design leads',
      'Workshop: AI governance for product managers',
      'Follow-up resources and Q&A access after each session',
    ]}
    howToUse="1:1 coaching is available on a rolling basis — contact us to discuss goals and scheduling. Corporate workshops are booked in advance and scoped to your team size and context. All sessions are recorded with closed captions included."
    relatedServices="Looking to supplement coaching with structured learning? CCCs provide self-paced accessibility content that pairs well with coaching engagements. For enterprise-scale accessibility embedding, see our Consulting services."
    ctaLabel="Schedule a Coaching Conversation"
    ctaHref="/contact?inquiry=mentorship"
    pathname="services/mentorship/coaching"
    metaTitle="1:1 Coaching & Corporate Workshops | AccessiTech Mentorship"
    metaDescription="Personalised accessibility coaching for career-switchers and corporate workshops for teams embedding inclusive design into their practice — recorded, captioned, practice-based."
    parentCrumb={{ label: 'Mentorship', href: '/services/mentorship' }}
    getStartedInquiryParam="mentorship"
  />
);

export default CoachingPage;
