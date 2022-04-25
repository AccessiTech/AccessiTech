import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import './App.css';



function App() {
  const splashRowStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}'/assets/images/splashBG.jpg')`,
  };

  const purposePicSrc = `${process.env.PUBLIC_URL}/assets/images/hands.png`;

  return (
    <main className="App">
      <Container fluid>
        <Row
          className="splash-row"
          style={splashRowStyle}
        >
          <Col>
            <Header />
            <h2>Accessibility for Design Technologists</h2>
            {/* todo: add social buttons */}
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
            <img src={purposePicSrc} className="purpose-picture" />
          </Col>
        </Row>
        <Row className="footer-row">
          <Col>
            <p>Copyright © 2021 AccessiTech LLC. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
