const { Post_hashtag } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post_hashtag.findAll({
      where: {
        hashtagId: id,
      },
    });

    if (post.length === 0) {
      return res.status(400).send({
        data: null,
        message: 'cannot find posts by hashtag',
      });
    }

    res.status(200).send({
      data: post,
      message: 'get posts by hashtag successed',
    });
  } catch (err) {
    console.log(err);
  }
};
