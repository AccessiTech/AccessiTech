// read files from public/blog and generate rss feed

import fs from 'fs';
import path from 'path';

const getMetaData = (text) => {
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

const blogDir = path.join(process.cwd(), 'public/blog');
const blogFiles = fs.readdirSync(blogDir);

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>AccessiTech Blog</title>
    <link>https://accessi.tech/blog</link>
    <description>My Blog</description>
    ${blogFiles.map(file => {
      const filePath = path.join(blogDir, file);
      const fileContent =
        fs.readFileSync(filePath, { encoding: 'utf-8' });
        const link = `https://accessi.tech/blog/${file}`.replace('.md', '');
      const fileMetaData = getMetaData(fileContent);
      const { title, date, description } = fileMetaData;
      return `
        <item>
          <title>${title}</title>
          <link>${link}</link>
          <pubDate>${date}</pubDate>
          <description>${description}</description>
        </item>
      `;
    }
    ).join('')}
  </channel>
</rss>`;
fs.writeFileSync(path.join(process.cwd(), 'public/rss.xml'), rss);
