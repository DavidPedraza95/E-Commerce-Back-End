const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
  })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((dbRes) => {
    res.json(dbRes);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
