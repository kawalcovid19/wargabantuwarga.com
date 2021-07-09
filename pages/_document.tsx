import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="id">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com/"
            crossOrigin="anonymous"
          />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
          <link rel="preload" as="font" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
