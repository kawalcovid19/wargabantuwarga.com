import { attributes, html } from "../_content/home-page.md";

const HomePage = () => (
  <>
    <article>
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
  </>
);

export default HomePage;
