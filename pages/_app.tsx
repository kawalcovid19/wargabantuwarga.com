import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import config from "../lib/config";
import Head from "next/head";
import NextScript from "next/script";

const meta = {
  title: `${config.site_name} | ${config.site_tagline}`,
  description: config.site_description,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://wargabantuwarga.com/wbw.png"
        />
        <meta property="og:image:height" content="689" />
        <meta property="og:image:width" content="601" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:creator" content="Warga" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <NextScript
          src="https://js.sentry-cdn.com/0dda1c67a0744907b58c15b965348e63.min.js"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
