import { Row, Col, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Metadata from '../../components/Metadata/Metadata';
import GetStartedSection from '../../components/GetStartedSection/GetStartedSection';
import { HOME_URL } from '../../settings/strings';
import './About.scss';

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="breadcrumb-row about-page">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata
            title="About | AccessiTech"
            description="Conor Kelly — disabled design technologist, founder, and CEO. 18 years building accessible, equitable digital systems."
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

      <main id="main" aria-label="About the Founder">
        <section className="about-section about-hero">
          <h2>The 18-Year Pattern</h2>
          <p>
            From neuroscience labs to EdTech platforms to humanitarian data systems — different
            sectors, different teams, different stakes. The same gap appeared every time: systems
            built without genuine consideration for the people who depend on them most. Not as bugs.
            As structural choices, made by rooms that didn't include the right people. That breadth
            wasn't accidental — it's what let me see the same pattern across industries that rarely
            benchmark against each other.
          </p>
          <blockquote className="about-pull-quote">
            <p>After a career, that pattern isn't an observation. It's a practice foundation.</p>
          </blockquote>
        </section>

        <section className="about-section about-background">
          <h2>Education &amp; Career Breadth</h2>
          <p>
            The thread starts at Cornish College of the Arts — where design meant understanding
            people before making anything for them. That instinct sharpened into method at the
            University of Washington, where I earned a master's in Human Computer Interaction +
            Design, grounding intuition in research methodology and systems thinking.
          </p>
          <p>
            Eighteen years across sectors followed: neuroscience research, university education
            platforms, humanitarian data systems, and enterprise tech — including software
            engineering at Red Hat. Each domain added a different lens. Research demanded rigor.
            Humanitarian work demanded radical accessibility under constraint. Enterprise tech
            demanded systems that scale. None of them had solved the gap.
          </p>
        </section>

        <section className="about-section about-turning-point">
          <h2>The Turning Point</h2>
          <p>
            In 2020, I was diagnosed with Psoriatic Arthritis. Deep fissures across my palms made
            sustained keyboard work acutely painful. For eighteen months on disability leave, the
            question stopped being "when do I go back?" and became "can I go back at all?" I tested
            every assistive technology I could find. Most fell short of the actual demands of the
            work.
          </p>
          <p>
            GitHub Copilot changed that. And with it came a reframe that reorganized everything I
            thought I knew about what this career could be:
          </p>
          <blockquote className="about-pull-quote">
            <p>
              Disabled people build software too. "Nothing about us without us" applies to the
              builders of digital systems — not just the users.
            </p>
          </blockquote>
        </section>

        <section className="about-section about-philosophy">
          <h2>Nothing About Us Without Us</h2>
          <p>That reframe isn't a slogan. It's a structural observation with consequences.</p>
          <p>
            Here's what I learned the hard way: the people most excluded from a system are the
            people best positioned to fix it. That's not inspiration — that's structural truth.
            When I'm designing something and I can't use it (Psoriatic Arthritis + a
            mouse-dependent workflow = dead end), that's not my problem to solve alone. That's
            everyone's problem to solve together. Disability justice and accessibility-first design
            aren't compliance boxes. They're the scaffolding for systems that actually work for
            everyone.
          </p>
          <p>
            A disabled design technologist who becomes a founder and CEO isn't an unusual success
            story — it's a correction to a longstanding gap. Who builds digital infrastructure is a
            justice question. When the people most affected by a system's failures are excluded from
            building it, the failures compound. Disability experience isn't a personal narrative I
            bring alongside the technical skills. It <em>is</em> a technical skill — one that
            produces better software, surfaces failure modes early, and builds systems that don't
            need to be retrofitted for inclusion later.
          </p>
          <p>
            Accessibility-first design isn't a niche practice for edge cases. It's the standard that
            makes software legible to everyone — including the users organizations haven't thought
            to design for yet.
          </p>
        </section>

        <section className="about-section about-services">
          <h2>Why AccessiTech</h2>
          <p>AccessiTech is how all of this becomes work you can hire.</p>
          <p>
            <strong>Consulting</strong> centers three pillars: Design and Development through
            Accessible Software as a Product/Service (ASaaPs) for organizations building
            accessibility in from day one; Agentic Intelligence Integration for responsible AI
            adoption with governance that sticks; and Quality Assurance and Testing to catch
            barriers before they reach production.
          </p>
          <p>
            <strong>Mentorship</strong> is flexible by design. Engagement formats range from 1:1
            coaching sessions to multi-day corporate workshops — scope shaped by your team's needs.
            We work with individuals navigating career transitions and corporate teams building
            internal accessibility expertise.
          </p>
          <p>
            <strong>Products</strong> — WCAG training, open-source tools, and community programs —
            are free or freemium by intent. Trust is built in public before it's contracted in
            private.
          </p>
          <p>
            Each is a different way in. What they share is accountability to the people the system
            affects.
          </p>
        </section>

        <p className="founder-signature">— conor kelly, founder &amp; CEO</p>

        <GetStartedSection
          page="about"
          inquiryParam="consulting"
          leftParagraph="30 minutes, no commitment. We'll discuss your accessibility goals, AI governance needs, and which service line fits."
          rightParagraph="Not ready for a call yet? The contact form is equally a good place to start — 24-hour response."
        />
      </main>
    </>
  );
};

export default About;
