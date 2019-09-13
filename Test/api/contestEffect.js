var env = require('../helper/index');
var request = require('supertest')(env);
var expect = require('chai').expect;

describe("Look up specific Pokemon effects", function () {

    it("should locate a correct effect by id", function (done) {
        let effectId = 8;
        request
            .get('/contest-effect/' + effectId).end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body.id).to.equal(effectId);
                done(err);
            })
    });

    it("should locate the correct effect name", function (done) {
        let effectId = 7;
        request
            .get('/contest-effect/' + effectId).end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body.effect_entries[0].effect).to
                    .equal("User cannot make any more appeals for the remainder of the contest.");
                done(err);
            })
    });

    it("should not locate an effect ", function (done) {    
        request
          .get('/contest-effect/' + 45454).end(function (err, res) {
            expect(res.statusCode).to.equal(404);
            expect(res.body).to.be.empty;
            done(err);
          })
      });

});