const express = require('express');
const { userController } = require('../controllers/users');

const router = express.Router();
// multer
const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
});

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/oauth', userController.oauth);
router.post('/signout', userController.signout);
router.get('/userinfo', userController.userinfo);
router.patch(
  '/userinfo',
  upload.single('userProfileImg'),
  userController.updateUserinfo
);
router.delete('/delete', userController.delete);

module.exports.userRouter = router;
