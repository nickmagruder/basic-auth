'use strict'

require('dotenv').config();


const app = require('./src/server.js');
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const MONGO = process.env.MONGODB_URI;


mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    server.start(PORT);
});

