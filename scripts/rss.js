// read files from public/blog and generate rss feed

import fs from 'fs';
import path from 'path';

export const getMetaData = (text) => {
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

// Recursively get all .md files from a directory and its subdirectories
function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

const blogDir = path.join(process.cwd(), 'public/data');
const blogFiles = getAllMarkdownFiles(blogDir);

const mapFunc = (filePath) => {
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  // Generate the blog link relative to blogDir
  const relativePath = path.relative(blogDir, filePath).replace(/\\/g, '/');
  const link = `https://accessi.tech/${relativePath}`.replace(".md", "");
  const fileMetaData = getMetaData(fileContent);
  const {
    title,
    date,
    description,
    categories,
    image,
    imageAlt,
    image_copyright,
    status,
    excerpt,
  } = fileMetaData;
  if (status !== 'published') return;
  const imageURI = `https://www.accessi.tech/assets/images/${image || "default.png"}`;
  const altText =
    imageAlt || "Yellow text on gradient background saying, AccessiTech";

  return `
        <item>
          <title>${title}</title>
          <link>${link}</link>
          <pubDate>${date}</pubDate>
          <description>${description}</description>
          <excerpt>${excerpt || description}</excerpt>
          ${categories
      ?.split(",")
      ?.map((category) => `<category>${category.trim()}</category>`)
      .join("")}
          <enclosure url="${imageURI}" type="image/jpeg" length="1234" />
          <media:content url="${imageURI}" type="image/jpeg" medium="image" width="300" height="200" />
          <media:description type="plain">${altText}</media:description>
          <media:thumbnail url="${imageURI}" />
          <media:credit>${image_copyright || "AccessiTech LLC"}</media:credit>
        </item>
      `;
}

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>AccessiTech Blog</title>
    <link>https://accessi.tech/blog</link>
    <description>Explore expert-written articles, tools, and tips to help you build better, more inclusive digital products.</description>
    ${blogFiles
    .filter((filePath) => filePath.includes('/blog/'))
    .map(mapFunc)
    .filter((blog) => blog)
    .join("")}
  </channel>
  <channel>
    <title>WCAG Explained</title>
    <link>https://accessi.tech/wcag</link>
    <description>Learn about the Web Content Accessibility Guidelines (WCAG) and how to implement them effectively.</description>
    ${blogFiles
    .filter((filePath) => filePath.includes('/wcag/'))
    .map(mapFunc)
    .filter((blog) => blog)
    .join("")}
  </channel>
</rss>`;
fs.writeFileSync(path.join(process.cwd(), 'public/rss.xml'), rss);
