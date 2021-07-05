const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

async function fetchWbw() {
  const source = await fetch("https://wargabantuwarga.com/");
  const $ = cheerio.load(await source.text());

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw.json"),
    JSON.stringify({
      html: $("body > #contents div").html(),
    })
  );
}

fetchWbw();
