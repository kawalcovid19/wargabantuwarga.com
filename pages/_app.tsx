import "~/styles/globals.css";
import "nprogress/nprogress.css";

import "typeface-inter";

import { useEffect } from "react";

import { LayoutRoot } from "~/components/layout/layout-root";
import siteConfig from "~/lib/content/site-config";
import { initializeGTM } from "~/lib/gtm";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";

const meta = {
  siteName: siteConfig.site_name,
  title: `${siteConfig.site_tagline} | ${siteConfig.site_name}`,
  tagline: siteConfig.site_tagline,
  description: siteConfig.site_description,
  url: siteConfig.site_url,
};

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleStart = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        NProgress.start();
      }
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  useEffect(initializeGTM, []);

  return (
    <LayoutRoot>
      <DefaultSeo
        canonical={`${meta.url}${router.asPath || "/"}`}
        description={meta.description}
        openGraph={{
          type: "website",
          locale: "id_ID",
          title: meta.title,
          description: meta.description,
          site_name: meta.siteName,
          images: [
            {
              url: "https://wargabantuwarga.com/wbw_og.png",
              alt: meta.siteName,
              height: 640,
              width: 1427,
            },
          ],
        }}
        title={siteConfig.site_tagline}
        titleTemplate={`%s | ${meta.siteName}`}
        twitter={{
          handle: "@WargaBantuWarga",
          site: "@WargaBantuWarga",
          cardType: "summary_large_image",
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

      <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-5X4ZPBX" />

      <Component {...pageProps} />
    </LayoutRoot>
  );
}
