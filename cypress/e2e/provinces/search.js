// describe("provinces page typed search", () => {
//   beforeEach(() => {
//     cy.visit("/provinces");
//   });

//   it("gives only one result of Sumatera Utara when search keyword is Sumatera", () => {
//     cy.findByRole("textbox", {
//       name: /cari provinsi:/i,
//     }).type("Sumatera Utara");

//     cy.findByText(/sumatera utara/i)
//       .closest("a")
//       .should("have.attr", "href", "/provinces/sumatera-utara");
//   });

//   it("gives 3 result of Jawa Barat, Tengah, Timur when search keyword is Jawa", () => {
//     cy.findByRole("textbox", {
//       name: /cari provinsi:/i,
//     }).type("Jawa");

//     cy.findAllByText(/jawa/i).should("have.length", 3);
//   });

//   it("gives no result when search keyword does not correspond to any provinces in Indonesia", () => {
//     cy.findByRole("textbox", {
//       name: /cari provinsi:/i,
//     }).type("asdf");

//     cy.findByText(/Provinsi tidak ditemukan/i).should("exist");
//   });
// });

// describe("provinces page query param search", () => {
//   it("gives only one result of DKI Jakarta when search keyword is dki", () => {
//     cy.visit("/provinces?q=dki");

//     cy.findByText(/dki jakarta/i)
//       .closest("a")
//       .should("have.attr", "href", "/provinces/dki-jakarta");
//   });

//   it("gives 5 result of Sulawesi Utara, Tengah, Selatan, Tenggara, Barat when search keyword is sulawesi", () => {
//     cy.visit("/provinces?q=sulawesi");

//     cy.findAllByText(/sulawesi/i).should("have.length", 5);
//   });

//   it("gives no result when search keyword does not correspond to any provinces in Indonesia", () => {
//     cy.visit("/provinces?q=asdf");

//     cy.findByText(/Provinsi tidak ditemukan/i).should("exist");
//   });
// });
