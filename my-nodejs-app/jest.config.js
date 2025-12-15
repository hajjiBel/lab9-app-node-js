module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.js'],
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/config/**',
    ],
    coveragePathIgnorePatterns: ['/node_modules/'],
};
