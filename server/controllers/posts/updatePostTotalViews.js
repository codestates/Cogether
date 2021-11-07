const { Post } = require('../../models');

module.exports = async (req, res) => {
  // increase post's totalviews

  const { id } = req.params; //post's id(PK)

  try {
    const post = await Post.findOne({
      where: {
        id,
      },
    });

    post.totalViews = post.totalViews + 1;

    await post.save();

    res.status(200).send({
      data: {
        totalViews: post.totalViews,
      },
      message: 'increase totalview successed',
    });
  } catch (err) {
    console.log(err);
  }
};
