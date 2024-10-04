# Backend Trading Bot

This Node.js backend application simulates a basic trading bot for a hypothetical stock market. The bot continuously monitors stock prices using a mock API and executes trades based on predefined trading strategies.

## Table of Contents

- [Overview](#overview)
- [Trading Logic](#trading-logic)
- [API Usage](#api-usage)
- [Running the Application](#running-the-application)
- [Future Improvements](#future-improvements)

## Overview

The trading bot continuously fetches stock prices from a mock API and decides when to buy or sell stocks based on specific thresholds. It tracks the bot's positions, balance, and overall profit/loss, generating a summary report of all trades made during its operation.

## Trading Logic

The bot uses a **threshold-based strategy** for making buy and sell decisions:

1. **Buy Logic**:
   - The bot buys stocks when the current stock price drops by **2%** compared to the last recorded price.
   - **Example**: If the last recorded price was $100, the bot will buy when the price drops to **$98** or below.

2. **Sell Logic**:
   - The bot sells stocks when the current stock price increases by **3%** compared to the last recorded price.
   - **Example**: If the last recorded price was $100, the bot will sell when the price rises to **$103** or above.

3. **Profit/Loss Tracking**:
   - The bot maintains a balance (initially $10,000) and tracks the number of stocks held.
   - After every trade, the balance and profit/loss are updated accordingly.
   - A report is generated showing:
     - All trades made (buy/sell actions).
     - The final balance and overall profit/loss compared to the initial balance.

## API Usage

The bot uses a **mock API** to simulate real-time stock prices:

- **Mock API Endpoint**:
  - The API URL is configured in the `.env` file:
    ```plaintext
    API_URL=https://mock-stock-api.com/prices
    ```
  - The application fetches the stock price using the **`axios`** library, which returns:
    ```json
    {
      "price": 100.00
    }
    ```

## Running the Application

### Requirements

- Node.js installed on your machine.
- **axios** and **dotenv** packages (included in `package.json`).

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-link>
   cd trading-bot
2. **Install Dependencies**:
   ```bash
   npm install
3. **Configure Environment Variables:**
  - Create a .env file in the project root directory and set the API URL:
  ```bash
  API_URL=https://mock-stock-api.com/prices
  PORT=3000
4. **Start the Application:**
  - Run the application
  ```bash
  node app.js

