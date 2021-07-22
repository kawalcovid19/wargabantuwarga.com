import { PUBLIC_PATH } from "../constants";

import fs from "fs";
import globby from "globby";
import path from "path";
import prettier from "prettier";

const getDate = new Date().toISOString();

const formatXml = (sitemap: string) =>
  prettier.format(sitemap, { parser: "html" });

(async () => {
  const sitemaps = await globby(["public/sitemap*.xml"]);
  const sitemapIndex = `
    ${sitemaps
      .map((sitemap: string) => {
        const sitemapPath = sitemap.replace("public/", "");
        return `
          <sitemap>
            <loc>${`${PUBLIC_PATH}/${sitemapPath}`}</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>`;
      })
      .join("")}
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

  fs.writeFileSync(
    path.resolve(__dirname, "../public/sitemap-index.xml"),
    formatXml(sitemap),
    "utf8",
  );
})();
