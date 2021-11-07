const { User, Post, Post_hashtag } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { title, content, stacks } = req.body;
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    // update post
    await Post.update(
      {
        title: title,
        content: content,
        mainstack: stacks[0],
      },
      {
        where: {
          id,
        },
      }
    );

    await Post_hashtag.destroy({
      where: {
        postId: id,
      },
    });

    await stacks.forEach((stack) => {
      Post_hashtag.create({
        postId: id,
        hashtagId: stack,
      });
    });

    const updatedPost = await Post.findOne({
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

    res.status(200).send({
      data: updatedPost,
      stacks: stackArr,
      message: 'update post successed',
    });
  } catch (err) {
    console.log(err);
  }
};
