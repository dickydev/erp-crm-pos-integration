// src/services/erpServiceTransaction.js
const axios = require('axios');

// Fungsi untuk membuat invoice di ERP
async function createInvoice(transactionData) {
  const erpAPIUrl = 'https://erp-system.com/api/invoices';
  return axios.post(erpAPIUrl, transactionData);
}

module.exports = {
  createInvoice
};
