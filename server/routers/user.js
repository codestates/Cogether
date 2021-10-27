const express = require('express');
const { userController } = require('../controllers/users');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/oauth', userController.oauth);
router.post('/signout', userController.signout);
router.get('/userinfo', userController.userinfo);
router.patch('/userinfo', userController.updateUserinfo);
router.delete('/delete', userController.delete);

module.exports.userRouter = router;
