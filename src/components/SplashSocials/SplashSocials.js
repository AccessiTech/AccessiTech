import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './SplashSocials.scss';
import { WHITE, TRANSPARENT, TARGET_BLANK, TWITTER_URL, YOUTUBE_URL, LINKEDIN_URL, TWITTER_LABEL, YOUTUBE_LABEL, LINKEDIN_LABEL } from '../../settings/strings';

function SpalshSocials () {
  return (<section className="splash-social-buttons">
    <ul>
      <li>
        <SocialIcon
          label={TWITTER_LABEL}
          url={TWITTER_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>
      <li>
        <SocialIcon
          label={YOUTUBE_LABEL}
          url={YOUTUBE_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>
      <li>
        <SocialIcon
          label={LINKEDIN_LABEL}
          url={LINKEDIN_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>
    </ul>
  </section>);
}

export default SpalshSocials;