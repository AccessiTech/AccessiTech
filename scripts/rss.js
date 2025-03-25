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

const blogDir = path.join(process.cwd(), 'public/data/blog');
const blogFiles = fs.readdirSync(blogDir);

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>AccessiTech Blog</title>
    <link>https://accessi.tech/blog</link>
    <description>My Blog</description>
    ${blogFiles
      .map((file) => {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
        const link = `https://accessi.tech/blog/${file}`.replace(".md", "");
        const fileMetaData = getMetaData(fileContent);
        const {
          title,
          date,
          description,
          categories,
          image,
          image_alt,
          image_copyright,
        } = fileMetaData;
        const imageURI = `/assets/images/${image || "default.png"}`;
        const altText =
          image_alt || "Yellow text on gradient background saying, AccessiTech";

        return `
        <item>
          <title>${title}</title>
          <link>${link}</link>
          <pubDate>${date}</pubDate>
          <description>${description}</description>
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
      })
      .join("")}
  </channel>
</rss>`;
fs.writeFileSync(path.join(process.cwd(), 'public/rss.xml'), rss);
