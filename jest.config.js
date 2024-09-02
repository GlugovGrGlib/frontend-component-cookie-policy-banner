const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('jest', {
  testEnvironment: 'jest-environment-jsdom-global',
  testURL: 'http://localhost',
  setupFiles: [
    './src/setupTest.js',
  ],
});
