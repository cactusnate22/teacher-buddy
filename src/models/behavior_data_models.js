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

const Behaviors = {
  create: function(name) {
    const behavior = {
      studentId: studentId,
      behavior_note: behavior_note,
      id: uuid.v4()
    };
    this.behaviors[behavior.id] = behavior;
    return behavior;
  },
  get: function() {
    return Object.keys(this.behaviors).map(key => this.behaviors[key]);
  },
  delete: function(behaviorId) {
    delete this.behaviors[behaviorId];
  },
  update: function(updatedBehavior) {
    const {id} = updatedBehavior;
    if (!(id in this.behaviors)) {
      throw StorageException(
        `Can't update behavior \`${id}\` because doesn't exist.`)
    }
    this.behaviors[updatedBehavior.id] = updatedBehavior;
    return updatedBehavior;
  }
};


function createBehavior() {
  const storage = Object.create(Behaviors);
  storage.behaviors = {};
  return storage;
}

module.exports = {
  Behaviors: createBehavior()
}
