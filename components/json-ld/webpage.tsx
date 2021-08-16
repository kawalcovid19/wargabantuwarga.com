import { BreadcrumbItem } from "../ui/breadcrumb";
import { JsonLdBuilder } from "./builder";
import {
  makeBreadcrumbJsonLd,
  makeOrganizationJsonLd,
  makeWebPageJsonLd,
  makeWebsiteJsonLd,
} from "~/lib/jsonld-generator";

interface JsonLdWebpage {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export function JsonLdWebpage({
  title,
  description,
  breadcrumbs,
}: JsonLdWebpage) {
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
