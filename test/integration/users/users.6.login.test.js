const path = '/users/login';
const tests = require('./providers/login.js');

describe('Users API 👥', () => {
  describe('Login 🔐 ', () => {
    tests.data.forEach(test => {
      it(test.title, done => {
        chai
          .request(server)
          .post(path)
          .send(test.data)
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
