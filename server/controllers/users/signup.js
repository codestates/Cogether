const { User } = require('../../models');

module.exports = async (req, res) => {
  const { email, nickname, password } = req.body;

  try {
    const [user, created] = await User.findOrCreate({
      where: {
        email,
        authorization: 'user',
      },
      defaults: {
        email,
        nickname,
        password: password,
        authorization: 'user',
        login_type: 'local',
      },
    });

    if (!created) {
      return res.status(409).send({
        message: 'email already exists',
      });
    }

    res.status(201).send({
      data: {
        id: user.id,
        email: user.email,
        image: user.image,
        nickname: user.nickname,
        login_type: user.login_type,
        authorization: user.authorization,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      message: 'sign up successed',
    });
  } catch (err) {
    console.log(err);
  }
};
