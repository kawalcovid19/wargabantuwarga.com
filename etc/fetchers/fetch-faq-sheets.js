const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const fetch = require("cross-fetch");
const FAQ_LINK = "https://kcov.id/wbw-faq";

module.exports.fetchFaqSheets = async function fetchFaqSheets() {
  const source = await fetch(FAQ_LINK);
  const $ = cheerio.load(await source.text());
  const faq = $("#sheets-viewport > div#0").find("table tbody tr:not(:first)");
  const faqJSON = faq
    .map((_, el) => {
      const row = $(el).find("td");
      return {
        kategori_pertanyaan: $(row.get(0)).text(),
        pertanyaan: $(row.get(1)).text(),
        jawaban: $(row.get(2)).html(),
        created_date: $(row.get(3)).text(),
        sumber: $(row.get(4)).text(),
        link: $(row.get(5)).text(),
        published_date: $(row.get(6)).text(),
      };
    })
    .toArray();

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-faq-sheets.json"),
    JSON.stringify(faqJSON)
  );
};
