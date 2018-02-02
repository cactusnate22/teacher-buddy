'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../src/server');

const expect = chai.expect;

const {TEST_DATABASE_URL} = require('../config');
// const {app} = require('../src/server');
chai.use(chaiHttp);

describe('GET endpoint', function() {

  it('should return HTML and 200 status code upon root url hit', function() {

    let res;
    return chai.request(app)
    .get('/')
    .then(function(_res) {
      res = _res;
      expect(res).to.have.status(200);
    });
  });
});

//GET it('should return list of students')
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
it('should add new student on POST', function(){
const newStudent = {first_name: 'John', last_name: 'Doe'};
  return chai.request(app)
  .post('/students')
  .send(newStudent)
  .then(function(res) {
    res.should.have.status(201);
    res.should.be.json;
    res.body.should.be.a('object');
    res.body.should.include.keys('first_name', 'last_name');
    res.body.name.should.equal(newStudent.name);
    });
  });


//DELETE - it('should delete behavior from student record')
