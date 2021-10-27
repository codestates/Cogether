const { User } = require('../../models');
const {
  isAuthorized,
  hashPassword,
  generateToken,
} = require('../../utils/helpFunc');

module.exports = (req, res) => {
  res.status(200).send('update userInfo');
};
