const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const db = require('./db');
const image = require('./image/model');
const imageRouter = require('./image/router');

app.use(imageRouter);

app.listen(port, () => console.log(`app running on port ${port}`));