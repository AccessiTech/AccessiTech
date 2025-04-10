import { ConfigProps, CONFIG } from "@accessitech/vite-ssg";
import reactPlugin from "@vitejs/plugin-react-swc";
import path from "path";

export const config: ConfigProps = {
  ...CONFIG,
  ssrEntry: path.resolve(process.cwd(), "/src/server.tsx"),
  urlSrc: path.resolve(process.cwd(), "/public/rss.xml"),
  dest: process.cwd() + "/docs",
  staticPaths: ["/", "/blog"],
  staticMetaData: [
    path.resolve(process.cwd(), "/src/App/meta.ts"),
    path.resolve(process.cwd(), "/src/pages/Blog/meta.ts"),
  ],
  productionUrlBase: "https://accessi.tech",
  pathsBuilder: (items) =>
    items.map((item) => {
      const { link } = item;
      const id = link.split("/").pop()?.replace(".md", "") || "";
      return `/blog/${id}`;
    }),
  viteServer: {
    ...CONFIG.viteServer,
    plugins: [reactPlugin()],
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
};

export default config;