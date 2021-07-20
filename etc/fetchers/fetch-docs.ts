import cheerio from "cheerio";
import fetch from "cross-fetch";
import fs from "fs";
import path from "path";

export async function fetchDocs() {
  const source = await fetch("https://kcov.id/wbw-docs");
  const $ = cheerio.load(await source.text());
  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw.json"),
    JSON.stringify({
      html: $("body > #contents div").html(),
      css: $("body > #contents style").html(),
    }),
  );
}
