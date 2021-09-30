import {
  build,
  fake,
  oneOf,
  perBuild,
  sequence,
} from "@jackfranklin/test-data-bot";
import { Contact, Province } from "../../provinces";

export const contactBuilder = build<Contact>({
  fields: {
    id: sequence(),
    slug: fake((f) => f.lorem.slug()),
    kebutuhan: oneOf(
      "Ambulans",
      "Donor plasma",
      "Kontak penting",
      "Layanan isolasi mandiri",
      "Oksigen",
      "Pemakaman",
      "Puskesmas",
      "Rumah sakit",
      "Tempat vaksin",
      "Tes swab",
    ),
    penyedia: fake((f) => f.company.companyName()),
    keterangan: fake((f) => f.commerce.productName()),
    kontak: fake((f) => f.phone.phoneNumber()),
    alamat: fake((f) => f.address.streetAddress()),
    verifikasi: 1,
    catatan_ketersediaan: fake((f) => f.lorem.sentence()),
  },
});

export const provinceBuilder = build<Province>({
  fields: {
    id: sequence(),
    name: fake((f) => f.address.state()),
    slug: fake((f) => f.lorem.slug()),
    data: [
      contactBuilder({
        overrides: {
          verifikasi: perBuild(() => 0),
        },
      }),
      contactBuilder({
        overrides: {
          penyedia: perBuild(() => "Bravo"),
        },
      }),
      contactBuilder({
        overrides: {
          penyedia: perBuild(() => "Alpha"),
        },
      }),
    ],
  },
});
