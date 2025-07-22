import { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import './SplashSocials.scss';
import {
  WHITE,
  TRANSPARENT,
  TARGET_BLANK,
  TWITTER_URL,
  // YOUTUBE_URL,
  LINKEDIN_URL,
  // YOUTUBE_LABEL,
  REDDIT_URL,
  GITHUB_ORG_URL,
  FIVERR_URL,
  DARK_BLUE,
  // TWITCH_URL,
} from '../../settings/strings';
import { useIsSimplified } from '../../store/a11y';

export const SOCIAL_MEDIA_BUTTONS = 'Social Media Buttons';
export const TWITTER_LABEL = 'AccessiTech on Twitter';
export const LINKEDIN_LABEL = 'AccessiTech on LinkedIn';
export const REDDIT_LABEL = 'AccessiTech on Reddit';
export const GITHUB_LABEL = 'AccessiTech on GitHub';
export const FIVERR_LABEL = 'AccessiTech on Fiverr';

function SplashSocials() {
  const isSimplifiedView = useIsSimplified();
  const [iconColor, setIconColor] = useState(isSimplifiedView ? DARK_BLUE : WHITE);
  useEffect(() => {
    setIconColor(isSimplifiedView ? DARK_BLUE : WHITE);
  }, [isSimplifiedView]);
  return (
    <section className="splash-social-buttons" aria-label={SOCIAL_MEDIA_BUTTONS}>
      <ul>
        {/* <li>
        <SocialIcon
          label={(TWITTER_LABEL)}
          url={TWITCH_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
         />
      </li>
      <li>
        <SocialIcon
          label={(YOUTUBE_LABEL)}
          url={YOUTUBE_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>*/}
        <li>
          <SocialIcon
            label={FIVERR_LABEL}
            network="facebook"
            url={FIVERR_URL}
            fgColor={iconColor}
            bgColor={TRANSPARENT}
            target={TARGET_BLANK}
          />
        </li>
        <li>
          <SocialIcon
            label={LINKEDIN_LABEL}
            url={LINKEDIN_URL}
            fgColor={iconColor}
            bgColor={TRANSPARENT}
            target={TARGET_BLANK}
          />
        </li>
        <li>
          <SocialIcon
            label={GITHUB_LABEL}
            url={GITHUB_ORG_URL}
            fgColor={iconColor}
            bgColor={TRANSPARENT}
            target={TARGET_BLANK}
          />
        </li>
        <li>
          <SocialIcon
            label={REDDIT_LABEL}
            url={REDDIT_URL}
            fgColor={iconColor}
            bgColor={TRANSPARENT}
            target={TARGET_BLANK}
          />
        </li>
        <li>
          <SocialIcon
            label={TWITTER_LABEL}
            url={TWITTER_URL}
            fgColor={iconColor}
            bgColor={TRANSPARENT}
            target={TARGET_BLANK}
          />
        </li>
      </ul>
    </section>
  );
}

export default SplashSocials;
