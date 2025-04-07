import reactPlugin from "@vitejs/plugin-react-swc";
import { generate, CONFIG, ConfigProps } from "@accessitech/vite-ssg";

const config: ConfigProps = {
  ...CONFIG,
  urlSrc: process.cwd() + "/public/rss.xml",
  dest: process.cwd() + "/docs",
  staticPaths: ["/", "/blog"],
  staticMetaData: [
    process.cwd() + "/src/App/meta.ts",
    process.cwd() + "/src/pages/Blog/meta.ts",
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
};

(async () => {
  console.log("Starting static site generation...");
  await generate(config)
    .catch((error) => {
      console.error("Error during static site generation:", error);
    });
  console.log("...static site generation finished.");
})();
  