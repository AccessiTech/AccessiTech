import fs from 'fs';
import path from 'path';
import { getMetaData } from './rss.js';

export function readCNAME(filePath, fsDep = fs) {
  try {
    const fileContents = fsDep.readFileSync(filePath, 'utf-8');
    return fileContents.trim();
  } catch (error) {
    // Don't log in pure function
    return null;
  }
}

export function getAllMarkdownFiles(dir, fsDep = fs, pathDep = path) {
  let results = [];
  const list = fsDep.readdirSync(dir);
  list.forEach(file => {
    const filePath = pathDep.join(dir, file);
    const stat = fsDep.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath, fsDep, pathDep));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

export function generateSitemap({
  fsDep = fs,
  pathDep = path,
  rootDir = process.cwd(),
  env = process.env,
  getMetaDataDep = getMetaData,
} = {}) {
  const PUBLIC_IMAGE_DIR = 'https://www.accessi.tech/assets/images/';
  const url =
    readCNAME(pathDep.resolve(rootDir, './CNAME'), fsDep) || env.SITE_URL || 'www.accessi.tech';
  const pages = [
    {
      url: '/',
      changefreq: 'monthly',
      priority: 1,
      title: 'AccessiTech - Home',
      description: 'Welcome to AccessiTech, your go-to source for web accessibility solutions.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'AccessiTech logo',
      status: 'published',
    },
    {
      url: '/blog',
      changefreq: 'weekly',
      priority: 0.9,
      title: 'AccessiTech - Blog',
      description: 'Explore my blog for the latest insights on web accessibility.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'AccessiTech logo',
      status: 'published',
    },
    {
      url: '/wcag',
      changefreq: 'weekly',
      priority: 0.8,
      title: 'AccessiTech - WCAG Explained',
      description:
        'Learn about the Web Content Accessibility Guidelines (WCAG) and how to implement them effectively.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'WCAG guidelines',
      status: 'published',
    },
  ];
  const blogDir = pathDep.join(rootDir, 'public/data');
  const blogFiles = getAllMarkdownFiles(blogDir, fsDep, pathDep);
  blogFiles.forEach(filePath => {
    const fileContent = fsDep.readFileSync(filePath, { encoding: 'utf-8' });
    const relativePath = pathDep.relative(blogDir, filePath).replace(/\\/g, '/');
    const fileMetaData = getMetaDataDep(fileContent);
    const link = `/${relativePath}`.replace('.md', '');
    pages.push({
      ...fileMetaData,
      url: link,
      changefreq: 'monthly',
      priority: 0.8,
      image: PUBLIC_IMAGE_DIR + (fileMetaData.image || 'default.png'),
      imageAlt: fileMetaData.imageAlt || 'Blog post image',
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/1999/xhtml http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
    >
  ${pages
    .map(page => {
      if (page.status !== 'published') return;
      let imagePath = pathDep.resolve(
        rootDir,
        'public/assets/images',
        page.image?.replace(PUBLIC_IMAGE_DIR, '')
      );
      let imageSize = 0;
      if (!fsDep.existsSync(imagePath)) {
        imagePath = pathDep.resolve(rootDir, 'public/assets/images/default.png');
      }
      try {
        const stats = fsDep.statSync(imagePath);
        imageSize = stats.size;
      } catch (e) {
        imageSize = 0;
      }

      return `
          <url>
            <loc>https://${url}${page.url}</loc>
            <lastmod>${page.date ? new Date(page.date).toISOString() : new Date().toISOString()}</lastmod>
            <xhtml:link rel="enclosure" type="image/png" href="${page.image}" length="${imageSize}" />
            <image:image>
              <image:loc>${page.image}</image:loc>
              ${page.imageAlt ? `<image:caption>${page.imageAlt}</image:caption>` : ''}
            </image:image>
            <changefreq>${page.changefreq}</changefreq>
            <priority>${page.priority}</priority>
          </url>
        `;
    })
    .filter(page => page)
    .join('')}
  </urlset>`;
  const outputPath = pathDep.resolve(rootDir, 'public/sitemap.xml');
  return { sitemap, outputPath };
}

// ES module entrypoint check
const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  const { sitemap, outputPath } = generateSitemap({
    fsDep: fs,
    pathDep: path,
    rootDir: process.cwd(),
    env: process.env,
    getMetaDataDep: getMetaData,
  });
  fs.writeFileSync(outputPath, sitemap);
  console.log('Sitemap generated');
}
