module.exports = {
  ...require("./jest-common"),
  displayName: "client",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: ["**/(components|pages)/**/__tests__/*.test.(ts|tsx|js|jsx)"],
};
