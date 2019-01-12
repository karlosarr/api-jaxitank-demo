/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate image create parameters
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
const validateList = (fieldName, value, list) => {
  if (typeof value !== 'string' || _.indexOf(list, value) < 0) {
    return `The ${fieldName} is incorrect`;
  }
  return false;
};
module.exports = async (req, res, next) => {
  if (_.isUndefined(req.body.name) || !_.isString(req.body.name)) {
    return res.badRequest(
      {},
      {
        message: 'The name is required'
      }
    );
  }
  req.body.name = req.body.name.trim();

  /**
   * validate name
   * name should length between 2 to 100 chars
   */
  if (!_.inRange(req.body.name.length, 2, 100)) {
    return res.badRequest(
      {},
      {
        message: 'The name must be 2 to 50 chars'
      }
    );
  }
  /**
   * validate details
   * details should be required
   * details should be string
   */
  if (!_.isUndefined(req.body.details)) {
    if (!_.isString(req.body.details)) {
      return res.badRequest(
        {},
        {
          message: 'The details is required'
        }
      );
    }
    req.body.details = req.body.details.trim();
    /**
     * validate details
     * details should length between 5 to 500 chars
     */
    if (!_.inRange(req.body.details.length, 5, 500)) {
      return res.badRequest(
        {},
        {
          message: 'The details must be 5 to 500 chars'
        }
      );
    }
  }
  /**
   * if is defined
   */
  if (!_.isUndefined(req.body.date)) {
    /**
     * validate if is type date
     */
    let date = new Date(req.body.date);
    if (!date.getDate()) {
      return res.badRequest(
        {},
        {
          message: 'The date is invalid'
        }
      );
    }
  }
  /**
   * validate status
   * The status is incorrect
   */
  if (!_.isUndefined(req.body.status)) {
    const message = validateList('status', req.body.status, [
      'Pending',
      'Finished'
    ]);
    /**
     * status should be valid
     */
    if (message) {
      return res.badRequest(
        {},
        {
          message: message
        }
      );
    }
  }
  /**
   * Validate a userid
   */
  if (_.isUndefined(req.body.idUser) || !_.isString(req.body.idUser)) {
    return res.badRequest(
      {},
      {
        message: 'The idUser is required'
      }
    );
  }
  return next();
};
