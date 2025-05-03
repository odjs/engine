import { createDefaultPreset } from 'ts-jest';

const coverageOnCI = process.env.CI;

const typescriptJestPreset = createDefaultPreset({
  tsconfig: './tsconfig.json',
});

/** @type { import('ts-jest').JestConfigWithTsJest } */
const config = {
  ...typescriptJestPreset,

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: coverageOnCI
    ? ['text', 'text-summary', 'json']
    : ['text', 'text-summary', 'lcov'],

  cacheDirectory: 'node_modules/.cache/jest',
  verbose: true,
};

export default config;
