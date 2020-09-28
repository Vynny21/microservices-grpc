/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  displayName: 'root-tests',
  testMatch: ['<rootDir>/packages/**/src/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/packages/**/src/$1',
    '@test/(.*)': '<rootDir>/packages/**/test/$1',
  },
};