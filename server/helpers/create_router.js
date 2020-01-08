const express = require('express');
const ObjectId = require('mongodb').ObjectID;

const createRouter = function (collection) {
  const router = express.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json({status: 500, error: error})
      })
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then((result) => {
        res.json(result.ops[0])
      })
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json({status: 500, error: error})
      })
  })

  router.delete('/:id', (req, res) => {
    const id = ObjectID(req.params.id)
    collection
      .deleteOne({_id: id})
      .then((result) => {
        res.json(result)
      })
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json({status: 500, error: error})
      })
  })

  return router;
};

module.exports = createRouter;
