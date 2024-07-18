module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.js'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  // other configurations
};
