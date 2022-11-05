module.exports = {
  ...require("./jest-common"),
  displayName: "client",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "react-intersection-observer/test-utils",
  ],
  testMatch: [
    "**/components/**/__tests__/*.test.(ts|tsx|js|jsx)",
    "**/lib/__tests__/gtm.test.ts",
    "**/lib/__tests__/html-transformers.test.tsx",
    "**/__tests__/pages/**/*.test.(ts|tsx|js|jsx)",
  ],
};
