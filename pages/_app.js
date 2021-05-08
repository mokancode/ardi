import Layout from "../layout/layout";
import "../styles/globals.css";
import "../styles/Hexagon.css";
import "../styles/TermsAndConditionsIcon.css";
import "../styles/MainGradientShape.css";
import "../styles/MobileNavbarClip.css";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import { StylesContextProvider } from "../store/styles-context";
import { RefsContextProvider } from "../store/refs-context";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <StylesContextProvider>
      <RefsContextProvider>
        <Layout>
          <Head>
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
          </Head>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </RefsContextProvider>
    </StylesContextProvider>
  );
}

export default MyApp;
