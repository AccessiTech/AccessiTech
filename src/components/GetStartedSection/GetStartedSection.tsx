import { useNavigate } from 'react-router-dom';
import CalendlyButton from '../CalendlyButton/CalendlyButton';
import { Button, Col, Row } from 'react-bootstrap';
import './getStartedSection.scss';

interface GetStartedSectionProps {
  page: string;
  inquiryParam?: string;
  leftParagraph?: string;
  rightParagraph?: string;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
}

const DEFAULT_LEFT_PARAGRAPH =
  'Ready to explore how this could work for you? Schedule a discovery call with no commitment required.';

const DEFAULT_RIGHT_PARAGRAPH =
  'Have questions? Send us a message and our team will get back to you shortly.';

const DEFAULT_LEFT_BUTTON = 'Schedule a Discovery Call';
const DEFAULT_RIGHT_BUTTON = 'Send us a message';

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  page,
  inquiryParam = page,
  leftParagraph = DEFAULT_LEFT_PARAGRAPH,
  rightParagraph = DEFAULT_RIGHT_PARAGRAPH,
  leftButtonLabel = DEFAULT_LEFT_BUTTON,
  rightButtonLabel = DEFAULT_RIGHT_BUTTON,
}) => {
  const navigate = useNavigate();

  return (
    <section className={`product-next-steps ${page}`}>
      <h3 className="w-100">Get Started</h3>
      <Row>
        <Col className="mt-4 mt-md-0">
          <p>{leftParagraph}</p>
          <CalendlyButton label={leftButtonLabel} className="mb-4 w-100" />
        </Col>
        <Col className="mt-4 mt-md-0">
          <p>{rightParagraph}</p>
          <Button
            className="w-100"
            onClick={() => navigate(`/contact?inquiry=${inquiryParam}`)}
            data-testid={`${page}-hub-message-btn`}
          >
            {rightButtonLabel}
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default GetStartedSection;
