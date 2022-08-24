const express = require('express');

const app = express();
const cacaoTrybe = require('./cacaoTrybe');

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;