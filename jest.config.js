module.exports = {
  ...require("./test/jest-common"),
  collectCoverageFrom: [
    "./(components|etc|lib|pages)/**/*.(ts|tsx|js|jsx)",
    "!./(components|etc|lib|pages)/**/__tests__/**/*.test.(ts|tsx|js|jsx)",
    "!./(components|etc|lib|pages)/**/__mocks__/**/*.(ts|tsx|js|jsx)",
  ],
  coverageThreshold: {
    global: {
      statements: 84,
      branches: 76,
      functions: 82,
      lines: 84,
    },
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  projects: ["./test/jest.client.js", "./test/jest.server.js"],
};
