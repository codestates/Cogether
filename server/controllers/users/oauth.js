require('dotenv').config();
const axios = require('axios');

module.exports = {
  login: (req, res) => {
    return res.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile&access_type=offline&response_type=code&state=state_parameter_passthrough_value&redirect_uri=http://localhost:4000/users/oauth/callback&client_id=${process.env.GOOGLE_CLIENT_ID}`
    );
  },

  callback: async (req, res) => {
    const code = req.query.code;

    console.log(req);

    // const result = await axios.post(
    //   `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_PASSOWRD}&redirect_uri=http://localhost:3000&grant_type=authorization_code`
    // );
    // console.log(result);
  },
};
