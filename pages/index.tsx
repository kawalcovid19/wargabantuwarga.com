import Head from "next/head";

type Props = {
    html: string;
    css: string;
}

export default function Home(props: Props) {
  return (
    <div>
      <Head>
        <title>Warga Bantu Warga</title>
        <meta
          name="description"
          content="Database ketersediaan bed di RS, donor plasma, dan oksigen"
        />
        <link rel="icon" href="/favicon.ico" />
          <style dangerouslySetInnerHTML={{__html: props.css}}/>
      </Head>
      <body dangerouslySetInnerHTML={{__html: props.html}}>
      </body>
    </div>
  );
}

Home.getInitialProps = async () => {
    const data = require('../data/wbw.json')
    return {html: data.html, css: data.css}
}
