'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const {TEST_DATABASE_URL} = require('../config');
const {app} = require('../src/server');
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
