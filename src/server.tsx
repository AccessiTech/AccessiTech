// import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import App from './App/AppServer'
import Metadata from './components/Metadata/Metadata'
import './scss/index.scss'
import { store } from './store/store'
import { MetaDataProps } from './settings/getMetaData'

console.log('Hello from server.tsx')

export const render = async (path:string) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const component = (<Provider store={store}>
    <App path={path} />
  </Provider>);
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
}

export const renderMetadata = async (data:MetaDataProps) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const component = (<Metadata {...data} />);
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
}