import React from 'react';
import { getT } from '../../i18n';
import { CONTACT_LIST, COPYRIGHT, COPYRIGHT_P1, FOOTER, FOOTER_LINKEDIN, FOOTER_REDDIT, FOOTER_TWITCH, FOOTER_TWITTER, FOOTER_YOUTUBE, GITHUB_ISSUES, GITHUB_ISSUES_URL, ISSUES_P1, LINKEDIN_URL, REACH_OUT_HEADER, REDDIT_URL, REPORTING_AN_ISSUE, TARGET_BLANK, TWITCH_URL, TWITTER_URL, YOUTUBE_URL } from '../../settings/strings';
import './Footer.scss';

function Footer () {
  return (<section className="footer-section" aria-label={getT(FOOTER)}>
    <h3>{getT(REACH_OUT_HEADER)}</h3>
    <ul aria-label={CONTACT_LIST}>
      {/* <li>
        <a
          href={GMAIL_URL}
          target={TARGET_BLANK}
          alt={GMAIL_LABEL}
        >gmail at {TWITTER_HANDLE}</a>
      </li> */}
      {/* todo: use dynamic display strings */}
      <li>
        <a
          href={TWITTER_URL}
          target={TARGET_BLANK}
          alt={FOOTER_TWITTER}
        >{getT(FOOTER_TWITTER)}</a>
      </li>
      <li>
        <a
          href={TWITCH_URL}
          target={TARGET_BLANK}
          alt={FOOTER_TWITCH}
        >{getT(FOOTER_TWITCH)}</a>
      </li>
      <li>
        <a
          href={YOUTUBE_URL}
          target={TARGET_BLANK}
          alt={FOOTER_YOUTUBE}
        >{getT(FOOTER_YOUTUBE)}</a>
      </li>
      <li>
        <a
          href={LINKEDIN_URL}
          target={TARGET_BLANK}
          alt={FOOTER_LINKEDIN}
        >{getT(FOOTER_LINKEDIN)}</a>
      </li>
      <li>
        <a 
          href={REDDIT_URL}
          target={TARGET_BLANK}
          alt={FOOTER_REDDIT}
        >{getT(FOOTER_REDDIT)}</a>
      </li>
    </ul>
    <p aria-label={getT(REPORTING_AN_ISSUE)} className='github-issues'>
      {getT(ISSUES_P1)}
      <a
        href={GITHUB_ISSUES_URL}
        target={TARGET_BLANK}
        alt={GITHUB_ISSUES}
      >{getT(GITHUB_ISSUES)}</a>!
    </p>
    <p aria-label={getT(COPYRIGHT)} className="copyright">{getT(COPYRIGHT_P1)}</p>
  </section>);
}

export default Footer;
