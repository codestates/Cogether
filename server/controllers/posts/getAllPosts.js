const { Post } = require('../../models');

module.exports = async (req, res) => {
  try {
    const posts = await Post.findAll();

    res.status(200).send({
      data: posts,
      message: 'get all posts successed',
    });
  } catch (err) {
    console.log(err);
  }
};
