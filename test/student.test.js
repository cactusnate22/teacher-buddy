'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../src/server');

const expect = chai.expect;

const {TEST_DATABASE_URL} = require('../config');
// const {app} = require('../src/server');
chai.use(chaiHttp);

describe('GET endpoint', function() {

  it('should return list of students page HTML and 200 status code upon root url hit', function() {
    let res;
    return chai.request(app)
    .get('/students')
    .then(function(_res) {
      res = _res;
      expect(res).to.have.status(200);
    });
  });
});

// POST - it('should add student to list')
describe('POST endpoint', function() {
it('should add new student on POST', function(){
const newStudent = {name: 'Johnny Doolittle'};
  return chai.request(app)
  .post('/students')
  .send(newStudent)
  .then(function(res) {
    res.should.have.status(201);
    res.should.be.json;
    res.body.should.be.a('object');
    res.body.should.include.keys('name');
    res.body.name.should.equal(newStudent.name);
    });
  });
});


//DELETE - it('should delete student from list')
it('should delete student on DELETE', function() {
  return chai.request(app)
    // first have to get so we have an `id` of item
    // to delete
    .get('/students')
    .then(function(res) {
      return chai.request(app)
        .delete(`/students/${res.body[0].id}`);
    })
    .then(function(res) {
      res.should.have.status(204);
    });
});
