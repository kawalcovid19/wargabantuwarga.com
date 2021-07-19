import "../styles/globals.css";
import "../styles/fonts.css";

import { LayoutRoot } from "../components/layout/layout-root";
import config from "../lib/config";

import type { AppProps } from "next/app";
import Head from "next/head";

const meta = {
  title: `${config.site_name} | ${config.site_tagline}`,
  description: config.site_description,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutRoot>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta content={meta.title} property="og:title" />
        <meta content={meta.description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta
          content="https://wargabantuwarga.com/wbw.png"
          property="og:image"
        />
        <meta content="689" property="og:image:height" />
        <meta content="601" property="og:image:width" />
        <meta content="summary" name="twitter:card" />
        <meta content={meta.title} name="twitter:title" />
        <meta content={meta.description} name="twitter:description" />
        <meta content="Warga" name="twitter:creator" />
        <meta
          content="0Ierdm0GW-vFOuFxO5TbsI-wCMFVL5FLRQmDtn4XjjA"
          name="google-site-verification"
        />
        <link href="/favicon.ico" rel="icon" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </LayoutRoot>
  );
}
