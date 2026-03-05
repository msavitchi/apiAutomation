/** @type {import("ts-jest/dist/types").JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  globalSetup: './config.ts',
  testTimeout: 60000,
};
