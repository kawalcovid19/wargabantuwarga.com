module.exports = {
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
};
