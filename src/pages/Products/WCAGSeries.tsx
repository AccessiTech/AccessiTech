import ProductPage from '../../components/ProductPage/ProductPage';

const WCAGSeries = () => (
  <ProductPage
    title="WCAG Series"
    overview="Free, accessible educational guides to the Web Content Accessibility Guidelines — one principle at a time. These guides are written in plain language so developers, designers, and product teams can understand WCAG without a legal background."
    whyItExists="Operationalizing 'nothing about us without us' through accessible education. Accessibility standards should not be locked behind paywalls or dense legal text. WCAG Series makes compliance understandable and approachable for everyone building digital products. All content is written and reviewed by people with direct experience of disability."
    included={[
      'WCAG 2.2 AA compliance checklists',
      'Accessible design pattern guides',
      'Screen reader testing guides',
      'Free — hosted on Accessi.Tech and GitHub',
    ]}
    howToUse="All WCAG Series content is free. Read it online, download as PDFs, or fork on GitHub. No account is required. Each guide covers one WCAG principle or success criterion. You can learn at your own pace or jump to what you need."
    relatedServices="Working through WCAG for a specific project? Our Consulting team offers accessibility audits, QA testing, and ASaaP implementation."
    ctaLabel="Browse the WCAG Series"
    ctaHref="/wcag"
    pathname="products/wcag-series"
    metaTitle="WCAG Series | AccessiTech"
    metaDescription="Free WCAG 2.2 AA compliance checklists and accessible design pattern guides from AccessiTech."
    parentCrumb={{ label: 'Products', href: '/products' }}
  />
);

export default WCAGSeries;
