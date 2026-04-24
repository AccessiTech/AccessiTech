import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Button, Card, Col, Row } from 'react-bootstrap';
import Metadata from '../../components/Metadata/Metadata';
import GetStartedSection from '../../components/GetStartedSection/GetStartedSection';
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton';
import { HOME_URL } from '../../settings/strings';
import './EndogenAI.scss';

// Meta
export const ENDOGENAI_META_TITLE = 'EndogenAI | AccessiTech';
export const ENDOGENAI_META_DESC =
  "EndogenAI is AccessiTech's open-source AI governance methodology — implemented in dogma (governance corpus) and DogmaMCP (MCP server). Free and open source. Paid implementation support via AccessiTech Consulting.";

// §1 Hero
export const HERO_TAGLINE = 'Hero tagline here';

// §2 The Problem
export const PROBLEM_INTRO = 'Problem intro paragraph';
export const PROBLEM_CARD_1_TITLE = 'UK CMA callout title';
export const PROBLEM_CARD_1_BODY = 'UK CMA callout body';
export const PROBLEM_CARD_2_TITLE = 'Meta/Moltbook callout title';
export const PROBLEM_CARD_2_BODY = 'Meta/Moltbook callout body';
export const PROBLEM_CARD_3_TITLE = 'OWASP callout title';
export const PROBLEM_CARD_3_BODY = 'OWASP callout body';

// §3 What EndogenAI is
export const WHAT_TITLE = 'What EndogenAI is';
export const WHAT_DESCRIPTION = 'Methodology overview with links';

// §4 How it works (data-driven encoding chain)
export const HOW_TITLE = 'How it works';
interface EncodingStep {
  step: number;
  title: string;
  description: string;
  link: string;
}
export const ENCODING_STEPS: EncodingStep[] = [
  { step: 1, title: 'Step 1 title', description: 'Step 1 description', link: '#' },
  { step: 2, title: 'Step 2 title', description: 'Step 2 description', link: '#' },
  { step: 3, title: 'Step 3 title', description: 'Step 3 description', link: '#' },
];

// §5 dogma & DogmaMCP
export const DOGMA_CARD_TITLE = 'dogma';
export const DOGMA_CARD_BODY = 'dogma card body';
export const DOGMAMCP_CARD_TITLE = 'DogmaMCP';
export const DOGMAMCP_CARD_BODY = 'DogmaMCP card body';

// §6 What the research says
export const RESEARCH_TITLE = 'What the research says';
export const RESEARCH_PAPER_1_TITLE = 'endogenic-design-paper.md';
export const RESEARCH_PAPER_1_SUMMARY = 'Paper 1 summary';
export const RESEARCH_PAPER_2_TITLE = 'values-encoding.md';
export const RESEARCH_PAPER_2_SUMMARY = 'Paper 2 summary';
export const RESEARCH_PAPER_3_TITLE = 'bubble-clusters-substrate.md';
export const RESEARCH_PAPER_3_SUMMARY = 'Paper 3 summary';

// §7 CTA
export const CTA_TITLE = 'Get Started';
export const CTA_GITHUB_LABEL = 'Explore on GitHub';
export const CTA_GITHUB_HREF = 'https://github.com/EndogenAI/dogma';

const EndogenAI = () => {
  const navigate = useNavigate();
  const canonical = `${HOME_URL}/products/endogenai`;

  return (
    <>
      <Row className="breadcrumb-row endogenai-page">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata
            title={ENDOGENAI_META_TITLE}
            description={ENDOGENAI_META_DESC}
            canonical={canonical}
            siteName="AccessiTech"
            twitterCreator="@accessiT3ch"
          />
          <Breadcrumb className="breadcrumb-container">
            <Breadcrumb.Item
              href="/"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              href="/products"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                navigate('/products');
              }}
            >
              Products
            </Breadcrumb.Item>
            <Breadcrumb.Item active>EndogenAI</Breadcrumb.Item>
          </Breadcrumb>

          {/* §1 Hero */}
          <section className="endogenai-hero">
            <h1>EndogenAI</h1>
            <p className="hero-tagline">{HERO_TAGLINE}</p>
          </section>

          {/* §2 The Problem */}
          <section className="endogenai-problem">
            <h2>The Problem</h2>
            <p>{PROBLEM_INTRO}</p>
            <Row className="problem-cards">
              <Col xs={12} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{PROBLEM_CARD_1_TITLE}</Card.Title>
                    <Card.Text>{PROBLEM_CARD_1_BODY}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{PROBLEM_CARD_2_TITLE}</Card.Title>
                    <Card.Text>{PROBLEM_CARD_2_BODY}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{PROBLEM_CARD_3_TITLE}</Card.Title>
                    <Card.Text>{PROBLEM_CARD_3_BODY}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* §3 What EndogenAI is */}
          <section className="endogenai-what">
            <h2>{WHAT_TITLE}</h2>
            <p>{WHAT_DESCRIPTION}</p>
          </section>

          {/* §4 How it works (data-driven encoding chain) */}
          <section className="endogenai-how">
            <h2>{HOW_TITLE}</h2>
            <div className="encoding-steps">
              {ENCODING_STEPS.map(step => (
                <div key={step.step} className="encoding-step">
                  <h3>
                    Step {step.step}: {step.title}
                  </h3>
                  <p>{step.description}</p>
                  <a href={step.link}>Learn more</a>
                </div>
              ))}
            </div>
          </section>

          {/* §5 dogma & DogmaMCP */}
          <section className="endogenai-products">
            <h2>dogma & DogmaMCP</h2>
            <Row className="products-cards">
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{DOGMA_CARD_TITLE}</Card.Title>
                    <Card.Text>{DOGMA_CARD_BODY}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{DOGMAMCP_CARD_TITLE}</Card.Title>
                    <Card.Text>{DOGMAMCP_CARD_BODY}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* §6 What the research says */}
          <section className="endogenai-research">
            <h2>{RESEARCH_TITLE}</h2>
            <Row className="research-papers">
              <Col xs={12} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{RESEARCH_PAPER_1_TITLE}</Card.Title>
                    <Card.Text>{RESEARCH_PAPER_1_SUMMARY}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{RESEARCH_PAPER_2_TITLE}</Card.Title>
                    <Card.Text>{RESEARCH_PAPER_2_SUMMARY}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{RESEARCH_PAPER_3_TITLE}</Card.Title>
                    <Card.Text>{RESEARCH_PAPER_3_SUMMARY}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* §7 CTA */}
          <section className="endogenai-cta">
            <h2>{CTA_TITLE}</h2>
            <Button
              href={CTA_GITHUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="mb-4"
            >
              {CTA_GITHUB_LABEL}
            </Button>
            <GetStartedSection page="endogenai" inquiryParam="consulting" />
            <div className="mt-4">
              <CalendlyButton />
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default EndogenAI;
