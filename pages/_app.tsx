import "../styles/globals.css";
import "../styles/fonts.css";

import { LayoutRoot } from "../components/layout/layout-root";
import config from "../lib/config";

import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const meta = {
  siteName: config.site_name,
  title: `${config.site_name} | ${config.site_tagline}`,
  tagline: config.site_tagline,
  description: config.site_description,
  url: config.site_url,
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <LayoutRoot>
      <DefaultSeo
        canonical={`${meta.url}${router.asPath || ""}`}
        description={meta.description}
        openGraph={{
          type: "website",
          locale: "id_ID",
          title: meta.tagline,
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
        titleTemplate={`${meta.siteName} | %s`}
        twitter={{
          handle: "@KawalCOVID19",
          site: "@KawalCOVID19",
          cardType: "summary",
        }}
      />
      <Head>
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
