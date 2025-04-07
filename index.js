const express = require('express');
const db = require('./db'); 
require('dotenv').config();

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('MySQL is connected with Express!');
});

app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});

module.exports = app;