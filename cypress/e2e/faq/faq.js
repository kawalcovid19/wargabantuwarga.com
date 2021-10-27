// describe("Checking information on every category faq", () => {
//   beforeEach(() => {
//     cy.visit("/faq");
//   });

//   it("gives information on category isoman", () => {
//     cy.findByRole("combobox", { name: /kategori pertanyaan/i }).select(
//       "Isoman",
//     );
//     cy.findAllByText("Isoman").should("have.length", 2);
//     cy.url().should("include", "/faq?kategori_pertanyaan=Isoman");
//   });
//   it("gives information on category kontak erat", () => {
//     cy.findByRole("combobox", { name: /kategori pertanyaan/i }).select(
//       "Kontak Erat",
//     );
//     cy.findAllByText("Kontak Erat").should("have.length", 2);
//     cy.url().should("include", "/faq?kategori_pertanyaan=Kontak%20Erat");
//   });
//   it("gives information on category pcr", () => {
//     cy.findByRole("combobox", { name: /kategori pertanyaan/i }).select("PCR");
//     cy.findAllByText("PCR").should("have.length", 2);
//     cy.url().should("include", "/faq?kategori_pertanyaan=PCR");
//   });
//   it("gives information on category pasca isoman", () => {
//     cy.findByRole("combobox", { name: /kategori pertanyaan/i }).select(
//       "Pasca Isoman",
//     );
//     cy.findAllByText("Pasca Isoman").should("have.length", 2);
//     cy.url().should("include", "/faq?kategori_pertanyaan=Pasca%20Isoman");
//   });
//   it("gives information on category tanda bahaya", () => {
//     cy.findByRole("combobox", { name: /kategori pertanyaan/i }).select(
//       "Tanda Bahaya",
//     );
//     cy.findAllByText("Tanda Bahaya").should("have.length", 2);
//     cy.url().should("include", "/faq?kategori_pertanyaan=Tanda%20Bahaya");
//   });
//   it("gives information on category tatalaksana isoman", () => {
//     cy.findByRole("combobox", { name: /kategori pertanyaan/i }).select(
//       "Tatalaksana Isoman",
//     );
//     cy.findAllByText("Tatalaksana Isoman").should("have.length", 2);
//     cy.url().should("include", "/faq?kategori_pertanyaan=Tatalaksana%20Isoman");
//   });
//   it("gives information on category terapi", () => {
//     cy.findByRole("combobox", { name: /kategori pertanyaan/i }).select(
//       "Terapi",
//     );
//     cy.findAllByText("Terapi").should("have.length", 2);
//     cy.url().should("include", "/faq?kategori_pertanyaan=Terapi");
//   });
//   it("gives information on category umum", () => {
//     cy.findByRole("combobox", { name: /kategori pertanyaan/i }).select("Umum");
//     cy.findAllByText("Umum").should("have.length", 2);
//     cy.url().should("include", "/faq?kategori_pertanyaan=Umum");
//   });
//   it("gives information on category vaksinasi", () => {
//     cy.findByRole("combobox", { name: /kategori pertanyaan/i }).select(
//       "Vaksinasi",
//     );
//     cy.findAllByText("Vaksinasi").should("have.length", 2);
//     cy.url().should("include", "/faq?kategori_pertanyaan=Vaksinasi");
//   });
// });

// describe("Search keyword on page faq", () => {
//   beforeEach(() => {
//     cy.visit("/faq");
//   });

//   it("gives information with keyword isoman", () => {
//     cy.findByRole("textbox", {
//       name: /cari pertanyaan:/i,
//     }).type("Isoman {enter}");
//     cy.findAllByText(/^isoman$/).should("have.length", 11);
//     cy.url().should("include", "/faq?q=Isoman");
//   });

//   it("gives information with keyword 'Dok apakah saya bisa tertular lagi setelah selesai isoman?'", () => {
//     cy.findByRole("textbox", {
//       name: /cari pertanyaan:/i,
//     }).type(
//       "Dok apakah saya bisa tertular lagi setelah selesai isoman? {enter}",
//     );
//     cy.findByText(
//       "YA. Anda masih bisa tertular apabila tidak menerapkan 5M. Jadi walaupun Anda sudah mempunyai antibodi di dalam tubuh, Anda masih bisa tertular dan harus isolasi kembali",
//     );
//     cy.url().should(
//       "include",
//       "/faq?q=Dok%20apakah%20saya%20bisa%20tertular%20lagi%20setelah%20selesai%20isoman?",
//     );
//   });

//   it("gives no result when search keyword is qwerty", () => {
//     cy.findByRole("textbox", {
//       name: /cari pertanyaan:/i,
//     }).type("qwerty {enter}");
//     cy.findByText(/Pertanyaan tidak ditemukan/i).should("exist");
//     cy.url().should("include", "/faq?q=qwerty");
//   });
// });
