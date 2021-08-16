import siteConfig from "./content/site-config";
import { BreadcrumbItem } from "~/components/ui/breadcrumb";

const HOME_STRUCTURE = {
  "@type": "ListItem",
  position: 1,
  name: "Home",
  item: `${siteConfig.site_url}/`,
};

export function makeBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const breadcrumbsStructure = items.map(
    (item: BreadcrumbItem, idx: number) => {
      return {
        "@type": "ListItem",
        // should start from 2
        position: idx + 2,
        name: item.name,
        item: `${siteConfig.site_url}${item.href}`,
      };
    },
  );

  return {
    "@id": `${siteConfig.site_url}${
      items.find((item) => item.current)?.href ?? ""
    }/#breadcrumb`,
    "@type": "BreadcrumbList",
    itemListElement: [HOME_STRUCTURE, ...breadcrumbsStructure],
  };
}

export function makeOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.site_url}/#organization`,
    name: `${siteConfig.site_name}`,
    url: `${siteConfig.site_url}`,
    sameAs: [
      "https://twitter.com/WargaBantuWarga",
      "https://www.instagram.com/wargabantuwargacom/",
    ],
    logo: {
      "@type": "ImageObject",
      "@id": `${siteConfig.site_url}/#logo`,
      inLanguage: "id-ID",
      url: `${siteConfig.site_url}/logo-square-transparent-512x512.png`,
      contentUrl: `${siteConfig.site_url}/logo-square-transparent-512x512.png`,
      width: 512,
      height: 512,
      caption: `${siteConfig.site_name}`,
    },
    image: {
      "@id": `${siteConfig.site_url}/#logo`,
    },
    foundingDate: "2021-07-05",
    slogan: `${siteConfig.site_tagline}`,
    description: `${siteConfig.site_description}`,
  };
}

export function makeWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.site_url}/#website`,
    url: `${siteConfig.site_url}`,
    name: `${siteConfig.site_name}`,
    description: `${siteConfig.site_description}`,
    publisher: {
      "@id": `${siteConfig.site_url}/#organization`,
    },
    inLanguage: "id-ID",
    copyrightHolder: {
      "@id": `${siteConfig.site_url}/#organization`,
    },
  };
}

interface WebPageJsonLd {
  title: string;
  description: string;
  path?: string;
}

export function makeWebPageJsonLd({ title, description, path }: WebPageJsonLd) {
  const url = path ? siteConfig.site_url + path : siteConfig.site_url;
  return {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url: `${url}`,
    name: `${title}`,
    isPartOf: {
      "@id": `${siteConfig.site_url}/#website`,
    },
    description: `${description}`,
    breadcrumb: {
      "@id": `${url}/#breadcrumb`,
    },
    inLanguage: "id-ID",
  };
}
