import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/__tests__/**/*.test.ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@domain/(.*)': '<rootDir>/src/Domain/$1',
    '@apis/(.*)': '<rootDir>/src/Apis/$1',
    '@persistence/(.*)': '<rootDir>/src/Persistence/$1',
    '@data/(.*)': '<rootDir>/src/Persistence/Data/$1',
    '@helpers/(.*)': '<rootDir>/src/Helpers/$1',
    '@exceptions/(.*)': '<rootDir>/src/Exceptions/$1',
    '@mappers/(.*)': '<rootDir>/src/Mappers/$1',
    '@tests/(.*)': '<rootDir>/src/__tests__/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts'],
};

export default config;
