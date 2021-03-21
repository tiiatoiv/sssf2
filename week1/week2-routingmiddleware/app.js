'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

var  = require('./routes/catRoute.js');
var = require('./routes/catRoute.js');

// ...

app.use('/cat', cat);
app.use('/user', user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
