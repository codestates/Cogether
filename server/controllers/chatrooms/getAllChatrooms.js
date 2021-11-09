const { User, Chatroom } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  console.log('read Chatroom List');
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  const myId = auth.id;
  let data = [];

  /*
    roomid, = 룸 아이디
    opponentId
    opponentName = 상대방 닉네임
    opponentimg = 상대방 프사
    updatedAt = 마지막 채팅 시간
  */

  try {
    const myInfo = await User.findOne({
      where: {
        id: myId,
      },
      include: [
        {
          model: Chatroom,
        },
      ],
    });
    // console.log(myInfo.id);
    // console.log(myInfo.Chatrooms);
    if (myInfo.Chatrooms.length !== 0) {
      for (let i = 0; i < myInfo.Chatrooms.length; i++) {
        if (myInfo.Chatrooms[i]) {
          //   console.log(myInfo.Chatrooms[i].id);
          const RoomInfo = await Chatroom.findOne({
            where: {
              id: myInfo.Chatrooms[i].id,
            },
            include: [{ model: User }],
          });
          //   console.log(RoomInfo.id);
          //   console.log(RoomInfo.Users);
          const opponentInfoList = RoomInfo.Users.filter(
            (user) => user.id !== myId
          );
          //   console.log(opponentInfoList);
          opponentInfoList.forEach((opponentInfo) => {
            // console.log(opponentInfo);
            data.push({
              roomId: RoomInfo.id,
              opponentId: opponentInfo.id,
              opponentEmail: opponentInfo.email,
              opponentNickname: opponentInfo.nickname,
              opponentImage: opponentInfo.image,
            });
          });
        }
      }
      // 시간.....
      //   console.log(data);
      return res.status(200).send({ data, message: '성공' });
    } else {
      return res.status(200).send({ message: '채팅목록없음' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('에러');
  }
};
