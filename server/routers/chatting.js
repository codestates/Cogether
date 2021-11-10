const express = require('express');
const chattingController = require('../controllers/chattings');

const router = express.Router();

router.get('/:id', chattingController.getAllChattings);

module.exports.chattingRouter = router;
