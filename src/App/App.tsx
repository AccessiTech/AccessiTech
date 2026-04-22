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

// Import all route components eagerly so they're available for SSR
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import BlogEntry from '../pages/BlogEntry/BlogEntry';
import NotFound from '../pages/404/404';
import { Disclosure } from '../pages/Disclosure/Disclosure';
import Disclosures from '../pages/Disclosures/Disclosures';
import WCAGSeries from '../pages/Products/WCAGSeries';
import OSSASaaPs from '../pages/Products/OSSASaaPs';
import CCCs from '../pages/Products/CCCs';
import ProductsHub from '../pages/Products/ProductsHub';
import ServicesPage from '../pages/Services/ServicesPage';
import ConsultingPage from '../pages/Services/ConsultingPage';
import MentorshipPage from '../pages/Services/MentorshipPage';
import CCCsPage from '../pages/Services/mentorship/CCCsPage';
import CoachingPage from '../pages/Services/mentorship/CoachingPage';
import OpenClassroomsPage from '../pages/Services/mentorship/OpenClassroomsPage';
import SOTCPage from '../pages/Services/mentorship/SOTCPage';
import ASaaPsPage from '../pages/Services/consulting/ASaaPsPage';
import AIIntegrationPage from '../pages/Services/consulting/AIIntegrationPage';
import QAPage from '../pages/Services/consulting/QAPage';
import Contact from '../pages/Contact/Contact';

export interface AppProps {
  path?: string;
  metadata?: MetaDataProps;
}

export const App = (props: AppProps) => {
  // Detect SSR mode based on whether path prop is set
  const isSSR = Boolean(props.path);

  // Define routes based on mode
  const Home_Route = isSSR
    ? Home
    : (lazy(() => import('../pages/Home/Home').then(m => ({ default: m.Home }))) as any);
  const Blog_Route = isSSR ? Blog : (lazy(() => import('../pages/Blog/Blog')) as any);
  const BlogEntry_Route = isSSR
    ? BlogEntry
    : (lazy(() => import('../pages/BlogEntry/BlogEntry')) as any);
  const NotFound_Route = isSSR ? NotFound : (lazy(() => import('../pages/404/404')) as any);
  const Disclosure_Route = isSSR
    ? Disclosure
    : (lazy(() =>
        import('../pages/Disclosure/Disclosure').then(m => ({ default: m.Disclosure }))
      ) as any);
  const Disclosures_Route = isSSR
    ? Disclosures
    : (lazy(() => import('../pages/Disclosures/Disclosures')) as any);
  const WCAGSeries_Route = isSSR
    ? WCAGSeries
    : (lazy(() => import('../pages/Products/WCAGSeries')) as any);
  const OSSASaaPs_Route = isSSR
    ? OSSASaaPs
    : (lazy(() => import('../pages/Products/OSSASaaPs')) as any);
  const CCCs_Route = isSSR ? CCCs : (lazy(() => import('../pages/Products/CCCs')) as any);
  const ProductsHub_Route = isSSR
    ? ProductsHub
    : (lazy(() => import('../pages/Products/ProductsHub')) as any);
  const ServicesPage_Route = isSSR
    ? ServicesPage
    : (lazy(() => import('../pages/Services/ServicesPage')) as any);
  const ConsultingPage_Route = isSSR
    ? ConsultingPage
    : (lazy(() => import('../pages/Services/ConsultingPage')) as any);
  const MentorshipPage_Route = isSSR
    ? MentorshipPage
    : (lazy(() => import('../pages/Services/MentorshipPage')) as any);
  const CCCsPage_Route = isSSR
    ? CCCsPage
    : (lazy(() => import('../pages/Services/mentorship/CCCsPage')) as any);
  const CoachingPage_Route = isSSR
    ? CoachingPage
    : (lazy(() => import('../pages/Services/mentorship/CoachingPage')) as any);
  const OpenClassroomsPage_Route = isSSR
    ? OpenClassroomsPage
    : (lazy(() => import('../pages/Services/mentorship/OpenClassroomsPage')) as any);
  const SOTCPage_Route = isSSR
    ? SOTCPage
    : (lazy(() => import('../pages/Services/mentorship/SOTCPage')) as any);
  const ASaaPsPage_Route = isSSR
    ? ASaaPsPage
    : (lazy(() => import('../pages/Services/consulting/ASaaPsPage')) as any);
  const AIIntegrationPage_Route = isSSR
    ? AIIntegrationPage
    : (lazy(() => import('../pages/Services/consulting/AIIntegrationPage')) as any);
  const QAPage_Route = isSSR
    ? QAPage
    : (lazy(() => import('../pages/Services/consulting/QAPage')) as any);
  const Contact_Route = isSSR ? Contact : (lazy(() => import('../pages/Contact/Contact')) as any);

  const Content = (
    <>
      <Container fluid className="App" aria-label={APP_ROOT}>
        <ScrollToTop />
        <Header />
        {/* Main Content Row */}
        {isSSR ? (
          // SSR mode: render routes directly without Suspense
          <Routes>
            <Route path="/" element={<Home_Route />} />
            <Route path="/index.html" element={<Home_Route />} />
            <Route path="/blog" element={<Blog_Route hideExcerpt />} />
            <Route path="/blog.html" element={<Blog_Route hideExcerpt />} />
            <Route path="/blog/:id" element={<BlogEntry_Route />} />
            <Route path="/wcag" element={<Blog_Route hideDates hideDescription />} />
            <Route path="/wcag.html" element={<Blog_Route hideDates hideDescription />} />
            <Route path="/wcag/:id" element={<BlogEntry_Route />} />
            <Route path="/disclosures" element={<Disclosures_Route hideDates />} />
            <Route path="/disclosures/:id" element={<Disclosure_Route />} />
            <Route path="/services" element={<ServicesPage_Route />} />
            <Route path="/services/consulting" element={<ConsultingPage_Route />} />
            <Route path="/services/consulting/asaaps" element={<ASaaPsPage_Route />} />
            <Route
              path="/services/consulting/ai-integration"
              element={<AIIntegrationPage_Route />}
            />
            <Route path="/services/consulting/qa" element={<QAPage_Route />} />
            <Route path="/services/mentorship" element={<MentorshipPage_Route />} />
            <Route path="/services/mentorship/cccs" element={<CCCsPage_Route />} />
            <Route path="/services/mentorship/coaching" element={<CoachingPage_Route />} />
            <Route
              path="/services/mentorship/openclassrooms"
              element={<OpenClassroomsPage_Route />}
            />
            <Route path="/services/mentorship/sotc" element={<SOTCPage_Route />} />
            <Route path="/products" element={<ProductsHub_Route />} />
            <Route path="/products/wcag-series" element={<WCAGSeries_Route />} />
            <Route path="/products/oss-asaaps" element={<OSSASaaPs_Route />} />
            <Route path="/products/cccs" element={<CCCs_Route />} />
            <Route path="/contact" element={<Contact_Route />} />
            <Route path="*" element={<NotFound_Route />} />
          </Routes>
        ) : (
          // Client mode: use Suspense + lazy loading
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home_Route />} />
              <Route path="/index.html" element={<Home_Route />} />
              <Route path="/blog" element={<Blog_Route hideExcerpt />} />
              <Route path="/blog.html" element={<Blog_Route hideExcerpt />} />
              <Route path="/blog/:id" element={<BlogEntry_Route />} />
              <Route path="/wcag" element={<Blog_Route hideDates hideDescription />} />
              <Route path="/wcag.html" element={<Blog_Route hideDates hideDescription />} />
              <Route path="/wcag/:id" element={<BlogEntry_Route />} />
              <Route path="/disclosures" element={<Disclosures_Route hideDates />} />
              <Route path="/disclosures/:id" element={<Disclosure_Route />} />
              <Route path="/services" element={<ServicesPage_Route />} />
              <Route path="/services/consulting" element={<ConsultingPage_Route />} />
              <Route path="/services/consulting/asaaps" element={<ASaaPsPage_Route />} />
              <Route
                path="/services/consulting/ai-integration"
                element={<AIIntegrationPage_Route />}
              />
              <Route path="/services/consulting/qa" element={<QAPage_Route />} />
              <Route path="/services/mentorship" element={<MentorshipPage_Route />} />
              <Route path="/services/mentorship/cccs" element={<CCCsPage_Route />} />
              <Route path="/services/mentorship/coaching" element={<CoachingPage_Route />} />
              <Route
                path="/services/mentorship/openclassrooms"
                element={<OpenClassroomsPage_Route />}
              />
              <Route path="/services/mentorship/sotc" element={<SOTCPage_Route />} />
              <Route path="/products" element={<ProductsHub_Route />} />
              <Route path="/products/wcag-series" element={<WCAGSeries_Route />} />
              <Route path="/products/oss-asaaps" element={<OSSASaaPs_Route />} />
              <Route path="/products/cccs" element={<CCCs_Route />} />
              <Route path="/contact" element={<Contact_Route />} />
              <Route path="*" element={<NotFound_Route />} />
            </Routes>
          </Suspense>
        )}
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
