const { Post } = require('../../models');
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
    const myPosts = await Post.findAll({
      where: {
        userId: auth.id,
      },
      order: [['totalViews', 'DESC']],
    });

    if (myPosts.length === 0) {
      return res.status(404).send({
        data: null,
        message: 'my post is not exist',
      });
    }

    res.status(200).send({
      data: myPosts,
      message: 'get my post successed',
    });
  } catch (err) {
    console.log(err);
  }
};
