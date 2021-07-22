import { BreadcrumbItem } from "~/components/ui/breadcrumb";
import { PUBLIC_PATH } from "~/constants";

const HOME_STRUCTURE = {
  "@type": "ListItem",
  position: 1,
  name: "Home",
  item: `${PUBLIC_PATH}/`,
};

export function makeBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const breadcrumbsStructure = items.map(
    (item: BreadcrumbItem, idx: number) => {
      return {
        "@type": "ListItem",
        // should start from 2
        position: idx + 2,
        name: item.name,
        item: `${PUBLIC_PATH}${item.href}`,
      };
    },
  );

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [HOME_STRUCTURE, ...breadcrumbsStructure],
  };
}
