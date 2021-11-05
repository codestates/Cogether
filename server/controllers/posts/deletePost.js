const { Post, Post_hashtag } = require('../../models');
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
    await Post.destroy({
      where: {
        id,
      },
    });

    await Post_hashtag.destroy({
      where: {
        postId: id,
      },
    });

    res.status(200).send({
      message: 'delete post successed',
    });
  } catch (err) {
    console.log(err);
  }
};
