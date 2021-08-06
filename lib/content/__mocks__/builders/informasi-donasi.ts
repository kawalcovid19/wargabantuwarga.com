import { build, fake } from "@jackfranklin/test-data-bot";
import { Donation, DonationDetail } from "~/lib/content/informasi-donasi";

export const donationDetailBuilder = build<DonationDetail>({
  fields: {
    category: fake((f) => f.lorem.sentence()),
    url: fake((f) => f.internet.url()),
    image: fake((f) => f.image.imageUrl()),
    title: fake((f) => f.lorem.paragraph()),
  },
});

export const donationBuilder = build<Donation>({
  fields: {
    donations: [donationDetailBuilder()],
  },
});
