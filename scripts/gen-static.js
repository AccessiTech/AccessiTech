import { createServer } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import path from 'node:path';
import fs from 'node:fs';

import { XMLParser } from 'fast-xml-parser';



export async function genUrls() {
  const RSS = fs.readFileSync(
    path.resolve(process.cwd(), "public/rss.xml"),
    "utf-8"
  );
  const parser = new XMLParser();
  const rssOjb = parser.parse(RSS);
  const items = rssOjb.rss.channel.item?.length ? rssOjb.rss.channel.item : [rssOjb.rss.channel.item];

  // const xml = parser.parseFromString(RSS, "text/xml");
  // const items = xml.querySelectorAll("item");
  const urls = ['/', '/blog'];
  items.forEach((item) => {
    const { link } = item;
    const id = link.split("/").pop()?.replace(".md", "") || "";
    urls.push(`/blog/${id}`);
  });
  return urls;
}

export async function genStatic(url) {
  console.log(`Generating static page for ${url}`);
  const vite = await createServer({
    root: path.resolve(process.cwd()),
    plugins: [reactPlugin()],
    server: { middlewareMode: true },
    appType: "custom",
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
  console.log("Vite server created");
  const { render } = await vite.ssrLoadModule(path.resolve(process.cwd(),"src/server.tsx")).catch((err) => {
    console.error(err);
    process.exit(1);
  });
  console.log("Vite module loaded");
  // load our default index.html file from the build directory
  const toBuildPath = (pathPart) => path.join(process.cwd(), "docs", pathPart);
  const indexHtmlContent = fs
    .readFileSync(toBuildPath("index.html"))
    .toString();
  // console.log('html content loaded', indexHtmlContent);

  const urlHtmlMarkup = await render(url);
  if (!urlHtmlMarkup) {
    console.error(`No content rendered for ${url}`);
    process.exit(1);
  }
  console.log('!!!!!!url html markup', urlHtmlMarkup);
  const urlHtmlContent = indexHtmlContent.replace(
    '<div id="root"></div>',
    `<div id="root">${urlHtmlMarkup}</div>`
  );

  fs.writeFileSync(toBuildPath(url + ".html"), urlHtmlContent);
  // shutdown vite
  await vite.close();
}

genUrls().then(async (urls) => {
  for (const url of urls) {
    await genStatic(url);
  }
  console.log("All static pages generated");
});
