const request = require('supertest');
const app = require('../../src/app');

describe('API Endpoints', () => {
    test('GET /health should return 200', async () => {
        const response = await request(app)
            .get('/health')
            .expect(200);

        expect(response.body.status).toBe('healthy');
    });

    test('GET /api/version should return version', async () => {
        const response = await request(app)
            .get('/api/version')
            .expect(200);

        expect(response.body.version).toBeDefined();
    });

    test('POST /api/echo should return echoed data', async () => {
        const testData = { message: 'test' };
        const response = await request(app)
            .post('/api/echo')
            .send(testData)
            .expect(200);

        expect(response.body.received).toEqual(testData);
    });
});
