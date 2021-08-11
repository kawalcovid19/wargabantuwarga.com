import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { Page } from "~/components/layout/page";
import { PageHeader } from "~/components/layout/page-header";
import { PageContent } from "~/components/layout/page-content";
import { EducationItems } from "~/components/education/education-link-items";
import { cloudinaryLoader, getBlurred } from "~/lib/image/cloudinary-loader";
import educations, { Educations } from "~/lib/content/education";

interface EducationPageProps {
  educations: Educations;
}

const meta = {
  title: `Laman Edukasi COVID-19`,
  description: `Kumpulan informasi terbaru COVID-19, tips menjaga kesehatan selama pandemi, vaksinasi, hingga penanganan jika Anda terkonfirmasi positif COVID-19.`,
};

export default function EducationPage(props: EducationPageProps) {
  return (
    <Page>
      <NextSeo
        description={meta.description}
        openGraph={{ title: meta.title, description: meta.description }}
        title={meta.title}
      />
      <PageHeader description={meta.description} title={meta.title} />
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

        <EducationItems educations={props.educations} />
      </PageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      educations,
    },
  };
};
