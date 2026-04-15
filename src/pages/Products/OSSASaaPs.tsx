import ProductPage from '../../components/ProductPage/ProductPage';

const OSSASaaPs = () => (
  <ProductPage
    title="Open Source Software & ASaaPs"
    overview="Accessibility-first open-source tools and Accessibility Software as a Practice (ASaaP) frameworks — free methodology, paid implementation support."
    whyItExists="Following the Red Hat model: free methodology empowers communities; paid support sustains the mission. Built disabled, not despite it."
    included={[
      'EndogenAI Workflows methodology (open source, GitHub)',
      'AccessiTech plugin contributions',
      'ASaaP implementation frameworks',
      'AI governance patterns for accessible agentic systems',
    ]}
    howToUse="All OSS/ASaaP methodology is free on GitHub. Implementation support — integrating these frameworks into your product or org — is a Consulting engagement."
    relatedServices="Need help implementing an ASaaP framework? Our Consulting team works with engineering teams on accessibility governance, QA, and agentic AI systems."
    ctaLabel="Explore on GitHub"
    ctaHref="https://github.com/AccessiTech"
    pathname="products/oss-asaaps"
    metaTitle="OSS & ASaaPs | AccessiTech"
    metaDescription="Open-source accessibility tools and ASaaP frameworks from AccessiTech."
  />
);

export default OSSASaaPs;
