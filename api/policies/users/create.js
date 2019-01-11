/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate image create parameters
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
const phoneValidation = require('phone');
const validateList = (fieldName, value, list) => {
  if (typeof value !== 'string' || _.indexOf(list, value) < 0) {
    return `The ${fieldName} is incorrect`;
  }
  return false;
};
module.exports = async (req, res, next) => {
  /**
   * validate name
   * name should be required
   * name should be string
   */
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
   * name should length between 2 to 50 chars
   */
  if (!_.inRange(req.body.name.length, 2, 50)) {
    return res.badRequest(
      {},
      {
        message: 'The name must be 2 to 50 chars'
      }
    );
  }
  /**
   * validate lastName
   * lastName should be required
   * name should be string
   */
  if (_.isUndefined(req.body.lastName) || !_.isString(req.body.lastName)) {
    return res.badRequest(
      {},
      {
        message: 'The lastName is required'
      }
    );
  }
  req.body.lastName = req.body.lastName.trim();
  /**
   * validate lastName
   * lastName should length between 2 to 50 chars
   */
  if (!_.inRange(req.body.lastName.length, 2, 50)) {
    return res.badRequest(
      {},
      {
        message: 'The lastName must be 2 to 50 chars'
      }
    );
  }
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
   * validate email
   * email should length between 5 to 70 chars
   */
  if (!_.inRange(req.body.email.length, 5, 70)) {
    return res.badRequest(
      {},
      {
        message: 'The email must be 5 to 70 chars'
      }
    );
  }

  /**
   * validate email
   * email should be valid
   */
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let testEmail = regexEmail.test(req.body.email);
  if (!testEmail) {
    return res.badRequest(
      {},
      {
        message: 'The email isn´t valid'
      }
    );
  }
  /**
   * validate status
   */
  if (!_.isUndefined(req.body.status)) {
    let message = validateList('status', req.body.status, [
      'Active',
      'Pending',
      'Banned',
      'Inactive'
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
   * validate phone
   * phone should be required
   * phone should be string
   */
  if (_.isUndefined(req.body.phone) || !_.isString(req.body.phone)) {
    return res.badRequest(
      {},
      {
        message: 'The phone is required'
      }
    );
  }

  /**
   * validate phone
   * phone must have the country code
   */
  if (!phoneValidation(req.body.phone).length || req.body.phone[0] !== '+') {
    return res.badRequest(
      {},
      {
        message: `The phone isn't valid`
      }
    );
  }
  /**
   * validate role
   */
  if (!_.isUndefined(req.body.role)) {
    message = validateList('role', req.body.role, [
      'Guest',
      'Member',
      'Staff',
      'Administrator'
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
  /**
   * validate password
   * password should length between 8 to 100 chars
   */
  if (!_.inRange(req.body.password.length, 8, 100)) {
    return res.badRequest(
      {},
      {
        message: 'The password must be 8 to 100 chars'
      }
    );
  }
  /**
   * validate passwordConfirm
   * passwordConfirm should be required
   * passwordConfirm should be string
   */
  if (
    _.isUndefined(req.body.passwordConfirm) ||
    !_.isString(req.body.passwordConfirm)
  ) {
    return res.badRequest(
      {},
      {
        message: 'The passwordConfirm is required'
      }
    );
  }
  /**
   * validate passwordConfirm
   * passwordConfirm should length between 8 to 100 chars
   */
  if (!_.inRange(req.body.passwordConfirm.length, 8, 100)) {
    return res.badRequest(
      {},
      {
        message: 'The passwordConfirm must be 8 to 100 chars'
      }
    );
  }
  if (req.body.password !== req.body.passwordConfirm) {
    return res.badRequest(
      {},
      {
        message: 'The passwords must be equal'
      }
    );
  }
  return next();
};
