var env = require('../helper/index');
var request = require('supertest')(env);
var expect = require('chai').expect;

describe("Look up specific item and its properties", function () {

  it("should locate a correct item attribute name by id", function (done) {    
    request
      .get('/item/' + 4).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.attributes[1].name).to.equal("usable-in-battle");
        done(err);
      })
  });

  it("should not locate an item attribute name by id", function (done) {    
    request
      .get('/item/' + 454545).end(function (err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.be.empty;
        done(err);
      })
  });

});