describe("contacts page typed search", () => {
  beforeEach(() => {
    cy.visit("/provinces/dki-jakarta");
  });

  it("search by phone number", () => {
    cy.findByRole("textbox", {
      name: /cari kontak:/i,
    }).type("08111617101");

    cy.findByRole("button", {
      name: /cari/i,
    }).click();

    cy.findByTestId("contact-list").within(() =>
      cy
        .get("li")
        .each((contact) =>
          cy
            .wrap(contact)
            .within(() => cy.findByText("08111617101").should("be.visible")),
        ),
    );
  });

  it("search by address", () => {
    cy.findByRole("textbox", {
      name: /cari kontak:/i,
    }).type("Sudirman{enter}");

    cy.findByTestId("contact-list").within(() =>
      cy
        .get("li")
        .each((contact) =>
          cy
            .wrap(contact)
            .within(() => cy.findAllByText(/sudirman/i).should("be.visible")),
        ),
    );
  });

  it("search by penyedia", () => {
    cy.findByRole("textbox", {
      name: /cari kontak:/i,
    }).type("dompet dhuafa{enter}");

    cy.findByTestId("contact-list").within(() =>
      cy
        .get("li")
        .each((contact) =>
          cy
            .wrap(contact)
            .within(() =>
              cy.findAllByText(/dompet dhuafa/i).should("be.visible"),
            ),
        ),
    );
  });
});
