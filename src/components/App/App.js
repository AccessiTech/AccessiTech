import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import './App.css';

const splashBgImageURL = `url(${process.env.PUBLIC_URL}'/assets/images/splashBG.jpg')`;

function App() {
  return (
    <main className="App">
      <Container fluid>
        <Row
          className="splash-row"
          style={{
            backgroundImage: splashBgImageURL,
          }}
        >
          <Col>
            <Header />
            <h2>Accessibility for Design Technologists</h2>
            {/* todo: add social buttons */}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
