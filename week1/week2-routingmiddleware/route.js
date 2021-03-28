const router = require('express').Router();
const cat = require('./models/catModel');

router.route('/')
  .post(async (req, res) => {
    const post = await cat.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      color: req.body.gender,
      weight: req.body.weight
    });
    res.send(`cat post ${post.name} created with id: ${post._id}`);
  })
  .get(async (req, res) => {
    res.send(await cat.find({ hidden: false }).where('date').gt(new Date(new Date().setFullYear(new Date().getFullYear() - 1))));
    //^wat
  });

router.route('/:id')
  .get(async (req, res) => {
    res.send(await cat.findById(req.params.id));
  })
  .patch(async (req, res) => {
    const mod = await cat.updateOne({ _id: req.params.id }, { title: req.body.name });
    res.status(200).send(`updated sucessfully ${mod.nModified} cat post`);
  })
  .delete(async (req, res) => {
    const del = await cat.deleteOne({ _id: req.params.id });
    res.send(`deleted ${del.deletedCount} cat post`);
  });

module.exports = router;