require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') })

const debug = require('debug')('tb:server')

// const bodyParser = require('body-parser');
const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

mongoose.Promise = global.Promise;

debug('process.env.DATABASE_URL', process.env.DATABASE_URL)

const { DATABASE_URL, PORT } = require('../config');

debug('DATABASE_URL', DATABASE_URL)

const app = express();

const usersRouter = require('./routers/usersRouter');

// const studentsRouter = require('./routers/studentsRouter');
// app.use('/api/students', studentsRouter);
// app.use('/api/behavior-notes', behaviorNotesRouter);
app.use('/api/users', usersRouter);

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('*', function (req, res) {
  res.status(404).json({ message: 'Not Found' });
});

// closeServer needs access to a server object, but that only
// gets created when `runServer` runs, so we declare `server` here
// and then assign a value to it in run
let server;

// this function connects to our database, then starts the server
function runServer(databaseUrl = DATABASE_URL, port = PORT) {
  console.log('runServer', typeof databaseUrl, databaseUrl, typeof port, port);

  return Promise.resolve()
    .then(() => new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, (err) => {
        if (err) return reject(err)

        resolve()
      })
    }))
    .then(() => new Promise((resolve, reject) => {
      server = app.listen(port, (error) => {
        if (error) return reject(error)

        console.log(`Your app is listening on port ${port}`)
        resolve()
      })
    }))
    .catch((error) => {
      console.log('Something went wrong while running runServer')
      console.error(error);
      mongoose.disconnect();
    })
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.

function closeServer() {
  return Promise.resolve()
  .then(() => mongoose.disconnect())
  .then(() => new Promise((resolve, reject) => {
    if (!server) return resolve()

    server.close((err) => {
      if (err) return reject(err)
      resolve()
    })
  }))
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  console.log('Starting the app');

  runServer()
    .catch(err => {
      console.error('Something went wrong while starting the app')
      console.error(err)
      process.exit()
    });
  // runServer(DATABASE_URL, process.env.PORT || 8080).catch(err => console.error(err));
}

module.exports = { runServer, app, closeServer };
