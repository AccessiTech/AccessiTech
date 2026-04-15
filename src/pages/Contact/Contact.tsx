import { Row, Col, Breadcrumb } from 'react-bootstrap';
import { HeaderRow } from '../../components/Header/Header';
import Metadata from '../../components/Metadata/Metadata';
import ContactForm from '../../components/ContactForm/ContactForm';
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton';
import { HOME_URL } from '../../settings/strings';

const contactMetadata = {
  title: 'Contact | AccessiTech',
  description:
    'Get in touch with AccessiTech for consulting, mentorship, or QA services.',
  canonical: `${HOME_URL}/contact`,
};

export const Contact = () => {
  return (
    <>
      <HeaderRow />
      <Row className="content-row">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata {...contactMetadata} />
          <main id="main" aria-label="Contact AccessiTech">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Contact</Breadcrumb.Item>
            </Breadcrumb>

            <h2>Get in Touch</h2>
            <p>
              Have a project in mind, need accessibility guidance, or want to explore mentorship
              opportunities? We'd love to hear from you. Fill out the form below or book a call
              directly.
            </p>

            <CalendlyButton
              label="Prefer to schedule directly? Book a discovery call."
              variant="outline-primary"
              className="mb-4"
            />

            <ContactForm />
          </main>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
