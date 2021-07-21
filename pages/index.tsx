import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { Script } from "~/components/script";
import data from "~/data/wbw.json";
import config from "~/lib/config";
import { bannerBlurData, imgixLoader } from "~/lib/imgix-loader";

import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

type HomeProps = {
  html: string;
  css: string;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      html: data.html,
      css: data.css,
    },
  };
};

const meta = {
  title: `${config.site_tagline} | ${config.site_name}`,
};

export default function Home(props: HomeProps) {
  return (
    <Page>
      <NextSeo title={meta.title} titleTemplate="%s" />
      <Head>
        <style dangerouslySetInnerHTML={{ __html: props.css }} />
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
      <header>
        <div className="max-w-xl mx-auto">
          <h1 className="p-0">
            <Link href="/">
              <a>
                <Image
                  alt="Warga Bantu Warga"
                  blurDataURL={bannerBlurData}
                  height={287}
                  layout="responsive"
                  loader={imgixLoader}
                  placeholder="blur"
                  priority={true}
                  quality={70}
                  src="hero_banner.png"
                  width={640}
                />
              </a>
            </Link>
          </h1>
        </div>
      </header>
      <PageContent>
        <article
          className="home-page-content p-4 bg-white shadow overflow-hidden rounded-md"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </PageContent>
    </Page>
  );
}
