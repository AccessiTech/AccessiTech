import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import "./SplashSocials.scss";
import {
  WHITE,
  TRANSPARENT,
  TARGET_BLANK,
  TWITTER_URL,
  // YOUTUBE_URL,
  LINKEDIN_URL,
  TWITTER_LABEL,
  // YOUTUBE_LABEL,
  LINKEDIN_LABEL,
  REDDIT_LABEL,
  REDDIT_URL,
  GITHUB_LABEL,
  GITHUB_ORG_URL,
  SOCIAL_MEDIA_BUTTONS,
  FIVERR_LABEL,
  FIVERR_URL,
  DARK_BLUE,
  // TWITCH_URL,
} from "../../settings/strings";
import { useT } from "@accessitech/i18n-redux-toolkit";
import { useIsSimplified } from "../../store/a11y";

function SplashSocials() {
  const isSimplifiedView = useIsSimplified()
  const [iconColor, setIconColor] = useState(isSimplifiedView ? DARK_BLUE : WHITE)
  useEffect(() => {
    setIconColor(isSimplifiedView ? DARK_BLUE : WHITE);
  }, [isSimplifiedView]);
  return (
    <section
      className="splash-social-buttons"
      aria-label={useT(SOCIAL_MEDIA_BUTTONS)}
    >
      <ul>
        {/* <li>
        <SocialIcon
          label={useT(TWITTER_LABEL)}
          url={TWITCH_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
         />
      </li>
      <li>
        <SocialIcon
          label={useT(YOUTUBE_LABEL)}
          url={YOUTUBE_URL}
          fgColor={WHITE}
          bgColor={TRANSPARENT}
          target={TARGET_BLANK}
        />
      </li>*/}
        <li>
          <SocialIcon
            label={useT(FIVERR_LABEL)}
            network="facebook"
            url={FIVERR_URL}
            fgColor={iconColor}
            bgColor={TRANSPARENT}
            target={TARGET_BLANK}
          />
        </li>
        <li>
          <SocialIcon
            label={useT(LINKEDIN_LABEL)}
            url={LINKEDIN_URL}
            fgColor={iconColor}
            bgColor={TRANSPARENT}
            target={TARGET_BLANK}
          />
        </li>
        <li>
          <SocialIcon
            label={useT(GITHUB_LABEL)}
            url={GITHUB_ORG_URL}
            fgColor={iconColor}
            bgColor={TRANSPARENT}
            target={TARGET_BLANK}
          />
        </li>
        <li>
          <SocialIcon
            label={useT(REDDIT_LABEL)}
            url={REDDIT_URL}
            fgColor={iconColor}
            bgColor={TRANSPARENT}
            target={TARGET_BLANK}
          />
        </li>
        <li>
          <SocialIcon
            label={useT(TWITTER_LABEL)}
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
