module.exports = {
  ...require("./jest-common"),
  displayName: "server",
  testEnvironment: "jest-environment-node",
  setupFiles: ["<rootDir>/test/setup.server.js"],
  testMatch: [
    "**/(etc|lib)/**/__tests__/*.test.(ts|tsx|js|jsx)",
    "!**/lib/__tests__/gtm.test.ts",
    "!**/lib/__tests__/html-transformers.test.tsx",
  ],
};
