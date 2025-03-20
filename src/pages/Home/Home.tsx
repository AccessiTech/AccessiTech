import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SplashSocials from '../../components/SplashSocials/SplashSocials';
import { SPLASH_BG } from '../../settings/strings';
import Services from '../../components/Services/Services';
import './Home.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const splashRowStyle = {
  backgroundImage: SPLASH_BG,
};

export const APP_ROOT = "App Root";
export const SKIP_TO_MAIN_CONTENT = "Skip to main content";
export const ABOUT_ACCESSITECH = "About AccessiTech";
export const TAGLINE = "Accessibility for Design Technologists";
export const VISION_P3 = "AccessiTech LLC is a social enterprise that aims to eliminate barriers for disabled design technologists and promote emergent technologies that improve accessibility, inclusion, and equity for all.";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    {/* Splash Row */}
    <Row
      className="splash-row"
      style={splashRowStyle}
    >
      <Col>
        {/* <Header /> */}
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
          <Button
            href="/blog"
            variant="primary"
            onClick={(e:any) => {
              e.preventDefault();
              navigate('/blog')
            }}
          >Check out the AccessiTech Blog to Learn More</Button>
        </Col>
      </Row>

      <Services />

    </main>
  </>
);
}

export default Home;
