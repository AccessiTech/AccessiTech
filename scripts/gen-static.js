import { createServer } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import path from "node:path";
import fs from "node:fs";

import { XMLParser } from "fast-xml-parser";
import { getMetaData } from "./rss.js";

export const CONFIG = {
  urlSrc: "public/rss.xml",
  dest: "docs",
  staticPaths: ["/", "/blog"],
  staticMetaData: ["src/App/meta.ts", "src/pages/Blog/meta.ts"],
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
  ssrEntry: "src/server.tsx",
  // spread the process args onto the config
  ...process.argv,
};

export async function genUrls(config) {
  const RSS = fs.readFileSync(path.resolve(process.cwd(), config.urlSrc), "utf-8");
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
    throw new Error(err);
  });
  console.log("Vite server created");

  const vitePromises = urls.map(async (url, index) => {
    console.log("Vite module loading for ", url);
    const { render } = await vite
      .ssrLoadModule(path.resolve(process.cwd(), config.ssrEntry))
      .catch((err) => {
        console.error(err);
        throw new Error(err);
      });
    const toBuildPath = (pathPart) => path.join(path.resolve(process.cwd(), config.dest), pathPart);
    const indexHtmlContent = fs
      .readFileSync(toBuildPath("index.html"))
      .toString();

    const urlHtmlMarkup = await render(url);
    if (!urlHtmlMarkup) {
      const errorStr = `No content rendered for ${url}`;
      console.error(errorStr);
      throw new Error(errorStr);
    }

    // update the index.html with the rendered markup
    const urlHtmlContent = indexHtmlContent.replace(
      '<div id="root"></div>',
      `<div id="root">${urlHtmlMarkup}</div>`
    );

    // get the page metadata
    let metadata;
    const isStatic = typeof config.staticMetaData[index] !== "undefined";
    if (isStatic) {
      const metadataPath = path.resolve(
        process.cwd(),
        config.staticMetaData[index]
      );
      metadata = (await import(metadataPath)).default;
    } else {
      const fileContent = fs.readFileSync(
        path.resolve(
          process.cwd(),
          "public/data/blog",
          `${url.split("/").pop()}.md`
        ),
        { encoding: "utf-8" }
      );
      metadata = getMetaData(fileContent);
    }

    console.log("METADATA", metadata);

    // parse the index.html head into an array of strings
    const headString = indexHtmlContent.match(/<head>[\s\S]*<\/head>/)[0];
    // split head string by each tag
    const head = headString.split(/(?=<\/?[^>]+>)/);
    // console.log("HEAD", head);
    // update the index.html head with new metadata tags
    // const urlHtmlContent = indexHtmlContent.replace(
    //   '<head>',

    if (!fs.existsSync(toBuildPath(url))) {
      fs.mkdirSync(toBuildPath(url));
    }
    fs.writeFileSync(toBuildPath(url + ".html"), urlHtmlContent);
    console.log(`Static page generated for ${url}`);
  });

  Promise.all(vitePromises)
    .then(() => {
      console.log("All static pages generated");
      return vite.close();
    })
    .catch((e) => {
      console.error("Error generating static pages: ", e);
      throw new Error(e);
    });
}

((config) =>
  genUrls(config)
    .then(genStatic)
    .catch((err) => {
      console.error("Error generating static pages: ", err);
      process.exit(1);
    }))(CONFIG);
