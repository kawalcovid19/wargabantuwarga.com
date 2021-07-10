const { fetchDocs } = require("./fetch-docs");
const { fetchSheets } = require("./fetch-sheets");

function fetchWbw() {
  // Not using async await to prevent blocking
  console.log("Fetching docs");
  fetchDocs().then(() => console.log("DONE fetching docs"));

  console.log("Fetching sheets");
  fetchSheets().then(() => console.log("DONE fetching sheets"));
}

fetchWbw();
