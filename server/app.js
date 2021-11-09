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
