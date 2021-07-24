import { Contact, Province } from "../provinces";

import { build, fake, oneOf, sequence } from "@jackfranklin/test-data-bot";

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
    kontak: fake((f) => f.phone.phoneNumber()),
    verifikasi: 1,
  },
});

export const provinceBuilder = build<Province>({
  fields: {
    id: sequence(),
    name: fake((f) => f.address.state()),
    data: [contactBuilder()],
  },
});
