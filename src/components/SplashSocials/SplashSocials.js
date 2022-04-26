import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './SplashSocials.css';

function SpalshSocials () {
  return (<section className="splash-social-buttons">
    <ul>
      <li>
        <SocialIcon
          label="AccessiTech on Twitter"
          url="https://twitter.com/accessiT3ch"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />
      </li>
      <li>
        <SocialIcon
          label="AccessiTech on YouTube"
          url="https://www.youtube.com/channel/UCcke0DIj4p7QMFEKyFTU8RA"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />
      </li>
      <li>
        <SocialIcon
          label="AccessiTech on LinkedIn"
          url="https://www.linkedin.com/company/accessitech/"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />
      </li>
    </ul>
  </section>);
}

export default SpalshSocials;