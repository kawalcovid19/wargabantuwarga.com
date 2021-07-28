import { Category, Iso, URL } from "~/lib/isoman-contents";

import { build, fake } from "@jackfranklin/test-data-bot";

export const linkBuilder = build<URL>({
  fields: {
    title: fake((f) => f.lorem.sentence()),
    url: fake((f) => f.internet.url()),
  },
});

export const categoryBuilder = build<Category>({
  fields: {
    category: fake((f) => f.lorem.words()),
    title: fake((f) => f.lorem.sentence()),
    description: fake((f) => f.lorem.paragraph()),
    links: [linkBuilder()],
  },
});

export const isomanBuilder = build<Iso>({
  fields: {
    isoman_contents: [categoryBuilder()],
  },
});
