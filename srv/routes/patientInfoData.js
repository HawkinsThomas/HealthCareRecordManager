const { getTable } = require('../db/getTable');

module.exports = {
  getPatientInfo: (req, res) => {
   let health_cardno = req.params.healthcardno;
    const query = "SELECT * FROM patient WHERE patient.health_card_no = '" + health_cardno + "'";
    getTable(query)
      .then(data => res.json(data));
  },
};
