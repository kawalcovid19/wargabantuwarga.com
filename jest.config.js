module.exports = {
  ...require("./test/jest-common"),
  collectCoverageFrom: [
    "./(components|etc|lib|pages)/**/*.(ts|tsx|js|jsx)",
    "!./(components|etc|lib|pages)/**/__tests__/**/*.test.(ts|tsx|js|jsx)",
    "!./(components|etc|lib|pages)/**/__mocks__/**/*.(ts|tsx|js|jsx)",
    "!./etc/fetchers/fetch-wbw.ts",
    "!./etc/create-sitemap-index.ts",
    "!./etc/mirror-box.ts",
  ],
  coverageThreshold: {
    global: {
      statements: 91,
      branches: 79,
      functions: 89,
      lines: 91,
    },
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  projects: ["./test/jest.client.js", "./test/jest.server.js"],
};
