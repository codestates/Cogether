const express = require('express');
const { interestController } = require('../controllers/interestPosts');

const router = express.Router();

router.get('/:id', interestController.getTotalInterests);
router.post('/:id', interestController.createInterest);
router.delete('/:id', interestController.deleteInterest);

module.exports.interestPostRouter = router;
