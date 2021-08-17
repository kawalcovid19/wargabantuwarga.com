describe("Checking information on every category faq", () => {
  beforeEach(() => {
    cy.visit("/faq");
  });

  it("gives information on category isoman", () => {
    cy.get("select#filter-kategori_pertanyaan").select("Isoman");
    cy.get("div.relative").should("contains.text", "Isoman");
  });
  it("gives information on category kontak erat", () => {
    cy.get("select#filter-kategori_pertanyaan").select("Kontak Erat");
    cy.get("div.relative").should("contains.text", "Kontak Erat");
  });
  it("gives information on category pcr", () => {
    cy.get("select#filter-kategori_pertanyaan").select("PCR");
    cy.get("div.relative").should("contains.text", "PCR");
  });
  it("gives information on category pasca isoman", () => {
    cy.get("select#filter-kategori_pertanyaan").select("Pasca Isoman");
    cy.get("div.relative").should("contains.text", "Pasca Isoman");
  });
  it("gives information on category tanda bahaya", () => {
    cy.get("select#filter-kategori_pertanyaan").select("Tanda Bahaya");
    cy.get("div.relative").should("contains.text", "Tanda Bahaya");
  });
  it("gives information on category tatalaksana isoman", () => {
    cy.get("select#filter-kategori_pertanyaan").select("Tatalaksana Isoman");
    cy.get("div.relative").should("contains.text", "Tatalaksana Isoman");
  });
  it("gives information on category terapi", () => {
    cy.get("select#filter-kategori_pertanyaan").select("Terapi");
    cy.get("div.relative").should("contains.text", "Terapi");
  });
  it("gives information on category umum", () => {
    cy.get("select#filter-kategori_pertanyaan").select("Umum");
    cy.get("div.relative").should("contains.text", "Umum");
  });
  it("gives information on category vaksinasi", () => {
    cy.get("select#filter-kategori_pertanyaan").select("Vaksinasi");
    cy.get("div.relative").should("contains.text", "Vaksinasi");
  });
});

describe("Search keyword on page faq", () => {
  beforeEach(() => {
    cy.visit("/faq");
  });

  it("gives information with keyword isoman", () => {
    cy.get("input#keywordsInput").type("Isoman");
    cy.get("button").contains("Cari").click();
    cy.get("div.space-y-4").children().should("have.length", 4);
  });

  it("gives information with keyword 'Dok apakah saya bisa tertular lagi setelah selesai isoman?'", () => {
    cy.get("input#keywordsInput").type(
      "Dok apakah saya bisa tertular lagi setelah selesai isoman?",
    );
    cy.get("button").contains("Cari").click();
    cy.get("div.space-y-4")
      .first()
      .children()
      .should(
        "contains.text",
        "YA. Anda masih bisa tertular apabila tidak menerapkan 5M. Jadi walaupun Anda sudah mempunyai antibodi di dalam tubuh, Anda masih bisa tertular dan harus isolasi kembali",
      );
  });

  it("gives no result when search keyword is qwerty", () => {
    cy.get("input#keywordsInput").type("qwerty");
    cy.get("button").contains("Cari").click();
    cy.contains("Pertanyaan tidak ditemukan").should("exist");
  });
});
