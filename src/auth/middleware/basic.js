'use strict'

const bcrypt = require('bcrypt');
const base64 = require('base-64');

const usersModel = require('./models/users-models');

async function headers(req, res, next) {

    try {
        let basicHeader = req.headers.authorization.split(' ');
        let encodedString = basicHeader[1];
        let decodedString = base64.decode(encodedString);
        let [username, password] = decodedString.split(':');


        let userFromDB = await usersModel.findOne({ username: username });
        let isValid = await bcrypt.compare(password, userFromDB.password);

        if (isValid) {
            req.params.userFromDB = userFromDB;
            next();

        } else {
            next('bad credentials');
        }

    } catch (e) {
        next('bad credentials');
    }


}




module.export = headers;