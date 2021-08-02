import { build, fake } from "@jackfranklin/test-data-bot";
import { Faq } from "~/lib/data/faqs";

export const faqBuilder = build<Faq>({
  fields: {
    kategori_pertanyaan: fake((f) => f.lorem.words()),
    pertanyaan: fake((f) => f.lorem.sentence()),
    jawaban: fake((f) => f.lorem.paragraph()),
    created_date: fake((f) => f.date.recent()),
    sumber: fake((f) => f.lorem.sentence()),
    link: fake((f) => f.internet.url()),
    published_date: fake((f) => f.date.recent()),
  },
});
