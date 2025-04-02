import { Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { APP_ROOT, Home } from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import BlogEntry from "../pages/BlogEntry/BlogEntry";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import { ACCESSITECH, COMPANY_TITLE, DEFAULT_SHARE_IMAGE, DEFAULT_SHARE_IMAGE_ALT, HOME_CANONICAL, HOME_DESCRIPTION, HOME_TITLE, OG_TYPE } from "../settings/strings";

export interface AppProps {
  path: string;
}

export const App = (props: AppProps) => {

  return (
    <StaticRouter location={props.path}>
      {/* <Helmet>
        <title>{`${ACCESSITECH} | ${HOME_TITLE}`}</title>
        <meta name="description" content={HOME_DESCRIPTION} />
        <link rel="canonical" href={HOME_CANONICAL} />
        <meta property="og:type" content={OG_TYPE} />
        <meta property="og:image" content={DEFAULT_SHARE_IMAGE} />
        <meta property="og:image:alt" content={DEFAULT_SHARE_IMAGE_ALT} />
        <meta property="og:site_name" content={COMPANY_TITLE} />
        <meta property="og:title" content={HOME_TITLE} />
        <meta property="og:description" content={HOME_DESCRIPTION} />
        <meta property="og:url" content={HOME_CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@accessiT3ch" />
        <meta name="twitter:creator" content="@accessiT3ch" />
        <meta name="twitter:title" content={HOME_TITLE} />
        <meta name="twitter:description" content={HOME_DESCRIPTION} />
        <meta name="twitter:image" content={DEFAULT_SHARE_IMAGE} />
        <meta name="twitter:image:alt" content={DEFAULT_SHARE_IMAGE_ALT} />
      </Helmet> */}
      <Container fluid className="App" aria-label={(APP_ROOT)}>
        <Row className="header-row">
          <Col>
            <Header />
          </Col>
        </Row>
        {/* Main Content Row */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog.html" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogEntry />} />
        </Routes>
        {/* Footer Row */}
        <Row className="footer-row">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </StaticRouter>
  )
}

export default App;

