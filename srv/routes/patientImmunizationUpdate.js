const { writeTable } = require('../db/writeTable');

module.exports = {
  postPatientImmunizationUpdate: (req, res) => {
    const immunization_id = req.body.immunization_id;
    const vaccine_name = req.body.vaccine_name;
    const vaccination_date = req.body.vaccination_date;
    const query = "UPDATE `immunization` SET `vaccine_name` = '" + vaccine_name + "', `vaccination_date` = '" + vaccination_date + "' WHERE `immunization`.`immunization_id` = '" + immunization_id + "' ";
    console.log(query);
    writeTable(query)
      .then(data => res.json(data));
  },
};
