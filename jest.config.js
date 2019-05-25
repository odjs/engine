const { main } = require("./package.json");

const CI = !!process.env.CI;

module.exports = {

  testEnvironment: "node",

  // for now coverage is disabled on ci
  collectCoverage: !CI,
  collectCoverageFrom: [
    main,
  ],
  coverageDirectory: "coverage",
  coverageReporters: [
    CI ? "json" : "lcov",
    "text",
    "text-summary",
  ],

  verbose: true,

};
