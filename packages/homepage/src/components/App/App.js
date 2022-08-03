import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SpalshSocials from '../SplashSocials/SplashSocials';
import { ABOUT_ACCESSITECH, APP_ROOT,  SPLASH_BG, TAGLINE } from '../../settings/strings';
import './App.scss';
import store from '../../store/store';
import { getBrowserLanguage, getT, initTranslations, setLang } from '@accessitech/i18n';
import { useParams } from 'react-router-dom';
import About from '../About/About';
import translations from '../../settings/translations';

store.dispatch(initTranslations(translations))

const splashRowStyle = {
  backgroundImage: SPLASH_BG,
};

const App = () => {
  const defaultLang = getBrowserLanguage();
  const { lang } = useParams();

  useEffect(() => {
    store.dispatch(
      setLang((lang || defaultLang)));
  }, [lang, defaultLang]);

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
      <About />
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
