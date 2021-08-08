import { build, fake } from "@jackfranklin/test-data-bot";
import { Vaccine, VaccineDetail } from "~/lib/content/vaccine-section";

export const vaccineDetailBuilder = build<VaccineDetail>({
  fields: {
    title: fake((f) => f.lorem.sentence()),
    url: fake((f) => f.internet.url()),
  },
});

export const vaccineBuilder = build<Vaccine>({
  fields: {
    vaccine_section: [vaccineDetailBuilder()],
  },
});
