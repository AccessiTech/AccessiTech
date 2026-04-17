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
  // staticMetaData is 1:1 indexed with staticPaths — each entry provides baseline
  // metadata for the corresponding route. Sub-pages fall back to their hub meta.ts;
  // the page's own <Metadata> component overrides head tags in the rendered HTML.
  staticMetaData: [
    'src/App/meta.ts', // 0:  /
    'src/pages/Blog/meta.ts', // 1:  /blog
    'src/App/meta.ts', // 2:  /404
    'src/pages/Blog/wcag-meta.ts', // 3:  /wcag
    'src/pages/Disclosures/meta.ts', // 4:  /disclosures
    'src/pages/Services/meta.ts', // 5:  /services
    'src/pages/Services/meta.ts', // 6:  /services/consulting
    'src/pages/Services/meta.ts', // 7:  /services/consulting/asaaps
    'src/pages/Services/meta.ts', // 8:  /services/consulting/ai-integration
    'src/pages/Services/meta.ts', // 9:  /services/consulting/qa
    'src/pages/Services/meta.ts', // 10: /services/mentorship
    'src/pages/Services/meta.ts', // 11: /services/mentorship/cccs
    'src/pages/Services/meta.ts', // 12: /services/mentorship/coaching
    'src/pages/Services/meta.ts', // 13: /services/mentorship/openclassrooms
    'src/pages/Services/meta.ts', // 14: /services/mentorship/sotc
    'src/pages/Products/meta.ts', // 15: /products
    'src/pages/Products/meta.ts', // 16: /products/wcag-series
    'src/pages/Products/meta.ts', // 17: /products/oss-asaaps
    'src/pages/Products/meta.ts', // 18: /products/cccs
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
