'use strict';

const pool = require('../database/db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getCat = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE cat_id = ' + id);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

module.exports = {
  getAllCats,
};


const cats = [
  {
    id: '1',
    name: 'Frank',
    age: '6',
    weight: '5',
    owner: '1',
    filename: 'http://placekitten.com/400/300',
  },
  {
    id: '2',
    name: 'James',
    age: '4',
    weight: '11',
    owner: '2',
    filename: 'http://placekitten.com/400/302',
  },
];

const catSchema = new Schema({
  name:  String,
  age: String,
  gender:   String,
  color: String,
  weight: Number,
});

module.exports = {
  cats,
};

module.exports = mongoose.model('Cat', catSchema);

