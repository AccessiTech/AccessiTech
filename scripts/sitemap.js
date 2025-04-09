import fs from "fs";
import path from "path";
import { getMetaData } from "./rss.js";

const PUBLIC_IMAGE_DIR = "https://www.accessi.tech/assets/images/";

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
      image: PUBLIC_IMAGE_DIR + (fileMetaData.image || "default.png"),
      imageAlt: fileMetaData.imageAlt || "Blog post image",
    });
  });
  console.log("blog files", pages);

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/1999/xhtml http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
    >
  ${pages
    .map((page) => {
      // get size of image in bytes
      const pathToImage = path.resolve(
        process.cwd(),
        "public/assets/images",
        page.image?.replace(PUBLIC_IMAGE_DIR, "")
      );
      const stats = fs.statSync(pathToImage);
      const imageSize = stats.size;

      return `
          <url>
            <loc>https://${url}${page.url}</loc>
            <lastmod>${
              page.date
                ? new Date(page.date).toISOString()
                : new Date().toISOString()
            }</lastmod>
            <xhtml:link rel="enclosure" type="image/png" href="${
              page.image
            }" length="${imageSize}" />
            <image:image>
              <image:loc>${page.image}</image:loc>
              ${
                page.imageAlt
                  ? `<image:caption>${page.imageAlt}</image:caption>`
                  : ""
              }
            </image:image>
            <changefreq>${page.changefreq}</changefreq>
            <priority>${page.priority}</priority>
          </url>
        `;
    })
    .join("")}
  </urlset>`;
  fs.writeFileSync(path.resolve(process.cwd(), "public/sitemap.xml"), sitemap);
  console.log("Sitemap generated");
})();
