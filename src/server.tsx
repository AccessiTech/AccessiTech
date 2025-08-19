import fs from 'fs';
import path from 'path';
import { Provider } from 'react-redux';
import App from './App/App';
import Metadata from './components/Metadata/Metadata';
import './scss/index.scss';
import { store } from './store/store';
import { MetaDataProps } from './settings/getMetaData';
import { Blog, setBlogEntry } from './store/blog';

console.log('Hello from server.tsx');

export const preload = async (url: string) => {
  const entry = await genEntry(url);
  store.dispatch(setBlogEntry(entry));
};

export const render = async (path: string, metadata?: MetaDataProps) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const component = (
    <Provider store={store}>
      <App path={path} metadata={metadata} />
    </Provider>
  );
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
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
  console.log('URL:', url);

  // For dynamic pages, fetch from markdown files
  const id = url.split('/').splice(2).join('/') || '';
  const pathname = url.split('/').slice(1, 2).join('') || '';
  const fileContent = fs.readFileSync(
    path.resolve(process.cwd(), 'public/data/', pathname, `${id}.md`),
    { encoding: 'utf-8' }
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
