import React from 'react';
import { useT } from '@accessitech/i18n-redux-toolkit';
import { IMAGES_URL } from '../../settings/env';
import { ACCESSITECH_LOGO_LABEL, COMPANY_TITLE, HEADER, ROOT } from '../../settings/strings';
import A11Y from '../A11Y/A11Y';
import './Header.scss';

function Header() {
  const headerStyle = {
    backgroundImage: `url('${IMAGES_URL}/TypeLogo_White_HC.svg')`,
  };
  return (
    <header className="main-header" aria-label={useT(HEADER)}>
      <A11Y />
      <a
        href={ROOT}
        alt={useT(ACCESSITECH_LOGO_LABEL)}
        title={COMPANY_TITLE}
      >
        <h1 className="logo-container" style={headerStyle}>{COMPANY_TITLE}</h1>
      </a>
    </header>
  )
}

export default Header;
