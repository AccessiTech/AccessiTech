import ProductPage from '../../components/ProductPage/ProductPage';

const OSSASaaPs = () => (
  <ProductPage
    title="Open Source Software & ASaaPs"
    overview="Accessibility-first open-source tools and ASaaP (Accessibility Software as a Practice) frameworks. ASaaP is a methodology that embeds accessibility as an ongoing practice throughout software development — not a one-time audit, not a compliance checklist. The methodology is free; implementation support is a paid engagement."
    whyItExists="Following the Red Hat model: free methodology empowers communities; paid support sustains the mission. ASaaP reframes accessibility from a compliance event into a continuous, embedded practice — built by disabled technologists, for teams that want to build it right from the start."
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
    metaDescription="Open-source accessibility tools and ASaaP (Accessibility Software as a Practice) frameworks from AccessiTech. Free methodology, paid implementation support."
  />
);

export default OSSASaaPs;
