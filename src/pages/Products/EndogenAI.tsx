import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Button, Card, Col, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Metadata from '../../components/Metadata/Metadata';
import GetStartedSection from '../../components/GetStartedSection/GetStartedSection';
import ModalCard from '../../components/ModalCard';

// Custom markdown link renderer for external links (used in non-modal content)
const markdownComponents = {
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <a href={href}>{children}</a>;
  },
};

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
  DOGMA_CARD_SHORT_BODY,
  DOGMA_CARD_MODAL_BODY,
  DOGMAMCP_CARD_TITLE,
  DOGMAMCP_CARD_SHORT_BODY,
  DOGMAMCP_CARD_MODAL_BODY,
  HOW_TITLE,
  ENCODING_STEPS,
  RESEARCH_INTRO,
  RESEARCH_INTERNAL_HEADER,
  RESEARCH_INTERNAL_ITEMS,
  RESEARCH_EXTERNAL_ITEMS,
  CTA_GITHUB_HREF,
  DOGMA_TITLE,
  DOGMA_RELATIONSHIP,
  BUTTON_LABEL_LEARN_MORE,
  BUTTON_LABEL_READ_MORE,
  BUTTON_LABEL_VIEW_GITHUB,
  ARIA_LABEL_LEARN_MORE_ABOUT,
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
  // Dogma/DogmaMCP modal state
  const [activeDogmaModal, setActiveDogmaModal] = useState<number | null>(null);
  // Encoding steps modal state
  const [activeEncodingModal, setActiveEncodingModal] = useState<number | null>(null);
  // Research cards modal state
  const [activeResearchModal, setActiveResearchModal] = useState<number | null>(null);

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
          <section className="endogenai-hero mb-5">
            <h1 className="mb-3">EndogenAI</h1>
            <div className="hero-tagline">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {HERO_TAGLINE}
              </ReactMarkdown>
            </div>
          </section>

          {/* §2 The Problem */}
          <section className="endogenai-problem text-start mb-5">
            <h2 className="mb-4">The Problem</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {PROBLEM_INTRO}
            </ReactMarkdown>
            <Row className="problem-cards mt-5">
              {problemCards.map((card, index) => (
                <Col key={index} xs={12} md={6}>
                  <Card className="mb-3 h-100">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{card.title}</Card.Title>
                      <div className="card-short-body flex-grow-1">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                          {card.shortBody}
                        </ReactMarkdown>
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
            <ModalCard
              key={index}
              title={card.title}
              body={card.modalBody}
              isOpen={activeModal === index}
              onClose={() => setActiveModal(null)}
              ariaLabelledBy={`problem-modal-title-${index}`}
            />
          ))}

          {/* §3 What EndogenAI is */}
          <section className="endogenai-what text-start mb-5">
            <h2 className="mb-4">{WHAT_TITLE}</h2>
            <div className="brand-relationship mb-4">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {BRAND_RELATIONSHIP}
              </ReactMarkdown>
            </div>
            <Row className="what-subsections">
              <Col xs={12} md={6} className="mb-4">
                <h3>{WHAT_AXIOMS_HEADER}</h3>
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {WHAT_AXIOMS_BODY}
                </ReactMarkdown>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <h3>{WHAT_OSS_HEADER}</h3>
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {WHAT_OSS_BODY}
                </ReactMarkdown>
              </Col>
            </Row>
          </section>

          {/* §4 dogma & DogmaMCP */}
          <section className="endogenai-products text-start">
            <h2 className="mb-4">{DOGMA_TITLE}</h2>
            <div className="mb-4">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {DOGMA_RELATIONSHIP}
              </ReactMarkdown>
            </div>
            <Row className="products-cards mb-5 mt-5">
              <Col xs={12} md={6}>
                <h3>{DOGMA_CARD_TITLE}</h3>
                <div className="card-short-body flex-grow-1">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {DOGMA_CARD_SHORT_BODY}
                  </ReactMarkdown>
                </div>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="mt-2 align-self-start"
                  onClick={() => setActiveDogmaModal(0)}
                  aria-label={ARIA_LABEL_LEARN_MORE_ABOUT(DOGMA_CARD_TITLE)}
                >
                  {BUTTON_LABEL_LEARN_MORE}
                </Button>
              </Col>
              <Col xs={12} md={6}>
                <h3>{DOGMAMCP_CARD_TITLE}</h3>
                <div className="card-short-body flex-grow-1">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {DOGMAMCP_CARD_SHORT_BODY}
                  </ReactMarkdown>
                </div>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="mt-2 align-self-start"
                  onClick={() => setActiveDogmaModal(1)}
                  aria-label={ARIA_LABEL_LEARN_MORE_ABOUT(DOGMAMCP_CARD_TITLE)}
                >
                  {BUTTON_LABEL_LEARN_MORE}
                </Button>
              </Col>
            </Row>

            <h3>{WHAT_STACK_HEADER}</h3>
            <p>{WHAT_STACK_INTRO}</p>
            <Row className="governance-stack-cards mb-5">
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

          {/* Dogma/DogmaMCP modals */}
          <ModalCard
            title={DOGMA_CARD_TITLE}
            body={DOGMA_CARD_MODAL_BODY}
            isOpen={activeDogmaModal === 0}
            onClose={() => setActiveDogmaModal(null)}
            ariaLabelledBy="dogma-modal-title"
          />
          <ModalCard
            title={DOGMAMCP_CARD_TITLE}
            body={DOGMAMCP_CARD_MODAL_BODY}
            isOpen={activeDogmaModal === 1}
            onClose={() => setActiveDogmaModal(null)}
            ariaLabelledBy="dogmamcp-modal-title"
          />
        </Col>
      </Row>
      <Row className="how-it-works-row">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} className="pt-5 pb-3">
          {/* §5 How it works (data-driven encoding chain) */}
          <section className="endogenai-how text-start mb-5">
            <h2 className="mb-4">{HOW_TITLE}</h2>
            <Row className="encoding-cards">
              {ENCODING_STEPS.map(step => (
                <Col key={step.step} xs={12} md={6} className="mb-4">
                  <Card className="encoding-step-card h-100">
                    <Card.Body className="d-flex flex-column p-4">
                      <Card.Title as="h3">
                        <span className="step-number">{step.step}.</span> {step.title}
                      </Card.Title>
                      <div className="card-short-body flex-grow-1">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                          {step.shortBody}
                        </ReactMarkdown>
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        className="mt-2 align-self-end"
                        onClick={() => setActiveEncodingModal(step.step - 1)}
                        aria-label={ARIA_LABEL_LEARN_MORE_ABOUT(step.title)}
                      >
                        {BUTTON_LABEL_LEARN_MORE}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* Encoding steps modals */}
          {ENCODING_STEPS.map(step => {
            const encodingBody = `${step.description}\n\n[${BUTTON_LABEL_VIEW_GITHUB}](${step.link})`;
            return (
              <ModalCard
                key={step.step}
                title={`${step.step}. ${step.title}`}
                body={encodingBody}
                isOpen={activeEncodingModal === step.step - 1}
                onClose={() => setActiveEncodingModal(null)}
                ariaLabelledBy={`encoding-modal-title-${step.step}`}
              />
            );
          })}
        </Col>
      </Row>

      {/* §6 What the research says — Full-width dark background */}
      <Row className="research-section">
        <Col
          xs={12}
          sm={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
          className="text-start"
        >
          <section className="endogenai-research py-5">
            <h2 className="mb-4 text-center">What the Research Says</h2>
            <div className="mb-5 research-intro">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {RESEARCH_INTRO}
              </ReactMarkdown>
            </div>
            <div className="research-external">
              <h3 className="mb-3 mt-5">What External Authorities Say</h3>
              <Row className="research-cards mt-3">
                {RESEARCH_EXTERNAL_ITEMS.map((item, index) => (
                  <Col key={index} xs={12} md={6} className="mb-3">
                    <Card className="h-100 research-card">
                      <Card.Body className="d-flex flex-column">
                        <Card.Title as="h4" className="mb-2">
                          {item.title}
                        </Card.Title>
                        <div className="card-short-body flex-grow-1">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={markdownComponents}
                          >
                            {item.shortBody}
                          </ReactMarkdown>
                        </div>
                        <Button
                          variant="outline-light"
                          size="sm"
                          className="mt-2 align-self-start"
                          onClick={() => setActiveResearchModal(index)}
                          aria-label={ARIA_LABEL_LEARN_MORE_ABOUT(item.title)}
                        >
                          {BUTTON_LABEL_LEARN_MORE}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="research-internal mt-4">
              <h3 className="mb-3 mt-5">{RESEARCH_INTERNAL_HEADER}</h3>
              <Row className="research-cards mt-3">
                {RESEARCH_INTERNAL_ITEMS.map((item, index) => (
                  <Col key={index} xs={12} md={6} className="mb-3">
                    <Card className="h-100 research-card">
                      <Card.Body className="d-flex flex-column">
                        <Card.Title as="h4" className="mb-2">
                          {item.title}
                        </Card.Title>
                        <div className="card-short-body flex-grow-1">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={markdownComponents}
                          >
                            {item.shortBody}
                          </ReactMarkdown>
                        </div>
                        <Button
                          variant="outline-light"
                          size="sm"
                          className="mt-2 align-self-start"
                          onClick={() =>
                            setActiveResearchModal(RESEARCH_EXTERNAL_ITEMS.length + index)
                          }
                          aria-label={ARIA_LABEL_LEARN_MORE_ABOUT(item.title)}
                        >
                          {BUTTON_LABEL_LEARN_MORE}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                <div className="mt-4 text-center">
                  <Button
                    variant="link"
                    className="fs-5 fw-medium"
                    href={CTA_GITHUB_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Explore EndogenAI on GitHub`}
                  >
                    {BUTTON_LABEL_VIEW_GITHUB}
                  </Button>
                </div>
              </Row>
            </div>
          </section>
        </Col>
      </Row>

      {/* Research modals — external (now first) */}
      {RESEARCH_EXTERNAL_ITEMS.map((item, index) => {
        const externalBody = `${item.body}\n\n[${BUTTON_LABEL_READ_MORE} ↗](${item.link})`;
        return (
          <ModalCard
            key={index}
            title={item.title}
            body={externalBody}
            isOpen={activeResearchModal === index}
            onClose={() => setActiveResearchModal(null)}
            ariaLabelledBy={`research-external-modal-title-${index}`}
          />
        );
      })}

      {/* Research modals — internal (now second) */}
      {RESEARCH_INTERNAL_ITEMS.map((item, index) => {
        const internalBody = `${item.body}\n\n[${BUTTON_LABEL_READ_MORE} ↗](${item.link})`;
        return (
          <ModalCard
            key={index}
            title={item.title}
            body={internalBody}
            isOpen={activeResearchModal === RESEARCH_EXTERNAL_ITEMS.length + index}
            onClose={() => setActiveResearchModal(null)}
            ariaLabelledBy={`research-internal-modal-title-${index}`}
          />
        );
      })}

      {/* §7 CTA — single GetStartedSection */}
      <Row className="getStartedRow pt-5 pb-5">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <GetStartedSection
            page="endogenai"
            inquiryParam="endogenai-consulting"
            leftParagraph="Interested in implementing EndogenAI for your organization? Schedule a consulting discovery call to discuss how we can support your implementation."
            rightParagraph="Have questions about the methodology? Send us a message and we'll help you find the right starting point."
            leftButtonLabel="Schedule Consult"
            rightButtonLabel="Ask a Question"
          />
        </Col>
      </Row>
    </>
  );
};

export default EndogenAI;
