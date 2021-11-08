const { User } = require('../../models');
const {
  isAuthorized,
  generateToken,
  sendToken,
} = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { nickname, password } = req.body;
  const auth = isAuthorized(req);

  // 토근 검증

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }
  try {
    // 닉네임 중복 검사
    const checkNickName = await User.findOne({
      where: {
        nickname: nickname,
      },
    });
    if (checkNickName) {
      if (auth.id !== checkNickName.id) {
        return res.status(400).send({
          message: 'nickname is already exist',
        });
      }
    }
    // 회원 정보 수정
    const userInfo = await User.findOne({
      where: {
        email: auth.email,
      },
    });

    if (!req.file) {
      userInfo.image = null;
    }

    if (req.file) {
      userInfo.image = req.file.location;
    }

    if (nickname) {
      userInfo.nickname = nickname;
      userInfo.image = userInfo.image;
    }

    if (password) {
      userInfo.nickname = nickname;
      userInfo.image = userInfo.image;
    }

    await userInfo.save();

    const payload = {
      id: userInfo.id,
      email: userInfo.email,
      image: userInfo.image,
      nickname: userInfo.nickname,
    };

    res.clearCookie('authorization', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      path: '/',
      domain: '/',
    });

    const accessToken = generateToken(payload);
    sendToken(res, accessToken);

    return res.status(200).send({
      data: {
        accessToken: accessToken,
        id: userInfo.id,
        email: userInfo.email,
        image: userInfo.image,
        nickname: userInfo.nickname,
        login_type: userInfo.login_type,
        authorization: userInfo.authorization,
        createdAt: userInfo.createdAt,
        updatedAt: userInfo.updatedAt,
      },
      message: 'update userinfo successed',
    });
  } catch (err) {
    console.log('error', err);
  }
};
