import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_ROOT, Home } from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import BlogEntry from "../pages/BlogEntry/BlogEntry";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const App = () => {

  return (
    <Container fluid className="App" aria-label={(APP_ROOT)}>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogEntry />} />
        </Routes>
      </BrowserRouter>
      {/* Footer Row */}
      <Row className="footer-row">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
