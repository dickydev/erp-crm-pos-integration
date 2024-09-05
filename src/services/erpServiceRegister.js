// src/services/erpServiceRegister.js
const axios = require('axios');

// Fungsi untuk mengirim data customer ke ERP
async function sendCustomerData(customerData) {
  const erpAPIUrl = 'https://erp-system.com/api/customers';
  return axios.post(erpAPIUrl, customerData);
}

module.exports = {
  sendCustomerData
};
