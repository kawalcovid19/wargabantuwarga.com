describe("provinces page typed search", () => {
  beforeEach(() => {
    cy.visit("/provinces");
  });

  it("gives only one result of Sumatera Utara when search keyword is Sumatera", () => {
    cy.findByRole("textbox", {
      name: /cari provinsi:/i,
    }).type("Sumatera Utara");
    cy.get("ul").first().children().should("have.length", 1);
    cy.get("ul")
      .first()
      .children()
      .first()
      .should("contains.text", "Sumatera Utara");
  });

  it("gives 3 result of Jawa Barat, Tengah, Timur when search keyword is Jawa", () => {
    cy.findByRole("textbox", {
      name: /cari provinsi:/i,
    }).type("Jawa");
    cy.get("ul").first().children().should("have.length", 3);
    cy.get("ul")
      .first()
      .children()
      .each((liElement) => {
        cy.wrap(liElement).should("contains.text", "Jawa");
      });
  });

  it("gives no result when search keyword does not correspond to any provinces in Indonesia", () => {
    cy.findByRole("textbox", {
      name: /cari provinsi:/i,
    }).type("asdf");
    cy.contains("Provinsi tidak ditemukan").should("exist");
  });
});

describe("provinces page query param search", () => {
  it("gives only one result of DKI Jakarta when search keyword is dki", () => {
    cy.visit("/provinces?q=dki");

    cy.get("ul").first().children().should("have.length", 1);
    cy.get("ul")
      .first()
      .children()
      .first()
      .should("contains.text", "DKI Jakarta");
  });

  it("gives 5 result of Sulawesi Utara, Tengah, Selatan, Tenggara, Barat when search keyword is sulawesi", () => {
    cy.visit("/provinces?q=sulawesi");

    cy.get("ul").first().children().should("have.length", 5);
    cy.get("ul")
      .first()
      .children()
      .each((liElement) => {
        cy.wrap(liElement).should("contains.text", "Sulawesi");
      });
  });

  it("gives no result when search keyword does not correspond to any provinces in Indonesia", () => {
    cy.visit("/provinces?q=asdf");

    cy.contains("Provinsi tidak ditemukan").should("exist");
  });
});
