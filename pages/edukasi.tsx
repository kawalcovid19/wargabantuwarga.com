import Image from "next/image";
import Link from "next/link";
import { Page } from "~/components/layout/page";
import { PageHeader } from "~/components/layout/page-header";
import { PageContent } from "~/components/layout/page-content";
import { StackedLinkDisclosure } from "~/components/layout/stacked-link-disclosure";
import StackedLink from "~/components/layout/stacked-link";
import { cloudinaryLoader, getBlurred } from "~/lib/image/cloudinary-loader";

const items = [
  {
    title: "Jaga Kesehatan di Masa Pandemi",
    links: [
      {
        title: "Mengenal oximeter dan cara penggunaannya",
        url: "https://www.wargabantuwarga.com/",
      },
      {
        title: "Cara menggunakan masker dobel yang benar",
        url: "https://www.wargabantuwarga.com/",
      },
      {
        title: "Cara jaga kesehatan mental saat pandemi COVID-19",
        url: "https://www.wargabantuwarga.com/",
      },
    ],
  },
  {
    title: "Pelajari Tentang Vaksinasi COVID-19",
    links: [
      {
        title: "Mengenal oximeter dan cara penggunaannya",
        url: "https://www.wargabantuwarga.com/",
      },
      {
        title: "Cara menggunakan masker dobel yang benar",
        url: "https://www.wargabantuwarga.com/",
      },
      {
        title: "Cara jaga kesehatan mental saat pandemi COVID-19",
        url: "https://www.wargabantuwarga.com/",
      },
    ],
  },
  {
    title: "Pelajari Tentang Tes Antigen dan PCR COVID-19",
    links: [
      {
        title: "Mengenal oximeter dan cara penggunaannya",
        url: "https://www.wargabantuwarga.com/",
      },
      {
        title: "Cara menggunakan masker dobel yang benar",
        url: "https://www.wargabantuwarga.com/",
      },
      {
        title: "Cara jaga kesehatan mental saat pandemi COVID-19",
        url: "https://www.wargabantuwarga.com/",
      },
    ],
  },
  {
    title: "Penanganan jika positif COVID19",
    links: [
      {
        title: "Mengenal oximeter dan cara penggunaannya",
        url: "https://www.wargabantuwarga.com/",
      },
      {
        title: "Cara menggunakan masker dobel yang benar",
        url: "https://www.wargabantuwarga.com/",
      },
      {
        title: "Cara jaga kesehatan mental saat pandemi COVID-19",
        url: "https://www.wargabantuwarga.com/",
      },
    ],
  },
];

export default function EducationPage() {
  return (
    <Page>
      <PageHeader
        description="Kumpulan informasi terbaru COVID-19, tips menjaga kesehatan selama
          pandemi, vaksinasi, hingga penanganan jika Anda terkonfirmasi positif
          COVID-19."
        title="Laman Edukasi COVID-19"
      />
      <PageContent>
        <div className="mt-4 mb-8">
          {/* TODO: replace with component from `components/home/homepage-telemedicine-cta.tsx` */}
          <Link href="/telemedicine" passHref>
            <a>
              <Image
                alt="Telemedicine Gratis (Inisiatif Beberapa Dokter) - Cek Sekarang"
                blurDataURL={getBlurred(
                  "v1628431903/telemedicine-banner_2x_gonhgo.png",
                  656,
                )}
                height={236}
                layout="responsive"
                loader={cloudinaryLoader}
                loading="lazy"
                placeholder="blur"
                quality={90}
                src="v1628431903/telemedicine-banner_2x_gonhgo.png"
                width={656}
              />
            </a>
          </Link>
        </div>

        {items.map((item) => (
          <StackedLinkDisclosure key={item.title} title={item.title}>
            <div className="p-2 bg-gray-50 rounded-md">
              <StackedLink links={item.links} />
            </div>
          </StackedLinkDisclosure>
        ))}
      </PageContent>
    </Page>
  );
}
