function generateReport(tradeHistory, profitLoss) {
    console.log("Generating Report...");
    const report = {
        tradeHistory,
        finalBalance: profitLoss.balance,
        profitOrLoss: profitLoss.profitLoss
    };
    return report;
}

module.exports = { generateReport };
