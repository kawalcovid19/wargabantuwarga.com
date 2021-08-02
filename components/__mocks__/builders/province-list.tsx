import { build, fake } from "@jackfranklin/test-data-bot";
import { ProvinceListItem } from "~/components/province-list";

export const provinceListItemBuilder = build<ProvinceListItem>({
  fields: {
    name: fake((f) => f.address.state()),
    initials: fake((f) => f.address.stateAbbr()),
    slug: fake((f) => f.lorem.slug()),
    count: fake((f) => f.random.number({ min: 1, max: 100 })),
  },
});
