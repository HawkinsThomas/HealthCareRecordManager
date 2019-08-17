module.exports = {
  authenticate: (req, res, next) => {
    if (req.session.username === undefined || req.session.username === null) {
      req.session.username = null;
    }
    next();
  },
};
