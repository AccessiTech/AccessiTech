import { Row, Col, Button, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Metadata from '../../components/Metadata/Metadata';
import { HOME_URL } from '../../settings/strings';
import {
  PRODUCTS_HEADER,
  PRODUCTS_OVERVIEW_P1,
  WCAG_SERIES_TITLE,
  WCAG_SERIES_DESC,
  OSS_TITLE,
  OSS_DESC,
  CCCS_TITLE,
  CCCS_DESC,
  BLOG_TITLE,
  BLOG_DESC,
} from '../Home/Home';
import GetStartedSection from '../../components/GetStartedSection/GetStartedSection';

export const PRODUCTS_META_TITLE = 'Products | AccessiTech';
export const PRODUCTS_META_DESC =
  'AccessiTech Products: the WCAG Series, Open Source Software & ASaaPs, and Curriculum & Content Creation — resources that make accessibility-first design operational.';

export const WCAG_SERIES_DELIVERABLES = [
  'Free WCAG 2.2 AA compliance guides',
  'Accessible design patterns and best practices',
  'No paywall — public good resource',
  'Community-driven updates and contributions',
];
export const OSS_DELIVERABLES = [
  'EndogenAI methodology (open source, MIT licensed)',
  'Case studies showing Red Hat model in action',
  'Free methodology, paid implementation support',
  'No vendor lock-in — audit and extend at will',
];
export const PRODUCTS_CCCS_DELIVERABLES = [
  'WCAG 2.2 compliance courses (free, no paywall)',
  'Web best practices and patterns (freemium)',
  'Visual and video design with open-source tools (freemium)',
  'Self-paced and cohort-based learning options',
];
export const BLOG_DELIVERABLES = [
  'Accessibility and WCAG deep dives',
  'AI governance and EndogenAI methodology updates',
  'Disability justice and founder reflections',
  'Case studies and implementation stories',
];

const PRODUCTS_AREAS = [
  {
    id: 'wcag-series',
    title: WCAG_SERIES_TITLE,
    description: WCAG_SERIES_DESC,
    deliverables: WCAG_SERIES_DELIVERABLES,
    href: '/products/wcag-series',
    contactHref: '/contact?inquiry=products',
  },
  {
    id: 'oss-asaaps',
    title: OSS_TITLE,
    description: OSS_DESC,
    deliverables: OSS_DELIVERABLES,
    href: '/products/oss-asaaps',
    contactHref: '/contact?inquiry=products',
  },
  {
    id: 'cccs',
    title: CCCS_TITLE,
    description: CCCS_DESC,
    deliverables: PRODUCTS_CCCS_DELIVERABLES,
    href: '/products/cccs',
    contactHref: '/contact?inquiry=products',
  },
  {
    id: 'blog',
    title: BLOG_TITLE,
    description: BLOG_DESC,
    deliverables: BLOG_DELIVERABLES,
    href: '/blog',
    contactHref: '/contact?inquiry=products',
  },
];

const ProductsHub = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="breadcrumb-row product-page">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata
            title={PRODUCTS_META_TITLE}
            description={PRODUCTS_META_DESC}
            canonical={`${HOME_URL}/products`}
            siteName="AccessiTech"
            twitterCreator="@accessiT3ch"
          />
          <Breadcrumb className="breadcrumb-container">
            <Breadcrumb.Item
              href="/"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{PRODUCTS_HEADER}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row className="content-row">
        <main
          id="main"
          aria-label={PRODUCTS_HEADER}
          className="product-page"
          data-testid="products-hub"
        >
          <Col>
            <Row>
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <section className="product-overview">
                  <h2>{PRODUCTS_HEADER}</h2>
                  <p>{PRODUCTS_OVERVIEW_P1}</p>

                  <Row>
                    {PRODUCTS_AREAS.map(product => (
                      <Col
                        key={product.id}
                        xs={12}
                        lg={6}
                        className="product-service-card"
                        data-testid={`products-card-${product.id}`}
                      >
                        <div className="service-card-inner">
                          <div>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <ul>
                              {product.deliverables.map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                          </div>
                          <Button
                            variant="outline-primary"
                            className="mt-3 w-100 learn-more-btn"
                            onClick={() => navigate(product.href)}
                            data-testid={`products-card-${product.id}-learn-more-btn`}
                          >
                            Learn More
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </section>
              </Col>
            </Row>
            <Row className="getStartedRow">
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <GetStartedSection page="products" />
              </Col>
            </Row>
          </Col>
        </main>
      </Row>
    </>
  );
};

export default ProductsHub;
