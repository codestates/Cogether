'use strict';

module.exports = {
  postController: {
    createPost: require('./createPost'),
    getPostByHashtags: require('./getPostByHashtags'),
    getAllPosts: require('./getAllPosts'),
    getPostDetail: require('./getPostDetail'),
    getMyPosts: require('./getMyPosts'),
    updatePost: require('./updatePost'),
    deletePost: require('./deletePost'),
  },
};
