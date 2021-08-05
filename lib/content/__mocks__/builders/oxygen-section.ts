import { build, fake } from "@jackfranklin/test-data-bot";
import { Oxygen, OxygenDetail } from "~/lib/content/oxygen-section";

export const oxygenDetailBuilder = build<OxygenDetail>({
  fields: {
    title: fake((f) => f.lorem.sentence()),
    url: fake((f) => f.internet.url()),
  },
});

export const oxygenBuilder = build<Oxygen>({
  fields: {
    oxygen_section: [oxygenDetailBuilder()],
  },
});
