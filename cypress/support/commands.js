// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("forEachContactItem", (assertionFn) => {
  cy.findByTestId("contact-list").within(() =>
    cy.get("li").each((contact) => cy.wrap(contact).within(assertionFn)),
  );
});

Cypress.Commands.add("getDetailProvinces", (element, category, href) => {
  cy.findByRole("combobox", { name: element }).select(category);
  cy.findAllByText(category)
    .eq(1)
    .parent()
    .parent()
    .children("a")
    .should("have.attr", "href", href);
});

Cypress.Commands.add("getAllContact", (element, category, href) => {
  cy.findByRole("combobox", { name: element }).select(category);
  cy.findAllByText(category).should("not.have.length", 0);
  cy.url().should("include", href);
});

Cypress.Commands.add(
  "getAllContactWithStatus",
  (element, category, href, title) => {
    cy.findByRole("combobox", { name: element }).select(category);
    cy.findAllByText(title).should("not.have.length", 0);
    cy.url().should("include", href);
  },
);

Cypress.Commands.add(
  "getDescriptionContact",
  (element, category, link, href, heading, description) => {
    cy.findByRole("combobox", { name: element }).select(category);
    cy.findAllByRole("link", {
      name: link,
    })
      .first()
      .click();
    cy.url({ setTimeout: 2000 }).should("include", href);
    cy.findByRole("heading", {
      name: heading,
    }).should("contains", heading);
    cy.findByText(description).should("exist");
    cy.findByText("Status Verifikasi")
      .parent()
      .findByText("Terverifikasi")
      .should("contain.text", "Terverifikasi");
  },
);
