/** @type {import('jest').Config} */
const config = {
  coveragePathIgnorePatterns: ['src/stories', 'src/theme', 'src/types'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js',
  },
}

module.exports = config
