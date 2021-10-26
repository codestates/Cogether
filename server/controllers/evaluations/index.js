'use strict';

const { Evaluation } = require('../../models');

module.exports = {
  postEvaluation: async (req, res) => {
    const { grade, content } = req.body;

    if (!grade || !content) {
      return res.status(400).send({
        message: 'send user evaluation failed',
      });
    }

    try {
      await Evaluation.create({
        grade: grade,
        content: content,
      });
      res.status(201).send({
        message: 'send user evaluation success',
      });
    } catch (err) {
      res.sendStatus(500);
      console.log(err);
    }
  },
};
