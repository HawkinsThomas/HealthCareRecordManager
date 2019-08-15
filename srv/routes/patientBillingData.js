const { getTable } = require('../db/getTable');

module.exports = {
  getPatientBilling: (req, res) => {
   let health_cardno = req.params.healthcardno;
    const query = "SELECT billing.billing_id, billing.health_card_no, billing.creditcard_no, billing.cvc, billing.card_expiry FROM `billing` JOIN `patient` ON billing.health_card_no = patient.health_card_no WHERE patient.health_card_no = '" + health_cardno + "'";
    getTable(query)
      .then(data => res.json(data));
  },
};
