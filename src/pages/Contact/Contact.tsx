import { Row, Col, Breadcrumb } from 'react-bootstrap';
import Metadata from '../../components/Metadata/Metadata';
import ContactForm from '../../components/ContactForm/ContactForm';
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton';
import { HOME_URL } from '../../settings/strings';

const contactMetadata = {
  title: 'Contact | AccessiTech',
  description: 'Get in touch with AccessiTech for consulting, mentorship, or QA services.',
  canonical: `${HOME_URL}/contact`,
};

export const Contact = () => {
  return (
    <>
      <Row className="content-row">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata {...contactMetadata} />
          <main id="main" aria-label="Contact AccessiTech">
            <Breadcrumb className="breadcrumb-container">
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
              className="mb-4 btn btn-primary btn-lg"
            />

            <ContactForm />
          </main>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
