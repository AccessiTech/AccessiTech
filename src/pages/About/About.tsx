import { Row, Col, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Metadata from '../../components/Metadata/Metadata';
import GetStartedSection from '../../components/GetStartedSection/GetStartedSection';
import { HOME_URL } from '../../settings/strings';
import './About.scss';

// ── Metadata ────────────────────────────────────────────────────────────────
export const ABOUT_META_TITLE = 'About | AccessiTech';
export const ABOUT_META_DESC =
  'Conor Kelly — disabled design technologist, founder, and CEO. 18 years building accessible, equitable digital systems.';

// ── Page intro ──────────────────────────────────────────────────────────────
export const ABOUT_H2 = 'About conor';
export const ABOUT_INTRO =
  "Disabled design technologist, founder, and CEO. Eighteen years building accessible, equitable digital systems across neuroscience, education, humanitarian data, and enterprise tech — and a career-defining turn that made disability experience a practice, not a personal narrative. Here's how it adds up.";

// ── Section 1: The 18-Year Pattern ──────────────────────────────────────────
export const ABOUT_S1_HEADING = 'The 18-Year Pattern';
export const ABOUT_S1_P1 =
  "From neuroscience labs to EdTech platforms to humanitarian data systems — different sectors, different teams, different stakes. The same gap appeared every time: systems built without genuine consideration for the people who depend on them most. Not as bugs. As structural choices, made by rooms that didn't include the right people. That breadth wasn't accidental — it's what let me see the same pattern across industries that rarely benchmark against each other.";
export const ABOUT_S1_QUOTE =
  "After a career, that pattern isn't an observation. It's a practice foundation.";

// ── Section 2: Education & Career Breadth ───────────────────────────────────
export const ABOUT_S2_HEADING = 'Education & Career Breadth';
export const ABOUT_S2_P1 =
  "The thread starts at Cornish College of the Arts \u2014 where design meant understanding people before making anything for them. That instinct sharpened into method at the University of Washington, where I earned a master's in Human Computer Interaction + Design, grounding intuition in research methodology and systems thinking.";
export const ABOUT_S2_P2 =
  'Eighteen years across sectors followed: neuroscience research, university education platforms, humanitarian data systems, and enterprise tech — including software engineering at Red Hat. Each domain added a different lens. Research demanded rigor. Humanitarian work demanded radical accessibility under constraint. Enterprise tech demanded systems that scale. None of them had solved the gap.';

// ── Section 3: The Turning Point ────────────────────────────────────────────
export const ABOUT_S3_HEADING = 'The Turning Point';
export const ABOUT_S3_P1 =
  'In 2020, I was diagnosed with Psoriatic Arthritis. Deep fissures across my palms made sustained keyboard work acutely painful. For eighteen months on disability leave, the question stopped being "when do I go back?" and became "can I go back at all?" I tested every assistive technology I could find. Most fell short of the actual demands of the work.';
export const ABOUT_S3_P2 =
  'GitHub Copilot changed that. And with it came a reframe that reorganized everything I thought I knew about what this career could be:';
export const ABOUT_S3_QUOTE =
  'Disabled people build software too. "Nothing about us without us" applies to the builders of digital systems — not just the users.';

// ── Section 4: Nothing About Us Without Us ──────────────────────────────────
export const ABOUT_S4_HEADING = 'Nothing About Us Without Us';
export const ABOUT_S4_P1 =
  "That reframe isn't a slogan. It's a structural observation with consequences.";
export const ABOUT_S4_P2 =
  "Here's what I learned the hard way: the people most excluded from a system are the people best positioned to fix it. That's not inspiration — that's structural truth. When I'm designing something and I can't use it (Psoriatic Arthritis + a mouse-dependent workflow = dead end), that's not my problem to solve alone. That's everyone's problem to solve together. Disability justice and accessibility-first design aren't compliance boxes. They're the scaffolding for systems that actually work for everyone.";
export const ABOUT_S4_P3_A =
  "A disabled design technologist who becomes a founder and CEO isn't an unusual success story — it's a correction to a longstanding gap. Who builds digital infrastructure is a justice question. When the people most affected by a system's failures are excluded from building it, the failures compound. Disability experience isn't a personal narrative I bring alongside the technical skills. It ";
export const ABOUT_S4_P3_EM = 'is';
export const ABOUT_S4_P3_B =
  " a technical skill — one that produces better software, surfaces failure modes early, and builds systems that don't need to be retrofitted for inclusion later.";
export const ABOUT_S4_P4 =
  "Accessibility-first design isn't a niche practice for edge cases. It's the standard that makes software legible to everyone — including the users organizations haven't thought to design for yet.";

// ── Section 5: Why AccessiTech ───────────────────────────────────────────────
export const ABOUT_S5_HEADING = 'Why AccessiTech';
export const ABOUT_S5_P1 = 'AccessiTech is how all of this becomes work you can hire.';
export const ABOUT_S5_CONSULTING_LABEL = 'Consulting';
export const ABOUT_S5_CONSULTING_DESC =
  'centers three pillars: Design and Development — Accessible Software as a Product/Service (ASaaPs) for organizations building accessibility from day one; Agentic Intelligence Integration for responsible AI adoption with governance that sticks; and Quality Assurance and Testing to catch barriers before they reach production.';
export const ABOUT_S5_MENTORSHIP_LABEL = 'Mentorship';
export const ABOUT_S5_MENTORSHIP_DESC =
  "is flexible by design. Engagement formats range from 1:1 coaching sessions to multi-day corporate workshops — scope shaped by your team's needs. We work with individuals navigating career transitions and corporate teams building internal accessibility expertise.";
export const ABOUT_S5_PRODUCTS_LABEL = 'Products';
export const ABOUT_S5_PRODUCTS_DESC =
  "— WCAG training, open-source tools, and community programs — are free or freemium by intent. Trust is built in public before it's contracted in private.";
export const ABOUT_S5_CLOSING =
  'Each is a different way in. What they share is accountability to the people the system affects.';

// ── Founder signature ────────────────────────────────────────────────────────
export const ABOUT_SIGNATURE = '— conor kelly, founder & CEO';

// ── GetStarted section ───────────────────────────────────────────────────────
export const ABOUT_GS_LEFT =
  "30 minutes, no commitment. We'll discuss your accessibility goals, AI governance needs, and which service line fits.";
export const ABOUT_GS_RIGHT =
  'Not ready for a call yet? The contact form is equally a good place to start — 24-hour response.';

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="breadcrumb-row about-page">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata
            title={ABOUT_META_TITLE}
            description={ABOUT_META_DESC}
            canonical={`${HOME_URL}/about`}
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
            <Breadcrumb.Item active>About</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row className="content-row">
        <main id="main" aria-label="About the Founder" className="about-page">
          <Col>
            <Row className="pl-0 pr-0">
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <h2>{ABOUT_H2}</h2>
                <p>{ABOUT_INTRO}</p>
                <section className="about-section about-hero">
                  <h3>{ABOUT_S1_HEADING}</h3>
                  <p>{ABOUT_S1_P1}</p>
                  <blockquote className="about-pull-quote">
                    <p>{ABOUT_S1_QUOTE}</p>
                  </blockquote>
                </section>

                <section className="about-section about-background">
                  <h3>{ABOUT_S2_HEADING}</h3>
                  <p>{ABOUT_S2_P1}</p>
                  <p>{ABOUT_S2_P2}</p>
                </section>
              </Col>
            </Row>
            <Row className="about-turning-point">
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <section className="about-section about-turning-point">
                  <h3>{ABOUT_S3_HEADING}</h3>
                  <p>{ABOUT_S3_P1}</p>
                  <p>{ABOUT_S3_P2}</p>
                  <blockquote className="about-pull-quote">
                    <p>{ABOUT_S3_QUOTE}</p>
                  </blockquote>
                </section>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <section className="about-section about-philosophy">
                  <h3>{ABOUT_S4_HEADING}</h3>
                  <p>{ABOUT_S4_P1}</p>
                  <p>{ABOUT_S4_P2}</p>
                  <p>
                    {ABOUT_S4_P3_A}
                    <em>{ABOUT_S4_P3_EM}</em>
                    {ABOUT_S4_P3_B}
                  </p>
                  <p>{ABOUT_S4_P4}</p>
                </section>

                <section className="about-section about-services">
                  <h3>{ABOUT_S5_HEADING}</h3>
                  <p>{ABOUT_S5_P1}</p>
                  <p>
                    <strong>{ABOUT_S5_CONSULTING_LABEL}</strong> {ABOUT_S5_CONSULTING_DESC}
                  </p>
                  <p>
                    <strong>{ABOUT_S5_MENTORSHIP_LABEL}</strong> {ABOUT_S5_MENTORSHIP_DESC}
                  </p>
                  <p>
                    <strong>{ABOUT_S5_PRODUCTS_LABEL}</strong> {ABOUT_S5_PRODUCTS_DESC}
                  </p>
                  <p>{ABOUT_S5_CLOSING}</p>
                </section>

                <p className="founder-signature">{ABOUT_SIGNATURE}</p>
              </Col>
            </Row>
            <Row className="getStartedRow">
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <GetStartedSection
                  page="about"
                  inquiryParam="consulting"
                  leftParagraph={ABOUT_GS_LEFT}
                  rightParagraph={ABOUT_GS_RIGHT}
                />
              </Col>
            </Row>
          </Col>
        </main>
      </Row>
    </>
  );
};

export default About;
