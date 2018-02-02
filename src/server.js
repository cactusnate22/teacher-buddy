'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

mongoose.Promise = global.Promise;

const { DATABASE_URL, PORT } = require('../config');
// const { notesEntry } = require('./models');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
  // res.sendFile('./public/index.html');
  // res.status(200).end()
});

//app.post
//app.put
//app.delete

app.use('*', function (req, res) {
  res.status(404).json({ message: 'Not Found' });
});

// when requests come into `/student` or
// `/behavior-notes`, we'll route them to the express
// router instances we've imported. Remember,
// these router instances act as modular, mini-express apps.
app.use('/students', studentRouter);
app.use('/behavior-notes', behaviorNotesRouter);

// closeServer needs access to a server object, but that only
// gets created when `runServer` runs, so we declare `server` here
// and then assign a value to it in run
let server;

// this function connects to our database, then starts the server
function runServer(databaseUrl = DATABASE_URL, port = PORT) {
  return Promise.resolve()
    // .then(() => new Promise((resolve, reject) => {
    //   mongoose.connect(databaseUrl, (err) => {
    //     if (err) return reject(err)
    //
    //     resolve()
    //   })
    //     .on('error', reject)
    // }))
    .then(() => new Promise((resolve, reject) => {
      server = app.listen(port, (error) => {
        if (error) return reject(error)

        console.log(`Your app is listening on port ${port}`)
        resolve()
      })
    }))
    .catch((error) => {
      mongoose.disconnect();
    })
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.

function closeServer() {
  return Promise.resolve()
  // .then(() => mongoose.disconnect())
  .then(() => new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) return reject(err)
      resolve()
    })
  }))
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  // runServer().catch(err => console.error(err));
  runServer(null, process.env.PORT || 8080).catch(err => console.error(err));
}

module.exports = { runServer, app, closeServer };
