const argon2 = require('argon2');
const { getTable } = require('../db/getTable');
const { userExists } = require('../db/userExists');

module.exports = {
  login: (req, res) => {
    userExists(req.body.username)
      .then((exists) => {
        if (exists) {
          const query = `SELECT password FROM user WHERE user_name='${req.body.username}';`;
          getTable(query)
            .catch(error => res.json(error))
            .then((data) => {
              if (argon2.verify(data.tableData[0][0], req.body.password)) {
                req.session.username = req.body.username;
                res.redirect('/');
              } else {
                res.sendStatus(401);
              }
            });
        } else {
          res.sendStatus(401);
        }
      });
  },
};
