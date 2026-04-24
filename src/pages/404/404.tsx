import { Row, Col } from 'react-bootstrap';
import Metadata from '../../components/Metadata/Metadata';
import metadata from '../../App/meta';

export const NOT_FOUND_HEADING = '404 - Page Not Found';
export const NOT_FOUND_BODY =
  'The page you are looking for does not exist. Please check the URL or return to the homepage.';

export const NotFound = () => {
  return (
    <>
      <Row className="content-row">
        <Col
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Metadata {...metadata} />
          <main id="main" aria-label="Page Not Found" className="not-found-page">
            <h2>{NOT_FOUND_HEADING}</h2>
            <p>{NOT_FOUND_BODY}</p>
          </main>
        </Col>
      </Row>
    </>
  );
};
export default NotFound;
