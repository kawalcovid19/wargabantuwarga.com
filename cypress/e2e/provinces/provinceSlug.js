describe("Detail information about ambulans on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(/kategori/i, "Ambulans");
  });

  it("gives a contact ambulance on every location either verified or not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta?kebutuhan=Ambulans",
    );
  });

  it("gives a contact ambulance on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta?kebutuhan=Ambulans",
      "Terverifikasi",
    );
  });

  it("gives a contact ambulance on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Ambulans",
      "/provinces/dki-jakarta?kebutuhan=Ambulans",
      "Belum terverifkasi",
    );
  });

  it.skip("More detail about ambulans", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Ambulans",
      /ambulance tiyas jakarta/i,
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
    cy.getDetailProvinces(/kategori/i, "Bantuan kebutuhan pokok");
  });

  it("gives a contact bantuan kebutuhan pokok on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta?kebutuhan=Bantuan%20kebutuhan%20pokok",
    );
  });

  it("gives a contact bantuan kebutuhan pokok on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta?kebutuhan=Bantuan%20kebutuhan%20pokok",
      "Terverifikasi",
    );
  });

  it("gives a contact bantuan kebutuhan pokok on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      "/provinces/dki-jakarta?kebutuhan=Bantuan%20kebutuhan%20pokok",
      "Belum terverifkasi",
    );
  });

  it.skip("More detail about bantuan kebutuhan pokok", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Bantuan kebutuhan pokok",
      /act humanity care line/i,
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
    cy.getDetailProvinces(/kategori/i, "Donor plasma");
  });

  it("gives a contact Donor plasma on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Donor plasma",
      "/provinces/dki-jakarta?kebutuhan=Donor%20plasma",
    );
  });

  it("gives a contact Donor plasma on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Donor plasma",
      "/provinces/dki-jakarta?kebutuhan=Donor%20plasma",
      "Terverifikasi",
    );
  });

  it.skip("More detail about Donor plasma", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Donor plasma",
      /gerakan kebaikan indonesia/i,
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
    cy.getDetailProvinces(/kategori/i, "Kontak penting");
  });

  it("gives a contact Kontak penting on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Kontak penting",
      "/provinces/dki-jakarta?kebutuhan=Kontak%20penting",
    );
  });

  it("gives a contact Kontak penting on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Kontak penting",
      "/provinces/dki-jakarta?kebutuhan=Kontak%20penting",
      "Terverifikasi",
    );
  });

  it.skip("More detail about Kontak penting", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Kontak penting",
      /alteacare/i,
      /alteacare/i,
      /informasi alteacare - layanan telemedicine di dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});

describe("Detail information about Oksigen on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(/kategori/i, "Oksigen");
  });

  it("gives a contact Oksigen on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta?kebutuhan=Oksigen",
    );
  });

  it("gives a contact Oksigen on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta?kebutuhan=Oksigen",
      "Terverifikasi",
    );
  });

  it("gives a contact Oksigen on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Oksigen",
      "/provinces/dki-jakarta?kebutuhan=Oksigen",
      "Belum terverifkasi",
    );
  });

  it.skip("More detail about Oksigen", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Oksigen",
      /3r medika gas/i,
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
    cy.getDetailProvinces(/kategori/i, "Pemakaman");
  });

  it("gives a contact Pemakaman on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Pemakaman",
      "/provinces/dki-jakarta?kebutuhan=Pemakaman",
    );
  });

  it("gives a contact Pemakaman on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Pemakaman",
      "/provinces/dki-jakarta?kebutuhan=Pemakaman",
      "Terverifikasi",
    );
  });

  it.skip("More detail about Pemakaman", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Pemakaman",
      /ambulance mbi jakarta/i,
      /ambulance mbi jakarta/i,
      /informasi ambulance mbi jakarta - mobil jenazah gratis di dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});

describe("Detail information about Rumah sakit on every provinces for example DKI Jakarta", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("gives all detail information on DKI Jakarta with all category and location", () => {
    cy.getDetailProvinces(/kategori/i, "Rumah sakit");
  });

  it("gives a contact Rumah sakit on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta?kebutuhan=Rumah%20sakit",
    );
  });

  it("gives a contact Rumah sakit on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta?kebutuhan=Rumah%20sakit",
      "Terverifikasi",
    );
  });

  it("gives a contact Rumah sakit on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Rumah sakit",
      "/provinces/dki-jakarta?kebutuhan=Rumah%20sakit",
      "Belum terverifkasi",
    );
  });

  it.skip("More detail about Rumah sakit", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Rumah sakit",
      /covid 19 indonesia/i,
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
    cy.getDetailProvinces(/kategori/i, "Tempat isolasi mandiri");
  });

  it("gives a contact Tempat isolasi mandiri on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20isolasi%20mandiri",
    );
  });

  it("gives a contact Tempat isolasi mandiri on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20isolasi%20mandiri",
      "Terverifikasi",
    );
  });

  it("gives a contact Tempat isolasi mandiri on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat isolasi mandiri",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20isolasi%20mandiri",
      "Belum terverifkasi",
    );
  });

  it.skip("More detail about Tempat isolasi mandiri", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Tempat isolasi mandiri",
      /bamed medical/i,
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
    cy.getDetailProvinces(/kategori/i, "Tempat vaksin");
  });

  it("gives a contact Tempat vaksin on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20vaksin",
    );
  });

  it("gives a contact Tempat vaksin on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20vaksin",
      "Terverifikasi",
    );
  });

  it("gives a contact Tempat vaksin on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tempat vaksin",
      "/provinces/dki-jakarta?kebutuhan=Tempat%20vaksin",
      "Belum terverifkasi",
    );
  });

  it.skip("More detail about Tempat vaksin", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Tempat vaksin",
      /balai sidang jcc/i,
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
    cy.getDetailProvinces(/kategori/i, "Tes swab");
  });

  it("gives a contact Tes swab on every location either verified and not verified", () => {
    cy.getAllContact(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta?kebutuhan=Tes%20swab",
    );
  });

  it("gives a contact Tes swab on every location with verified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta?kebutuhan=Tes%20swab",
      "Terverifikasi",
    );
  });

  it("gives a contact Tes swab on every location with unverified contact", () => {
    cy.getAllContactWithStatus(
      /kategori/i,
      "Tes swab",
      "/provinces/dki-jakarta?kebutuhan=Tes%20swab",
      "Belum terverifkasi",
    );
  });

  it.skip("More detail about Tes swab", () => {
    cy.getDescriptionContact(
      /kategori/i,
      "Tes swab",
      /homecare 24/i,
      /homecare 24/i,
      /informasi homecare 24 - pcr home service di jakarta utara, dki jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial./i,
    );
  });
});
