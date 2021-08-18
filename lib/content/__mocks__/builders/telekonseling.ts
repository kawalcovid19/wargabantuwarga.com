import { build, fake } from "@jackfranklin/test-data-bot";
import { Telecounseling, TelecounselingSupport, TelecounselingContents } from "~/lib/content/telekonseling";

export const telecounselingContentsBuilder = build<TelecounselingContents>({
  fields: {
    title: fake((f) => f.lorem.sentence()),
    url: fake((f) => f.internet.url()),
  },
});

export const telecounselingSupportBuilder = build<TelecounselingSupport>({
  fields: {
    support: fake((f) => f.lorem.sentence()),
    description: fake((f) => f.lorem.paragraph()),
    contents: [telecounselingContentsBuilder()],
  },
});

export const telecounselingBuilder = build<Telecounseling>({
  fields: {
    supports: [telecounselingSupportBuilder()],
  },
});
