import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import App from './App/App.tsx'
import './scss/index.scss'
import { store, persistor } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
