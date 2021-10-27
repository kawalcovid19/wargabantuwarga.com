describe("provinces page typed search", () => {
  beforeEach(() => {
    cy.visit("/provinces");
  });

  it("gives only one result of Sumatera Utara when search keyword is Sumatera", () => {
    cy.findByRole("textbox", {
      name: /cari provinsi:/i,
    }).type("Sumatera Utara");

    cy.findByText(/sumatera utara/i)
      .closest("a")
      .should("have.attr", "href", "/provinces/sumatera-utara");
  });

  it("gives 3 result of Jawa Barat, Tengah, Timur when search keyword is Jawa", () => {
    cy.findByRole("textbox", {
      name: /cari provinsi:/i,
    }).type("Jawa");

    cy.findAllByText(/jawa/i).should("have.length", 3);
  });

  it("gives no result when search keyword does not correspond to any provinces in Indonesia", () => {
    cy.findByRole("textbox", {
      name: /cari provinsi:/i,
    }).type("asdf");

    cy.findByText(/Provinsi tidak ditemukan/i).should("exist");
  });
});

describe("provinces page query param search", () => {
  it("gives only one result of DKI Jakarta when search keyword is dki", () => {
    cy.visit("/provinces?q=dki");

    cy.findByText(/dki jakarta/i)
      .closest("a")
      .should("have.attr", "href", "/provinces/dki-jakarta");
  });

  it("gives 5 result of Sulawesi Utara, Tengah, Selatan, Tenggara, Barat when search keyword is sulawesi", () => {
    cy.visit("/provinces?q=sulawesi");

    cy.findAllByText(/sulawesi/i).should("have.length", 5);
  });

  it("gives no result when search keyword does not correspond to any provinces in Indonesia", () => {
    cy.visit("/provinces?q=asdf");

    cy.findByText(/Provinsi tidak ditemukan/i).should("exist");
  });
});

describe("Detail information about ambulans on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta/ambulans-jasa-sewa-ambulans-dki-jakarta-ambulance-tiyas-jakarta-08111563630",
    );
  });

  it("gives a contact ambulance on every location either verified or not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta?kebutuhan=Ambulans",
      29,
    );
  });

  it("gives a contact ambulance on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta?kebutuhan=Ambulans",
      21,
      "Terverifikasi",
    );
  });

  it("gives a contact ambulance on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta?kebutuhan=Ambulans",
      6,
      "Belum terverifkasi",
    );
  });

  it("More detail about ambulans", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Ambulans",
      /ambulance tiyas jakarta/i,
      "/provinces/dki-jakarta/ambulans-jasa-sewa-ambulans-dki-jakarta-ambulance-tiyas-jakarta-08111563630",
      /ambulance tiyas jakarta/i,
      /informasi ambulance tiyas jakarta - jasa sewa ambulans di dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});

describe("Detail information about bantuan kebutuhan pokok on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta/bantuan-kebutuhan-pokok-layanan-antar-pangan-gratis-dki-jakarta-act-humanity-care-line-08001165228",
    );
  });

  it("gives a contact bantuan kebutuhan pokok on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta?kebutuhan=Bantuan%20kebutuhan%20pokok",
      63,
    );
  });

  it("gives a contact bantuan kebutuhan pokok on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta?kebutuhan=Bantuan%20kebutuhan%20pokok",
      24,
      "Terverifikasi",
    );
  });

  it("gives a contact bantuan kebutuhan pokok on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta?kebutuhan=Bantuan%20kebutuhan%20pokok",
      38,
      "Belum terverifkasi",
    );
  });

  it("More detail about bantuan kebutuhan pokok", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      /act humanity care line/i,
      "/provinces/dki-jakarta/bantuan-kebutuhan-pokok-layanan-antar-pangan-gratis-dki-jakarta-act-humanity-care-line-08001165228",
      /act humanity care line/i,
      /informasi act humanity care line - layanan antar pangan gratis di dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});

describe("Detail information about Donor plasma on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Donor plasma",
      "/provinces/dki-jakarta/donor-plasma-tempat-mendonorkan-plasma-dki-jakarta-gerakan-kebaikan-indonesia-087782772828",
    );
  });

  it("gives a contact Donor plasma on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Donor plasma",
      "/provinces/dki-jakarta?kebutuhan=Donor%20plasma",
      5,
    );
  });

  it("gives a contact Donor plasma on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Donor plasma",
      "/provinces/dki-jakarta?kebutuhan=Donor%20plasma",
      4,
      "Terverifikasi",
    );
  });

  it("gives a contact Donor plasma on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Donor plasma",
      "/provinces/dki-jakarta?kebutuhan=Donor%20plasma",
      0,
      "Belum terverifkasi",
    );
  });

  it("More detail about Donor plasma", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Donor plasma",
      /gerakan kebaikan indonesia/i,
      "/provinces/dki-jakarta/donor-plasma-tempat-mendonorkan-plasma-dki-jakarta-gerakan-kebaikan-indonesia-087782772828",
      /gerakan kebaikan indonesia/i,
      /informasi gerakan kebaikan indonesia - tempat mendonorkan plasma di dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});

describe("Detail information about Kontak penting on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Kontak penting",
      "/provinces/dki-jakarta/kontak-penting-call-center-covid-19-pandeglang-dinas-kesehatan-kab-pandeglang-081386866024",
    );
  });

  it("gives a contact Kontak penting on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Kontak penting",
      "/provinces/dki-jakarta?kebutuhan=Kontak%20penting",
      17,
    );
  });

  it("gives a contact Kontak penting on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Kontak penting",
      "/provinces/dki-jakarta?kebutuhan=Kontak%20penting",
      6,
      "Terverifikasi",
    );
  });

  it("gives a contact Kontak penting on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Kontak penting",
      "/provinces/dki-jakarta?kebutuhan=Kontak%20penting",
      10,
      "Belum terverifkasi",
    );
  });

  it("More detail about Kontak penting", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Kontak penting",
      /dinas kesehatan kab\. pandeglang/i,
      "/provinces/dki-jakarta/kontak-penting-call-center-covid-19-pandeglang-dinas-kesehatan-kab-pandeglang-081386866024",
      /dinas kesehatan kab\. pandeglang/i,
      /Informasi Dinas Kesehatan Kab. Pandeglang - Call center COVID-19 di Pandeglang, DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial\./i,
    );
  });
});

describe("Detail information about Oksigen on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta/oksigen-isi-ulang-tabung-oksigen-jakarta-barat-3r-medika-gas-081286109493",
    );
  });

  it("gives a contact Oksigen on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta?kebutuhan=Oksigen",
      78,
    );
  });

  it("gives a contact Oksigen on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta?kebutuhan=Oksigen",
      48,
      "Terverifikasi",
    );
  });

  it("gives a contact Oksigen on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta?kebutuhan=Oksigen",
      29,
      "Belum terverifkasi",
    );
  });

  it("More detail about Oksigen", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Oksigen",
      /3r medika gas/i,
      "/provinces/dki-jakarta/oksigen-isi-ulang-tabung-oksigen-jakarta-barat-3r-medika-gas-081286109493",
      /3r medika gas/i,
      /informasi 3r medika gas - isi ulang tabung oksigen di jakarta barat, dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});

describe("Detail information about Pemakaman on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Pemakaman",
      "/provinces/dki-jakarta/pemakaman-peti-jenazah-tangerang-bapak-hasan-081213011977",
    );
  });

  it("gives a contact Pemakaman on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Pemakaman",
      "/provinces/dki-jakarta?kebutuhan=Pemakaman",
      3,
    );
  });

  it("gives a contact Pemakaman on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Pemakaman",
      "/provinces/dki-jakarta?kebutuhan=Pemakaman",
      2,
      "Terverifikasi",
    );
  });

  it("gives a contact Pemakaman on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Pemakaman",
      "/provinces/dki-jakarta?kebutuhan=Pemakaman",
      0,
      "Belum terverifkasi",
    );
  });

  it("More detail about Pemakaman", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Pemakaman",
      /bapak hasan/i,
      "/provinces/dki-jakarta/pemakaman-peti-jenazah-tangerang-bapak-hasan-081213011977",
      /bapak hasan/i,
      /Informasi Bapak Hasan - Peti Jenazah di Tangerang, DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial\./i,
    );
  });
});

describe("Detail information about Rumah sakit on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta/rumah-sakit-rumah-sakit-rujukan-dki-jakarta-covid-19-indonesia-",
    );
  });

  it("gives a contact Rumah sakit on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta?kebutuhan=Rumah%20sakit",
      168,
    );
  });

  it("gives a contact Rumah sakit on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta?kebutuhan=Rumah%20sakit",
      64,
      "Terverifikasi",
    );
  });

  it("gives a contact Rumah sakit on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta?kebutuhan=Rumah%20sakit",
      103,
      "Belum terverifkasi",
    );
  });

  it("More detail about Rumah sakit", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Rumah sakit",
      /covid 19 indonesia/i,
      "/provinces/dki-jakarta/rumah-sakit-rumah-sakit-rujukan-dki-jakarta-covid-19-indonesia-",
      /covid 19 indonesia/i,
      /informasi covid 19 indonesia - rumah sakit rujukan di dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});

describe("Detail information about Tempat isolasi mandiri on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta/tempat-isolasi-mandiri-tempat-isoman-berbayar-jakarta-selatan-bamed-medical-081289932503",
    );
  });

  it("gives a contact Tempat isolasi mandiri on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20isolasi%20mandiri",
      41,
    );
  });

  it("gives a contact Tempat isolasi mandiri on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20isolasi%20mandiri",
      12,
      "Terverifikasi",
    );
  });

  it("gives a contact Tempat isolasi mandiri on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20isolasi%20mandiri",
      28,
      "Belum terverifkasi",
    );
  });

  it("More detail about Tempat isolasi mandiri", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Tempat isolasi mandiri",
      /bamed medical/i,
      "/provinces/dki-jakarta/tempat-isolasi-mandiri-tempat-isoman-berbayar-jakarta-selatan-bamed-medical-081289932503",
      /bamed medical/i,
      /informasi bamed medical - tempat isoman berbayar di jakarta selatan, dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});

describe("Detail information about Tempat vaksin on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta/tempat-vaksin-lokasi-vaksin-jakarta-pusat-balai-sidang-jcc-087780030151",
    );
  });

  it("gives a contact Tempat vaksin on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20vaksin",
      233,
    );
  });

  it("gives a contact Tempat vaksin on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20vaksin",
      9,
      "Terverifikasi",
    );
  });

  it("gives a contact Tempat vaksin on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20vaksin",
      219,
      "Belum terverifkasi",
    );
  });

  it("More detail about Tempat vaksin", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Tempat vaksin",
      /balai sidang jcc/i,
      "/provinces/dki-jakarta/tempat-vaksin-lokasi-vaksin-jakarta-pusat-balai-sidang-jcc-087780030151",
      /balai sidang jcc/i,
      /informasi balai sidang jcc - lokasi vaksin di jakarta pusat, dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});

describe("Detail information about Tes swab on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta/tes-swab-pcr-home-service-jakarta-utara-homecare-24-08111513437",
    );
  });

  it("gives a contact Tes swab on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta?kebutuhan=Tes%20swab",
      30,
    );
  });

  it("gives a contact Tes swab on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta?kebutuhan=Tes%20swab",
      2,
      "Terverifikasi",
    );
  });

  it("gives a contact Tes swab on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta?kebutuhan=Tes%20swab",
      27,
      "Belum terverifkasi",
    );
  });

  it("More detail about Tes swab", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Tes swab",
      /homecare 24/i,
      "/provinces/dki-jakarta/tes-swab-pcr-home-service-jakarta-utara-homecare-24-08111513437",
      /homecare 24/i,
      /informasi homecare 24 - pcr home service di jakarta utara, dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});
