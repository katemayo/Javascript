const express = require('express')
const router = express.Router()

const Todo = require('../models/todo');

router.get('/todos/:id', function(req, res) {
  let id = req.params.id;
  
  Todo.findById(id, function(err, todo) {
    res.render('todos/show', { todo: todo });
  });
});

router.get('/todos', function (req, res) {

  Todo.find(function(err, todos) {
    res.render('todos/index', { todos: todos });
  });
  
});

router.post('/todos', function (req, res) {

  Todo.create({ title: req.body.title }, function(err, todo) {
    res.send(todo);
  });

});

router.delete('/todos/:id', function(req, res) {
  let id = req.params.id;

  Todo.findByIdAndRemove(id, function(err, todo) {
    res.redirect('/todos');
  });

})

module.exports = router;
