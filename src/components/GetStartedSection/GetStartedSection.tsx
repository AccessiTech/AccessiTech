import { useNavigate } from 'react-router-dom';
import CalendlyButton from '../CalendlyButton/CalendlyButton';
import { Button } from 'react-bootstrap';

interface GetStartedSectionProps {
  page: string;
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
  leftParagraph = DEFAULT_LEFT_PARAGRAPH,
  rightParagraph = DEFAULT_RIGHT_PARAGRAPH,
  leftButtonLabel = DEFAULT_LEFT_BUTTON,
  rightButtonLabel = DEFAULT_RIGHT_BUTTON,
}) => {
  const navigate = useNavigate();

  return (
    <section className={`product-next-steps row ${page}`}>
      <h3>Get Started</h3>
      <div className="col">
        <p>{leftParagraph}</p>
        <CalendlyButton label={leftButtonLabel} className="mb-4 w-100" />
      </div>
      <div className="col">
        <p>{rightParagraph}</p>
        <Button
          // variant="outline-primary"
          className="ms-2 w-100"
          onClick={() => navigate(`/contact?inquiry=${page}`)}
          data-testid={`${page}-hub-message-btn`}
        >
          {rightButtonLabel}
        </Button>
      </div>
    </section>
  );
};

export default GetStartedSection;
