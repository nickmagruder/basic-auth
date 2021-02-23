'use strict';

const express = require('express');


const app = express();

const userRouter = require('./auth/router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(userRouter);

function start(port) {
    app.listen(port, () => console.log (`app running on port ${PORT}`))
}


module.exports = {
    app: app,
    start: start,
}
