const { Chatroom, User } = require('../../models');
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
    const myInfo = await User.findOne({
      where: {
        id: myId,
      },
      attributes: ['id'],
      include: [
        {
          model: Chatroom,
        },
      ],
    });

    const opponentInfo = await User.findOne({
      where: {
        id: opponentId,
      },
      attributes: ['id'],
      include: [
        {
          model: Chatroom,
        },
      ],
    });

    const myRoomList = [];
    const opponentList = [];

    for (let i = 0; i < myInfo.Chatrooms.length; i++) {
      myRoomList.push(myInfo.Chatrooms[i].id);
    }

    for (let i = 0; i < opponentInfo.Chatrooms.length; i++) {
      opponentList.push(opponentInfo.Chatrooms[i].id);
    }

    const isChatroom = _.intersection(myRoomList, opponentList);

    if (isChatroom.length === 0) {
      const chatroomInfo = await Chatroom.create({
        userId: myInfo.id,
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
