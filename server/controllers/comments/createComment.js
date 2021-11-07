const { User, Post, Post_comment } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

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

    // update totalViews value - 1 because totalViews increased by re-render
    if (createdData) {
      post.totalViews = post.totalViews - 1;
    }

    res.status(201).send({
      data: {
        id: createdData.id,
        userId: createdData.userId,
        postId: createdData.postId,
        nickname: user.nickname,
        image: user.image,
        comment: createdData.comment,
      },
      message: 'create comment successed',
    });
  } catch (err) {
    console.log(err);
  }
};
