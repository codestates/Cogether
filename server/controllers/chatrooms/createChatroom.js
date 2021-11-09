const { Chatroom, User } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');
const _ = require('lodash');

module.exports = (req, res) => {
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  const myId = auth.id;
  const opponentId = req.body.opponentId;

  try {
    const user = await User.findOne({
      where: {
        id: auth.id,
      },
      attributes: ['id'],
      include: [{ model: Chatroom }],
    });

    const oppentUser = await User.findOne({
      where: {
        id: opponentId,
      },
      attributes: ['id'],
      include: [{ model: Chatroom }],
    });

    const myChatrooms = [];
    const opponenUserList = [];

    for (let i = 0; i < user.Chatrooms.length; i++) {
      myChatrooms.push(user.Chatrooms[i].id);
    }

    for (let i = 0; i < oppentUser.Chatrooms.length; i++) {
      myChatrooms.push(opponenUserList.Chatrooms[i].id);
    }

    const isChatroom = _.intersection(myChatrooms, opponenUserList);
    console.log(isChatroom);

    if (isChatroom.length === 0) {
      const chatroomInfo = await Chatroom.create({});

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
