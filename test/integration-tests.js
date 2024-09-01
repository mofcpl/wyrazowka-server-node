const chaiModule = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app');

const chai = chaiModule.use(chaiHttp)

describe('/length', function() {
    it('it should return length of shortest and longest word in dictionary', function(done) {
        chai.request(server)
            .get('/length')
            .end(function(err, response) {
                response.should.have.status(200);
                response.body.should.be.a('array');
                
            })
    })
})