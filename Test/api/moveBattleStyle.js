var env = require('../helper/index');
var request = require('supertest')(env);
var expect = require('chai').expect;

describe("Look up battle styles", function () {

  it("should locate a correct battle styles by name", function (done) {      
    request
      .get('/move-battle-style/' + "defense").end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.names[1].name).to.equal("Defense");
        done(err);
      })
  });

  it("should not locate a battle styles by name", function (done) {    
    request
      .get('/move-battle-style/' + "xyz").end(function (err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.be.empty;
        done(err);
      })
  });

});