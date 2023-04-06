module.exports = {
  roots: ['<rootDir>../src/', '<rootDir>../tests/'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>../src/'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/../src/$1',
  },
};
