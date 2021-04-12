import Layout from "../layout/layout";
import "../styles/globals.css";
import { StylesContextProvider } from "../store/styles-context";

function MyApp({ Component, pageProps, router }) {
  return (
    <StylesContextProvider>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </StylesContextProvider>
  );
}

export default MyApp;
