import { JsonLdBuilder } from "./jsonld-builder";
import { BreadcrumbItem } from "./ui/breadcrumb";
import {
  makeBreadcrumbJsonLd,
  makeOrganizationJsonLd,
  makeWebPageJsonLd,
  makeWebsiteJsonLd,
} from "~/lib/jsonld-generator";

interface WebpageJsonLd {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export function WebpageJsonLd({
  title,
  description,
  breadcrumbs,
}: WebpageJsonLd) {
  const path = breadcrumbs.find((breadcrumb) => breadcrumb.current)?.href ?? "";
  return JsonLdBuilder({
    jsonsLd: [
      makeBreadcrumbJsonLd(breadcrumbs),
      makeWebPageJsonLd({ title, description, path }),
      makeOrganizationJsonLd(),
      makeWebsiteJsonLd(),
    ],
  });
}
