const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const fetch = require("cross-fetch");

function toSnakeCase(text) {
  return text.trim().toLowerCase().replace(" ", "_");
}
function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
function replaceSpacesWithCamelCase(str) {
  return str.replace(/\s+/g, (s) => {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
  });
}
function replaceSpecialCharacterWithSpace(str) {
  return str.replace(/[^a-zA-Z0-9. ]/g, " ");
}
function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}
function convertToKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function getSlug(name, index) {
  const kebabName = convertToKebabCase(
    removeSpaces(
      replaceSpecialCharacterWithSpace(replaceSpacesWithCamelCase(name)),
    ),
  );
  return `${kebabName}-${index}`;
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

  const sheetList = $("#sheet-menu > li")
    .map((_, li) => {
      const sheetId = $(li).attr("id").replace("sheet-button-", "");
      const sheetName = $(li).text();
      const sheetColumns = $(
        `[id='${sheetId}'] > div > table > tbody > tr:nth-child(1)`,
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
        `[id='${sheetId}'] > div > table > tbody > tr:not(:nth-child(1))`,
      )
        .map((__, tr) => {
          return [
            $(tr)
              .find("td")
              .map((colIndex, td) => {
                if (colMap[colIndex]) {
                  return $(td).text().trim();
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
        data: sheetRows
          .map((row, rowIndex) => {
            return sheetColumns.reduce(
              (prev, col) => {
                const colName = toSnakeCase(col.name);
                let rowValue = row[col.index];
                if (colName == "lokasi") {
                  rowValue = toTitleCase(rowValue);
                }
                prev[colName] = rowValue;
                if (colName == "penyedia") {
                  prev.slug = getSlug(
                    (prev.penyedia == "" ? prev.keterangan : prev.penyedia) ??
                      "",
                    rowIndex,
                  );
                }
                return prev;
              },
              { id: rowIndex.toString() },
            );
          })
          .sort((a, b) => a.penyedia.localeCompare(b.penyedia)),
      };
    })
    .toArray();

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-sheets.json"),
    JSON.stringify(sheetList),
  );
};
