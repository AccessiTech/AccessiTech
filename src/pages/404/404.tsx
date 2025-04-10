import { Row, Col } from "react-bootstrap";

export const NotFound = () => {
  return (
    <Row className="content-row">
      <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <main id="main" aria-label="Page Not Found" className="not-found-page">
          <h2>404 - Page Not Found</h2>
          <p>
            The page you are looking for does not exist. Please check the URL or return to the homepage.
          </p>
        </main>
      </Col>
    </Row>
  );
}
export default NotFound;