import fs from "fs";
import path from "path";
import { load } from "cheerio";
import fetch from "cross-fetch";
import { allIsEmptyString, getKebabCase } from "../../lib/string-utils";
import { lbhReducer } from "./utils";

export async function fetchLbh() {
  const source = await fetch("https://kcov.id/wbw-lbh");
  const $ = load(await source.text());

  const colMap: Record<string, string> = {};

  const sheetId = "0";
  const sheetName = "LBH";
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

  const sheetObject = {
    id: sheetId,
    name: sheetName,
    slug: getKebabCase(sheetName),
    data: sheetRows.map((row, rowIndex) => {
      return sheetColumns.reduce(lbhReducer(row), {
        id: rowIndex.toString(),
      });
    }),
  };

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-lbh.json"),
    JSON.stringify(sheetObject),
  );
}
