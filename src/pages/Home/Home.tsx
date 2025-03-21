import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SplashSocials from '../../components/SplashSocials/SplashSocials';
import { SPLASH_BG } from '../../settings/strings';
import Services from '../../components/Services/Services';
import './Home.scss';

const splashRowStyle = {
  backgroundImage: SPLASH_BG,
};

export const APP_ROOT = "App Root";
export const SKIP_TO_MAIN_CONTENT = "Skip to main content";
export const ABOUT_ACCESSITECH = "About AccessiTech";
export const TAGLINE = "Accessibility for Design Technologists";
export const VISION_P3 = "AccessiTech LLC is a social enterprise that aims to eliminate barriers for disabled design technologists and promote emergent technologies that improve accessibility, inclusion, and equity for all.";

export const Home = () => {

  return (
  <Container fluid className="App" aria-label={(APP_ROOT)}>
    <a className="skip-link" href="#main">{(SKIP_TO_MAIN_CONTENT)}</a>
    {/* Splash Row */}
    <Row
      className="splash-row"
      style={splashRowStyle}
    >
      <Col>
        <Header />
        <h2>{(TAGLINE)}</h2>
        <SplashSocials />
      </Col>
    </Row>

    {/* Main Rows */}
    <main id='main' aria-label={(ABOUT_ACCESSITECH)}>

      <Row className="about-row">
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          <blockquote>
            <p>{(VISION_P3)}</p>
          </blockquote>
        </Col>
      </Row>

      <Services />

    </main>
    

    {/* Footer Row */}
    <Row className="footer-row">
      <Col>
        <Footer />
      </Col>
    </Row>
  </Container>
);
}

export default Home;
