// http server

const http = require('http');
const app = require('./app');
const HTTP_PORT = process.env.HTTP_PORT || 80;
const server = http.createServer(app);

// socket.io server

const socketIo = require('socket.io');
const io = socketIo(server, {
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// DB for chat data

const { Chatting } = require('./models');

io.on('connection', (socket) => {
  // join : 채팅 참여 이벤트
  // send : 클라이언트가 메시지 보내는 이벤트
  // item: {name: String, msg: String, timeStamp: String}

  console.log(`socket.io is running on port :${HTTP_PORT}`);

  socket.on('join', ({ chatroomId: room, userInfo }) => {
    socket.join(room);
    io.to(room).emit('onConnect', {
      hello: 'hello',
      content: `${userInfo.nickname} 님이 입장했습니다.`,
    });

    socket.on('onSend', async (content) => {
      io.to(room).emit('onReceive', {
        ...userInfo,
        User: {
          nickname: userInfo.nickname,
          image: userInfo.image,
        },
        content,
      });

      // create chat data in DB

      try {
        await Chatting.create({
          userId: userInfo.id,
          chatroomId: room,
          content: content,
        });
      } catch (err) {
        console.log(err);
      }
    });

    socket.on('disconnect', () => {
      socket.leave(room);
      io.to(room).emit('onDisconnect', `${user} 님이 퇴장하셨습니다.`);
    });
  });
});

server.listen(HTTP_PORT, () =>
  console.log(`Cogether's Server is running on port :${HTTP_PORT}`)
);
