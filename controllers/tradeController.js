const stockService = require('../services/stockService');
const tradeModel = require('../models/tradeModel');
const reportView = require('../views/reportView');

let tradingInterval = null;

// Start the trading bot
function startTradingBot(req, res) {
    if (tradingInterval) {
        return res.status(400).json({ message: "Bot is already running!" });
    }

    tradingInterval = setInterval(async () => {
        const stockPrice = await stockService.fetchStockPrices();
        tradeModel.evaluateTrade(stockPrice);
    }, 5000);

    res.status(200).json({ message: "Trading bot started!" });
}

// Stop the bot and generate a final report
function stopTradingBot(req, res) {
    if (!tradingInterval) {
        return res.status(400).json({ message: "No bot running!" });
    }

    clearInterval(tradingInterval);
    tradingInterval = null;

    const report = reportView.generateReport(tradeModel.getTradeHistory(), tradeModel.getProfitLoss());
    res.status(200).json({ message: "Trading bot stopped!", report });
}

module.exports = { startTradingBot, stopTradingBot };
