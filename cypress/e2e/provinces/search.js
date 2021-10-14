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
    cy.findByRole("combobox", { name: /kategori/i }).select("Ambulans");
    // eslint-disable-next-line chai-friendly/no-unused-expressions
    cy.findAllByText("Ambulans").eq(1).parent().parent().click();
    cy.url().should(
      "include",
      "/provinces/dki-jakarta/ambulans-ambulans-non-covid-serang-ambulance-pospera-081285556116",
    );
  });

  it("gives a contact ambulance on every location either verified and not verified", () => {
    cy.findByRole("combobox", { name: /kategori/i }).select("Ambulans");
    cy.findAllByText("Ambulans").should("have.length", 31);
    cy.url().should("include", "/provinces/dki-jakarta?kebutuhan=Ambulans");
  });

  it("gives a contact ambulance on every location with verified contact", () => {
    cy.findByRole("combobox", { name: /kategori/i }).select("Ambulans");
    cy.findAllByText("Terverifikasi").should("have.length", 11);
    cy.url().should("include", "/provinces/dki-jakarta?kebutuhan=Ambulans");
  });

  it("gives a contact ambulance on every location with unverified contact", () => {
    cy.findByRole("combobox", { name: /kategori/i }).select("Ambulans");
    cy.findAllByText("Belum terverifkasi").should("have.length", 14);
    cy.url().should("include", "/provinces/dki-jakarta?kebutuhan=Ambulans");
  });

  it("More detail about ambulans", () => {
    cy.findByRole("combobox", { name: /kategori/i }).select("Ambulans");
    cy.findByRole("link", {
      name: /ambulance pospera - ambulans non covid di serang, dki jakarta/i,
    }).click();
    cy.url().should(
      "include",
      "/provinces/dki-jakarta/ambulans-ambulans-non-covid-serang-ambulance-pospera-081285556116",
    );
  });
});
