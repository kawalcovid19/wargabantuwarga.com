module.exports = {
  ...require("./test/jest-common"),
  collectCoverageFrom: ["./(components|etc|lib|pages)/**/*.(ts|tsx|js|jsx)"],
  coverageThreshold: {
    global: {
      statements: 6,
      branches: 4,
      functions: 9,
      lines: 6,
    },
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  projects: ["./test/jest.client.js", "./test/jest.server.js"],
};
