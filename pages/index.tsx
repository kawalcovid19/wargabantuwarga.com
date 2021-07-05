import Head from "next/head";
import htmr from "htmr";
import { props } from "../src/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Warga Bantu Warga</title>
        <meta
          name="description"
          content="Database ketersediaan bed di RS, donor plasma, dan oksigen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {htmr(props)}
      </body>
    </div>
  );
}
