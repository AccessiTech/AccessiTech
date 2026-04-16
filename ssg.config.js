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
  staticMetaData: [
    'src/App/meta.ts',
    'src/pages/Blog/meta.ts',
    'src/App/meta.ts',
    'src/pages/Blog/wcag-meta.ts',
    'src/pages/Disclosures/meta.ts',
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
