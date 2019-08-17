const { getTable } = require('../db/getTable');

module.exports = {
  postPatientImmunizationUpdate: (req, res) => {
    const health_card_no = req.params.health_card_no;
    const immunization_id = req.body.immunization_id;
    const vaccine_name = req.body.vaccine_name;
    const vaccination_date = req.body.vaccination_date;
    const query = "UPDATE `immunization` SET `vaccine_name` = '" + vaccine_name + "', `vaccination_date` = '" + vaccination_date + "' WHERE `immunization`.`health_card_no` = '" + health_card_no + "' AND `immunization`.`immunization_id` = '" + immunization_id + "'";
    getTable(query)
      .then(data => res.json(data));
  },
};
