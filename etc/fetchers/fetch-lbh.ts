import fs from "fs";
import path from "path";
import fetch from "cross-fetch";
import { allIsEmptyString, getKebabCase } from "../../lib/string-utils";
import { lbhReducer, parseCSV } from "./utils";

export async function fetchLbh() {
  const source = await fetch(
    "https://docs.google.com/spreadsheets/d/1_M-Y4CcbsfyiXPhMvECu5tisVw9BT6Dni0WUzIgq2qQ/export?format=csv",
  );
  const csvText = await source.text();
  const { headers, rows } = parseCSV(csvText);

  const sheetId = "0";
  const sheetName = "LBH";
  const sheetColumns = headers
    .map((name, index) => ({
      name,
      index,
    }))
    .filter((col) => col.name.trim().length !== 0);

  const sheetRows = rows.filter((row) => !allIsEmptyString(row));

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
