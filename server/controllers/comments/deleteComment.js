const { Post_comment } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const auth = isAuthorized(req);
  const { id } = req.params;

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    await Post_comment.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      message: 'delete comment successed',
    });
  } catch (err) {
    console.log(err);
  }
};
