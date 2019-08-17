const { getTable } = require('../db/getTable');

module.exports = {
  postPatientBillingAdd: (req, res) => {
		let health_card_no = req.params.health_card_no;
		let billing_id = req.body.billing_id;
        let creditcard_no = req.body.creditcard_no;
        let cvc = req.body.cvc;
        let card_expiry = req.body.card_expiry;
		const query = "INSERT INTO `billing`(billing_id,health_card_no,creditcard_no, cvc, card_expiry) VALUES (NULL,'" + health_card_no + "','" + creditcard_no + "', '" + cvc + "', '" + card_expiry + "')";
    getTable(query)
      .then(data => res.json(data));
  },
};
