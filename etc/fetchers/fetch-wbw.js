const { fetchSheets } = require("./fetch-sheets");

async function fetchWbw() {
  await fetchSheets();
}

fetchWbw();
