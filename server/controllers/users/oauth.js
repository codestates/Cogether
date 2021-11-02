require('dotenv').config();
const { User } = require('../../models');
const axios = require('axios');
const { generateToken, sendToken } = require('../../utils/helpFunc');

module.exports = {
  login: (req, res) => {
    return res.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile&access_type=offline&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&client_id=${process.env.GOOGLE_CLIENT_ID}`
    );
  },

  callback: async (req, res) => {
    const code = req.query.code;

    try {
      const result = await axios.post(
        `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_PASSOWRD}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&grant_type=authorization_code`,
      );

      const userInfo = await axios.get(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${result.data.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${result.data.access_token}`,
          },
        }
      );

      const [user, created] = await User.findOrCreate({
        where: {
          email: userInfo.data.email,
          authorization: 'user',
        },
        defaults: {
          email: userInfo.data.email,
          image: userInfo.data.picture,
          nickname: userInfo.data.name,
          authorization: 'user',
          login_type: 'google',
        },
      });

      const payload = {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        image: user.image,
      };

      const accessToken = generateToken(payload);
      sendToken(res, accessToken);

      res.redirect(`${process.env.DOMAIN}?access_token=${accessToken}`);
    } catch (err) {
      console.log(err);
    }
  },
};
