const { User } = require('../../models');
const { generateToken, sendToken } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
        authorization: 'user',
      },
    });

    if (!user) {
      return res.status(400).send({
        data: null,
        message: 'user is not exist',
      });
    } else {
      if (password !== user.password) {
        return res.status(401).send({
          data: null,
          message: 'wrong password',
        });
      }

      const payload = {
        id: user.id,
        email: user.email,
        image: user.image,
        nickname: user.nickname,
      };

      const accessToken = generateToken(payload);

      sendToken(res, accessToken);

      res.status(200).send({
        data: {
          accessToken: accessToken,
          id: user.id,
          email: user.email,
          image: user.image,
          nickname: user.nickname,
          login_type: user.login_type,
          authorization: user.authorization,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        message: 'sign in successed',
      });
    }
  } catch (err) {
    console.log(err);
  }
};
