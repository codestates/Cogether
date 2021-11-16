'use strict';
const { User, Chatting } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = {
  getAllChattings: async (req, res) => {
    const auth = isAuthorized(req);
    const roomId = req.params.id;

    if (!auth) {
      return res.status(401).send({ message: 'unauthorized user' });
    }

    try {
      const chattingData = await Chatting.findAll({
        where: {
          chatroomId: roomId,
        },
        include: [
          {
            model: User,
            attributes: ['id', 'nickname', 'image'],
          },
        ],
      });

      return res.status(200).send({
        data: chattingData,
        message: 'get all chat data successed',
      });
    } catch (error) {
      console.error(error);
    }
  },
};
