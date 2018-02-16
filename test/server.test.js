const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../src/server');

const expect = chai.expect;

const {TEST_DATABASE_URL} = require('../config');

chai.use(chaiHttp);


describe('Teacher Buddy', function () {
  // before(runServer)
  // after(closeServer)

  it('has a Welcome page', function () {
    return chai.request(app)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
      })
  });
})


// describe('GET endpoint', function() {
//
//   it('should return HTML and 200 status code upon root url hit', function() {
//
//     let res;
//     return chai.request(app)
//     .get('/')
//     .then(function(_res) {
//       res = _res;
//       expect(res).to.have.status(200);
//     });
//   });
// });
