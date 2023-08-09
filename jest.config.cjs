module.exports = {
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
    '<rootDir>.*styles\\.ts$',
    '<rootDir>/src/main.tsx',
    '<rootDir>*types\\.ts$',
    '<rootDir>*d\\.ts$',
    '<rootDir>/src/assets/svg/svg-mapped.tsx',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '^.+\\.svg': '<rootDir>/mocks/fileMock.jsx',
  },
  moduleDirectories: ['node_modules', 'src', 'utils'],
  coverageDirectory: 'reports/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/cypress/',
    '\\.style\\.tsx$',
    '\\.styles\\.tsx$',
    '\\.style\\.ts$',
    '/src/.*styles\\.ts$',
    '/src/.*d\\.ts$',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
