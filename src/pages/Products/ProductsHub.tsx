import { Row, Col, Button } from 'react-bootstrap';
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
} from '../Home/Home';

const ProductsHub = () => {
  const navigate = useNavigate();
  return (
    <>
      <Metadata
        title="Products | AccessiTech"
        description="AccessiTech Products: the WCAG Series, Open Source Software & ASaaPs, and Curriculum & Content Creation — resources that make accessibility-first design operational."
        canonical={`${HOME_URL}/products`}
      />
      <main id="main" aria-label={PRODUCTS_HEADER}>
        <Row className="products-hub-header-row">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <h2>{PRODUCTS_HEADER}</h2>
            <p>{PRODUCTS_OVERVIEW_P1}</p>
          </Col>
        </Row>

        <Row className="products-row">
          <Col xs={12} md={{ span: 3, offset: 1 }} className="product-card">
            <h3>{WCAG_SERIES_TITLE}</h3>
            <p>{WCAG_SERIES_DESC}</p>
            <Button
              data-testid="hub-card-btn-wcag"
              variant="outline-primary"
              onClick={() => navigate('/products/wcag-series')}
            >
              Learn more
            </Button>
          </Col>
          <Col xs={12} md={{ span: 2 }} className="product-card mt-5 mt-md-0">
            <h3>{OSS_TITLE}</h3>
            <p>{OSS_DESC}</p>
            <Button
              data-testid="hub-card-btn-oss"
              variant="outline-primary"
              onClick={() => navigate('/products/oss-asaaps')}
            >
              Learn more
            </Button>
          </Col>
          <Col xs={12} md={{ span: 2 }} className="product-card mt-5 mt-md-0">
            <h3>{CCCS_TITLE}</h3>
            <p>{CCCS_DESC}</p>
            <Button
              data-testid="hub-card-btn-cccs"
              variant="outline-primary"
              onClick={() => navigate('/products/cccs')}
            >
              Learn more
            </Button>
          </Col>
        </Row>
      </main>
    </>
  );
};

export default ProductsHub;
