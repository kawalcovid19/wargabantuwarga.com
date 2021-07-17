import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Script } from "../components/script";
import data from "../data/wbw.json";
import { imgixLoader, bannerBlurData } from "../lib/imgix-loader";

type HomeProps = {
  html: string;
  css: string;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      html: data.html,
      css: data.css,
    },
  };
};

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: props.css }} />
      </Head>
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5X4ZPBX');`,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5X4ZPBX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <main>
        <header>
          <h1>
            <Image
              loader={imgixLoader}
              src="hero_banner.png"
              alt="Warga Bantu Warga"
              layout="responsive"
              width={320}
              height={144}
              blurDataURL={bannerBlurData}
              placeholder="blur"
              priority={true}
              quality={70}
            />
          </h1>
        </header>
        <article
          className="p-3"
          dangerouslySetInnerHTML={{ __html: props.html }}
        ></article>
      </main>
    </>
  );
}
