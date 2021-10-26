const express = require('express');
const evaluationController = require('../controllers/evaluations');

const router = express.Router();

router.post('/', evaluationController.postEvaluation);

module.exports.evaluationRouter = router;
