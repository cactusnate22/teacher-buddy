'use strict';

const mongoose = require('mongoose');

// this is the schema to represent a behavior note
const behaviorDataSchema = mongoose.Schema({
    // id: {type: Number, required: true},
  name: {type: String, required: true},
  user: {type: String, required: true},
  note: {type: String, required: true}
});
