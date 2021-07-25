import "~/styles/globals.css";
import "nprogress/nprogress.css";

import "typeface-inter";

import { useEffect } from "react";

import { LayoutRoot } from "~/components/layout/layout-root";
import { Script } from "~/components/script";
import config from "~/lib/config";

import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";

const meta = {
  siteName: config.site_name,
  title: `${config.site_tagline} | ${config.site_name}`,
  tagline: config.site_tagline,
  description: config.site_description,
  url: config.site_url,
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
        title={config.site_tagline}
        titleTemplate={`%s | ${meta.siteName}`}
        twitter={{
          handle: "@KawalCOVID19",
          site: "@KawalCOVID19",
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

      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5X4ZPBX');`,
        }}
      />
      <noscript>
        <iframe
          height="0"
          src="https://www.googletagmanager.com/ns.html?id=GTM-5X4ZPBX"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
          width="0"
        />
      </noscript>
      <Component {...pageProps} />
    </LayoutRoot>
  );
}
