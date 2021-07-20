import cheerio from "cheerio";
import fetch from "cross-fetch";
import fs from "fs";
import path from "path";

/**
 * Converts a string to snake_case.
 *
 * @param {string} str input string
 * @returns {string} snake_cased version of `str`
 */
function toSnakeCase(str: string): string {
  return str.trim().toLowerCase().replace(" ", "_");
}

/**
 * Converts a string to TitleCase
 *
 * @param {string} str input string
 * @returns {string} TitleCased version of `str`
 */
function toTitleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Convert all whitespaces in a string to camelCase
 *
 * @param {string} str input string
 * @returns {string} camelCased and whitespace-free version of `str`
 */
function replaceSpacesWithCamelCase(str: string): string {
  return str.replace(/\s+/g, (s) => {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
  });
}

/**
 * Replace all non-alphanumeric character in a string with space
 *
 * @param {string} str input string
 * @returns {string} `str`, without non-alphanumeric characters
 */
function replaceSpecialCharacterWithSpace(str: string): string {
  return str.replace(/[^a-zA-Z0-9. ]/g, " ");
}

/**
 * Remove all whitespaces from a string
 *
 * @param {string} str input string
 * @returns {string} whitespace-free version of `str`
 */
function removeSpaces(str: string): string {
  return str.replace(/\s+/g, "");
}

/**
 * Converts a string to kebab-case
 *
 * @param {string} str input string
 * @returns {string} kebab-cased version of `str`
 */
function convertToKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Get slug from slug identifier and slug index
 *
 * @param {string} name slug identifier
 * @param {number} index slug index
 * @returns {string} slug string
 */
function getSlug(name: string, index: number): string {
  const kebabName = convertToKebabCase(
    removeSpaces(
      replaceSpecialCharacterWithSpace(replaceSpacesWithCamelCase(name)),
    ),
  );
  return `${kebabName}-${index}`;
}

/**
 * Checks if all strings in an array are empty strings
 *
 * @param {string[]} array input array
 * @returns `true` if all strings in `array` are empty strings,
 * `false` otherwise
 */
function allIsEmptyString(array: string[]) {
  return array.every((str) => !str.length);
}

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
