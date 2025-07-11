import { Row, Col } from "react-bootstrap";
import { HeaderRow } from "../../components/Header/Header";
import Metadata from "../../components/Metadata/Metadata";
import metadata from "../../App/meta";

export const NotFound = () => {
  return (<>
    <HeaderRow />
    <Row className="content-row">
      <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Metadata {...metadata} />
        <main id="main" aria-label="Page Not Found" className="not-found-page">
          <h2>404 - Page Not Found</h2>
          <p>
            The page you are looking for does not exist. Please check the URL or return to the homepage.
          </p>
        </main>
      </Col>
    </Row>
  </>);
}
export default NotFound;