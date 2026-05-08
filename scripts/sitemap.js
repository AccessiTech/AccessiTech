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
  const list = fsDep.readdirSync(dir.includes('/disclosures') ? dir.replace('/data', '') : dir);
  list.forEach(file => {
    const filePath = pathDep.join(dir, file);
    const stat = fsDep.statSync(
      filePath.includes('/disclosures') ? filePath.replace('/data', '') : filePath
    );
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
    {
      url: '/disclosures',
      changefreq: 'monthly',
      priority: 0.7,
      title: 'AccessiTech - Disclosures',
      description: 'Read our disclosures on accessibility, ads, and more.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'Disclosures page',
      status: 'published',
    },
    // --- Services pages (React-only, not markdown-derived) ---
    {
      url: '/services',
      changefreq: 'monthly',
      priority: 0.9,
      title: 'AccessiTech - Services',
      description:
        'AccessiTech Services: Consulting and Mentorship for organizations building accessible, accountable digital systems — from AI governance to WCAG compliance.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'AccessiTech Services',
      status: 'published',
    },
    {
      url: '/services/consulting',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'AccessiTech - Consulting',
      description:
        'AccessiTech Consulting: accessibility-first software design, agentic AI governance, and WCAG QA for organizations building accountable digital systems.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'AccessiTech Consulting',
      status: 'published',
    },
    {
      url: '/services/consulting/asaaps',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'AccessiTech - ASaaPs',
      description:
        'AccessiTech ASaaP engagements build WCAG 2.2 AA compliant software from day one — screen-reader tested, keyboard navigable, and built for your team to maintain.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'Accessible Software as a Practice',
      status: 'published',
    },
    {
      url: '/services/consulting/ai-integration',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'AccessiTech - Agentic Intelligence Integration',
      description:
        'AccessiTech deploys the EndogenAI governance methodology for accountable, auditable AI systems — open-source framework, paid implementation, no vendor lock-in.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'Agentic AI Integration',
      status: 'published',
    },
    {
      url: '/services/consulting/qa',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'AccessiTech - Quality Assurance & WCAG Testing',
      description:
        'AccessiTech QA: WCAG 2.2 AA audits, manual NVDA/VoiceOver testing, and developer-ready remediation roadmaps for accessible digital systems.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'Quality Assurance and WCAG Testing',
      status: 'published',
    },
    {
      url: '/services/mentorship',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'AccessiTech - Mentorship',
      description:
        'AccessiTech Mentorship: courses, 1:1 coaching, and corporate workshops for teams and individuals building accessibility into their practice.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'AccessiTech Mentorship',
      status: 'published',
    },
    {
      url: '/services/mentorship/cccs',
      changefreq: 'monthly',
      priority: 0.7,
      title: 'AccessiTech - Courses & Content',
      description:
        "AccessiTech's course library covers WCAG 2.2 compliance, web accessibility best practices, and accessible design — free and freemium content for individuals and teams.",
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'Courses and Content Creation',
      status: 'published',
    },
    {
      url: '/services/mentorship/coaching',
      changefreq: 'monthly',
      priority: 0.7,
      title: 'AccessiTech - 1:1 Coaching & Corporate Workshops',
      description:
        'Personalised accessibility coaching for career-switchers and corporate workshops for teams embedding inclusive design into their practice — recorded, captioned, practice-based.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: '1:1 Coaching and Corporate Workshops',
      status: 'published',
    },
    {
      url: '/services/mentorship/openclassrooms',
      changefreq: 'monthly',
      priority: 0.7,
      title: 'AccessiTech - OpenClassrooms Partnership',
      description:
        "AccessiTech's OpenClassrooms mentorship for career-switchers — the operational precedent and values foundation for how we mentor today.",
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'OpenClassrooms Partnership',
      status: 'published',
    },
    {
      url: '/services/mentorship/sotc',
      changefreq: 'monthly',
      priority: 0.7,
      title: 'AccessiTech - State of the Code (SOTC)',
      description:
        'SOTC: a coming-soon community for Disabled Designers and Developers sharing knowledge and building collective expertise in accessible systems design. Free and open.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'State of the Code community',
      status: 'published',
    },
    // --- Products pages (React-only, not markdown-derived) ---
    {
      url: '/products',
      changefreq: 'monthly',
      priority: 0.85,
      title: 'AccessiTech - Products',
      description:
        'AccessiTech Products: the WCAG Series, Open Source Software & ASaaPs, and Curriculum & Content Creation — resources that make accessibility-first design operational.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'AccessiTech Products',
      status: 'published',
    },
    {
      url: '/products/wcag-series',
      changefreq: 'monthly',
      priority: 0.7,
      title: 'AccessiTech - WCAG Series',
      description:
        'Free WCAG 2.2 AA compliance checklists and accessible design pattern guides from AccessiTech.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'WCAG Series',
      status: 'published',
    },
    {
      url: '/products/oss-asaaps',
      changefreq: 'monthly',
      priority: 0.7,
      title: 'AccessiTech - OSS & ASaaPs',
      description:
        'Open-source accessibility tools and ASaaP (Accessibility Software as a Practice) frameworks from AccessiTech. Free methodology, paid implementation support.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'Open Source Software and ASaaPs',
      status: 'published',
    },
    {
      url: '/products/cccs',
      changefreq: 'monthly',
      priority: 0.7,
      title: 'AccessiTech - Curriculum & Content Creation',
      description:
        'Accessible curriculum design and content creation services for organizations, teams, and educators — from AccessiTech.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'Curriculum and Content Creation',
      status: 'published',
    },
    // --- Contact ---
    {
      url: '/contact',
      changefreq: 'yearly',
      priority: 0.6,
      title: 'AccessiTech - Contact',
      description:
        'Get in touch with AccessiTech for accessibility consulting, mentorship, or general enquiries.',
      image: 'https://www.accessi.tech/assets/images/default.png',
      imageAlt: 'Contact AccessiTech',
      status: 'published',
    },
  ];
  const blogDir = pathDep.join(rootDir, 'public/data');
  const blogFiles = getAllMarkdownFiles(blogDir, fsDep, pathDep);
  const disclosuresDir = pathDep.join(rootDir, 'public/disclosures');
  const disclosureFiles = getAllMarkdownFiles(disclosuresDir, fsDep, pathDep);

  [...blogFiles, ...disclosureFiles].forEach(filePath => {
    const fileContent = fsDep.readFileSync(
      filePath.includes('/disclosures') ? filePath.replace('/data', '') : filePath,
      { encoding: 'utf-8' }
    );
    const relativePath = pathDep.relative(blogDir, filePath).replace(/\\/g, '/').replace('../', '');
    const fileMetaData = getMetaDataDep(fileContent);
    const link = `/${relativePath}`.replace('.md', '');
    // Normalize image path - strip leading 'assets/images/' if present to avoid duplication
    const normalizedImage = (fileMetaData.image || 'default.png').replace(/^assets\/images\//, '');
    pages.push({
      ...fileMetaData,
      url: link,
      changefreq: 'monthly',
      priority: 0.8,
      image: PUBLIC_IMAGE_DIR + normalizedImage,
      imageAlt: fileMetaData.imageAlt || 'AccessiTech Logo',
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
