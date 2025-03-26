// import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import App from './App/AppServer.tsx'
import './scss/index.scss'
import { store } from './store/store.ts'



console.log('Hello from server.tsx')
export const render = async (path:string) => {
  console.log('Rendering path:', path)
  const ReactDOMServer = (await import('react-dom/server')).default;
  const component = (<Provider store={store}>
    <App path={path} />
  </Provider>);
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  // const staticString = ReactDOMServer.renderToString(<Root path={path} />);
  console.log('staticMarkup:', staticMarkup)
  // console.log('staticString:', staticString)
  return staticMarkup;
}

