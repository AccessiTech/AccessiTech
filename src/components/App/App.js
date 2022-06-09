import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SpalshSocials from '../SplashSocials/SplashSocials';
import { ABOUT_ACCESSITECH, APP_ROOT, PURPOSE_HEADER, PURPOSE_P1, PURPOSE_P2, PURPOSE_P3, PURPOSE_P4, PURPOSE_PIC_ALT, SPLASH_BG, TAGLINE, VISION_P1, VISION_P2 } from '../../settings/strings';
import { PURPOSE_PIC_URL } from '../../settings/settings';
import './App.scss';
import { getT } from '../../i18n';

function App() {
  const splashRowStyle = {
    backgroundImage: SPLASH_BG,
  };

  return (
    <Container fluid className="App" aria-label={getT(APP_ROOT)}>

      {/* Splash Row */}
      <Row
        className="splash-row"
        style={splashRowStyle}
      >
        <Col>
          <Header />
          <h2>{getT(TAGLINE)}</h2>
          <SpalshSocials />
        </Col>
      </Row>

      {/* Main Rows */}
      <main aria-label={getT(ABOUT_ACCESSITECH)}>
        <Row className="about-row">
          <Col xs={12} md={{span: 8, offset: 2}}>
            <blockquote title="Vision">
              <p>{getT(VISION_P1)}</p>
              <p>{getT(VISION_P2)}</p>
            </blockquote>
          </Col>
        </Row>
        <Row className="purpose-row">
          <Col className="purpose-text" xs={12} md={{span: 4, offset: 2}}>
            <article title="Purpose">
              <h3>{getT(PURPOSE_HEADER)}</h3>
              <p>{getT(PURPOSE_P1)}</p>
              <p>{getT(PURPOSE_P2)}</p>
              <p>{getT(PURPOSE_P3)}</p>
              <p>{getT(PURPOSE_P4)}</p>
            </article>
          </Col>
          <Col className="purpose-image" xs={12} md={{span: 5}} title="image">
            <img
              src={PURPOSE_PIC_URL}
              className="purpose-picture"
              alt={getT(PURPOSE_PIC_ALT)}
              title={getT(PURPOSE_PIC_ALT)}
            />
          </Col>
        </Row>
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

export default App;
