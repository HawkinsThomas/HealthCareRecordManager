const path = require('path');

const PAGE_DIR = path.resolve('dist');

module.exports = {
  getPatients: (req, res) => {
    res.sendFile(path.join(PAGE_DIR, 'patients.html'));
  },
};
