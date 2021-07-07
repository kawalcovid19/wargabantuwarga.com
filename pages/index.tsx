import Head from "next/head";
import data from "../data/wbw.json";

type HomePageProps = {
  html: string;
  css: string;
};

export async function getStaticProps() {
  return {
    props: {
      html: data.html,
      css: data.css,
    },
  };
}

export const config = {
  unstable_runtimeJS: true,
};

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: props.css }} />
      </Head>

      <main>
        <header>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://firebase-kanvas.imgix.net/warga_bantu_warga/hero_banner.png?auto=format,compress,enhance&fm=pjpg&cs=tinysrgb&fit=scale"
            alt="Warga Bantu Warga"
            height="291"
            width="650"
            style={{ maxWidth: 650, height: "auto", width: "100%" }}
          />
        </header>
        <article dangerouslySetInnerHTML={{ __html: props.html }} />
      </main>
    </>
  );
}
