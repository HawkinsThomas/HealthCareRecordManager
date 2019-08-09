const path = require('path');

const PAGE_DIR = path.resolve('dist');

module.exports = {
  getHomePage: (req, res) => {
    res.sendFile(path.join(PAGE_DIR, 'index.html'));
  },
};
