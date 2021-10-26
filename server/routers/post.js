const express = require('express');
const { postController } = require('../controllers/posts');

const router = express.Router();

router.post('/', postController.createPost);
router.get('/hashtags/:id', postController.getPostByHashtags);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostDetail);
router.get('/myposts', postController.getMyPost);
router.patch('/:id', postController.updatePost);
router.patch('/views/:id', postController.updateTotalViews);
router.delete('/:id', postController.deletePost);

module.exports.postRouter = router;
