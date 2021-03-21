'use strict';
// catRoute

var express = require('express')
var router = express.Router()
const catController = require('../controllers/catController');
const { cat_list_get, cat_get, add_cat } = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', cat_get);

router.post('/', upload.single('cat'), add_cat);
  
app.put('/cat', function (req, res) {
res.send('POST request to cat')
});

app.delete('/cat', function (req, res) {
res.send('DELETE request to cat')
});

module.exports = router;