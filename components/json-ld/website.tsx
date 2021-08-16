import { JsonLdBuilder } from "./builder";
import {
  makeOrganizationJsonLd,
  makeWebsiteJsonLd,
} from "~/lib/jsonld-generator";

export function JsonLdWebsite() {
  return JsonLdBuilder({
    jsonsLd: [makeOrganizationJsonLd(), makeWebsiteJsonLd()],
  });
}
