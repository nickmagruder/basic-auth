'use strict'

const express = require('express');
const bcrypt = require('bcrypt');

const userModel = require('../auth/middleware/models/users-models.js');

const routerUser = express.Router();




const basicAuth = require('../auth/middleware/basic.js')



routerUser.post('/signup', async (req, res) => {

  if (!req.body.username) {
    res.status(500).send('Usernamed needed')
  }

  else if (!req.body.password) {
    res.status(500).send('Password Needed')

  } else {

    let username = req.body.username;
    let password = req.body.password;


    let encryptedPassword = await bcrypt.hash(password, 5);

    const newUser = new userModel({ username: username, password: encryptedPassword });
    const document = await newUser.save();

    res.status(201).json(document);
  }

});



  routerUser.post('/signin', basicAuth, async (req, res, next) => {

  const userFromDB = req.params.userFromDB;

  res.status(200).json(userFromDB);

});



module.exports = routerUser;