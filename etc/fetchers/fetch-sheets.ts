import {
  allIsEmptyString,
  getSlug,
  toSnakeCase,
  toTitleCase,
} from "../../lib/string-utils";

import cheerio from "cheerio";
import fetch from "cross-fetch";
import fs from "fs";
import path from "path";

export async function fetchSheets() {
  const source = await fetch("https://kcov.id/wbw-sheets");
  const $ = cheerio.load(await source.text());

  const colMap: Record<string, string> = {};

  const sheetList = $("#sheet-menu > li")
    .map((_, li) => {
      const sheetId = ($(li).attr("id") as string).replace("sheet-button-", "");
      const sheetName = $(li).text();
      const sheetColumns = $(`#${sheetId} tbody > tr:nth-child(1)`)
        .find("td")
        .map((colIndex, td) => {
          colMap[colIndex] = $(td).text();
          return {
            name: $(td).text(),
            index: colIndex,
          };
        })
        .toArray()
        .filter((col) => col.name.trim().length !== 0);
      const sheetRows = $(`#${sheetId} tbody > tr`)
        .map((rowIndex, tr) => {
          if (rowIndex === 0) {
            return [];
          }
          return [
            $(tr)
              .find("td")
              .map((colIndex, td) => {
                if (colMap[colIndex]) {
                  // Kebutuhan, Keterangan, Lokasi, & Penyedia aren't supposed to be linked
                  if (colIndex < 5) {
                    return $(td).text().trim();
                  } else {
                    return ($(td).html() as string).trim();
                  }
                }
                return "";
              })
              .toArray(),
          ];
        })
        .toArray()
        .filter((row) => !allIsEmptyString(row));
      return {
        id: sheetId,
        name: sheetName,
        data: sheetRows.map((row, rowIndex) => {
          return sheetColumns.reduce(
            (prev: Record<string, number | string>, col) => {
              const colName = toSnakeCase(col.name);
              let cellValue = row[col.index];
              if (colName == "lokasi") {
                cellValue = toTitleCase(cellValue);
              }
              prev[colName] = cellValue;
              if (colName == "penyedia") {
                prev.slug = getSlug(
                  (prev.penyedia || prev.keterangan) as string,
                  rowIndex,
                );
              } else if (colName == "terakhir_update") {
                prev.verifikasi = cellValue == "" ? 0 : 1;
              }
              return prev;
            },
            { id: rowIndex.toString() },
          );
        }),
      };
    })
    .toArray();

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-sheets.json"),
    JSON.stringify(sheetList),
  );
}
