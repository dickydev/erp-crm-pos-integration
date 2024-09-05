// src/services/crmServiceTransaction.js
const axios = require('axios');

// Fungsi untuk mengupdate poin member di CRM
async function updateMemberPoints(transactionData) {
  const crmAPIUrl = 'https://crm-system.com/api/updatePoints';
  return axios.post(crmAPIUrl, transactionData);
}

module.exports = {
  updateMemberPoints
};
