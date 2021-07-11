const { fetchDocs } = require("./fetch-docs");
const { fetchSheets } = require("./fetch-sheets");
const { fetchFaqSheet } = require("./fetch-faq-sheet");

function fetchWbw() {
  // Not using async await to prevent blocking
  console.log("Fetching docs");
  fetchDocs().then(() => console.log("DONE fetching docs"));

  console.log("Fetching sheets");
  fetchSheets().then(() => console.log("DONE fetching sheets"));

  console.log("Fetching Faq sheets");
  fetchFaqSheet().then(() => console.log("DONE fetching faq sheets"));
}

fetchWbw();
