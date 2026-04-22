import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { lazy, Suspense } from 'react';
import Header from '../components/Header/Header';
import { APP_ROOT } from '../pages/Home/Home';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import Metadata from '../components/Metadata/Metadata';
import { getMetaData, MetaDataProps } from '../settings/getMetaData';
import { metadata } from './meta';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

// Lazy-loaded route components
const Home = lazy(() => import('../pages/Home/Home').then(m => ({ default: m.Home })));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const BlogEntry = lazy(() => import('../pages/BlogEntry/BlogEntry'));
const NotFound = lazy(() => import('../pages/404/404'));
const Disclosure = lazy(() =>
  import('../pages/Disclosure/Disclosure').then(m => ({ default: m.Disclosure }))
);
const Disclosures = lazy(() => import('../pages/Disclosures/Disclosures'));
const WCAGSeries = lazy(() => import('../pages/Products/WCAGSeries'));
const OSSASaaPs = lazy(() => import('../pages/Products/OSSASaaPs'));
const CCCs = lazy(() => import('../pages/Products/CCCs'));
const ProductsHub = lazy(() => import('../pages/Products/ProductsHub'));
const ServicesPage = lazy(() => import('../pages/Services/ServicesPage'));
const ConsultingPage = lazy(() => import('../pages/Services/ConsultingPage'));
const MentorshipPage = lazy(() => import('../pages/Services/MentorshipPage'));
const CCCsPage = lazy(() => import('../pages/Services/mentorship/CCCsPage'));
const CoachingPage = lazy(() => import('../pages/Services/mentorship/CoachingPage'));
const OpenClassroomsPage = lazy(() => import('../pages/Services/mentorship/OpenClassroomsPage'));
const SOTCPage = lazy(() => import('../pages/Services/mentorship/SOTCPage'));
const ASaaPsPage = lazy(() => import('../pages/Services/consulting/ASaaPsPage'));
const AIIntegrationPage = lazy(() => import('../pages/Services/consulting/AIIntegrationPage'));
const QAPage = lazy(() => import('../pages/Services/consulting/QAPage'));
const Contact = lazy(() => import('../pages/Contact/Contact'));

export interface AppProps {
  path?: string;
  metadata?: MetaDataProps;
}

export const App = (props: AppProps) => {
  const Content = (
    <>
      <Container fluid className="App" aria-label={APP_ROOT}>
        <ScrollToTop />
        <Header />
        {/* Main Content Row */}
        <Suspense fallback={<LoadingSpinner />}>
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
            {/* Service Routes */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/consulting" element={<ConsultingPage />} />
            <Route path="/services/consulting/asaaps" element={<ASaaPsPage />} />
            <Route path="/services/consulting/ai-integration" element={<AIIntegrationPage />} />
            <Route path="/services/consulting/qa" element={<QAPage />} />
            <Route path="/services/mentorship" element={<MentorshipPage />} />
            <Route path="/services/mentorship/cccs" element={<CCCsPage />} />
            <Route path="/services/mentorship/coaching" element={<CoachingPage />} />
            <Route path="/services/mentorship/openclassrooms" element={<OpenClassroomsPage />} />
            <Route path="/services/mentorship/sotc" element={<SOTCPage />} />
            {/* Product Page Routes */}
            <Route path="/products" element={<ProductsHub />} />
            <Route path="/products/wcag-series" element={<WCAGSeries />} />
            <Route path="/products/oss-asaaps" element={<OSSASaaPs />} />
            <Route path="/products/cccs" element={<CCCs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
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
