const { User, Post_comment } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const commentData = await Post_comment.findAll({
      where: {
        postId: id,
      },
      include: [
        {
          model: User,
          attributes: ['nickname', 'image'],
        },
      ],
    });

    res.status(200).send({
      data: commentData,
      message: 'get all comments successed',
    });
  } catch (err) {
    console.log(err);
  }
};
