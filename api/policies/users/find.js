/**
 * This function return a message error if str is not a correct json
 *
 * @param {} field name of field
 * @param {*} value the value from request
 */
const validateJSON = value => {
  try {
    return JSON.parse(value);
  } catch (e) {
    e = false;
    return e;
  }
};
/**
 * find.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate image create parameters
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = async (req, res, next) => {
  req.body = req.allParams();

  if (!_.isUndefined(req.body.where)) {
    //transform the where to object
    const jsonSearchObj = validateJSON(req.body.where);

    if (!jsonSearchObj) {
      return res.badRequest(
        {},
        {
          message: 'The params are invalid'
        }
      );
    }

    Object.keys(jsonSearchObj).forEach(key => {
      if (
        !_.contains(['name', 'lastName', 'email', 'id', 'role', 'status'], key)
      ) {
        return res.badRequest(
          {},
          {
            message: 'The params are invalid, verify the params'
          }
        );
      } else {
        req.body.jsonSearchObj = jsonSearchObj;
      }
    });
  }

  /**
   * validate page
   * page should be optional
   * page should be number
   */
  if (!_.isUndefined(req.body.page)) {
    req.body.page = parseInt(req.body.page);
    if (_.isNaN(req.body.page)) {
      return res.badRequest(
        {},
        {
          message: 'The page should be a number'
        }
      );
    }
  }

  /**
   * validate limit
   * limit should be optional
   * limit should be number
   */
  if (!_.isUndefined(req.body.limit)) {
    req.body.limit = parseInt(req.body.limit);
    if (_.isNaN(req.body.limit)) {
      return res.badRequest(
        {},
        {
          message: 'The limit should be a number'
        }
      );
    }
  }

  // Asign default page and limit number
  req.body.page = req.body.page || 1;
  req.body.limit = req.body.limit || 30;

  return next();
};
