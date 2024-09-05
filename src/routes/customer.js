// src/routes/customer.js
const express = require('express');
const router = express.Router();

const crmServiceRegister = require('../services/crmServiceRegister');
const erpServiceRegister = require('../services/erpServiceRegister');
const posServiceRegister = require('../services/posServiceRegister');

// Endpoint untuk registrasi customer
router.post('/register', async (req, res, next) => {
  const customerData = req.body;

  try {
    // Step 1: Register customer in CRM
    const crmResponse = await crmServiceRegister.registerCustomer(customerData);

    // Step 2: Send customer data to ERP
    const erpResponse = await erpServiceRegister.sendCustomerData(crmResponse.data);

    // Step 3: Send customer data to POS
    const posResponse = await posServiceRegister.updateCustomerData(crmResponse.data);

    res.json({
      message: 'Customer registration completed.',
      crmResponse: crmResponse.data,
      erpResponse: erpResponse.data,
      posResponse: posResponse.data
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
