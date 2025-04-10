import fs from 'fs';
import path from 'path';
import { Provider } from 'react-redux'
import App from './App/App'
import Metadata from './components/Metadata/Metadata'
import './scss/index.scss'
import { store } from './store/store'
import { MetaDataProps } from './settings/getMetaData'
import { Blog, setBlogEntry } from './store/blog'

console.log('Hello from server.tsx')

export const preload = async (url: string) => {
  const entry = await genEntry(url);
  store.dispatch(setBlogEntry(entry));
};

export const render = async (path: string) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const component = (<Provider store={store}>
    <App path={path} />
  </Provider>);
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
}

export const renderMetadata = async (data: MetaDataProps) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const component = (<Metadata {...data} />);
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
}

export const fetchMetaData = async (url: string): Promise<{ metaData: { [key: string]: string }, fileContent: string }> => {
  const id = url.split("/").pop()?.replace(".md", "") || "";
  const fileContent = fs.readFileSync(
    path.resolve(process.cwd(), "public/data/blog", `${id}.md`),
    { encoding: "utf-8" }
  );
  const metaData = parseMetaData(fileContent);
  return { metaData, fileContent };
};

export const genEntry = async (url: string): Promise<Blog> => {
  const id = url.split("/").pop()?.replace(".md", "") || "";
  const { metaData, fileContent } = await fetchMetaData(url);
  const content = Object.keys(metaData).length
    ? fileContent.substring(fileContent.indexOf("-->") + 3, fileContent.length)
    : fileContent;
  const description = metaData["description"] || "";
  const image = metaData["image"] || "";
  const image_alt = metaData["image_alt"] || "";
  const title = metaData["title"] || content.split("\n")[0].replace("# ", "");
  const date = metaData["date"] || "";

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
}

export const parseMetaData = (text: string): { [key: string]: string } => {
  const metaData: { [key: string]: string } = {};
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