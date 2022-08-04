import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './SplashSocials.scss';
import { WHITE, TRANSPARENT, TARGET_BLANK, TWITTER_URL, YOUTUBE_URL, LINKEDIN_URL, TWITTER_LABEL, YOUTUBE_LABEL, LINKEDIN_LABEL, REDDIT_LABEL, REDDIT_URL, GITHUB_LABEL, GITHUB_ORG_URL, SOCIAL_MEDIA_BUTTONS, TWITCH_URL } from '../../settings/strings';
import { getT } from '@accessitech/i18n';

function SpalshSocials () {
  return (<section className="splash-social-buttons" aria-label={getT(SOCIAL_MEDIA_BUTTONS)}>
    <ul>
      <li>
        <SocialIcon
          label={getT(TWITTER_LABEL)}
          url={TWITTER_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>
      <li>
        <SocialIcon
          label={getT(TWITTER_LABEL)}
          url={TWITCH_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
         />
      </li>
      <li>
        <SocialIcon
          label={getT(YOUTUBE_LABEL)}
          url={YOUTUBE_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>
      <li>
        <SocialIcon
          label={getT(LINKEDIN_LABEL)}
          url={LINKEDIN_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>
      <li>
        <SocialIcon
          label={getT(REDDIT_LABEL)}
          url={REDDIT_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>
      <li>
        <SocialIcon
          label={getT(GITHUB_LABEL)}
          url={GITHUB_ORG_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>
    </ul>
  </section>);
}

export default SpalshSocials;