'use strict';
// userController

const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  const gotUser = userModel.users.find(user => user.id === req.params.id);
  res.json(gotUser);
};

const add_user = (req, res) => {
  console.log(req.file);
  console.log(req.body);
};

module.exports = {
    user_list_get,
  };