const { User, Post, Post_hashtag, Hashtag } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { title, content, stacks } = req.body;
  const auth = isAuthorized(req);

  console.log(title, content, stacks);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    const userInfo = await User.findOne({
      where: {
        id: auth.id,
      },
      attributes: ['nickname', 'image'],
    });

    res.status(200).send({
      data: {
        // id:
        // userId: userInfo.id,
        nickname: userInfo.nickname,
        image: userInfo.image,
        title,
        content,
        stacks,
        totalViews,
        totalInterests,
        totalComments,
        // updatedAt:,
        // createdAt:,
      },
      message: 'create post successed',
    });
  } catch (err) {
    console.log(err);
  }
};
