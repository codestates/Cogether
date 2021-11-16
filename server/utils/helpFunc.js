require('dotenv').config();

const { sign, verify } = require('jsonwebtoken');

module.exports = {
  // helpFunctions for jsonwebtoken

  generateToken: (data) => {
    return sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });
  },

  sendToken: (res, token) => {
    res.cookie('authorizaion', token, {
      domain: process.env.DOMAIN,
      path: '/',
      maxAge: 24 * 6 * 60 * 1000,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
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
