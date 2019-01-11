const path = '/users';
const tests = require('./providers/findOne.js');

describe('Users API 👥', () => {
  describe('Finding One 🕵 ', () => {
    tests.data.forEach(test => {
      it(test.title, done => {
        let route = `${path}/${test.id}`;
        chai
          .request(server)
          .get(route)
          .end((err, res) => {
            if (err) {
              console.error(err);
            }
            console.log(
              'CODE: ',
              res.status,
              '| CODE expect: ',
              test.expect.code
            );
            console.log(
              'MESSAGE: ',
              res.body.message,
              '| MESSAGE expect: ',
              test.expect.message
            );
            checkHeaders(res, test.expect.status);
            res.body.code.should.be.equal(test.expect.code);
            res.body.message.should.be.equal(test.expect.message);
            done();
          });
      });
    });
  });
});
