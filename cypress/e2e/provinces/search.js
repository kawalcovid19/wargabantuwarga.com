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
