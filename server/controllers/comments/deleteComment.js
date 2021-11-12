const { Post_comment, Post } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const auth = isAuthorized(req);
  const { id } = req.params;

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    const comment = await Post_comment.findOne({
      where: {
        id,
      },
    });

    const post = await Post.findOne({
      where: {
        userId: auth.id,
        id: comment.postId,
      },
    });

    post.totalComments = post.totalComments - 1;

    await post.save();

    await Post_comment.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      message: 'delete comment successed',
    });
  } catch (err) {
    console.log(err);
  }
};
