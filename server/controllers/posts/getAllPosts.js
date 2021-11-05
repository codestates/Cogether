const { Post, Post_Hashtag } = require('../../models');

module.exports = {
  // get all posts sorted by createdAt - default(최신순)
  byCreatedAt: async (req, res) => {
    try {
      const sortedByCreatedAt = await Post.findAll({
        order: [['createdAt', 'DESC']],
      });

      res.status(200).send({
        data: sortedByCreatedAt,
        message: 'get all posts sorted by createdat successed',
      });
    } catch (err) {
      console.log(err);
    }
  },

  // get all posts sorted by totalviews - onClick (인기순)
  byTotalViews: async (req, res) => {
    try {
      const sortedByTotalViews = await Post.findAll({
        order: [['totalViews', 'DESC']],
      });

      res.status(200).send({
        data: sortedByTotalViews,
        message: 'get all posts sorted by totalviews successed',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
