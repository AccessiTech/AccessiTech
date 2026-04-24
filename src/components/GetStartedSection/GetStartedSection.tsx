import { useNavigate } from 'react-router-dom';
import CalendlyButton from '../CalendlyButton/CalendlyButton';
import { Button, Col } from 'react-bootstrap';
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
  'Not sure which mentorship path fits your needs? A discovery call is the best starting point — no commitment required.';

const DEFAULT_RIGHT_PARAGRAPH =
  "Would it be easier to start with a message? We're happy to answer questions and help you find the right fit!";

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
    <section className={`product-next-steps row ${page}`}>
      <h3 className="w-100">Get Started</h3>
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
    </section>
  );
};

export default GetStartedSection;
