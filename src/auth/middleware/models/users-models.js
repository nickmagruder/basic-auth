'use strict'

const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: { type: String, required: true , unique: true },
  password: { type: String, required: true },
});

usersSchema.pre('save', async function () {
});


usersSchema.statics.example = async function () {
}

const Users = mongoose.model('api_user', usersSchema);


module.exports = Users;