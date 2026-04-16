import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SplashSocials from '../../components/SplashSocials/SplashSocials';
import { SPLASH_BG } from '../../settings/strings';
import Services from '../../components/Services/Services';
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton';
import './Home.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Metadata from '../../components/Metadata/Metadata';
import metadata from '../../App/meta';

const splashRowStyle = {
  backgroundImage: SPLASH_BG,
};

export const APP_ROOT = 'App Root';
export const SKIP_TO_MAIN_CONTENT = 'Skip to main content';
export const ABOUT_ACCESSITECH = 'About AccessiTech';

// Tagline
export const TAGLINE =
  'Built disabled, not despite it — accessible consulting and development, from websites to AI systems';

// WHY
export const WHY_HEADER = 'Why we exist';
export const WHY_P1 = `Systems fail at the exact moments they matter most. Think about it: the people most impacted by a broken system are almost always the last ones invited to redesign it. That's not accidental. It's structural. We've seen this for generations—in government services, in healthcare platforms, in everyday software. Now it's happening at scale with AI. The accountability gap is growing, and the people most affected? Still not at the table.`;
export const WHY_P2 = `Here's what I learned the hard way: the people most excluded from a system are the people best positioned to fix it. That's not inspiration—that's structural truth. When I'm designing something and I can't use it (Psoriatic Arthritis + a mouse-dependent workflow = dead end), that's not my problem to solve alone. That's everyone's problem to solve together. Disability justice and accessibility-first design aren't compliance boxes. They're the scaffolding for systems that actually work for everyone.`;
export const WHY_P3 = `That's the foundation of AccessiTech. We work three ways: Consulting for organizations ready to redesign at the accountability gap. Mentorship for teams embedding accessibility into daily practice. Products—WCAG training, open-source tooling, custom coaching frameworks—that make accessibility the structural standard, not an afterthought. Each is a different way in. What they share is accountability to the people the system affects.`;

// CTA
export const CTA_HEADER = 'Ready to close the gap?';
export const CTA_P1 = `Schedule a 30-minute discovery call to explore how AccessiTech can help your organization build systems designed to be held accountable by the people they affect. We'll discuss your accessibility goals, AI governance needs, and which service line fits best — Consulting or Mentorship.`;
export const CTA_P2 = `Or send us a message if you're not ready to commit to a call yet. We respond within 24 hours.`;

// WHO
export const WHO_HEADER = 'Who we are';
export const WHO_P1 = `Every organization I've worked with—from neuroscience research to education platforms to humanitarian data systems—the same gap appears: systems built without genuine consideration for the people who depend on them. After a career, that pattern isn't an observation. It's a practice foundation.`;
export const WHO_P2 = `I came to this work through human-centered design—first at Cornish, then sharpened with a graduate degree in Human Computer Interaction + Design at UW. In 2020, Psoriatic Arthritis changed everything. Deep fissures across my palms made sustained keyboard work acutely painful. For eighteen months on disability, the question wasn't when my career would resume—it was whether it would at all. Every assistive technology fell short until GitHub Copilot finally met the real demands of the work. That reframe came from a conversation: disabled people build software too. "Nothing about us without us" applies to the builders of digital systems, not just their users. Who builds infrastructure isn't a diversity question. It's a justice question.`;
export const WHO_P3 = `AccessiTech brings it all together: lived experience proving that accessibility-first design is the standard that actually works, paired with the methodological rigor to operationalize it at scale. I've worked across enough sectors to see: this accountability gap isn't regional or sector-specific. It's structural. That's why I founded AccessiTech—building Open Source Software and offering Mentorship to enrich the community, and offering Consulting Services to help find and mend gaps. Let's find the right fit for yours.`;

// Backwards-compat export (used in existing tests)
export const VISION_P3 = `${WHO_P1} ${WHY_P1}`;

// PRODUCTS
export const PRODUCTS_HEADER = 'Products';
export const PRODUCTS_OVERVIEW_P1 = `AccessiTech Products are the public-facing resources, tools, and thought leadership that demonstrate our methodology and build community before client engagements. These are the artifacts that prove accessibility-first design isn't aspirational—it's operational.`;
export const PRODUCTS_OVERVIEW_P2 = `The WCAG Series offers free educational guides on WCAG 2.2 AA compliance and accessible design patterns. Open Source Software (OSS) and ASaaPs contributions include the EndogenAI methodology and case studies showing the Red Hat model in action—free methodology, paid implementation. AccessiTech CCCs (Courses & Content Creation) provide skillbuilding courses in WCAG compliance, web best practices, and visual/video design, with WCAG 2.2 content completely free and other topics offered as freemium. The Blog is where we publish thought leadership on accessibility, AI governance, disability justice, founder journey reflections, and case studies.`;
export const PRODUCTS_OVERVIEW_P3 = `Products don't generate direct client revenue—they generate trust, demonstrate credibility, and build the Disabled Designers and Developers (DDDs) community that makes this work sustainable. If Consulting and Mentorship are how we work with you, Products are how we work in public.`;

export const WCAG_SERIES_TITLE = 'WCAG Series';
export const WCAG_SERIES_DESC =
  'Free educational guides on WCAG 2.2 AA compliance and accessible design patterns.';
export const OSS_TITLE = 'Open Source Software & ASaaPs';
export const OSS_DESC =
  'Open-source contributions including the EndogenAI methodology and case studies showing the Red Hat model in action—free methodology, paid implementation.';
export const CCCS_TITLE = 'Curriculum & Content Creation';
export const CCCS_DESC =
  'Skillbuilding courses in WCAG compliance, web best practices, and visual/video design, with WCAG 2.2 content completely free and other topics offered as freemium.';
export const BLOG_TITLE = 'Blog';
export const BLOG_DESC =
  'Thought leadership on accessibility, AI governance, disability justice, founder journey reflections, and case studies.';

// CONTACT
export const CONTACT_HEADER = 'Get in touch';
export const CONTACT_P1 = `Questions about Consulting, Mentorship, or how AccessiTech can help your organization? Send us a message using the form below. We respond within 24 hours—often faster.`;
export const CONTACT_P2 =
  'All inquiries are routed directly to conor and sheela (founders). No triage delay, no junior staff handoff.';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Tagline */}
      <Row className="splash-row" style={splashRowStyle}>
        <Col>
          <Metadata {...metadata} />
          <h2>{TAGLINE}</h2>
          <SplashSocials />
        </Col>
      </Row>

      <main id="main" aria-label={ABOUT_ACCESSITECH}>
        {/* WHY */}
        <Row className="why-row">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <h3>{WHY_HEADER}</h3>
            <p>{WHY_P1}</p>
            <p>{WHY_P2}</p>
            <p>{WHY_P3}</p>
          </Col>
        </Row>

        {/* CTA + SERVICES */}
        <Services compact />

        {/* EXPLORE ALL SERVICES */}
        <Row className="services-explore-row">
          <Col xs={12} className="text-center">
            <Button
              data-testid="explore-services-btn"
              variant="secondary"
              size="lg"
              onClick={() => navigate('/services')}
            >
              Explore all services
            </Button>
          </Col>
        </Row>

        {/* WHO */}
        <Row className="who-row">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <h3>{WHO_HEADER}</h3>
            <p>{WHO_P1}</p>
            <p>{WHO_P2}</p>
            <p>{WHO_P3}</p>
          </Col>
        </Row>

        {/* PRODUCTS OVERVIEW */}
        <Row className="products-overview-row">
          <Col xs={12} md={{ span: 10, offset: 1 }}>
            <h3>{PRODUCTS_HEADER}</h3>
            <p>{PRODUCTS_OVERVIEW_P1}</p>
            <p>{PRODUCTS_OVERVIEW_P2}</p>
            <p>{PRODUCTS_OVERVIEW_P3}</p>
          </Col>
        </Row>

        {/* PRODUCT CARDS */}
        <Row className="products-row">
          <Col xs={12} md={{ span: 3, offset: 1 }} className="product-card">
            <h4>{WCAG_SERIES_TITLE}</h4>
            <p>{WCAG_SERIES_DESC}</p>
            <Button
              data-testid="product-card-btn-wcag"
              variant="outline-primary"
              onClick={() => navigate('/products/wcag-series')}
            >
              Learn more
            </Button>
          </Col>
          <Col xs={12} md={{ span: 2 }} className="product-card mt-5 mt-md-0">
            <h4>{OSS_TITLE}</h4>
            <p>{OSS_DESC}</p>
            <Button
              data-testid="product-card-btn-oss"
              variant="outline-primary"
              onClick={() => navigate('/products/oss-asaaps')}
            >
              Learn more
            </Button>
          </Col>
          <Col xs={12} md={{ span: 2 }} className="product-card mt-5 mt-md-0">
            <h4>{CCCS_TITLE}</h4>
            <p>{CCCS_DESC}</p>
            <Button
              data-testid="product-card-btn-cccs"
              variant="outline-primary"
              onClick={() => navigate('/products/cccs')}
            >
              Learn more
            </Button>
          </Col>
        </Row>

        {/* EXPLORE ALL PRODUCTS */}
        <Row className="products-explore-row">
          <Col xs={12} className="text-center">
            <Button
              data-testid="explore-products-btn"
              variant="secondary"
              size="lg"
              onClick={() => navigate('/products')}
            >
              Explore all products
            </Button>
          </Col>
        </Row>

        {/* CONTACT */}
        <Row className="contact-row">
          <Col xs={12} className="text-center">
            <CalendlyButton />
            <Button
              data-testid="contact-us-btn"
              variant="outline-primary"
              size="lg"
              className="ms-3"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </Col>
        </Row>
      </main>
    </>
  );
};

export default Home;
