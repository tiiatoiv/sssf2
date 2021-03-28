'use strict';
// catController
const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
    users.forEach((user) => {
        delete user.password
    });
    res.json(users);
};


const user_get = (req, res) => {
    const id = req.params.id;
    const user = users.filter((user) => user.id === id).pop();
    delete user.password;
    res.json(user);
};

module.exports = {
    user_list_get,
    user_get,

};