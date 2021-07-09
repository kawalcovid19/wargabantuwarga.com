const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

module.exports.fetchSheets = async function fetchSheets() {
  const source = await fetch(
    "https://docs.google.com/spreadsheets/d/1RIcSiQqPCw-6H55QIYwblIQDPpFQmDNC73ukFa05J7c/htmlview"
  );
  const $ = cheerio.load(await source.text());

  const sheetList = $("#sheet-menu > li")
    .map((index, li) => {
      const sheetId = $(li).attr("id").replace("sheet-button-", "");
      const sheetColumns = $(
        `[id='${sheetId}'] > div > table > tbody > tr:nth-child(1)`
      )
        .find("td")
        .map((_, td) => {
          return $(td).html();
        })
        .toArray();
      const sheetRows = $(
        `[id='${sheetId}'] > div > table > tbody > tr:not(:nth-child(1))`
      )
        .find("td")
        .map((_, td) => {
          return $(td).html();
        })
        .toArray();
      return {
        id: sheetId,
        columns: sheetColumns,
        data: sheetRows,
      };
    })
    .toArray();

  // TODO clean up data
};
