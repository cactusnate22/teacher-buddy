'use strict';

const mongoose = require('mongoose');

// this is the schema to represent a user
const userSchema = mongoose.Schema({
  // id: {type: Number, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

const Users = {
  create: function(name) {
    const user = {
      name: name,
      email: email,
      password: password,
      id: uuid.v4()
    };
    this.users[user.id] = user;
    return user;
  },
  get: function() {
    return Object.keys(this.users).map(key => this.users[key]);
  },
  delete: function(userId) {
    delete this.users[userId];
  },
  update: function(updatedUser) {
    const {id} = updatedUser;
    if (!(id in this.users)) {
      throw StorageException(
        `Can't update user \`${id}\` because doesn't exist.`)
    }
    this.users[updatedUser.id] = updatedUser;
    return updatedUser;
  }
};


function createUser() {
  const storage = Object.create(Users);
  storage.users = {};
  return storage;
}

module.exports = {
  Users: createUser()
}
