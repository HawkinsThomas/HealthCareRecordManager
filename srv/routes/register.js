const argon2 = require('argon2');
const { writeTable } = require('../db/writeTable');
const { userExists } = require('../db/userExists');

module.exports = {
  register: (req, res) => {
    userExists(req.body.user_name)
      .then((exists) => {
        if (!exists) {
          argon2.hash(req.body.password)
            .then((pwHash) => {
              const query = `INSERT INTO user VALUES ('${req.body.isAdmin}','${req.body.first_name}','${req.body.last_name}','${req.body.user_name}', '${pwHash}');`;
              writeTable(query)
                .catch(error => res.json(error))
                .then((data) => {
                  res.redirect('/');
                });
            });
        } else {
          res.json({ error: 'username already exists' });
        }
      });
  },
};
