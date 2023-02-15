import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SplashSocials from '../SplashSocials/SplashSocials';
import { ABOUT_ACCESSITECH, APP_ROOT,  SPLASH_BG, TAGLINE } from '../../settings/strings';
import './App.scss';
import store from '../../store/store';
import { getBrowserLanguage, useT, initTranslations, setLang } from '@accessitech/i18n-redux-toolkit';
import { useParams } from 'react-router-dom';
import About from '../About/About';
import Services from '../Services/Services';
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
    <main aria-label={useT(ABOUT_ACCESSITECH)}>
      <About />
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
