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

io.on('connection', (socket) => {
  // join : 채팅 참여 이벤트
  socket.on('join', ({ roomName: room, userName: user }) => {
    socket.join(room);
    io.to(room).emit('onConnect', `${user} 님이 입장했습니다.`);
    // send : 클라이언트가 메시지 보내는 이벤트
    // item: {name: String, msg: String, timeStamp: String}
    socket.on('onSend', (messageItem) => {
      io.to(room).emit('onReceive', messageItem);
    });

    socket.on('disconnect', () => {
      socket.leave(room);
      io.to(room).emit('onDisconnect', `${user} 님이 퇴장하셨습니다.`);
    });
  });
});

server.listen(HTTP_PORT, () =>
  console.log(`Cogether's Server is running on ${HTTP_PORT}`)
);
