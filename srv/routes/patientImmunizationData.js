const { getTable } = require('../db/getTable');

module.exports = {
  getPatientImmunization: (req, res) => {
   let health_cardno = req.params.healthcardno;
    const query = "SELECT immunization.immunization_id, immunization.vaccine_name, immunization.vaccination_date FROM `immunization` JOIN `patient` ON immunization.health_card_no = patient.health_card_no WHERE patient.health_card_no = '" + health_cardno + "'";
    getTable(query)
      .then(data => res.json(data));
  },
};
