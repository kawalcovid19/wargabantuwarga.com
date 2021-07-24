module.exports = {
  collectCoverageFrom: ["./(components|etc|lib|pages)/**/*.(ts|tsx|js|jsx)"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
};
