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
          content="Inisiatif warga untuk berbagi informasi seputar fasilitas kesehatan dan alat kesehatan untuk COVID-19."
        />
        <meta name="og:title" content="Warga Bantu Warga" />
        <meta
          name="og:description"
          content="Inisiatif warga untuk berbagi informasi seputar fasilitas kesehatan dan alat kesehatan untuk COVID-19."
        />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/wbw.svg" />
        <meta name="og:image:height" content="192" />
        <meta name="og:image:width" content="192" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Warga Bantu Warga" />
        <meta
          name="twitter:description"
          content="Inisiatif warga untuk berbagi informasi seputar fasilitas kesehatan dan alat kesehatan untuk COVID-19."
        />
        <meta name="twitter:creator" content="Warga" />
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
            style={{ maxWidth: 650, height: "auto", width: "100%" }}
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
