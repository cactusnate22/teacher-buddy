const mongoose = require('mongoose');

// this is the schema to represent a user
const schema = mongoose.Schema({
  // id: {type: Number, required: true},
  name: {type: String, required: true},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

const Student = mongoose.model('Student', schema, 'students');

module.exports = Student;
