const { getTable } = require('../db/getTable');

module.exports = {
  getPatientBillingUpdate: (req, res) => {
		let health_card_no = req.params.health_card_no;
        let creditcard_no = req.params.creditcard_no;
		let billing_id = req.body.billing_id;
        let cvc = req.body.cvc;
        let card_expiry = req.body.card_expiry;
		const query = "UPDATE `billing` SET `creditcard_no` = '" + creditcard_no + "', `cvc` = '" + cvc + "', `card_expiry` = '" + card_expiry + "'  WHERE `billing`.`health_card_no` = '" + health_card_no + "' AND billing`.`billing_id` = '" + billing_id + "'" ;
    getTable(query)
      .then(data => res.json(data));
  },
};
