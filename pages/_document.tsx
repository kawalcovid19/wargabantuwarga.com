import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter-var-latin.woff2"
            rel="preload"
            type="font/woff2"
          />
        </Head>
        <body>
          <noscript>
            <iframe
              height="0"
              src="https://www.googletagmanager.com/ns.html?id=GTM-5X4ZPBX"
              style={{ display: "none", visibility: "hidden" }}
              title="gtm"
              width="0"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
