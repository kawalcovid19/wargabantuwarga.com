import fs from "fs";
import path from "path";
import htmr from "htmr";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { HomePageContent } from "~/components/home/homepage-content";
import { HomePageContributing } from "~/components/home/homepage-contributing";
import { HomePageDonation } from "~/components/home/homepage-donation";
import { HomepageHeader } from "~/components/home/homepage-header";
import { HomePageLatestNews } from "~/components/home/homepage-latest-news";
import { HomePageSection } from "~/components/home/homepage-section";
import { HomePageStart } from "~/components/home/homepage-start";
// import { HomePageTelemedicineCTA } from "~/components/home/homepage-telemedicine-cta";
import { HomePageWelcome } from "~/components/home/homepage-welcome";
import { HomepageSupportedApps } from "~/components/home/homepage-supported-apps";
import { HomePageWhatsAppCTA } from "~/components/home/homepage-whatsapp-cta";
import { Page } from "~/components/layout/page";
import { Container } from "~/components/ui/container";
import { attributes, html } from "~/lib/content/home-page";
import { LatestNewsItem } from "~/lib/content/informasi-terbaru";
import siteConfig from "~/lib/content/site-config";
import { htmrTransform } from "~/lib/htmr-transformers";
import { HomePageTelemedicineCTA } from "~/components/home/homepage-telemedicine-cta";
import { JsonLdWebsite } from "~/components/json-ld/website";

const meta = {
  title: `${siteConfig.site_tagline} | ${siteConfig.site_name}`,
};

interface HomePageProps {
  latestNews: LatestNewsItem[];
}

const HomePage = (props: HomePageProps) => (
  <Page>
    <NextSeo title={meta.title} titleTemplate="%s" />
    <JsonLdWebsite />
    <HomepageHeader src={attributes.home_banner_image} />
    <HomePageContent>
      <Container className="space-y-3">
        <HomePageStart />
        <HomePageLatestNews latestNews={props.latestNews} />
        <HomePageContributing />
        <HomePageDonation />
        <HomePageTelemedicineCTA />
        <HomepageSupportedApps />
        <HomePageWhatsAppCTA />
        <HomePageWelcome />
        <HomePageSection className="px-4 py-6">
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

export const getStaticProps: GetStaticProps = async () => {
  const markdownFiles = await Promise.all(
    fs
      .readdirSync(path.join(process.cwd(), "_content/informasi-terbaru"))
      .map((fileName) => import(`../_content/informasi-terbaru/${fileName}`)),
  ).catch(() => null);
  const latestNews =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    markdownFiles?.map((markdownFile) => markdownFile.default) ?? [];
  return {
    props: {
      latestNews,
    },
  };
};

export default HomePage;
