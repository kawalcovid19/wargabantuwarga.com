import { build, fake, perBuild, sequence } from "@jackfranklin/test-data-bot";
import { EntityGroup, LawFirm } from "../../law-firms";

export const lawFirmBuilder = build<LawFirm>({
  fields: {
    id: sequence(),
    slug: fake((f) => f.lorem.slug()),
    nama_lbh: fake((f) => f.company.companyName()),
    alamat: fake((f) => f.address.streetAddress()),
    nomor_kontak: fake((f) => f.phone.phoneNumber()),
    email: fake((f) => f.internet.email()),
    website: fake((f) => f.internet.url()),
    ig: fake((f) => f.internet.url()),
    twitter: fake((f) => f.internet.url()),
    facebook: fake((f) => f.internet.url()),
    youtube: fake((f) => f.internet.url()),
    link_donasi: fake((f) => f.internet.url()),
    verifikasi: 1,
  },
});

export const entityGroupBuilder = build<EntityGroup>({
  fields: {
    id: sequence(),
    name: fake((f) => f.address.state()),
    slug: fake((f) => f.lorem.slug()),
    data: [
      lawFirmBuilder({
        overrides: {
          verifikasi: perBuild(() => 0),
        },
      }),
      lawFirmBuilder({
        overrides: {
          nama_lbh: perBuild(() => "Bravo"),
        },
      }),
      lawFirmBuilder({
        overrides: {
          nama_lbh: perBuild(() => "Alpha"),
        },
      }),
    ],
  },
});
