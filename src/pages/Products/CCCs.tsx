import ProductPage from '../../components/ProductPage/ProductPage';

const CCCs = () => (
  <ProductPage
    title="Continued Competency Credits (CCCs)"
    overview="Accessible, community-led learning for design technologists building disability-forward careers — free foundational content, structured coaching available."
    whyItExists="Removing barriers to career development for disabled design technologists. CCCs are built to meet learners where they are — not to gatekeep expertise."
    included={[
      'Free WCAG 2.2 foundational modules',
      'Web accessibility best practices (freemium)',
      'VVD cohort content (coming soon — freemium)',
      '1:1 coaching and mentorship (paid)',
    ]}
    howToUse="Foundational CCC content is free. Structured cohort programs and 1:1 coaching are available as paid offerings. Start for free, level up on your terms."
    relatedServices="Looking for structured mentorship or career coaching? Our Mentorship service offers 1:1 sessions and cohort programs designed for disabled technologists."
    ctaLabel="Start for Free"
    ctaHref="/wcag"
    pathname="products/cccs"
    metaTitle="CCCs | AccessiTech"
    metaDescription="Continued Competency Credits — accessible learning and mentorship for disabled design technologists."
  />
);

export default CCCs;
