import { JsonLdBuilder } from "./jsonld-builder";
import {
  makeOrganizationJsonLd,
  makeWebsiteJsonLd,
} from "~/lib/jsonld-generator";

export function WebsiteJsonLd() {
  return JsonLdBuilder({
    jsonsLd: [makeOrganizationJsonLd(), makeWebsiteJsonLd()],
  });
}
