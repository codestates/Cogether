const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const http = require('http');

// routers declaration
const { userRouter } = require('./routers/user');
const { postRouter } = require('./routers/post');
const { interestPostRouter } = require('./routers/interestPost');
const { commentRouter } = require('./routers/comment');
const { chatroomRouter } = require('./routers/chatroom');
const { chattingRouter } = require('./routers/chatting');
const { evaluationRouter } = require('./routers/evaluation');

const app = express();

app.use(
  cors({
    origin: true,
    methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).send('Cogether Project !');
});

// express use routers

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/interests', interestPostRouter);
app.use('/comments', commentRouter);
app.use('/chatrooms', chatroomRouter);
app.use('/chattings', chattingRouter);
app.use('/evaluations', evaluationRouter);

const HTTP_PORT = process.env.HTTP_PORT || 80;

const server = http.createServer(app);
// .listen(HTTP_PORT, () => {
//   console.log(`Cogether's Server is running on ${HTTP_PORT}`);
// });

//socket io

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
