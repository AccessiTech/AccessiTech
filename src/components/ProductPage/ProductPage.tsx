import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import Metadata from '../Metadata/Metadata';
import GetStartedSection from '../GetStartedSection/GetStartedSection';
import { HOME_URL } from '../../settings/strings';
import './ProductPage.scss';

export interface ProductPageExample {
  project: string;
  description: string;
}

export interface ProductPageProps {
  title: string;
  overview: string;
  whyItExists: string;
  included: string[];
  examples?: ProductPageExample[];
  howToUse: string;
  relatedServices: string;
  ctaLabel: string;
  ctaHref: string;
  pathname: string;
  metaTitle: string;
  metaDescription: string;
  parentCrumb?: { label: string; href: string };
  getStartedLeftParagraph?: string;
  getStartedRightParagraph?: string;
  getStartedLeftButtonLabel?: string;
  getStartedRightButtonLabel?: string;
}

const ProductPage = ({
  title,
  overview,
  whyItExists,
  included,
  examples,
  howToUse,
  pathname,
  metaTitle,
  metaDescription,
  parentCrumb,
  getStartedLeftParagraph,
  getStartedRightParagraph,
  getStartedLeftButtonLabel,
  getStartedRightButtonLabel,
}: ProductPageProps) => {
  const navigate = useNavigate();
  const canonical = `${HOME_URL}/${pathname}`;

  return (
    <>
      <Row className="breadcrumb-row product-page">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata
            title={metaTitle}
            description={metaDescription}
            canonical={canonical}
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
            {parentCrumb && (
              <Breadcrumb.Item
                href={parentCrumb.href}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  navigate(parentCrumb.href);
                }}
              >
                {parentCrumb.label}
              </Breadcrumb.Item>
            )}
            <Breadcrumb.Item active>{title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="content-row">
        <main id="main" aria-label={title} className="product-page">
          <Col>
            <Row>
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <section className="product-overview">
                  <h2>{title}</h2>
                  <p>{overview}</p>
                  <p>{whyItExists}</p>
                </section>
                <hr />
                <section className="product-included">
                  <h3>What&apos;s Included</h3>
                  <ul>
                    {included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
                {examples && examples.length > 0 && (
                  <>
                    <hr />
                    <section className="product-examples">
                      <h3>Past Work</h3>
                      {examples.map((item, i) => (
                        <div key={i} className="product-example">
                          <h4>{item.project}</h4>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </section>
                  </>
                )}
                <hr />
                <section className="product-access">
                  <h3>Access &amp; Pricing</h3>
                  <p>{howToUse}</p>
                </section>
              </Col>
            </Row>
            <Row className="getStartedRow">
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <GetStartedSection
                  page={pathname.split('/').pop() || 'product'}
                  leftParagraph={getStartedLeftParagraph}
                  rightParagraph={getStartedRightParagraph}
                  leftButtonLabel={getStartedLeftButtonLabel}
                  rightButtonLabel={getStartedRightButtonLabel}
                />
              </Col>
            </Row>
          </Col>
        </main>
      </Row>
    </>
  );
};

export default ProductPage;
