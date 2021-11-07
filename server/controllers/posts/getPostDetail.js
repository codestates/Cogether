const { Post, User, Post_hashtag } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { id } = req.params;
  const auth = isAuthorized(req);

  try {
    const post = await Post.findOne({
      where: {
        id,
      },
      include: [
        {
          model: User,
          as: 'User',
          attributes: ['nickname', 'image'],
        },
      ],
    });

    const hashtags = await Post_hashtag.findAll({
      where: {
        postId: id,
      },
    });

    const stackArr = hashtags.map((item) => item.hashtagId);

    // normal user !== post author

    if (!auth) {
      return res.status(200).send({
        data: post,
        stacks: stackArr,
        message: 'get post detail successed',
      });
    }

    // user === post author

    if (auth.id === post.userId) {
      return res.status(200).send({
        data: post,
        stacks: stackArr,
        visitorId: auth.id,
        message: `get author's post detail successed`,
      });
    }
    // else

    res.status(200).send({
      data: post,
      stacks: stackArr,
      visitorId: auth.id,
      message: `get post detail successed`,
    });
  } catch (err) {
    console.log(err);
  }
};
