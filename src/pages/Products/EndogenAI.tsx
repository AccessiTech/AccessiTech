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
  WHAT_TITLE,
  WHAT_DESCRIPTION,
  BRAND_RELATIONSHIP,
  HOW_TITLE,
  ENCODING_STEPS,
  DOGMA_CARD_TITLE,
  DOGMA_CARD_BODY,
  DOGMAMCP_CARD_TITLE,
  DOGMAMCP_CARD_BODY,
  RESEARCH_TITLE,
  RESEARCH_PAPER_1_TITLE,
  RESEARCH_PAPER_1_SUMMARY,
  RESEARCH_PAPER_2_TITLE,
  RESEARCH_PAPER_2_SUMMARY,
  RESEARCH_PAPER_3_TITLE,
  RESEARCH_PAPER_3_SUMMARY,
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
          <section className="endogenai-problem">
            <h2>The Problem</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{PROBLEM_INTRO}</ReactMarkdown>
            <Row className="problem-cards">
              <Col xs={12} md={4}>
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
              <Col xs={12} md={4}>
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
              <Col xs={12} md={4}>
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
            </Row>
          </section>

          {/* §3 What EndogenAI is */}
          <section className="endogenai-what">
            <h2>{WHAT_TITLE}</h2>
            <div className="brand-relationship">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{BRAND_RELATIONSHIP}</ReactMarkdown>
            </div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{WHAT_DESCRIPTION}</ReactMarkdown>
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
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{step.description}</ReactMarkdown>
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

          {/* §6 What the research says */}
          <section className="endogenai-research">
            <h2>{RESEARCH_TITLE}</h2>
            <Row className="research-papers">
              <Col xs={12} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{RESEARCH_PAPER_1_TITLE}</Card.Title>
                    <Card.Text>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {RESEARCH_PAPER_1_SUMMARY}
                      </ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{RESEARCH_PAPER_2_TITLE}</Card.Title>
                    <Card.Text>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {RESEARCH_PAPER_2_SUMMARY}
                      </ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{RESEARCH_PAPER_3_TITLE}</Card.Title>
                    <Card.Text>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {RESEARCH_PAPER_3_SUMMARY}
                      </ReactMarkdown>
                    </Card.Text>
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
