import { getKebabCase } from "../string-utils";

describe("getKebabCase", () => {
  it.each`
    input                                                      | expected
    ${"DKI Jakarta"}                                           | ${"dki-jakarta"}
    ${"Daftar Kontak Fasilitas & Alat Kesehatan per Provinsi"} | ${"daftar-kontak-fasilitas-alat-kesehatan-per-provinsi"}
    ${"Laman Edukasi COVID-19"}                                | ${"laman-edukasi-covid-19"}
    ${"Donasi dan Penggalangan Dana"}                          | ${"donasi-dan-penggalangan-dana"}
    ${"D.I. Yogyakarta"}                                       | ${"d-i-yogyakarta"}
    ${"Ambulancesiaga.com"}                                    | ${"ambulancesiaga-com"}
    ${'"PUTRA SOERADI" Jual Peti Mati'}                        | ${"putra-soeradi-jual-peti-mati"}
    ${"Hoo Hap Hwee (Perkumpulan Budi Abadi)"}                 | ${"hoo-hap-hwee-perkumpulan-budi-abadi"}
    ${"UD. Bpk. Giyanto Sedia/Jual Peti Jenazah"}              | ${"ud-bpk-giyanto-sedia-jual-peti-jenazah"}
    ${"Samator, PT. Aneka Gas Industri, Tbk."}                 | ${"samator-pt-aneka-gas-industri-tbk"}
  `(
    "should return '$expected' when '$input' is provided",
    ({ input, expected }) => {
      expect(getKebabCase(input as string)).toBe(expected);
    },
  );
});
