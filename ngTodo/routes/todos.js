const express = require('express');
const mongojs = require('mongojs');

const router = express.Router();

const db = mongojs('mongodb://test:test@ds129469.mlab.com:29469/ngtodos', ['todos'])

// Get todos
router.get('/todos', (req, res, next) => {
  db.todos.find((err, todos) => {
    if (err) {
      res.send(err);
    } else {
      res.send(todos);
    }
  })
});

// Get single todos
router.get('/todo/:id', (req, res, next) => {
  db.todos.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, (err, todo) => {
    if (err) {
      res.send(err);
    } else {
      res.send(todo);
    }
  })
});

// Save todos
router.post('/todo', (req, res, next) => {
  const todo = req.body;
  if (!todo.text || !(todo.isCompleted + '')) {
    res.status(400);
    res.json({
      "error": "Invalid data"
    })
  } else {
    db.save(todo, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }
});

// Update todos
router.put('/todo/:id', (req, res, next) => {
  const todo = req.body;
  const updObj = {};
  
  if (todo.isCompleted) {
    updObj.isCompleted = todo.isCompleted;
  }

  if (todo.text) {
    updObj.text = todo.text;
  }

  if (!updObj) {
    res.status(400);
    res.send({
      "error": "Invalid data"
    })
  } else {
    db.todos.update(
      {_id: mongojs.ObjectId(req.params.id)}), 
      updObj, 
      {},
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
  }

});

// Delete todos
router.delete('/todo/:id', (req, res, next) => {
  db.todos.remove(
    {_id: mongojs.ObjectId(req.params.id)}), 
    '', 
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
});

module.exports = router;