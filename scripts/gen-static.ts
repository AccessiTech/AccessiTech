import { createServer, ViteDevServer } from "vite";
import reactPlugin from "@vitejs/plugin-react-swc";
import path from "node:path";
import fs from "node:fs";
import { XMLParser } from "fast-xml-parser";

import { Blog } from "../src/store/blog"; // todo - remove this dependency

export const getMetaData = (text: string): { [key: string]: string } => {
  const metaData = {};
  const lines = text.split("\n");
  lines.forEach((line) => {
    const key = line.split(":")[0]?.replace("<!--", "").trim();
    const value = line.split(":")[1]?.replace("-->", "").trim();
    if (key && value) {
      metaData[key] = value;
    }
  });
  return metaData;
};

export interface ConfigProps {
  urlSrc: string;
  dest: string;
  staticPaths: string[];
  staticMetaData: string[];
  pathsBuilder: (items: any[]) => string[];
  viteServer: {
    root: string;
    plugins: any[];
    server: {
      middlewareMode: boolean;
      port: number;
      ssr: boolean;
    };
    appType: string;
  };
  ssrEntry: string;
}

// todo: move this to a config file
export const CONFIG: ConfigProps = {
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
    server: { middlewareMode: true, port: 3000, ssr: true },
    appType: "custom",
  },
  ssrEntry: "src/server.tsx",
  // spread the process args onto the config
  ...process.argv,
};

// todo: make this configurable
export async function genUrls(config: ConfigProps) {
  const RSS = fs.readFileSync(
    path.resolve(process.cwd(), config.urlSrc),
    "utf-8"
  );
  const parser = new XMLParser();
  const rssOjb = parser.parse(RSS);
  const items = rssOjb.rss.channel.item?.length
    ? rssOjb.rss.channel.item
    : [rssOjb.rss.channel.item];

  const urls = config.staticPaths?.concat(config.pathsBuilder(items)) || [];
  return { config, urls };
}

export const genEntry = async (url: string) => {
  const id = url.split("/").pop()?.replace(".md", "") || "";
  const fileContent = fs.readFileSync(
    path.resolve(process.cwd(), "public/data/blog", `${id}.md`),
    { encoding: "utf-8" }
  );
  const metaData = getMetaData(fileContent);
  const content = Object.keys(metaData).length
    ? fileContent.substring(fileContent.indexOf("-->") + 3, fileContent.length)
    : fileContent;
  const description = metaData["description"] || "";
  const image = metaData["image"] || "";
  const image_alt = metaData["image_alt"] || "";
  const title = metaData["title"] || content.split("\n")[0].replace("# ", "");
  const date = metaData["date"] || "";

  return {
    loaded: true,
    id,
    title,
    content,
    date,
    description,
    image,
    image_alt,
  };
}

export async function genStatic({ config, urls }) {
  // pre-load the blog entries
  // todo - make this configurable
  const blogEntries: Blog[] = await Promise.all(
    urls.filter((url:string) => !config.staticPaths.includes(url)).map(genEntry)
  );
  console.log("Blog entries loaded");

  // create the Vite server
  const vite: ViteDevServer = await createServer(config.viteServer).catch(
    (err) => {
      console.error(err);
      throw new Error(err);
    }
  );

  // generate the static pages
  const vitePromises = urls.map(async (url:string, index:number) => {
    // load the server entry for the page
    const { render, renderMetadata, dispatchEntry } = await vite
      .ssrLoadModule(path.resolve(process.cwd(), config.ssrEntry))
      .catch((err) => {
        console.error(err);
        throw new Error(err);
      });
    console.log("Vite loaded module  for ", url);

    // todo - make this configurable
    // dispatch the blog entries to the store
    for (const entry of blogEntries) {
      await dispatchEntry(entry);
    }
    console.log("Blog entries dispatched to store");

    // load the index.html and render the App
    const toBuildPath = (pathPart) =>
      path.join(path.resolve(process.cwd(), config.dest), pathPart);
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
      // load the metadata from the static ts file
      const metadataPath = path.resolve(
        process.cwd(),
        config.staticMetaData[index]
      );
      metadata = (await import(metadataPath)).default;
    } else {
      // load the metadata from the blog post markdown file
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

    // define the existing head content of index.html
    const headEnd = "</head>";
    const headEndIndex = urlHtmlContent.indexOf(headEnd);
    const headString = urlHtmlContent.slice(0, headEndIndex).replace(/\n/g, "");

    const headStrings = headString
      .replace(/(?<=>)\s+(?=<)/g, "")
      .replace(/></g, ">^<")
      .split("^");

    // render the metadata to a string
    const metadataString = (await renderMetadata(metadata))
      .replace("<div>", "")
      .replace("</div>", "");

    // parse the metadata string into a library
    const metaTagStrings = metadataString.replace(/></g, ">^<").split("^");
    const metaTagLib = metaTagStrings.reduce((acc, metaTag) => {
      if (!metaTag) return acc;
      const tagType = (metaTag.match(/<(\w+)/) || [])[1];
      if (tagType === "title") {
        return { ...acc, title: metaTag };
      }
      if (tagType === "link") {
        return { ...acc, canonical: metaTag };
      }
      const tagProperty = (metaTag.match(/(\w+)=/) || [])[1];
      const tagPropertyValue = (metaTag.match(/"([^"]+)"/) || [])[1];
      if (!tagProperty || !tagPropertyValue) return acc;
      return { ...acc, [tagPropertyValue]: metaTag };
    }, {});

    // Merge new metadata tags onto existing head metadata
    const newHeadStrings: string[] = [];
    for (const line of headStrings) {
      if (line.includes("<title>")) {
        newHeadStrings.push(metaTagLib.title);
      } else if (line.includes(`<link rel="canonical"`)) {
        newHeadStrings.push(metaTagLib.canonical);
      } else if (line.includes("<meta")) {
        const tagProperty = (line.match(/(\w+)=/) || [])[1];
        const tagPropertyValue = (line.match(/"([^"]+)"/) || [])[1];
        if (!tagProperty || !tagPropertyValue) {
          newHeadStrings.push(line);
          continue;
        }
        const newTag = metaTagLib[tagPropertyValue];
        newHeadStrings.push(newTag || line);
      } else {
        newHeadStrings.push(line);
      }
    }

    // determine which meta tags are not in newHeadStrings and add them to the end
    const unusedMetaTags = Object.keys(metaTagLib).filter(
      (key) => !newHeadStrings.join("").includes(key)
    );
    for (const key of unusedMetaTags) {
      newHeadStrings.push(metaTagLib[key]);
    }

    // rejoin the head strings and the rest of the html content
    const newHeadString = newHeadStrings.join("");
    const urlHtmlContentWithMetadata = `${newHeadString}${urlHtmlContent.slice(
      headEndIndex
    )}`;

    // write the new html content to the build directory
    if (!fs.existsSync(toBuildPath(url))) {
      fs.mkdirSync(toBuildPath(url));
    }
    fs.writeFileSync(toBuildPath(url + ".html"), urlHtmlContentWithMetadata);

    console.log(`Static page generated for ${url}`);
  });

  // Execute all the promises and close the Vite server
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

((config: ConfigProps) =>
  genUrls(config)
    .then(genStatic)
    .catch((err) => {
      console.error("Error generating static pages: ", err);
      process.exit(1);
    }))(CONFIG);
