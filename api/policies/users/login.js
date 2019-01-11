/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate image create parameters
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = async (req, res, next) => {
  /**
   * validate email
   * email should be required
   * email should be string
   */
  if (_.isUndefined(req.body.email) || !_.isString(req.body.email)) {
    return res.badRequest(
      {},
      {
        message: 'The email is required'
      }
    );
  }
  /**
   * validate password
   * password should be required
   * password should be string
   */
  if (_.isUndefined(req.body.password) || !_.isString(req.body.password)) {
    return res.badRequest(
      {},
      {
        message: 'The password is required'
      }
    );
  }
  const user = await Users.findOne({
    email: req.body.email
  });
  if (!user) {
    return res.badRequest(
      {},
      {
        message: 'The email or password are incorrect.'
      }
    );
  }
  const userValid = await sails.helpers.validatePassword.with({
    password: req.body.password,
    passwordEncrypt: user.password
  });
  if (!userValid) {
    return res.badRequest(
      {},
      {
        message: 'The email or password are incorrect.'
      }
    );
  }
  req.body.user = user;
  return next();
};
