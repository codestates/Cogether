const { Post, User, Post_hashtag, Post_interest } = require('../../models');
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

    const interestPost = await Post_interest.findOne({
      where: {
        userId: auth.id,
        postId: id,
      },
    });

    let interested = false;

    if (interestPost) {
      return (interested = true);
    }

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
        interested: interested,
        message: `get author's post detail successed`,
      });
    }

    // else

    res.status(200).send({
      data: post,
      stacks: stackArr,
      visitorId: auth.id,
      interested: interested,
      message: `get post detail successed`,
    });
  } catch (err) {
    console.log(err);
  }
};
