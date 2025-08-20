import { Col, Row } from 'react-bootstrap';
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
import './Footer.scss';
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
export const ACCESSIBILITY_DISCLOSURE_URL = '/disclosures/ACCESSIBILITY.md';
export const ADVERTISING_DISCLOSURE = 'Advertising';
export const ADVERTISING_DISCLOSURE_URL = '/disclosures/ad-disclosure.md';
export const AFFILIATE_LINKS_DISCLOSURE = 'Affiliate Links';
export const AFFILIATE_LINKS_DISCLOSURE_URL = '/disclosures/affiliate-link-disclosure.md';
export const CODE_OF_CONDUCT = 'Code of Conduct';
export const CODE_OF_CONDUCT_URL = '/disclosures/CODE_OF_CONDUCT.md';
export const CONTRIBUTING = 'Contributing';
export const CONTRIBUTING_URL = '/disclosures/CONTRIBUTING.md';
export const SPONSORED_CONTENT = 'Sponsored Content';
export const SPONSORED_CONTENT_URL = '/disclosures/sponsored-content-disclosure.md';
import { IMAGES_URL } from '../../settings/env';

function Footer() {
  const headerStyle = {
    backgroundImage: `url('${IMAGES_URL}/TypeLogo_White_HC.svg')`,
  };
  return (
    <section className="footer-section" aria-label={FOOTER}>
      <Row>
        <Col xs={12} md={{ span: 4, offset: 1 }} className="footer-col">
          <Link to={ROOT} title={COMPANY_TITLE} className="logo-link">
            <h3 className="logo-container" style={headerStyle}>
              {COMPANY_TITLE}
            </h3>
          </Link>
          <p aria-label={REPORTING_AN_ISSUE} className="github-issues">
            {ISSUES_P1}
            <a href={GITHUB_ISSUES_URL} target={TARGET_BLANK} title={GITHUB_ISSUES}>
              {GITHUB_ISSUES}
            </a>
            !
          </p>
        </Col>

        <Col xs={12} md={{ span: 3, offset: 0 }} className="footer-col">
          <h3>{REACH_OUT_HEADER}</h3>
          <ul aria-label={CONTACT_LIST}>
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
            <li>
              <a href={FIVERR_URL} target={TARGET_BLANK} title={FOOTER_FIVERR}>
                {FOOTER_FIVERR}
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target={TARGET_BLANK} title={FOOTER_LINKEDIN}>
                {FOOTER_LINKEDIN}
              </a>
            </li>
            <li>
              <a href={REDDIT_URL} target={TARGET_BLANK} title={FOOTER_REDDIT}>
                {FOOTER_REDDIT}
              </a>
            </li>
            <li>
              <a href={TWITTER_URL} target={TARGET_BLANK} title={FOOTER_TWITTER}>
                {FOOTER_TWITTER}
              </a>
            </li>
          </ul>
        </Col>

        <Col xs={12} md={{ span: 3, offset: 0 }} className="footer-col">
          <h3>{DISCLOSURES_HEADER}</h3>
          <ul aria-label={DISCLOSURES_HEADER}>
            <li>
              <a
                href={ACCESSIBILITY_DISCLOSURE_URL}
                target={TARGET_BLANK}
                title={ACCESSIBILITY_DISCLOSURE}
              >
                {ACCESSIBILITY_DISCLOSURE}
              </a>
            </li>
            <li>
              <a
                href={ADVERTISING_DISCLOSURE_URL}
                target={TARGET_BLANK}
                title={ADVERTISING_DISCLOSURE}
              >
                {ADVERTISING_DISCLOSURE}
              </a>
            </li>
            <li>
              <a
                href={AFFILIATE_LINKS_DISCLOSURE_URL}
                target={TARGET_BLANK}
                title={AFFILIATE_LINKS_DISCLOSURE}
              >
                {AFFILIATE_LINKS_DISCLOSURE}
              </a>
            </li>
            <li>
              <a href={CODE_OF_CONDUCT_URL} target={TARGET_BLANK} title={CODE_OF_CONDUCT}>
                {CODE_OF_CONDUCT}
              </a>
            </li>
            <li>
              <a href={CONTRIBUTING_URL} target={TARGET_BLANK} title={CONTRIBUTING}>
                {CONTRIBUTING}
              </a>
            </li>
            <li>
              <a href={SPONSORED_CONTENT_URL} target={TARGET_BLANK} title={SPONSORED_CONTENT}>
                {SPONSORED_CONTENT}
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <p aria-label={COPYRIGHT} className="copyright">
        {COPYRIGHT_P1}
      </p>
    </section>
  );
}

export default Footer;
