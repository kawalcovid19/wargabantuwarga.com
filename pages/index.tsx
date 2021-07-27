import { attributes, html } from "~/_content/home-page.md";
import { HomePageContent } from "~/components/home/homepage-content";
import { HomepageHeader } from "~/components/home/homepage-header";
import { HomePageSection } from "~/components/home/homepage-section";
import { HomePageStart } from "~/components/home/homepage-start";
import { Page } from "~/components/layout/page";
import { Container } from "~/components/ui/container";
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
import clsx from "clsx";
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

interface LastUpdatedAlertProps {
  className?: string;
  style?: React.CSSProperties;
}

const LastUpdatedAlert = ({ className, style }: LastUpdatedAlertProps) => (
  <div
    className={clsx(
      "bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:rounded",
      className,
    )}
    style={style}
  >
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
    <HomepageHeader src={attributes.home_banner_image_path} />
    <HomePageContent>
      <Container>
        <HomePageStart />
        <LastUpdatedAlert className="mt-3 mb-3" />
        <HomePageSection>
          <article className="prose prose-indigo">
            {htmr(html, { transform: htmrTransform })}
          </article>
        </HomePageSection>
        <style jsx>{`
          article {
            margin: 0 auto;
          }
          h1 {
            text-align: center;
          }
        `}</style>
      </Container>
    </HomePageContent>
  </Page>
);

export default HomePage;
