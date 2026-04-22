import fs from 'fs';
import path from 'path';
import { Provider } from 'react-redux';
import App from './App/App';
import Metadata from './components/Metadata/Metadata';
import './scss/index.scss';
import { store } from './store/store';
import { MetaDataProps } from './settings/getMetaData';
import { Blog, setBlogEntry } from './store/blog';
import { XMLParser } from 'fast-xml-parser';

console.log('Hello from server.tsx');

export const preload = async (url: string, staticPaths: string[]) => {
  if (!staticPaths.includes(url)) {
    const entry = await genEntry(url);
    store.dispatch(setBlogEntry(entry));
    return;
  }

  // console.log('Preloading blog entries for static path:', url);
  // For static paths, preload /rss.xml with fs.readFileSync to populate page entries
  const rss = fs.readFileSync(path.resolve(process.cwd(), 'public', 'rss.xml'), 'utf-8');
  // Parse RSS with fast-xml-parser or similar to get entries
  const parser = new XMLParser();
  const parsed = parser.parse(rss);
  // Support multiple channels
  let channels = parsed.rss.channel;
  if (!Array.isArray(channels)) {
    channels = [channels];
  }
  // Aggregate all items from all channels
  let items: any[] = [];
  channels.forEach((channel: any) => {
    if (channel && channel.item) {
      if (Array.isArray(channel.item)) {
        items = items.concat(channel.item);
      } else {
        items.push(channel.item);
      }
    }
  });
  // console.log('Parsed items:', items.length);
  if (items && items.length) {
    items.forEach(async (item: any) => {
      const url = item.link.replace('accessi.tech/', '').replace('https://', '/');
      const entry = await genEntry(url);
      store.dispatch(setBlogEntry(entry));
    });
  }
};

export const render = async (path: string, metadata?: MetaDataProps) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const component = (
    <Provider store={store}>
      <App path={path} metadata={metadata} />
    </Provider>
  );
  // Use renderToString which supports Suspense better than renderToStaticMarkup
  // However, it will still render Suspense fallbacks. The App component must
  // handle SSR by not using lazy() when path prop is set (SSR mode).
  const staticMarkup = ReactDOMServer.renderToString(component);
  return staticMarkup;
};

export const renderMetadata = async (data: MetaDataProps) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const component = <Metadata {...data} />;
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
};

export const fetchMetaData = async (
  url: string
): Promise<{ metaData: MetaDataProps; fileContent: string }> => {
  // console.log('URL:', url);

  // For dynamic pages, fetch from markdown files
  const id = url.split('/').splice(2).join('/') || '';
  const pathname = url.split('/').slice(1, 2).join('') || '';
  const useData = !url.includes('/disclosures');
  const dir = `public/${useData ? 'data/' : ''}`;
  const fileContent = fs.readFileSync(
    path.resolve(process.cwd(), dir, pathname, `${id}.md`),
    'utf-8'
  );
  const rawMetaData = parseMetaData(fileContent);

  // Map raw metadata to MetaDataProps interface
  const metaData: MetaDataProps = {
    title: rawMetaData['title'] || '',
    description: rawMetaData['description'] || '',
    canonical: `https://accessitech.org${url.replace('.md', '.html')}`,
    type: rawMetaData['type'] || 'article',
    image: rawMetaData['image'] || undefined,
    imageAlt: rawMetaData['image_alt'] || undefined,
    siteName: rawMetaData['siteName'] || undefined,
    twitterCreator: rawMetaData['twitterCreator'] || undefined,
  };

  return { metaData, fileContent };
};

export const genEntry = async (url: string): Promise<Blog> => {
  const id = url.split('/').pop()?.replace('.md', '') || '';
  // console.log('Generating entry for URL:', url, 'ID:', id);
  if (!id) {
    throw new Error('Invalid blog ID');
  }
  const { metaData, fileContent } = await fetchMetaData(url);
  const rawMetaData = parseMetaData(fileContent);

  const content = Object.keys(rawMetaData).length
    ? fileContent.substring(fileContent.indexOf('-->') + 3, fileContent.length)
    : fileContent;
  const description = metaData.description || '';
  const image = metaData.image || '';
  const image_alt = metaData.imageAlt || '';
  const title = metaData.title || content.split('\n')[0].replace('# ', '');
  const date = rawMetaData['date'] || '';
  const previous = rawMetaData['previous'] || undefined;
  const next = rawMetaData['next'] || undefined;
  const pathname = url.split('/').slice(1, 2).join('') || '';

  const entry: Blog = {
    loaded: true,
    id,
    title,
    content,
    date,
    description,
    image,
    image_alt,
    pathname,
  };

  if (previous)
    entry.previous = { url: previous.split(',')[0], title: previous.split(',')[1] || 'Previous' };
  if (next) entry.next = { url: next.split(',')[0], title: next.split(',')[1] || 'Next' };

  return entry;
};

export const parseMetaData = (text: string): { [key: string]: string } => {
  const metaData: { [key: string]: string } = {};

  // Find the start and end of the metadata comment block
  const startIndex = text.indexOf('<!--');
  const endIndex = text.indexOf('-->');

  // If no comment block is found, return empty metadata
  if (startIndex === -1 || endIndex === -1) {
    return metaData;
  }

  // Extract only the content between <!-- and -->
  const metaDataSection = text.substring(startIndex + 4, endIndex);
  const lines = metaDataSection.split('\n');

  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      if (key && value) {
        metaData[key] = value;
      }
    }
  });

  return metaData;
};
