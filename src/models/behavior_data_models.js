'use strict';

const mongoose = require('mongoose');

// this is the schema to represent a behavior behavior_note
const behaviorDataSchema = mongoose.Schema({
    // id: {type: Number, required: true},
  // name: {type: String, required: true},
  // behavior: {type: String, required: true},
  studentId: {type: String, required: true},
  behavior_note: {type: String, required: true}
});

const BehaviorNote = moongoose.model('BehaviorNote', behaviorDataSchema, 'behavior-notes')

module.exports = BehaviorNote;
