import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Button, Col, Row } from 'react-bootstrap';
import Metadata from '../../components/Metadata/Metadata';
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton';
import { HOME_URL } from '../../settings/strings';
import {
  MENTORSHIP_HEADER,
  MENTORSHIP_INTRO,
  CCCS_HEADER,
  CCCS_DESC,
  COACHING_HEADER,
  COACHING_DESC,
  OPENCLASSROOMS_HEADER,
  OPENCLASSROOMS_DESC,
  SOTC_HEADER,
  SOTC_DESC,
} from '../../components/Services/Services';

const MENTORSHIP_AREAS = [
  {
    id: 'cccs',
    title: CCCS_HEADER,
    description: CCCS_DESC,
    deliverables: [
      'WCAG 2.2 compliance content (free, no paywall)',
      'Web accessibility best practices (freemium)',
      'Visual and video design with open-source tools (freemium)',
      'Self-paced and cohort-based learning options',
    ],
    href: '/services/mentorship/cccs',
    contactHref: '/contact?inquiry=mentorship',
  },
  {
    id: 'coaching',
    title: COACHING_HEADER,
    description: COACHING_DESC,
    deliverables: [
      '1:1 mentorship for accessible tech careers',
      'Half-day to multi-day corporate workshops',
      'Topics: Agile accessibility, QA testing, disability justice, AI governance',
      'Closed captions + follow-up resources for all sessions',
    ],
    href: '/services/mentorship/coaching',
    contactHref: '/contact?inquiry=mentorship',
  },
  {
    id: 'openclassrooms',
    title: OPENCLASSROOMS_HEADER,
    description: OPENCLASSROOMS_DESC,
    deliverables: [
      'Career-switcher mentorship (web dev, UX design, project management)',
      'Real project work with professional accountability',
      'OpenClassrooms partnership and curriculum integration',
      'Grounded in accessible education principles',
    ],
    href: '/services/mentorship/openclassrooms',
    contactHref: '/contact?inquiry=mentorship',
  },
  {
    id: 'sotc',
    title: SOTC_HEADER,
    description: SOTC_DESC,
    deliverables: [
      'Disabled Designers and Developers (DDDs) community',
      'Knowledge sharing and best practices exchange',
      'Open-source contribution reviews',
      'Collective expertise building in accessible design',
    ],
    href: '/services/mentorship/sotc',
    contactHref: '/contact?inquiry=mentorship',
  },
];

const MentorshipPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="breadcrumb-row product-page">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata
            title="Mentorship | AccessiTech"
            description="AccessiTech Mentorship: courses, 1:1 coaching, and corporate workshops for teams and individuals building accessibility into their practice."
            canonical={`${HOME_URL}/services/mentorship`}
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
            <Breadcrumb.Item active>{MENTORSHIP_HEADER}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row className="content-row">
        <main
          id="main"
          aria-label={MENTORSHIP_HEADER}
          className="product-page"
          data-testid="mentorship-hub"
        >
          <Col>
            <Row>
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <section className="product-overview">
                  <h2>{MENTORSHIP_HEADER}</h2>
                  <p>{MENTORSHIP_INTRO}</p>

                  <Row>
                    {MENTORSHIP_AREAS.map(area => (
                      <Col
                        key={area.id}
                        xs={12}
                        lg={6}
                        className="mentorship-service-card"
                        data-testid={`mentorship-card-${area.id}`}
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
                            variant="outline-primary learn-more-btn"
                            className="mt-3 w-100"
                            onClick={() => navigate(area.href)}
                            data-testid={`mentorship-card-${area.id}-learn-more-btn`}
                          >
                            Learn More
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </section>

                <hr />

                <section className="product-next-steps">
                  <h3>Get Started</h3>
                  <p>
                    Not sure which mentorship path fits your needs? A discovery call is the best
                    starting point — no commitment required.
                  </p>
                  <CalendlyButton label="Schedule a Discovery Call" />
                  <Button
                    variant="outline-primary"
                    className="ms-2"
                    onClick={() => navigate('/contact?inquiry=mentorship')}
                    data-testid="mentorship-hub-message-btn"
                  >
                    Send us a message
                  </Button>
                </section>
              </Col>
            </Row>
          </Col>
        </main>
      </Row>
    </>
  );
};

export default MentorshipPage;
