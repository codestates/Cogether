require('dotenv').config();

const { User } = require('../../models');
const {
  generateToken,
  sendToken,
  comparePassword,
} = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
        authorization: false,
      },
    });

    if (!user) {
      return res.status(400).send({
        data: null,
        message: 'user is not exist',
      });
    }
    const compareResult = comparePassword(password, user.password);

    if (!compareResult) {
      return res.status(401).send({
        data: null,
        message: 'wrong password',
      });
    }

    const payload = {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      image: user.image,
    };

    const accessToken = generateToken(payload);

    sendToken(res, accessToken);

    res.status(200).send({
      data: {
        acceesToken: accessToken,
        id: user.id,
        email: user.email,
        image: user.image,
        authorization: false,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      message: 'sign in successed',
    });
  } catch (err) {
    console.log(err);
  }
};
