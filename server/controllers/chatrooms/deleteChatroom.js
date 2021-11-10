const { User_chatroom, Chatroom, Chatting } = require('../../models');

module.exports = async (req, res) => {
  const chatroomId = req.body.id;

  try {
    // delete chatroom by chatroomId

    await User_chatroom.destroy({
      where: {
        chatroomId,
      },
    });

    await Chatroom.destroy({
      where: {
        id: chatroomId,
      },
    });

    // delete chatiings by chatroomId
    await Chatting.destroy({
      where: {
        chatroomId,
      },
    });

    res.status(200).send({
      message: 'delete chatroom, all chat data successed',
    });
  } catch (err) {
    console.log(err);
  }
};
