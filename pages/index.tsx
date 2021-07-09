import Head from "next/head";
import Script from "next/script";

type Props = {
  html: string;
  css: string;
};

const meta = {
  title: "Warga Bantu Warga | Informasi Faskes & Alkes Untuk COVID-19",
  description:
    "Inisiatif warga untuk berbagi informasi seputar fasilitas kesehatan & alat kesehatan untuk COVID-19. WargaBantuWarga memudahkan publik mencari & mengakses informasi.",
};

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <Script>{`<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5X4ZPBX');</script>`}</Script>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://wargabantuwarga.com/wbw.png"
        />
        <meta property="og:image:height" content="689" />
        <meta property="og:image:width" content="601" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Warga Bantu Warga" />
        <meta
          name="twitter:description"
          content="Inisiatif warga untuk berbagi informasi seputar fasilitas kesehatan dan alat kesehatan untuk COVID-19."
        />
        <meta name="twitter:creator" content="Warga" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/google-font-preconnect */}
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" as="font" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{ __html: props.css }} />
      </Head>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://firebase-kanvas.imgix.net/warga_bantu_warga/hero_banner.png?auto=format,compress,enhance&fm=pjpg&cs=tinysrgb&fit=scale"
              alt="Warga Bantu Warga"
              height="291"
              width="650"
              style={{ maxWidth: 650, height: "auto", width: "100%" }}
            />
          </h1>
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
