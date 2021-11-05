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
    const myPosts = Post.findAll({
      where: {
        userId: auth.id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
