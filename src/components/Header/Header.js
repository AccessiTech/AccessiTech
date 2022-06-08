import React from 'react';
import { IMAGES_URL } from '../../settings/env';
import { ACCESSITECH_LOGO_LABEL, COMPANY_TITLE, ROOT } from '../../settings/strings';
import './Header.scss';

function Header() {
  const headerStyle = {
    backgroundImage: `url('${IMAGES_URL}/TypeLogo_White_HC.svg')`,
  };
  return (
    <header className="main-header" aria-label="Header">
      {/* todo: add accessibility options widget */}
      <a
        href={ROOT}
        alt={ACCESSITECH_LOGO_LABEL}
        title={COMPANY_TITLE}
      >
        <h1 className="logo-container" style={headerStyle}>{COMPANY_TITLE}</h1>
      </a>
    </header>
  )
}

export default Header;
