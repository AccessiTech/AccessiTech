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
      </Container>
    </main>
  );
}

export default App;
