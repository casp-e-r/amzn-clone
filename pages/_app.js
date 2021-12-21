import 'tailwindcss/tailwind.css'
import '../src/styles/globals.css'
import { Provider as Authprovider } from "next-auth/client";
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import { PersistGate } from 'redux-persist/integration/react' //l
import {persistStore} from 'redux-persist';
let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  return (
  <Authprovider session={pageProps.session}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Component {...pageProps} />
    </PersistGate>
    </Provider>
  </Authprovider>
  )
}

export default MyApp
