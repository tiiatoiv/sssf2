'use strict';
const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const passport = require('./utils/pass');
const app = express();
const port = 3000;

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})

const loggedIn = (req, res, next) => {
    if (req.user) {
        next();
} else {
    res.redirect('/form');
}
};

const cat = require('./routes/catRoute.js');
const user = require('./routes/catRoute.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

// ...

app.use('/cat', cat);
app.use('/user', user);

// modify app.post('/login',...
app.post('/login',
    passport.authenticate('local', {failureRedirect: '/form'}),
    (req, res) => {
      console.log('success');
      res.redirect('/secret');
    });

// modify app.get('/secret',...
app.get('/secret', loggedIn, (req, res) => {
  res.render('secret');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
