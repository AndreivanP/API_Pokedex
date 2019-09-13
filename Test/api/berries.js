var env = require('../helper/index');
var request = require('supertest')(env);
var expect = require('chai').expect;

describe("Look up specific berry and its properties", function () {

  it("should locate a correct berry name", function (done) {
    let berryName = 'pecha';
    request
      .get('/berry/' + berryName).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.name).to.equal(berryName);
        done(err);
      })
  });

  it("should locate a correct item name", function (done) {
    let berryName = 'persim';
    request
      .get('/berry/' + berryName).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.item.name).to.equal(berryName + "-berry");
        done(err);
      })
  });

  it("should locate the attribute values from size, smoothnees and soil_dryness", function (done) {
    let berryName = 'colbur';
    request
      .get('/berry/' + berryName).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.size).to.equal(39);
        expect(res.body.smoothness).to.equal(35);
        expect(res.body.soil_dryness).to.equal(6);
        done(err);
      })
  });

  it("should not locate an incorrect item name", function (done) {
    let berryName = 'x32cd';
    request
      .get('/berry/' + berryName).end(function (err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.be.empty;
        done(err);
      })
  });

  it("should bring the 20 first values", function (done) {
    request
      .get('/berry/').end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.results).to.be.an('array');
        expect(res.body.results).to.have.length(20);
        done(err);
      })
  });

})
