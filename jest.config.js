
module.exports = {

  testEnvironment: "node",

  collectCoverage: true,
  collectCoverageFrom: [
    "dist/**",
  ],
  coverageDirectory: "coverage",
  coverageReporters: [
    process.env.CI ? "json" : "lcov",
    "text",
  ],

  verbose: true,

};
