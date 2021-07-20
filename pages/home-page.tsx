import { attributes, html } from "../_content/home-page.md";
import { Page } from "../components/layout/page";
import { PageContent } from "../components/layout/page-content";
import config from "../lib/config";
import { bannerBlurData, imgixLoader } from "../lib/imgix-loader";

import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

const meta = {
  title: `${config.site_name} | ${config.site_tagline}`,
};

const HomePage = () => (
  <Page>
    <NextSeo title={meta.title} titleTemplate="%s" />
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
      <article className="prose prose-indigo p-4 bg-white shadow overflow-hidden rounded-md">
        <h1>{attributes.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <style jsx>{`
        article {
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </PageContent>
  </Page>
);

export default HomePage;
