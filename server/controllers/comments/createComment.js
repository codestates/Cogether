const { User, Post, Post_comment } = require('../../models');

module.exports = async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params;

  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    const user = await User.findOne({
      where: {
        id: auth.id,
      },
    });

    const post = await Post.findOne({
      where: {
        id,
      },
    });

    const createdData = await Post_comment.create({
      userId: user.id,
      postId: post.id,
      comment,
    });

    res.status(201).send({
      data: {
        createdData,
      },
      message: 'create comment successed',
    });
  } catch (err) {
    console.log(err);
  }
};
