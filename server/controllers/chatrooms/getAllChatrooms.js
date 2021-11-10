const { User, Chatroom, User_chatroom } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  const myId = auth.id;
  let data = [];

  try {
    const userChatroom = await User_chatroom.findAll({
      where: {
        userId: myId,
      },
    });

    if (userChatroom.length !== 0) {
      for (let i = 0; i < userChatroom.length; i++) {
        const RoomInfo = await Chatroom.findOne({
          where: {
            id: userChatroom[i].chatroomId,
          },
          include: [{ model: User }],
        });

        const opponentInfoList = RoomInfo.Users.filter(
          (user) => user.id !== myId
        );

        opponentInfoList.forEach((opponentInfo) => {
          data.push({
            roomId: RoomInfo.id,
            opponentId: opponentInfo.id,
            opponentEmail: opponentInfo.email,
            opponentNickname: opponentInfo.nickname,
            opponentImage: opponentInfo.image,
          });
        });
      }

      return res.status(200).send({
        data: data,
        message: 'get all chatrooms successed',
      });
    } else {
      return res.status(200).send({
        data: null,
        message: 'chatroom is not exist',
      });
    }
  } catch (error) {
    console.error(error);
  }
};
