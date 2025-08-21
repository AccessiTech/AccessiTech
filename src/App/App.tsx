import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { APP_ROOT, Home } from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import BlogEntry from '../pages/BlogEntry/BlogEntry';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import Metadata from '../components/Metadata/Metadata';
import { getMetaData, MetaDataProps } from '../settings/getMetaData';
import { metadata } from './meta';
import NotFound from '../pages/404/404';
import { Disclosure } from '../pages/Disclosure/Disclosure';
import Disclosures from '../pages/Disclosures/Disclosures';

export interface AppProps {
  path?: string;
  metadata?: MetaDataProps;
}

export const App = (props: AppProps) => {
  const Content = (
    <>
      <Container fluid className="App" aria-label={APP_ROOT}>
        {/* Main Content Row */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/blog" element={<Blog hideExcerpt />} />
          <Route path="/blog.html" element={<Blog hideExcerpt />} />
          <Route path="/blog/:id" element={<BlogEntry />} />
          {/* <Route path="/blog/:sub/:id" element={<BlogEntry />} /> */}
          <Route path="/wcag" element={<Blog hideDates hideDescription />} />
          <Route path="/wcag.html" element={<Blog hideDates hideDescription />} />
          <Route path="/wcag/:id" element={<BlogEntry />} />
          {/* Disclosure Routes */}
          <Route path="/disclosures" element={<Disclosures hideDates />} />
          <Route path="/disclosures/:id" element={<Disclosure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer Row */}
        <Row className="footer-row">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );

  if (props.path) {
    // SSR mode - metadata is handled by the SSG, don't render Metadata component
    return <StaticRouter location={props.path}>{Content}</StaticRouter>;
  }

  // Client mode
  return (
    <BrowserRouter>
      <Metadata {...getMetaData(metadata)} />
      {Content}
    </BrowserRouter>
  );
};

export default App;
