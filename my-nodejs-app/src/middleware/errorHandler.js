const errorHandler = (err, req, res, next) => {
    console.error('❌ Error:', err);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: {
            message: message,
            status: statusCode,
            path: req.path,
            timestamp: new Date().toISOString()
        }
    });
};

module.exports = errorHandler;
