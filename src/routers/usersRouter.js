const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const {User} = require('../models/user_models');

//I SHOULD NEED ACCESS TO MODEL TO POST NEW Student
//.......TO LIST
const {Students} = require('../models/student_models');

//DO I NEED THIS TO ACCESS USER.HTML????
// router.use(express.static('public'));

router.get('/user', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/user.html'))
});

// router.get('./public/user', (req, res) => {
//   res.json(User.get());
// });

//USER SHOULD BE ABLE TO CREATE NEW STUDENT AND
//...PAGE REFRESHES UPON SUBMIT
// router.post('/user', jsonParser, (req, res) => {
//   const requiredFields = ['name', 'userId', 'id'];
//   for (let i=0; i<requiredFields.length; i++) {
//     const field = requiredFields[i];
//     if (!(field in req.body)) {
//       const message = `Missing \`${field}\` in request body`
//       return res.status(400).send(message);
//     }
//   }
//   const item = Students.create(req.body.name);
//   res.status(201).json(item);
// });

//USER SHOULD BE ABLE TO SELECT STUDENT AND BE
//...REDIRECTED TO THAT PAGE

module.exports = router;
