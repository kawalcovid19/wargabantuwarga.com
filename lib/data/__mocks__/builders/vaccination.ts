import { build, fake } from "@jackfranklin/test-data-bot";
import { sequence } from "@jackfranklin/test-data-bot/build";
import { VaccinationContact } from "../../vaccination";

export const vaccinationContactBuilder = build<VaccinationContact>({
  fields: {
    id: sequence(),
    slug: fake((f) => f.lorem.slug()),
    kebutuhan: "Tempat vaksin",
    penyedia: fake((f) => f.company.companyName()),
    keterangan: fake((f) => f.commerce.productName()),
    kontak: fake((f) => f.phone.phoneNumber()),
    alamat: fake((f) => f.address.streetAddress()),
    verifikasi: 1,
    catatan_ketersediaan: fake((f) => f.lorem.sentence()),
    rentang_umur: ["Dewasa (18-59 Tahun)", "Lansia (60-)"],
    buka_waktu: "09:00:00",
    tutup_waktu: "12:00:00",
    mulai_tanggal: "2021-07-26",
    selesai_tanggal: "2021-07-30",
    map: "https://goo.gl/maps/L7BUJexFx3Fiy36bA",
    link: fake((f) => f.internet.domainName()),
  },
});
