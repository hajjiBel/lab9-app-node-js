const express = require('express');
const router = express.Router();

router.get('/version', (req, res) => {
    res.json({ 
        version: '1.0.0',
        app: 'my-nodejs-app'
    });
});

router.post('/echo', (req, res) => {
    res.json({ 
        message: 'Echo endpoint',
        received: req.body
    });
});

module.exports = router;
