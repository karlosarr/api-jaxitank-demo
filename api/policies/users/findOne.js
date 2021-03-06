/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate image create parameters
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = async (req, res, next) => {
  req.body = req.allParams();
  const id = req.body.id ? req.body.id : req.body.idUser;
  const user = await Users.findOne({
    id
  });
  if (!user) {
    return res.badRequest(
      {},
      {
        message: 'The user not exist.'
      }
    );
  }
  req.body.user = user;
  return next();
};
