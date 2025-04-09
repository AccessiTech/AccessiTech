import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_ROOT, Home } from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import BlogEntry from "../pages/BlogEntry/BlogEntry";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Metadata from "../components/Metadata/Metadata";
import { getMetaData } from "../settings/getMetaData";
import { metadata } from "./meta";

export const App = () => {

  return (
    <BrowserRouter>
      <Metadata {...getMetaData(metadata)} />
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
        </Routes>
        {/* Footer Row */}
        <Row className="footer-row">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
