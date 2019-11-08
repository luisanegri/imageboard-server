const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const imageRouter = require('./image/router');
const authRouter = require('./auth/router');
const userRouter = require('../server/user/router');
const bodyParser = require('body-parser');
// register the output as middleware
const parserMiddleware = bodyParser.json();

app.use(parserMiddleware);
app.use(imageRouter);
app.use(authRouter);
app.use(userRouter);

app.listen(port, () => console.log(`app running on port ${port}`));
