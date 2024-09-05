// src/routes/transaction.js
const express = require('express');
const router = express.Router();

const erpService = require('../services/erpServiceRegister');
const crmService = require('../services/crmServiceRegister');

// Endpoint untuk mencatat transaksi
router.post('/create', async (req, res, next) => {
  const transactionData = req.body;

  try {
    // Step 1: Send transaction data to ERP for invoice creation
    const erpResponse = await erpService.createInvoice(transactionData);

    // Step 2: Update member points in CRM
    const crmResponse = await crmService.updateMemberPoints(transactionData);

    res.json({
      message: 'Transaction completed.',
      erpResponse: erpResponse.data,
      crmResponse: crmResponse.data
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
