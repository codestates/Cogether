module.exports = {
  postController: {
    createPost: require('./createPost'),
    getPostByHashtags: require('./getPostByHashtags'),
    getAllPosts: require('./getAllPosts'),
    getPostDetail: require('./getPostDetail'),
    getMyPost: require('./getMyPosts'),
    updatePost: require('./updatePost'),
    updateTotalViews: require('./updateTotalViews'),
    deletePost: require('./deletePost'),
  },
};
