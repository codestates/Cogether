const { User } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      data: null,
      message: 'unauthorized user',
    });
  }

  try {
    const userInfo = await User.findOne({
      where: {
        id: auth.id,
      },
    });

    res.status(200).send({
      data: {
        id: userInfo.id,
        email: userInfo.email,
        image: userInfo.image,
        nickname: userInfo.nickname,
        authorization: userInfo.authorization,
        updatedAt: userInfo.updatedAt,
        createdAt: userInfo.createdAt,
      },
      message: 'get userinfo successed',
    });
  } catch (err) {
    console.log(err);
  }
};
