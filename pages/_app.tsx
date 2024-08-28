import "../styles/globals.css";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          data-ui5-config
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              theme: "sap_horizon",
            }),
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
