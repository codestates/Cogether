const { isAuthorized } = require('../../utils/helpFunc');
const { User, Post, Post_comment, User_chatroom } = require('../../models');

module.exports = async (req, res) => {
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    await User.destroy({
      where: {
        id: auth.id,
      },
    });

    await Post.destroy({
      where: {
        userId: auth.id,
      },
    });

    await Post_comment.destroy({
      where: {
        userId: auth.id,
      },
    });

    await User_chatroom.destroy({
      where: {
        userId: auth.id,
      },
    });

    res
      .clearCookie('authorization', {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        path: '/',
        domail: '/',
      })
      .status(200)
      .send({
        message: 'user deleted successed',
      });
  } catch (err) {
    console.log(err);
  }
};
