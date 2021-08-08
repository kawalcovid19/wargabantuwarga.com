import fs from "fs";
import path from "path";
import fetch from "cross-fetch";

import { parseFAQ } from "./utils";

const FAQ_LINK = "https://kcov.id/wbw-faq";

export async function fetchFaqSheets() {
  const source = await fetch(FAQ_LINK);
  const html = await source.text();
  const faqs = await parseFAQ(html);

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-faq-sheets.json"),
    JSON.stringify(faqs),
  );
}
