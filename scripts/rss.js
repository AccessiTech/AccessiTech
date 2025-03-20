// read files from public/blog and generate rss feed

import fs from 'fs';
import path from 'path';

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
      const title = fileContent.split('\n')[0].replace('# ', '');
      const link = `https://accessi.tech/blog/${file}`.replace('.md', '');
      const pubDate = new Date(fs.statSync(filePath).mtime).toUTCString();
      return `
        <item>
          <title>${title}</title>
          <link>${link}</link>
          <pubDate>${pubDate}</pubDate>
        </item>
      `;
    }
    ).join('')}
  </channel>
</rss>`;
fs.writeFileSync(path.join(process.cwd(), 'public/rss.xml'), rss);
