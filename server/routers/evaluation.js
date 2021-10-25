const express = require('express');
const evaluationController = require('../controllers/evaluations');

const router = express.Router();

router.post('/', evaluationController.post);

module.exports.evaluationRouter = router;
