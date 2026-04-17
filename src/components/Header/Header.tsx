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
      <nav className="header-nav" aria-label="Main navigation">
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          <li className="nav-dropdown">
            <Link to="/services" className={pathname === '/services' ? 'active' : ''}>
              Services
            </Link>
            <ul className="dropdown-menu" aria-label="Services menu">
              <li>
                <Link
                  to="/services/consulting"
                  className={pathname.startsWith('/services/consulting') ? 'active' : ''}
                >
                  Consulting
                </Link>
              </li>
              <li className="dropdown-sub-item">
                <Link
                  to="/services/consulting/asaaps"
                  className={pathname === '/services/consulting/asaaps' ? 'active' : ''}
                >
                  ASaaPs
                </Link>
              </li>
              <li className="dropdown-sub-item">
                <Link
                  to="/services/consulting/ai-integration"
                  className={pathname === '/services/consulting/ai-integration' ? 'active' : ''}
                >
                  AI Integration
                </Link>
              </li>
              <li className="dropdown-sub-item">
                <Link
                  to="/services/consulting/qa"
                  className={pathname === '/services/consulting/qa' ? 'active' : ''}
                >
                  QA
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mentorship"
                  className={pathname.startsWith('/services/mentorship') ? 'active' : ''}
                >
                  Mentorship
                </Link>
              </li>
              <li className="dropdown-sub-item">
                <Link
                  to="/services/mentorship/cccs"
                  className={pathname === '/services/mentorship/cccs' ? 'active' : ''}
                >
                  Courses &amp; Content
                </Link>
              </li>
              <li className="dropdown-sub-item">
                <Link
                  to="/services/mentorship/coaching"
                  className={pathname === '/services/mentorship/coaching' ? 'active' : ''}
                >
                  Coaching
                </Link>
              </li>
              <li className="dropdown-sub-item">
                <Link
                  to="/services/mentorship/openclassrooms"
                  className={pathname === '/services/mentorship/openclassrooms' ? 'active' : ''}
                >
                  OpenClassrooms
                </Link>
              </li>
              <li className="dropdown-sub-item">
                <Link
                  to="/services/mentorship/sotc"
                  className={pathname === '/services/mentorship/sotc' ? 'active' : ''}
                >
                  SOTC
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-dropdown">
            <Link to="/products" className={pathname.startsWith('/products') ? 'active' : ''}>
              Products
            </Link>
            <ul className="dropdown-menu" aria-label="Products menu">
              <li className="dropdown-sub-item">
                <Link
                  to="/products/wcag-series"
                  className={pathname === '/products/wcag-series' ? 'active' : ''}
                >
                  WCAG Series
                </Link>
              </li>
              <li className="dropdown-sub-item">
                <Link
                  to="/products/oss-asaaps"
                  className={pathname === '/products/oss-asaaps' ? 'active' : ''}
                >
                  OSS &amp; ASaaPs
                </Link>
              </li>
              <li className="dropdown-sub-item">
                <Link to="/products/cccs" className={pathname === '/products/cccs' ? 'active' : ''}>
                  Curriculum &amp; Content
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/wcag"
              className={pathname === '/wcag' || pathname.startsWith('/wcag/') ? 'active' : ''}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={pathname === '/blog' || pathname.startsWith('/blog/') ? 'active' : ''}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
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
