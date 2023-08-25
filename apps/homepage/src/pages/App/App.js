import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SplashSocials from '../../components/SplashSocials/SplashSocials';
import { ABOUT_ACCESSITECH, APP_ROOT,  SKIP_TO_MAIN_CONTENT,  SPLASH_BG, TAGLINE, VISION_P3 } from '../../settings/strings';
import './App.scss';
import store from '../../store/store';
import { getBrowserLanguage, useT, initTranslations, setLang } from '@accessitech/i18n-redux-toolkit';
import { useParams } from 'react-router-dom';
import Services from '../../components/Services/Services';
import translations from '../../settings/translations';

store.dispatch(initTranslations(translations))

const splashRowStyle = {
  backgroundImage: SPLASH_BG,
};

const App = () => {
  const { lang } = useParams();
  
  useEffect(() => {
    store.dispatch(
      setLang((lang || getBrowserLanguage(translations))));
  }, [lang]);

  return (
  <Container fluid className="App" aria-label={useT(APP_ROOT)}>
    <a className="skip-link" href="#main">{useT(SKIP_TO_MAIN_CONTENT)}</a>
    {/* Splash Row */}
    <Row
      className="splash-row"
      style={splashRowStyle}
    >
      <Col>
        <Header />
        <h2>{useT(TAGLINE)}</h2>
        <SplashSocials />
      </Col>
    </Row>

    {/* Main Rows */}
    <main id='main' aria-label={useT(ABOUT_ACCESSITECH)}>

      <Row className="about-row">
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          <blockquote>
            <p>{useT(VISION_P3)}</p>
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

export default App;
