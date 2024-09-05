// src/app.js
const express = require('express');
const bodyParser = require('body-parser');

const customerRoutes = require('./routes/customer');
const transactionRoutes = require('./routes/transaction');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/customer', customerRoutes);
app.use('/api/transaction', transactionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
