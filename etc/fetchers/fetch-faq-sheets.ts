import fs from "fs";
import path from "path";
import fetch from "cross-fetch";

import { parseFAQFromCSV } from "./utils";

const FAQ_LINK =
  "https://docs.google.com/spreadsheets/d/1y9DSfDcPjaLsUhif8aEuAODiu2JLilXWYzLI-uLwQcM/export?format=csv";

export async function fetchFaqSheets() {
  const source = await fetch(FAQ_LINK);
  const csv = await source.text();
  const faqs = parseFAQFromCSV(csv);

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-faq-sheets.json"),
    JSON.stringify(faqs),
  );
}
