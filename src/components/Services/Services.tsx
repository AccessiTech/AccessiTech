import { Breadcrumb, Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';

import './Services.scss';

export const CLICK_TO_COPY = 'click to copy link';
export const COPY_SUCCESS_MESSAGE = 'Copied!';
export const COPY_FAIL_MESSAGE = 'Unable to copy to clipboard';
export const PURPOSE_PIC_ALT = 'Image Credit: Urupong from Ghetty Images';

// CONSULTING
export const CONSULTING_HEADER = 'Consulting';
export const CONSULTING_INTRO = `AccessiTech Consulting works with organizations closing the accountability gap and building accessibility into systems from the ground up—not as an afterthought. Our client engagements are founder-led, remote-first, and structured around three core service areas:`;
export const ASAAPS_HEADER = 'Accessible Software as a Product/Service (ASaaPs)';
export const ASAAPS_DESC = `We build digital products and services designed for accessibility from day one. Whether you're launching a new platform, refactoring a legacy system, or embedding AI features into existing tools, ASaaPs engagements ensure WCAG 2.2 AA compliance is the structural requirement, not the compliance checkbox. All deliverables are screen-reader tested, keyboard navigable, and built to be maintained by your team after handoff.`;
export const AI_INTEGRATION_HEADER = 'Agentic Intelligence Integration';
export const AI_INTEGRATION_DESC = `Organizations that adopt AI need governance frameworks. These frameworks must account for the people the AI affects. We deploy the EndogenAI methodology — an open-source approach your team can audit, own, and extend. There is no vendor lock-in. The model is simple: the methodology is free, the implementation support is paid. We help you build governance into daily work from the start.`;
export const QA_HEADER = 'Quality Assurance and Testing';
export const QA_DESC = `We run WCAG compliance audits, usability testing, and accessibility QA. Every audit tests against WCAG 2.2 AA. We find barriers before they reach production and give your team a clear roadmap to fix them. Our audits include manual screen reader testing with NVDA and VoiceOver, automated scans with axe and WAVE, and plain-language reports your whole team can use.`;
export const CONSULTING_CTA = 'Schedule a Discovery Call';
export const ASAAPS_SHORT =
  'Build accessible software from day one — WCAG 2.2 AA as a structural requirement, not a retrofit.';
export const AI_INTEGRATION_SHORT =
  'Deploy the EndogenAI governance framework for accountable, auditable AI systems without vendor lock-in.';
export const QA_SHORT =
  'WCAG 2.2 AA audits, manual screen reader testing (NVDA/VoiceOver), and developer-ready remediation roadmaps.';

// MENTORSHIP
export const MENTORSHIP_HEADER = 'Mentorship';
export const MENTORSHIP_INTRO = `AccessiTech Mentorship offers structured teaching and training for teams and individuals embedding accessibility into their practice. We work with career-switchers, junior developers, and corporate teams building internal accessibility expertise. Our mentorship model is tiered—free resources for community learning, paid programs for deeper engagement.`;
export const CCCS_HEADER = 'Course and Content Creation (CCCs)';
export const CCCS_DESC = `CCCs are skill-building resources covering WCAG compliance (free), web accessibility best practices (freemium), and visual and video design with open-source tools (freemium). The content works for self-paced learners and structured cohorts. WCAG 2.2 content is a public good — no paywall, no account needed. Accessibility education should not require a budget.`;
export const COACHING_HEADER = '1:1 Coaching and Corporate Workshops';
export const COACHING_DESC = `We offer one-on-one mentorship for people moving into accessible tech careers. We also run half-day to multi-day workshops for organizations. Workshop topics include: embedding accessibility into Agile sprints, screen reader testing for QA teams, disability justice for design leads, and AI governance for product managers. Every session is recorded with closed captions and includes follow-up resources.`;
export const OPENCLASSROOMS_HEADER = 'OpenClassrooms Partnership';
export const OPENCLASSROOMS_DESC = `Through mid-2025, conor mentored OpenClassrooms students — career-switchers learning web development, UX design, and project management. That experience shapes how AccessiTech Mentorship works today. We focus on accessible education for people building new careers, grounded in real project work and accountability to professional standards.`;
export const SOTC_HEADER = 'State of the Code (SOTC)';
export const SOTC_DESC = `Coming soon—a community-driven initiative bringing Disabled Designers and Developers (DDDs) together to share knowledge, review open-source contributions, and build collective expertise in accessible systems design. Free to participate; open to all.`;
export const MENTORSHIP_CTA = 'Schedule a Discovery Call';

export const LearnMoreInlineLink = ({ href }: { href: string }) => (
  <Link to={href} className="learn-more-inline-link">
    {`Learn more >>`}
  </Link>
);

const Services = ({ hub = false }: { hub?: boolean }) => {
  const navigate = useNavigate();
  const md = hub ? { span: 8, offset: 2 } : { span: 8, offset: 2 };
  const xl = hub ? { span: 6 } : { span: 4, offset: 0 };
  return (
    <section id="services-row" data-testid="services">
      {/* CONSULTING */}
      <Row className={`services-row consulting ${hub ? 'hub-header-row' : ''}`}>
        <Col sm={12} md={md}>
          {hub && (
            <Breadcrumb className="breadcrumb-container">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Services</Breadcrumb.Item>
            </Breadcrumb>
          )}
          <div className="service-section">
            <SectionHeader
              title={CONSULTING_HEADER}
              id="consulting"
              use="h2"
              linkTitle={CLICK_TO_COPY}
              successText={COPY_SUCCESS_MESSAGE}
              failText={COPY_FAIL_MESSAGE}
            />
            <p>{CONSULTING_INTRO}</p>
            <Row className="service-area-cards">
              <Col key="asaaps" xs={12} xl={xl} className="service-area-card-col">
                <article className="service-area-card">
                  <h3>{ASAAPS_HEADER}</h3>
                  <p>
                    {ASAAPS_DESC}
                    <LearnMoreInlineLink href="/services/consulting/asaaps" />
                  </p>
                </article>
              </Col>

              <Col key="ai-integration" xs={12} xl={xl} className="service-area-card-col">
                <article className="service-area-card">
                  <h3>{AI_INTEGRATION_HEADER}</h3>
                  <p>
                    {AI_INTEGRATION_DESC}
                    <LearnMoreInlineLink href="/services/consulting/ai-integration" />
                  </p>
                </article>
              </Col>

              <Col key="qa" xs={12} xl={xl} className="service-area-card-col">
                <article className="service-area-card">
                  <h3>{QA_HEADER}</h3>
                  <p>
                    {QA_DESC}
                    <LearnMoreInlineLink href="/services/consulting/qa" />
                  </p>
                </article>
              </Col>
            </Row>

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
          </div>
        </Col>
      </Row>
      {/* MENTORSHIP */}
      <Row className={`services-row mentorship ${hub ? 'hub-header-row' : ''}`}>
        <Col sm={12} md={md}>
          <div className="service-section">
            <div>
              <SectionHeader
                title={MENTORSHIP_HEADER}
                id="mentorship"
                use="h2"
                linkTitle={CLICK_TO_COPY}
                successText={COPY_SUCCESS_MESSAGE}
                failText={COPY_FAIL_MESSAGE}
              />
              <p>{MENTORSHIP_INTRO}</p>
              <Row className="service-area-cards">
                <Col key="cccs" xs={12} xl={xl} className="service-area-card-col">
                  <article className="service-area-card">
                    <h3>{CCCS_HEADER}</h3>
                    <p>
                      {CCCS_DESC}
                      <LearnMoreInlineLink href="/services/mentorship/cccs" />
                    </p>
                  </article>
                </Col>

                <Col key="coaching" xs={12} xl={xl} className="service-area-card-col">
                  <h3>{COACHING_HEADER}</h3>
                  <p>
                    {COACHING_DESC}
                    <LearnMoreInlineLink href="/services/mentorship/coaching" />
                  </p>
                </Col>

                {/* <Col key="openclassrooms" xs={12} xl={xl} className="service-area-card-col">
                  <h3>{OPENCLASSROOMS_HEADER}</h3>
                  <p>
                    {OPENCLASSROOMS_DESC}
                    <LearnMoreInlineLink href="/services/mentorship/openclassrooms" />
                  </p>
                </Col> */}

                <Col key="sotc" xs={12} xl={xl} className="service-area-card-col">
                  <h3>{SOTC_HEADER}</h3>
                  <p>
                    {SOTC_DESC}
                    <LearnMoreInlineLink href="/services/mentorship/sotc" />
                  </p>
                </Col>
              </Row>
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
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
