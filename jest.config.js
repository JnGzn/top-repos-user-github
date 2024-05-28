module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
    "!src/**/*.d.ts"
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};