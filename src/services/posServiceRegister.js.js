// src/services/posServiceRegister.js
const axios = require('axios');

// Fungsi untuk mengupdate data customer di POS
async function updateCustomerData(customerData) {
  const posAPIUrl = 'https://pos-system.com/api/customers/update';
  return axios.post(posAPIUrl, customerData);
}

module.exports = {
  updateCustomerData
};
