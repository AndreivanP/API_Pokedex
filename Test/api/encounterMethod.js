var env = require('../helper/index');
var request = require('supertest')(env);
var expect = require('chai').expect;

describe("Look up encounter method and its properties", function () {

    it("should locate the correct name by id", function (done) {
        let encId = 11;
        request
            .get('/encounter-method/' + encId).end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body.id).to.equal(encId);
                expect(res.body.name).to.equal("bridge-spots");
                done(err);
            })
    });

    it("should locate the correct encounter description by name", function (done) {
        let encName = "bridge-spots";
        request
            .get('/encounter-method/' + encName).end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body.id).to.equal(11);
                expect(res.body.names[1].name).to.equal("Walking in bridge shadows");
                done(err);
            })
    });

    it("should not locate an encounter method", function (done) {    
        request
          .get('/encounter-method/' + 333).end(function (err, res) {
            expect(res.statusCode).to.equal(404);
            expect(res.body).to.be.empty;
            done(err);
          })
      });

});