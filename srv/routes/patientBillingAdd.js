const { getTable } = require('../db/getTable');

module.exports = {
  getPatientBillingAdd: (req, res) => {
		let health_card_no = req.params.health_card_no;
        let creditcard_no = req.params.creditcard_no;
        let cvc = req.body.cvc;
        let card_expiry = req.body.card_expiry;
		const query = "INSERT INTO `billing`(creditcard_no, cvc, card_expiry) VALUES ('" + creditcard_no + "', '" + cvc + "', '" + card_expiry + "')";
    getTable(query)
      .then(data => res.json(data));
  },
};
