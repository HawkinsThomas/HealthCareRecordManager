const { getTable } = require('./getTable');

module.exports = {
  userExists: (username) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM user WHERE user_name='${username}';`;
      getTable(query)
        .catch(err => console.log(err))
        .then((data) => {
          if (data.length === 0) resolve(false);
          else resolve(true);
        });
    });
  },
};
