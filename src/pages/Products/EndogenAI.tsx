import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Button, Card, Col, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Metadata from '../../components/Metadata/Metadata';
import GetStartedSection from '../../components/GetStartedSection/GetStartedSection';
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton';
import { HOME_URL } from '../../settings/strings';
import {
  HERO_TAGLINE,
  PROBLEM_INTRO,
  PROBLEM_CARD_1_TITLE,
  PROBLEM_CARD_1_BODY,
  PROBLEM_CARD_2_TITLE,
  PROBLEM_CARD_2_BODY,
  PROBLEM_CARD_3_TITLE,
  PROBLEM_CARD_3_BODY,
  PROBLEM_CARD_4_TITLE,
  PROBLEM_CARD_4_BODY,
  WHAT_TITLE,
  WHAT_DESCRIPTION,
  BRAND_RELATIONSHIP,
  HARNESS_OPEN_CARD_BODY,
  HARNESS_DOGMAMCP_CARD_BODY,
  DOGMA_CARD_TITLE,
  DOGMA_CARD_BODY,
  DOGMAMCP_CARD_TITLE,
  DOGMAMCP_CARD_BODY,
  HOW_TITLE,
  ENCODING_STEPS,
  RESEARCH_INTERNAL_HEADER,
  RESEARCH_INTERNAL_FINDINGS,
  RESEARCH_EXTERNAL_HEADER,
  RESEARCH_EXTERNAL_FINDINGS,
  CTA_TITLE,
  CTA_GITHUB_LABEL,
  CTA_GITHUB_HREF,
} from './EndogenAI.constants';
import './EndogenAI.scss';

// Meta
export const ENDOGENAI_META_TITLE = 'EndogenAI | AccessiTech';
export const ENDOGENAI_META_DESC =
  "EndogenAI is AccessiTech's open-source AI governance methodology — implemented in dogma (governance corpus) and DogmaMCP (MCP server). Free and open source. Paid implementation support via AccessiTech Consulting.";

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
            <div className="hero-tagline">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{HERO_TAGLINE}</ReactMarkdown>
            </div>
          </section>

          {/* §2 The Problem */}
          <section className="endogenai-problem text-start">
            <h2>The Problem</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{PROBLEM_INTRO}</ReactMarkdown>
            <Row className="problem-cards">
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{PROBLEM_CARD_1_TITLE}</Card.Title>
                    <Card.Text>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {PROBLEM_CARD_1_BODY}
                      </ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{PROBLEM_CARD_2_TITLE}</Card.Title>
                    <Card.Text>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {PROBLEM_CARD_2_BODY}
                      </ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{PROBLEM_CARD_3_TITLE}</Card.Title>
                    <Card.Text>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {PROBLEM_CARD_3_BODY}
                      </ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{PROBLEM_CARD_4_TITLE}</Card.Title>
                    <Card.Text>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {PROBLEM_CARD_4_BODY}
                      </ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* §3 What EndogenAI is */}
          <section className="endogenai-what text-start">
            <h2>{WHAT_TITLE}</h2>
            <div className="brand-relationship">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{BRAND_RELATIONSHIP}</ReactMarkdown>
            </div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{WHAT_DESCRIPTION}</ReactMarkdown>

            <h3>Open Harness Architecture: Four Core Criteria</h3>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{HARNESS_OPEN_CARD_BODY}</ReactMarkdown>

            <h3>DogmaMCP: Governance-First Harness Implementation</h3>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{HARNESS_DOGMAMCP_CARD_BODY}</ReactMarkdown>
          </section>

          {/* §4 dogma & DogmaMCP */}
          <section className="endogenai-products text-start">
            <h2>dogma & DogmaMCP</h2>
            <Row className="products-cards">
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{DOGMA_CARD_TITLE}</Card.Title>
                    <Card.Text>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{DOGMA_CARD_BODY}</ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{DOGMAMCP_CARD_TITLE}</Card.Title>
                    <Card.Text>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {DOGMAMCP_CARD_BODY}
                      </ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* §5 How it works (data-driven encoding chain) */}
          <section className="endogenai-how text-start">
            <h2>{HOW_TITLE}</h2>
            <div className="encoding-steps">
              {ENCODING_STEPS.map(step => (
                <div key={step.step} className="encoding-step">
                  <h3>
                    Step {step.step}: {step.title}
                  </h3>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{step.description}</ReactMarkdown>
                  <a href={step.link}>Learn more</a>
                </div>
              ))}
            </div>
          </section>

          {/* §6 What the research says */}
          <section className="endogenai-research text-start">
            <h2>What the Research Says</h2>
            <div className="research-internal">
              <h3>{RESEARCH_INTERNAL_HEADER}</h3>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {RESEARCH_INTERNAL_FINDINGS}
              </ReactMarkdown>
            </div>
            <div className="research-external">
              <h3>{RESEARCH_EXTERNAL_HEADER}</h3>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {RESEARCH_EXTERNAL_FINDINGS}
              </ReactMarkdown>
            </div>
          </section>

          {/* §7 CTA */}
          <section className="endogenai-cta text-start">
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
            <div className="secondary-cta-block">
              <GetStartedSection page="endogenai" inquiryParam="consulting" />
            </div>
            <div className="mt-5">
              <CalendlyButton />
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default EndogenAI;
