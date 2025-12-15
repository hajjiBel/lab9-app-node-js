const appService = require('../services/appService');

exports.getHealth = async (req, res) => {
    try {
        const health = appService.getHealthStatus();
        res.status(200).json(health);
    } catch (error) {
        res.status(503).json({ 
            status: 'unhealthy',
            error: error.message 
        });
    }
};

exports.getReady = async (req, res) => {
    try {
        const readiness = appService.getReadinessStatus();
        res.status(200).json(readiness);
    } catch (error) {
        res.status(503).json({ 
            status: 'not-ready',
            error: error.message 
        });
    }
};
