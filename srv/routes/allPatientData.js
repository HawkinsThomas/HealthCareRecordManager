const { getTable } = require('../db/getTable');

module.exports = {
  getAllPatients: (req, res) => {
    const query = 'SELECT * FROM patient';
    getTable(query)
      .then(data => res.json(data));
  },
};
