'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const cat = require('./routes/catRoute.js');
const user = require('./routes/catRoute.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ...

app.use('/cat', cat);
app.use('/user', user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
