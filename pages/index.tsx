import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { HomePageContent } from "~/components/home/homepage-content";
import { HomePageContributing } from "~/components/home/homepage-contributing";
import { HomePageDonation } from "~/components/home/homepage-donation";
import { HomepageHeader } from "~/components/home/homepage-header";
import { HomePageLatestNews } from "~/components/home/homepage-latest-news";
import { HomePageStart } from "~/components/home/homepage-start";
import { HomePageTelemedicineCTA } from "~/components/home/homepage-telemedicine-cta";
import { HomePageWelcome } from "~/components/home/homepage-welcome";
import { HomepageSupportedApps } from "~/components/home/homepage-supported-apps";
import { HomePageWhatsAppCTA } from "~/components/home/homepage-whatsapp-cta";
import { Page } from "~/components/layout/page";
import { Container } from "~/components/ui/container";
import { attributes } from "~/lib/content/home-page";
import { LatestNewsItem } from "~/lib/content/informasi-terbaru";
import siteConfig from "~/lib/content/site-config";
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
        <HomePageWelcome />
        <HomePageWhatsAppCTA />
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
