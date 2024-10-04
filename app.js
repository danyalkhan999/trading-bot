const express = require('express');
const tradeRoutes = require('./routes/tradeRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/trade', tradeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
