const appService = require('../../src/services/appService');

describe('Health Service', () => {
    test('should return healthy status', () => {
        const health = appService.getHealthStatus();
        expect(health.status).toBe('healthy');
        expect(health.timestamp).toBeDefined();
    });

    test('should return readiness status', () => {
        const readiness = appService.getReadinessStatus();
        expect(readiness.ready).toBe(true);
    });
});
