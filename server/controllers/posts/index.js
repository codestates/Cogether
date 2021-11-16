'use strict';

module.exports = {
  postController: {
    createPost: require('./createPost'),
    getPostByHashtags: require('./getPostByHashtags'),
    getAllPosts: require('./getAllPosts'),
    getPostDetail: require('./getPostDetail'),
    getMyPosts: require('./getMyPosts'),
    getMyInterestPosts: require('./getMyInterestPosts'),
    updatePost: require('./updatePost'),
    deletePost: require('./deletePost'),
    updatePostTotalViews: require('./updatePostTotalViews'),
  },
};
