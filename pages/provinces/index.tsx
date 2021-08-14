import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import type { LinksWellProps } from "~/components/links-well";
import { BackButton } from "~/components/layout/back-button";
import { Page, PageContent, PageHeader } from "~/components/layout/page";
import { LinksWell } from "~/components/links-well";
import { ProvinceList, ProvinceListItem } from "~/components/province-list";
import { SearchForm } from "~/components/search-form";
import { SeoText } from "~/components/seo-text";
import provinces from "~/lib/data/provinces";
import { getCurrentMonthAndYear } from "~/lib/date-utils";
import { useSearch } from "~/lib/hooks/use-search";
import { getInitial } from "~/lib/string-utils";
import { getProvinceKebutuhanContactsCount } from "~/lib/data/helpers/provinces";

type ProvincesPageProps = {
  provincesList: ProvinceListItem[];
};

const meta = {
  // @TODO: change this after got a better title
  title: "Informasi Faskes & Alkes untuk COVID-19 di semua provinsi Indonesia",
};

const donorLinksData: LinksWellProps = {
  title: "Butuh Donor Plasma / Ingin Donor Plasma?",
  links: [
    {
      href: "tel:+117",
      text: "117 ext 5 - Contact Center BNPB Donor Konvalesen",
    },
    {
      href: "https://docs.google.com/spreadsheets/u/1/d/16cEvcUm9UjlxEgpP4Gu_5XBdeHW6zCOBzx4frQADD3I/edit?usp=sharing",
      text: "Database Layanan Donor Plasma",
    },
  ],
};

const hospitalLinksData: LinksWellProps = {
  title: "Cek Ketersediaan Tempat Tidur Rumah Sakit",
  links: [
    {
      href: "https://yankes.kemkes.go.id/app/siranap/",
      text: "SIRANAP Kemenkes",
    },
  ],
};

export default function ProvincesPage(props: ProvincesPageProps) {
  const [filteredProvinces, handleSubmitKeywords, urlParams] = useSearch({
    items: props.provincesList,
    fieldNames: ["name"],
  });

  let generalLinksData: LinksWellProps | undefined;

  const router = useRouter();
  const needTypeQuery = router.query.kebutuhan;

  if (typeof needTypeQuery == "string") {
    if (needTypeQuery.toUpperCase() === "RUMAH SAKIT") {
      generalLinksData = hospitalLinksData;
    } else if (needTypeQuery.toUpperCase() === "DONOR PLASMA") {
      generalLinksData = donorLinksData;
    }
  }

  return (
    <Page>
      <NextSeo openGraph={{ title: meta.title }} title={meta.title} />
      <PageHeader
        backButton={<BackButton href="/" />}
        breadcrumbs={[
          {
            name: "Provinsi",
            href: "/provinces",
            current: true,
          },
        ]}
        title="Provinsi"
      />
      <PageContent>
        {generalLinksData && (
          <LinksWell
            links={generalLinksData.links}
            title={generalLinksData.title}
          />
        )}
        <SearchForm
          autoSearch={true}
          checkDocSize={true}
          initialValue={urlParams}
          itemName="provinsi"
          onSubmitKeywords={handleSubmitKeywords}
        />
        <ProvinceList data={filteredProvinces} />
        <SeoText
          textNode={
            <p>
              Cari & Temukan Informasi Fasilitas Kesehatan (Faskes) & Alat
              Kesehatan (Alkes) untuk COVID-19 di seluruh Indonesia per{" "}
              {getCurrentMonthAndYear()}.
            </p>
          }
        />
      </PageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const provincesList = provinces.map(({ name, slug, data }) => ({
    initials: getInitial(name),
    name,
    slug,
    count: data.length,
    ambulansCount: getProvinceKebutuhanContactsCount(data, "Ambulans"),
    rsCount: getProvinceKebutuhanContactsCount(data, "Rumah sakit"),
    donorPlasmaCount: getProvinceKebutuhanContactsCount(data, "Donor plasma"),
    oksigenCount: getProvinceKebutuhanContactsCount(data, "Oksigen"),
  }));

  return {
    props: {
      provincesList,
    },
  };
};
