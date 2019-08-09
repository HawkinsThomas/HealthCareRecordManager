const path = require('path');

const PAGE_DIR = path.resolve('dist');
console.log(path.join(PAGE_DIR, 'index.html'));

module.exports = {
  getHomePage: (req, res) => {
    res.sendFile(path.join(PAGE_DIR, 'index.html'));
  },
};
