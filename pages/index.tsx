import { Script } from "../components/script";
import data from "../data/wbw.json";
import { bannerBlurData, imgixLoader } from "../lib/imgix-loader";

import { GetStaticProps } from "next";
import Image from "next/image";

type HomeProps = {
  html: string;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      html: data.html,
    },
  };
};

export default function Home(props: HomeProps) {
  return (
    <>
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
          height="0"
          src="https://www.googletagmanager.com/ns.html?id=GTM-5X4ZPBX"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
          width="0"
        />
      </noscript>
      <main>
        <header>
          <h1>
            <Image
              alt="Warga Bantu Warga"
              blurDataURL={bannerBlurData}
              height={144}
              layout="responsive"
              loader={imgixLoader}
              placeholder="blur"
              priority={true}
              quality={70}
              src="hero_banner.png"
              width={320}
            />
          </h1>
        </header>
        <article
          className="prose prose-indigo p-3"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </main>
    </>
  );
}
