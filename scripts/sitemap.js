import fs from "fs";
import path from "path";
import { getMetaData } from "./rss.js";
import { title } from "process";

function readCNAME(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return fileContents.trim(); // Assuming the CNAME file contains only the domain
  } catch (error) {
    console.error(`Error reading CNAME file: ${error.message}`);
    return null;
  }
}

(async () => {
  const url =
    readCNAME(path.resolve(process.cwd(), "./CNAME")) ||
    process.env.SITE_URL ||
    "www.accessi.tech";
  const pages = [
    {
      url: "/",
      changefreq: "monthly",
      priority: 1,
      title: "AccessiTech - Home",
      description: "Welcome to AccessiTech, your go-to source for web accessibility solutions.",
      image: "https://www.accessi.tech/assets/images/default.png",
      imageAlt: "AccessiTech logo",
    },
    {
      url: "/blog",
      changefreq: "weekly",
      priority: 0.9,
      title: "AccessiTech - Blog",
      description: "Explore my blog for the latest insights on web accessibility.",
      image: "https://www.accessi.tech/assets/images/default.png",
      imageAlt: "AccessiTech logo",
    },
  ];
  const blogDir = path.join(process.cwd(), "public/data/blog");
  const blogFiles = fs.readdirSync(blogDir);
  blogFiles.forEach((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const fileMetaData = getMetaData(fileContent);
    const link = `/blog/${file}`.replace(".md", "");
    pages.push({
      ...fileMetaData,
      url: link,
      changefreq: "monthly",
      priority: 0.8,
      image: "https://www.accessi.tech/assets/images/" + (fileMetaData.image || "default.png"),
      imageAlt: fileMetaData.imageAlt || "Blog post image",
    });
  });
  console.log("blog files", pages);

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => {
        return `
          <url>
            <loc>https://${url}${page.url}</loc>
            <lastmod>${
              page.date
                ? new Date(page.date).toISOString()
                : new Date().toISOString()
            }</lastmod>
            <content type="html">
              ${page.title ? `<h1>${page.title}</h1>` : ''}
              ${page.description ? `<p>${page.description}</p>` : ''}
              ${page.image ? `<img src="${page.image}" alt="${page.imageAlt?.replace(/"/g, "'")}" />` : ''}
            </content>
            <changefreq>${page.changefreq}</changefreq>
            <priority>${page.priority}</priority>
          </url>
        `
      }
    )
    .join("")}
  </urlset>`;
  fs.writeFileSync(path.resolve(process.cwd(), "public/sitemap.xml"), sitemap);
  console.log("Sitemap generated");
})();
