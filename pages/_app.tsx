import "../styles/globals.css";
import "../styles/fonts.css";

import { LayoutRoot } from "../components/layout/layout-root";
import config from "../lib/config";

import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const meta = {
  siteName: config.site_name,
  title: `${config.site_tagline} | ${config.site_name}`,
  tagline: config.site_tagline,
  description: config.site_description,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutRoot>
      <DefaultSeo
        description={meta.description}
        openGraph={{
          type: "website",
          locale: "id_ID",
          title: meta.title,
          description: meta.description,
          site_name: meta.siteName,
          images: [
            {
              url: "https://wargabantuwarga.com/wbw.png",
              alt: meta.siteName,
              height: 689,
              width: 601,
            },
          ],
        }}
        title={config.site_tagline}
        titleTemplate={`%s | ${meta.siteName}`}
        twitter={{
          handle: "@KawalCOVID19",
          site: "@KawalCOVID19",
          cardType: "summary",
        }}
      />
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="0Ierdm0GW-vFOuFxO5TbsI-wCMFVL5FLRQmDtn4XjjA"
          name="google-site-verification"
        />

        <link href="/favicon.ico" rel="icon" />
        <link href="/manifest.json" rel="manifest" />
        <meta content="#1667C2" name="theme-color" />
      </Head>
      <Component {...pageProps} />
    </LayoutRoot>
  );
}
