const { getTable } = require('../db/getTable');

module.exports = {
  getPatientRevisionHistory: (req, res) => {
   let health_cardno = req.params.healthcardno;
    const query = "SELECT PatientRevisionHistory.revision_id, user.first_name, user.last_name, PatientRevisionHistory.date_modified, PatientRevisionHistory.attribute_modified FROM `PatientRevisionHistory` JOIN `user` ON PatientRevisionHistory.user_name = user.user_name JOIN `patient` ON PatientRevisionHistory.health_card_no = patient.health_card_no WHERE PatientRevisionHistory.health_card_no = '" + health_cardno + "'";
    getTable(query)
      .then(data => res.json(data));
  },
};
