module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
        '<rootDir>/src'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/features/**/*.ts',

        '!src/app/**/*.ts',
        '!src/common/**/*.ts',
        '!src/config/**/*.ts',
        '!src/models/**/*.ts',
        '!src/repositories/**/*.ts',
        '!src/router/**/*.ts',
    ],
    testResultsProcessor: 'jest-sonar-reporter',
    resetMocks: true,
};
