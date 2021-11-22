import 'tailwindcss/tailwind.css'
import '../src/styles/globals.css'
import { Provider as Authprovider } from "next-auth/client";
import { Provider } from 'react-redux';
import { store } from '../src/app/store';

function MyApp({ Component, pageProps }) {
  return (
  <Authprovider session={pageProps.session}>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  </Authprovider>
  )
}

export default MyApp
