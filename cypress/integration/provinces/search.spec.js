describe("provinces page search", () => {
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
