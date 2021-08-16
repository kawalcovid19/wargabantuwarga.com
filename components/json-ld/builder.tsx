import Head from "next/head";

export function JsonLdBuilder({ jsonsLd }: { jsonsLd: unknown[] }) {
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `{"@context": "https://schema.org","@graph": ${JSON.stringify(
            jsonsLd,
          )}}`,
        }}
        type="application/ld+json"
      />
    </Head>
  );
}
