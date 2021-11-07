const { Post, Post_interest } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { id } = req.params;
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    const interestPost = Post_interest.findOne({
      where: {
        userId: auth.id,
        postId: id,
      },
    });

    if (!interestPost) {
      return res.statusCode(400);
    }

    await Post_interest.destroy({
      where: {
        userId: auth.id,
        postId: id,
      },
    });

    const post = await Post.findOne({
      where: {
        id,
      },
    });

    post.totalInterests = post.totalInterests - 1;

    await post.save();

    res.status(200).send({
      data: {
        post,
      },
      message: 'delete post interest successed',
    });
  } catch (err) {
    console.log(err);
  }
};
