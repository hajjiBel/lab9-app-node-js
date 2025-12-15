const config = require('../config/config');

exports.getHealthStatus = () => {
    return {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: config.environment,
        memory: process.memoryUsage()
    };
};

exports.getReadinessStatus = () => {
    return {
        ready: true,
        dependencies: {
            database: 'connected',
            external_apis: 'available'
        },
        timestamp: new Date().toISOString()
    };
};
