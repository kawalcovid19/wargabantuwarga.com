import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import data from "~/data/wbw.json";
import { bannerBlurData, cloudinaryLoader } from "~/lib/cloudinary-loader";
import siteConfig from "~/lib/site-config";

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
  title: `${siteConfig.site_tagline} | ${siteConfig.site_name}`,
};

export default function Home(props: HomeProps) {
  return (
    <Page>
      <NextSeo title={meta.title} titleTemplate="%s" />
      <Head>
        <style dangerouslySetInnerHTML={{ __html: props.css }} />
      </Head>
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
                  loader={cloudinaryLoader}
                  placeholder="blur"
                  priority={true}
                  src="v1626975062/hero_banner_pdx3xp.png"
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
