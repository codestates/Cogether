const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const db = require('./models');

// check database connection

db.sequelize
  .sync()
  .then(() => {
    console.log('Connect to MySQL successed');
  })
  .catch(console.error);

// app setting

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

// routers declaration

const { userRouter } = require('./routers/user');
const { postRouter } = require('./routers/post');
const { interestPostRouter } = require('./routers/interestPost');
const { commentRouter } = require('./routers/comment');
const { chatroomRouter } = require('./routers/chatroom');
const { chattingRouter } = require('./routers/chatting');
const { evaluationRouter } = require('./routers/evaluation');

// use morgan for logging
const logRouter = express.Router();

logRouter.use(morgan('combined'));

logRouter.get('/', (req, res) => {
  console.log('access to log');
  res.writeHead(404, { 'Content-Type': 'text-html' });
  res.end('error !');
});

// express use routers

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/interests', interestPostRouter);
app.use('/comments', commentRouter);
app.use('/chatrooms', chatroomRouter);
app.use('/chattings', chattingRouter);
app.use('/evaluations', evaluationRouter);
app.use('/log', logRouter);

module.exports = app;
