const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const {User} = require('./models/user_models');

router.get('./public/user', (req, res) => {
  res.json(User.get());
});

module.exports = router;
