import { ConfigProps, defineConfig } from "@accessitech/vite-ssg";

export const config: ConfigProps = defineConfig({
  ssrEntry: "src/server.tsx",
  urlSrc: "public/rss.xml",
  dest: "docs",
  staticPaths: ["/", "/blog", "/404"],
  staticMetaData: [
    "src/App/meta.ts",
    "src/pages/Blog/meta.ts",
    "src/App/meta.ts",
  ],
  productionUrlBase: "https://accessi.tech",
  pathsBuilder: (items) =>
    items.map((item) => {
      const { link } = item;
      const id = link.split("/").splice(4).join('/') || "";
      return `/blog/${id}`;
    }),
  viteServer: {
    root: process.cwd(),
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          quietDeps: true,
          additionalData: `@import "${process.cwd()}/src/scss/variables.scss";`,
        },
      },
    },
  },
  replaceIndexHtml: true,
});

export default config;