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
  const task = await Tasks.findOne({
    id: req.body.id
  });
  if (!task) {
    return res.badRequest(
      {},
      {
        message: 'The task not exist.'
      }
    );
  }
  req.body.task = task;
  return next();
};
