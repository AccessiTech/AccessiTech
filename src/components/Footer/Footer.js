import React from 'react';
import { ACCESSITECH, COMPANY_TITLE, COPYRIGHT_P1, GITHUB_ISSUES, GITHUB_ISSUES_URL, ISSUES_P1, LINKEDIN_LABEL, LINKEDIN_URL, REACH_OUT_HEADER, REDDIT_HANDLE, REDDIT_LABEL, REDDIT_URL, TARGET_BLANK, TWITTER_HANDLE, TWITTER_LABEL, TWITTER_URL, YOUTUBE_LABEL, YOUTUBE_URL } from '../../settings/strings';
import './Footer.scss';

function Footer () {
  return (<section className="footer-section" aria-label="Footer">
    <h3>{REACH_OUT_HEADER}</h3>
    <ul aria-label="contact list">
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
          alt={TWITTER_LABEL}
        >twitter at {TWITTER_HANDLE}</a>
      </li>
      <li>
        <a
          href={YOUTUBE_URL}
          target={TARGET_BLANK}
          alt={YOUTUBE_LABEL}
        >youtube at {ACCESSITECH}</a>
      </li>
      <li>
        <a
          href={LINKEDIN_URL}
          target={TARGET_BLANK}
          alt={LINKEDIN_LABEL}
        >linkedin at {COMPANY_TITLE}</a>
      </li>
      <li>
        <a 
          href={REDDIT_URL}
          target={TARGET_BLANK}
          alt={REDDIT_LABEL}
        >reddit at {REDDIT_HANDLE}</a>
      </li>
    </ul>
    <p aria-label="reporting an issue" className='github-issues'>
      {ISSUES_P1}&nbsp;
      <a
        href={GITHUB_ISSUES_URL}
        target={TARGET_BLANK}
        alt={GITHUB_ISSUES}
      >{GITHUB_ISSUES}</a>!
    </p>
    <p aria-label="copyright" className="copyright">{COPYRIGHT_P1}</p>
  </section>);
}

export default Footer;
