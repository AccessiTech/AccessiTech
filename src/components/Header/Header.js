import React from 'react';
import { PUBLIC_URL } from '../../settings/env';
import { ACCESSITECH_LOGO, COMPANY_TITLE, ROOT } from '../../settings/strings';
import './Header.scss';

function Header() {
  const headerStyle = {
    backgroundImage: `url(${PUBLIC_URL}'/assets/images/TypeLogo_White_HC.svg')`
  };
  return (
    <header className="main-header" title="Header">
      {/* todo: add accessibility options widget */}
      <a
        href={ROOT}
        alt={ACCESSITECH_LOGO}
        title={COMPANY_TITLE}
      >
        <h1 style={headerStyle}>{COMPANY_TITLE}</h1>
      </a>
    </header>
  )
}

export default Header;
