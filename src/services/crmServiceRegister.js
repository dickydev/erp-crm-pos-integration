// src/services/crmServiceRegister.js
const axios = require('axios');

// Fungsi untuk registrasi customer ke CRM
async function registerCustomer(customerData) {
  const crmAPIUrl = 'https://crm-system.com/api/registerCustomer';
  return axios.post(crmAPIUrl, customerData);
}

module.exports = {
  registerCustomer
};
