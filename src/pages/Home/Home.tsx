import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SplashSocials from "../../components/SplashSocials/SplashSocials";
import { SPLASH_BG } from "../../settings/strings";
import Services from "../../components/Services/Services";
import "./Home.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HomeHeaderRow } from "../../components/Header/Header";
import Metadata from "../../components/Metadata/Metadata";
import metadata from "../../App/meta";

const splashRowStyle = {
  backgroundImage: SPLASH_BG,
};

export const APP_ROOT = "App Root";
export const SKIP_TO_MAIN_CONTENT = "Skip to main content";
export const ABOUT_ACCESSITECH = "About AccessiTech";
export const TAGLINE = "Accessibility for Design Technologists";
export const VISION_P3 =
  "AccessiTech LLC is a social enterprise that aims to eliminate barriers for disabled design technologists and promote emergent technologies that improve digital accessibility, inclusion, and equity for all.";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <HomeHeaderRow />
      {/* Splash Row */}
      <Row className="splash-row" style={splashRowStyle}>
        <Col>
          <Metadata {...metadata} />
          {/* <Header /> */}
          <h2>{TAGLINE}</h2>
          <SplashSocials />
        </Col>
      </Row>

      {/* Main Rows */}
      <main id="main" aria-label={ABOUT_ACCESSITECH}>
        <Row className="cta-row">
          <Col xs={12} md={{ span: 5, offset: 1 }} className="blog-cta">
            <h3>Accessibility, done right.</h3>
            <p>
              Explore expert-written articles, tools, and tips to help you build
              better, more inclusive digital products.
            </p>
            <Button
              href="/blog"
              variant="primary"
              size="lg"
              onClick={(e: any) => {
                e.preventDefault();
                navigate("/blog");
              }}
            >
              Browse the Blog
            </Button>
          </Col>
          <Col xs={12} md={{ span: 5 }} className="wcag-cta mt-5 mt-md-0">
            <h3>WCAG, made simple.</h3>
            <p>
              Get clear, jargon-free explanations of the Web Content
              Accessibility Guidelines (WCAG) — one principle at a time.
            </p>
            <Button
              href="/wcag"
              variant="primary"
              size="lg"
              onClick={(e: any) => {
                e.preventDefault();
                navigate("/wcag");
              }}
            >
              Start the Series
            </Button>
          </Col>
        </Row>

        <Services />

        <Row className="about-row">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <blockquote>
              <p>{VISION_P3}</p>
            </blockquote>
          </Col>
        </Row>
      </main>
    </>
  );
};

export default Home;
