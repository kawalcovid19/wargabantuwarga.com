const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

async function fetchWbw() {
  const source = await fetch(
    "https://docs.google.com/document/d/e/2PACX-1vR0xm-hYs5m4smcaA20vo6SgGYgQm-nae-JZku2WAyv8HK5PiE-GrjtvM87e9Kr_rZ2YLd10_gz6reT/pub"
  );
  const $ = cheerio.load(await source.text());

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw.json"),
    JSON.stringify({
      html: $("body > #contents div").html(),
      css: $("body > #contents style").html(),
    })
  );
}

fetchWbw();
