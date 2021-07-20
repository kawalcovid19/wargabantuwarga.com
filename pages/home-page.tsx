import { attributes, html } from "../_content/home-page.md";

import { Page } from "@components/layout/page";
import { PageContent } from "@components/layout/page-content";
import { ClockIcon } from "@heroicons/react/outline";
import config from "@lib/config";
import { bannerBlurData, imgixLoader } from "@lib/imgix-loader";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

const meta = {
  title: `${config.site_tagline} | ${config.site_name}`,
};

const LastUpdatedAlert = () => (
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-b mb-3">
    <div className="flex">
      <div className="flex-shrink-0">
        <ClockIcon aria-hidden="true" className="h-5 w-5 text-yellow-400" />
      </div>
      <div className="ml-3">
        <p className="text-sm text-yellow-700">
          Pembaruan terakhir pada{" "}
          {new Date(attributes.last_updated_time).toLocaleString("id", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Asia/Jakarta",
            timeZoneName: "short",
          })}
        </p>
      </div>
    </div>
  </div>
);

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
      <LastUpdatedAlert />
      <article className="prose prose-indigo p-4 bg-white shadow overflow-hidden rounded-md">
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
