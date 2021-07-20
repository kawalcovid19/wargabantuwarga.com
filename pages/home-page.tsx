import { attributes, html } from "../_content/home-page.md";
import { Page } from "../components/layout/page";
import { PageContent } from "../components/layout/page-content";
import config from "../lib/config";

import { NextSeo } from "next-seo";

const meta = {
  title: `${config.site_name} | ${config.site_tagline}`,
};

const HomePage = () => (
  <Page>
    <NextSeo title={meta.title} titleTemplate="%s" />
    <PageContent>
      <article className="prose prose-indigo">
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
