const axios = require('axios');
const API_URL = process.env.API_URL;

// Fetch stock prices from mock API
async function fetchStockPrices() {
    try {
        const response = await axios.get(API_URL);
        const stockPrice = response.data.price;
        console.log(`Current Stock Price: ${stockPrice}`);
        return stockPrice;
    } catch (error) {
        console.error('Error fetching stock price:', error);
        throw error;
    }
}

module.exports = { fetchStockPrices };
