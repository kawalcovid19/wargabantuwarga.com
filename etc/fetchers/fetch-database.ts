import fs from "fs";
import path from "path";
import cheerio from "cheerio";
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
  const $ = cheerio.load(html);

  // Extract sheet IDs and names from sheet menu
  const sheets: { id: string; name: string }[] = [];
  $("#sheet-menu > li").each((_, li) => {
    const sheetId = ($(li).attr("id") as string).replace("sheet-button-", "");
    const sheetName = $(li).text();
    sheets.push({ id: sheetId, name: sheetName });
  });

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
