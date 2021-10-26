require('dotenv').config();

const { sign, verify } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  // use bcrypt for password hashing

  hashPassword: (password) => {
    return bcrypt.hashSync(password.toString(), 10);
  },
  comparePassword: (loginPassword, dbPassword) => {
    return bcrypt.compareSync(loginPassword, dbPassword);
  },

  // helpFunctions for jsonwebtoken

  generateToken: (data) => {
    return sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });
  },

  sendToken: (res, token) => {
    res.cookie('authorizaion', token, {
      httpOnly: true,
    });
  },

  isAuthorized: (req) => {
    const authorization =
      req.headers.authorization || req.cookies.authorization;
    if (!authorization) {
      return null;
    }
    const token = authorization.split(' ')[1];
    try {
      return verify(token, process.env.JWT_SECRET);
    } catch (err) {
      // return null if invalid token
      return null;
    }
  },
};
