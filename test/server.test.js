require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
// console.log(__dirname + '/../.env');
// console.log('.env file path', require('path').resolve(__dirname, '../.env'));
// process.exit(1)
// mocha test/server.test.js

const chai = require('chai');

chai.use(require('chai-http'));
const expect = chai.expect;

const {TEST_DATABASE_URL} = require('../config');
const {app, runServer, closeServer} = require('../src/server');

describe('Teacher Buddy', function () {
  before(() => runServer(TEST_DATABASE_URL, 8080))
  after(closeServer)

  it('has a welcome page', function () {
    return chai.request(app)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
      });
  });

  describe('API', function () {
    describe('/users endpoint', function () {
      it('lists all users', () => {
        chai.request(app)
          .get('/api/users')
          .then(res => {
            expect(res).to.have.status(200)
            expect(res).to.be.json
            expect(res.body).to.be.an('array')
          })
      })

      it('create a new user')
    })

    describe('/users/:id endpoint', function () {
      it('shows a single user')

      it('updates a single user')

      it('deletes a single user')
    })

    describe('/students endpoint', function () {
      it('lists all students')

      it('create a new student')
    })

    describe('/students/:id endpoint', function () {
      it('shows a single student')

      it('updates a single student')

      it('deletes a single student')
    })

    describe('/behavior-notes endpoint', function () {
      it('lists all behavior notes')

      it('create a new behavior note')
    })

    describe('/behavior-notes/:id endpoint', function () {
      it('shows a single behavior note')

      it('updates a single behavior note')

      it('deletes a single behavior note')
    })
  })
});
