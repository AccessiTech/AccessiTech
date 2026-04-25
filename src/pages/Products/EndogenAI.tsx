import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Button, Card, Col, Modal, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Metadata from '../../components/Metadata/Metadata';
import GetStartedSection from '../../components/GetStartedSection/GetStartedSection';
import { HOME_URL } from '../../settings/strings';
import {
  HERO_TAGLINE,
  PROBLEM_INTRO,
  PROBLEM_CARD_1_TITLE,
  PROBLEM_CARD_1_SHORT_BODY,
  PROBLEM_CARD_1_BODY,
  PROBLEM_CARD_2_TITLE,
  PROBLEM_CARD_2_SHORT_BODY,
  PROBLEM_CARD_2_BODY,
  PROBLEM_CARD_3_TITLE,
  PROBLEM_CARD_3_SHORT_BODY,
  PROBLEM_CARD_3_BODY,
  PROBLEM_CARD_4_TITLE,
  PROBLEM_CARD_4_SHORT_BODY,
  PROBLEM_CARD_4_BODY,
  WHAT_TITLE,
  WHAT_AXIOMS_HEADER,
  WHAT_AXIOMS_BODY,
  WHAT_STACK_HEADER,
  WHAT_STACK_INTRO,
  GOVERNANCE_STACK_ITEMS,
  WHAT_OSS_HEADER,
  WHAT_OSS_BODY,
  BRAND_RELATIONSHIP,
  DOGMA_CARD_TITLE,
  DOGMA_CARD_BODY,
  DOGMAMCP_CARD_TITLE,
  DOGMAMCP_CARD_BODY,
  HOW_TITLE,
  ENCODING_STEPS,
  RESEARCH_INTERNAL_HEADER,
  RESEARCH_INTERNAL_ITEMS,
  RESEARCH_EXTERNAL_HEADER,
  RESEARCH_EXTERNAL_ITEMS,
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

  // Problem card modal state
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const problemCards = [
    {
      title: PROBLEM_CARD_1_TITLE,
      shortBody: PROBLEM_CARD_1_SHORT_BODY,
      modalBody: PROBLEM_CARD_1_BODY,
    },
    {
      title: PROBLEM_CARD_2_TITLE,
      shortBody: PROBLEM_CARD_2_SHORT_BODY,
      modalBody: PROBLEM_CARD_2_BODY,
    },
    {
      title: PROBLEM_CARD_3_TITLE,
      shortBody: PROBLEM_CARD_3_SHORT_BODY,
      modalBody: PROBLEM_CARD_3_BODY,
    },
    {
      title: PROBLEM_CARD_4_TITLE,
      shortBody: PROBLEM_CARD_4_SHORT_BODY,
      modalBody: PROBLEM_CARD_4_BODY,
    },
  ];

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
              {problemCards.map((card, index) => (
                <Col key={index} xs={12} md={6}>
                  <Card className="mb-3 h-100">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{card.title}</Card.Title>
                      <div className="card-short-body flex-grow-1">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{card.shortBody}</ReactMarkdown>
                      </div>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="mt-2 align-self-start"
                        onClick={() => setActiveModal(index)}
                        aria-label={`Learn more about ${card.title}`}
                      >
                        Learn more
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* Problem card modals */}
          {problemCards.map((card, index) => (
            <Modal
              key={index}
              show={activeModal === index}
              onHide={() => setActiveModal(null)}
              size="lg"
              aria-labelledby={`problem-modal-title-${index}`}
            >
              <Modal.Header closeButton>
                <Modal.Title id={`problem-modal-title-${index}`}>{card.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{card.modalBody}</ReactMarkdown>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setActiveModal(null)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          ))}

          {/* §3 What EndogenAI is */}
          <section className="endogenai-what text-start">
            <h2>{WHAT_TITLE}</h2>
            <div className="brand-relationship mb-4">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{BRAND_RELATIONSHIP}</ReactMarkdown>
            </div>
            <Row className="what-subsections">
              <Col xs={12} md={6} className="mb-4">
                <h3>{WHAT_AXIOMS_HEADER}</h3>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{WHAT_AXIOMS_BODY}</ReactMarkdown>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <h3>{WHAT_OSS_HEADER}</h3>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{WHAT_OSS_BODY}</ReactMarkdown>
              </Col>
            </Row>
            <h3>{WHAT_STACK_HEADER}</h3>
            <p>{WHAT_STACK_INTRO}</p>
            <Row className="governance-stack-cards">
              {GOVERNANCE_STACK_ITEMS.map((item, index) => (
                <Col key={index} xs={12} md={6} className="mb-3">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title as="h4">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      </Card.Title>
                      <p className="mb-0">{item.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
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
            <Row className="encoding-cards">
              {ENCODING_STEPS.map(step => (
                <Col key={step.step} xs={12} md={6} className="mb-3">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title as="h3">
                        <span className="step-number">{step.step}.</span> {step.title}
                      </Card.Title>
                      <p>{step.description}</p>
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        View on GitHub
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* §6 What the research says */}
          <div className="research-section">
            <section className="endogenai-research text-start">
              <Col xs={12} sm={{ span: 8, offset: 2 }}>
                <h2>What the Research Says</h2>
                <div className="research-internal">
                  <h3>{RESEARCH_INTERNAL_HEADER}</h3>
                  <Row className="research-cards mt-3">
                    {RESEARCH_INTERNAL_ITEMS.map((item, index) => (
                      <Col key={index} xs={12} md={6} className="mb-3">
                        <Card className="h-100 research-card">
                          <Card.Body>
                            <Card.Title as="h4">
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.title}
                              </a>
                            </Card.Title>
                            <p className="mb-0">{item.body}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="research-external mt-4">
                  <h3>{RESEARCH_EXTERNAL_HEADER}</h3>
                  <Row className="research-cards mt-3">
                    {RESEARCH_EXTERNAL_ITEMS.map((item, index) => (
                      <Col key={index} xs={12} md={6} className="mb-3">
                        <Card className="h-100 research-card">
                          <Card.Body>
                            <Card.Title as="h4">
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.title}
                              </a>
                            </Card.Title>
                            <p className="mb-0">{item.body}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </section>
          </div>

          {/* §7 CTA — single GetStartedSection */}
          <section className="endogenai-cta getstartedsection text-start">
            <GetStartedSection
              page="endogenai"
              inquiryParam="endogenai-implementation"
              leftParagraph="Ready to embed EndogenAI into your workflows? Schedule a consulting discovery call to discuss implementation support."
              rightParagraph="Have questions about the methodology? Send us a message and we'll help you find the right starting point."
              leftButtonLabel="Schedule Implementation Consult"
              rightButtonLabel="Ask a Question"
            />
            <div className="mt-4 text-center">
              <a href={CTA_GITHUB_HREF} target="_blank" rel="noopener noreferrer">
                {CTA_GITHUB_LABEL} ↗
              </a>
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default EndogenAI;
