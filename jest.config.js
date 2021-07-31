module.exports = {
  ...require("./test/jest-common"),
  collectCoverageFrom: [
    "./(components|etc|lib|pages)/**/*.(ts|tsx|js|jsx)",
    "!./(components|etc|lib|pages)/**/__tests__/**/*.test.(ts|tsx|js|jsx)",
    "!./(components|etc|lib|pages)/**/__mocks__/**/*.(ts|tsx|js|jsx)",
  ],
  coverageThreshold: {
    global: {
      statements: 68,
      branches: 65,
      functions: 64,
      lines: 68,
    },
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  projects: ["./test/jest.client.js", "./test/jest.server.js"],
};
