const express = require('express');
const timeRouter = express.Router();


timeRouter.get('/api/time', (req, res) => {
    res.send({time: Date.now()});
    res.status(200);
});

module.exports = timeRouter;