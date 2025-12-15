const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const healthRoutes = require('./routes/health');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(morgan('combined'));

// Serve static files
app.use(express.static('public'));

// Routes
app.use('/health', healthRoutes);
app.use('/api', apiRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Not Found',
        path: req.path,
        method: req.method
    });
});

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;
