import Head from "next/head";
// import Image from "next/image";
// import hero from "../public/hero.png";

type Props = {
  html: string;
  css: string;
};

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Warga Bantu Warga</title>
        <meta
          name="description"
          content="Database ketersediaan bed di RS, donor plasma, dan oksigen"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{ __html: props.css }} />
      </Head>
      <main>
        <header>
          {/* <Image src={hero} alt="Warga Bantu Warga" /> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://firebase-kanvas.imgix.net/warga_bantu_warga/hero_banner.png?auto=format,compress,enhance&fm=pjpg&cs=tinysrgb&fit=scale"
            alt="Warga Bantu Warga"
            height="291"
            width="650"
            style={{ maxWidth: 650, width: "100%" }}
          />
        </header>
        <article dangerouslySetInnerHTML={{ __html: props.html }}></article>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const data = require("../data/wbw.json");
  return { html: data.html, css: data.css };
};
