const { Post } = require('../../models');

module.exports = async (req, res) => {
  console.log('2');
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

    res.status(200).send({
      data: post,
      message: 'get post detail successed',
    });
  } catch (err) {
    // update totalViews value - 1

    post.totalViews = post.totalViews - 1;
    await post.save();

    console.log(err);
  }
};
