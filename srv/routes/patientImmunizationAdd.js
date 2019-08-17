const { getTable } = require('../db/getTable');

module.exports = {
  postPatientImmunizationAdd: (req, res) => {
    const health_card_no = req.params.healthcardno;
    const vaccine_name = req.body.vaccine_name;
    const vaccination_date = req.body.vaccination_date;
    const query = "INSERT INTO `immunization`(immunization_id,health_card_no,vaccine_name, vaccination_date) VALUES (NULL,'" + health_card_no + "','" + vaccine_name + "', '" + vaccination_date + "')";
    getTable(query)
      .then(data => res.json(data));
  },
};
