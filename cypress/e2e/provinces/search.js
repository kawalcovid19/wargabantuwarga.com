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
      "/provinces/dki-jakarta/ambulans-ambulans-non-covid-serang-ambulance-pospera-081285556116",
    );
  });

  it("gives a contact ambulance on every location either verified or not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta?kebutuhan=Ambulans",
      31,
    );
  });

  it("gives a contact ambulance on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta?kebutuhan=Ambulans",
      11,
      "Terverifikasi",
    );
  });

  it("gives a contact ambulance on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta?kebutuhan=Ambulans",
      14,
      "Belum terverifkasi",
    );
  });

  it("More detail about ambulans", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Ambulans",
      /ambulance pospera - ambulans non covid di serang, dki jakarta/i,
      "/provinces/dki-jakarta/ambulans-ambulans-non-covid-serang-ambulance-pospera-081285556116",
      /ambulance pospera/i,
      /informasi ambulance pospera - ambulans non covid di serang, dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial\./i,
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
      "/provinces/dki-jakarta/bantuan-kebutuhan-pokok-layanan-antar-pangan-gratis-banten-act-humanity-care-line-08001165228",
    );
  });

  it("gives a contact bantuan kebutuhan pokok on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta?kebutuhan=Bantuan%20kebutuhan%20pokok",
      11,
    );
  });

  it("gives a contact bantuan kebutuhan pokok on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta?kebutuhan=Bantuan%20kebutuhan%20pokok",
      9,
      "Terverifikasi",
    );
  });

  it("gives a contact bantuan kebutuhan pokok on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta?kebutuhan=Bantuan%20kebutuhan%20pokok",
      1,
      "Belum terverifkasi",
    );
  });

  it("More detail about bantuan kebutuhan pokok", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      /act humanity care line/i,
      "/provinces/dki-jakarta/bantuan-kebutuhan-pokok-layanan-antar-pangan-gratis-banten-act-humanity-care-line-08001165228",
      /act humanity care line/i,
      /informasi act humanity care line - layanan antar pangan gratis di banten, dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial\./i,
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
      "/provinces/dki-jakarta/donor-plasma-donor-plasma-tangerang-pmi-kota-tangerang-021-5531310",
    );
  });

  it("gives a contact Donor plasma on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Donor plasma",
      "/provinces/dki-jakarta?kebutuhan=Donor%20plasma",
      10,
    );
  });

  it("gives a contact Donor plasma on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Donor plasma",
      "/provinces/dki-jakarta?kebutuhan=Donor%20plasma",
      2,
      "Terverifikasi",
    );
  });

  it("gives a contact Donor plasma on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Donor plasma",
      "/provinces/dki-jakarta?kebutuhan=Donor%20plasma",
      3,
      "Belum terverifkasi",
    );
  });

  it("More detail about Donor plasma", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Donor plasma",
      /pmi kota tangerang/i,
      "/provinces/dki-jakarta/donor-plasma-donor-plasma-tangerang-pmi-kota-tangerang-021-5531310",
      /pmi kota tangerang/i,
      /Informasi PMI Kota Tangerang - Donor plasma di Tangerang, DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial\./i,
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
      "/provinces/dki-jakarta/oksigen-isi-ulang-serang-berkah-jaya-gas-081219231827",
    );
  });

  it("gives a contact Oksigen on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta?kebutuhan=Oksigen",
      95,
    );
  });

  it("gives a contact Oksigen on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta?kebutuhan=Oksigen",
      31,
      "Terverifikasi",
    );
  });

  it("gives a contact Oksigen on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta?kebutuhan=Oksigen",
      51,
      "Belum terverifkasi",
    );
  });

  it("More detail about Oksigen", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Oksigen",
      /berkah jaya gas/i,
      "/provinces/dki-jakarta/oksigen-isi-ulang-serang-berkah-jaya-gas-081219231827",
      /berkah jaya gas/i,
      /Informasi Berkah Jaya Gas - Isi Ulang di Serang, DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial\./i,
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
      "/provinces/dki-jakarta/rumah-sakit-rs-lapangan-tangerang-dompet-dhuafa-crisis-center-08111617104",
    );
  });

  it("gives a contact Rumah sakit on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta?kebutuhan=Rumah%20sakit",
      18,
    );
  });

  it("gives a contact Rumah sakit on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta?kebutuhan=Rumah%20sakit",
      14,
      "Terverifikasi",
    );
  });

  it("gives a contact Rumah sakit on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta?kebutuhan=Rumah%20sakit",
      3,
      "Belum terverifkasi",
    );
  });

  it("More detail about Rumah sakit", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Rumah sakit",
      /dompet dhuafa crisis center/i,
      "/provinces/dki-jakarta/rumah-sakit-rs-lapangan-tangerang-dompet-dhuafa-crisis-center-08111617104",
      /dompet dhuafa crisis center/i,
      /Informasi Dompet Dhuafa Crisis Center - RS Lapangan di Tangerang, DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial\./i,
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
      "/provinces/dki-jakarta/tempat-isolasi-mandiri-paket-isolasi-mandiri-berbayar-tangerang-mayapada-hospital-tangerang-082114123910",
    );
  });

  it("gives a contact Tempat isolasi mandiri on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20isolasi%20mandiri",
      26,
    );
  });

  it("gives a contact Tempat isolasi mandiri on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20isolasi%20mandiri",
      7,
      "Terverifikasi",
    );
  });

  it("gives a contact Tempat isolasi mandiri on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20isolasi%20mandiri",
      18,
      "Belum terverifkasi",
    );
  });

  it("More detail about Tempat isolasi mandiri", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Tempat isolasi mandiri",
      /mayapada hospital tangerang/i,
      "/provinces/dki-jakarta/tempat-isolasi-mandiri-paket-isolasi-mandiri-berbayar-tangerang-mayapada-hospital-tangerang-082114123910",
      /mayapada hospital tangerang/i,
      /Informasi Mayapada Hospital Tangerang - Paket isolasi mandiri berbayar di Tangerang, DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial\./i,
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
      "/provinces/dki-jakarta/tempat-vaksin-layanan-vaksinasi-tangerang-selatan-gor-stadion-benteng-taruna-",
    );
  });

  it("gives a contact Tempat vaksin on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20vaksin",
      125,
    );
  });

  it("gives a contact Tempat vaksin on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20vaksin",
      27,
      "Terverifikasi",
    );
  });

  it("gives a contact Tempat vaksin on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20vaksin",
      89,
      "Belum terverifkasi",
    );
  });

  it("More detail about Tempat vaksin", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Tempat vaksin",
      /gor stadion benteng taruna/i,
      "/provinces/dki-jakarta/tempat-vaksin-layanan-vaksinasi-tangerang-selatan-gor-stadion-benteng-taruna-",
      /gor stadion benteng taruna/i,
      /Informasi GOR Stadion Benteng Taruna - Layanan vaksinasi di Tangerang Selatan, DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial\./i,
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
      "/provinces/dki-jakarta/tes-swab-pcr-swab-test-drive-thru-kab-tangerang-drive-thru-covid-19-bsd-085574677403",
    );
  });

  it("gives a contact Tes swab on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta?kebutuhan=Tes%20swab",
      15,
    );
  });

  it("gives a contact Tes swab on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta?kebutuhan=Tes%20swab",
      8,
      "Terverifikasi",
    );
  });

  it("gives a contact Tes swab on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta?kebutuhan=Tes%20swab",
      6,
      "Belum terverifkasi",
    );
  });

  it("More detail about Tes swab", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Tes swab",
      /drive thru covid-19 bsd/i,
      "/provinces/dki-jakarta/tes-swab-pcr-swab-test-drive-thru-kab-tangerang-drive-thru-covid-19-bsd-085574677403",
      /drive thru covid-19 bsd/i,
      /informasi drive thru covid./i,
    );
  });
});
