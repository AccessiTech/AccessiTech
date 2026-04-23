import { useNavigate } from 'react-router-dom';
import CalendlyButton from '../CalendlyButton/CalendlyButton';
import { Button } from 'react-bootstrap';

interface GetStartedSectionProps {
  page: string;
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({ page }) => {
  const navigate = useNavigate();
  return (
    <section className={`product-next-steps row ${page}`}>
      <h3>Get Started</h3>
      <div className="col">
        <p>
          Not sure which mentorship path fits your needs?
          <br />A discovery call is the best starting point — no commitment required.
        </p>
        <CalendlyButton label="Schedule a Discovery Call" className="mb-4 w-100" />
      </div>
      <div className="col">
        <p>
          Would it be easier to start with a message?
          <br />
          We’re happy to answer questions and help you find the right fit!
        </p>
        <Button
          // variant="outline-primary"
          className="ms-2 w-100"
          onClick={() => navigate(`/contact?inquiry=${page}`)}
          data-testid={`${page}-hub-message-btn`}
        >
          Send us a message
        </Button>
      </div>
    </section>
  );
};

export default GetStartedSection;
