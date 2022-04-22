import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <main className="App">
      <Container fluid>
        <Row className="splash-row">
          <Col>
            <h2>Accessibility for Design Technologists</h2>
            {/* todo: add social buttons */}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
