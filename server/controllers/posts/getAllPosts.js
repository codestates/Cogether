const { Post } = require('../../models');

module.exports = {
  // get all posts sorted by createdAt - default(최신순)
  byCreatedAt: async (req, res) => {
    try {
      const sortedByCreatedAt = await Post.findAll({
        order: [['createdAt', 'DESC']],
      });

      if (sortedByCreatedAt.length === 0) {
        return res.status(404).send({
          data: null,
          message: 'post is not exist',
        });
      }

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

      if (sortedByTotalViews.length === 0) {
        return res.status(404).send({
          data: null,
          message: 'post is not exist',
        });
      }

      res.status(200).send({
        data: sortedByTotalViews,
        message: 'get all posts sorted by totalviews successed',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
