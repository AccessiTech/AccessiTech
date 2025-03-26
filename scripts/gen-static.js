import { createServer } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import path from "node:path";
import fs from "node:fs";

import { XMLParser } from "fast-xml-parser";

export const CONFIG = {
  urlSrc: path.resolve(process.cwd(), "public/rss.xml"),
  dest: path.resolve(process.cwd(), "docs"),
  staticPaths: ["/", "/blog"],
  pathsBuilder: (items) =>
    items.map((item) => {
      const { link } = item;
      const id = link.split("/").pop()?.replace(".md", "") || "";
      return `/blog/${id}`; // todo: make this configurable
    }),
  viteServer: {
    root: path.resolve(process.cwd()),
    plugins: [reactPlugin()],
    server: { middlewareMode: true },
    appType: "custom",
  },
  ssrEntry: path.resolve(process.cwd(), "src/server.tsx"),
  // spread the process args onto the config
  ...process.argv,
};

export async function genUrls(config) {
  const RSS = fs.readFileSync(config.urlSrc, "utf-8");
  const parser = new XMLParser();
  const rssOjb = parser.parse(RSS);
  const items = rssOjb.rss.channel.item?.length
    ? rssOjb.rss.channel.item
    : [rssOjb.rss.channel.item];

  // const xml = parser.parseFromString(RSS, "text/xml");
  // const items = xml.querySelectorAll("item");
  const urls = config.staticPaths?.concat(config.pathsBuilder(items)) || [];

  return { config, urls };
}

export async function genStatic({ config, urls }) {
  const vite = await createServer(config.viteServer).catch((err) => {
    console.error(err);
    process.exit(1);
  });
  console.log("Vite server created");

  for (const url of urls) {
    console.log("Vite module loading for ", url);
    const { render } = await vite
      .ssrLoadModule(config.ssrEntry)
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });

    const toBuildPath = (pathPart) => path.join(config.dest, pathPart);
    const indexHtmlContent = fs
      .readFileSync(toBuildPath("index.html"))
      .toString();

    const urlHtmlMarkup = await render(url);
    if (!urlHtmlMarkup) {
      console.error(`No content rendered for ${url}`);
      process.exit(1);
    }

    // update the index.html with the rendered markup
    const urlHtmlContent = indexHtmlContent.replace(
      '<div id="root"></div>',
      `<div id="root">${urlHtmlMarkup}</div>`
    );
    // parse the index.html head into an array of strings
    const headString = indexHtmlContent.match(/<head>[\s\S]*<\/head>/)[0];
    // split head string by each tag
    const head = headString.split(/(?=<\/?[^>]+>)/);
    console.log("HEAD", head);
    // update the index.html head with new metadata tags
    // const urlHtmlContent = indexHtmlContent.replace(
    //   '<head>',

    if (!fs.existsSync(toBuildPath(url))) {
      fs.mkdirSync(toBuildPath(url));
    }
    fs.writeFileSync(toBuildPath(url + ".html"), urlHtmlContent);
    console.log(`Static page generated for ${url}`);
  }
  // shutdown vite
  await vite.close();
}

((config) =>
  genUrls(config)
    .then(genStatic)
    .then(() => {
      console.log("All static pages generated");
    })
    .catch((err) => {
      console.error("Error generating static pages: ", err);
      process.exit(1);
    }))(CONFIG);
