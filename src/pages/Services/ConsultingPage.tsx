import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Button, Col, Row } from 'react-bootstrap';
import Metadata from '../../components/Metadata/Metadata';
import { HOME_URL } from '../../settings/strings';
import {
  CONSULTING_HEADER,
  CONSULTING_INTRO,
  ASAAPS_HEADER,
  ASAAPS_DESC,
  AI_INTEGRATION_HEADER,
  AI_INTEGRATION_DESC,
  QA_HEADER,
  QA_DESC,
} from '../../components/Services/Services';
import GetStartedSection from '../../components/GetStartedSection/GetStartedSection';

export const CONSULTING_META_TITLE = 'Consulting | AccessiTech';
export const CONSULTING_META_DESC =
  'AccessiTech Consulting: accessibility-first software design, agentic AI governance, and WCAG QA for organizations building accountable digital systems.';

export const ASAAPS_DELIVERABLES = [
  'WCAG 2.2 AA compliance by design',
  'Screen-reader tested components (NVDA, VoiceOver)',
  'Keyboard-navigable interfaces throughout',
  'Handoff documentation your team can maintain',
];
export const AI_INTEGRATION_DELIVERABLES = [
  'EndogenAI methodology deployment (open source)',
  'Governance embedded in daily operations',
  'Audit-ready documentation',
  'No vendor lock-in',
];
export const QA_DELIVERABLES = [
  'WCAG 2.2 AA compliance audit',
  'Manual NVDA / VoiceOver testing',
  'axe-core + WAVE automated scans',
  'Developer-ready remediation roadmap',
];

const CONSULTING_AREAS = [
  {
    id: 'asaaps',
    title: ASAAPS_HEADER,
    description: ASAAPS_DESC,
    deliverables: ASAAPS_DELIVERABLES,
    href: '/services/consulting/asaaps',
    contactHref: '/contact?inquiry=consulting',
  },
  {
    id: 'ai-integration',
    title: AI_INTEGRATION_HEADER,
    description: AI_INTEGRATION_DESC,
    deliverables: AI_INTEGRATION_DELIVERABLES,
    href: '/services/consulting/ai-integration',
    contactHref: '/contact?inquiry=consulting',
  },
  {
    id: 'qa',
    title: QA_HEADER,
    description: QA_DESC,
    deliverables: QA_DELIVERABLES,
    href: '/services/consulting/qa',
    contactHref: '/contact?inquiry=qa',
  },
];

const ConsultingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="breadcrumb-row product-page">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata
            title={CONSULTING_META_TITLE}
            description={CONSULTING_META_DESC}
            canonical={`${HOME_URL}/services/consulting`}
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
              href="/services"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                navigate('/services');
              }}
            >
              Services
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{CONSULTING_HEADER}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row className="content-row">
        <main
          id="main"
          aria-label={CONSULTING_HEADER}
          className="product-page"
          data-testid="consulting-hub"
        >
          <Col>
            <Row>
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <section className="product-overview">
                  <h2>{CONSULTING_HEADER}</h2>
                  <p>{CONSULTING_INTRO}</p>
                  {/* <CalendlyButton label="Schedule a Discovery Call" /> */}

                  <Row>
                    {CONSULTING_AREAS.map(area => (
                      <Col
                        key={area.id}
                        xs={12}
                        lg={4}
                        className="consulting-service-card"
                        data-testid={`consulting-card-${area.id}`}
                      >
                        <div className="service-card-inner">
                          <div>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                            <ul>
                              {area.deliverables.map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                          </div>
                          <Button
                            variant="outline-primary"
                            className="mt-3 w-100 learn-more-btn"
                            onClick={() => navigate(area.href)}
                            data-testid={`consulting-card-${area.id}-learn-more-btn`}
                          >
                            Learn More
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </section>
              </Col>
            </Row>
            <Row className="getStartedRow">
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <GetStartedSection page="consulting" />
              </Col>
            </Row>
          </Col>
        </main>
      </Row>
    </>
  );
};

export default ConsultingPage;
