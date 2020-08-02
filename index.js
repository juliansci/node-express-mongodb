const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config');
const app = express();

const userApi = require('./routes/user');

app.use(express.json());
app.use(cors());
app.use(helmet());

userApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});