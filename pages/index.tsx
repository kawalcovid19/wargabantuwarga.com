import { attributes, html } from "~/_content/home-page.md";
import { HomepageHeader } from "~/components/home/homepage-header";
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import config from "~/lib/config";
import {
  heading1Transformer,
  heading2Transformer,
  heading3Transformer,
  heading4Transformer,
  heading5Transformer,
  heading6Transformer,
} from "~/lib/htmr-transformers";

import { ClockIcon } from "@heroicons/react/outline";
import htmr from "htmr";
import { HtmrOptions } from "htmr/src/types";
import { NextSeo } from "next-seo";

const meta = {
  title: `${config.site_tagline} | ${config.site_name}`,
};

const htmrTransform: HtmrOptions["transform"] = {
  h1: heading1Transformer,
  h2: heading2Transformer,
  h3: heading3Transformer,
  h4: heading4Transformer,
  h5: heading5Transformer,
  h6: heading6Transformer,
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
    <HomepageHeader />
    <PageContent>
      <LastUpdatedAlert />
      <article className="prose prose-indigo p-4 bg-white shadow overflow-hidden rounded-md">
        {htmr(html, { transform: htmrTransform })};
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
