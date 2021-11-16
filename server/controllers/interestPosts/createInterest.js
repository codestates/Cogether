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
    const interestPost = await Post_interest.findOne({
      where: {
        userId: auth.id,
        postId: id,
      },
    });

    if (interestPost) {
      return res.status(400).send({
        message: 'post is already exist in interest list',
      });
    }

    await Post_interest.create({
      userId: auth.id,
      postId: id,
    });

    const post = await Post.findOne({
      where: {
        id,
      },
    });

    post.totalInterests = post.totalInterests + 1;

    await post.save();

    res.status(200).send({
      data: {
        post,
      },
      message: 'add interest list successed',
    });
  } catch (err) {
    console.log(err);
  }
};
