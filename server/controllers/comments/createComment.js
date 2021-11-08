const { User, Post, Post_comment } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params;

  console.log(req.params);

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

    const createcomment = await Post_comment.create({
      userId: user.id,
      postId: post.id,
      comment,
    });

    const commentData = await Post_comment.findOne({
      where: {
        id: createcomment.id,
      },
      include: [
        {
          model: User,
          attributes: ['nickname', 'image'],
        },
      ],
    });

    res.status(201).send({
      data: commentData,
      message: 'create comment successed',
    });
  } catch (err) {
    console.log(err);
  }
};
