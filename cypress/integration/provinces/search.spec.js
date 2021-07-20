describe("provinces page typed search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/provinces");
  });

  it("gives only one result of Sumatera Utara when search keyword is Sumatera", () => {
    cy.get("input#keywordsInput").type("Sumatera Utara");
    cy.get("ul").first().children().should("have.length", 1);
    cy.get("ul")
      .first()
      .children()
      .first()
      .should("contains.text", "Sumatera Utara");
  });

  it("gives 3 result of Jawa Barat, Tengah, Timur when search keyword is Jawa", () => {
    cy.get("input#keywordsInput").type("Jawa");
    cy.get("ul").first().children().should("have.length", 3);
    cy.get("ul")
      .first()
      .children()
      .each((liElement) => {
        cy.wrap(liElement).should("contains.text", "Jawa");
      });
  });

  it("gives no result when search keyword does not correspond to any provinces in Indonesia", () => {
    cy.get("input#keywordsInput").type("asdf");
    cy.get("ul").first().children().should("have.length", 0);
  });
});

describe("provinces page query param search", () => {
  it("gives only one result of DKI Jakarta when search keyword is dki", () => {
    cy.visit("http://localhost:3000/provinces?q=dki");

    cy.get("ul").first().children().should("have.length", 1);
    cy.get("ul")
      .first()
      .children()
      .first()
      .should("contains.text", "DKI Jakarta");
  });

  it("gives 5 result of Sulawesi Utara, Tengah, Selatan, Tenggara, Barat when search keyword is sulawesi", () => {
    cy.visit("http://localhost:3000/provinces?q=sulawesi");

    cy.get("ul").first().children().should("have.length", 5);
    cy.get("ul")
      .first()
      .children()
      .each((liElement) => {
        cy.wrap(liElement).should("contains.text", "Sulawesi");
      });
  });

  it("gives no result when search keyword does not correspond to any provinces in Indonesia", () => {
    cy.visit("http://localhost:3000/provinces?q=asdf");

    cy.get("ul").first().children().should("have.length", 0);
  });
});
