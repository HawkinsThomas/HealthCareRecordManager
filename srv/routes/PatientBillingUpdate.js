const { writeTable } = require('../db/writeTable');

module.exports = {
  postPatientBillingUpdate: (req, res) => {
    const creditcard_no = req.body.creditcard_no;
    const billing_id = req.body.billing_id;
    const cvc = req.body.cvc;
    const card_expiry = req.body.card_expiry;
    const query = "UPDATE `billing` SET `creditcard_no` = '" + creditcard_no + "', `cvc` = '" + cvc + "', `card_expiry` = '" + card_expiry + "'  WHERE `billing`.`billing_id` = '" + billing_id + "' " ;
    console.log(query);
    writeTable(query)
      .then(data => res.json(data));
  },
};
