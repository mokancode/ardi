import Layout from "../layout/layout";
import "../styles/globals.css";
import "../styles/TrapeziusShape.css";
import "../styles/MainGradientShape.css";
import { StylesContextProvider } from "../store/styles-context";
import { RefsContextProvider } from "../store/refs-context";

function MyApp({ Component, pageProps, router }) {
  return (
    <StylesContextProvider>
      <RefsContextProvider>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </RefsContextProvider>
    </StylesContextProvider>
  );
}

export default MyApp;
