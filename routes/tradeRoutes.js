const express = require('express');
const tradeController = require('../controllers/tradeController');

const router = express.Router();

// Start the trading bot
router.post('/start', tradeController.startTradingBot);

// Stop the trading bot and generate report
router.post('/stop', tradeController.stopTradingBot);

module.exports = router;
