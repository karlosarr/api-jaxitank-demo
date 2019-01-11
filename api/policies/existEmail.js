/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate image create parameters
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = async (req, res, next) => {
  const email = await Users.findOne({
    email: req.body.email
  });
  if (email) {
    return res.badRequest(
      {},
      {
        message: 'The email is already registered.'
      }
    );
  }
  return next();
};
