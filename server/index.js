const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).send('Cogether Project !');
});

const HTTP_PORT = process.env.HTTP_PORT || 4000;

app.listen(HTTP_PORT, () => {
  console.log(`Cogether's Server is running on ${HTTP_PORT}`);
});
