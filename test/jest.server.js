module.exports = {
  ...require("./jest-common"),
  displayName: "server",
  testEnvironment: "jest-environment-node",
  testMatch: [
    "**/(etc|lib)/**/__tests__/*.test.(ts|tsx|js|jsx)",
    "!**/lib/__tests__/gtm.test.ts",
  ],
};
