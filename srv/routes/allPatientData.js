const path = require('path');

module.exports = {
  getAllPatients: (req, res) => {

    const query = 'SELECT * FROM `patient`';

    db.query(query, (err, result) => {
      if (err) throw err;
      else {
        const tableHeaders = Object.keys(result[0]);
        const tableData = result.map((row) => {
          return Object.values(row);
        });
        const patientsData = {
          tableHeaders,
          tableData,
        };
        res.json(patientsData);
      }
    });
  },
};
