import { Link, useLocation } from 'react-router-dom';
import { SKIP_TO_MAIN_CONTENT } from '../../pages/Home/Home';
import { IMAGES_URL } from '../../settings/env';
import { COMPANY_TITLE, ROOT } from '../../settings/strings';
import A11Y from '../A11Y/A11Y';
import './Header.scss';
import { useEffect, useState } from 'react';
import { getPageFromPath } from '../../settings/utils';
import { Row, Col } from 'react-bootstrap';

export const HEADER = 'Header';

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [page, setPage] = useState(getPageFromPath(pathname));

  useEffect(() => {
    setPage(getPageFromPath(pathname));
  }, [pathname]);

  const headerStyle = {
    backgroundImage: `url('${IMAGES_URL}/TypeLogo_White_HC.svg')`,
  };
  return (
    <header className={`main-header ${page}`} aria-label={HEADER}>
      <a className="skip-link" href="#main">
        {SKIP_TO_MAIN_CONTENT}
      </a>
      <Link to={ROOT} title={COMPANY_TITLE} className="logo-link">
        <h1 className="logo-container" style={headerStyle}>
          {COMPANY_TITLE}
        </h1>
      </Link>
      {pathname !== '/' && (
        <nav className="header-nav" aria-label="Main navigation">
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li>
              <Link to="/blog" className={pathname === '/blog' ? 'active' : ''}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/projects" className={pathname === '/projects' ? 'active' : ''}>
                Open Source Projects
              </Link>
            </li>
            <li>
              <Link to="/wcag" className={pathname === '/wcag' ? 'active' : ''}>
                WCAG Explained
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <A11Y />
    </header>
  );
}

export const GenericHeaderRow = ({ colProps }: { colProps: object }) => (
  <Row className="header-row" data-testid="header-row">
    <Col {...colProps}>
      <Header />
    </Col>
  </Row>
);

export const HeaderRow = () => (
  <GenericHeaderRow
    colProps={{
      xs: 11,
      sm: { span: 10, offset: 1 },
      lg: { span: 8, offset: 2 },
    }}
  />
);

export const HomeHeaderRow = () => <GenericHeaderRow colProps={{}} />;

export default Header;
