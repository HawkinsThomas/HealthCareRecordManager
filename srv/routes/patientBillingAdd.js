const { writeTable } = require('../db/writeTable');

module.exports = {
  postPatientBillingAdd: (req, res) => {
    const health_card_no = req.body.health_card_no;
    const creditcard_no = req.body.creditcard_no;
    const cvc = req.body.cvc;
    const card_expiry = req.body.card_expiry;
    const username = req.body.username;

    // const query = "INSERT INTO `billing`(billing_id,health_card_no,creditcard_no, cvc, card_expiry) VALUES (NULL,'" + health_card_no + "','" + creditcard_no + "', '" + cvc + "', '" + card_expiry + "')";
    
    let attributes_changes = '';
  
    if ( creditcard_no != "" && creditcard_no != null ) {
      attributes_changes += "credit card no," ;    
    }
    if ( cvc != "" && cvc != null ) {
      attributes_changes += "cvc," ;    
    }
    if ( card_expiry != "" && card_expiry != null ) {
      attributes_changes += "card expiry," ;   
    }
    
    //getTable(query)
    //.then(data => res.json(data));

    const query1 = "INSERT INTO `billing`(billing_id,health_card_no,creditcard_no, cvc, card_expiry) VALUES (NULL,'" + health_card_no + "','" + creditcard_no + "', '" + cvc + "', '" + card_expiry + "')";
    const query2 = "INSERT INTO `patientrevisionhistory` (revision_id, health_card_no, user_name, date_modified, attribute_modified) VALUES (NULL, '" + health_card_no + "', '" + username + "', curdate(), '" + attributes_changes + "')";
    writeTable(query1)
      .catch((err) => {
        res.status(500).send(err);
      })
      .then(() => {
        writeTable(query2)
          .catch((err) => {
            res.status(500).send(err);
          })
          .then(() => {
            res.sendStatus(200);
          });
      });
  },
};
