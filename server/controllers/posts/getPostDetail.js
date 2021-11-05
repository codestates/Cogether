const { Post, Post_hashtag } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findOne({
      where: {
        id,
      },
    });

    const hashtags = await Post_hashtag.findAll({
      where: {
        postId: id,
      },
    });

    const stackArr = hashtags.map((item) => item.hashtagId);

    res.status(200).send({
      data: post,
      stacks: stackArr,
      message: 'get post detail successed',
    });
  } catch (err) {
    console.log(err);
  }
};
