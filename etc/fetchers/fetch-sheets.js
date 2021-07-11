const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const fetch = require("cross-fetch");

function toSnakeCase(text) {
  return text.trim().toLowerCase().replace(" ", "_");
}
function allIsEmptyString(array) {
  for (const item of array) {
    if (item.length !== 0) {
      return false;
    }
  }
  return true;
}

module.exports.fetchSheets = async function fetchSheets() {
  const source = await fetch("https://kcov.id/wbw-sheets");
  const $ = cheerio.load(await source.text());

  const colMap = {};

  const sheetList = $("#sheet-menu > li:nth-child(3)")
    .map((_, li) => {
      const sheetId = $(li).attr("id").replace("sheet-button-", "");
      const sheetName = $(li).text();
      const sheetColumns = $(
        `[id='${sheetId}'] > div > table > tbody > tr:nth-child(1)`
      )
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
      const sheetRows = $(
        `[id='${sheetId}'] > div > table > tbody > tr:not(:nth-child(1))`
      )
        .map((_, tr) => {
          return [
            $(tr)
              .find("td")
              .map((colIndex, td) => {
                if (colMap[colIndex]) {
                  return $(td).text();
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
        data: sheetRows.map((row) => {
          return sheetColumns.reduce((prev, col) => {
            prev[toSnakeCase(col.name)] = row[col.index];
            return prev;
          }, {});
        }),
      };
    })
    .toArray();

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-sheets.json"),
    JSON.stringify(sheetList)
  );
};
