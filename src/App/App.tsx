import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { APP_ROOT, Home } from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import BlogEntry from "../pages/BlogEntry/BlogEntry";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Metadata from "../components/Metadata/Metadata";
import { getMetaData } from "../settings/getMetaData";
import { metadata } from "./meta";
import NotFound from "../pages/404/404";

export interface AppProps {
  path?: string;
}

export const App = (props: AppProps) => {
  const Content = <>
      <Container fluid className="App" aria-label={(APP_ROOT)}>
        <Row className="header-row">
          <Col>
            <Header />
          </Col>
        </Row>
        {/* Main Content Row */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog.html" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogEntry />} />
          {/* <Route path="/blog/:sub/:id" element={<BlogEntry />} /> */}
          <Route path="/wcag" element={<Blog />} />
          <Route path="/wcag.html" element={<Blog />} />
          <Route path="/wcag/:id" element={<BlogEntry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer Row */}
        <Row className="footer-row">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>;

  if (props.path) {
    return (
      <StaticRouter location={props.path}>
        {Content}
      </StaticRouter>
    )
  }
  return (
    <BrowserRouter>
      <Metadata {...getMetaData(metadata)} />
      {Content}
    </BrowserRouter>
  )
}

export default App
