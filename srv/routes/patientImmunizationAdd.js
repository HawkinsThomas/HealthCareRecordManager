const { getTable } = require('../db/getTable');

module.exports = {
  getPatientImmunizationAdd: (req, res) => {
		let health_card_no = req.params.health_card_no;
        let vaccine_name = req.params.vaccine_name;
        let vaccination_date = req.body.vaccination_date;
		const query = "INSERT INTO `immunization`(vaccine_name, vaccination_date) VALUES ('" + vaccine_name + "', '" + vaccination_date + "')";
    getTable(query)
      .then(data => res.json(data));
  },
};
