import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SpalshSocials from '../SplashSocials/SplashSocials';
import { SPLASH_BG, TAGLINE } from '../../settings/strings';
import { PURPOSE_PIC_URL } from '../../settings/settings';
import './App.scss';

function App() {
  const splashRowStyle = {
    backgroundImage: SPLASH_BG  ,
  };

  return (
    <main className="App">
      <Container fluid>
        <Row
          className="splash-row"
          style={splashRowStyle}
        >
          <Col>
            <Header />
            <h2>{TAGLINE}</h2>
            <SpalshSocials />
          </Col>
        </Row>
        <Row className="about-row">
          <Col xs={12} md={{span: 8, offset: 2}}>
            <p>AccessiTech LLC is a social enterprise dedicated to removing barriers for disabled design technologists by producing and sharing relevant industry expertise and personal / professional exploration via content across multiple social, hosting, and streaming platforms.</p>
            <p>As a social enterprise, AccessiTech LLC fosters positive social change by promoting and collaborating on emergent technologies aimed at increasing accessibility, inclusion, and equity for all.</p>
          </Col>
        </Row>
        <Row className="purpose-row">
          <Col className="purpose-text" xs={12} md={{span: 4, offset: 2}}>
            <h3>Purpose</h3>
            <p>AccessiTech believes access to technology is a human right, particularly when such technology promotes, protects, and/or facilitates other human rights.</p>
            <p>Producing and publishing content on accessibility in technology, AccessiTech LLC provides clear and concise information to help disabled peoples more readily utilize the accessibility options available in their lives in order to better enable them to pursue their passions in a digital world.</p>
            <p>Through the proliferation, decentralization, and democratization of technology accessibility information, AccessiTech LLC seeks to lower the barriers to entry for disabled peoples throughout design and development communities abroad.</p>
            <p>Collaborating and promoting design and technology for social change, AccessiTech LLC aims to help create an increasingly accessible world for all.</p>
          </Col>
          <Col className="purpose-image" xs={12} md={{span: 5}}>
            <img src={PURPOSE_PIC_URL} className="purpose-picture" alt="Hands typing in pain" title="Image Credit: Urupong from Ghetty Images" />
          </Col>
        </Row>
        <Row className="footer-row">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
