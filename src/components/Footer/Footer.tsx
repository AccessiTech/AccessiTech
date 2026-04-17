import { Col, Row, Container } from 'react-bootstrap';
import {
  COMPANY_TITLE,
  FIVERR_URL,
  GITHUB_ISSUES_URL,
  LINKEDIN_URL,
  REDDIT_URL,
  ROOT,
  TARGET_BLANK,
  TWITTER_URL,
} from '../../settings/strings';
import { Link } from 'react-router-dom';

export const CONTACT_LIST = 'Contact List';
export const REPORTING_AN_ISSUE = 'Reporting an Issue';
export const FOOTER = 'Footer';
export const REACH_OUT_HEADER = 'Reach Out!';
export const FOOTER_FIVERR = 'Fiverr at accessiTech';
export const FOOTER_LINKEDIN = 'LinkedIn at AccessiTech LLC';
export const FOOTER_REDDIT = 'Reddit at u/accessiTech';
export const FOOTER_TWITTER = 'Twitter at accessiT3ch';
export const ISSUES_P1 = 'Report bugs, request features, and start collaborating via ';
export const GITHUB_ISSUES = 'GitHub Issues';
export const COPYRIGHT = 'Copyright';
export const COPYRIGHT_P1 = `© ${new Date().getFullYear()} AccessiTech LLC. All Rights Reserved.`;
export const DISCLOSURES_HEADER = 'Disclosures';
export const ACCESSIBILITY_DISCLOSURE = 'Accessibility';
export const ACCESSIBILITY_DISCLOSURE_URL = '/disclosures/accessibility';
export const ADVERTISING_DISCLOSURE = 'Advertising';
export const ADVERTISING_DISCLOSURE_URL = '/disclosures/ads';
export const AFFILIATE_LINKS_DISCLOSURE = 'Affiliate Links';
export const AFFILIATE_LINKS_DISCLOSURE_URL = '/disclosures/affiliate-links';
export const CODE_OF_CONDUCT = 'Code of Conduct';
export const CODE_OF_CONDUCT_URL = '/disclosures/code-of-conduct';
export const CONTRIBUTING = 'Contributing';
export const CONTRIBUTING_URL = '/disclosures/contributing';
export const SPONSORED_CONTENT = 'Sponsored Content';
export const SPONSORED_CONTENT_URL = '/disclosures/sponsored-content';
// import { IMAGES_URL } from '../../settings/env';

function Footer() {
  // const headerStyle = {
  //   backgroundImage: `url('${IMAGES_URL}/TypeLogo_White_HC.svg')`,
  // };
  return (
    <footer className="bg-dark text-white pt-5 text-start" aria-label={FOOTER}>
      <Container>
        <Row className="g-4">
          <Col xs={12} md={{ span: 4, offset: 1 }}>
            <Link to={ROOT} title={COMPANY_TITLE} className="text-decoration-none d-block p-0">
              <h3 className="logo-container fs-1 mb-0">{COMPANY_TITLE} </h3>
            </Link>
            <p aria-label={REPORTING_AN_ISSUE} className="mt-4">
              {ISSUES_P1}
              <a
                href={GITHUB_ISSUES_URL}
                target={TARGET_BLANK}
                title={GITHUB_ISSUES}
                className="text-white"
              >
                {GITHUB_ISSUES}
              </a>
              !
            </p>
          </Col>

          <Col xs={12} md={3}>
            <h3 className="mb-4">{REACH_OUT_HEADER}</h3>
            <ul aria-label={CONTACT_LIST} className="list-unstyled text-start p-0">
              {/* 
            <li>
              <a
                href={GMAIL_URL}
                target={TARGET_BLANK}
                title={GMAIL_LABEL}
              >gmail at {TWITTER_HANDLE}</a>
            </li> 
              <li>
                <a href={TWITCH_URL} target={TARGET_BLANK} title={FOOTER_TWITCH}>
                  {(FOOTER_TWITCH)}
                </a>
              </li>
              <li>
                <a href={YOUTUBE_URL} target={TARGET_BLANK} title={(FOOTER_YOUTUBE)}>
                  {(FOOTER_YOUTUBE)}
                </a>
              </li>
              */}
              <li className="mb-3">
                <a
                  href={FIVERR_URL}
                  target={TARGET_BLANK}
                  title={FOOTER_FIVERR}
                  className="text-white"
                >
                  {FOOTER_FIVERR}
                </a>
              </li>
              <li className="mb-3">
                <a
                  href={LINKEDIN_URL}
                  target={TARGET_BLANK}
                  title={FOOTER_LINKEDIN}
                  className="text-white"
                >
                  {FOOTER_LINKEDIN}
                </a>
              </li>
              <li className="mb-3">
                <a
                  href={REDDIT_URL}
                  target={TARGET_BLANK}
                  title={FOOTER_REDDIT}
                  className="text-white"
                >
                  {FOOTER_REDDIT}
                </a>
              </li>
              <li className="mb-3">
                <a
                  href={TWITTER_URL}
                  target={TARGET_BLANK}
                  title={FOOTER_TWITTER}
                  className="text-white"
                >
                  {FOOTER_TWITTER}
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h3 className="mb-4">{DISCLOSURES_HEADER}</h3>
            <ul aria-label={DISCLOSURES_HEADER} className="list-unstyled p-0">
              <li className="mb-3">
                <Link
                  to={ACCESSIBILITY_DISCLOSURE_URL}
                  title={ACCESSIBILITY_DISCLOSURE}
                  className="text-white"
                >
                  {ACCESSIBILITY_DISCLOSURE}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to={ADVERTISING_DISCLOSURE_URL}
                  title={ADVERTISING_DISCLOSURE}
                  className="text-white"
                >
                  {ADVERTISING_DISCLOSURE}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to={AFFILIATE_LINKS_DISCLOSURE_URL}
                  title={AFFILIATE_LINKS_DISCLOSURE}
                  className="text-white"
                >
                  {AFFILIATE_LINKS_DISCLOSURE}
                </Link>
              </li>
              <li className="mb-3">
                <Link to={CODE_OF_CONDUCT_URL} title={CODE_OF_CONDUCT} className="text-white">
                  {CODE_OF_CONDUCT}
                </Link>
              </li>
              <li className="mb-3">
                <Link to={CONTRIBUTING_URL} title={CONTRIBUTING} className="text-white">
                  {CONTRIBUTING}
                </Link>
              </li>
              <li className="mb-3">
                <Link to={SPONSORED_CONTENT_URL} title={SPONSORED_CONTENT} className="text-white">
                  {SPONSORED_CONTENT}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <p aria-label={COPYRIGHT} className="text-center mt-5 mb-3">
          {COPYRIGHT_P1}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
