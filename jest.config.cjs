module.exports = {
  testEnvironment: 'node',
  rootDir: 'src',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  setupFiles: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^@application/(.*)$': '<rootDir>/application/$1',
    '^@domain/(.*)$': '<rootDir>/domain/$1',
    '^@infrastructure/(.*)$': '<rootDir>/infrastructure/$1',
    '^@handlers/(.*)$': '<rootDir>/handlers/$1',
    '^@src/(.*)$': '<rootDir>/$1',
  },
};
