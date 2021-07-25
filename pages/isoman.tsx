import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { PageHeader } from "~/components/layout/page-header";
import config from "~/lib/config";

import { ExternalLinkIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { NextSeo } from "next-seo";

const meta = {
  title: `Pedoman Isolasi Mandiri | ${config.site_name}`,
};

const links = [
  {
    title: "Cara isolasi mandiri yang benar",
    link: "https://kawalcovid19.id/content/1931/cara-isolasi-mandiri-yang-benar",
  },
  {
    title: "Tanya jawab seputar isoman yang disusun oleh beberapa dokter",
    link: "https://kcov.id/wbw-faq",
  },
  {
    title: "Tips isolasi mandiri COVID-19",
    link: "https://www.klikdokter.com/info-sehat/read/3644016/tips-isolasi-mandiri-covid-19-siapkan-dan-lakukan-ini",
  },
  {
    title: "Panduan isolasi mandiri untuk ibu menyusui",
    link: "https://kawalcovid19.id/content/1987/panduan-isolasi-mandiri-bagi-ibu-menyusui",
  },
  {
    title: "Tips isolasi mandiri untuk orang dewasa (Isoman Starter Kit)",
    link: "https://www.instagram.com/p/CQ8nOCrnarA/",
  },
  {
    title: "Protokol dan kegiatan harian isolasi mandiri",
    link: "https://www.instagram.com/p/CQ8nTLPHC7c/",
  },
  {
    title: "Panduan isolasi mandiri untuk anak",
    link: "https://www.orami.co.id/magazine/panduan-isolasi-mandiri-untuk-anak-dengan-covid-19/",
  },
];

const posko = [
  {
    title:
      "Lihat beragam posko bantuan warga jika butuh bantuan makanan saat isoman",
    link: "https://docs.google.com/spreadsheets/d/1lksiRf7G3c14AGzUI0lVmyG6CQmyWe1iXH90D5LEqq8/edit?usp=sharing",
  },
];

export default function Isoman() {
  return (
    <div>
      <Page>
        <NextSeo openGraph={{ title: meta.title }} title={meta.title} />
        <PageHeader
          backButton={<BackButton href="/" />}
          breadcrumbs={[
            {
              name: "Isoman",
              href: "/isoman",
              current: true,
            },
          ]}
          title="Isolasi Mandiri : Apa yang harus dilakukan?"
        />
        <PageContent>
          <div className="p-4 bg-white shadow overflow-hidden rounded-md">
            <div className="p-2 text-gray-500 mb-4">
              Kumpulan informasi mengenai hal yang perlu Anda ketahui dan
              langkah penting yang perlu Anda lakukan untuk melakukan isolasi
              mandiri.
            </div>
            <div className="p-2 bg-gray-50 rounded-md">
              {links.map((link, i) => (
                <Link key={i} href={link.link}>
                  <a target="_blank">
                    <div
                      className={`${
                        i > 0 ? "border-t" : ""
                      }  mx-2 py-4 flex justify-between`}
                    >
                      <div className="text-lg text-gray-900">{link.title}</div>

                      <span className="text-brand-500 ml-2">
                        <ExternalLinkIcon className="h-6 w-6" />
                      </span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <div className="text-xl font-semibold text-gray-900 pt-6 pb-4">
              Posko Bantuan Warga
            </div>
            <div className="p-2 bg-gray-50 rounded-md">
              {posko.map((pos, i) => (
                <Link key={i} href={pos.link}>
                  <a target="_blank">
                    <div
                      className={`${
                        i > 0 ? "border-t-2" : ""
                      }  mx-2 py-4 flex justify-between`}
                    >
                      <div className="text-lg text-gray-900">{pos.title}</div>

                      <span className="text-brand-500 ml-2">
                        <ExternalLinkIcon className="h-6 w-6" />
                      </span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </PageContent>
      </Page>
    </div>
  );
}
