var env = require('../helper/index');
var request = require('supertest')(env);
var expect = require('chai').expect;

describe("Look up evolution chain values", function () {

  it("should locate the level minimum", function (done) {
    let eveID = 5;
    request
      .get('/evolution-chain/' + eveID).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.chain.evolves_to[0].evolution_details[0].min_level).to.equal(7);
        done(err);
      })
  });

  it("should not locate an evolution chain", function (done) {    
    request
      .get('/evolution-chain/' + 45454).end(function (err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.be.empty;
        done(err);
      })
  });

});