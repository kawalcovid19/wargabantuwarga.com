import {
  ContentItem,
  IsolasiMandiri,
  URL,
} from "~/lib/content/isolasi-mandiri";

import { build, fake } from "@jackfranklin/test-data-bot";

export const urlBuilder = build<URL>({
  fields: {
    title: fake((f) => f.lorem.sentence()),
    url: fake((f) => f.internet.url()),
  },
});

export const contentItemBuilder = build<ContentItem>({
  fields: {
    category: fake((f) => f.lorem.words()),
    title: fake((f) => f.lorem.sentence()),
    description: fake((f) => f.lorem.paragraph()),
    links: [urlBuilder()],
  },
});

export const isolasiMandiriBuilder = build<IsolasiMandiri>({
  fields: {
    content_items: [contentItemBuilder()],
  },
});
