import React from 'react';
import { ACCESSITECH, COMPANY_TITLE, GITHUB_ISSUES, GITHUB_ISSUES_URL, LINKEDIN_LABEL, LINKEDIN_URL, REDDIT_HANDLE, REDDIT_LABEL, REDDIT_URL, TARGET_BLANK, TWITTER_HANDLE, TWITTER_LABEL, TWITTER_URL, YOUTUBE_LABEL, YOUTUBE_URL } from '../../settings/strings';
import './Footer.scss';

function Footer () {
  return (<section className="footer-section" aria-label="Footer">
    <h3>Reach Out!</h3>
    <ul aria-label="contact list">
      {/* <li>
        <a
          href={GMAIL_URL}
          target={TARGET_BLANK}
          alt={GMAIL_LABEL}
        >gmail at {TWITTER_HANDLE}</a>
      </li> */}
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
      Report bugs, request features, and start collaborating via&nbsp;
      <a
        href={GITHUB_ISSUES_URL}
        target={TARGET_BLANK}
        alt={GITHUB_ISSUES}
      >GitHub issues</a>!
    </p>
    <p aria-label="copyright" className="copyright">Copyright © 2021 AccessiTech LLC. All rights reserved.</p>
  </section>);
}

export default Footer;
