require = require('esm')(module);




module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/setup.ts'],
  testMatch: ['./tests/**/*.test.tsx'],
};
