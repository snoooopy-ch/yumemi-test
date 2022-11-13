module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js",
  },
  moduleFileExtensions: ["js", "ts", "vue", "json"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  collectCoverage: false, // todo coverage
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/**/*.vue",
  ],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.nuxt"],
};
