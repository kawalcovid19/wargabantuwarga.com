import {
  LatestNewsItem,
  LatestNewsItemAttributes,
} from "../../informasi-terbaru";

import { build, fake, perBuild } from "@jackfranklin/test-data-bot";

const latestNewsItemAttributesBuilder = build<LatestNewsItemAttributes>({
  fields: {
    title: fake((f) => f.lorem.words()),
    date: fake((f) => f.date.recent().toISOString()),
    link_text: fake((f) => f.lorem.sentence()),
    link: fake((f) => f.internet.url()),
  },
});

export const latestNewsItemBuilder = build<LatestNewsItem>({
  fields: {
    attributes: perBuild(() => latestNewsItemAttributesBuilder()),
    html: fake(
      (f) => `<p>${f.lorem.paragraph()}</p><p>${f.lorem.paragraph()}</p>`,
    ),
  },
});
