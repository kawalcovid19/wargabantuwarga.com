import { attributes, html } from "../_content/home-page.md";
import { Page } from "../components/layout/page";
import { PageContent } from "../components/layout/page-content";

const HomePage = () => (
  <Page>
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
