const express = require('express');
const { userController } = require('../controllers/users');

const router = express.Router();
// multer
const upload = require('../utils/multer');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/oauth/login', userController.oauth.login);
router.get('/oauth/callback', userController.oauth.callback);
router.post('/signout', userController.signout);
router.get('/userinfo', userController.userinfo);

router.patch(
  '/userinfo',
  upload.single('userProfileImg'),
  userController.updateUserinfo
);
router.delete('/delete', userController.delete);

module.exports.userRouter = router;
