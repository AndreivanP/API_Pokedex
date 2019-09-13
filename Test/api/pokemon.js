var env = require('../helper/index');
var request = require('supertest')(env);
var expect = require('chai').expect;

describe("Look up Pokemons", function () {

  it("should locate a correct pokemon by name", function (done) {  
    let pokeName = "beedrill"    
    request
      .get('/pokemon/' + pokeName).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.name).to.equal(pokeName);
        done(err);
      })
  });

  it("should locate a correct pokemon by id", function (done) {      
    request
      .get('/pokemon/' + 15).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.name).to.equal("beedrill");
        done(err);
      })
  });

  it("should not locate a pokemon by name", function (done) {    
    request
      .get('/pokemon/' + "beedrill1").end(function (err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.be.empty;
        done(err);
      })
  });

});