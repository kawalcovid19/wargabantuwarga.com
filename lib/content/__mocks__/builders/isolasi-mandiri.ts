import { build, fake } from "@jackfranklin/test-data-bot";
import { Category, IsolasiMandiri, URL } from "~/lib/content/isolasi-mandiri";

export const urlBuilder = build<URL>({
  fields: {
    title: fake((f) => f.lorem.sentence()),
    url: fake((f) => f.internet.url()),
  },
});

export const categoryBuilder = build<Category>({
  fields: {
    title: fake((f) => f.lorem.sentence()),
    description: fake((f) => f.lorem.paragraph()),
    links: [urlBuilder()],
  },
});

export const isolasiMandiriBuilder = build<IsolasiMandiri>({
  fields: {
    categories: [categoryBuilder()],
  },
});
