const path = require('path');

module.exports = {
  getAllPatients: (req, res) => {
    const patientData = {
      tableHeaders: ['First Name', 'Last Name', 'Health Card No'],
      tableData: [['Bobby', 'Hill', '123456'], ['Thomas', 'Hawkins', '123456'], ['Elon', 'Musk', '123456'], ['Lil', 'Wayne', '123456']],
    };
    res.json(patientData);
  },
};
