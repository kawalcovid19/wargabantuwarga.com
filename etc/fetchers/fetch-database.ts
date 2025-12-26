import fs from "fs";
import path from "path";
import { allIsEmptyString, getKebabCase } from "../../lib/string-utils";
import { contactReducer, parseCSV, SheetColumn } from "./utils";

const SPREADSHEET_ID = "1SRByPnPalzDHgo5RM85yv2V_N8Z-OylBbIgrre_xwg0";
const SPREADSHEET_HTML = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/htmlview`;
const SPREADSHEET_CSV = (gid: string) =>
  `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}`;

export async function fetchDatabase() {
  // Step 1: Fetch HTML to discover sheets
  const htmlSource = await fetch(SPREADSHEET_HTML);
  const html = await htmlSource.text();

  // Extract sheet data from embedded JavaScript variable
  // The HTML contains: var items = []; items.push({name: "...", gid: "...", ...});
  const itemsMatch = html.match(/var items = \[\];([\s\S]*?)_optPageSwitcher/);
  if (!itemsMatch) {
    throw new Error("Could not find sheet items in HTML");
  }

  const itemsText = itemsMatch[1];
  const sheets: { id: string; name: string }[] = [];

  // Parse each items.push() call
  const pushMatches = Array.from(
    itemsText.matchAll(
      /items\.push\(\{name:\s*"([^"]+)"[^}]*?gid:\s*"([^"]+)"[^}]*?\}\)/g,
    ),
  );

  for (const match of pushMatches) {
    const name = match[1];
    const gid = match[2];
    sheets.push({ id: gid, name });
  }

  if (sheets.length === 0) {
    throw new Error("No sheets found in spreadsheet");
  }

  // Step 2: Fetch CSV data for each sheet and process
  const sheetList = await Promise.all(
    sheets.map(async (sheet) => {
      const csvSource = await fetch(SPREADSHEET_CSV(sheet.id));
      const csvText = await csvSource.text();
      const { headers, rows } = parseCSV(csvText);

      // Build column info from headers
      const sheetColumns: SheetColumn[] = headers
        .map((name, index) => ({
          name,
          index,
        }))
        .filter((col) => col.name.trim().length !== 0);

      // Filter out empty rows and transform data
      const sheetRows = rows
        .filter((row) => !allIsEmptyString(row))
        .map((row, rowIndex) => {
          return sheetColumns.reduce(contactReducer(row), {
            id: rowIndex.toString(),
          });
        });

      return {
        id: sheet.id,
        name: sheet.name,
        slug: getKebabCase(sheet.name),
        data: sheetRows,
      };
    }),
  );

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-database.json"),
    JSON.stringify(sheetList),
  );
}
