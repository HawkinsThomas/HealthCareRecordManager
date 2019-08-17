const { getTable } = require('../db/getTable');

module.exports = {
  postPatientImmunizationAdd: (req, res) => {
		let health_card_no = req.params.health_card_no;
		let immunization_id = req.body.immunization_id;
        let vaccine_name = req.body.vaccine_name;
        let vaccination_date = req.body.vaccination_date;
		const query = "INSERT INTO `immunization`(immunization_id,health_card_no,vaccine_name, vaccination_date) VALUES (NULL,'" + health_card_no + "','" + vaccine_name + "', '" + vaccination_date + "')";
    getTable(query)
      .then(data => res.json(data));
  },
};
