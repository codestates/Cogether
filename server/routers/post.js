const express = require('express');
const { postController } = require('../controllers/posts');

const router = express.Router();

router.post('/', postController.createPost);

router.get('/hashtags/:id', postController.getPostByHashtags);
router.get('/', postController.getAllPosts.byCreatedAt);
router.get('/hotposts', postController.getAllPosts.byTotalViews);
router.get('/myposts', postController.getMyPosts);
router.get('/:id', postController.getPostDetail);

router.patch('/:id', postController.updatePost);
router.patch('/totalviews/:id', postController.updatePostTotalViews);
// router.patch(
//   'totalcomments/:id',
//   postController.updatePostTotalComments.increaseTotalComments
// );
// router.patch(
//   'totalcomment/:id',
//   postController.updatePostTotalComments.decreaseTotalComments
// );

router.delete('/:id', postController.deletePost);

module.exports.postRouter = router;
