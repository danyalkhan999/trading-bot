const INITIAL_BALANCE = 10000;
let balance = INITIAL_BALANCE;
let position = 0;
let lastStockPrice = 0;
let tradeHistory = [];

const buyThreshold = 0.98;  // Buy when price drops by 2%
const sellThreshold = 1.03;  // Sell when price increases by 3%

function evaluateTrade(stockPrice) {
    if (position === 0 && stockPrice <= lastStockPrice * buyThreshold) {
        buyStock(stockPrice);
    } else if (position > 0 && stockPrice >= lastStockPrice * sellThreshold) {
        sellStock(stockPrice);
    }
    lastStockPrice = stockPrice;
}

function buyStock(stockPrice) {
    position = balance / stockPrice;
    balance = 0;
    tradeHistory.push({ action: 'BUY', price: stockPrice, quantity: position });
    console.log(`Bought ${position} stocks at price ${stockPrice}`);
}

function sellStock(stockPrice) {
    const amountEarned = position * stockPrice;
    balance += amountEarned;
    tradeHistory.push({ action: 'SELL', price: stockPrice, quantity: position });
    position = 0;
    console.log(`Sold stocks at price ${stockPrice}`);
}

function getTradeHistory() {
    return tradeHistory;
}

function getProfitLoss() {
    const totalValue = balance + (position * lastStockPrice);
    const profitLoss = totalValue - INITIAL_BALANCE;
    return { balance, profitLoss };
}

module.exports = { evaluateTrade, getTradeHistory, getProfitLoss };
