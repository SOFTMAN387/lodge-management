import '@/styles/globals.css';
import {store,persistor}from '../redux/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
export default function App({ Component, pageProps }) {
  return (<>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
  </PersistGate>
  </Provider>
  
        </>)
}
