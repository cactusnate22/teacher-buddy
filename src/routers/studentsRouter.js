const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const {Students} = require('../models/student_models');


//create a few students so they are in database?????
// Students.create(
//   'Nathan Ash', ['problem interupting today', 'called classmate bad name']);
// Students.create(
//   'Serena Ash', ['very helpful', 'on task']);

//return JSON of all students on request to root/user page
router.get('/students', (req, res) => {
  res.json(Students.get());
});

// when new student added, ensure has required fields. if not,
// log error and return 400 status code with hepful message.
// if okay, add new item, and return it with a status 201.
router.post('/students', jsonParser, (req, res) => {
  // ensure `name` and `budget` are in request body
  const requiredFields = ['name', 'userId', 'id'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      return res.status(400).send(message);
    }
  }
  const item = Students.create(req.body.name);
  res.status(201).json(item);
});

//delete a student
router.delete('/:id', (req, res) => {
  Students
    .findByIdAndRemove(req.params.id)
    .then(restaurant => res.status(204).end())
    .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

module.exports = router;
