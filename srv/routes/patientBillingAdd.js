const { getTable } = require('../db/getTable');

module.exports = {
  postPatientBillingAdd: (req, res) => {
    const health_card_no = req.params.health_card_no;
    const creditcard_no = req.body.creditcard_no;
    const cvc = req.body.cvc;
    const card_expiry = req.body.card_expiry;
    const query = "INSERT INTO `billing`(billing_id,health_card_no,creditcard_no, cvc, card_expiry) VALUES (NULL,'" + health_card_no + "','" + creditcard_no + "', '" + cvc + "', '" + card_expiry + "')";
    getTable(query)
      .then(data => res.json(data));
  },
};
