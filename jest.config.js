module.exports = {
  collectCoverageFrom: ["./(components|etc|lib|pages)/**/*.(ts|tsx|js|jsx)"],
  coverageThreshold: {
    global: {
      statements: 7,
      branches: 4,
      functions: 9,
      lines: 7,
    },
  },
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
};
