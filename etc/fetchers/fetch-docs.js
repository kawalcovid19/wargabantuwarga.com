const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const fetch = require("cross-fetch");

module.exports.fetchDocs = async function fetchDocs() {
  const source = await fetch("https://kcov.id/wbw-docs");
  const $ = cheerio.load(await source.text());
  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw.json"),
    JSON.stringify({
      html: $("body > #contents div").html(),
      css: $("body > #contents style").html(),
    })
  );
};
