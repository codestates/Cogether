const express = require('express');
const { commentController } = require('../controllers/comments');

const router = express.Router();

router.post('/:id', commentController.createComment);
router.get('/:id', commentController.getAllComments);
router.delete('/:id', commentController.deleteComment);

module.exports.commentRouter = router;
