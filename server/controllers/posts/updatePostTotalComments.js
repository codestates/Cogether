const { Post, Post_comment } = require('../../models');

module.exports = {
  increasePostTotalComments: async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Post.findOne({
        where: {
          id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },

  decreasePostTotalComments: async (req, res) => {
    const { id } = req.params;

    try {
    } catch (err) {
      console.log(err);
    }
  },
};
