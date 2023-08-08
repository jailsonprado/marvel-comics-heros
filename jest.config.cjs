module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
    '<rootDir>.*styles\\.ts$',
    '<rootDir>/src/main.tsx',
    '<rootDir>*types\\.ts$',
    '<rootDir>/src/assets/svg/svg-mapped.tsx',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1',
    '^.+\\.svg': '<rootDir>/mocks/fileMock.jsx',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
  coverageDirectory: 'reports/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/cypress/',
    '\\.style\\.tsx$',
    '\\.styles\\.tsx$',
    '\\.style\\.ts$',
    '/src/.*styles\\.ts$',
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
