import { defineConfig } from '@accessitech/vite-ssg';
import reactPlugin from '@vitejs/plugin-react-swc';

export const config = defineConfig({
  ssrEntry: 'src/server.tsx',
  urlSrc: 'public/rss.xml',
  dest: 'docs',
  staticPaths: [
    '/',
    '/blog',
    '/404',
    '/wcag',
    '/disclosures',
    '/services',
    '/services/consulting',
    '/services/consulting/asaaps',
    '/services/consulting/ai-integration',
    '/services/consulting/qa',
    '/services/mentorship',
    '/services/mentorship/cccs',
    '/services/mentorship/coaching',
    '/services/mentorship/openclassrooms',
    '/services/mentorship/sotc',
    '/products',
    '/products/wcag-series',
    '/products/oss-asaaps',
    '/products/cccs',
    '/contact',
  ],
  // staticMetaData is 1:1 indexed with staticPaths — each file provides unique
  // page-level metadata for its route. The page's own <Metadata> component also
  // overrides head tags in the final rendered HTML for full per-page SEO coverage.
  staticMetaData: [
    'src/App/meta.ts', // 0:  /
    'src/pages/Blog/meta.ts', // 1:  /blog
    'src/App/meta.ts', // 2:  /404
    'src/pages/Blog/wcag-meta.ts', // 3:  /wcag
    'src/pages/Disclosures/meta.ts', // 4:  /disclosures
    'src/pages/Services/meta.ts', // 5:  /services
    'src/pages/Services/consulting-meta.ts', // 6:  /services/consulting
    'src/pages/Services/consulting/asaaps-meta.ts', // 7:  /services/consulting/asaaps
    'src/pages/Services/consulting/ai-integration-meta.ts', // 8:  /services/consulting/ai-integration
    'src/pages/Services/consulting/qa-meta.ts', // 9:  /services/consulting/qa
    'src/pages/Services/mentorship-meta.ts', // 10: /services/mentorship
    'src/pages/Services/mentorship/cccs-meta.ts', // 11: /services/mentorship/cccs
    'src/pages/Services/mentorship/coaching-meta.ts', // 12: /services/mentorship/coaching
    'src/pages/Services/mentorship/openclassrooms-meta.ts', // 13: /services/mentorship/openclassrooms
    'src/pages/Services/mentorship/sotc-meta.ts', // 14: /services/mentorship/sotc
    'src/pages/Products/meta.ts', // 15: /products
    'src/pages/Products/wcag-series-meta.ts', // 16: /products/wcag-series
    'src/pages/Products/oss-asaaps-meta.ts', // 17: /products/oss-asaaps
    'src/pages/Products/cccs-meta.ts', // 18: /products/cccs
    'src/App/meta.ts', // 19: /contact
  ],
  productionUrlBase: 'https://accessi.tech',
  pathsBuilder: items =>
    items.map(item => {
      const { link } = item;
      const id = link.split('/').splice(4).join('/') || '';
      const pathname = link.split('/').slice(3, -1);
      return `/${pathname}/${id}`;
    }),
  viteServer: {
    root: process.cwd(),
    plugins: [reactPlugin()], // Add the React plugin here
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          quietDeps: true,
          additionalData: `@import "${process.cwd()}/src/scss/variables.scss";`,
        },
      },
    },
  },
  replaceIndexHtml: true,
});

export default config;
