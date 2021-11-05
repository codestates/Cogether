const { Post, Post_hashtag } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findOne({
      where: {
        id,
      },
    });

    // update totalViews value + 1
    if (post) {
      post.totalViews = post.totalViews + 1;
    }

    await post.save();

    const hashtags = await Post_hashtag.findAll({
      attritbutes: ['hashtagId'],
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
    // update totalViews value - 1

    post.totalViews = post.totalViews - 1;
    await post.save();

    console.log(err);
  }
};
