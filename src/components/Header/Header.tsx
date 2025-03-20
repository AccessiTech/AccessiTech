import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SKIP_TO_MAIN_CONTENT } from '../../pages/Home/Home';
import { IMAGES_URL } from '../../settings/env';
import { COMPANY_TITLE, ROOT } from '../../settings/strings';
import A11Y from '../A11Y/A11Y';
import './Header.scss';
import { useEffect, useState } from 'react';
import { getPageFromPath } from '../../settings/utils';

export const HEADER = 'Header';

function Header() {
  const navigate = useNavigate();
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
      <a className="skip-link" href="#main">{(SKIP_TO_MAIN_CONTENT)}</a>
      <A11Y />
      <a
        href={ROOT}
        title={COMPANY_TITLE}
        onClick={(e: any) => {
          e.preventDefault();
          navigate(ROOT);
        }}
      >
        <h1 className="logo-container" style={headerStyle}>{COMPANY_TITLE}</h1>
      </a>
    </header>
  )
}

export default Header;