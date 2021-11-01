const { User } = require('../../models');
const {
  isAuthorized,
  generateToken,
  sendToken,
} = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    const { nickname, password } = req.body;

    const checkNickName = await User.findOne({
      where: {
        nickname: nickname,
      },
    });

    if (checkNickName) {
      return res.status(400).send({
        message: 'nickname already exist',
      });
    }

    image = req.file.location || null;

    const newPassword = password;
    await User.update(
      {
        nickname: nickname,
        password: newPassword,
        image: image,
      },
      {
        where: {
          id: auth.id,
        },
      }
    );

    const updatedUser = await User.findOne({
      where: {
        nickname: nickname,
      },
    });

    const payload = {
      id: updatedUser.id,
      email: updatedUser.email,
      image: updatedUser.image,
      nickname: updatedUser.nickname,
    };

    const accessToken = generateToken(payload);

    sendToken(res, accessToken);

    res.status(200).send({
      data: {
        accessToken: accessToken,
        id: updatedUser.id,
        email: updatedUser.email,
        image: updatedUser.image,
        nickname: updatedUser.nickname,
        login_type: updatedUser.login_type,
        authorization: updatedUser.authorization,
        createdAt: updatedUser.createdAt,
        updatedAt: updatedUser.updatedAt,
      },
      message: 'update userinfo successed',
    });
  } catch (err) {
    console.log('error', err);
  }
};
