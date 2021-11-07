const { Post, Post_interest } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      data: null,
      message: 'unauthorized user',
    });
  }

  try {
    const myInterestPosts = await Post_interest.findAll({
      where: {
        userId: auth.id,
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

    if (myInterestPosts.length === 0) {
      return res.status(404).send({
        data: null,
        message: 'cannot find my interest post',
      });
    }

    res.status(200).send({
      data: myInterestPosts,
      message: 'get my interest posts successed',
    });
  } catch (err) {
    console.log(err);
  }
};
