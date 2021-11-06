const { Post } = require('../../models');

module.exports = {
  // increase the value of totalComments column when post's comment inserted
  increaseTotalComments: async (req, res) => {
    console.log('1');
    const { id } = req.params;

    try {
      const post = await Post.findOne({
        where: {
          id,
        },
      });

      post.totalComments = post.totalComments + 1;

      await post.save();

      res.status(200).send({
        data: {
          totalComments: post.totalComments,
        },
        message: 'increase totalcomment successed',
      });
    } catch (err) {
      console.log(err);
    }
  },

  // decrease the value of totalComments column when post's comment deleted

  decreaseTotalComments: async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Post.findOne({
        where: {
          id,
        },
      });

      post.totalComments = post.totalComments - 1;

      await post.save();

      res.status(200).send({
        data: {
          totalComments: post.totalComments,
        },
        message: 'decrease totalcomment successed',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
