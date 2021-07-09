import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const meta = {
  title: "Warga Bantu Warga | Informasi Faskes & Alkes Untuk COVID-19",
  description:
    "Inisiatif warga untuk berbagi informasi seputar fasilitas kesehatan & alat kesehatan untuk COVID-19. WargaBantuWarga memudahkan publik mencari & mengakses informasi.",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
