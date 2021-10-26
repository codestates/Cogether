const express = require('express');
const { chatroomController } = require('../controllers/chatrooms');

const router = express.Router();

router.post('/', chatroomController.createChatroom);
router.get('/', chatroomController.getAllChatrooms);
router.delete('/:id', chatroomController.deleteChatroom);

module.exports.chatroomRouter = router;
