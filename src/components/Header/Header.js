import React from 'react';
import './Header.css';

function Header() {
  const headerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}'/assets/images/TypeLogo_White_HC.svg')`
  };
  return (
    <header className="main-header">
      {/* todo: add accessibility options widget */}
      <h1 tabIndex={1} style={headerStyle}>AccessiTech LLC</h1>
    </header>
  )
}

export default Header;
