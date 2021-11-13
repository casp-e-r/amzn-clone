import 'tailwindcss/tailwind.css'
import '../src/styles/globals.css'
import { Provider as Authprovider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
  <Authprovider session={pageProps.session}>
    <Component {...pageProps} />
  </Authprovider>
  )
}

export default MyApp
