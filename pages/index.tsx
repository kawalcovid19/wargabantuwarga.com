import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Warga Bantu Warga</title>
        <meta name="description" content="Database ketersediaan bed di RS, donor plasma, dan oksigen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe
        id="wbw"
        height="100%"
        width="100%"
        src="https://docs.google.com/document/d/e/2PACX-1vR0xm-hYs5m4smcaA20vo6SgGYgQm-nae-JZku2WAyv8HK5PiE-GrjtvM87e9Kr_rZ2YLd10_gz6reT/pub">
      </iframe>
    </div>
  )
}
