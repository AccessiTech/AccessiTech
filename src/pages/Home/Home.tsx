import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SplashSocials from '../../components/SplashSocials/SplashSocials';
import { SPLASH_BG } from '../../settings/strings';
import Services from '../../components/Services/Services';
import './Home.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HomeHeaderRow } from '../../components/Header/Header';
import Metadata from '../../components/Metadata/Metadata';
import metadata from '../../App/meta';
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton';

const splashRowStyle = {
  backgroundImage: SPLASH_BG,
};

export const APP_ROOT = 'App Root';
export const SKIP_TO_MAIN_CONTENT = 'Skip to main content';
export const ABOUT_ACCESSITECH = 'About AccessiTech';

// Tagline
export const TAGLINE =
  'Built disabled, not despite it — accessible consulting and development, from websites to AI systems';

// WHO
export const WHO_HEADER = 'Who we are';
export const WHO_P1 =
  'AccessiTech LLC is a social enterprise founded by a disabled design technologist with 18+ years of lived experience.';

// WHY
export const WHY_HEADER = 'Why we exist';
export const WHY_P1 =
  'We close the accessibility accountability gap by building consulting, mentorship, and product services that are accessible by design — not retrofitted as an afterthought.';

// Backwards-compat export (used in existing tests)
export const VISION_P3 = `${WHO_P1} ${WHY_P1}`;

// PRODUCTS
export const PRODUCTS_HEADER = 'Products';
export const WCAG_SERIES_TITLE = 'WCAG Series';
export const WCAG_SERIES_DESC =
  'Free, accessible educational guides to the Web Content Accessibility Guidelines — one principle at a time.';
export const OSS_TITLE = 'Open Source Software & ASaaPs';
export const OSS_DESC =
  'Free accessibility tools and ASaaP (Accessibility Software as a Practice) frameworks — methodology open to all, implementation support available.';
export const CCCS_TITLE = 'Curriculum & Content Creation';
export const CCCS_DESC =
  'Accessible curriculum and training materials designed from the ground up for organizations, teams, and educators.';

// WORK WITH US
export const WORK_WITH_US_HEADER = 'Work with us';
export const WORK_WITH_US_P1 =
  'Consulting, mentorship, and product services — built accessible from day one.';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <HomeHeaderRow />

      {/* Tagline */}
      <Row className="splash-row" style={splashRowStyle}>
        <Col>
          <Metadata {...metadata} />
          <h2>{TAGLINE}</h2>
          <SplashSocials />
        </Col>
      </Row>

      <main id="main" aria-label={ABOUT_ACCESSITECH}>
        {/* WHO */}
        <Row className="who-row">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <h3>{WHO_HEADER}</h3>
            <p>{WHO_P1}</p>
          </Col>
        </Row>

        {/* WHY */}
        <Row className="why-row">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <h3>{WHY_HEADER}</h3>
            <p>{WHY_P1}</p>
          </Col>
        </Row>

        {/* WHAT */}
        <Services />

        {/* PRODUCTS */}
        <Row className="products-row">
          <Col xs={12} md={{ span: 10, offset: 1 }}>
            <h3>{PRODUCTS_HEADER}</h3>
          </Col>
          <Col xs={12} md={{ span: 3, offset: 1 }} className="product-card">
            <h4>{WCAG_SERIES_TITLE}</h4>
            <p>{WCAG_SERIES_DESC}</p>
            <Button
              data-testid="product-card-btn-wcag"
              variant="outline-primary"
              onClick={() => navigate('/products/wcag-series')}
            >
              Learn more
            </Button>
          </Col>
          <Col xs={12} md={{ span: 3 }} className="product-card mt-5 mt-md-0">
            <h4>{OSS_TITLE}</h4>
            <p>{OSS_DESC}</p>
            <Button
              data-testid="product-card-btn-oss"
              variant="outline-primary"
              onClick={() => navigate('/products/oss-asaaps')}
            >
              Learn more
            </Button>
          </Col>
          <Col xs={12} md={{ span: 3 }} className="product-card mt-5 mt-md-0">
            <h4>{CCCS_TITLE}</h4>
            <p>{CCCS_DESC}</p>
            <Button
              data-testid="product-card-btn-cccs"
              variant="outline-primary"
              onClick={() => navigate('/products/cccs')}
            >
              Learn more
            </Button>
          </Col>
        </Row>

        {/* WORK WITH US */}
        <Row className="work-with-us-row">
          <Col xs={12} md={{ span: 8, offset: 2 }} className="text-center">
            <h3>{WORK_WITH_US_HEADER}</h3>
            <p>{WORK_WITH_US_P1}</p>
            <CalendlyButton label="Schedule a Free Discovery Call" />
            <Button
              variant="primary"
              size="lg"
              className="mt-3"
              href="/contact"
              onClick={(e: any) => {
                e.preventDefault();
                navigate('/contact');
              }}
            >
              Get in Touch
            </Button>
          </Col>
        </Row>
      </main>
    </>
  );
};

export default Home;
