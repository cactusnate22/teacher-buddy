const mongoose = require('mongoose');

// this is the schema to represent a user
const userSchema = mongoose.Schema({
  // id: {type: Number, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
