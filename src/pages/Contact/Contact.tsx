import { Row, Col, Breadcrumb } from 'react-bootstrap';
import Metadata from '../../components/Metadata/Metadata';
import ContactForm from '../../components/ContactForm/ContactForm';
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton';
import { HOME_URL } from '../../settings/strings';

export const CONTACT_META_TITLE = 'Contact | AccessiTech';
export const CONTACT_META_DESC =
  'Get in touch with AccessiTech for consulting, mentorship, or QA services.';
export const CONTACT_HEADING = 'Get in Touch';
export const CONTACT_INTRO =
  "Have a project in mind, need accessibility guidance, or want to explore mentorship opportunities? We'd love to hear from you. Fill out the form below or book a call directly.";
export const CONTACT_CALENDLY_LABEL = 'Prefer to schedule directly? Book a discovery call.';

const contactMetadata = {
  title: CONTACT_META_TITLE,
  description: CONTACT_META_DESC,
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

            <h2>{CONTACT_HEADING}</h2>
            <p>{CONTACT_INTRO}</p>

            <CalendlyButton
              label={CONTACT_CALENDLY_LABEL}
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
