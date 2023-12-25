// authMiddleware.js

const { loginUser } = require('../controllers/authController');

function isManager(req, res, next) {
  const { username, password } = req.body;
  const user = loginUser(username, password);

  if (user && user.role === 'manager') {
    next();
  } else {
    res.status(403).json({ error: 'Permission denied' });
  }
}

module.exports = {
  isManager
};
