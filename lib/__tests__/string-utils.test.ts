import {
  allIsEmptyString,
  getInitial,
  getKebabCase,
  isInternalLink,
  isNotEmpty,
  toSnakeCase,
  toTitleCase,
} from "../string-utils";

describe("toSnakeCase", () => {
  it.each`
    input            | expected
    ${"Foo Bar"}     | ${"foo_bar"}
    ${"DKI Jakarta"} | ${"dki_jakarta"}
  `(
    "should return '$expected' when '$input' is provided",
    ({ input, expected }) => {
      expect(toSnakeCase(input as string)).toBe(expected);
    },
  );
});

describe("toTitleCase", () => {
  it.each`
    input            | expected
    ${"foo bar"}     | ${"Foo Bar"}
    ${"DKI Jakarta"} | ${"DKI Jakarta"}
  `(
    "should return '$expected' when '$input' is provided",
    ({ input, expected }) => {
      expect(toTitleCase(input as string)).toBe(expected);
    },
  );
});

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

describe("isNotEmpty", () => {
  it.each`
    input            | expected
    ${""}            | ${false}
    ${"DKI Jakarta"} | ${true}
  `(
    "should return '$expected' when '$input' is provided",
    ({ input, expected }) => {
      expect(isNotEmpty(input as string)).toBe(expected);
    },
  );
});

describe("getInitial", () => {
  it.each`
    input            | expected
    ${"dki jakarta"} | ${"D"}
  `(
    "should return '$expected' when '$input' is provided",
    ({ input, expected }) => {
      expect(getInitial(input as string)).toBe(expected);
    },
  );
});

describe("allIsEmptyString", () => {
  it.each`
    input                  | expected
    ${["dki-jakarta"]}     | ${false}
    ${["dki-jakarta", ""]} | ${false}
    ${[""]}                | ${true}
  `(
    "should return '$expected' when '$input' is provided",
    ({ input, expected }) => {
      expect(allIsEmptyString(input as string[])).toBe(expected);
    },
  );
});

describe("isInternalLink", () => {
  it.each`
    input                                                                     | expected
    ${"/faq"}                                                                 | ${true}
    ${"https://www.wargabantuwarga.com"}                                      | ${true}
    ${"https://www.wargabantuwarga.com/"}                                     | ${true}
    ${"https://www.wargabantuwarga.com/provinces"}                            | ${true}
    ${"https://www.wargabantuwarga.com/provinces"}                            | ${true}
    ${"https://hotline.wargabantuwarga.com"}                                  | ${true}
    ${"https://hotline-wargabantuwarga.com"}                                  | ${false}
    ${"https://kawalcovid19.id/content/1931/cara-isolasi-mandiri-yang-benar"} | ${false}
    ${"https://bit.ly/hotlinewarga"}                                          | ${false}
  `(
    "should return '$expected' when '$input' is provided",
    ({ input, expected }) => {
      expect(isInternalLink(input as string)).toBe(expected);
    },
  );
});
