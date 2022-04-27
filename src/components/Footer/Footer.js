import React from 'react';
import { ACCESSITECH, COMPANY_TITLE, GMAIL_LABEL, GMAIL_URL, LINKEDIN_LABEL, LINKEDIN_URL, TARGET_BLANK, TWITTER_HANDLE, TWITTER_LABEL, TWITTER_URL, YOUTUBE_LABEL, YOUTUBE_URL } from '../../settings/strings';
import './Footer.css';

function Footer () {
  return (<section className="footer-section">
    <h3>Reach Out!</h3>
    <ul>
      <li>
        <a
          href={GMAIL_URL}
          target={TARGET_BLANK}
          alt={GMAIL_LABEL}
        >gmail at {TWITTER_HANDLE}</a>
      </li>
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
    </ul>
    <p className="copyright">Copyright © 2021 AccessiTech LLC. All rights reserved.</p>
  </section>);
}

export default Footer;
