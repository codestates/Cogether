const { Chatroom, User, User_chatroom } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');
const _ = require('lodash');

module.exports = async (req, res) => {
  const auth = isAuthorized(req);
  const myId = auth.id;
  const opponentId = req.body.opponentId;

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    const myChatrooms = await User_chatroom.findAll({
      where: {
        userId: myId,
      },
    });

    const opponentChatrooms = await User_chatroom.findAll({
      where: {
        userId: opponentId,
      },
    });

    const myRoomList = myChatrooms.map(
      (chatroom) => chatroom.dataValues.chatroomId
    );
    const opponentList = opponentChatrooms.map(
      (chatroom) => chatroom.dataValues.chatroomId
    );

    const isChatroom = _.intersection(myRoomList, opponentList);

    if (isChatroom.length === 0) {
      const chatroomInfo = await Chatroom.create({
        userId: myId,
      });

      await chatroomInfo.addUsers(myId);
      await chatroomInfo.addUsers(opponentId);

      return res.status(200).send({
        data: {
          chatroomId: chatroomInfo.id,
          myId,
          opponentId,
        },
        message: 'create chatroom successed',
      });
    } else if (isChatroom.length === 1) {
      return res.status(200).send({
        data: {
          chatroomId: isChatroom[0],
          myId,
          opponentId,
        },
        message: 'create chatroom successed',
      });
    }
  } catch (err) {
    console.log(err);
  }
};
