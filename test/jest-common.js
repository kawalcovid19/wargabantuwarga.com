const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, ".."),
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "typeface-inter": "identity-obj-proxy",
    "~/(.*)": "<rootDir>/$1",
  },
  watchPlugins: [
    "jest-watch-select-projects",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
