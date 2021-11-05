const { Post_hashtag, Post } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post_hashtag.findAll({
      where: {
        hashtagId: id,
      },
      include: [
        {
          model: Post,
          attributes: [
            'title',
            'content',
            'mainstack',
            'totalViews',
            'totalInterests',
            'totalComments',
          ],
        },
      ],
      order: [['createdAt', 'DESC']],
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
