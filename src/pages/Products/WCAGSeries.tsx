import ProductPage from '../../components/ProductPage/ProductPage';

const WCAGSeries = () => (
  <ProductPage
    title="WCAG Series"
    overview="Free, accessible educational guides to the Web Content Accessibility Guidelines — one principle at a time."
    whyItExists="Operationalizing 'nothing about us without us' through accessible education. WCAG Series makes compliance understandable without gatekeeping."
    included={[
      'WCAG 2.2 AA compliance checklists',
      'Accessible design pattern guides',
      'Screen reader testing guides',
      'Free — hosted on accessitech.io and GitHub',
    ]}
    howToUse="All WCAG Series content is free. Read online, download as PDFs, or fork on GitHub. No account required."
    relatedServices="Working through WCAG for a specific project? Our Consulting team offers accessibility audits, QA testing, and ASaaP implementation."
    ctaLabel="Browse the WCAG Series"
    ctaHref="/wcag"
    pathname="products/wcag-series"
    metaTitle="WCAG Series | AccessiTech"
    metaDescription="Free WCAG 2.2 AA compliance checklists and accessible design pattern guides from AccessiTech."
  />
);

export default WCAGSeries;
