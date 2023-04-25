import React from "react";
import { useT } from "@accessitech/i18n-redux-toolkit";
import {
  CONTACT_LIST,
  COPYRIGHT,
  COPYRIGHT_P1,
  FOOTER,
  FOOTER_LINKEDIN,
  FOOTER_REDDIT,
  FOOTER_TWITCH,
  FOOTER_TWITTER,
  FOOTER_YOUTUBE,
  GITHUB_ISSUES,
  GITHUB_ISSUES_URL,
  ISSUES_P1,
  LINKEDIN_URL,
  REACH_OUT_HEADER,
  REDDIT_URL,
  REPORTING_AN_ISSUE,
  TARGET_BLANK,
  TWITCH_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../../settings/strings";
import "./Footer.scss";

function Footer() {
  return (
    <section className="footer-section" aria-label={useT(FOOTER)}>
      <h3>{useT(REACH_OUT_HEADER)}</h3>
      <ul aria-label={CONTACT_LIST}>
        {/* <li>
        <a
          href={GMAIL_URL}
          target={TARGET_BLANK}
          alt={GMAIL_LABEL}
        >gmail at {TWITTER_HANDLE}</a>
      </li> */}
        <li>
          <a href={TWITTER_URL} target={TARGET_BLANK} alt={FOOTER_TWITTER}>
            {useT(FOOTER_TWITTER)}
          </a>
        </li>
        <li>
          <a href={TWITCH_URL} target={TARGET_BLANK} alt={FOOTER_TWITCH}>
            {useT(FOOTER_TWITCH)}
          </a>
        </li>
        <li>
          <a href={YOUTUBE_URL} target={TARGET_BLANK} alt={FOOTER_YOUTUBE}>
            {useT(FOOTER_YOUTUBE)}
          </a>
        </li>
        <li>
          <a href={LINKEDIN_URL} target={TARGET_BLANK} alt={FOOTER_LINKEDIN}>
            {useT(FOOTER_LINKEDIN)}
          </a>
        </li>
        <li>
          <a href={REDDIT_URL} target={TARGET_BLANK} alt={FOOTER_REDDIT}>
            {useT(FOOTER_REDDIT)}
          </a>
        </li>
      </ul>
      <p aria-label={useT(REPORTING_AN_ISSUE)} className="github-issues">
        {useT(ISSUES_P1)}
        <a href={GITHUB_ISSUES_URL} target={TARGET_BLANK} alt={GITHUB_ISSUES}>
          {useT(GITHUB_ISSUES)}
        </a>
        !
      </p>
      <p aria-label={useT(COPYRIGHT)} className="copyright">
        {useT(COPYRIGHT_P1)}
      </p>
    </section>
  );
}

export default Footer;
