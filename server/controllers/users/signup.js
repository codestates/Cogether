const { User } = require('../../models');
const { hashPassword } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { email, nickname, password } = req.body;

  try {
    const hashedPassword = hashPassword(password);
    const [user, created] = await User.findOrCreate({
      where: {
        email,
        authorization: false,
      },
      defaults: {
        email,
        nickname,
        password: hashedPassword,
        authorization: false,
      },
    });

    if (!created) {
      return res.status(409).send({
        message: 'email already exists',
      });
    }

    res.status(201).send({
      message: 'sign up successed',
    });
  } catch (err) {
    console.log(err);
  }
};
