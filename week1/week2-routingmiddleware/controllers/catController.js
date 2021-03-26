'use strict';
// catController

const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get_database = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};


const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  const gotCat = catModel.cats.find(cat => cat.id === req.params.id);
  res.json(gotCat);
};

const add_cat = (req, res) => {
  console.log(req.file);
  console.log(req.body);
};

module.exports = {
    cat_list_get,
    cat_list_get_database,
    cat_get,
  };