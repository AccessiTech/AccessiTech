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
      </Container>
    </main>
  );
}

export default App;
