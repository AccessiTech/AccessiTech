import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';
import CalendlyButton from '../CalendlyButton/CalendlyButton';
import { CTA_HEADER, CTA_P1, CTA_P2 } from '../../pages/Home/Home';
import {
  PURPOSE_PIC_SIZES,
  PURPOSE_PIC_SRCSET,
  PURPOSE_PIC_URL_1024,
} from '../../settings/settings';
import './Services.scss';

export const CLICK_TO_COPY = 'click to copy link';
export const COPY_SUCCESS_MESSAGE = 'Copied!';
export const COPY_FAIL_MESSAGE = 'Unable to copy to clipboard';
export const PURPOSE_PIC_ALT = 'Image Credit: Urupong from Ghetty Images';

// CONSULTING
export const CONSULTING_HEADER = 'Consulting';
export const CONSULTING_INTRO = `AccessiTech Consulting works with organizations closing the accountability gap and building accessibility into systems from the ground up—not as an afterthought. Our client engagements are founder-led, remote-first, and structured around three core service areas:`;
export const ASAAPS_HEADER =
  'Design and Development — Accessible Software as a Product/Service (ASaaPs)';
export const ASAAPS_DESC = `We build digital products and services designed for accessibility from day one. Whether you're launching a new platform, refactoring a legacy system, or embedding AI features into existing tools, ASaaPs engagements ensure WCAG 2.2 AA compliance is the structural requirement, not the compliance checkbox. All deliverables are screen-reader tested, keyboard navigable, and built to be maintained by your team after handoff.`;
export const AI_INTEGRATION_HEADER = 'Agentic Intelligence Integration';
export const AI_INTEGRATION_DESC = `Organizations adopting AI systems need governance frameworks that account for the people those systems affect. We deploy the EndogenAI methodology—an open-source approach to AI governance that your team can audit, own, and extend without vendor lock-in. This is the Red Hat model applied to AI accountability: free methodology, paid implementation. We help you embed governance into daily operations, not bolt it on after launch.`;
export const QA_HEADER = 'Quality Assurance and Testing';
export const QA_DESC = `WCAG compliance audits, UX usability testing, and QA engineering for accessible digital systems. We test against WCAG 2.2 AA standards, identify barriers before they reach production, and provide remediation roadmaps your developers can execute. Our audits include manual screen reader testing (NVDA, VoiceOver), automated accessibility scans (axe, WAVE), and plain-language documentation suitable for non-technical stakeholders.`;
export const CONSULTING_CTA = 'Schedule a Discovery Call';
export const ASAAPS_SHORT =
  'Build accessible software from day one — WCAG 2.2 AA as a structural requirement, not a retrofit.';
export const AI_INTEGRATION_SHORT =
  'Deploy the EndogenAI governance framework for accountable, auditable AI systems without vendor lock-in.';
export const QA_SHORT =
  'WCAG 2.2 AA audits, manual screen reader testing (NVDA/VoiceOver), and developer-ready remediation roadmaps.';

const COMPACT_AREAS = [
  { id: 'asaaps', title: ASAAPS_HEADER, short: ASAAPS_SHORT, href: '/services/consulting/asaaps' },
  {
    id: 'ai-integration',
    title: AI_INTEGRATION_HEADER,
    short: AI_INTEGRATION_SHORT,
    href: '/services/consulting/ai-integration',
  },
  { id: 'qa', title: QA_HEADER, short: QA_SHORT, href: '/services/consulting/qa' },
];

// MENTORSHIP
export const MENTORSHIP_HEADER = 'Mentorship';
export const MENTORSHIP_INTRO = `AccessiTech Mentorship offers structured teaching and training for teams and individuals embedding accessibility into their practice. We work with career-switchers, junior developers, and corporate teams building internal accessibility expertise. Our mentorship model is tiered—free resources for community learning, paid programs for deeper engagement.`;
export const CCCS_HEADER = 'Course and Content Creation (CCCs)';
export const CCCS_DESC = `Skillbuilding-focused educational content spanning WCAG compliance (completely free), web accessibility best practices (freemium), and visual/video design using free and open-source tools (freemium). CCCs are designed for self-paced learning and structured cohorts. WCAG 2.2 content is offered as a public good—no paywall, no gating—because accessibility education shouldn't require a budget.`;
export const COACHING_HEADER = '1:1 Coaching and Corporate Workshops';
export const COACHING_DESC = `Personalized mentorship for individuals navigating career transitions into accessible tech, and half-day to multi-day workshops for organizations training internal teams. Workshops cover: embedding accessibility into Agile sprints, screen reader testing for QA teams, disability justice principles for design leads, and AI governance for product managers. All sessions are recorded (with closed captions) and include follow-up resources.`;
export const OPENCLASSROOMS_HEADER = 'OpenClassrooms Partnership';
export const OPENCLASSROOMS_DESC = `Through mid-2025, conor served as a mentor for OpenClassrooms students—career-switchers building skills in web development, UX design, and project management. That operational precedent informs how AccessiTech Mentorship works today: accessible education for people building second or third chapters, grounded in real-world project work and accountability to community standards.`;
export const SOTC_HEADER = 'State of the Code (SOTC)';
export const SOTC_DESC = `Coming soon—a community-driven initiative bringing Disabled Designers and Developers (DDDs) together to share knowledge, review open-source contributions, and build collective expertise in accessible systems design. Free to participate; open to all.`;
export const MENTORSHIP_CTA = 'Schedule a Discovery Call';

const Services = ({ compact = false }: { compact?: boolean }) => {
  const navigate = useNavigate();

  return (
    <section id="services-row" data-testid="services">
      <Row className="services-header-row">
        <Col
          xs={12}
          md={{ span: 5, offset: 1 }}
          xl={{ span: 6, offset: 1 }}
          className="text-center text-md-start"
        >
          <SectionHeader
            title={CTA_HEADER}
            id="services"
            use="h2"
            linkTitle={CLICK_TO_COPY}
            successText={COPY_SUCCESS_MESSAGE}
            failText={COPY_FAIL_MESSAGE}
          />
          <p>{CTA_P1}</p>
          <CalendlyButton label="Schedule a Discovery Call" />
          <p className="mt-3">{CTA_P2}</p>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              navigate('/contact');
            }}
          >
            Send us a message
          </Button>
        </Col>
        <Col
          className="purpose-image"
          xs={{ span: 6, offset: 3 }}
          md={{ span: 4, offset: 0 }}
          lg={{ span: 3, offset: 1 }}
          xl={{ span: 2, offset: 1 }}
          aria-label="image"
        >
          <img
            srcSet={PURPOSE_PIC_SRCSET}
            sizes={PURPOSE_PIC_SIZES}
            src={PURPOSE_PIC_URL_1024}
            className="purpose-picture"
            alt={PURPOSE_PIC_ALT}
            title={PURPOSE_PIC_ALT}
          />
        </Col>
      </Row>

      <Row className="services-row">
        {/* CONSULTING */}
        <Col sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 5, offset: 1 }}>
          <article className="service-section">
            <div>
              <SectionHeader
                title={CONSULTING_HEADER}
                id="consulting"
                use="h3"
                linkTitle={CLICK_TO_COPY}
                successText={COPY_SUCCESS_MESSAGE}
                failText={COPY_FAIL_MESSAGE}
              />
              <p>{CONSULTING_INTRO}</p>

              {compact ? (
                <ul className="consulting-compact-list" data-testid="consulting-compact-list">
                  {COMPACT_AREAS.map(({ id, title, short, href }) => (
                    <li key={id}>
                      <strong>{title}</strong>
                      <p>{short}</p>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        data-testid={`consulting-learn-more-${id}`}
                        onClick={() => navigate(href)}
                      >
                        Learn more
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <h4>{ASAAPS_HEADER}</h4>
                  <p>{ASAAPS_DESC}</p>

                  <h4>{AI_INTEGRATION_HEADER}</h4>
                  <p>{AI_INTEGRATION_DESC}</p>

                  <h4>{QA_HEADER}</h4>
                  <p>{QA_DESC}</p>
                </>
              )}
            </div>
            {compact ? (
              <div className="consulting-compact-ctas">
                <Button
                  size="lg"
                  variant="secondary"
                  data-testid="explore-consulting-btn"
                  onClick={() => navigate('/services/consulting')}
                >
                  Explore all consulting
                </Button>
                <Button
                  size="lg"
                  variant="outline-primary"
                  className="mt-2"
                  data-testid="reach-out-consulting-btn"
                  onClick={() => navigate('/contact?inquiry=consulting')}
                >
                  Reach out directly
                </Button>
              </div>
            ) : (
              <Button
                size="lg"
                variant="primary"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  navigate('/contact?inquiry=consulting');
                }}
              >
                {CONSULTING_CTA}
              </Button>
            )}
          </article>
        </Col>

        {/* MENTORSHIP */}
        <Col sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 5, offset: 0 }}>
          <article className="service-section">
            <div>
              <SectionHeader
                title={MENTORSHIP_HEADER}
                id="mentorship"
                use="h3"
                linkTitle={CLICK_TO_COPY}
                successText={COPY_SUCCESS_MESSAGE}
                failText={COPY_FAIL_MESSAGE}
              />
              <p>{MENTORSHIP_INTRO}</p>

              <h4>{CCCS_HEADER}</h4>
              <p>{CCCS_DESC}</p>

              <h4>{COACHING_HEADER}</h4>
              <p>{COACHING_DESC}</p>

              <h4>{OPENCLASSROOMS_HEADER}</h4>
              <p>{OPENCLASSROOMS_DESC}</p>

              <h4>{SOTC_HEADER}</h4>
              <p>{SOTC_DESC}</p>
            </div>
            <Button
              size="lg"
              variant="primary"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                navigate('/contact?inquiry=mentorship');
              }}
            >
              {MENTORSHIP_CTA}
            </Button>
          </article>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
