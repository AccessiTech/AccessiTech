import ProductPage from '../../components/ProductPage/ProductPage';

const CCCs = () => (
  <ProductPage
    title="Curriculum & Content Creation (CCCs)"
    overview="A curriculum design and content creation service that builds accessible learning materials for organizations, teams, and educators — from scratch or as a retrofit. CCCs delivers structured, disability-forward content that meets your learners where they are."
    whyItExists="Most educational content is built without disabled learners in mind. CCCs exist to fix that at the source — designing accessible curriculum and materials from the ground up so organizations and teams can teach and train without leaving people out."
    included={[
      'Accessible curriculum design for organizations, teams, and educators',
      'Content creation for courses, workshops, and training programs',
      'Accessibility audits of existing educational materials',
      'Implementation guidance and delivery support',
    ]}
    howToUse="CCCs is a project-based service. Bring us a learning goal — we design the accessible content to meet it. Contact us to scope your project and get a quote."
    relatedServices="Want to train your team on accessibility itself? Our WCAG Series offers free foundational content. Consulting offers structured accessibility training and audit engagements."
    ctaLabel="Start a Project"
    ctaHref="/contact"
    pathname="products/cccs"
    metaTitle="Curriculum & Content Creation (CCCs) | AccessiTech"
    metaDescription="Accessible curriculum design and content creation services for organizations, teams, and educators — from AccessiTech."
  />
);

export default CCCs;
