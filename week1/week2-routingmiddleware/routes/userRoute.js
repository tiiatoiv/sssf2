'use strict';
// userRoute

var express = require('express')
var router = express.Router()
const userController = require('../controllers/userController');
const { user_list_get, user_get, user_cat } = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', user_get);

router.post('/', upload.single('user'), add_user);
  
app.put('/user', function (req, res) {
res.send('POST request to user')
});

app.delete('/user', function (req, res) {
res.send('DELETE request to user')
});

module.exports = router;