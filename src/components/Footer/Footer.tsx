import {
  FIVERR_URL,
  GITHUB_ISSUES_URL,
  LINKEDIN_URL,
  REDDIT_URL,
  TARGET_BLANK,
  TWITTER_URL,
} from "../../settings/strings";
import "./Footer.scss";

export const CONTACT_LIST = "Contact List";
export const REPORTING_AN_ISSUE = "Reporting an Issue";
export const FOOTER = "Footer";
export const REACH_OUT_HEADER = "Reach Out!";
export const FOOTER_FIVERR = "Fiverr at accessiTech";
export const FOOTER_LINKEDIN = "LinkedIn at AccessiTech LLC";
export const FOOTER_REDDIT = "Reddit at u/accessiTech";
export const FOOTER_TWITTER = "Twitter at accessiT3ch";
export const ISSUES_P1 =
  "Report bugs, request features, and start collaborating via ";
export const GITHUB_ISSUES = "GitHub Issues";
export const COPYRIGHT = "Copyright";
export const COPYRIGHT_P1 = `© ${new Date().getFullYear()} AccessiTech LLC. All Rights Reserved.`;

function Footer() {
  return (
    <section className="footer-section" aria-label={FOOTER}>
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
      <p aria-label={REPORTING_AN_ISSUE} className="github-issues">
        {ISSUES_P1}
        <a href={GITHUB_ISSUES_URL} target={TARGET_BLANK} title={GITHUB_ISSUES}>
          {GITHUB_ISSUES}
        </a>
        !
      </p>
      <p aria-label={COPYRIGHT} className="copyright">
        {COPYRIGHT_P1}
      </p>
    </section>
  );
}

export default Footer;
